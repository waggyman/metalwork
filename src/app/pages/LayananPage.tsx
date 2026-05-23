import PageBanner from '../components/PageBanner';
import ServicesSection from '../components/ServicesSection';

export default function LayananPage() {
  return (
    <>
      <PageBanner
        label="Layanan"
        title="Layanan Custom Metalwork"
        description="Solusi besi artisan premium untuk kebutuhan residential dan properti eksklusif Anda."
      />
      <ServicesSection />
    </>
  );
}
