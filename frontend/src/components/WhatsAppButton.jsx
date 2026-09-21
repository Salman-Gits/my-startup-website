import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

// Floating WhatsApp button visible on all pages. Uses the configured number.
export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi, I found your website and I'm interested in your services."
  );
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-110 active:scale-95 sm:bottom-6 sm:right-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ y: -2 }}
    >
      <MessageCircle size={26} fill="white" className="text-white" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </motion.a>
  );
}
