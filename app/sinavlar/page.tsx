import Link from 'next/link';
import { Calendar, Users, BookOpen, ShieldCheck, Bell } from 'lucide-react';

export default function SinavlarPage() {
  const exams = [
    { title: '31. Dönem POMEM', status: 'Başvurular Devam Ediyor', date: 'Son Başvuru: 25 Mayıs 2024', icon: Users, color: 'bg-blue-100 text-blue-600', border: 'border-blue-200' },
    { title: '2024 Yılı PMYO', status: 'Yakında', date: 'Beklenen Tarih: Temmuz 2024', icon: BookOpen, color: 'bg-emerald-100 text-emerald-600', border: 'border-emerald-200' },
    { title: 'PAEM 9. Dönem', status: 'Sonuçlar Açıklandı', date: 'Açıklanma: 10 Mayıs 2024', icon: ShieldCheck, color: 'bg-amber-100 text-amber-600', border: 'border-amber-200' },
    { title: '2024/1 Bekçi Alımı', status: 'Planlanıyor', date: 'Beklenen Tarih: Ağustos 2024', icon: Bell, color: 'bg-purple-100 text-purple-600', border: 'border-purple-200' },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Sınavlar & Alımlar</h1>
          <p className="text-slate-600">Emniyet Genel Müdürlüğü ve Polis Akademisi tarafından düzenlenen güncel sınav ve alım takvimi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exams.map((exam, i) => (
            <div key={i} className={`bg-white rounded-xl border ${exam.border} p-6 hover:shadow-md transition-shadow`}>
              <div className="flex items-start gap-4">
                <div className={`p-4 rounded-full ${exam.color} shrink-0`}>
                  <exam.icon className="h-8 w-8" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-slate-900">{exam.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exam.status === 'Başvurular Devam Ediyor' ? 'bg-green-100 text-green-700' :
                      exam.status === 'Yakında' ? 'bg-blue-100 text-blue-700' :
                      exam.status === 'Sonuçlar Açıklandı' ? 'bg-slate-100 text-slate-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {exam.status}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm flex items-center gap-1 mb-4">
                    <Calendar className="h-4 w-4" />
                    {exam.date}
                  </p>
                  <div className="flex gap-3">
                    <Link href={`/haberler/1`} className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Detaylar
                    </Link>
                    <Link href="/mevzuat" className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Kılavuz
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
