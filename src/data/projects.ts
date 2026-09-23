import { named } from './config'

export type ProjectImage = {
  /** File in public/images/projects/ — preferisci .webp (vedi README). */
  src: string
  /** Alt text descrittivo: obbligatorio, è quello che legge uno screen reader. */
  alt: string
  caption?: string
}

export type Project = {
  id: string
  title: string
  period: string
  /** Il contesto: che problema c'era e per chi. */
  context: string
  /** Il mio ruolo dentro quel contesto. */
  role: string
  responsibilities: string[]
  stack: string[]
  images: ProjectImage[]
}

/**
 * ### PLACEHOLDER ###
 * Ogni voce qui sotto è una case study di esempio costruita sui contesti di
 * lavoro reali. Sostituisci testi, periodi e immagini con i dati definitivi:
 * i campi sono già quelli che il layout si aspetta.
 */
export const projects: Project[] = [
  {
    id: 'smart-home',
    title: named(
      'App di gestione dispositivi smart home', // ### PLACEHOLDER ###
      'h0n — App di gestione dispositivi smart home',
    ),
    period: '2024 — Presente',
    context:
      '### PLACEHOLDER ### Un produttore di elettrodomestici aveva bisogno di una sola app per registrare, controllare e monitorare tutta la gamma di dispositivi connessi di casa, su iOS e Android e in più mercati.',
    role:
      '### PLACEHOLDER ### Lavoro nel team mobile sulle funzionalità di controllo dispositivo e sul layer di stato che tiene sincronizzata l’interfaccia con la telemetria in arrivo.',
    responsibilities: [
      '### PLACEHOLDER ### Schermate di controllo dispositivo con aggiornamenti in tempo reale.',
      '### PLACEHOLDER ### Gestione dello stato condiviso fra più famiglie di prodotto.',
      '### PLACEHOLDER ### Profilazione e riduzione dei re-render nelle liste lunghe.',
      '### PLACEHOLDER ### Revisione delle pull request e allineamento con il team backend.',
    ],
    stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'REST', 'Jira', 'AWS'],
    images: [
      {
        src: '/images/projects/smart-home-1.webp',
        alt: '### PLACEHOLDER ### Schermata home dell’app con l’elenco dei dispositivi connessi',
        caption: '### PLACEHOLDER ### Dashboard dispositivi',
      },
      {
        src: '/images/projects/smart-home-2.webp',
        alt: '### PLACEHOLDER ### Schermata di controllo di un singolo dispositivo',
        caption: '### PLACEHOLDER ### Controllo dispositivo',
      },
      {
        src: '/images/projects/smart-home-3.webp',
        alt: '### PLACEHOLDER ### Schermata dello storico dei consumi',
        caption: '### PLACEHOLDER ### Storico consumi',
      },
    ],
  },
  {
    id: 'crm-mobile',
    title: 'App mobile con integrazione CRM', // ### PLACEHOLDER ###
    period: '2025',
    context:
      '### PLACEHOLDER ### L’assistenza clienti viveva su un CRM separato dall’app: chi apriva una richiesta dal telefono non ritrovava lo stesso storico visto dagli operatori.',
    role:
      '### PLACEHOLDER ### Ho collegato l’app al CRM, definendo con il backend il contratto dei dati e curando gli stati di caricamento ed errore lato client.',
    responsibilities: [
      '### PLACEHOLDER ### Mappatura fra il modello del CRM e quello dell’app.',
      '### PLACEHOLDER ### Autenticazione e gestione della sessione utente.',
      '### PLACEHOLDER ### Stati vuoti, di errore e di riprova pensati per essere azionabili.',
      '### PLACEHOLDER ### Test manuali su dispositivi reali prima di ogni rilascio.',
    ],
    stack: ['React Native', 'TypeScript', 'CRM API', 'OAuth 2.0', 'CI/CD'],
    images: [
      {
        src: '/images/projects/crm-mobile-1.webp',
        alt: '### PLACEHOLDER ### Elenco delle richieste di assistenza nell’app',
        caption: '### PLACEHOLDER ### Elenco richieste',
      },
      {
        src: '/images/projects/crm-mobile-2.webp',
        alt: '### PLACEHOLDER ### Dettaglio di una richiesta con lo storico dei messaggi',
        caption: '### PLACEHOLDER ### Dettaglio richiesta',
      },
    ],
  },
  {
    id: 'wordpress-to-custom',
    title: 'Redesign e-commerce: da WordPress a custom', // ### PLACEHOLDER ###
    period: '2023 — 2024',
    context:
      '### PLACEHOLDER ### Un negozio online su WordPress era diventato lento e difficile da estendere: ogni nuova funzione richiedeva un plugin in più.',
    role:
      '### PLACEHOLDER ### Ho seguito la migrazione verso un front-end custom, mantenendo online il sito esistente durante tutto il passaggio.',
    responsibilities: [
      '### PLACEHOLDER ### Analisi dei plugin da sostituire con codice proprio.',
      '### PLACEHOLDER ### Ricostruzione dei template in un front-end custom.',
      '### PLACEHOLDER ### Ottimizzazione di immagini e caricamento sopra la piega.',
      '### PLACEHOLDER ### Migrazione dei contenuti e redirect per non perdere posizionamento.',
    ],
    stack: ['WordPress', 'PHP', 'JavaScript', 'SCSS', 'MySQL'],
    images: [
      {
        src: '/images/projects/ecommerce-1.webp',
        alt: '### PLACEHOLDER ### Home page dell’e-commerce dopo il redesign',
        caption: '### PLACEHOLDER ### Home dopo il redesign',
      },
      {
        src: '/images/projects/ecommerce-2.webp',
        alt: '### PLACEHOLDER ### Pagina prodotto con galleria e selettore varianti',
        caption: '### PLACEHOLDER ### Pagina prodotto',
      },
    ],
  },
  {
    id: 'cordova-maintenance',
    title: 'Manutenzione di app legacy in Cordova', // ### PLACEHOLDER ###
    period: '2022 — 2024',
    context:
      '### PLACEHOLDER ### Alcune app in produzione erano costruite con Cordova e rischiavano la rimozione dagli store per requisiti di piattaforma non più soddisfatti.',
    role:
      '### PLACEHOLDER ### Ho tenuto le app pubblicabili: aggiornamento delle dipendenze, correzione dei bug segnalati e preparazione delle build per gli store.',
    responsibilities: [
      '### PLACEHOLDER ### Aggiornamento di plugin e target SDK per rientrare nei requisiti degli store.',
      '### PLACEHOLDER ### Correzione dei crash riportati dagli utenti.',
      '### PLACEHOLDER ### Firma e caricamento delle build su App Store e Play Store.',
      '### PLACEHOLDER ### Documentazione del percorso di migrazione verso React Native.',
    ],
    stack: ['Cordova', 'JavaScript', 'Android SDK', 'Xcode'],
    images: [
      {
        src: '/images/projects/cordova-1.webp',
        alt: '### PLACEHOLDER ### Schermata principale di una delle app mantenute',
        caption: '### PLACEHOLDER ### App in produzione',
      },
    ],
  },
]
