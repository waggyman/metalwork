import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';
import { routes } from '../routes';

type FinalCTAProps = {
  embedded?: boolean;
};

export default function FinalCTA({ embedded = false }: FinalCTAProps) {
  const openWhatsApp = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20Pandai%20Besi%2C%20saya%20ingin%20konsultasi%20gratis', '_blank');
  };

  return (
    <section className={`relative overflow-hidden ${embedded ? 'py-16 pb-24' : 'py-16 sm:py-24 md:py-32'}`}>
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1531053326607-9d349096d887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjdXN0b20lMjBtZXRhbHdvcmslMjBjcmFmdHNtYW5zaGlwJTIwd2VsZGluZ3xlbnwxfHx8fDE3Nzk1MTUxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
        </div>
      </div>

      {/* Radial Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/20 via-[#d4af37]/5 to-transparent blur-3xl"></div>

      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-8 bg-gradient-to-r from-[#d4af37]/10 to-[#cd7f32]/10 border border-[#d4af37]/20 rounded-full"
          >
            <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
            <span className="text-sm tracking-wider text-[#d4af37] uppercase">Konsultasi Gratis</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 tracking-tight leading-tight px-1"
            style={{ fontWeight: 600 }}
          >
            <span className="text-[#f5f5f5]">Wujudkan Karya Besi yang Layak</span>
            <br />
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f0e68c] to-[#d4af37] bg-clip-text text-transparent">
              Menjadi Pusat Perhatian
            </span>
            <br />
            <span className="text-[#f5f5f5]">Rumah Anda</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-lg md:text-xl text-[#cccccc] mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Kirim referensi desain atau foto area rumah Anda, tim Pandai Besi akan membantu konsultasi dan estimasi terbaik.
            <span className="text-[#d4af37]"> Gratis dan tanpa komitmen.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 sm:mb-12 max-w-sm sm:max-w-none mx-auto"
          >
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={openWhatsApp}
              className="group relative w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#d4af37] to-[#daa520] text-[#0a0a0a] rounded-lg overflow-hidden transition-all duration-300 sm:min-w-[280px]"
              style={{ fontWeight: 700, fontSize: '1rem' }}
            >
              <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                <MessageCircle className="w-5 h-5 shrink-0" />
                Konsultasi Gratis via WhatsApp
                <ArrowRight className="w-5 h-5 shrink-0" />
              </span>
            </motion.button>

            <Link
              to={routes.portfolio}
              className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-transparent border-2 border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-[#d4af37]/10 transition-all duration-300 sm:min-w-[280px] text-center inline-flex items-center justify-center text-sm sm:text-base"
              style={{ fontWeight: 600 }}
            >
              Lihat Portfolio
            </Link>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 pt-6 sm:pt-8 border-t border-[#d4af37]/10"
          >
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2" style={{ fontWeight: 700 }}>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#daa520] bg-clip-text text-transparent">100+</span>
              </div>
              <div className="text-xs sm:text-sm text-[#999999] text-center">Proyek Selesai</div>
            </div>
            <div className="flex flex-col items-center sm:border-x sm:border-[#d4af37]/20 sm:px-8">
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2" style={{ fontWeight: 700 }}>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#daa520] bg-clip-text text-transparent">5.0</span>
              </div>
              <div className="text-xs sm:text-sm text-[#999999] text-center">Rating Klien</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2" style={{ fontWeight: 700 }}>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#daa520] bg-clip-text text-transparent">10+</span>
              </div>
              <div className="text-xs sm:text-sm text-[#999999] text-center">Tahun Pengalaman</div>
            </div>
          </motion.div>

          {/* Final Accent Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 text-sm text-[#999999] tracking-wide"
          >
            Melayani Jakarta, Tangerang, Bekasi, Depok & Bogor
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
    </section>
  );
}
