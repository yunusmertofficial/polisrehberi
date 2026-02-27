import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-lg text-white tracking-tight">
                POLİS<span className="text-blue-400">REHBERİ</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Polis adayları ve emniyet teşkilatı mensupları için en güncel haberler, sınav duyuruları, mevzuat bilgileri ve rehber içerikler.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/iletisim" className="hover:text-blue-400 transition-colors">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="hover:text-blue-400 transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/iletisim" className="hover:text-blue-400 transition-colors">Kullanım Şartları</Link></li>
              <li><Link href="/iletisim" className="hover:text-blue-400 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kategoriler</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sinavlar" className="hover:text-blue-400 transition-colors">POMEM Alımları</Link></li>
              <li><Link href="/sinavlar" className="hover:text-blue-400 transition-colors">PMYO Alımları</Link></li>
              <li><Link href="/sinavlar" className="hover:text-blue-400 transition-colors">PAEM Duyuruları</Link></li>
              <li><Link href="/sinavlar" className="hover:text-blue-400 transition-colors">Bekçi Alımları</Link></li>
              <li><Link href="/sinavlar" className="hover:text-blue-400 transition-colors">Görevde Yükselme</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 shrink-0" />
                <span>Ankara, Türkiye</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                <span>+90 (555) 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <span>iletisim@polisrehberi.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Polis Rehberi. Tüm hakları saklıdır. Bu site resmi bir kurum sitesi değildir, bilgilendirme amaçlıdır.</p>
        </div>
      </div>
    </footer>
  );
}
