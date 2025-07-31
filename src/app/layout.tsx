// src/app/layout.tsx

import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'MobiXpress',
  description: 'Your trusted e-commerce store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
