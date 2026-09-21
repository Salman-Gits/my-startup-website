import { motion } from 'framer-motion';
import { ArrowRight, Check, Video, Code2 } from 'lucide-react';
import { services } from '@/data/services';

const iconMap = { Video, Code2 };

const scrollToContact = () =>
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

export default function Services() {
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
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-4xl border border-ink-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl dark:border-ink-800 dark:bg-ink-900 sm:p-10"
              >
                {/* gradient glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.accent} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
                />

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}
                >
                  <Icon size={26} />
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

                <button
                  onClick={scrollToContact}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-500 dark:text-primary-400"
                >
                  Let&apos;s Discuss
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
