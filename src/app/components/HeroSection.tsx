import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { routes } from '../routes';

export default function HeroSection() {
  const trustIndicators = [
    'Custom Design',
    'Handcrafted Precision',
    'Premium Material',
    'Professional Installation',
  ];

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/6281234567890?text=Halo%20Pandai%20Besi%2C%20saya%20tertarik%20untuk%20konsultasi%20custom%20metalwork',
      '_blank'
    );
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a]/50 to-[#0a0a0a] z-10" />
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1762117863419-cc6df137729e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Luxury metalwork"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 via-transparent to-[#cd7f32]/5 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-10" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2 mb-6 sm:mb-8 bg-gradient-to-r from-[#d4af37]/10 to-[#cd7f32]/10 border border-[#d4af37]/20 rounded-full"
          >
            <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm tracking-wider text-[#d4af37] uppercase">
              Premium Artisan Metalwork
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[1.75rem] leading-tight sm:text-4xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 tracking-tight px-1"
            style={{
              fontWeight: 600,
              background: 'linear-gradient(135deg, #ffffff 0%, #d4af37 50%, #f5f5f5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Custom Besi Artisan Premium
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg sm:text-2xl md:text-3xl mb-4 text-[#d4af37] px-2"
            style={{ fontWeight: 500 }}
          >
            untuk Rumah &amp; Properti Elegan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm sm:text-lg md:text-xl mb-8 sm:mb-10 text-[#cccccc] max-w-2xl mx-auto leading-relaxed px-2"
          >
            Pandai Besi menghadirkan custom metalwork premium untuk rumah modern, villa, dan properti
            eksklusif. Setiap karya dibuat presisi dan disesuaikan dengan karakter desain Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 mb-8 sm:mb-10 max-w-md sm:max-w-none mx-auto"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-2 sm:px-4 sm:py-2 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-lg"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37] shrink-0" />
                <span className="text-[11px] sm:text-sm text-[#f5f5f5] text-left leading-tight">
                  {indicator}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto"
          >
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={openWhatsApp}
              className="w-full sm:w-auto group relative px-6 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#d4af37] to-[#daa520] text-[#0a0a0a] rounded-lg overflow-hidden"
              style={{ fontWeight: 600, fontSize: '1rem' }}
            >
              <span className="relative flex items-center justify-center gap-2">
                Konsultasi via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.button>

            <Link
              to={routes.portfolio}
              className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-transparent border-2 border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-[#d4af37]/10 transition-all text-center"
              style={{ fontWeight: 600, fontSize: '1rem' }}
            >
              Lihat Hasil Karya
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-[#d4af37]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
