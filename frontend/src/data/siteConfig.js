// Central site configuration — edit this file to change brand-wide details.
// Everything here flows into every component, so you only change content in one place.

export const siteConfig = {
  name: 'YOUR STUDIO NAME',
  tagline: 'We Edit. We Build. We Create.',
  // Short description used in footer and meta tags
  description:
    'A two-person creative studio helping creators and businesses turn ideas into engaging videos and modern websites.',
  // Contact details — also configurable via backend environment variables
  email: 'mdsalmand008@gmail.com',
  whatsappNumber: '917358653020', // international format, no + or spaces
  whatsappDisplay: '+91 73586 53020',
  // Social links — leave empty string to hide the icon
  social: {
    instagram: 'https://instagram.com/yourhandle',
    linkedin: 'https://linkedin.com/company/yourhandle',
    github: 'https://github.com/yourhandle',
    youtube: 'https://youtube.com/@yourhandle',
    whatsapp: 'https://wa.me/917358653020',
  },
  // SEO
  seo: {
    title: 'The SB Creation — Video Editing & Web Development Studio',
    description:
      'We help creators, YouTubers, and businesses turn ideas into engaging videos and modern websites. Video editing, web development, and creative solutions.',
    url: 'https://yourstudioname.com',
    ogImage: '/assets/images/og-cover.jpg',
  },
  // Year for footer copyright
  foundedYear: 2026,
};

// Navigation links
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// Budget options for the contact form
export const budgetOptions = [
  'Under ₹5,000',
  '₹5,000 – ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000+',
  'Not sure yet',
];

// Service options for the contact form
export const serviceOptions = ['Video Editing', 'Website Development', 'Both', 'Other'];

// API endpoint for the contact form. When empty, the form falls back to mailto.
export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
