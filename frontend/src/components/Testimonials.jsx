import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, AlertCircle } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const hasPlaceholder = testimonials.some((t) => t.isPlaceholder);

  const paginate = (newDir) => {
    setDir(newDir);
    setIndex((prev) => (prev + newDir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

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
            Testimonials
          </p>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            What clients say
          </h2>
          {hasPlaceholder && (
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-warning-500/10 px-3 py-1.5 text-xs font-medium text-warning-700 dark:text-warning-400">
              <AlertCircle size={12} />
              Sample placeholder content — replace with real testimonials
            </p>
          )}
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-4xl border border-ink-200 bg-white p-8 shadow-sm dark:border-ink-800 dark:bg-ink-900 sm:p-12">
            <Quote
              size={48}
              className="absolute right-8 top-8 text-primary-500/10"
              fill="currentColor"
            />

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir > 0 ? -40 : 40 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 text-primary-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-relaxed text-ink-700 dark:text-ink-200 sm:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display text-sm font-bold text-ink-900 dark:text-white">
                      {current.name}
                    </p>
                    <p className="text-xs text-ink-500 dark:text-ink-400">
                      {current.role}
                      {current.company ? `, ${current.company}` : ''}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* controls */}
          {testimonials.length > 1 && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-ink-700 dark:text-ink-300 dark:hover:text-primary-400"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDir(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? 'w-6 bg-primary-600'
                        : 'w-2 bg-ink-300 dark:bg-ink-700'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => paginate(1)}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-ink-700 dark:text-ink-300 dark:hover:text-primary-400"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
