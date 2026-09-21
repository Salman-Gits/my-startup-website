import { motion } from 'framer-motion';
import { Palette, Monitor, MessagesSquare, Wrench, Smartphone, Film } from 'lucide-react';
import { whyChooseUs } from '@/data/founders';

const iconMap = { Palette, Monitor, MessagesSquare, Wrench, Smartphone, Film };

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-ink-50/50 dark:bg-ink-950">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
            Why Choose Us
          </p>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            What you get when you work with us
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Palette;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-ink-200 bg-white p-7 transition-shadow hover:shadow-xl dark:border-ink-800 dark:bg-ink-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-primary-600 transition-transform group-hover:scale-110 dark:text-primary-400">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
