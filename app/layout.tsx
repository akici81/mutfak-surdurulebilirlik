import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mutfakta Sürdürülebilirlik | TÜBİTAK 4005',
  description:
    'Mutfakta Sürdürülebilirlik Kapsamında Lisansüstü Öğrencilerinin Bilgi Düzeylerinin Artırılması — TÜBİTAK 4005 Yenilikçi Eğitim Uygulamaları Destekleme Programı. 22–26 Haziran 2026, Necmettin Erbakan Üniversitesi Konya.',
  keywords: ['sürdürülebilirlik', 'mutfak', 'tubitak', 'lisansüstü', 'gastronomi', 'konya'],
  openGraph: {
    title: 'Mutfakta Sürdürülebilirlik | TÜBİTAK 4005',
    description: 'TÜBİTAK 4005 Yenilikçi Eğitim Uygulamaları — 22–26 Haziran 2026, Konya',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
