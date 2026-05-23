import PageBanner from '../components/PageBanner';
import PortfolioSection from '../components/PortfolioSection';

export default function PortfolioPage() {
  return (
    <>
      <PageBanner
        label="Portfolio"
        title="Semua Karya Premium"
        description="Koleksi lengkap custom metalwork yang telah kami kerjakan untuk properti premium di Jakarta dan sekitarnya."
      />
      <PortfolioSection showHeader={false} />
    </>
  );
}
