import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Amaç ve Kapsam | Mutfakta Sürdürülebilirlik',
}

export default function AmacKapsamPage() {
  return (
    <div className="page-enter">
      <PageHeader
        badge="Proje"
        title="Amaç ve Kapsam"
        subtitle="TÜBİTAK 4005 destekli bu projenin hedefleri ve kapsamı hakkında detaylı bilgi."
      />

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-forest)]/10 flex items-center justify-center text-xl">🎯</div>
              <h2 className="font-display text-2xl font-bold text-[var(--color-forest)]">Projenin Amacı</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Bu proje, Türkiye'de gastronomi ve mutfak sanatları alanında lisansüstü eğitim gören
                öğrencilerin sürdürülebilirlik konusundaki bilgi düzeylerini artırmayı amaçlamaktadır.
              </p>
              <p>
                TÜBİTAK 4005 Yenilikçi Eğitim Uygulamaları Destekleme Programı kapsamında yürütülen
                bu çalışma; çevre dostu mutfak uygulamaları, gıda sürdürülebilirliği, sıfır atık
                yaklaşımları ve yerel-mevsimsel gıda sistemleri gibi kritik konulara odaklanmaktadır.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-forest)]/10 flex items-center justify-center text-xl">📋</div>
              <h2 className="font-display text-2xl font-bold text-[var(--color-forest)]">Kapsam</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🌿', title: 'Sürdürülebilir Gıda Sistemleri', desc: 'Yerel ve mevsimsel ürünlerin kullanımı, kısa tedarik zincirleri' },
                { icon: '♻️', title: 'Sıfır Atık Mutfak', desc: 'Gıda israfının azaltılması ve atık yönetimi stratejileri' },
                { icon: '🌍', title: 'Çevre Etkisi', desc: 'Mutfak uygulamalarının karbon ayak izi ve çevresel etkileri' },
                { icon: '📚', title: 'Akademik Katkı', desc: 'Araştırma becerileri ve akademik üretkenliğin desteklenmesi' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-4 rounded-2xl bg-[var(--color-warm)]">
                  <div className="text-2xl flex-shrink-0">{icon}</div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-forest)] mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--color-forest)] rounded-3xl p-8 sm:p-10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">👩‍🔬</div>
              <h2 className="font-display text-2xl font-bold">Proje Koordinatörü</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div>
                <h3 className="font-display text-xl font-bold text-[#86efac]">Doç. Dr. Eda GÜNEŞ</h3>
                <p className="text-white/70 mt-1">Necmettin Erbakan Üniversitesi</p>
                <p className="text-white/70">Gastronomi ve Mutfak Sanatları Bölümü</p>
                <a href="mailto:egunes@necmettin.edu.tr" className="mt-3 inline-block text-[#86efac] hover:text-white transition text-sm">
                  egunes@necmettin.edu.tr →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
