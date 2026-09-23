import { profile, sections, socials } from "../data/profile";
import { Avatar } from "./Avatar";
import { iconMap } from "./Icons";
import { MobileNav } from "./MobileNav";

const avatarSrc = "/images/avatar.jpg";

type SidebarProps = {
  activeId: string;
};

export function Sidebar({ activeId }: SidebarProps) {
  return (
    <>
      <MobileNav activeId={activeId} />
      <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[38%] lg:max-w-sm lg:flex-col lg:justify-between lg:py-14">
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
              <p className="eyebrow rise-in" style={{ animationDelay: "60ms" }}>
                Portfolio — {new Date().getFullYear()}
              </p>

              <h1
                className="rise-in mt-4 text-[length:var(--text-hero)] font-bold text-ink"
                style={{ animationDelay: "120ms" }}
              >
                {profile.name}
              </h1>

              <p
                className="rise-in mt-2 font-display text-lg font-semibold text-accent"
                style={{ animationDelay: "180ms" }}
              >
                {profile.role}
              </p>

              <p
                className="rise-in mt-5 max-w-sm text-pretty"
                style={{ animationDelay: "240ms" }}
              >
                {profile.tagline}
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

        {/* Su mobile i contatti restano nella sezione Contatti. */}
        <ul
          className="rise-in mt-10 hidden items-center gap-5 md:flex lg:mt-0"
          style={{ animationDelay: "360ms" }}
        >
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel={
                    social.icon === "mail" ? undefined : "noreferrer noopener"
                  }
                  className="block rounded-sm p-1 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent hover:drop-shadow-[0_0_10px_rgb(79_209_197_/_0.45)]"
                >
                  <Icon />
                  <span className="sr-only">{social.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
}
