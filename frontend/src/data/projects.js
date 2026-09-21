// Portfolio projects. Add a new project by adding an object to this array.
//
// Video project example:
//   { id, type: 'video', title, category, thumbnail, videoUrl, description, featured }
//
// Website project example:
//   { id, type: 'website', title, category, thumbnail, liveUrl, technologies, description, featured }
//
// Thumbnails use Pexels stock URLs as placeholders. Replace with your own assets
// in /public/assets/images/ when ready.

export const projects = [
  // ---- VIDEO PROJECTS ----
  {
    id: 1,
    type: 'video',
    title: 'Creator YouTube Series',
    category: 'YouTube Editing',
    thumbnail: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=900',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    duration: '12:45',
    description:
      'A long-form YouTube edit with motion graphics, color correction, and clean audio. Focused on retention and pacing.',
    services: ['Editing', 'Color Correction', 'Motion Graphics', 'Subtitles'],
    featured: true,
    clientType: 'YouTuber',
    completedDate: '2026-02',
  },
  {
    id: 2,
    type: 'video',
    title: 'Brand Promo Reel',
    category: 'Promotional Video',
    thumbnail: 'https://images.pexels.com/photos/313567/pexels-photo-313567.jpeg?auto=compress&cs=tinysrgb&w=900',
    videoUrl: 'https://player.vimeo.com/video/76979871',
    videoType: 'vimeo',
    duration: '1:30',
    description:
      'A punchy promotional video for a local brand. Fast cuts, motion text, and a strong call to action.',
    services: ['Editing', 'Motion Graphics', 'Sound Design'],
    featured: false,
    clientType: 'Local Business',
    completedDate: '2026-01',
  },
  {
    id: 3,
    type: 'video',
    title: 'Instagram Reels Pack',
    category: 'Short Form',
    thumbnail: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=900',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    duration: '0:30 each',
    description:
      'A pack of short-form reels designed for Instagram reach — captions, hooks, and vertical framing.',
    services: ['Editing', 'Captions', 'Subtitles'],
    featured: false,
    clientType: 'Instagram Creator',
    completedDate: '2025-12',
  },

  // ---- WEBSITE PROJECTS ----
  {
    id: 4,
    type: 'website',
    title: 'Café Business Website',
    category: 'Web Development',
    thumbnail: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=900',
    liveUrl: 'https://example.com',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    description:
      'A modern, responsive website for a local café — menu, gallery, location, and online ordering link.',
    services: ['Design', 'Development', 'Deployment'],
    featured: true,
    clientType: 'Local Business',
    completedDate: '2026-03',
  },
  {
    id: 5,
    type: 'website',
    title: 'Personal Brand Landing Page',
    category: 'Landing Page',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900',
    liveUrl: 'https://example.com',
    technologies: ['React', 'JavaScript', 'CSS'],
    description:
      'A high-converting landing page for a personal brand coach — lead capture, testimonials, and booking CTA.',
    services: ['Design', 'Development'],
    featured: false,
    clientType: 'Personal Brand',
    completedDate: '2026-02',
  },
  {
    id: 6,
    type: 'website',
    title: 'Portfolio Website',
    category: 'Portfolio',
    thumbnail: 'https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&w=900',
    liveUrl: 'https://example.com',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    description:
      'A sleek portfolio site for a freelance designer — project gallery, about, and contact form.',
    services: ['Design', 'Development', 'Animation'],
    featured: false,
    clientType: 'Freelancer',
    completedDate: '2025-11',
  },
];
