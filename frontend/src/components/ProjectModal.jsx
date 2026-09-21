import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Clock, Calendar, Tag, Layers } from 'lucide-react';

// Accessible modal/lightbox for viewing project details.
// Closes on Escape, backdrop click, or close button. Locks body scroll while open.
export default function ProjectModal({ project, onClose }) {
  const isVideo = project?.type === 'video';

  const formatDate = (d) => {
    if (!d) return null;
    const date = new Date(d + '-01');
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-ink-200 bg-white shadow-2xl dark:border-ink-800 dark:bg-ink-900 scrollbar-hide"
          >
            {/* close */}
            <button
              onClick={onClose}
              aria-label="Close project"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/50 text-white backdrop-blur-md transition-colors hover:bg-ink-950/70"
            >
              <X size={20} />
            </button>

            {/* media */}
            <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl bg-ink-950">
              {isVideo ? (
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              )}
            </div>

            {/* body */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400">
                  {project.category}
                </span>
                {isVideo && project.duration && (
                  <span className="flex items-center gap-1 rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300">
                    <Clock size={12} />
                    {project.duration}
                  </span>
                )}
                {project.completedDate && formatDate(project.completedDate) && (
                  <span className="flex items-center gap-1 rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300">
                    <Calendar size={12} />
                    {formatDate(project.completedDate)}
                  </span>
                )}
              </div>

              <h3 className="heading-md mt-4 text-ink-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {project.description}
              </p>

              {/* services */}
              {project.services?.length > 0 && (
                <div className="mt-6">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-400">
                    <Tag size={12} />
                    Services Provided
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-ink-200 bg-ink-50 px-3 py-1.5 text-xs font-medium text-ink-700 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* technologies */}
              {project.technologies?.length > 0 && (
                <div className="mt-5">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-400">
                    <Layers size={12} />
                    Technologies
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-primary-500/20 bg-primary-500/5 px-3 py-1.5 text-xs font-medium text-primary-700 dark:text-primary-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* client type */}
              {project.clientType && (
                <p className="mt-5 text-xs text-ink-500 dark:text-ink-400">
                  <span className="font-semibold">Client type:</span>{' '}
                  {project.clientType}
                </p>
              )}

              {/* CTA for websites */}
              {!isVideo && project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-7 w-full sm:w-auto"
                >
                  Visit Website
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
