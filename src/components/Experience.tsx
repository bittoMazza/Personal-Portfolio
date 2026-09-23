import { experiences } from '../data/experience'
import type { Experience as Job } from '../data/experience'

/**
 * L'etichetta del periodo è già scritta per essere letta ("Ott 2024 —
 * Presente"); from/to servono solo a dare a <time> una data valida. Un lavoro
 * in corso non ha una data di fine, quindi la seconda metà resta testo.
 */
function Period({ job }: { job: Job }) {
  const [start, end] = job.period.split('\u2014').map((part) => part.trim())

  return (
    <>
      <time dateTime={job.from}>{start}</time>
      <span aria-hidden="true" className="mx-1 text-accent-soft">
        —
      </span>
      {job.to ? <time dateTime={job.to}>{end}</time> : <span>{end}</span>}
    </>
  )
}

export function Experience() {
  return (
    <ol className="space-y-3">
      {experiences.map((job) => (
        <li key={job.id}>
          <article className="glow-hover reveal group grid gap-2 rounded-lg border border-transparent p-4 transition-colors hover:border-hairline hover:bg-surface/60 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
            <p className="pt-1 font-mono text-xs leading-relaxed tracking-[0.06em] text-muted">
              <Period job={job} />
            </p>

            <div>
              <h3 className="font-display text-base font-semibold text-ink">
                {job.role}{' '}
                <span className="text-accent transition-colors group-hover:text-accent">
                  @ {job.company}
                </span>
              </h3>

              <p className="mt-2 text-sm text-pretty">{job.summary}</p>

              <ul className="mt-3 space-y-1.5 text-sm">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="relative pl-5">
                    <span
                      aria-hidden="true"
                      className="absolute top-[0.6rem] left-0 h-1 w-2.5 rounded-full bg-accent-soft"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </li>
      ))}
    </ol>
  )
}
