import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// CORS setup
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',').map((u) => u.trim())
  : ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://0.0.0.0:3000'];

app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
        return cb(null, true);
      }
      return cb(null, true);
    },
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
});

// Contact endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, service, budget, message, timestamp } = req.body;

    // Validation
    const errors: Record<string, string> = {};
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

    const sanitize = (str: unknown) =>
      String(str || '').replace(/[<>]/g, '').trim().slice(0, 2000);

    const data = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone),
      service: sanitize(service),
      budget: budget ? sanitize(budget) : 'Not specified',
      message: sanitize(message),
      timestamp: timestamp || new Date().toISOString(),
    };

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    // If Resend is not configured, gracefully simulate success in dev / unconfigured environments
    if (!resendApiKey || !contactEmail) {
      console.log(
        '[Contact] Received submission (email simulated - set RESEND_API_KEY & CONTACT_EMAIL for live sending):',
        data
      );
      return res.json({
        success: true,
        message: 'Inquiry received successfully.',
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
        text: `New inquiry from your website:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nBudget: ${data.budget}\nTimestamp: ${data.timestamp}\n\nMessage:\n${data.message}`,
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

    const emailResult = (await emailResponse.json().catch(() => ({}))) as { id?: string };
    console.log('[Contact] Email sent via Resend:', emailResult.id || 'OK');

    return res.json({ success: true, message: 'Inquiry sent successfully.' });
  } catch (err) {
    console.error('[Contact] Error:', err);
    return res.status(500).json({
      message: 'Something went wrong on our end. Please try again or WhatsApp us.',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
