import { motion } from 'framer-motion';
import { Lightbulb, ClipboardList, PenTool, Rocket } from 'lucide-react';
import { processSteps } from '@/data/founders';

const iconMap = { Lightbulb, ClipboardList, PenTool, Rocket };

export default function Process() {
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
            How It Works
          </p>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            A simple, clear process
          </h2>
          <p className="mt-4 text-base text-ink-600 dark:text-ink-300">
            From first message to final launch, here&apos;s what working with us
            looks like.
          </p>
        </motion.div>

        <div className="relative mt-14">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-[3.5rem] hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block dark:via-ink-800" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Lightbulb;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-ink-200 bg-white text-primary-600 shadow-sm dark:border-ink-800 dark:bg-ink-900 dark:text-primary-400">
                    <Icon size={24} />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-[10px] font-bold text-white shadow-md">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-ink-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {step.description}
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
