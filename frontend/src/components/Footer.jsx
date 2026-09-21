import { motion } from 'framer-motion';
import {
  Clapperboard,
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Mail,
  MessageCircle,
  ArrowUp,
} from 'lucide-react';
import { siteConfig, navLinks } from '@/data/siteConfig';
import { services } from '@/data/services';

const socialIconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
  whatsapp: MessageCircle,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(siteConfig.social).filter(([, url]) => url);

  return (
    <footer className="relative overflow-hidden border-t border-ink-200 bg-ink-50/50 dark:border-ink-800 dark:bg-ink-950">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="container-max relative px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white">
                <Clapperboard size={18} />
              </span>
              <span className="font-display text-lg font-bold text-ink-900 dark:text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-sm font-medium text-gradient">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-400">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-ink-600 transition-colors hover:text-primary-600 dark:text-ink-300 dark:hover:text-primary-400"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-400">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-600 transition-colors hover:text-primary-600 dark:text-ink-300 dark:hover:text-primary-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-400">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-ink-600 transition-colors hover:text-primary-600 dark:text-ink-300 dark:hover:text-primary-400"
              >
                <Mail size={16} />
                {siteConfig.email}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-ink-600 transition-colors hover:text-primary-600 dark:text-ink-300 dark:hover:text-primary-400"
              >
                <MessageCircle size={16} />
                {siteConfig.whatsappDisplay}
              </a>
            </div>
            <div className="mt-5 flex gap-2.5">
              {socials.map(([key, url]) => {
                const Icon = socialIconMap[key];
                if (!Icon) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-all hover:border-primary-400 hover:text-primary-600 dark:border-ink-700 dark:text-ink-300 dark:hover:text-primary-400"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-6 sm:flex-row dark:border-ink-800">
          <p className="text-xs text-ink-500 dark:text-ink-400">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-xs font-medium text-ink-500 transition-colors hover:text-primary-600 dark:text-ink-400 dark:hover:text-primary-400"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
