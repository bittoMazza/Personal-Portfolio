# Portfolio — Roberto Mazza

Sito portfolio statico: sidebar fissa a sinistra su desktop, contenuto scorrevole
a destra, tema dark con un unico accento teal. Quattro sezioni in sequenza —
`01 About`, `02 Experience`, `03 Projects`, `04 Contact`.

**Stack:** React 19 + Vite 7 + TypeScript + Tailwind CSS 4. Nessun backend:
si deploya come sito statico.

---

## Avvio

```sh
npm install
npm run dev        # http://localhost:5173
```

| Comando | Cosa fa |
| --- | --- |
| `npm run dev` | Server di sviluppo con hot reload |
| `npm run build` | Typecheck + build di produzione in `dist/` |
| `npm run preview` | Serve `dist/` in locale, per controllare la build |
| `npm run typecheck` | Solo controllo dei tipi |

---

## Dove stanno i contenuti

Tutti i testi sono in `src/data/`. **Non serve toccare i componenti** per
aggiornare il sito.

| File | Contiene |
| --- | --- |
| `src/data/profile.ts` | Nome, ruolo, tagline, email, link social, elenco e ordine delle sezioni |
| `src/data/experience.ts` | Le esperienze di lavoro, dalla più recente |
| `src/data/projects.ts` | Le case study dei progetti |
| `src/data/config.ts` | Interruttore per i nomi dei clienti coperti da NDA |
| `src/components/About.tsx` | Il testo della sezione About e l'elenco delle tecnologie |

### 1. Nomi dei clienti sotto NDA

`src/data/config.ts` contiene un solo interruttore:

```ts
export const DISCLOSE_CLIENT_NAMES = false
```

Con `false` (default) il sito descrive i progetti per settore — *"cliente del
settore elettrodomestici"*. Con `true` compaiono i nomi reali (*Haier / h0n*,
*Motion Italia*), che sono già scritti nei file di dati come seconda variante
della funzione `named()`:

```ts
named(
  'Progetto enterprise per un cliente del settore elettrodomestici',  // se false
  'Progetto Haier (h0n)',                                             // se true
)
```

> Metti `true` **solo dopo** aver verificato di poter citare quei nomi
> pubblicamente: controlla contratto e NDA prima di pubblicare.

### 2. Placeholder da sostituire

Cerca la stringa `### PLACEHOLDER ###` per trovarli tutti:

```sh
grep -rn "PLACEHOLDER" src index.html public
```

Quelli da sistemare per primi:

- **Email** — `src/data/profile.ts`, campo `email` (ora `ciao@robertomazza.dev`).
- **LinkedIn** — `src/data/profile.ts`, l'URL del profilo.
- **Dominio** — `index.html`, i tag `canonical` e `og:*`; `public/robots.txt`.
- **Progetti** — `src/data/projects.ts`: le quattro case study sono esempi
  costruiti sui contesti di lavoro reali, con contesto, ruolo, responsabilità
  e stack tutti da riscrivere.
- **Immagine di condivisione** — aggiungi `public/images/og-cover.jpg`
  (1200×630 px) per l'anteprima sui social.

### 3. Immagini dei progetti

Vanno in `public/images/projects/`, con i nomi indicati in
`src/data/projects.ts`. Le istruzioni complete (dimensioni, conversione in
WebP) sono in [`public/images/projects/README.md`](public/images/projects/README.md).

Finché un file manca, la card mostra un segnaposto con il percorso atteso al
posto dell'immagine rotta.

### 4. Aggiungere un progetto o un'esperienza

Aggiungi un oggetto all'array: i tipi `Project` ed `Experience` sono esportati
dagli stessi file e il typecheck segnala i campi mancanti. L'ordine
nell'array è l'ordine in pagina.

Per aggiungere o rinominare una **sezione** serve un passaggio in più: aggiorna
`sections` in `src/data/profile.ts` e la mappa `content` in `src/App.tsx`, che
associa ogni id al suo componente.

---

## Design

Un solo dispositivo strutturale tiene insieme la pagina: **il rail**, la linea
verticale sottile che percorre la colonna di contenuto. La tacca accanto al
titolo si accende sulla sezione in lettura, la sidebar allunga il trattino
corrispondente, e la timeline dell'esperienza si appende alla stessa griglia.
La numerazione `01 — 04` esiste perché le sezioni sono una sequenza di lettura
reale, non come decorazione.

I token — colore, type, easing — sono tutti in `@theme` all'inizio di
`src/index.css`: cambiare `--color-accent` ricolora il sito.

| Ruolo | Valore |
| --- | --- |
| Fondo | `#07110f` |
| Superfici | `#0e1a18` |
| Bordi, tacche | `#1c2b28` |
| Testo secondario | `#8ba39d` |
| Testo primario | `#dceae6` |
| Accento | `#4fd1c5` |

Type: **Sora** per i titoli, **Inter Tight** per il testo, **JetBrains Mono**
per numeri di sezione, date e tag tecnici.

Il sito è **monotema dark** per scelta: non c'è un toggle light, così la palette
resta una e coerente. Se lo vuoi, servono varianti dei token in
`@media (prefers-color-scheme: light)` più un interruttore che scriva
`data-theme` su `<html>`.

---

## Scelte tecniche

- **Immagini** — `loading="lazy"` e `decoding="async"` su tutti gli screenshot;
  le case study sono chiuse di default (tranne la prima), quindi le immagini
  vengono richieste solo quando apri una card.
- **Nessun link esterno sui progetti** — le case study sono interne alla pagina.
  Gli unici link in uscita sono GitHub e LinkedIn.
- **Form di contatto** — il sito è statico, quindi il pulsante compone una
  `mailto:` già scritta e la apre nel client di posta: il messaggio parte
  dall'indirizzo di chi scrive. Per riceverlo via HTTP serve un servizio esterno
  (Formspree, Resend con una Vercel Function, ecc.) da collegare in
  `src/components/Contact.tsx`.
- **Accessibilità** — link "salta al contenuto", focus visibile su tutti gli
  elementi interattivi, `alt` su ogni immagine, case study apribili da tastiera
  con `aria-expanded`, contrasto del testo sopra 7:1.
- **Motion** — `prefers-reduced-motion: reduce` disattiva animazioni di entrata
  e scroll smooth.
- **Dipendenze** — solo React. Niente librerie di animazione o di UI.

---

## Deploy su Vercel

`vercel.json` è già configurato (framework Vite, output `dist/`).

```sh
npm i -g vercel
vercel        # preview
vercel --prod # produzione
```

Oppure collega il repository su [vercel.com/new](https://vercel.com/new): il
preset Vite viene rilevato da solo e ogni push su `main` fa un deploy.
