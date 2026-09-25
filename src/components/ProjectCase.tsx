import { useId, useState } from 'react'
import type { Project, ProjectImage } from '../data/projects'
import { ChevronIcon } from './Icons'

function ProjectShot({ image }: { image: ProjectImage }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure>
      <div className="relative aspect-4/3 overflow-hidden rounded-md border border-hairline bg-surface">
        {failed ? (
          // Segnaposto visibile: mostra il percorso del file da aggiungere,
          // così sostituire le immagini non richiede di aprire il codice.
          <div className="flex h-full flex-col items-center justify-center gap-1 p-4 text-center">
            <span className="eyebrow text-accent-soft">Image to add</span>
            <code className="font-mono text-[0.68rem] break-all text-muted">{image.src}</code>
          </div>
        ) : (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] hover:scale-[1.03]"
          />
        )}
      </div>

      {image.caption && (
        <figcaption className="mt-2 font-mono text-[0.68rem] tracking-wide text-muted">
          {image.caption}
        </figcaption>
      )}
    </figure>
  )
}

export function ProjectCase({ project, defaultOpen = false }: { project: Project; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()

  return (
    <article className="glow-hover reveal rounded-lg border border-hairline bg-surface/40">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start justify-between gap-4 rounded-lg p-5 text-left"
        >
          <span>
            <span className="block font-mono text-[0.7rem] tracking-[0.1em] text-accent">
              {project.period}
            </span>
            <span className="mt-1.5 block font-display text-lg font-semibold text-ink">
              {project.title}
            </span>
          </span>

          <span className="mt-1 flex shrink-0 items-center gap-2 font-mono text-[0.7rem] text-muted">
            <span className="hidden sm:inline">{open ? 'Close' : 'Case study'}</span>
            <ChevronIcon
              className={`h-4 w-4 transition-transform duration-400 ease-[var(--ease-out-soft)] ${
                open ? 'rotate-180 text-accent' : ''
              }`}
            />
          </span>
        </button>
      </h3>

      {open && (
        <div id={panelId} className="border-t border-hairline p-5">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="eyebrow">Context</p>
              <p className="mt-2 text-sm text-pretty">{project.context}</p>
            </div>
            <div>
              <p className="eyebrow">My role</p>
              <p className="mt-2 text-sm text-pretty">{project.role}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="eyebrow">Responsibilities</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {project.responsibilities.map((item) => (
                <li key={item} className="relative pl-5">
                  <span
                    aria-hidden="true"
                    className="absolute top-[0.6rem] left-0 h-1 w-2.5 rounded-full bg-accent-soft"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="eyebrow">Stack</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {project.images.length > 0 && (
            <div
              className={`mt-6 grid gap-4 ${project.images.length > 1 ? 'sm:grid-cols-2' : ''}`}
            >
              {project.images.map((image) => (
                <ProjectShot key={image.src} image={image} />
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  )
}
