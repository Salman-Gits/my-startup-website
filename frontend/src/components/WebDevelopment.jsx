import { motion } from 'framer-motion';
import {
  Briefcase,
  UserCheck,
  Rocket,
  Smartphone,
  Code2,
  Database,
  MailCheck,
  MessageCircle,
  CloudUpload,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig, portfolioUrl } from '../data/siteConfig';

const webServices = [
  {
    icon: Briefcase,
    title: 'Business Websites',
    description:
      'Professional web presence built to establish trust, showcase your brand services, and convert visitors into loyal customers.',
    features: ['Multi-page layout', 'Brand identity', 'Service showcase', 'Call-to-actions'],
    color: 'from-primary-500/10 to-primary-600/5',
    iconColor: 'text-primary-600 dark:text-primary-400',
  },
  {
    icon: UserCheck,
    title: 'Portfolio Websites',
    description:
      'Sleek, high-impact portfolio websites designed for creators, developers, designers, and freelancers to exhibit work and credentials.',
    features: ['Project galleries', 'Resume integration', 'Testimonials', 'Direct inquiry'],
    color: 'from-primary-500/10 to-primary-600/5',
    iconColor: 'text-primary-600 dark:text-primary-400',
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    description:
      'High-converting, laser-focused single page sites engineered for product launches, ad campaigns, and maximum lead generation.',
    features: ['Optimized hooks', 'Fast loading', 'Clear value proposition', 'Lead capture'],
    color: 'from-accent-500/10 to-accent-600/5',
    iconColor: 'text-accent-600 dark:text-accent-400',
  },
  {
    icon: Smartphone,
    title: 'Responsive Websites',
    description:
      'Pixel-perfect mobile, tablet, laptop, and desktop experiences ensuring zero layout glitches and seamless touch navigation.',
    features: ['Mobile-first design', 'Fluid typography', 'Touch optimization', 'Cross-browser check'],
    color: 'from-primary-500/10 to-primary-600/5',
    iconColor: 'text-primary-600 dark:text-primary-400',
  },
  {
    icon: Code2,
    title: 'React Websites',
    description:
      'Modern, component-driven interactive web experiences built with React.js for modularity, clean code, and blazing-fast interactions.',
    features: ['Reusable components', 'Modern React Hooks', 'Client-side routing', 'Fast rendering'],
    color: 'from-primary-500/10 to-primary-600/5',
    iconColor: 'text-primary-600 dark:text-primary-400',
  },
  {
    icon: Database,
    title: 'Full-Stack Websites',
    description:
      'End-to-end web applications connecting dynamic frontends with robust backend architectures, RESTful APIs, and relational databases.',
    features: ['REST API integration', 'Database schemas', 'State management', 'Secure endpoints'],
    color: 'from-primary-500/10 to-primary-600/5',
    iconColor: 'text-primary-600 dark:text-primary-400',
  },
  {
    icon: MailCheck,
    title: 'Contact Forms',
    description:
      'Fully validated, reliable inquiry forms with client-side sanitization, spam rate-limiting, and email notifications.',
    features: ['Instant validation', 'Form feedback', 'Rate limiting', 'Spam protection'],
    color: 'from-primary-500/10 to-primary-600/5',
    iconColor: 'text-primary-600 dark:text-primary-400',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    description:
      'Direct click-to-chat triggers with pre-filled customized message templates to connect interested prospects straight to your phone.',
    features: ['Instant mobile chat', 'Pre-filled messages', 'Floating button', 'Zero delay'],
    color: 'from-[#25D366]/10 to-[#25D366]/5',
    iconColor: 'text-[#25D366]',
  },
  {
    icon: CloudUpload,
    title: 'Website Deployment',
    description:
      'Production-ready builds deployed with modern CI/CD on Vercel or cloud platforms, SSL certificates, and custom domain setup.',
    features: ['Vercel deployment', 'Custom domains', 'SSL security', 'Continuous updates'],
    color: 'from-primary-500/10 to-primary-600/5',
    iconColor: 'text-primary-600 dark:text-primary-400',
  },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function WebDevelopment({ onOpenResumeModal }) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hi! I am interested in building a website for my business/project.'
  )}`;

  return (
    <section id="web-development" className="section-pad relative overflow-hidden bg-ink-50/50 dark:bg-ink-950">
      {/* Decorative ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-600/10" />
        <div className="absolute -left-20 bottom-1/4 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-600/10" />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400">
            <Code2 size={14} />
            <span>WEBSITE DEVELOPMENT & BUILDER</span>
          </div>

          <h2 className="heading-lg mt-4 text-ink-900 dark:text-white">
            Modern Websites Built for Real Businesses & Individuals
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-300">
            Alongside our video editing, web development is our equal core discipline. We build clean,
            responsive, high-performance websites that look great, work flawlessly on every screen,
            and help you connect with your audience.
          </p>
        </motion.div>

        {/* 9 Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {webServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-ink-200/80 bg-white p-7 shadow-sm transition-all hover:border-primary-400/50 hover:shadow-xl dark:border-ink-800 dark:bg-ink-900"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} ${service.iconColor} border border-ink-100 shadow-sm dark:border-ink-800`}
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
                        <CheckCircle2 size={12} className="text-primary-500 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Developer Spotlight & Portfolio Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-14 overflow-hidden rounded-4xl border border-ink-200 bg-white p-8 shadow-sm dark:border-ink-800 dark:bg-ink-900 lg:p-12"
        >
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-3.5 py-1 text-xs font-bold text-primary-600 dark:text-primary-400">
                <Sparkles size={14} />
                <span>Full-Stack Engineering • Verified Developer Background</span>
              </div>

              <h3 className="heading-md mt-4 text-ink-900 dark:text-white">
                Engineered with Modern Technologies
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300 sm:text-base">
                Our websites are crafted by co-founder Mohammed Salman M, an academic Gold Medalist (B.Sc. IT)
                with production full-stack experience across React.js, JavaScript (ES6+), Spring Boot, REST APIs,
                and MySQL. Every project is built for real performance, zero bloat, and smooth user flow.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'React.js (Hooks & Components)',
                  'JavaScript (ES6+)',
                  'REST APIs',
                  'Spring Boot Backend',
                  'MySQL Relational Databases',
                  'Vercel Deployment',
                  'Mobile-First Responsive UI',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-ink-50 px-3 py-1.5 text-xs font-medium text-ink-700 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200"
                  >
                    <CheckCircle2 size={12} className="text-primary-500" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-3xl border border-ink-200/80 bg-ink-50/70 p-6 dark:border-ink-700/60 dark:bg-ink-950/60 lg:col-span-5">
              <h4 className="text-sm font-bold text-ink-900 dark:text-white">
                Ready to build or upgrade your website?
              </h4>
              <p className="text-xs text-ink-600 dark:text-ink-400">
                Get a clean, modern website tailored to your exact brand requirements.
              </p>

              <div className="mt-3 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="btn-primary w-full text-center"
                >
                  <span>Build Your Website</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href={portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full justify-center"
                >
                  <span>View Portfolio</span>
                  <ExternalLink size={15} />
                </a>

                {onOpenResumeModal && (
                  <button
                    type="button"
                    onClick={onOpenResumeModal}
                    className="btn-ghost w-full justify-center"
                  >
                    <span>View Resume & Credentials</span>
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
