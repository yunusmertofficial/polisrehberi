import Link from 'next/link';
import { ChevronRight, Calendar, FileText, Bell, Users, ShieldCheck, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              31. Dönem POMEM Başvuruları Başladı
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Emniyet Teşkilatına Giden Yolda <span className="text-blue-400">Rehberiniz</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Polis adayları ve görevli personeller için en güncel haberler, sınav duyuruları, mülakat taktikleri ve mevzuat bilgileri tek bir platformda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/haberler" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                Son Duyurular <ChevronRight className="h-4 w-4" />
              </Link>
              <Link href="/soru-cevap" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-slate-700">
                Soru-Cevap Forumu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links / Categories */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'POMEM', desc: 'Polis Meslek Eğitim Merkezi', icon: Users, color: 'bg-blue-100 text-blue-600', link: '/sinavlar' },
              { title: 'PMYO', desc: 'Polis Meslek Yüksekokulu', icon: BookOpen, color: 'bg-emerald-100 text-emerald-600', link: '/sinavlar' },
              { title: 'PAEM', desc: 'Polis Amirleri Eğitim Merkezi', icon: ShieldCheck, color: 'bg-amber-100 text-amber-600', link: '/sinavlar' },
              { title: 'Bekçi Alımı', desc: 'Çarşı ve Mahalle Bekçiliği', icon: Bell, color: 'bg-purple-100 text-purple-600', link: '/sinavlar' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-slate-50 hover:bg-white text-center flex flex-col items-center">
                <div className={`p-4 rounded-full ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: News */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Güncel Haberler
                </h2>
                <Link href="/haberler" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                  Tümünü Gör <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-6">
                {[
                  { title: '31. Dönem POMEM Mülakat Sonuçları Ne Zaman Açıklanacak?', date: '15 Mayıs 2024', category: 'POMEM', img: '1' },
                  { title: '2024 Yılı PMYO Giriş Sınavı Başvuru Şartları Belli Oldu', date: '12 Mayıs 2024', category: 'PMYO', img: '2' },
                  { title: 'Emniyet Teşkilatı Sağlık Şartları Yönetmeliğinde Değişiklik', date: '10 Mayıs 2024', category: 'Mevzuat', img: '3' },
                  { title: 'Yeni Dönem Çarşı ve Mahalle Bekçisi Alımı Beklentileri', date: '08 Mayıs 2024', category: 'Bekçi', img: '4' },
                ].map((news, i) => (
                  <article key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 h-48 sm:h-auto relative bg-slate-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`https://picsum.photos/seed/${news.img}/400/300`} alt={news.title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="p-6 sm:w-2/3 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide uppercase">
                          {news.category}
                        </span>
                        <span className="text-slate-500 text-sm flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {news.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug hover:text-blue-600 transition-colors">
                        <Link href={`/haberler/${news.img}`}>{news.title}</Link>
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-2">
                        Emniyet Genel Müdürlüğü tarafından yapılan son duyurulara göre adayların merakla beklediği süreç hakkında detaylar netleşmeye başladı.
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Important Announcements */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Bell className="h-5 w-5 text-red-500" />
                  Önemli Duyurular
                </h3>
                <ul className="space-y-4">
                  {[
                    'Polis Akademisi 2024 Yılı Sınav Takvimi Güncellendi',
                    'Şark Hizmeti Sürelerinde Yeni Düzenleme',
                    'Polis Sandığı (POLSAN) 2024 Temettü Oranları',
                    'Görevde Yükselme Sınavı (Misyon Koruma) Başvuruları'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group cursor-pointer">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-500 shrink-0 group-hover:scale-150 transition-transform" />
                      <p className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors font-medium leading-tight">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Tools */}
              <div className="bg-slate-900 rounded-xl p-6 text-white shadow-lg">
                <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-3">Faydalı Araçlar</h3>
                <div className="space-y-3">
                  <Link href="/mevzuat" className="block p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-sm font-medium flex justify-between items-center">
                    Boy/Kilo Endeksi (VKİ) Hesaplama
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                  <Link href="/mevzuat" className="block p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-sm font-medium flex justify-between items-center">
                    Polis Maaşı Hesaplama (2024)
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                  <Link href="/soru-cevap" className="block p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-sm font-medium flex justify-between items-center">
                    Mülakat Çıkmış Sorular
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
