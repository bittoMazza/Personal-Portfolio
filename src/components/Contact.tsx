import { socials } from '../data/profile'
import { iconMap } from './Icons'

/** Niente form: il sito è statico, quindi ogni canale è un link diretto. */
export function Contact() {
  return (
    <div className="reveal max-w-xl">
      <p className="text-pretty">
        Looking for someone to build a React Native app or to rebuild a website the right way?
        Get in touch: I usually reply within one business day.
      </p>

      <ul className="mt-8 space-y-3">
        {socials.map((social) => {
          const Icon = iconMap[social.icon]
          const isMail = social.icon === 'mail'
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target={isMail ? undefined : '_blank'}
                rel={isMail ? undefined : 'noreferrer noopener'}
                className="glow-hover group flex items-center gap-4 rounded-lg border border-hairline bg-surface/40 px-4 py-3.5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-hairline text-muted transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent">
                  <Icon className="h-[1.1rem] w-[1.1rem]" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="eyebrow block text-muted">{social.label}</span>
                  <span className="mt-0.5 block truncate font-mono text-sm text-ink transition-colors duration-300 group-hover:text-accent">
                    {social.handle}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                >
                  {isMail ? '→' : '↗'}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
