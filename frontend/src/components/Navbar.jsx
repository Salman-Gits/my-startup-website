import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Clapperboard } from 'lucide-react';
import { navLinks, siteConfig } from '@/data/siteConfig';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      let current = '#home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = `#${id}`;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200/60 bg-white/80 backdrop-blur-xl dark:border-ink-800/60 dark:bg-ink-950/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-max flex h-16 items-center justify-between px-5 sm:px-8 md:h-20 lg:px-12">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2.5"
          aria-label={siteConfig.name}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30">
            <Clapperboard size={18} />
          </span>
          <span className="font-display text-base font-bold tracking-tight text-ink-900 dark:text-white sm:text-lg">
            {siteConfig.name}
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === link.href
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-primary-500/10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            onClick={() => handleNav('#contact')}
            className="hidden btn-primary md:inline-flex"
          >
            Start a Project
          </button>
          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 dark:border-ink-700 dark:text-ink-200 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink-200/60 bg-white/95 backdrop-blur-xl dark:border-ink-800/60 dark:bg-ink-950/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    active === link.href
                      ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-900'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="btn-primary mt-2 w-full"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
