import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS — only allow your frontend in production
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',').map((u) => u.trim())
  : ['http://localhost:5173', 'http://127.0.0.1:5173'];

app.use(
  cors({
    origin(origin, cb) {
      // allow requests with no origin (mobile apps, curl, etc.) in dev
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
        return cb(null, true);
      }
      return cb(new Error('Blocked by CORS'));
    },
    methods: ['POST'],
  })
);

app.use(express.json({ limit: '10kb' }));

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Rate limiting: 5 contact submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: 'Too many submissions. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Contact endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, service, budget, message, timestamp } = req.body;

    // Validation
    const errors = {};
    if (!name || typeof name !== 'string' || name.trim().length < 2)
      errors.name = 'Name is required';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = 'Valid email is required';
    if (!phone || typeof phone !== 'string')
      errors.phone = 'Phone is required';
    if (!service || typeof service !== 'string')
      errors.service = 'Service is required';
    if (!message || typeof message !== 'string' || message.trim().length < 10)
      errors.message = 'Message is required (min 10 characters)';

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors });
    }

    // Sanitize
    const sanitize = (str) =>
      String(str || '')
        .replace(/[<>]/g, '')
        .trim()
        .slice(0, 2000);

    const data = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone),
      service: sanitize(service),
      budget: budget ? sanitize(budget) : 'Not specified',
      message: sanitize(message),
      timestamp: timestamp || new Date().toISOString(),
    };

    // Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
      console.warn('RESEND_API_KEY or CONTACT_EMAIL not set. Logging email payload:');
      console.log(data);
      return res.json({
        success: true,
        message: 'Message received (dev mode — email not sent).',
      });
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Website Contact <onboarding@resend.dev>',
        to: contactEmail,
        reply_to: data.email,
        subject: `New Project Inquiry — ${data.service}`,
        text: `New inquiry from your website:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nBudget: ${data.budget}\nTimestamp: ${data.timestamp}\n\nMessage:\n${data.message}`,
        html: `
          <h2>New inquiry from your website</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
            <tr><td style="padding:4px 12px;font-weight:bold">Name:</td><td>${data.name}</td></tr>
            <tr><td style="padding:4px 12px;font-weight:bold">Email:</td><td>${data.email}</td></tr>
            <tr><td style="padding:4px 12px;font-weight:bold">Phone:</td><td>${data.phone}</td></tr>
            <tr><td style="padding:4px 12px;font-weight:bold">Service:</td><td>${data.service}</td></tr>
            <tr><td style="padding:4px 12px;font-weight:bold">Budget:</td><td>${data.budget}</td></tr>
            <tr><td style="padding:4px 12px;font-weight:bold">Timestamp:</td><td>${data.timestamp}</td></tr>
          </table>
          <h3 style="font-family:sans-serif">Message</h3>
          <p style="font-family:sans-serif;white-space:pre-wrap">${data.message}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorBody = await emailResponse.text().catch(() => 'Unknown error');
      console.error('Resend API error:', emailResponse.status, errorBody);
      return res.status(502).json({
        message: 'Failed to send email. Please try again or reach out on WhatsApp.',
      });
    }

    const emailResult = await emailResponse.json().catch(() => ({}));
    console.log('Email sent successfully via Resend:', emailResult.id || 'OK');

    return res.json({ success: true, message: 'Inquiry sent successfully.' });
  } catch (err) {
    console.error('Contact endpoint error:', err);
    return res.status(500).json({
      message: 'Something went wrong on our end. Please try again or reach out on WhatsApp.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
