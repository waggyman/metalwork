import { motion } from 'motion/react';

type PageBannerProps = {
  label: string;
  title: string;
  description: string;
};

export default function PageBanner({ label, title, description }: PageBannerProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-[#121212] to-[#0a0a0a]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#d4af37_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
            <p className="text-sm tracking-[0.3em] uppercase text-[#d4af37]">{label}</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-[#f5f5f5]" style={{ fontWeight: 600 }}>
            {title}
          </h1>
          <p className="text-lg md:text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
