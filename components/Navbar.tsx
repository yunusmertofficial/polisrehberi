import Link from 'next/link';
import { Shield, Menu, Search, ChevronRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <Link href="/" className="font-bold text-xl tracking-tight">
              POLİS<span className="text-blue-400">REHBERİ</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/haberler" className="hover:text-blue-400 transition-colors text-sm font-medium">Haberler</Link>
            <Link href="/sinavlar" className="hover:text-blue-400 transition-colors text-sm font-medium">Sınavlar & Alımlar</Link>
            <Link href="/mevzuat" className="hover:text-blue-400 transition-colors text-sm font-medium">Mevzuat</Link>
            <Link href="/soru-cevap" className="hover:text-blue-400 transition-colors text-sm font-medium">Soru-Cevap</Link>
            <Link href="/iletisim" className="hover:text-blue-400 transition-colors text-sm font-medium">İletişim</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="md:hidden p-2 hover:bg-slate-800 rounded-md transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
