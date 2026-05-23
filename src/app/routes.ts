export const routes = {
  home: '/',
  portfolio: '/portfolio',
  layanan: '/layanan',
  proses: '/proses',
  tentang: '/tentang',
  kontak: '/kontak',
} as const;

export const navItems = [
  { label: 'Beranda', path: routes.home },
  { label: 'Portfolio', path: routes.portfolio },
  { label: 'Layanan', path: routes.layanan },
  { label: 'Proses Kerja', path: routes.proses },
  { label: 'Tentang Kami', path: routes.tentang },
  { label: 'Kontak', path: routes.kontak },
] as const;
