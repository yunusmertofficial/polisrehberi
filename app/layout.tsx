import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Polis Rehberi | Güncel Alımlar, Sınavlar ve Mevzuat',
  description: 'Polis adayları ve emniyet personeli için en güncel POMEM, PMYO, PAEM, Bekçi alımları, mevzuat bilgileri ve haberler.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="tr" className={`${inter.variable} font-sans`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
