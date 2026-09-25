import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white/50 text-ink-700 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-ink-700 dark:bg-white/5 dark:text-ink-200 dark:hover:text-primary-400"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </motion.span>
    </button>
  );
}
