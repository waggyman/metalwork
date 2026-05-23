import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import LayananPage from './pages/LayananPage';
import ProsesPage from './pages/ProsesPage';
import TentangPage from './pages/TentangPage';
import KontakPage from './pages/KontakPage';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'portfolio', element: <PortfolioPage /> },
        { path: 'layanan', element: <LayananPage /> },
        { path: 'proses', element: <ProsesPage /> },
        { path: 'tentang', element: <TentangPage /> },
        { path: 'kontak', element: <KontakPage /> },
      ],
    },
  ],
  { basename: basename || undefined }
);

export default function App() {
  return <RouterProvider router={router} />;
}
