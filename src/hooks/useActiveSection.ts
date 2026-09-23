import { useEffect, useState } from 'react'

/**
 * Restituisce l'id della sezione che sta occupando la linea di lettura
 * (35% dell'altezza della viewport). Calcolo diretto invece di
 * IntersectionObserver: con sezioni di altezze molto diverse evita
 * lo sfarfallio dell'indicatore attivo.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const line = window.innerHeight * 0.35
      let current = ids[0] ?? ''

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= line) current = id
      }

      // In fondo alla pagina l'ultima sezione è quella che stai leggendo,
      // anche se il suo bordo superiore è già oltre la linea.
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      if (atBottom && ids.length > 0) current = ids[ids.length - 1]

      setActive(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}
