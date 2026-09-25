import { motion } from 'framer-motion';
import { Play, ArrowRight, Clock, Calendar, Tag, Layers } from 'lucide-react';
import { projects } from '@/data/projects';

// Large featured project section with alternating layout.
export default function FeaturedProject() {
  const featured = projects.filter((p) => p.featured);
  if (featured.length === 0) return null;

  return (
    <section className="section-pad">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
            Featured Project
          </p>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            A closer look at our work
          </h2>
        </motion.div>

        <div className="mt-14 space-y-16">
          {featured.map((project, i) => {
            const isVideo = project.type === 'video';
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  reversed ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* media */}
                <div className="group relative aspect-video w-full overflow-hidden rounded-4xl border border-ink-200 shadow-xl dark:border-ink-800">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-700 backdrop-blur-md dark:bg-ink-950/80 dark:text-ink-200">
                    {project.category}
                  </span>
                  {isVideo && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-ink-800 shadow-xl backdrop-blur-md transition-transform group-hover:scale-110 dark:bg-ink-950/80 dark:text-white">
                        <Play size={24} fill="currentColor" />
                      </span>
                    </span>
                  )}
                </div>

                {/* content */}
                <div>
                  <h3 className="heading-md text-ink-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-300">
                    {project.description}
                  </p>

                  {isVideo && project.duration && (
                    <p className="mt-4 flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
                      <Clock size={14} />
                      Duration: {project.duration}
                    </p>
                  )}

                  {project.services?.length > 0 && (
                    <div className="mt-5">
                      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-400">
                        <Tag size={12} />
                        Services
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

                  {project.technologies?.length > 0 && (
                    <div className="mt-4">
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

                  <a
                    href={isVideo ? '#work' : project.liveUrl}
                    target={isVideo ? undefined : '_blank'}
                    rel={isVideo ? undefined : 'noopener noreferrer'}
                    className="btn-primary mt-7"
                  >
                    {isVideo ? 'View in Portfolio' : 'Visit Website'}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
