'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',                        label: 'Anasayfa' },
  { href: '/etkinlik-afisi',          label: 'Etkinlik Afişi' },
  { href: '/amac-kapsam',             label: 'Amaç ve Kapsam' },
  { href: '/kurullar',                label: 'Kurullar' },
  { href: '/katilimci-kriterleri',    label: 'Katılımcı Kriterleri' },
  { href: '/etkinlik-yeri',           label: 'Etkinlik Yeri' },
  { href: '/iletisim',                label: 'İletişim' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
              🌿
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold text-[var(--color-sage)] uppercase tracking-widest leading-tight">
                TÜBİTAK 4005
              </p>
              <p className="text-sm font-bold text-[var(--color-forest)] leading-tight font-display">
                Mutfakta Sürdürülebilirlik
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === href
                    ? 'bg-[var(--color-forest)] text-white'
                    : 'text-gray-700 hover:bg-[var(--color-warm)] hover:text-[var(--color-forest)]'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/basvuru"
              className="ml-3 px-5 py-2 bg-[var(--color-earth)] text-white rounded-full text-sm font-semibold hover:bg-earth-700 hover:scale-105 transition-all duration-200 shadow-sm"
            >
              Başvuru Yap
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-[var(--color-forest)] hover:bg-[var(--color-warm)] transition"
            aria-label="Menüyü aç/kapat"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-screen mt-4 pb-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-1 border-t border-gray-100 pt-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  pathname === href
                    ? 'bg-[var(--color-forest)] text-white'
                    : 'text-gray-700 hover:bg-[var(--color-warm)]'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/basvuru"
              className="mt-2 px-4 py-3 bg-[var(--color-earth)] text-white rounded-xl text-sm font-semibold text-center hover:bg-earth-700 transition"
            >
              Başvuru Yap
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
