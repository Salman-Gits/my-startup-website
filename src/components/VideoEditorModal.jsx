import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Video,
  Camera,
  Palette,
  CheckCircle2,
  Clock,
  Instagram,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Flame,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { videoEditorDetails } from '@/data/videoEditorDetails';
import { siteConfig } from '@/data/siteConfig';

export default function VideoEditorModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleStartProject = () => {
    onClose();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        // Try pre-selecting Video Editing in the select box if present
        const select = document.querySelector('select[name="service"]');
        if (select) {
          select.value = 'Video Editing';
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    }, 200);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Shaheinsha! I saw your video editing services on ${siteConfig.name} and would like to discuss a project.`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  const tabs = [
    { id: 'overview', label: 'Overview & Vision', icon: Sparkles },
    { id: 'services', label: 'All Services & Formats', icon: Video },
    { id: 'process', label: '5-Step Work Process', icon: Layers },
    { id: 'why', label: 'Why Us & Specialization', icon: ShieldCheck },
    { id: 'founder', label: 'Founder & Connect', icon: Instagram },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-2xl dark:border-ink-800 dark:bg-ink-900"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar Header */}
          <div className="relative border-b border-ink-100 bg-gradient-to-r from-ink-50 via-white to-ink-50 px-6 py-5 dark:border-ink-800 dark:from-ink-950 dark:via-ink-900 dark:to-ink-950">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                  <Flame size={13} />
                  <span>The SB Creation • Complete Video & Media Scope</span>
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-3xl">
                  {videoEditorDetails.headline}
                </h2>
                <p className="mt-1 text-xs text-ink-600 dark:text-ink-400 sm:text-sm">
                  {videoEditorDetails.subheadline}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close details"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-600 transition-colors hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-300 dark:hover:bg-ink-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-ink-900 text-white shadow-md dark:bg-white dark:text-ink-900'
                        : 'bg-ink-100/70 text-ink-600 hover:bg-ink-200/70 dark:bg-ink-800/70 dark:text-ink-300 dark:hover:bg-ink-800'
                    }`}
                  >
                    <Icon size={14} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
            {/* TAB 1: OVERVIEW & VISION */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="rounded-2xl border border-accent-500/20 bg-accent-500/5 p-5 dark:border-accent-500/30 dark:bg-accent-500/10">
                  <h3 className="font-display text-lg font-bold text-accent-700 dark:text-accent-300">
                    {videoEditorDetails.about.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
                    {videoEditorDetails.about.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {videoEditorDetails.about.strategy}
                  </p>
                </div>

                <div className="rounded-2xl border border-ink-200 bg-ink-50/60 p-5 dark:border-ink-800 dark:bg-ink-950/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                    Core Philosophy
                  </h4>
                  <p className="mt-2 text-base font-medium italic text-ink-800 dark:text-ink-100">
                    &ldquo;{videoEditorDetails.about.philosophy}&rdquo;
                  </p>
                  <p className="mt-3 text-sm font-semibold text-accent-600 dark:text-accent-400">
                    {videoEditorDetails.about.attention}
                  </p>
                </div>

                <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm dark:border-ink-800 dark:bg-ink-900">
                  <h4 className="font-display text-base font-bold text-ink-900 dark:text-white">
                    {videoEditorDetails.promise.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {videoEditorDetails.promise.body}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {videoEditorDetails.promise.pillars.map((pillar) => (
                      <div
                        key={pillar}
                        className="rounded-xl border border-ink-100 bg-ink-50/80 px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-ink-800 dark:border-ink-800 dark:bg-ink-800/60 dark:text-ink-200"
                      >
                        {pillar}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: ALL SERVICES & FORMATS */}
            {activeTab === 'services' && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400">
                    Complete Copy from PDF Section 3
                  </p>
                  <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">
                    {videoEditorDetails.tagline}
                  </h3>
                </div>

                <div className="grid gap-5">
                  {videoEditorDetails.services.map((grp) => {
                    const isVideoCat = grp.category.includes('Video');
                    return (
                      <div
                        key={grp.category}
                        className={`rounded-2xl border p-5 ${
                          isVideoCat
                            ? 'border-accent-500/30 bg-accent-500/5 dark:bg-accent-500/10'
                            : 'border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-950/60'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 text-white">
                            {grp.icon === 'Camera' ? (
                              <Camera size={18} />
                            ) : grp.icon === 'Palette' ? (
                              <Palette size={18} />
                            ) : (
                              <Video size={18} />
                            )}
                          </div>
                          <div>
                            <h4 className="font-display text-base font-bold text-ink-900 dark:text-white">
                              {grp.category}
                            </h4>
                            <p className="text-xs text-ink-600 dark:text-ink-400">
                              {grp.description}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
                          {grp.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2 text-xs font-medium text-ink-800 shadow-sm dark:bg-ink-800/80 dark:text-ink-200"
                            >
                              <CheckCircle2
                                size={14}
                                className="shrink-0 text-accent-600 dark:text-accent-400"
                              />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 3: 5-STEP WORK PROCESS */}
            {activeTab === 'process' && (
              <motion.div
                key="process"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                    PDF Section 5
                  </p>
                  <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">
                    Our Work Process
                  </h3>
                  <p className="mt-1 text-xs text-ink-600 dark:text-ink-400">
                    {videoEditorDetails.processNote}
                  </p>
                </div>

                <div className="space-y-3.5">
                  {videoEditorDetails.process.map((step) => (
                    <div
                      key={step.number}
                      className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white p-4 shadow-sm dark:border-ink-800 dark:bg-ink-950/60"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 font-display text-base font-bold text-white shadow-md">
                        {step.number}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink-900 dark:text-white">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-ink-600 dark:text-ink-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 4: WHY US & SPECIALIZATION */}
            {activeTab === 'why' && (
              <motion.div
                key="why"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">
                    Why S.B CREATION? (6 Pillars from PDF)
                  </h3>
                  <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
                    {videoEditorDetails.whyChooseUs.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-950/60"
                      >
                        <h4 className="flex items-center gap-2 font-display text-sm font-bold text-ink-900 dark:text-white">
                          <span className="h-2 w-2 rounded-full bg-accent-500" />
                          {item.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-ink-600 dark:text-ink-300">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-ink-200 bg-ink-50/70 p-5 dark:border-ink-800 dark:bg-ink-900">
                  <h4 className="font-display text-base font-bold text-ink-900 dark:text-white">
                    {videoEditorDetails.specialization.title}
                  </h4>
                  <p className="mt-1 text-xs text-ink-600 dark:text-ink-400">
                    {videoEditorDetails.specialization.subtitle}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {videoEditorDetails.specialization.niches.map((niche) => (
                      <span
                        key={niche}
                        className="rounded-xl border border-ink-200/80 bg-white px-3 py-1.5 text-xs font-semibold text-ink-800 shadow-sm dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200"
                      >
                        {niche}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs italic text-ink-500 dark:text-ink-400">
                    {videoEditorDetails.specialization.closing}
                  </p>
                </div>
              </motion.div>
            )}

            {/* TAB 5: FOUNDER & CONNECT */}
            {activeTab === 'founder' && (
              <motion.div
                key="founder"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="rounded-2xl border border-ink-200 bg-gradient-to-br from-white via-ink-50/50 to-white p-6 dark:border-ink-800 dark:from-ink-900 dark:via-ink-950 dark:to-ink-900">
                  <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 text-3xl font-bold text-white shadow-xl shadow-accent-500/20">
                      S
                    </div>
                    <div className="mt-4 sm:ml-5 sm:mt-0">
                      <span className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                        Lead Video Specialist
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-bold text-ink-900 dark:text-white">
                        {videoEditorDetails.contactInfo.founderName}
                      </h3>
                      <p className="mt-1 text-xs text-ink-600 dark:text-ink-400">
                        {videoEditorDetails.role} • {videoEditorDetails.brand}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <a
                          href={videoEditorDetails.contactInfo.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3 py-1.5 text-xs font-bold text-ink-800 transition-colors hover:border-pink-500 hover:text-pink-600 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200"
                        >
                          <Instagram size={14} className="text-pink-500" />
                          <span>{videoEditorDetails.contactInfo.instagram}</span>
                        </a>

                        <div className="inline-flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">
                          <Clock size={13} />
                          <span>{videoEditorDetails.contactInfo.businessHours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-ink-200 bg-ink-50/70 p-5 text-center dark:border-ink-800 dark:bg-ink-950/60">
                  <h4 className="font-display text-base font-bold text-ink-900 dark:text-white">
                    Ready to build your visual brand?
                  </h4>
                  <p className="mt-1 text-xs text-ink-600 dark:text-ink-300">
                    Have an idea? Need a professional reel or YouTube video? Let&apos;s create something that stands out.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="flex flex-col-reverse items-center justify-between gap-3 border-t border-ink-100 bg-ink-50/50 px-6 py-4 dark:border-ink-800 dark:bg-ink-950 sm:flex-row sm:px-8">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-200"
            >
              Back to Studio
            </button>

            <div className="flex w-full items-center justify-end gap-3 sm:w-auto">
              <button
                onClick={handleWhatsApp}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-500 sm:flex-initial"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </button>

              <button
                onClick={handleStartProject}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-ink-900 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100 sm:flex-initial"
              >
                <span>Start Video Project</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
