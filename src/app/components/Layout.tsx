import { Outlet, ScrollRestoration } from 'react-router';
import SiteHeader from './SiteHeader';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#f5f5f5] overflow-x-hidden">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollRestoration />
    </div>
  );
}
