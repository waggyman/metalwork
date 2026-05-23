import PageBanner from '../components/PageBanner';
import FinalCTA from '../components/FinalCTA';
import FAQSection from '../components/FAQSection';

export default function KontakPage() {
  return (
    <>
      <PageBanner
        label="Kontak"
        title="Hubungi Pandai Besi"
        description="Konsultasikan kebutuhan custom metalwork Anda. Tim kami siap membantu dari survey hingga instalasi."
      />
      <FinalCTA embedded />
      <FAQSection />
    </>
  );
}
