import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Kurullar | Mutfakta Sürdürülebilirlik',
}

const bilimselKurul = [
  { isim: 'Doç. Dr. Eda GÜNEŞ', kurum: 'Necmettin Erbakan Üniversitesi', rol: 'Koordinatör' },
  { isim: 'Dr. Öğr. Üyesi Doğukan BAYESEN', kurum: 'Rumeli Üniversitesi', rol: 'Yürütücü' },
  // Diğer üyeler buraya eklenecek
]

const organizasyonKurul: { isim: string; kurum: string; rol?: string }[] = [
  // Organizasyon komitesi üyeleri buraya eklenecek
]

export default function KurullarPage() {
  return (
    <div className="page-enter">
      <PageHeader
        badge="Yönetim"
        title="Kurullar"
        subtitle="Projenin bilimsel ve organizasyon kurullarını oluşturan akademisyenler."
      />

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Bilimsel Kurul */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-forest)] flex items-center justify-center text-white text-lg">🎓</div>
              <h2 className="font-display text-2xl font-bold text-[var(--color-forest)]">Bilimsel Kurul</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bilimselKurul.map(({ isim, kurum, rol }) => (
                <div key={isim} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-forest)]/10 flex items-center justify-center text-2xl mb-4">
                    👤
                  </div>
                  <p className="font-semibold text-[var(--color-forest)]">{isim}</p>
                  <p className="text-gray-500 text-sm mt-1">{kurum}</p>
                  {rol && (
                    <span className="inline-block mt-2 px-3 py-1 bg-[#dcfce7] text-[var(--color-forest)] text-xs font-semibold rounded-full">
                      {rol}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Organizasyon Kurul */}
          {organizasyonKurul.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-earth)] flex items-center justify-center text-white text-lg">⚙️</div>
                <h2 className="font-display text-2xl font-bold text-[var(--color-forest)]">Organizasyon Kurulu</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {organizasyonKurul.map((uye: { isim: string; kurum: string; rol?: string }) => (
                  <div key={uye.isim} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-earth)]/10 flex items-center justify-center text-2xl mb-4">
                      👤
                    </div>
                    <p className="font-semibold text-[var(--color-forest)]">{uye.isim}</p>
                    <p className="text-gray-500 text-sm mt-1">{uye.kurum}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder info */}
          <div className="bg-[var(--color-warm)] rounded-2xl p-6 text-center">
            <p className="text-gray-500 text-sm">
              Kurul listesi güncellenmektedir. Detaylı bilgi için{' '}
              <a href="mailto:egunes@necmettin.edu.tr" className="text-[var(--color-forest)] font-semibold hover:underline">
                egunes@necmettin.edu.tr
              </a>{' '}
              adresine ulaşabilirsiniz.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
