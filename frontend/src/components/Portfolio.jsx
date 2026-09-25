import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Film, Globe } from 'lucide-react';
import { projects } from '@/data/projects';
import PortfolioCard from './PortfolioCard';
import ProjectModal from './ProjectModal';

const filters = [
  { id: 'all', label: 'All', icon: LayoutGrid },
  { id: 'video', label: 'Videos', icon: Film },
  { id: 'website', label: 'Websites', icon: Globe },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="section-pad bg-ink-50/50 dark:bg-ink-950">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
            Our Work
          </p>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            Projects we&apos;re proud of
          </h2>
          <p className="mt-4 text-base text-ink-600 dark:text-ink-300">
            A selection of videos and websites we&apos;ve created. Click any
            project to see the full details.
          </p>
        </motion.div>

        {/* filter tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex gap-1 rounded-full border border-ink-200 bg-white p-1 dark:border-ink-800 dark:bg-ink-900">
            {filters.map((f) => {
              const Icon = f.icon;
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5 ${
                    isActive
                      ? 'text-white'
                      : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-active"
                      className="absolute inset-0 -z-10 rounded-full bg-primary-600"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon size={15} />
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* grid */}
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <PortfolioCard
                key={project.id}
                project={project}
                index={i}
                onOpen={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-ink-500">
            No projects in this category yet.
          </p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
