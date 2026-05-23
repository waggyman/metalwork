import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import { navItems, routes } from '../routes';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#d4af37]/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-[#0a0a0a]/50 backdrop-blur-lg border-b border-[#d4af37]/5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            <Link
              to={routes.home}
              className="text-base sm:text-lg md:text-xl tracking-wide text-[#d4af37] hover:text-[#f0e68c] transition-colors"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
              onClick={() => setOpen(false)}
            >
              PANDAI BESI
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === routes.home}
                  className={({ isActive }) =>
                    `text-sm transition-colors duration-300 ${
                      isActive ? 'text-[#d4af37]' : 'text-[#cccccc] hover:text-[#f5f5f5]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              type="button"
              className="lg:hidden p-2 -mr-2 text-[#d4af37] rounded-lg hover:bg-[#d4af37]/10 transition-colors"
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-[#0a0a0a]/70 backdrop-blur-sm"
            aria-label="Tutup menu"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute top-14 sm:top-16 left-0 right-0 max-h-[calc(100dvh-3.5rem)] overflow-y-auto bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#d4af37]/15 px-4 py-6 flex flex-col gap-1 shadow-2xl">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === routes.home}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base transition-colors ${
                    isActive
                      ? 'bg-[#d4af37]/10 text-[#d4af37]'
                      : 'text-[#e5e5e5] hover:bg-[#1a1a1a]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
