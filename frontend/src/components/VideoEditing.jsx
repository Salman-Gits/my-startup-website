import { motion } from 'framer-motion';
import {
  Sparkles,
  Video,
  PlayCircle,
  Megaphone,
  Building2,
  HeartHandshake,
  Film,
  Layers,
  Palette,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  FileText,
  Sliders,
  Clapperboard,
} from 'lucide-react';
import { videoServicesList } from '../data/services';
import { siteConfig } from '../data/siteConfig';

const iconMap = {
  Sparkles,
  Video,
  PlayCircle,
  Megaphone,
  Building2,
  HeartHandshake,
  Film,
  Layers,
  Palette,
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function VideoEditing({ onOpenVideoModal }) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hi! I would like to discuss a video editing project with The SB Creation.'
  )}`;

  return (
    <section id="video-editing" className="section-pad relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-600/10" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-600/10" />
      </div>

      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold text-accent-600 dark:text-accent-400">
            <Clapperboard size={14} />
            <span>VIDEO EDITING & POST-PRODUCTION</span>
          </div>

          <h2 className="heading-lg mt-4 text-ink-900 dark:text-white">
            High-Retention Video Editing for Creators, Businesses & Brands
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-300">
            From viral Instagram reels and high-watch-time YouTube videos to cinematic brand promos,
            we transform raw footage into powerful, polished visual stories that hold attention and drive engagement.
          </p>
        </motion.div>

        {/* 9 Video Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoServicesList.map((service, i) => {
            const Icon = iconMap[service.icon] || Video;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-ink-200/80 bg-white p-7 shadow-sm transition-all hover:border-accent-400/50 hover:shadow-xl dark:border-ink-800 dark:bg-ink-900"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} ${service.iconColor} border border-ink-100 shadow-sm dark:border-ink-800`}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-semibold text-ink-400 dark:text-ink-500">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white mt-5">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-ink-100 dark:border-ink-800/80">
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-1.5 text-xs font-medium text-ink-600 dark:text-ink-400"
                      >
                        <CheckCircle2 size={12} className="text-accent-500 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Video Editor Spotlight & CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-14 overflow-hidden rounded-4xl border border-ink-200 bg-white p-8 shadow-sm dark:border-ink-800 dark:bg-ink-900 lg:p-12"
        >
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3.5 py-1 text-xs font-bold text-accent-600 dark:text-accent-400">
                <Sparkles size={14} />
                <span>Creative Direction • Retention Pacing • Sound Immersion</span>
              </div>

              <h3 className="heading-md mt-4 text-ink-900 dark:text-white">
                Cinematic Edits Crafted to Hook Your Audience
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300 sm:text-base">
                Led by founder Shaheinsha, our video production pipeline combines modern hook design,
                kinetic typography, color grading, sound design, and seamless transitions. We don&apos;t just
                cut clips together — we engineer videos that keep audiences watching till the very end.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Instagram Reels & Shorts Optimization',
                  'High-Retention YouTube Pacing',
                  'Cinematic LUTs & Color Grading',
                  'Kinetic Subtitles & Lower Thirds',
                  'Sound Effects & Beat-Synced Cuts',
                  'Multi-Cam Event Synchronization',
                  'Commercial & Business Promos',
                ].map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-ink-50 px-3 py-1.5 text-xs font-medium text-ink-700 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200"
                  >
                    <CheckCircle2 size={12} className="text-accent-500" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-3xl border border-ink-200/80 bg-ink-50/70 p-6 dark:border-ink-700/60 dark:bg-ink-950/60 lg:col-span-5">
              <h4 className="text-sm font-bold text-ink-900 dark:text-white">
                Ready to elevate your video content?
              </h4>
              <p className="text-xs text-ink-600 dark:text-ink-400">
                Send us your raw footage, script, or idea to get started with high-retention editing.
              </p>

              <div className="mt-3 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 hover:bg-accent-500 hover:shadow-accent-500/40 active:scale-[0.98] w-full text-center"
                >
                  <span>Discuss Your Video Project</span>
                  <ArrowRight size={15} />
                </button>

                {onOpenVideoModal && (
                  <button
                    type="button"
                    onClick={onOpenVideoModal}
                    className="btn-ghost w-full justify-center"
                  >
                    <FileText size={15} />
                    <span>Explore All Video Services & PDF</span>
                  </button>
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-5 py-2.5 text-xs font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/20"
                >
                  <MessageCircle size={15} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
