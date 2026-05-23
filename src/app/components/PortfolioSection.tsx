import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { portfolioItems } from '../data/portfolio';
import { routes } from '../routes';

type PortfolioSectionProps = {
  limit?: number;
  showSeeAll?: boolean;
  showHeader?: boolean;
};

export default function PortfolioSection({
  limit,
  showSeeAll = false,
  showHeader = true,
}: PortfolioSectionProps) {
  const items = limit ? portfolioItems.slice(0, limit) : portfolioItems;

  const openWhatsApp = (title: string) => {
    window.open(
      `https://wa.me/6281234567890?text=Halo%20Pandai%20Besi%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(title)}`,
      '_blank'
    );
  };

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#d4af37_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

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
              <p className="text-sm tracking-[0.3em] uppercase text-[#d4af37]">Portfolio</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 tracking-tight px-2" style={{ fontWeight: 600 }}>
              <span className="text-[#f5f5f5]">Karya </span>
              <span className="bg-gradient-to-r from-[#d4af37] to-[#daa520] bg-clip-text text-transparent">
                Premium
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#cccccc] max-w-3xl mx-auto px-2">
              Setiap karya adalah masterpiece yang dirancang khusus untuk karakter rumah Anda
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500"
            >
              <div className="relative h-52 sm:h-64 md:h-72 lg:h-80 overflow-hidden shrink-0">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent md:from-[#0a0a0a] md:via-[#0a0a0a]/50 opacity-90 md:opacity-80" />
              </div>

              <div className="relative p-5 sm:p-6 md:p-8 flex-1 flex flex-col justify-end md:absolute md:inset-x-0 md:bottom-0 md:bg-gradient-to-t md:from-[#0a0a0a] md:via-[#0a0a0a]/90 md:to-transparent">
                <h3
                  className="text-lg sm:text-xl md:text-2xl mb-2 text-[#f5f5f5] group-hover:text-[#d4af37] transition-colors duration-300"
                  style={{ fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#cccccc] mb-3 sm:mb-4 leading-relaxed">
                  {item.description}
                </p>
                <motion.button
                  type="button"
                  whileHover={{ x: 5 }}
                  onClick={() => openWhatsApp(item.title)}
                  className="inline-flex items-center gap-2 text-sm text-[#d4af37] hover:text-[#f0e68c] transition-colors duration-300"
                  style={{ fontWeight: 500 }}
                >
                  Ingin Desain Seperti Ini?
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {showSeeAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 sm:mt-14 text-center px-2"
          >
            <Link
              to={routes.portfolio}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors duration-300"
              style={{ fontWeight: 600 }}
            >
              Lihat Semua Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
