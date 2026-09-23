import { named } from './config'

export type Experience = {
  id: string
  company: string
  role: string
  /** Etichetta leggibile del periodo, mostrata in mono. */
  period: string
  /** Formato ISO per l'attributo dateTime di <time>. */
  from: string
  to: string | null
  summary: string
  highlights: string[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    id: 'enhancers',
    company: 'Enhancers — Tinexta Group',
    role: 'Mobile Developer',
    period: 'Ott 2024 — Presente',
    from: '2024-10',
    to: null,
    summary: named(
      'Progetto enterprise di domotica domestica per un cliente del settore elettrodomestici: app mobile che controlla i dispositivi di casa e ne raccoglie i dati.',
      'Progetto Haier (h0n): app mobile di domotica domestica che controlla i dispositivi di casa e ne raccoglie i dati.',
    ),
    highlights: [
      'Sviluppo React Native su architetture complesse, con attenzione a performance e gestione dello stato.',
      'Integrazione di un CRM collegato all’app mobile per anagrafiche e assistenza.',
      'Metodologia Agile con pianificazione e tracciamento delle attività su Jira.',
      'Gestione del ciclo di pull request attraverso pipeline di build e rilascio su AWS.',
    ],
    stack: ['React Native', 'TypeScript', 'Jira', 'AWS', 'CI/CD', 'CRM'],
  },
  {
    id: 'netrising',
    company: 'Netrising',
    role: 'Web & Mobile Developer',
    period: 'Ott 2022 — Ott 2024',
    from: '2022-10',
    to: '2024-10',
    summary:
      'Prima esperienza dopo il bootcamp: dai siti WordPress allo sviluppo custom, fino alle app mobile in produzione.',
    highlights: [
      'Sviluppo di siti web in WordPress, dal tema su misura alla manutenzione.',
      'Transizione verso lo sviluppo di siti custom, senza CMS.',
      'Sviluppo e manutenzione di app mobile in React Native.',
      'Manutenzione di app esistenti costruite con Cordova.',
      named(
        'Contributo a un’app mobile pubblicata sugli store per un cliente del settore ricambi e componentistica.',
        'Sviluppo dell’app “Motion Italia”, pubblicata sugli store.',
      ),
    ],
    stack: ['WordPress', 'PHP', 'JavaScript', 'React Native', 'Cordova', 'SCSS'],
  },
]
