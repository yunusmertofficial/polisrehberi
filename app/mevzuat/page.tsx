import Link from 'next/link';
import { Book, Scale, FileText, Download } from 'lucide-react';

export default function MevzuatPage() {
  const documents = [
    { title: 'Emniyet Teşkilatı Kanunu', type: 'Kanun', date: 'Güncel', icon: Scale },
    { title: 'Polis Vazife ve Salahiyet Kanunu (PVSK)', type: 'Kanun', date: 'Güncel', icon: Scale },
    { title: 'Emniyet Teşkilatı Disiplin Tüzüğü', type: 'Tüzük', date: 'Güncel', icon: Book },
    { title: 'Emniyet Teşkilatı Sağlık Şartları Yönetmeliği', type: 'Yönetmelik', date: '10.05.2024 Değişiklikleri', icon: FileText },
    { title: 'Polis Akademisi Başkanlığı POMEM Giriş Yönetmeliği', type: 'Yönetmelik', date: 'Güncel', icon: FileText },
    { title: 'Çarşı ve Mahalle Bekçileri Kanunu', type: 'Kanun', date: 'Güncel', icon: Scale },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Mevzuat</h1>
          <p className="text-slate-600">Emniyet teşkilatını ilgilendiren kanun, tüzük ve yönetmeliklerin güncel halleri.</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="divide-y divide-slate-200">
            {documents.map((doc, i) => (
              <div key={i} className="p-6 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-100 text-slate-600 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                    <doc.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{doc.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span className="px-2 py-0.5 rounded bg-slate-100 font-medium">{doc.type}</span>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
