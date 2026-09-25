import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
};

export default function FounderCard({ founder, index, onOpenVideoModal }) {
  const socials = Object.entries(founder.social).filter(([, url]) => url);
  const isVideoFounder = founder.name === 'Shaheinsha' || founder.role.includes('Video');

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
        <div className="absolute inset-0 flex items-center justify-center text-ink-400">
          <span className="font-display text-3xl font-bold">
            {founder.name.charAt(0)}
          </span>
        </div>
      </div>

      <div className="mt-5 text-center">
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

      {isVideoFounder && onOpenVideoModal && (
        <button
          type="button"
          onClick={onOpenVideoModal}
          className="mt-6 w-full rounded-2xl border border-accent-500/30 bg-accent-500/10 py-2.5 text-center text-xs font-bold text-accent-600 transition-all hover:bg-accent-500 hover:text-white dark:text-accent-400 dark:hover:bg-accent-500 dark:hover:text-white"
        >
          View Video Services & Work Process
        </button>
      )}
    </motion.div>
  );
}
