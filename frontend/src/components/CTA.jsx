import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function CTA() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-pad">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-5xl border border-ink-200 bg-gradient-to-br from-ink-900 to-ink-950 p-10 text-center shadow-2xl dark:border-ink-800 sm:p-16"
        >
          {/* glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />

          <div className="relative">
            <h2 className="heading-lg text-white">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-300">
              Tell us what you&apos;re building and let&apos;s talk. Whether
              it&apos;s a video, a website, or both — we&apos;ll help you bring it
              to life.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary w-full sm:w-auto"
              >
                Let&apos;s Talk
                <ArrowRight size={16} />
              </button>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
