import PageHeader from '@/components/PageHeader'
import Poster from '@/components/Poster'

export const metadata = {
  title: 'Etkinlik Afişi | Mutfakta Sürdürülebilirlik',
}

export default function EtkinlikAfisiPage() {
  return (
    <div className="page-enter">
      <PageHeader
        badge="Medya"
        title="Etkinlik Afişi"
        subtitle="22–26 Haziran 2026 etkinliğimizin programı ve eğitmen kadrosu."
      />
      <section className="bg-[var(--color-cream)] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Poster />
        </div>
      </section>
    </div>
  )
}
