# YOUR STUDIO NAME — Creative Agency Website

A modern, premium, dark-first agency website for a two-person creative studio offering **Video Editing** and **Website Development** services.

Built with React, Vite, Framer Motion, Tailwind CSS, and Lucide React. Includes a separate Express backend for handling contact form submissions via the Resend email API.

---

## Project Structure

```
/
├── frontend/              ← React + Vite (deploy to Vercel)
│   ├── src/
│   │   ├── data/          ← ALL editable content lives here
│   │   │   ├── siteConfig.js  ← Studio name, email, WhatsApp, socials, SEO
│   │   │   ├── founders.js    ← Founder cards, "why work with us", process steps
│   │   │   ├── services.js    ← Service titles, descriptions, feature lists
│   │   │   ├── projects.js    ← Portfolio projects (videos + websites)
│   │   │   └── testimonials.js ← Testimonials (currently placeholders)
│   │   ├── components/    ← UI components
│   │   ├── hooks/
│   │   │   └── useTheme.js ← Dark/light mode toggle
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   │   ├── favicon.svg
│   │   └── assets/
│   │       ├── images/    ← Put founder photos + OG cover here
│   │       └── videos/    ← Put video files here
│   ├── .env.example
│   └── package.json
│
├── backend/               ← Node.js + Express (deploy to Render)
│   ├── index.js           ← Contact API + Resend email integration
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## Quick Start

### 1. Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Runs at `http://localhost:5173`.

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env   # then add your RESEND_API_KEY and CONTACT_EMAIL
npm run dev
```

Runs at `http://localhost:3001`.

---

## Contact Form Flow

1. Visitor fills out the form (name, email, phone, service, budget, message).
2. Frontend validates required fields and email format.
3. Frontend sends `POST /api/contact` to the backend (`VITE_API_BASE_URL`).
4. Backend validates and sanitizes the input.
5. Backend sends the inquiry email via the **Resend API** to your `CONTACT_EMAIL`.
6. Backend returns success **only** if Resend confirms the email was sent.
7. If anything fails, the frontend shows an error toast and suggests WhatsApp.

The form **does not** fake success. If the backend is not configured or Resend fails, the visitor sees an error message.

---

## WhatsApp Integration

WhatsApp uses a simple **Click-to-Chat** link (`wa.me`) — no API required.

- The WhatsApp number is stored in `frontend/src/data/siteConfig.js` → `whatsappNumber`.
- The floating WhatsApp button and contact form both generate a URL-encoded message.
- The "Send via WhatsApp" button builds a message from the current form fields and opens `wa.me` in a new tab.

To change the number, edit `whatsappNumber` and `whatsappDisplay` in `siteConfig.js`.

---

## Environment Variables

### Frontend (`frontend/.env`)

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Backend API URL (e.g. `http://localhost:3001` locally, your Render URL in production) |

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `PORT` | Server port (default `3001`) |
| `FRONTEND_URL` | Allowed CORS origin(s), comma-separated |
| `RESEND_API_KEY` | Your Resend API key (get one at https://resend.com/api-keys) |
| `CONTACT_EMAIL` | Email address where inquiries are delivered |

**Never expose `RESEND_API_KEY` in the frontend.** It only lives in `backend/.env`.

---

## How to Customize Your Content

Everything is in `frontend/src/data/`. You rarely need to touch components.

### Change Studio Name
Edit `siteConfig.js` → `name` field.

### Change WhatsApp Number
Edit `siteConfig.js` → `whatsappNumber` (international format, no `+` or spaces, e.g. `919999999999`) and `whatsappDisplay`.

### Change Email Address
Edit `siteConfig.js` → `email` (this is the public email shown on the site; `CONTACT_EMAIL` in the backend is where inquiries are delivered).

### Add / Change Social Links
Edit `siteConfig.js` → `social` object. Set a URL to show the icon, or `''` to hide it. Supported: `instagram`, `linkedin`, `github`, `youtube`, `whatsapp`.

### Change Founder Names, Roles, Photos, Bios
Edit `founders.js` → `founders` array. Put photos in `frontend/public/assets/images/` and reference them as `/assets/images/founder-1.jpg`.

### Change Services
Edit `services.js`. Each service has an `icon`, `title`, `shortDescription`, `features` array, and `accent` (gradient).

### Add a Portfolio Project
Edit `projects.js` and add an object to the array.

**Video project:**
```js
{
  id: 7,
  type: 'video',
  title: 'Project Name',
  category: 'YouTube Editing',
  thumbnail: '/assets/images/my-thumb.jpg',
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  videoType: 'youtube',
  duration: '10:30',
  description: 'What this project involved...',
  services: ['Editing', 'Color Correction'],
  featured: false,
  clientType: 'YouTuber',
  completedDate: '2026-04',
}
```

**Website project:**
```js
{
  id: 8,
  type: 'website',
  title: 'Project Name',
  category: 'Web Development',
  thumbnail: '/assets/images/my-thumb.jpg',
  liveUrl: 'https://the-live-site.com',
  technologies: ['React', 'Tailwind CSS'],
  description: 'What this project involved...',
  services: ['Design', 'Development'],
  featured: false,
  clientType: 'Startup',
  completedDate: '2026-04',
}
```

Set `featured: true` to show a project in the large Featured Project section.

### Change Testimonials
Edit `testimonials.js`. The current testimonials are **placeholder samples** — replace them with real client quotes before publishing.

---

## Deployment

### Frontend → Vercel
1. Push to GitHub.
2. Import the repo in Vercel. Set the **Root Directory** to `frontend`.
3. Framework preset: Vite. Build command: `npm run build`. Output: `dist`.
4. Add environment variable: `VITE_API_BASE_URL` = your deployed backend URL.

### Backend → Render
1. Create a new Web Service on Render. Set the **Root Directory** to `backend`.
2. Build command: `npm install`. Start command: `npm start`.
3. Add environment variables: `PORT`, `FRONTEND_URL`, `RESEND_API_KEY`, `CONTACT_EMAIL`.
4. After deploy, copy the Render URL (e.g. `https://your-backend.onrender.com`) and set it as `VITE_API_BASE_URL` on Vercel.

---

## Features

- Dark/light mode toggle (defaults to dark, saved locally)
- Sticky responsive navbar with scroll-aware styling
- Animated hero with floating preview cards and gradient blobs
- Services section with feature lists and hover animations
- Portfolio with filter tabs (All / Videos / Websites)
- Video modal with embedded YouTube/Vimeo player
- Website project modal with live link
- Featured project section with alternating layout
- About section with founder cards and "why work with us"
- 4-step process section
- Why choose us cards
- Testimonials carousel (placeholder content clearly marked)
- Contact form with validation, loading state, duplicate prevention
- WhatsApp floating button + "Send via WhatsApp" form option
- Toast notifications
- SEO meta tags, Open Graph, semantic HTML
- Fully responsive (375px → 1440px+)
- Keyboard accessible, ARIA labels, focus states
- Respects `prefers-reduced-motion`

---

## Tech Stack

**Frontend:** React, Vite, Framer Motion, Tailwind CSS, Lucide React
**Backend:** Node.js, Express, Resend API, express-rate-limit
**Email:** Resend API
**WhatsApp:** Click-to-Chat (wa.me) links
**No database** — structured so one can be added later

---

© 2026 YOUR STUDIO NAME. All rights reserved.
