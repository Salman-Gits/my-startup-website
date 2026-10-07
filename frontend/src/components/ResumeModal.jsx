import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code2,
  Database,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Phone,
  FileText,
} from 'lucide-react';
import { portfolioUrl } from '../data/siteConfig';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-4xl border border-ink-200 bg-white shadow-2xl dark:border-ink-800 dark:bg-ink-900"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ink-200/80 px-6 py-5 dark:border-ink-800 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  <FileText size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white sm:text-xl">
                    Mohammed Salman M
                  </h3>
                  <p className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                    Full Stack Developer & Co-Founder • Resume & Credentials
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:border-ink-700 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-white"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-6">
              {/* Summary & Contacts */}
              <div className="rounded-2xl border border-ink-200 bg-ink-50/50 p-5 dark:border-ink-800 dark:bg-ink-950/50">
                <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-300">
                  Full Stack Developer with internship experience building production web apps using
                  React.js, Java, Spring Boot, Spring Data JPA, REST APIs, and MySQL. Strong in OOP,
                  MVC architecture, and relational database design. Academic Gold Medalist (3
                  consecutive years) with a record of building and deploying end-to-end full-stack
                  solutions.
                </p>

                <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-ink-600 dark:text-ink-400 pt-3 border-t border-ink-200 dark:border-ink-800">
                  <span className="flex items-center gap-1.5">
                    <Mail size={13} className="text-primary-500" />
                    mdsalmand008@gmail.com
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone size={13} className="text-primary-500" />
                    +91-7358653020
                  </span>
                  <a
                    href="https://linkedin.com/in/mohammed-salman-m-17b573262"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-primary-500"
                  >
                    <Linkedin size={13} className="text-primary-500" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Salman-Gits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-primary-500"
                  >
                    <Github size={13} className="text-primary-500" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Achievements & Honors */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                  <Award size={15} className="text-amber-500" />
                  Honors & Achievements
                </h4>
                <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
                  <div className="rounded-xl border border-amber-500/20 bg-amber-50/40 p-3.5 dark:border-amber-500/20 dark:bg-amber-950/20">
                    <p className="text-xs font-bold text-ink-900 dark:text-white">
                      Academic Gold Medalist
                    </p>
                    <p className="text-xs text-ink-600 dark:text-ink-400 mt-0.5">
                      1st, 2nd & 3rd Year (B.Sc. IT) — The New College, Chennai
                    </p>
                  </div>
                  <div className="rounded-xl border border-primary-500/20 bg-primary-50/40 p-3.5 dark:border-primary-500/20 dark:bg-primary-950/20">
                    <p className="text-xs font-bold text-ink-900 dark:text-white">
                      Hackathon & Tech Honors
                    </p>
                    <p className="text-xs text-ink-600 dark:text-ink-400 mt-0.5">
                      2nd Place, Intra-College Hackathon • Best Performer — “Decoding the Interview”
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                  <Code2 size={15} className="text-primary-500" />
                  Technical Skills
                </h4>
                <div className="mt-2.5 space-y-2 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 rounded-xl border border-ink-100 bg-white p-3 dark:border-ink-800 dark:bg-ink-950/40">
                    <span className="font-semibold text-ink-900 dark:text-white sm:w-24 shrink-0">
                      Languages:
                    </span>
                    <span className="text-ink-600 dark:text-ink-300">
                      Java, JavaScript (ES6+), HTML5, CSS3, SQL
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 rounded-xl border border-ink-100 bg-white p-3 dark:border-ink-800 dark:bg-ink-950/40">
                    <span className="font-semibold text-ink-900 dark:text-white sm:w-24 shrink-0">
                      Frontend:
                    </span>
                    <span className="text-ink-600 dark:text-ink-300">
                      React.js (Hooks, Component-Based Architecture), Responsive UI
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 rounded-xl border border-ink-100 bg-white p-3 dark:border-ink-800 dark:bg-ink-950/40">
                    <span className="font-semibold text-ink-900 dark:text-white sm:w-24 shrink-0">
                      Backend & DB:
                    </span>
                    <span className="text-ink-600 dark:text-ink-300">
                      Spring Boot, Spring Data JPA, Hibernate, REST API Development, MySQL (Schema Design, Indexing)
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 rounded-xl border border-ink-100 bg-white p-3 dark:border-ink-800 dark:bg-ink-950/40">
                    <span className="font-semibold text-ink-900 dark:text-white sm:w-24 shrink-0">
                      Tools:
                    </span>
                    <span className="text-ink-600 dark:text-ink-300">
                      Git, GitHub, Postman, VS Code, MVC Architecture, OOP
                    </span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                  <Briefcase size={15} className="text-primary-500" />
                  Work Experience
                </h4>
                <div className="mt-2.5 rounded-2xl border border-ink-200 p-4 dark:border-ink-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-display text-sm font-bold text-ink-900 dark:text-white">
                      Full Stack Developer Intern — Kalsun Groups
                    </h5>
                    <span className="text-xs text-ink-500 dark:text-ink-400">
                      Dec 2025 – Mar 2026 | Chennai, India
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-ink-600 dark:text-ink-300 list-disc list-inside">
                    <li>
                      Built 4+ responsive frontend modules in React.js using Hooks and reusable
                      component architecture, cutting UI development effort by 30% across a 7-member Agile team.
                    </li>
                    <li>
                      Developed 10+ RESTful APIs in Spring Boot with Spring Data JPA following MVC
                      architecture, connecting React frontend modules to backend services.
                    </li>
                    <li>
                      Designed normalized MySQL schemas for 3 core modules ensuring data integrity
                      and optimized query performance for high-traffic use cases.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                  <Database size={15} className="text-primary-500" />
                  Featured Full-Stack Projects
                </h4>
                <div className="mt-2.5 space-y-3">
                  <div className="rounded-xl border border-ink-200 p-4 dark:border-ink-800">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-ink-900 dark:text-white">
                        Blood Bank Management System
                      </h5>
                      <span className="text-[11px] text-primary-600 dark:text-primary-400 font-medium">
                        React.js • Spring Boot • MySQL
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-ink-600 dark:text-ink-300">
                      Full-stack CRUD application for donor registration, blood group search, and
                      real-time inventory tracking with 8+ RESTful APIs integrated via Axios and indexed
                      MySQL queries reducing donor search latency.
                    </p>
                  </div>

                  <div className="rounded-xl border border-ink-200 p-4 dark:border-ink-800">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-ink-900 dark:text-white">
                        E-Commerce Web Application
                      </h5>
                      <span className="text-[11px] text-primary-600 dark:text-primary-400 font-medium">
                        React.js • Java • Spring Boot • MySQL
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-ink-600 dark:text-ink-300">
                      Engineered a full-stack e-commerce platform with product listing, cart
                      management, and stock handling using real-time Add-to-Cart REST communication
                      eliminating page reloads.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-ink-200 p-4 dark:border-ink-800">
                  <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-400">
                    <GraduationCap size={14} className="text-primary-500" />
                    Education
                  </h4>
                  <p className="mt-2 text-xs font-bold text-ink-900 dark:text-white">
                    B.Sc. Information Technology
                  </p>
                  <p className="text-xs text-ink-600 dark:text-ink-400">
                    The New College, Chennai
                  </p>
                  <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mt-1">
                    Graduated 2025 • CGPA: 8.5 / 10
                  </p>
                </div>

                <div className="rounded-xl border border-ink-200 p-4 dark:border-ink-800">
                  <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-400">
                    <CheckCircle2 size={14} className="text-success-500" />
                    Certifications
                  </h4>
                  <ul className="mt-2 space-y-1 text-xs text-ink-600 dark:text-ink-300">
                    <li>• Udemy (HTML/CSS, React.js, Java, MySQL)</li>
                    <li>• Infosys Springboard (Java)</li>
                    <li>• Scaler Academy (React.js, MySQL)</li>
                    <li>• LetsUpgrade (Java & React.js Bootcamps)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-ink-200 px-6 py-4 dark:border-ink-800 sm:px-8 bg-ink-50/50 dark:bg-ink-950/50">
              <span className="text-xs text-ink-500 dark:text-ink-400">
                Verified background from Mohammed Salman M&apos;s curriculum vitae.
              </span>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <span>View Full Portfolio</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
