const stack = [
  'React Native',
  'React',
  'TypeScript',
  'JavaScript',
  'WordPress',
  'Cordova',
  'Agile / Jira',
  'CI/CD su AWS',
]

export function About() {
  return (
    <div className="reveal space-y-5 text-pretty">
      <p>
        Nel 2022 ho chiuso il percorso di <strong className="font-semibold text-ink">Boolean</strong>
        , un bootcamp intensivo di sviluppo web, e da lì sono partito: prima siti in WordPress, poi
        siti custom, poi app mobile in React Native e la manutenzione di app costruite con Cordova.
      </p>

      <p>
        Oggi lavoro su{' '}
        <strong className="font-semibold text-ink">progetti enterprise</strong>, dove il codice è
        solo una parte del lavoro: metodologia Agile, integrazione di CRM con l’app mobile e
        gestione del ciclo di rilascio — pull request, pipeline e build su AWS.
      </p>

      <p>
        Mi interessa il punto in cui l’architettura incontra l’uso reale: un’app di domotica deve
        rispondere subito quando premi un pulsante, anche quando dietro c’è un dispositivo fisico,
        una rete lenta e tre anni di legacy.
      </p>

      <div className="pt-3">
        <p className="eyebrow">Con cui lavoro ogni giorno</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
