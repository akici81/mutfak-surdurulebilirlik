import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'İletişim | Mutfakta Sürdürülebilirlik',
}

export default function IletisimPage() {
  return (
    <div className="page-enter">
      <PageHeader
        badge="İletişim"
        title="Bize Ulaşın"
        subtitle="Sorularınız ve bilgi talepleriniz için aşağıdaki iletişim kanallarını kullanabilirsiniz."
      />

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Koordinatör */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-forest)]/10 flex items-center justify-center text-3xl mb-5">
                👩‍🏫
              </div>
              <h3 className="font-display text-xl font-bold text-[var(--color-forest)] mb-1">
                Doç. Dr. Eda GÜNEŞ
              </h3>
              <p className="text-gray-500 text-sm mb-1">Proje Koordinatörü</p>
              <p className="text-gray-500 text-sm mb-4">Necmettin Erbakan Üniversitesi</p>
              <a
                href="mailto:egunes@necmettin.edu.tr"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-forest)] text-white rounded-full text-sm font-medium hover:bg-[#0f2a1c] transition"
              >
                ✉️ egunes@necmettin.edu.tr
              </a>
            </div>

            {/* Yürütücü */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-earth)]/10 flex items-center justify-center text-3xl mb-5">
                👨‍🏫
              </div>
              <h3 className="font-display text-xl font-bold text-[var(--color-forest)] mb-1">
                Dr. Öğr. Üyesi Doğukan BAYESEN
              </h3>
              <p className="text-gray-500 text-sm mb-1">Proje Yürütücüsü</p>
              <p className="text-gray-500 text-sm mb-4">Rumeli Üniversitesi</p>
              <a
                href="mailto:dogukan.bayesen@rumeli.edu.tr"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-earth)] text-white rounded-full text-sm font-medium hover:bg-[#a85e22] transition"
              >
                ✉️ dogukan.bayesen@rumeli.edu.tr
              </a>
            </div>
          </div>

          {/* Kurum adresi */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-[var(--color-forest)] mb-6">Etkinlik Adresi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <p className="font-semibold text-[var(--color-forest)]">Necmettin Erbakan Üniversitesi</p>
                <p>Turizm Fakültesi</p>
                <p>Gastronomi ve Mutfak Sanatları Bölümü</p>
                <p>Yaka Mah. Yeni Meram Cad.</p>
                <p>Kasım Halife Sok. No: 11/1 (A Blok)</p>
                <p>42090 Meram / KONYA</p>
              </div>
              <a
                href="https://www.google.com/maps/place/Necmettin+Erbakan+%C3%9Cniversitesi+15+Temmuz+Yerle%C5%9Fkesi+Turizm+Fak%C3%BCltesi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 bg-[var(--color-warm)] rounded-2xl p-8 text-center hover:shadow-md transition"
              >
                <span className="text-4xl">🗺️</span>
                <span className="text-[var(--color-forest)] font-semibold text-sm">Google Haritalar'da Aç</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
