import { MessageCircle, ThumbsUp, Eye, Clock } from 'lucide-react';

export default function SoruCevapPage() {
  const questions = [
    { title: 'Gözlük kullanımı POMEM mülakatında elenme sebebi mi?', author: 'Aday123', time: '2 saat önce', views: 145, answers: 12, tags: ['POMEM', 'Sağlık'] },
    { title: 'PMYO yaş sınırı hesaplaması nasıl yapılıyor?', author: 'PolisAdayi', time: '5 saat önce', views: 320, answers: 8, tags: ['PMYO', 'Şartlar'] },
    { title: 'Bekçilik yazılı sınavında hangi konulardan soru çıkıyor?', author: 'BekciAdayi', time: '1 gün önce', views: 512, answers: 24, tags: ['Bekçi', 'Sınav'] },
    { title: 'Renk körlüğü testi nasıl yapılıyor, lens kullanabilir miyim?', author: 'AhmetK', time: '2 gün önce', views: 890, answers: 45, tags: ['Sağlık', 'Mülakat'] },
    { title: 'Şark görevi süreleri değişti mi? Güncel süreler neler?', author: 'MemurBey', time: '3 gün önce', views: 1200, answers: 56, tags: ['Mevzuat', 'Şark'] },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Soru-Cevap Forumu</h1>
            <p className="text-slate-600">Aklınıza takılan soruları sorun, tecrübeli üyelerimiz yanıtlasın.</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm">
            Soru Sor
          </button>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="divide-y divide-slate-200">
            {questions.map((q, i) => (
              <div key={i} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Stats */}
                  <div className="flex md:flex-col gap-4 md:gap-2 text-slate-500 text-sm md:w-24 shrink-0">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{q.answers} Cevap</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{q.views} İzlenme</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 hover:text-blue-600 cursor-pointer">
                      {q.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <div className="flex gap-2">
                        {q.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-slate-400 flex items-center gap-1 ml-auto">
                        <Clock className="h-3.5 w-3.5" />
                        {q.time} - <span className="text-blue-600 font-medium">{q.author}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
