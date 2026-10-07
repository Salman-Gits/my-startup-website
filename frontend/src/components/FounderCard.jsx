import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube, Twitter, ExternalLink, Award } from 'lucide-react';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
};

export default function FounderCard({ founder, index, onOpenVideoModal, onOpenResumeModal }) {
  const socials = Object.entries(founder.social).filter(([, url]) => url);
  const isVideoFounder = founder.name === 'Shaheinsha' || founder.role.includes('Video');
  const isDeveloperFounder = founder.name.includes('Salman') || founder.role.includes('Developer');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-4xl border border-ink-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl dark:border-ink-800 dark:bg-ink-900 sm:p-8 flex flex-col justify-between"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-500/10 blur-2xl transition-opacity group-hover:opacity-30" />

      {/* photo placeholder */}
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 sm:h-32 sm:w-32">
        <img
          src={founder.photo}
          alt={founder.name}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        
      </div>

      <div className="mt-5 text-center">
        {founder.achievement && (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-0.5 text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-2">
            <Award size={12} />
            {founder.achievement}
          </span>
        )}
        <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">
          {founder.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-primary-600 dark:text-primary-400">
          {founder.role}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          {founder.bio}
        </p>
      </div>

      {/* skills */}
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {founder.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-ink-100 px-2.5 py-1 text-[11px] font-medium text-ink-700 dark:bg-ink-800 dark:text-ink-200"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* socials */}
      {socials.length > 0 && (
        <div className="mt-5 flex justify-center gap-2.5">
          {socials.map(([key, url]) => {
            const Icon = socialIcons[key];
            if (!Icon) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${founder.name} on ${key}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-all hover:border-primary-400 hover:text-primary-600 dark:border-ink-700 dark:text-ink-300 dark:hover:text-primary-400"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      )}

      {isDeveloperFounder && (
        <div className="mt-6 flex flex-col gap-2 w-full">
          <a
            href={founder.portfolioUrl || 'https://portfolio-lovat-pi-51.vercel.app/'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-600 py-2.5 text-center text-xs font-bold text-white shadow-sm transition-all hover:bg-primary-500 active:scale-[0.98]"
          >
            <span>View Portfolio</span>
            <ExternalLink size={14} />
          </a>
          {onOpenResumeModal && (
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-ink-200 bg-ink-50 py-2.5 text-center text-xs font-semibold text-ink-700 transition-all hover:border-primary-400 hover:text-primary-600 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:text-primary-400"
            >
              <span>View Resume & Credentials</span>
            </button>
          )}
        </div>
      )}

      {isVideoFounder && onOpenVideoModal && (
        <div className="mt-6 flex flex-col gap-2 w-full">
          <a
            href={founder.portfolioUrl || 'https://portfolio-lovat-pi-51.vercel.app/'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-600 py-2.5 text-center text-xs font-bold text-white shadow-sm transition-all hover:bg-primary-500 active:scale-[0.98]"
          >
            <span>View Portfolio</span>
            <ExternalLink size={14} />
          </a>
        <button
          type="button"
          onClick={onOpenVideoModal}
          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-ink-200 bg-ink-50 py-2.5 text-center text-xs font-semibold text-ink-700 transition-all hover:border-primary-400 hover:text-primary-600 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:text-primary-400"
             >
          View Video Services & Work Process
        </button>
        </div>
      )}
    </motion.div>
  );
}
