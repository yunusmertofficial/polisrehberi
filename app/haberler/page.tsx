import Link from 'next/link';
import { FileText, Calendar, ChevronRight } from 'lucide-react';

export default function HaberlerPage() {
  const news = [
    { id: 1, title: '31. Dönem POMEM Mülakat Sonuçları Ne Zaman Açıklanacak?', date: '15 Mayıs 2024', category: 'POMEM', img: '1', excerpt: 'Emniyet Genel Müdürlüğü tarafından yapılan son duyurulara göre adayların merakla beklediği süreç hakkında detaylar netleşmeye başladı.' },
    { id: 2, title: '2024 Yılı PMYO Giriş Sınavı Başvuru Şartları Belli Oldu', date: '12 Mayıs 2024', category: 'PMYO', img: '2', excerpt: 'Polis Meslek Yüksekokulu giriş sınavı için başvuru şartları ve kontenjanlar açıklandı. Lise mezunu adaylar için detaylar haberimizde.' },
    { id: 3, title: 'Emniyet Teşkilatı Sağlık Şartları Yönetmeliğinde Değişiklik', date: '10 Mayıs 2024', category: 'Mevzuat', img: '3', excerpt: 'Resmi Gazete\'de yayımlanan yeni kararname ile Emniyet Teşkilatı Sağlık Şartları Yönetmeliği\'nde önemli değişiklikler yapıldı.' },
    { id: 4, title: 'Yeni Dönem Çarşı ve Mahalle Bekçisi Alımı Beklentileri', date: '08 Mayıs 2024', category: 'Bekçi', img: '4', excerpt: 'İçişleri Bakanlığı kaynaklarından alınan bilgilere göre yeni dönem bekçi alımları için hazırlıklar sürüyor.' },
    { id: 5, title: 'PAEM 8. Dönem Mezuniyet Töreni Gerçekleştirildi', date: '05 Mayıs 2024', category: 'PAEM', img: '5', excerpt: 'Polis Amirleri Eğitim Merkezi 8. dönem mezunları, düzenlenen törenle diplomalarını alarak görevlerine başladı.' },
    { id: 6, title: 'Polis Sandığı (POLSAN) 2024 Temettü Oranları Açıklandı', date: '01 Mayıs 2024', category: 'Genel', img: '6', excerpt: 'POLSAN Yönetim Kurulu tarafından yapılan açıklamaya göre 2024 yılı temettü oranları ve ödeme tarihleri belli oldu.' },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Haberler</h1>
          <p className="text-slate-600">Polis adayları ve emniyet personeli için en güncel haberler ve duyurular.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <div className="h-48 relative bg-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://picsum.photos/seed/${item.img}/600/400`} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide uppercase">
                    {item.category}
                  </span>
                  <span className="text-slate-500 text-sm flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug hover:text-blue-600 transition-colors">
                  <Link href={`/haberler/${item.id}`}>{item.title}</Link>
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
                  {item.excerpt}
                </p>
                <Link href={`/haberler/${item.id}`} className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center mt-auto">
                  Devamını Oku <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
