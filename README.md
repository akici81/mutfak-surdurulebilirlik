# Mutfakta Sürdürülebilirlik — Website

TÜBİTAK 4005 Yenilikçi Eğitim Uygulamaları Destekleme Programı kapsamında hazırlanmış etkinlik web sitesi.

## Teknolojiler

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (deployment)

## Geliştirme Ortamı Kurulumu

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Başlatma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Derleme ve Yayınlama

```bash
# Üretim derlemesi
npm run build

# Yerel üretim sunucusu
npm start
```

## Vercel'e Deploy

1. [vercel.com](https://vercel.com) üzerinde hesap oluşturun
2. "New Project" → GitHub reposunu bağlayın
3. Framework: **Next.js** (otomatik algılanır)
4. "Deploy" butonuna basın — bitti!

## Proje Yapısı

```
app/
  layout.tsx              → Genel layout (Navbar + Footer)
  page.tsx                → Anasayfa
  amac-kapsam/page.tsx    → Amaç ve Kapsam
  basvuru/page.tsx        → Başvuru Formu
  etkinlik-afisi/page.tsx → Etkinlik Afişi
  etkinlik-yeri/page.tsx  → Etkinlik Yeri
  iletisim/page.tsx       → İletişim
  katilimci-kriterleri/page.tsx → Katılımcı Kriterleri
  kurullar/page.tsx       → Kurullar

components/
  Navbar.tsx              → Üst menü (mobil hamburger menü dahil)
  Footer.tsx              → Alt bilgi
  PageHeader.tsx          → Sayfa başlığı komponenti
```

## İçerik Güncelleme

### Kurul üyesi eklemek
`app/kurullar/page.tsx` dosyasında `bilimselKurul` veya `organizasyonKurul` dizisine yeni nesne ekleyin:

```ts
{ isim: 'Prof. Dr. Ad SOYAD', kurum: 'Üniversite Adı', rol: 'Üye' }
```

### Başvuru formunu e-postaya bağlamak
`app/basvuru/page.tsx` dosyasındaki `handleSubmit` fonksiyonuna API çağrısı ekleyin.
Önerilen servisler: **Resend**, **EmailJS**, **Formspree**.

### Renk paleti değiştirme
`app/globals.css` dosyasındaki CSS değişkenleri:
```css
--color-forest: #1a3d2b;   /* Ana koyu yeşil */
--color-sage:   #5a7a5e;   /* Açık yeşil */
--color-earth:  #c97b2e;   /* Turuncu/kahve vurgu */
--color-cream:  #faf7f2;   /* Arka plan */
```

## Etkinlik Bilgileri

- **Proje:** TÜBİTAK 4005 Yenilikçi Eğitim Uygulamaları
- **Tarih:** 22–26 Haziran 2026
- **Yer:** Necmettin Erbakan Üniversitesi, Meram / Konya
- **Koordinatör:** Doç. Dr. Eda GÜNEŞ (egunes@necmettin.edu.tr)
- **Yürütücü:** Dr. Öğr. Üyesi Doğukan BAYESEN (dogukan.bayesen@rumeli.edu.tr)
