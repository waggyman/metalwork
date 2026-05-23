import { motion } from 'motion/react';

const stats = [
  { value: '5+', label: 'Tahun Pengalaman' },
  { value: '100+', label: 'Proyek Selesai' },
  { value: '98%', label: 'Klien Puas' },
  { value: '24/7', label: 'Dukungan' },
];

const storyImage =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200';

export default function AboutStorySection() {
  return (
    <section className="relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:min-h-[480px]"
          >
            <img
              src={storyImage}
              alt="Detail metalwork artisan Pandai Besi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight text-[#f5f5f5]"
              style={{ fontWeight: 600 }}
            >
              Cerita di Balik Setiap{' '}
              <span className="bg-gradient-to-r from-[#d4af37] to-[#daa520] bg-clip-text text-transparent">
                Karya
              </span>
            </h2>
            <div className="space-y-5 text-[#a3a3a3] text-base md:text-lg leading-relaxed">
              <p>
                Pandai Besi lahir dari kecintaan terhadap craftsmanship dan keindahan logam. Dengan
                pengalaman lebih dari 5 tahun di industri custom metalwork, kami telah membantu
                ratusan pemilik rumah dan arsitek mewujudkan visi mereka.
              </p>
              <p>
                Kami percaya bahwa setiap properti deserves karya yang unik dan bermutu tinggi. Itu
                sebabnya kami tidak pernah berkompromi dengan kualitas — dari pemilihan material
                hingga finishing akhir.
              </p>
              <p>
                Tim kami terdiri dari pengrajin berpengalaman yang menggabungkan teknik tradisional
                dengan desain modern. Hasilnya? Karya besi yang tidak hanya fungsional, tetapi juga
                menjadi pusat perhatian properti Anda.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p
                className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-[#d4af37] to-[#daa520] bg-clip-text text-transparent"
                style={{ fontWeight: 700 }}
              >
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-[#737373]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
