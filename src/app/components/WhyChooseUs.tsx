import { motion } from 'motion/react';
import { Sparkles, Award, Shield, Ruler, Wrench, CheckCircle } from 'lucide-react';

type WhyChooseUsProps = {
  embedded?: boolean;
};

export default function WhyChooseUs({ embedded = false }: WhyChooseUsProps) {
  const reasons = [
    {
      icon: Sparkles,
      title: 'Fully Custom Artisan Work',
      description: 'Tidak ada produk factory. Setiap karya dibuat khusus sesuai desain dan kebutuhan Anda.',
      gradient: 'from-[#d4af37] to-[#daa520]'
    },
    {
      icon: Award,
      title: 'Precision Craftsmanship',
      description: 'Detail-oriented finishing dan kualitas welding premium dengan standar tinggi.',
      gradient: 'from-[#cd7f32] to-[#d4af37]'
    },
    {
      icon: Shield,
      title: 'Premium Material Selection',
      description: 'Besi berkualitas tinggi dengan finishing tahan lama dan anti karat.',
      gradient: 'from-[#daa520] to-[#f0e68c]'
    },
    {
      icon: Ruler,
      title: 'Luxury Residential Experience',
      description: 'Dirancang khusus untuk rumah mewah dan proyek properti premium.',
      gradient: 'from-[#b8860b] to-[#cd7f32]'
    },
    {
      icon: Wrench,
      title: 'Consultation & Measurement',
      description: 'Survey lokasi dan diskusi detail sebelum produksi dimulai.',
      gradient: 'from-[#f0e68c] to-[#d4af37]'
    },
    {
      icon: CheckCircle,
      title: 'Professional Installation',
      description: 'Proses pemasangan rapi dengan tim berpengalaman dan terlatih.',
      gradient: 'from-[#d4af37] to-[#daa520]'
    }
  ];

  return (
    <section className={`relative bg-[#0a0a0a] ${embedded ? 'pt-8 pb-32 md:pb-40' : 'pt-24 pb-32 md:pt-32 md:pb-40'}`}>
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Radial Gradient Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
        {!embedded && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="inline-block mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-5"></div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#d4af37]">Keunggulan</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 tracking-tight" style={{ fontWeight: 600 }}>
              <span className="text-[#f5f5f5]">Mengapa Memilih </span>
              <span className="bg-gradient-to-r from-[#d4af37] to-[#daa520] bg-clip-text text-transparent">Pandai Besi</span>
              <span className="text-[#f5f5f5]">?</span>
            </h2>
            <p className="text-lg md:text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed px-4">
              Kami menghadirkan standar tertinggi dalam custom metalwork untuk properti Anda
            </p>
          </motion.div>
        )}

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 md:p-10 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-[#d4af37] to-[#daa520]"></div>

              {/* Icon Container */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`relative inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${reason.gradient} p-[2px]`}
              >
                <div className="w-full h-full bg-[#0a0a0a] rounded-xl flex items-center justify-center">
                  <reason.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl mb-4 text-[#f5f5f5] group-hover:text-[#d4af37] transition-colors duration-300" style={{ fontWeight: 600 }}>
                {reason.title}
              </h3>
              <p className="text-sm md:text-base text-[#cccccc] leading-relaxed">
                {reason.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 md:mt-28 text-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-4 px-8 py-5 md:px-10 md:py-6 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border border-[#d4af37]/20 rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#daa520] border-2 border-[#0a0a0a]"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#cd7f32] to-[#b8860b] border-2 border-[#0a0a0a]"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#daa520] to-[#f0e68c] border-2 border-[#0a0a0a]"></div>
            </div>
            <span className="text-sm text-[#f5f5f5]">
              Dipercaya oleh <span className="text-[#d4af37]" style={{ fontWeight: 600 }}>100+</span> pemilik properti premium di Jakarta
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
