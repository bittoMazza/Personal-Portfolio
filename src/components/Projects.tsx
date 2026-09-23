import { projects } from '../data/projects'
import { ProjectCase } from './ProjectCase'

export function Projects() {
  return (
    <div>
      <p className="reveal max-w-prose text-sm text-pretty">
        Buona parte del lavoro è sotto accordo di riservatezza, quindi qui non trovi link a repo o
        siti live: ogni voce è una case study che racconta contesto, ruolo e scelte tecniche. Apri
        una card per leggerla.
      </p>

      <div className="mt-6 space-y-3">
        {projects.map((project, index) => (
          <ProjectCase key={project.id} project={project} defaultOpen={index === 0} />
        ))}
      </div>
    </div>
  )
}
