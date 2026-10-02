import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  MessageCircle,
  Mail,
  Clock,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  Instagram,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import ThemeToggle from './ThemeToggle';

export default function MaintenancePage({ theme, onToggleTheme, onToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Hello ${siteConfig.name}, I saw your maintenance page and would like to inquire about your video editing & creative services.`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopiedEmail(true);
      if (onToast) {
        onToast({
          type: 'success',
          message: 'Email address copied to clipboard!',
        });
      }
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white text-ink-900 transition-colors duration-300 dark:bg-ink-950 dark:text-ink-100">
      {/* Background ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-600/15" />
        <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-600/15" />
        <div className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-500/10" />
      </div>

      {/* Top Navigation Bar */}
      <header className="w-full border-b border-ink-200/60 bg-white/70 backdrop-blur-xl dark:border-ink-800/60 dark:bg-ink-950/70">
        <div className="container-max flex h-20 items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <img
              src="/SB-creation.jpg"
              alt={siteConfig.name}
              className="h-11 w-11 rounded-xl object-contain shadow-sm border border-ink-200/60 dark:border-ink-800/60"
            />
            <div>
              <span className="block font-display text-base font-bold tracking-tight text-ink-900 dark:text-white sm:text-lg">
                {siteConfig.name}
              </span>
              <span className="hidden sm:block text-xs font-medium text-ink-500 dark:text-ink-400">
                Video Editing & Web Development
              </span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-xs font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/20"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Direct</span>
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      </header>

      {/* Main Maintenance Content */}
      <main className="container-max flex-1 flex flex-col items-center justify-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="w-full max-w-3xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-700 shadow-sm dark:border-primary-500/20 dark:bg-primary-950/60 dark:text-primary-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
              </span>
              <span>Scheduled Improvements in Progress</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary-600 to-accent-500 text-white shadow-lg shadow-primary-500/25">
              <Wrench size={30} className="animate-pulse" />
            </div>

            <h1 className="heading-xl text-ink-900 dark:text-white">
              Website Under Maintenance
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600 dark:text-ink-300 max-w-xl mx-auto">
              We&apos;re currently making some improvements to our website.
              We&apos;ll be back soon with an elevated experience.
            </p>
          </motion.div>

          {/* Notice Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 rounded-3xl border border-ink-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-ink-800 dark:bg-ink-900/60 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pb-6 border-b border-ink-100 dark:border-ink-800">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="text-sm font-bold text-ink-900 dark:text-white sm:text-base">
                  We are still accepting new projects and inquiries!
                </h2>
                <p className="text-xs sm:text-sm text-ink-500 dark:text-ink-400">
                  Our video editing, YouTube content, reels, and web development pipelines remain fully operational. Reach out anytime.
                </p>
              </div>
            </div>

            {/* Quick Contact Grid */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* WhatsApp Option */}
              <div className="flex flex-col justify-between rounded-2xl border border-ink-200/70 bg-white p-5 transition-shadow hover:shadow-md dark:border-ink-800 dark:bg-ink-900">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                      <MessageCircle size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                        WhatsApp Contact
                      </p>
                      <p className="text-sm font-bold text-ink-900 dark:text-white">
                        {siteConfig.whatsappDisplay}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-ink-500 dark:text-ink-400">
                    Fastest way to get in touch. We typically respond within minutes.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#25D366]/20 transition-all hover:bg-[#20ba59] active:scale-[0.98]"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Email Option */}
              <div className="flex flex-col justify-between rounded-2xl border border-ink-200/70 bg-white p-5 transition-shadow hover:shadow-md dark:border-ink-800 dark:bg-ink-900">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
                      <Mail size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                        Direct Email
                      </p>
                      <p className="text-sm font-bold text-ink-900 dark:text-white truncate max-w-[190px] sm:max-w-none">
                        {siteConfig.email}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-ink-500 dark:text-ink-400">
                    Send us your project details, raw footage links, or website brief.
                  </p>
                </div>

                <div className="mt-4 flex gap-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-primary-600/20 transition-all hover:bg-primary-500 active:scale-[0.98]"
                  >
                    <span>Send Email</span>
                    <Mail size={14} />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copy email address"
                    className="inline-flex items-center justify-center rounded-xl border border-ink-200 px-3 py-2.5 text-ink-700 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-ink-700 dark:text-ink-200 dark:hover:text-primary-400"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check size={16} className="text-success-500" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick reassurance indicators */}
            <div className="mt-6 pt-5 border-t border-ink-100 dark:border-ink-800 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-ink-500 dark:text-ink-400">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-success-500" />
                Existing client deliverables on schedule
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} className="text-primary-500" />
                Inquiries answered within 24 hours
              </span>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-ink-200/60 bg-white/60 py-6 text-center text-xs text-ink-500 dark:border-ink-800/60 dark:bg-ink-950/60 dark:text-ink-400">
        <div className="container-max px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {siteConfig.foundedYear || 2026} {siteConfig.name}. All rights reserved.
          </p>
          {siteConfig.social?.instagram && (
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-600 hover:text-primary-600 dark:text-ink-400 dark:hover:text-primary-400 transition-colors"
            >
              <Instagram size={14} />
              <span>Follow our work on Instagram</span>
            </a>
          )}
        </div>
      </footer>
    </div>
  );
}
