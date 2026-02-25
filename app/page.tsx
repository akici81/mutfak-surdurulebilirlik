import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-forest)]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #22c55e 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #86efac 0%, transparent 40%),
                              radial-gradient(circle at 50% 90%, #166534 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="text-[#86efac] text-sm font-semibold">TÜBİTAK 4005</span>
            <span className="text-white/40">·</span>
            <span className="text-white/70 text-sm">Yenilikçi Eğitim Uygulamaları</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Mutfakta
            <span className="block text-[#86efac]">Sürdürülebilirlik</span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
            Lisansüstü Öğrencilerinin Bilgi Düzeylerinin Artırılması
          </p>

          {/* Date badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 mb-10">
            <span className="text-2xl">📅</span>
            <div className="text-left">
              <p className="text-white font-bold text-lg">22–26 Haziran 2026</p>
              <p className="text-white/60 text-sm">Necmettin Erbakan Üniversitesi · Konya</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/basvuru"
              className="px-8 py-4 bg-[var(--color-earth)] text-white rounded-full font-semibold text-base hover:bg-[#a85e22] hover:scale-105 transition-all duration-200 shadow-lg shadow-black/20"
            >
              Başvuru Yap →
            </Link>
            <Link
              href="/katilimci-kriterleri"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-200"
            >
              Katılımcı Kriterleri
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span>Aşağı Kaydır</span>
          <div className="w-0.5 h-8 bg-white/20 rounded animate-pulse" />
        </div>
      </section>

      {/* Hakkında kart */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[var(--color-sage)] uppercase tracking-widest mb-3">Proje Hakkında</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-forest)] mb-6">
                Sürdürülebilir Mutfak Eğitimi
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bu proje, TÜBİTAK 4005 Yenilikçi Eğitim Uygulamaları Destekleme Programı kapsamında
                hazırlanmıştır. Gastronomi ve mutfak sanatları alanında lisansüstü eğitim alan öğrencilerin
                sürdürülebilirlik konusundaki bilgi ve farkındalık düzeylerini artırmayı hedeflemektedir.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                5 günlük yoğun eğitim programı; teorik dersler, atölye çalışmaları ve uygulamalı
                etkinliklerden oluşmaktadır. Koordinatör: <strong className="text-[var(--color-forest)]">Doç. Dr. Eda GÜNEŞ</strong>
              </p>
              <Link
                href="/amac-kapsam"
                className="inline-flex items-center gap-2 text-[var(--color-forest)] font-semibold hover:gap-3 transition-all"
              >
                Amaç ve Kapsamı Oku <span>→</span>
              </Link>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎓', title: 'Lisansüstü', desc: 'Yüksek lisans ve doktora öğrencilerine yönelik' },
                { icon: '🌱', title: 'Sürdürülebilirlik', desc: 'Gıda ve mutfakta çevre dostu yaklaşımlar' },
                { icon: '🍽️', title: 'Uygulamalı', desc: 'Uygulama mutfağında pratik çalışmalar' },
                { icon: '🏛️', title: 'NEÜ', desc: 'Necmettin Erbakan Üniversitesi ev sahipliği' },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-display font-bold text-[var(--color-forest)] text-lg mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Etkinlik detayları */}
      <section className="bg-[var(--color-warm)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--color-sage)] uppercase tracking-widest mb-2">Etkinlik</p>
            <h2 className="font-display text-3xl font-bold text-[var(--color-forest)]">Tarih ve Yer</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: '📅', label: 'Tarih', value: '22–26 Haziran 2026', sub: '5 Tam Gün' },
              { icon: '📍', label: 'Yer', value: 'Meram / Konya', sub: 'NEÜ Turizm Fakültesi' },
              { icon: '👨‍🍳', label: 'Konum', value: 'Uygulama Mutfağı', sub: 'Gastronomi Bölümü' },
            ].map(({ icon, label, value, sub }) => (
              <div key={label} className="text-center bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{icon}</div>
                <p className="text-xs text-[var(--color-sage)] font-semibold uppercase tracking-widest mb-1">{label}</p>
                <p className="font-display font-bold text-[var(--color-forest)] text-lg">{value}</p>
                <p className="text-gray-400 text-sm">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-earth)] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Başvurmaya Hazır mısınız?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Katılımcı kriterlerini kontrol edin ve başvurunuzu tamamlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/katilimci-kriterleri"
              className="px-8 py-4 bg-white text-[var(--color-earth)] rounded-full font-semibold hover:bg-white/90 transition"
            >
              Kriterleri Gör
            </Link>
            <Link
              href="/basvuru"
              className="px-8 py-4 bg-[var(--color-forest)] text-white rounded-full font-semibold hover:bg-[#0f2a1c] transition"
            >
              Hemen Başvur →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
