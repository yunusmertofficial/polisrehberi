import Link from 'next/link';
import { Calendar, User, Tag, ChevronLeft, Share2 } from 'lucide-react';

export default function HaberDetayPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/haberler" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Haberlere Dön
        </Link>

        <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="h-64 md:h-96 relative bg-slate-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://picsum.photos/seed/1/1200/600" alt="Haber Görseli" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase">
                  POMEM
                </span>
                <span className="text-slate-500 text-sm flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  15 Mayıs 2024
                </span>
                <span className="text-slate-500 text-sm flex items-center gap-1.5 hidden sm:flex">
                  <User className="h-4 w-4" />
                  Editör
                </span>
              </div>
              <button className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-blue-50">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              31. Dönem POMEM Mülakat Sonuçları Ne Zaman Açıklanacak?
            </h1>

            <div className="prose prose-slate prose-lg max-w-none text-slate-700">
              <p className="lead text-xl text-slate-600 mb-8 font-medium">
                Emniyet Genel Müdürlüğü Polis Akademisi Başkanlığı tarafından yürütülen 31. Dönem POMEM mülakat süreçleri tamamlandı. Adayların merakla beklediği sonuçların açıklanacağı tarih hakkında detaylar netleşmeye başladı.
              </p>

              <p className="mb-6">
                Polis Meslek Eğitim Merkezleri (POMEM) için gerçekleştirilen sözlü mülakat sınavları geçtiğimiz haftalarda sona ermişti. Binlerce polis adayının katıldığı mülakatların ardından gözler Polis Akademisi Başkanlığı&apos;nın resmi internet sitesine çevrildi.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Değerlendirme Süreci Devam Ediyor</h3>
              
              <p className="mb-6">
                Edinilen bilgilere göre, mülakat komisyonlarının değerlendirme raporları Polis Akademisi Başkanlığı&apos;na ulaştı. Şu anda adayların genel değerlendirme puanları (KPSS, fiziki yeterlilik ve sözlü mülakat puanlarının ortalaması) hesaplanıyor.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-blue-900 m-0">
                  Önemli Not: Sonuçlar açıklandığında adaylar, e-Devlet şifreleri ile Polis Akademisi&apos;nin resmi web sitesi üzerinden sorgulama yapabilecekler.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Beklenen Açıklanma Tarihi</h3>
              
              <p className="mb-6">
                Geçmiş dönemlerdeki süreçler incelendiğinde, mülakatların bitiminden itibaren ortalama 3-4 hafta içerisinde sonuçların ilan edildiği görülüyor. Bu doğrultuda 31. Dönem POMEM mülakat sonuçlarının <strong>Haziran ayının ilk haftasında</strong> açıklanması öngörülüyor.
              </p>

              <p className="mb-6">
                Adayların resmi duyurular için Polis Akademisi Başkanlığı&apos;nın (www.pa.edu.tr) internet sitesini düzenli olarak takip etmeleri tavsiye edilmektedir.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-slate-400" />
                <span className="text-sm font-medium text-slate-700">Etiketler:</span>
                <div className="flex gap-2 ml-2">
                  <Link href="/haberler" className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm transition-colors">POMEM</Link>
                  <Link href="/haberler" className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm transition-colors">Mülakat Sonuçları</Link>
                  <Link href="/haberler" className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm transition-colors">Polis Akademisi</Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
