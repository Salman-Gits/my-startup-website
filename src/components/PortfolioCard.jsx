import { motion } from 'framer-motion';
import { Play, ExternalLink, Clock } from 'lucide-react';

export default function PortfolioCard({ project, onOpen, index }) {
  const isVideo = project.type === 'video';

  return (
    <motion.button
      layout
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white text-left shadow-sm transition-shadow hover:shadow-xl dark:border-ink-800 dark:bg-ink-900"
    >
      {/* thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-100 dark:bg-ink-800">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />

        {/* category badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-700 backdrop-blur-md dark:bg-ink-950/80 dark:text-ink-200">
          {project.category}
        </span>

        {/* play / external icon */}
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-800 backdrop-blur-md transition-colors dark:bg-ink-950/80 dark:text-white">
          {isVideo ? <Play size={16} fill="currentColor" /> : <ExternalLink size={16} />}
        </span>

        {/* duration for videos */}
        {isVideo && project.duration && (
          <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-ink-950/80 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
            <Clock size={10} />
            {project.duration}
          </span>
        )}
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-ink-600 dark:text-ink-300">
          {project.description}
        </p>

        {/* tech tags for websites */}
        {project.technologies?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-md bg-primary-500/10 px-2 py-0.5 text-[10px] font-medium text-primary-600 dark:text-primary-400"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400">
          View Project
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </motion.button>
  );
}
