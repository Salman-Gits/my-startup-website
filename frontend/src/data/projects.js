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
    category: 'Short Form',
    thumbnail: 'https://images.pexels.com/photos/32479534/pexels-photo-32479534.jpeg?auto=compress&cs=tinysrgb&w=900',
    videoUrl: 'https://drive.google.com/file/d/1_6XSqRNbHNQSaf4WmPQFFWLz-1jwFMz6/preview',
    videoType: 'Instagram',
    duration: '0:27',
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
    category: 'Short Form',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAmD3aV19xO4wi3j_AZOhiYqI0p5ds0yneJNzRg5PKos-wbQtsez_FJg&s=10',
    // thumbnail: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=900',
    videoUrl: 'https://drive.google.com/file/d/1q1t4gYjVRdLUCXie3xVdFIRLilWCkvl4/preview',
    videoType: 'vimeo',
    duration: '0:23',
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
    thumbnail: 'https://img.magnific.com/free-photo/creative-reels-composition_23-2149711511.jpg?semt=ais_hybrid&w=740&q=80',
    // thumbnail: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=900',
    videoUrl: 'https://drive.google.com/file/d/1N0MXzDQKmZTh85MUiMF7QM76U00MNxMf/preview',
    videoType: 'youtube',
    duration: '0:34 each',
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
    title: 'Blood Donation Website',
    category: 'Web Development',
    thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/053/320/400/small/blood-donor-month-a-drop-of-blood-created-with-the-help-of-technology-photo.jpg',
    // thumbnail: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=900',
    liveUrl: 'https://blood-bank-rouge-alpha.vercel.app/',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    description:
      'A modern, responsive website for a local blood donation center — information, events, and online scheduling link.',
    services: ['Design', 'Development', 'Deployment'],
    featured: true,
    clientType: 'Local Business',
    completedDate: '2026-03',
  },
  {
    id: 5,
    type: 'website',
    title: 'Badmintion website Page',
    category: 'Landing Page',
    thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/035/312/990/small/ai-generated-badminton-racket-and-shuttlecock-in-mid-air-during-game-generative-ai-photo.jpg',
    liveUrl: 'https://kgbadminton.vercel.app/',
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
    title: 'Developer Portfolio Website',
    category: 'Portfolio',
    thumbnail: 'https://www.leadquizzes.com/wp-content/uploads/2026/04/website-portfolio-for-developer-1.png',
    // thumbnail: 'https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&w=900',
    liveUrl: 'https://portfolio-lovat-pi-51.vercel.app/',
    technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
    description:
      'A sleek, responsive portfolio website highlighting full-stack projects, technical skills, resume achievements, and direct contact options.',
    services: ['Design', 'Development', 'Deployment'],
    featured: true,
    clientType: 'Portfolio',
    completedDate: '2026-03',
  },
];
