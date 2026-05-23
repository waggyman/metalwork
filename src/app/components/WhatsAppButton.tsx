import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      return () => clearTimeout(hideTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20Pandai%20Besi%2C%20saya%20ingin%20konsultasi', '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative px-4 py-3 bg-[#1a1a1a] border border-[#d4af37]/30 rounded-lg shadow-2xl max-w-[200px]"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center text-[#0a0a0a] hover:bg-[#f0e68c] transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="text-xs text-[#f5f5f5] leading-relaxed" style={{ fontWeight: 500 }}>
                  Ada pertanyaan? Chat kami sekarang!
                </p>
                <div className="absolute top-1/2 -right-2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#d4af37]/30"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)'
            }}
            whileTap={{ scale: 0.9 }}
            onClick={openWhatsApp}
            className="relative w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#daa520] rounded-full flex items-center justify-center shadow-2xl group overflow-hidden"
            aria-label="WhatsApp"
          >
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-[#d4af37] opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>

            {/* Pulse Animation Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#d4af37]"
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [1, 0, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut'
              }}
            />

            {/* Icon */}
            <MessageCircle className="relative w-8 h-8 text-[#0a0a0a]" />

            {/* Notification Dot */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
              className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0a0a0a]"
            />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
