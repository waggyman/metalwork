import HeroSection from '../components/HeroSection';
import PortfolioSection from '../components/PortfolioSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PortfolioSection limit={3} showSeeAll />
      <ProcessSection variant="preview" showSeeAll showHeader />
      <TestimonialsSection limit={3} />
      <FinalCTA />
    </>
  );
}
