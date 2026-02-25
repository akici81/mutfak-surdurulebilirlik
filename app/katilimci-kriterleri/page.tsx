import Link from 'next/link'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Katılımcı Kriterleri | Mutfakta Sürdürülebilirlik',
}

export default function KatilimciKriterleriPage() {
  return (
    <div className="page-enter">
      <PageHeader
        badge="Başvuru"
        title="Katılımcı Kriterleri"
        subtitle="Etkinliğe katılım sağlayabilmek için gereken koşullar ve beklentiler."
      />

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Zorunlu Kriterler */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#dcfce7] flex items-center justify-center text-xl">✅</div>
              <h2 className="font-display text-2xl font-bold text-[var(--color-forest)]">Zorunlu Kriterler</h2>
            </div>
            <ul className="space-y-4">
              {[
                'Türkiye\'de bir üniversitede aktif olarak kayıtlı yüksek lisans veya doktora öğrencisi olmak',
                'Gastronomi, Mutfak Sanatları, Gıda Bilimi, Turizm veya ilgili bir alanda lisansüstü eğitim görmek',
                'Etkinliğin tüm 5 gününe (22–26 Haziran 2026) katılabilmek',
                'Danışman öğretim üyesinden onay mektubu sunmak',
              ].map((kriter, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-forest)] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{kriter}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Tercih Edilen Nitelikler */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#fef3c7] flex items-center justify-center text-xl">⭐</div>
              <h2 className="font-display text-2xl font-bold text-[var(--color-forest)]">Tercih Edilen Nitelikler</h2>
            </div>
            <ul className="space-y-3">
              {[
                'Sürdürülebilirlik veya çevre konularında önceki araştırma veya proje deneyimi',
                'Gıda bilimi, beslenme veya çevre bilimleri alanında ön lisans veya lisans eğitimi',
                'İngilizce yayın okuma ve takip edebilme becerisi',
                'Akademik yayın yapmış veya konferanslara katılmış olmak',
              ].map((nitelik, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-[var(--color-earth)] text-lg flex-shrink-0">◆</span>
                  <p className="text-gray-600 leading-relaxed">{nitelik}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontenjan */}
          <div className="bg-[var(--color-forest)] rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">👥</div>
              <h2 className="font-display text-2xl font-bold">Kontenjan</h2>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Etkinlikte sınırlı sayıda katılımcı kabul edilecektir. Tüm gider kalemleriniz
              (ulaşım, konaklama, yemek) proje bütçesinden karşılanacaktır.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: '🏨', text: 'Konaklama Karşılanır' },
                { icon: '✈️', text: 'Ulaşım Karşılanır' },
                { icon: '🍽️', text: 'Yemek Karşılanır' },
              ].map(({ icon, text }) => (
                <div key={text} className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl mb-2">{icon}</div>
                  <p className="text-white/80 text-sm font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/basvuru"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-earth)] text-white rounded-full font-semibold text-base hover:bg-[#a85e22] hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Başvuru Formuna Git →
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
