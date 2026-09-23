import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Section } from "./components/Section";
import { Sidebar } from "./components/Sidebar";
import { sections } from "./data/profile";
import { useActiveSection } from "./hooks/useActiveSection";
import { useReveal } from "./hooks/useReveal";

const sectionIds = sections.map((section) => section.id);

const content = {
  about: <About />,
  experience: <Experience />,
  projects: <Projects />,
  contact: <Contact />,
} as const;

export default function App() {
  const activeId = useActiveSection(sectionIds);
  useReveal();

  return (
    <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10 lg:flex lg:justify-between lg:gap-16 lg:px-12 lg:py-0">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:border focus:border-accent focus:bg-void focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-accent"
      >
        Salta al contenuto
      </a>

      <Sidebar activeId={activeId} />

      <main className="relative mt-16 lg:mt-0 lg:w-[56%] lg:py-24">
        {/* Il rail: la linea verticale a cui si appendono le tacche di sezione. */}
        <span
          aria-hidden="true"
          className="absolute top-2 left-0 hidden w-px bg-gradient-to-b from-hairline via-hairline to-transparent md:block"
          style={{ height: "calc(100% - 3rem)" }}
        />

        {sections.map((section, index) => (
          <Section
            key={section.id}
            id={section.id}
            index={index}
            label={section.label}
            title={section.title}
            isActive={activeId === section.id}
          >
            {content[section.id]}
          </Section>
        ))}
      </main>
    </div>
  );
}
