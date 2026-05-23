import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

type TestimonialsSectionProps = {
  limit?: number;
};

export default function TestimonialsSection({ limit }: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: 'Bapak Andri',
      location: 'Jakarta Selatan',
      rating: 5,
      text: 'Hasil railing tangga melingkar kami luar biasa. Finishing sangat rapi dan terasa premium. Tim Pandai Besi sangat profesional dari konsultasi hingga instalasi.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      name: 'Ibu Natalia',
      location: 'Pantai Indah Kapuk',
      rating: 5,
      text: 'Awalnya sulit cari vendor pagar custom yang benar-benar bisa mengikuti desain rumah. Pandai Besi hasilnya presisi, detailnya sempurna. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      name: 'Bapak Kevin',
      location: 'Jakarta Barat',
      rating: 5,
      text: 'Tim profesional, pengerjaan cepat, dan hasil pagar rumah terlihat sangat mewah. Kualitas welding dan finishing benar-benar premium, tidak seperti jasa las biasa.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    {
      name: 'Ibu Felicia',
      location: 'BSD',
      rating: 5,
      text: 'Kami buat pagar kolam ikan custom dan hasilnya sangat estetik. Design-nya unik dan sesuai konsep taman kami. Craftsmanship-nya top!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      name: 'Bapak Hendra',
      location: 'Jakarta Timur',
      rating: 5,
      text: 'Detail pengerjaan sangat bagus. Tidak terlihat seperti jasa las biasa. Ini benar-benar artisan metalwork dengan standar luxury residential.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    }
  ];

  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#0a0a0a]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,#d4af37_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/5 via-transparent to-transparent"></div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4"></div>
            <p className="text-sm tracking-[0.3em] uppercase text-[#d4af37]">Testimoni</p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 tracking-tight px-2" style={{ fontWeight: 600 }}>
            <span className="text-[#f5f5f5]">Kata </span>
            <span className="bg-gradient-to-r from-[#d4af37] to-[#daa520] bg-clip-text text-transparent">Klien</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#cccccc] max-w-3xl mx-auto px-2">
            Kepercayaan dan kepuasan klien adalah prioritas utama kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {items.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-6 sm:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Quote className="w-24 h-24 text-[#d4af37]" />
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[#cccccc] mb-6 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#d4af37]/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#daa520] p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#f5f5f5] mb-1" style={{ fontWeight: 600 }}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#d4af37]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#d4af37]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 px-8 py-6 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border border-[#d4af37]/20 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <span className="text-[#f5f5f5]" style={{ fontWeight: 600 }}>
                5.0
              </span>
            </div>
            <div className="h-8 w-px bg-[#d4af37]/20 hidden md:block"></div>
            <p className="text-sm text-[#cccccc]">
              Rating rata-rata dari <span className="text-[#d4af37]" style={{ fontWeight: 600 }}>100+ proyek selesai</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
