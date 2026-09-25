import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Film, Code2, Wand2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Floating preview cards for the hero background
const floatCards = [
  {
    icon: Film,
    label: 'Reels Edit',
    sub: '0:30 • Instagram',
    className: 'left-[4%] top-[18%] hidden sm:flex',
    delay: 0.6,
  accent: 'text-accent-400',
  border: 'border-accent-500/30',
  bg: 'bg-accent-500/10',
  rotate: '-6deg',
  duration: 7,
  y: 18,
  x: 14,
  y2: -18,
    x2: -10,
  y3: 0,
    x3: 0,
  scale3: 1.08,
  scale1: 0.95,
    scale2: 1.0,
  },
  {
    icon: Code2,
    label: 'Website Build',
    sub: 'React • Responsive',
    className: 'right-[5%] top-[14%] hidden sm:flex',
    delay: 0.9,
    accent: 'text-primary-400',
    border: 'border-primary-500/30',
    bg: 'bg-primary-500/10',
    rotate: '5deg',
    duration: 8,
    y: -16,
    x: -12,
    y2: 16,
    x2: 10,
    y3: 0,
    x3: 0,
    scale3: 0.95,
    scale1: 1.05,
    scale2: 1.0,
  },
  {
    icon: Wand2,
    label: 'Motion Graphics',
    sub: 'After Effects',
    className: 'left-[8%] bottom-[14%] hidden md:flex',
    delay: 1.2,
    accent: 'text-primary-300',
    border: 'border-primary-400/30',
    bg: 'bg-primary-400/10',
    rotate: '4deg',
    duration: 9,
    y: 12,
    x: 10,
    y2: -14,
    x2: -8,
    y3: 0,
    x3: 0,
    scale3: 1.0,
    scale1: 0.95,
    scale2: 1.05,
  },
];

const trustItems = ['Video Editing', 'Web Development', 'Creative Solutions'];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl animate-blob-slow sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl animate-blob-slower sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary-400/15 blur-3xl animate-blob-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(0,0,0,0.04)_100%)] dark:bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Floating cards */}
      {floatCards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={i}
            className={`pointer-events-none absolute z-0 ${card.className}`}
            initial={{ opacity: 0, y: 30, rotate: card.rotate }}
            animate={{
              opacity: 1,
              y: [card.y, card.y2, card.y3],
              x: [card.x, card.x2, card.x3],
              scale: [card.scale1, card.scale2, card.scale3],
              rotate: card.rotate,
            }}
            transition={{
              opacity: { delay: card.delay, duration: 0.6 },
              y: { repeat: Infinity, duration: card.duration, ease: 'easeInOut' },
              x: { repeat: Infinity, duration: card.duration, ease: 'easeInOut' },
              scale: { repeat: Infinity, duration: card.duration, ease: 'easeInOut' },
            }}
          >
            <div
              className={`flex items-center gap-3 rounded-2xl border ${card.border} ${card.bg} glass px-4 py-3 shadow-xl`}
            >
              <Icon size={22} className={card.accent} />
              <div>
                <p className="text-xs font-semibold text-ink-800 dark:text-white">
                  {card.label}
                </p>
                <p className="text-[10px] text-ink-500 dark:text-ink-400">
                  {card.sub}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}

      <div className="container-max relative z-10 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/50 px-4 py-1.5 text-xs font-medium text-ink-600 backdrop-blur-md dark:border-ink-700 dark:bg-white/5 dark:text-ink-300"
          >
            <Sparkles size={14} className="text-primary-500" />
            {trustItems.join(' • ')}
          </motion.div>

          <h1 className="heading-xl text-balance text-ink-900 dark:text-white">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block"
            >
              Your Ideas.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block"
            >
              Our Skills.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block text-gradient"
            >
              Let&apos;s Build Something Great.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg"
          >
            We help creators and businesses turn their ideas into engaging videos
            and modern websites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button onClick={() => scrollTo('work')} className="btn-ghost w-full sm:w-auto">
              <Play size={16} />
              View Our Work
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-primary w-full sm:w-auto">
              Start a Project
              <ArrowRight size={16} />
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-ink-400 dark:text-ink-500"
          >
            {siteConfig.tagline}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
