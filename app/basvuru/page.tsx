'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'

interface FormData {
  ad: string
  soyad: string
  email: string
  telefon: string
  universite: string
  bolum: string
  lisansustu: string
  danisman: string
  danismanEmail: string
  tez: string
  motiv: string
  deneyim: string
  kvkk: boolean
}

const initialForm: FormData = {
  ad: '', soyad: '', email: '', telefon: '',
  universite: '', bolum: '', lisansustu: '', danisman: '',
  danismanEmail: '', tez: '', motiv: '', deneyim: '', kvkk: false,
}

export default function BasvuruPage() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const totalSteps = 3

  const update = (key: keyof FormData, val: string | boolean) =>
    setForm(prev => ({ ...prev, [key]: val }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: API endpoint veya email servisi entegrasyonu
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="page-enter">
        <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center px-4 pt-24">
          <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-lg text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="font-display text-3xl font-bold text-[var(--color-forest)] mb-4">
              Başvurunuz Alındı!
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Başvurunuz başarıyla iletildi. En kısa sürede{' '}
              <strong>{form.email}</strong> adresine dönüş yapılacaktır.
            </p>
            <div className="bg-[var(--color-warm)] rounded-2xl p-4 text-sm text-gray-500 mb-6">
              Sorularınız için:{' '}
              <a href="mailto:egunes@necmettin.edu.tr" className="text-[var(--color-forest)] font-semibold">
                egunes@necmettin.edu.tr
              </a>
            </div>
            <button
              onClick={() => { setSubmitted(false); setForm(initialForm); setStep(1) }}
              className="text-sm text-[var(--color-sage)] hover:text-[var(--color-forest)] transition"
            >
              Yeni başvuru yap
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-enter">
      <PageHeader
        badge="Başvuru"
        title="Başvuru Formu"
        subtitle="Etkinliğe katılmak için aşağıdaki formu eksiksiz doldurunuz."
      />

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">

          {/* Progress */}
          <div className="flex items-center gap-3 mb-8">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map(s => (
              <div key={s} className="flex items-center gap-3 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all ${
                  s < step ? 'bg-[var(--color-forest)] text-white'
                  : s === step ? 'bg-[var(--color-earth)] text-white ring-4 ring-[var(--color-earth)]/20'
                  : 'bg-gray-200 text-gray-400'
                }`}>
                  {s < step ? '✓' : s}
                </div>
                {s < totalSteps && (
                  <div className={`flex-1 h-1 rounded transition-all ${s < step ? 'bg-[var(--color-forest)]' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-3xl p-8 shadow-sm">

              {/* Adım 1: Kişisel Bilgiler */}
              {step === 1 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-[var(--color-forest)] mb-2">Kişisel Bilgiler</h2>
                  <p className="text-gray-500 text-sm mb-6">Adım 1 / 3</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ad *</label>
                      <input
                        type="text" required
                        value={form.ad}
                        onChange={e => update('ad', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10 outline-none transition text-sm"
                        placeholder="Adınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Soyad *</label>
                      <input
                        type="text" required
                        value={form.soyad}
                        onChange={e => update('soyad', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10 outline-none transition text-sm"
                        placeholder="Soyadınız"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-posta Adresi *</label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={e => update('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10 outline-none transition text-sm"
                      placeholder="ornek@universite.edu.tr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Telefon</label>
                    <input
                      type="tel"
                      value={form.telefon}
                      onChange={e => update('telefon', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10 outline-none transition text-sm"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!form.ad || !form.soyad || !form.email}
                    className="w-full py-3.5 bg-[var(--color-forest)] text-white rounded-xl font-semibold hover:bg-[#0f2a1c] disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    Devam Et →
                  </button>
                </div>
              )}

              {/* Adım 2: Akademik Bilgiler */}
              {step === 2 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-[var(--color-forest)] mb-2">Akademik Bilgiler</h2>
                  <p className="text-gray-500 text-sm mb-6">Adım 2 / 3</p>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Üniversite *</label>
                    <input
                      type="text" required
                      value={form.universite}
                      onChange={e => update('universite', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10 outline-none transition text-sm"
                      placeholder="Üniversite adı"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Bölüm / Anabilim Dalı *</label>
                    <input
                      type="text" required
                      value={form.bolum}
                      onChange={e => update('bolum', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10 outline-none transition text-sm"
                      placeholder="Örn: Gastronomi ve Mutfak Sanatları"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Lisansüstü Program *</label>
                    <select
                      required
                      value={form.lisansustu}
                      onChange={e => update('lisansustu', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10 outline-none transition text-sm bg-white"
                    >
                      <option value="">Seçiniz...</option>
                      <option value="yuksek-lisans">Yüksek Lisans</option>
                      <option value="doktora">Doktora</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tez Konusu *</label>
                    <input
                      type="text" required
                      value={form.tez}
                      onChange={e => update('tez', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10 outline-none transition text-sm"
                      placeholder="Tez konunuzu kısaca belirtiniz"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Danışman Adı *</label>
                      <input
                        type="text" required
                        value={form.danisman}
                        onChange={e => update('danisman', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10 outline-none transition text-sm"
                        placeholder="Danışman hoca"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Danışman E-posta</label>
                      <input
                        type="email"
                        value={form.danismanEmail}
                        onChange={e => update('danismanEmail', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10 outline-none transition text-sm"
                        placeholder="danisman@edu.tr"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 py-3.5 border border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition">
                      ← Geri
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!form.universite || !form.bolum || !form.lisansustu || !form.tez || !form.danisman}
                      className="flex-2 flex-1 py-3.5 bg-[var(--color-forest)] text-white rounded-xl font-semibold hover:bg-[#0f2a1c] disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      Devam Et →
                    </button>
                  </div>
                </div>
              )}

              {/* Adım 3: Motivasyon */}
              {step === 3 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-[var(--color-forest)] mb-2">Motivasyon</h2>
                  <p className="text-gray-500 text-sm mb-6">Adım 3 / 3</p>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Bu etkinliğe neden katılmak istiyorsunuz? *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.motiv}
                      onChange={e => update('motiv', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10 outline-none transition text-sm resize-none"
                      placeholder="Motivasyonunuzu ve beklentilerinizi kısaca açıklayınız (en az 100 kelime)..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Sürdürülebilirlik alanındaki deneyimleriniz
                    </label>
                    <textarea
                      rows={4}
                      value={form.deneyim}
                      onChange={e => update('deneyim', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10 outline-none transition text-sm resize-none"
                      placeholder="Varsa ilgili proje, yayın veya deneyimlerinizi paylaşınız..."
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[var(--color-warm)] rounded-xl">
                    <input
                      type="checkbox" id="kvkk" required
                      checked={form.kvkk}
                      onChange={e => update('kvkk', e.target.checked)}
                      className="mt-0.5 w-4 h-4 accent-[var(--color-forest)] flex-shrink-0"
                    />
                    <label htmlFor="kvkk" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      Kişisel verilerimin KVKK kapsamında işlenmesine ve etkinlik süreçlerinde kullanılmasına onay veriyorum. *
                    </label>
                  </div>

                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(2)} className="flex-1 py-3.5 border border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition">
                      ← Geri
                    </button>
                    <button
                      type="submit"
                      disabled={!form.motiv || !form.kvkk || loading}
                      className="flex-1 py-3.5 bg-[var(--color-earth)] text-white rounded-xl font-semibold hover:bg-[#a85e22] disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                            <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" className="opacity-75" />
                          </svg>
                          Gönderiliyor...
                        </>
                      ) : 'Başvuruyu Gönder ✓'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>

        </div>
      </section>
    </div>
  )
}
