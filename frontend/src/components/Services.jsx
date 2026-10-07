import { motion } from 'framer-motion';
import { ArrowRight, Check, Video, Code2, Sparkles, ChevronDown } from 'lucide-react';
import { services } from '../data/services';

const iconMap = { Video, Code2 };

const scrollTo = (id) => {
  const cleanId = id.replace('#', '');
  const el = document.getElementById(cleanId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Services({ onOpenVideoModal }) {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="container-max">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-600 shadow-sm backdrop-blur-sm dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-300">
            <Sparkles size={14} className="text-primary-500" />
            <span>OUR CORE SERVICES</span>
          </div>

          <h2 className="heading-lg mt-4 text-ink-900 dark:text-white">
            Two Creative Pillars. One Coordinated Studio.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">
            We operate with equal mastery in video editing and website development. Whether you need
            high-retention video content that stops the scroll, or a fast, modern website that converts
            visitors — our two founders collaborate directly to grow your brand.
          </p>
        </motion.div>

        {/* Side-by-Side Dual Core Services Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
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
                className={`group relative flex flex-col justify-between overflow-hidden rounded-4xl border p-8 shadow-sm transition-all hover:shadow-2xl sm:p-10 ${
                  isVideo
                    ? 'border-accent-500/30 bg-white hover:border-accent-500 dark:border-accent-500/20 dark:bg-ink-900'
                    : 'border-primary-500/30 bg-white hover:border-primary-500 dark:border-primary-500/20 dark:bg-ink-900'
                }`}
              >
                {/* Ambient glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${service.accent} opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                />

                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}
                    >
                      <Icon size={30} />
                    </div>

                    <span
                      className={`rounded-full px-3.5 py-1 text-xs font-bold ${
                        isVideo
                          ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20'
                          : 'bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20'
                      }`}
                    >
                      Pillar 0{i + 1}
                    </span>
                  </div>

                  <h3 className="heading-md mt-6 text-ink-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                    {service.tagline}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {service.shortDescription}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 pt-5 border-t border-ink-100 dark:border-ink-800">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500 mb-3">
                      Included Capabilities:
                    </p>
                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {service.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2 text-xs font-medium text-ink-700 dark:text-ink-300"
                        >
                          <span
                            className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-white ${
                              isVideo ? 'bg-accent-500' : 'bg-primary-600'
                            }`}
                          >
                            <Check size={10} strokeWidth={3} />
                          </span>
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Symmetrical Dual Action CTAs */}
                <div className="mt-8 pt-6 border-t border-ink-100 dark:border-ink-800 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => scrollTo('contact')}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 active:scale-[0.98] ${
                      isVideo
                        ? 'bg-accent-600 hover:bg-accent-500 shadow-accent-600/25 hover:shadow-accent-500/40'
                        : 'bg-primary-600 hover:bg-primary-500 shadow-primary-600/25 hover:shadow-primary-500/40'
                    }`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollTo(service.anchor)}
                    className="btn-ghost text-xs justify-center"
                  >
                    <span>View All {service.title} Details</span>
                    <ChevronDown size={14} />
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
