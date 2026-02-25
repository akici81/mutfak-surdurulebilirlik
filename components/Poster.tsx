type ProgramCell = { konu: string; egitmen: string; renk?: string } | null

const egitmenler = [
  {
    renk: 'bg-[#2d8a2d] text-white',
    isimler: [
      'Doç. Dr. Eda GÜNEŞ',
      'Doç. Dr. Keziban ATACAN',
      'Doç. Dr. Nihan Tomris KÜÇÜN',
    ],
  },
  {
    renk: 'bg-[#1e6fa8] text-white',
    isimler: [
      'Prof. Dr. Aybuke CEYHUN SEZGİN',
      'Prof. Dr. Mustafa Kürşat DEMİR',
      'Prof. Dr. H. Ferhan NİZAMLIOĞLU',
    ],
  },
  {
    renk: 'bg-[#c0392b] text-white',
    isimler: [
      'Doç. Dr. Fatma KUNT',
      'Doç. Dr. Birsen BULUT SOLAK',
      'Doç. Dr. Ayşe Büşra MADENCİ',
    ],
  },
  {
    renk: 'bg-white text-gray-800 border-2 border-[#2d6a2d]',
    isimler: [
      'Doç. Dr. Yılmaz SEÇİM',
      'Doç. Dr. Menekşe BULUT',
      'Doç. Dr. Mustafa Cüneyt ŞAPCILAR',
      'Doç. Dr. Emine Nihan CİCİ KARABOĞA',
    ],
  },
  {
    renk: 'bg-[#e07b1a] text-white',
    isimler: [
      'Dt. Mustafa ACUN',
      'Uzm. Ecz. Sıdıka KONDU',
      'Dr. Öğretim Üyesi Görkem TEYİN',
      'Öğr. Gör. Dr. Hasan İbrahim KOZAN',
    ],
  },
  {
    renk: 'bg-[#2d8a2d] text-white',
    isimler: [
      'Dr. Öğretim Üyesi Ali ŞEN',
      'Dr. Öğretim Üyesi Fatih KALECİ',
      'Dr. Öğretim Üyesi Abdullah BADEM',
      'Dr. Öğretim Üyesi Gönül EROĞLU',
    ],
  },
]

const program: { saat: string; gunler: ProgramCell[] }[] = [
  {
    saat: '8:00–8:45',
    gunler: [
      { konu: 'Açılış', egitmen: 'Doç. Dr. Eda Güneş', renk: 'bg-green-50' },
      null, null, null, null,
    ],
  },
  {
    saat: '9:00–9:45',
    gunler: [
      { konu: 'Çevresel sürdürülebilirlik', egitmen: 'Doç. Dr. Fatma Kunt' },
      { konu: 'Gıda güvenliği', egitmen: 'Prof. Dr. Kürşat Demir' },
      { konu: 'Mikro filizler', egitmen: 'Doç. Dr. Ayşe Büşra Madenci' },
      { konu: 'Gıda atıkları ve kompost', egitmen: 'Doç. Dr. Eda Güneş' },
      { konu: 'Sürdürülebilirlikte yapay zeka', egitmen: 'Öğr. Gör. Dr. Hasan İbrahim Kozan' },
    ],
  },
  {
    saat: '10:00–10:45',
    gunler: [
      { konu: 'Sürdürülebilirlik ve suyun önemi', egitmen: 'Doç. Dr. Fatma Kunt' },
      { konu: 'Atalık tohumlar ve gıda üretimi', egitmen: 'Prof. Dr. Mustafa Kürşat Demir' },
      { konu: 'Mikro filizler (devam)', egitmen: 'Doç. Dr. Ayşe Büşra Madenci' },
      { konu: 'Gıda atıkları ve kompost (devam)', egitmen: 'Doç. Dr. Eda Güneş' },
      { konu: 'Sürdürülebilirlikte yapay zeka (devam)', egitmen: 'Öğr. Gör. Dr. Hasan İbrahim Kozan' },
    ],
  },
  {
    saat: '11:00–12:45',
    gunler: [
      { konu: 'Doğal kaynaklar ve ilk yardım', egitmen: 'Doç. Dr. Eda Güneş' },
      { konu: 'Geleneksel ürünler ve ekşi mayalı ekmek', egitmen: 'Dr. Öğr. Üyesi Abdullah Badem' },
      { konu: 'Mutfak bahçeciliği ve yeşil restoranlar', egitmen: 'Prof. Dr. Hatice Ferhan Nizamlıoğlu' },
      { konu: 'Sürdürülebilirlik ve sabun', egitmen: 'Doç. Dr. Keziban Atacan' },
      { konu: 'Hikaye yazımı ve podcast çekimi', egitmen: 'Doç. Dr. Eda Güneş & Öğr. Gör. Doğukan Bayesen' },
    ],
  },
  {
    saat: '14:00–15:45',
    gunler: [
      { konu: 'Gıda israfında temel etmenler', egitmen: 'Doç. Dr. Birsen Bulut Solak' },
      { konu: 'Mutfakta mantar yetiştiriciliği', egitmen: 'Dr. Öğr. Üyesi Gönül Eroğlu' },
      { konu: 'Sürdürülebilirlikte kahve ve servisi', egitmen: 'Doç. Dr. Mustafa Cüneyt Şapcılar' },
      { konu: 'Nörogastronomi ve sürdürülebilirlik', egitmen: 'Doç. Dr. Nihan Tomris Küçün' },
      { konu: 'Sürdürülebilir Kalkınma ve Etki Değeri', egitmen: 'Dr. Öğr. Üyesi Rıdvan Solmaz' },
    ],
  },
  {
    saat: '16:00–16:45',
    gunler: [
      { konu: 'Coğrafi işaretli ürünler', egitmen: 'Doç. Dr. Yılmaz Seçim' },
      { konu: 'Sıcak ve soğuk mutfakta sürdürülebilirlik', egitmen: 'Dr. Öğr. Üyesi Ali Şen' },
      { konu: 'Pastanede sürdürülebilirlik', egitmen: 'Öğr. Gör. Doğukan Bayesen, Öğr. Gör. Hüsnü Kasar' },
      { konu: 'Sürdürülebilirlik ve pazarlama', egitmen: 'Doç. Dr. Yeliz Pekerşen' },
      { konu: 'Etkinliğin değerlendirilmesi', egitmen: 'Tüm Ekip' },
    ],
  },
  {
    saat: '17:00–17:45',
    gunler: [
      { konu: 'Coğrafi işaretli ürünler (devam)', egitmen: 'Doç. Dr. Yılmaz Seçim' },
      { konu: 'Sıcak ve soğuk mutfakta sürdürülebilirlik (devam)', egitmen: 'Dr. Öğr. Üyesi Ali Şen' },
      { konu: 'Pastanede sürdürülebilirlik (devam)', egitmen: 'Dr. Öğr. Üyesi Rıdvan Solmaz, Öğr. Gör. Doğukan Bayesen' },
      { konu: 'Sürdürülebilirlik ve pazarlama (devam)', egitmen: 'Doç. Dr. Yeliz Pekerşen' },
      { konu: 'Kapanış ve belge takdimi', egitmen: 'Tüm Ekip' },
    ],
  },
]

const gunler = ['22 Haz · Pzt', '23 Haz · Sal', '24 Haz · Çar', '25 Haz · Per', '26 Haz · Cum']

export default function Poster() {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">

      {/* HEADER */}
      <div className="bg-white border-b-4 border-[#2d6a2d] px-6 py-4 flex items-center justify-between gap-4">
        <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-400 font-bold">
          NEÜ
        </div>
        <div className="text-center flex-1">
          <p className="text-xs font-extrabold text-gray-900 uppercase tracking-wide">
            TÜBİTAK Ulusal Destek Programları – 4005
          </p>
          <p className="text-xs font-bold text-[#c0392b] mt-1">
            Yenilikçi Eğitim Uygulamaları Destekleme Programı
          </p>
          <p className="text-xs font-semibold text-gray-500 mt-0.5">
            <strong>Koordinatör:</strong> Doç. Dr. Eda GÜNEŞ
          </p>
        </div>
        <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-400 font-bold">
          TÜBİTAK
        </div>
      </div>

      {/* HERO */}
      <div
        className="relative flex flex-col items-center justify-center py-12 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #e8f5e0 0%, #f5fdf0 50%, #dff0d4 100%)' }}
      >
        <div className="absolute top-3 left-4 text-4xl opacity-80" style={{ transform: 'rotate(-8deg)' }}>🥦</div>
        <div className="absolute top-3 right-4 text-4xl opacity-80" style={{ transform: 'rotate(8deg)' }}>🌾</div>
        <div className="absolute bottom-3 left-4 text-4xl opacity-80" style={{ transform: 'rotate(8deg)' }}>♻️</div>
        <div className="absolute bottom-3 right-4 text-4xl opacity-80" style={{ transform: 'rotate(-8deg)' }}>🥕</div>

        <h1 className="font-display text-2xl sm:text-3xl font-black text-[#1a3a1a] leading-tight relative z-10">
          <span className="text-[#2d8a2d]">Mutfakta Sürdürülebilirlik</span> Kapsamında
          <br />Lisansüstü Öğrencilerinin
          <br />Bilgi Düzeylerinin Artırılması
        </h1>

        <div
          className="mt-6 inline-block font-display text-2xl font-bold text-white px-8 py-3 rounded-lg relative z-10"
          style={{ background: '#c0392b', boxShadow: '0 5px 18px rgba(192,57,43,0.35)' }}
        >
          22 – 26 HAZİRAN
          <div className="text-base text-center tracking-widest mt-1">2 0 2 6</div>
        </div>
      </div>

      {/* EĞİTMENLER */}
      <div className="bg-white border-t-4 border-[#2d6a2d] px-6 py-5">
        <h2 className="text-center text-sm font-extrabold uppercase tracking-widest text-gray-900 mb-1">
          Eğitmenlerimiz
        </h2>
        <div className="w-16 h-0.5 bg-[#2d8a2d] mx-auto mb-4" />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {egitmenler.map((grup, i) => (
            <div key={i} className={`rounded p-2.5 text-xs font-bold leading-relaxed ${grup.renk}`}>
              {grup.isimler.map((isim) => (
                <div key={isim}>{isim}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PROGRAM */}
      <div className="bg-gray-50 border-t-2 border-gray-200 px-4 py-5 overflow-x-auto">
        <h2 className="text-center text-sm font-extrabold uppercase tracking-widest text-gray-900 mb-1">
          Program
        </h2>
        <div className="w-16 h-0.5 bg-[#c0392b] mx-auto mb-4" />

        <table className="w-full min-w-[700px] text-xs border-collapse">
          <thead>
            <tr>
              <th className="bg-[#2d6a2d] text-white px-2 py-2 border border-[#1a4a1a] text-center w-20">
                Saat
              </th>
              {gunler.map((gun) => (
                <th key={gun} className="bg-[#2d6a2d] text-white px-2 py-2 border border-[#1a4a1a] text-center">
                  {gun}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {program.map((satir, si) => (
              <tr key={si} className={si % 2 === 1 ? 'bg-[#f5fdf5]' : 'bg-white'}>
                <td className="px-2 py-1.5 border border-gray-200 text-center font-extrabold text-[#2d6a2d] bg-[#f0f7f0] whitespace-nowrap">
                  {satir.saat}
                </td>
                {satir.gunler.map((cell, ci) => (
                  <td key={ci} className={`px-2 py-1.5 border border-gray-200 align-top ${cell?.renk || ''}`}>
                    {cell ? (
                      <>
                        <span className="font-bold text-gray-900 block leading-tight">{cell.konu}</span>
                        <span className="text-gray-500 italic block mt-0.5" style={{ fontSize: '10px' }}>
                          {cell.egitmen}
                        </span>
                      </>
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="bg-[#2d6a2d] px-6 py-3 text-center">
        <p className="text-white text-xs font-bold tracking-wide">
          TÜBİTAK Destek Programları 4005 &nbsp;|&nbsp; Yenilikçi Eğitim Uygulamaları Destekleme Programı
        </p>
        <p className="text-white/80 text-xs font-semibold mt-1">
          Koordinatör: Doç. Dr. Eda GÜNEŞ
        </p>
      </div>

    </div>
  )
}
