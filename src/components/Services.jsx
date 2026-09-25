import { motion } from 'framer-motion';
import { ArrowRight, Check, Video, Code2, Sparkles } from 'lucide-react';
import { services } from '@/data/services';

const iconMap = { Video, Code2 };

const scrollToContact = () =>
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

export default function Services({ onOpenVideoModal }) {
  return (
    <section id="services" className="section-pad">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
            What We Do
          </p>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            Services built to grow your brand
          </h2>
          <p className="mt-4 text-base text-ink-600 dark:text-ink-300">
            Two core services, one coordinated team. Whether you need a video that
            holds attention or a website that converts — we&apos;ve got you covered.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Video;
            const isVideo = service.id === 'video';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => {
                  if (isVideo && onOpenVideoModal) onOpenVideoModal();
                }}
                className={`group relative overflow-hidden rounded-4xl border border-ink-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-ink-800 dark:bg-ink-900 sm:p-10 ${
                  isVideo ? 'cursor-pointer' : ''
                }`}
              >
                {/* gradient glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.accent} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
                />

                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}
                  >
                    <Icon size={26} />
                  </div>

                  {isVideo && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-bold text-accent-600 dark:text-accent-400">
                      <Sparkles size={13} />
                      <span>Click to view full PDF copy</span>
                    </span>
                  )}
                </div>

                <h3 className="heading-md mt-6 text-ink-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {service.shortDescription}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-sm text-ink-600 dark:text-ink-300"
                    >
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {isVideo ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenVideoModal) onOpenVideoModal();
                      }}
                      className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-accent-500"
                    >
                      <Sparkles size={14} />
                      <span>Explore All Video Services & Process</span>
                    </button>
                  ) : null}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToContact();
                    }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-500 dark:text-primary-400"
                  >
                    Let&apos;s Discuss
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
