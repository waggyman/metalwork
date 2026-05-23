import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { processSteps } from '../data/process';
import { routes } from '../routes';

type ProcessSectionProps = {
  variant?: 'preview' | 'full';
  showSeeAll?: boolean;
  showHeader?: boolean;
};

export default function ProcessSection({
  variant = 'preview',
  showSeeAll = false,
  showHeader = true,
}: ProcessSectionProps) {
  const isFull = variant === 'full';

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] ${
        isFull ? 'py-12 pb-32' : 'py-16 sm:py-24 md:py-32'
      }`}
    >
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1698664683348-f9f35b809821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16 md:mb-20"
          >
            <div className="inline-block mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
              <p className="text-sm tracking-[0.3em] uppercase text-[#d4af37]">Proses</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 tracking-tight px-2" style={{ fontWeight: 600 }}>
              <span className="text-[#f5f5f5]">Dari </span>
              <span className="bg-gradient-to-r from-[#d4af37] to-[#daa520] bg-clip-text text-transparent">Ide</span>
              <span className="text-[#f5f5f5]"> Menjadi </span>
              <span className="bg-gradient-to-r from-[#d4af37] to-[#daa520] bg-clip-text text-transparent">Karya</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#cccccc] max-w-3xl mx-auto px-2">
              Proses terstruktur dan transparan untuk hasil yang melampaui ekspektasi
            </p>
          </motion.div>
        )}

        {/* Compact timeline — home preview */}
        {!isFull && (
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden lg:block absolute left-0 right-0 top-24 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

            {/* Mobile: horizontal scroll */}
            <div className="lg:hidden -mx-4 px-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide flex gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="snap-center shrink-0 w-[min(280px,78vw)] flex flex-col items-center text-center p-5 rounded-2xl bg-[#1a1a1a]/60 border border-[#d4af37]/10"
                >
                  <div className="relative mb-4">
                    <div
                      className="relative w-16 h-16 rounded-full flex items-center justify-center border-2"
                      style={{
                        borderColor: step.color,
                        background: `linear-gradient(135deg, ${step.color}15, ${step.color}05)`,
                      }}
                    >
                      <step.icon className="w-7 h-7" style={{ color: step.color }} />
                    </div>
                    <div
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[10px] border-2 border-[#0a0a0a]"
                      style={{ backgroundColor: step.color, color: '#0a0a0a', fontWeight: 700 }}
                    >
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-base mb-2 text-[#f5f5f5]" style={{ fontWeight: 600 }}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#cccccc] leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Desktop: grid */}
            <div className="hidden lg:grid grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-6">
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-50"
                      style={{ backgroundColor: step.color }}
                    />
                    <div
                      className="relative w-20 h-20 rounded-full flex items-center justify-center border-2"
                      style={{
                        borderColor: step.color,
                        background: `linear-gradient(135deg, ${step.color}15, ${step.color}05)`,
                      }}
                    >
                      <step.icon className="w-8 h-8" style={{ color: step.color }} />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#0a0a0a] text-xs"
                      style={{ backgroundColor: step.color, color: '#0a0a0a', fontWeight: 700 }}
                    >
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg mb-3 text-[#f5f5f5] px-2" style={{ fontWeight: 600 }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#cccccc] leading-relaxed px-2">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed steps — proses page */}
        {isFull && (
          <div className="space-y-8 md:space-y-10 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-8 md:p-10 rounded-2xl bg-[#1a1a1a]/80 border border-[#d4af37]/10 backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="shrink-0 flex items-center gap-4">
                    <div
                      className="relative w-16 h-16 rounded-full flex items-center justify-center border-2"
                      style={{
                        borderColor: step.color,
                        background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
                      }}
                    >
                      <step.icon className="w-7 h-7" style={{ color: step.color }} />
                    </div>
                    <span
                      className="text-2xl sm:hidden"
                      style={{ color: step.color, fontWeight: 700 }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span
                        className="hidden sm:inline text-sm tracking-widest"
                        style={{ color: step.color, fontWeight: 700 }}
                      >
                        TAHAP {step.number}
                      </span>
                      <h3 className="text-xl md:text-2xl text-[#f5f5f5]" style={{ fontWeight: 600 }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#cccccc] mb-4 leading-relaxed">{step.detailedDescription}</p>
                    <ul className="space-y-2">
                      {step.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[#a3a3a3]">
                          <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {showSeeAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 sm:mt-14 text-center px-2"
          >
            <Link
              to={routes.proses}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors duration-300"
              style={{ fontWeight: 600 }}
            >
              Lihat Proses Lengkap
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}

        {isFull && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  'https://wa.me/6281234567890?text=Halo%20Pandai%20Besi%2C%20saya%20ingin%20konsultasi%20proses%20pembuatan',
                  '_blank'
                )
              }
              className="px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#daa520] text-[#0a0a0a] rounded-lg"
              style={{ fontWeight: 600, fontSize: '1.125rem' }}
            >
              Mulai Konsultasi Sekarang
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
