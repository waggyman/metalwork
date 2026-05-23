import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apakah bisa custom sesuai desain rumah?',
      answer: 'Ya, 100% custom! Kami tidak menjual produk jadi. Setiap karya dibuat khusus sesuai desain, ukuran, dan karakter rumah Anda. Anda bisa memberikan referensi atau konsep, dan kami akan mewujudkannya dengan presisi tinggi.'
    },
    {
      question: 'Apakah melayani railing tangga melingkar?',
      answer: 'Tentu saja! Railing tangga melingkar atau curved staircase adalah salah satu spesialisasi kami. Kami memiliki expertise dalam membuat railing dengan lengkungan presisi, baik untuk tangga spiral, setengah lingkaran, atau desain custom lainnya.'
    },
    {
      question: 'Apakah bisa request material tertentu?',
      answer: 'Ya, kami menyediakan berbagai pilihan material premium seperti stainless steel, hollow galvanis, besi tempa (wrought iron), dan kombinasi material lainnya. Kami akan memberikan rekomendasi terbaik sesuai kebutuhan dan budget Anda.'
    },
    {
      question: 'Berapa estimasi waktu pengerjaan?',
      answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas dan ukuran proyek. Rata-rata: railing tangga 2-3 minggu, pagar custom 3-4 minggu. Timeline detail akan diinformasikan setelah survey dan diskusi desain.'
    },
    {
      question: 'Apakah melayani area luar Jakarta?',
      answer: 'Ya, kami melayani Jakarta dan area sekitarnya seperti Tangerang, Bekasi, Depok, dan Bogor. Untuk area di luar tersebut, silakan konsultasi via WhatsApp untuk memastikan coverage area kami.'
    },
    {
      question: 'Apakah ada survey lokasi?',
      answer: 'Ya, kami selalu melakukan survey dan pengukuran lokasi sebelum produksi dimulai. Survey dilakukan secara gratis untuk memastikan akurasi dimensi dan memahami kondisi lapangan agar hasil instalasi sempurna.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#d4af37_12%,transparent_12.5%,transparent_87%,#d4af37_87.5%,#d4af37),linear-gradient(150deg,#d4af37_12%,transparent_12.5%,transparent_87%,#d4af37_87.5%,#d4af37),linear-gradient(30deg,#d4af37_12%,transparent_12.5%,transparent_87%,#d4af37_87.5%,#d4af37),linear-gradient(150deg,#d4af37_12%,transparent_12.5%,transparent_87%,#d4af37_87.5%,#d4af37)] bg-[length:80px_140px] bg-[position:0_0,0_0,40px_70px,40px_70px]"></div>
      </div>

      <div className="relative container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4"></div>
            <p className="text-sm tracking-[0.3em] uppercase text-[#d4af37]">FAQ</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
            <span className="text-[#f5f5f5]">Pertanyaan </span>
            <span className="bg-gradient-to-r from-[#d4af37] to-[#daa520] bg-clip-text text-transparent">Umum</span>
          </h2>
          <p className="text-lg md:text-xl text-[#cccccc] max-w-2xl mx-auto">
            Jawaban untuk pertanyaan yang sering diajukan
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'border-[#d4af37]/30'
                    : 'border-[#d4af37]/10 hover:border-[#d4af37]/20'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left transition-colors duration-300"
                >
                  <span
                    className={`text-lg transition-colors duration-300 ${
                      openIndex === index ? 'text-[#d4af37]' : 'text-[#f5f5f5] group-hover:text-[#d4af37]'
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      openIndex === index
                        ? 'border-[#d4af37] bg-[#d4af37]/10'
                        : 'border-[#d4af37]/20 group-hover:border-[#d4af37]/40'
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors duration-300 ${
                        openIndex === index ? 'text-[#d4af37]' : 'text-[#999999]'
                      }`}
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="pt-2 border-t border-[#d4af37]/10">
                          <p className="text-[#cccccc] leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border border-[#d4af37]/20 rounded-2xl">
            <p className="text-[#f5f5f5]">Masih ada pertanyaan lain?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/6281234567890?text=Halo%20Pandai%20Besi%2C%20saya%20punya%20pertanyaan', '_blank')}
              className="px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#daa520] text-[#0a0a0a] rounded-lg"
              style={{ fontWeight: 600 }}
            >
              Tanya via WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
