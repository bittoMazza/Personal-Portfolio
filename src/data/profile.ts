export type SocialLink = {
  label: string;
  href: string;
  /** Come appare il contatto: username o indirizzo. */
  handle: string;
  icon: "github" | "linkedin" | "mail";
};

export const profile = {
  name: "Roberto Mazza",
  /** Ruolo mostrato sotto il nome nella sidebar. */
  role: "Mobile & Web Developer",
  /** Una riga sul valore che porti: è la prima cosa che si legge. */
  tagline:
    "I build React Native apps and web interfaces for enterprise projects.",
  /** ### PLACEHOLDER: indirizzo email pubblico ### */
  email: "robertomazza99@gmail.com",
  location: "Italy",
  /** ### PLACEHOLDER: path della foto profilo (es. file in public/images) ### */
  avatar: "/images/avatar.jpg",
} as const;

export const socials: SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    handle: profile.email,
    icon: "mail",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/roberto-mazza-99-bitto/",
    handle: "roberto-mazza-99-bitto",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/bittoMazza",
    handle: "bittoMazza",
    icon: "github",
  },
];

/**
 * Le sezioni sono una sequenza di lettura reale (chi sono → cosa ho fatto →
 * cosa ho costruito → come contattarmi): la numerazione porta informazione,
 * non è decorazione. L'ordine qui guida sidebar, rail e ancore.
 */
export const sections = [
  { id: "about", label: "About", title: "About me" },
  { id: "experience", label: "Experience", title: "Experience" },

  { id: "projects", label: "Projects", title: "Projects" },
  { id: "contact", label: "Contact", title: "Get in touch" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
