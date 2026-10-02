import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import FeaturedProject from './components/FeaturedProject';
import About from './components/About';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ToastNotification from './components/ToastNotification';
import VideoEditorModal from './components/VideoEditorModal';
import MaintenancePage from './components/MaintenancePage';
import { useTheme } from './hooks/useTheme';
import { siteConfig } from './data/siteConfig';

// Temporary maintenance mode flag — set to false to restore the full website
const MAINTENANCE_MODE = true;

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [toast, setToast] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Lock body scroll when modal is handled inside Portfolio — hook for Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setToast(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Update document title from config
  useEffect(() => {
    document.title = MAINTENANCE_MODE
      ? `${siteConfig.name} — Website Under Maintenance`
      : siteConfig.seo.title;
  }, []);

  if (MAINTENANCE_MODE) {
    return (
      <div className="min-h-screen bg-white text-ink-900 dark:bg-ink-950 dark:text-ink-100">
        <MaintenancePage
          theme={theme}
          onToggleTheme={toggleTheme}
          onToast={setToast}
        />
        <WhatsAppButton />
        <ToastNotification toast={toast} onClose={() => setToast(null)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-ink-900 dark:bg-ink-950 dark:text-ink-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Services onOpenVideoModal={() => setIsVideoModalOpen(true)} />
        <Portfolio />
        <FeaturedProject />
        <About onOpenVideoModal={() => setIsVideoModalOpen(true)} />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <ContactForm onToast={setToast} />
      </main>

      <Footer />
      <WhatsAppButton />
      <ToastNotification toast={toast} onClose={() => setToast(null)} />
      <VideoEditorModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
