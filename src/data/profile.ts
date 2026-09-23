export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export const profile = {
  name: "Roberto Mazza",
  /** Ruolo mostrato sotto il nome nella sidebar. */
  role: "Mobile & Web Developer",
  /** Una riga sul valore che porti: è la prima cosa che si legge. */
  tagline:
    "Costruisco app React Native e interfacce web per progetti enterprise, dal primo commit alla pipeline di rilascio.",
  /** ### PLACEHOLDER: indirizzo email pubblico ### */
  email: "robertomazza99@gmail.com",
  location: "Italia",
  /** ### PLACEHOLDER: path della foto profilo (es. file in public/images) ### */
  avatar: "/images/avatar.jpg",
} as const;

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/bittoMazza",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/roberto-mazza-99-bitto/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
];

/**
 * Le sezioni sono una sequenza di lettura reale (chi sono → cosa ho fatto →
 * cosa ho costruito → come contattarmi): la numerazione porta informazione,
 * non è decorazione. L'ordine qui guida sidebar, rail e ancore.
 */
export const sections = [
  { id: "about", label: "About", title: "Chi sono" },
  { id: "experience", label: "Experience", title: "Esperienza" },
  { id: "projects", label: "Projects", title: "Progetti" },
  { id: "contact", label: "Contact", title: "Contatti" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
