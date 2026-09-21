import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middleware ---

// CORS: allow your frontend domain. Set FRONTEND_URL in .env.
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',').map((u) => u.trim())
  : ['http://localhost:5173', 'http://localhost:4173'];

app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error('Not allowed by CORS'));
    },
  })
);

app.use(express.json({ limit: '10kb' }));

// --- Rate limiting: 5 contact submissions per 15 minutes per IP ---
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: 'Too many submissions. Please try again later.' },
});

// --- Health check ---
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// --- Contact endpoint ---
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, service, budget, message, timestamp } = req.body;

    // --- Validation ---
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
      errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors });
    }

    // --- Sanitize (basic) ---
    const sanitize = (str) =>
      String(str).replace(/[<>]/g, '').trim().slice(0, 2000);

    const data = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone),
      service: sanitize(service),
      budget: budget ? sanitize(budget) : 'Not specified',
      message: sanitize(message),
      timestamp: timestamp || new Date().toISOString(),
    };

    // --- Resend API ---
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey) {
      console.error('[Contact] RESEND_API_KEY is not set. Cannot send email.');
      return res.status(500).json({
        message: 'Email service is not configured. Please WhatsApp us instead.',
      });
    }

    if (!contactEmail) {
      console.error('[Contact] CONTACT_EMAIL is not set. Cannot send email.');
      return res.status(500).json({
        message: 'Contact email is not configured. Please WhatsApp us instead.',
      });
    }

    // Send via Resend REST API
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
        text: `New inquiry from your website:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}
Budget: ${data.budget}
Timestamp: ${data.timestamp}

Message:
${data.message}`,
        html: `<h2>New inquiry from your website</h2>
<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
<tr><td style="padding:4px 12px;font-weight:bold">Name:</td><td>${data.name}</td></tr>
<tr><td style="padding:4px 12px;font-weight:bold">Email:</td><td>${data.email}</td></tr>
<tr><td style="padding:4px 12px;font-weight:bold">Phone:</td><td>${data.phone}</td></tr>
<tr><td style="padding:4px 12px;font-weight:bold">Service:</td><td>${data.service}</td></tr>
<tr><td style="padding:4px 12px;font-weight:bold">Budget:</td><td>${data.budget}</td></tr>
<tr><td style="padding:4px 12px;font-weight:bold">Timestamp:</td><td>${data.timestamp}</td></tr>
</table>
<h3 style="font-family:sans-serif">Message</h3>
<p style="font-family:sans-serif;white-space:pre-wrap">${data.message}</p>`,
      }),
    });

    if (!emailResponse.ok) {
      const errorBody = await emailResponse.text().catch(() => 'Unknown error');
      console.error('[Contact] Resend API error:', emailResponse.status, errorBody);
      return res.status(502).json({
        message: 'Failed to send email. Please try again or WhatsApp us.',
      });
    }

    const emailResult = await emailResponse.json().catch(() => ({}));
    console.log('[Contact] Email sent via Resend:', emailResult.id || 'OK');

    return res.json({ success: true, message: 'Inquiry sent successfully.' });
  } catch (err) {
    console.error('[Contact] Error:', err);
    return res.status(500).json({
      message: 'Something went wrong on our end. Please try again or WhatsApp us.',
    });
  }
});

// --- 404 ---
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
