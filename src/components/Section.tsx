import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: number
  label: string
  title: string
  isActive: boolean
  children: ReactNode
}

/**
 * Ogni sezione si appende al "rail": il righello verticale che percorre la
 * colonna di contenuto. La tacca accanto al titolo si accende quando la
 * sezione è quella in lettura, così la posizione nella pagina è sempre
 * leggibile anche senza guardare la sidebar.
 */
export function Section({ id, index, label, title, isActive, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-16 py-14 [&:first-of-type]:pt-0 md:pl-12 lg:py-20"
    >
      <header className="reveal relative">
        {/* Tacca sul rail. */}
        <span
          aria-hidden="true"
          className="absolute top-[0.6rem] -left-12 hidden items-center md:flex"
        >
          <span
            className={`h-1.5 w-1.5 -translate-x-[3px] rounded-full transition-colors duration-500 ${
              isActive ? 'bg-accent' : 'bg-hairline'
            }`}
          />
          <span
            className={`h-px transition-all duration-500 ease-[var(--ease-out-soft)] ${
              isActive ? 'w-8 bg-accent' : 'w-5 bg-hairline'
            }`}
          />
        </span>

        <p className="eyebrow">
          {String(index + 1).padStart(2, '0')}
          <span aria-hidden="true" className="mx-2 text-accent-soft">—</span>
          <span className="text-muted">{label}</span>
        </p>

        <h2
          id={`${id}-title`}
          className="mt-3 text-[length:var(--text-section)] font-bold text-ink"
        >
          {title}
        </h2>
      </header>

      <div className="mt-8">{children}</div>
    </section>
  )
}
