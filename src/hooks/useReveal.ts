import { useEffect } from "react";

/**
 * Aggiunge .is-visible agli elementi .reveal quando entrano nella viewport,
 * poi smette di osservarli. Un solo observer per tutta la pagina.
 */
export function useReveal(): void {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const pending = nodes.filter((node) => {
      if (node.getBoundingClientRect().top < window.innerHeight) {
        node.classList.add("is-visible");
        return false;
      }
      return true;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    pending.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
