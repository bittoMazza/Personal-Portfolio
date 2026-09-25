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
    id: 'netrising',
    company: 'Netrising',
    role: 'Web & Mobile Developer',
    period: 'Oct 2022 — Oct 2024',
    from: '2022-10',
    to: '2024-10',
    summary:
      'My first role after the bootcamp: from WordPress sites to custom development, all the way to mobile apps in production.',
    highlights: [
      'Built WordPress websites, from custom themes to ongoing maintenance.',
      'Moved on to building custom websites without a CMS.',
      'Developed and maintained React Native mobile apps.',
      'Maintained existing apps built with Cordova.',
      named(
        'Contributed to a mobile app published on the App Store and Google Play for a client in the spare parts and components sector.',
        'Developed the “Motion Italia” app, published on the App Store and Google Play.',
      ),
    ],
    stack: ['WordPress', 'PHP', 'JavaScript', 'React Native', 'Cordova', 'SCSS'],
  },
  {
    id: 'enhancers',
    company: 'Enhancers — Tinexta Group',
    role: 'Mobile Developer',
    period: 'Oct 2024 — Present',
    from: '2024-10',
    to: null,
    summary: named(
      'Enterprise smart home project for a home appliance manufacturer: a mobile app that controls connected devices and collects their data.',
      'Haier (h0n) project: a smart home mobile app that controls connected devices and collects their data.',
    ),
    highlights: [
      'React Native development on complex architectures, with a focus on performance and state management.',
      'Integrated a CRM with the mobile app for customer records and support.',
      'Agile workflow, with task planning and tracking in Jira.',
    ],
    stack: ['React Native', 'TypeScript', 'Jira', 'AWS', 'CI/CD', 'CRM'],
  },
]
