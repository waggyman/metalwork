import { motion } from 'motion/react';
import { Link } from 'react-router';
import { MapPin } from 'lucide-react';
import { navItems } from '../routes';

const WHATSAPP_URL =
  'https://wa.me/6281234567890?text=Halo%20Pandai%20Besi%2C%20saya%20tertarik%20untuk%20konsultasi%20custom%20metalwork';

function FooterLogo() {
  return (
    <div className="flex items-center gap-4 mb-6">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 shrink-0"
        aria-hidden
      >
        <path
          d="M24 4L8 14v20l16 10 16-10V14L24 4z"
          stroke="#d4af37"
          strokeWidth="1.5"
          fill="rgba(212,175,55,0.08)"
        />
        <path
          d="M24 12v24M16 20h16M18 28h12"
          stroke="#d4af37"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="20" r="3" fill="#d4af37" />
      </svg>
      <div className="leading-tight">
        <p
          className="text-xl md:text-2xl tracking-wide text-[#d4af37]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
        >
          PANDAI BESI
        </p>
        <p
          className="text-sm tracking-[0.25em] uppercase text-[#d4af37]/90"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
        >
          Artisan
        </p>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    'Jakarta Selatan',
    'Jakarta Barat',
    'Jakarta Timur',
    'Jakarta Utara',
    'Jakarta Pusat',
    'Tangerang',
    'BSD',
    'Bekasi',
  ];

  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <footer className="relative bg-[#0c0c0c] border-t border-[#1f1f1f]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
        <div className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <Link to="/" className="inline-block">
                <FooterLogo />
              </Link>
              <p className="text-sm text-[#a3a3a3] leading-relaxed max-w-sm mb-8">
                Premium custom metalwork untuk rumah dan properti elegant. Setiap karya dibuat dengan
                presisi artisan dan finishing berkualitas tinggi.
              </p>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4af37] text-[#1a1408] text-sm hover:shadow-lg hover:shadow-[#d4af37]/15 transition-shadow duration-300"
                style={{ fontWeight: 600 }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                Hubungi via WhatsApp
              </motion.button>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4
                className="text-sm tracking-[0.2em] uppercase text-[#f5f5f5] mb-6"
                style={{ fontWeight: 700 }}
              >
                Navigasi
              </h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-[#a3a3a3] hover:text-[#d4af37] transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4
                className="text-sm tracking-[0.2em] uppercase text-[#f5f5f5] mb-6"
                style={{ fontWeight: 700 }}
              >
                Area Layanan
              </h4>
              <ul className="space-y-3">
                {serviceAreas.map((area) => (
                  <li key={area} className="text-sm text-[#a3a3a3]">
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[#1f1f1f]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#737373]">
              © {currentYear} Pandai Besi. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#737373]">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
