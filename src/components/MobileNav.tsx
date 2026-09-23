import { useEffect, useState } from "react";
import { sections } from "../data/profile";

type MobileNavProps = {
  activeId: string;
};

/** Solo mobile: hamburger fluttuante che apre il pannello delle sezioni. */
export function MobileNav({ activeId }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    // Se si passa a tablet/desktop col menu aperto, lo chiudiamo.
    const mediaQuery = window.matchMedia("(min-width: 48rem)");
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    mediaQuery.addEventListener("change", onBreakpoint);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      mediaQuery.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Chiudi menu" : "Apri menu"}
        className="fixed top-4 right-4 z-50 flex size-11 items-center justify-center rounded-full bg-void/70 text-accent backdrop-blur-md"
      >
        {/* Tre linee che diventano una X; l'alone neon avvolge solo loro. */}
        <span
          aria-hidden="true"
          className={`neon-glow relative flex size-full items-center justify-center ${
            open ? "is-open" : ""
          }`}
        >
          <span
            aria-hidden="true"
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-[var(--ease-out-soft)] ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-[var(--ease-out-soft)] ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </span>
      </button>

      {/* Velo dietro al pannello: un tap fuori chiude il menu. */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-void/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        id="mobile-menu"
        aria-label="Sezioni della pagina"
        className={`fixed inset-x-0 top-0 z-40 border-b border-hairline bg-surface px-6 pt-16 pb-4 transition-[opacity,transform,visibility] duration-300 ease-[var(--ease-out-soft)] ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {sections.map((section, index) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className="flex items-center gap-4 rounded-sm py-3"
                >
                  <span
                    className={`font-mono text-xs tracking-[0.12em] ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-base font-semibold tracking-wide ${
                      isActive ? "text-ink" : "text-muted"
                    }`}
                  >
                    {section.label}
                  </span>
                  {isActive && (
                    <span aria-hidden="true" className="h-px w-8 bg-accent" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
