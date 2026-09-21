import { motion } from 'framer-motion';
import { founders, whyWorkWithUs } from '@/data/founders';
import { MessageCircle, Sparkles, Zap, Clock, Wallet, Layers } from 'lucide-react';
import FounderCard from './FounderCard';

const whyIcons = { MessageCircle, Sparkles, Zap, Clock, Wallet, Layers };

export default function About() {
  return (
    <section id="about" className="section-pad bg-ink-50/50 dark:bg-ink-950">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
            About Us
          </p>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            Two friends, one studio
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-300">
            We&apos;re two friends combining creativity and technology to help
            businesses and creators build a stronger digital presence. No
            agency overhead — just direct, honest, personalized work.
          </p>
        </motion.div>

        {/* founder cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {founders.map((f, i) => (
            <FounderCard key={f.id} founder={f} index={i} />
          ))}
        </div>

        {/* why work with us */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-md text-center text-ink-900 dark:text-white"
          >
            Why work with us?
          </motion.h3>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyWorkWithUs.map((item, i) => {
              const Icon = whyIcons[item.icon] || Sparkles;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                  className="rounded-2xl border border-ink-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-ink-800 dark:bg-ink-900"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-4 font-display text-base font-bold text-ink-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
