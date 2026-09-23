import { useState } from 'react'
import { profile, socials } from '../data/profile'
import { iconMap } from './Icons'

/**
 * Il sito è statico: non c'è un backend a cui inviare il form. Alla conferma
 * componiamo una mail già scritta e la apriamo nel client di posta, così il
 * messaggio parte dall'indirizzo di chi scrive e la risposta arriva a lui.
 */
export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = `Contatto dal portfolio — ${name || 'nuovo messaggio'}`
    const body = [message, '', '—', name, email].filter(Boolean).join('\n')

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  const fieldClass =
    'w-full rounded-md border border-hairline bg-surface/60 px-3 py-2.5 font-sans text-sm text-ink placeholder:text-muted/80 transition-colors duration-300 focus:border-accent focus:outline-none'

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
      <form onSubmit={handleSubmit} className="reveal max-w-md space-y-4">
        <p className="text-sm text-pretty">
          Cerchi qualcuno per un’app React Native o per un sito da rifare come si deve? Scrivimi:
          rispondo di solito entro un giorno lavorativo.
        </p>

        <div>
          <label htmlFor="contact-name" className="eyebrow mb-1.5 block text-muted">
            Nome
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Come ti chiami"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="eyebrow mb-1.5 block text-muted">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="dove ti rispondo"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="eyebrow mb-1.5 block text-muted">
            Messaggio
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Di cosa hai bisogno"
            className={`${fieldClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="glow-hover inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-5 py-2.5 font-mono text-xs tracking-[0.08em] text-accent uppercase hover:bg-accent/15"
        >
          Apri la mail
        </button>

        <p className="font-mono text-[0.68rem] text-muted">
          Il pulsante apre il tuo client di posta con il messaggio già scritto.
        </p>
      </form>

      <aside className="reveal">
        <p className="eyebrow">In diretta</p>
        <a href={`mailto:${profile.email}`} className="link-accent mt-2 inline-block font-mono text-sm">
          {profile.email}
        </a>

        <ul className="mt-6 space-y-3">
          {socials
            .filter((social) => social.icon !== 'mail')
            .map((social) => {
              const Icon = iconMap[social.icon]
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                    <span
                      aria-hidden="true"
                      className="font-mono text-[0.7rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              )
            })}
        </ul>
      </aside>
    </div>
  )
}
