import { profile, sections } from "../data/profile";
import { Avatar } from "./Avatar";
import { MobileNav } from "./MobileNav";

const avatarSrc = "/images/avatar.jpg";

type SidebarProps = {
  activeId: string;
};

export function Sidebar({ activeId }: SidebarProps) {
  return (
    <>
      <MobileNav activeId={activeId} />
      <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[38%] lg:max-w-sm lg:flex-col lg:justify-between lg:py-24 lg:[@media(max-height:900px)]:py-12">
        <div>
          {/* Mobile e desktop: avatar sopra il testo. Tablet: avatar accanto. */}
          <div className="md:flex md:items-center md:gap-10 lg:block">
            <div
              className="rise-in mb-8 md:mb-0 lg:mb-8"
              style={{ animationDelay: "0ms" }}
            >
              <Avatar
                src={avatarSrc}
                name={profile.name}
                className="aspect-[4/5] w-44 md:w-48 lg:w-52"
              />
            </div>

            <div>
              <h2
                className="rise-in mt-4 text-[length:var(--text-hero)] font-bold text-ink"
                style={{ animationDelay: "120ms" }}
              >
                {profile.name}
              </h2>

              <p
                className="rise-in mt-2 font-display text-lg font-semibold text-accent"
                style={{ animationDelay: "180ms" }}
              >
                {profile.role}
              </p>
            </div>
          </div>

          {/* Nav: verticale su desktop, riga su tablet, hamburger su mobile. */}
          <nav
            className="rise-in mt-10 hidden md:block lg:mt-6"
            style={{ animationDelay: "300ms" }}
            aria-label="Sezioni della pagina"
          >
            <ul className="-mx-10 flex gap-6 overflow-x-auto px-10 pb-2 lg:mx-0 lg:flex-col lg:gap-3 lg:overflow-visible lg:px-0 lg:pb-0">
              {sections.map((section, index) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id} className="shrink-0">
                    <a
                      href={`#${section.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className="group flex items-center gap-3 rounded-sm py-2 lg:py-1"
                    >
                      {/* La tacca: si allunga e si accende sulla sezione attiva. */}
                      <span
                        aria-hidden="true"
                        className={`hidden h-px transition-all duration-500 ease-[var(--ease-out-soft)] lg:block ${
                          isActive
                            ? "w-16 bg-accent"
                            : "w-8 bg-hairline group-hover:w-16 group-hover:bg-muted"
                        }`}
                      />
                      <span
                        className={`font-mono text-xs tracking-[0.12em] transition-colors duration-300 ${
                          isActive ? "text-accent" : "text-muted"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-sm font-semibold tracking-wide transition-colors duration-300 ${
                          isActive
                            ? "text-ink"
                            : "text-muted group-hover:text-ink"
                        }`}
                      >
                        {section.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
