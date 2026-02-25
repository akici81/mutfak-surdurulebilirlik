import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-forest)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
                🌿
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-widest">TÜBİTAK 4005</p>
                <p className="font-display font-bold text-white">Mutfakta Sürdürülebilirlik</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Lisansüstü Öğrencilerinin Bilgi Düzeylerinin Artırılması
            </p>
            <p className="mt-3 text-sm font-semibold text-[#86efac]">22–26 Haziran 2026 · Konya</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">Sayfalar</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                ['/', 'Anasayfa'],
                ['/amac-kapsam', 'Amaç ve Kapsam'],
                ['/kurullar', 'Kurullar'],
                ['/katilimci-kriterleri', 'Katılımcı Kriterleri'],
                ['/etkinlik-yeri', 'Etkinlik Yeri'],
                ['/basvuru', 'Başvuru'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">İletişim</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div>
                <p className="text-white font-medium">Koordinatör</p>
                <p>Doç. Dr. Eda GÜNEŞ</p>
                <a href="mailto:egunes@necmettin.edu.tr" className="text-[#86efac] hover:text-white transition">
                  egunes@necmettin.edu.tr
                </a>
              </div>
              <div>
                <a href="mailto:dogukan.bayesen@rumeli.edu.tr" className="text-[#86efac] hover:text-white transition">
                  dogukan.bayesen@rumeli.edu.tr
                </a>
              </div>
              <div className="pt-2">
                <p className="text-white/50 text-xs">Necmettin Erbakan Üniversitesi</p>
                <p className="text-white/50 text-xs">Gastronomi ve Mutfak Sanatları Bölümü</p>
                <p className="text-white/50 text-xs">Meram / KONYA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© 2026 Mutfakta Sürdürülebilirlik Projesi</p>
          <p>TÜBİTAK 4005 Yenilikçi Eğitim Uygulamaları Destekleme Programı</p>
        </div>
      </div>
    </footer>
  )
}
