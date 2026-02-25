import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Etkinlik Yeri | Mutfakta Sürdürülebilirlik',
}

export default function EtkinlikYeriPage() {
  const mapUrl = `https://www.google.com/maps/place/Necmettin+Erbakan+%C3%9Cniversitesi+15+Temmuz+Yerle%C5%9Fkesi+Turizm+Fak%C3%BCltesi/@37.8660717,32.4154642,655m/data=!3m1!1e3!4m10`

  return (
    <div className="page-enter">
      <PageHeader
        badge="Mekan"
        title="Etkinlik Yeri"
        subtitle="22–26 Haziran 2026 tarihlerinde Konya'da düzenlenecek etkinliğin yeri."
      />

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Üniversite */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-forest)]/10 flex items-center justify-center text-xl">🏛️</div>
              <h2 className="font-display text-2xl font-bold text-[var(--color-forest)]">Necmettin Erbakan Üniversitesi</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Etkinlik, Necmettin Erbakan Üniversitesi Turizm Fakültesi bünyesindeki
                  Gastronomi ve Mutfak Sanatları Bölümü Uygulama Mutfağı'nda gerçekleştirilecektir.
                </p>
                <div className="space-y-2 text-sm">
                  {[
                    { icon: '📍', label: 'Adres', value: 'Yaka Mah. Yeni Meram Cad. Kasım Halife Sok. No: 11/1 (A Blok) No: 11 (B Blok)' },
                    { icon: '📮', label: 'Posta Kodu', value: '42090' },
                    { icon: '🏙️', label: 'İlçe/İl', value: 'Meram / KONYA' },
                    { icon: '🍳', label: 'Bölüm', value: 'Gastronomi ve Mutfak Sanatları — Uygulama Mutfağı' },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex gap-3">
                      <span className="flex-shrink-0">{icon}</span>
                      <div>
                        <span className="font-semibold text-[var(--color-forest)]">{label}: </span>
                        <span className="text-gray-500">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--color-warm)] rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4">
                <div className="text-5xl">🗺️</div>
                <p className="text-gray-600 text-sm">Google Haritalar'da konumu görüntülemek için tıklayın</p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[var(--color-forest)] text-white rounded-full text-sm font-semibold hover:bg-[#0f2a1c] transition"
                >
                  Haritada Gör →
                </a>
              </div>
            </div>
          </div>

          {/* Ulaşım */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-earth)]/10 flex items-center justify-center text-xl">🚆</div>
              <h2 className="font-display text-2xl font-bold text-[var(--color-forest)]">Konya'ya Ulaşım</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '✈️', title: 'Havayolu', desc: 'Konya Havalimanı (KYA) şehir merkezine yakın konumdadır.' },
                { icon: '🚅', title: 'Yüksek Hızlı Tren', desc: 'Ankara-Konya YHT hattı ile hızlı ulaşım imkânı.' },
                { icon: '🚌', title: 'Otobüs', desc: 'Türkiye\'nin tüm büyük şehirlerinden düzenli otobüs seferleri.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-[var(--color-warm)] rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">{icon}</div>
                  <h3 className="font-semibold text-[var(--color-forest)] mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 bg-[#dcfce7] rounded-xl p-4">
              <strong className="text-[var(--color-forest)]">Hatırlatma:</strong>{' '}
              Katılımcıların ulaşım ve konaklama giderleri proje bütçesinden karşılanacaktır.
              Detaylı bilgi için koordinatörümüzle iletişime geçebilirsiniz.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
