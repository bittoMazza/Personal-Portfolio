import { projects } from "../data/projects";
import { ProjectCase } from "./ProjectCase";

export function Projects() {
  return (
    <div>
      <p className="max-w-prose text-sm text-pretty">
        Most of my work is under a non-disclosure agreement, so you won’t find
        links to repos or live sites here: each entry is a case study covering
        context, role and technical choices. Open a card to read it.
      </p>

      <div className="mt-6 space-y-3">
        {projects.map((project, index) => (
          <ProjectCase
            key={project.id}
            project={project}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
