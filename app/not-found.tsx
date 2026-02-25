import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">🌿</div>
        <h1 className="font-display text-4xl font-bold text-[var(--color-forest)] mb-3">Sayfa Bulunamadı</h1>
        <p className="text-gray-500 mb-8">Aradığınız sayfa mevcut değil ya da taşınmış olabilir.</p>
        <Link
          href="/"
          className="px-8 py-3 bg-[var(--color-forest)] text-white rounded-full font-semibold hover:bg-[#0f2a1c] transition"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </div>
  )
}
