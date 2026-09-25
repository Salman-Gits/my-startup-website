import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';

export default function ToastNotification({ toast, onClose }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          className={`fixed bottom-20 left-1/2 z-[200] flex -translate-x-1/2 items-center gap-3 rounded-2xl px-5 py-4 shadow-2xl sm:bottom-6 ${
            toast.type === 'success'
              ? 'bg-success-600 text-white'
              : 'bg-error-600 text-white'
          }`}
          role="alert"
        >
          {toast.type === 'success' ? (
            <CheckCircle2 size={20} />
          ) : (
            <XCircle size={20} />
          )}
          <p className="text-sm font-medium">{toast.message}</p>
          <button
            onClick={onClose}
            aria-label="Dismiss notification"
            className="ml-2 text-white/80 hover:text-white"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
