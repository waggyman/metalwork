import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { serviceItems } from '../data/services';

export default function ServicesSection() {
  const openWhatsApp = (title: string) => {
    window.open(
      `https://wa.me/6281234567890?text=Halo%20Pandai%20Besi%2C%20saya%20tertarik%20layanan%20${encodeURIComponent(title)}`,
      '_blank'
    );
  };

  return (
    <section className="relative py-16 md:py-24 pb-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {serviceItems.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-300"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/20 to-transparent" />
              </div>
              <div className="p-8 md:p-10">
                <h2
                  className="text-xl md:text-2xl mb-3 text-[#f5f5f5] group-hover:text-[#d4af37] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  {service.title}
                </h2>
                <p className="text-sm md:text-base text-[#cccccc] leading-relaxed mb-6">
                  {service.description}
                </p>
                <button
                  type="button"
                  onClick={() => openWhatsApp(service.title)}
                  className="inline-flex items-center gap-2 text-sm text-[#d4af37] hover:text-[#f0e68c] transition-colors"
                  style={{ fontWeight: 500 }}
                >
                  Konsultasi Layanan Ini
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
