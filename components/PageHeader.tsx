interface PageHeaderProps {
  title: string
  subtitle?: string
  badge?: string
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="bg-[var(--color-forest)] pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {badge && (
          <p className="text-[#86efac] text-sm font-semibold uppercase tracking-widest mb-3">{badge}</p>
        )}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
