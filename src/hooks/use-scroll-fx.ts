import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

function ensureGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

function isSimplified() {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(max-width: 767px)").matches
  );
}

/**
 * Multi-layer parallax: every child carrying data-speed="0.2" drifts
 * relative to scroll. Simplified (disabled) on mobile and reduced motion.
 */
export function useParallaxLayers<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || isSimplified()) return;
    const g = ensureGsap();

    const ctx = g.context(() => {
      const layers = root.querySelectorAll<HTMLElement>("[data-speed]");
      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset["speed"] || "0");
        g.to(layer, {
          y: () => speed * -160,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return ref;
}

/** Reveal children marked with data-reveal as they enter the viewport. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const g = ensureGsap();

    const ctx = g.context(() => {
      const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
      items.forEach((item, i) => {
        g.from(item, {
          opacity: 0,
          y: 42,
          duration: 0.85,
          ease: "power3.out",
          delay: (i % 4) * 0.06,
          scrollTrigger: { trigger: item, start: "top 88%", once: true },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return ref;
}

export { ensureGsap, isSimplified };

/**
 * Cinematic hero: pins the hero and dollies the CRT stage forward until the
 * screen swallows the viewport, so the next section emerges from inside it.
 * Disabled on mobile / reduced motion.
 */
export function useHeroCinema<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || isSimplified()) return;
    const g = ensureGsap();

    const ctx = g.context(() => {
      const stage = root.querySelector<HTMLElement>('[data-cinema="stage"]');
      const fades = root.querySelectorAll<HTMLElement>('[data-cinema="fade"]');
      const bars = root.querySelectorAll<HTMLElement>('[data-cinema="bar"]');

      const tl = g.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      if (fades.length) tl.to(fades, { opacity: 0, y: -60, duration: 0.3 }, 0);
      if (bars.length) tl.to(bars, { height: "14vh", duration: 0.5 }, 0);
      if (stage) {
        tl.to(stage, { scale: 4.2, ease: "power2.in", duration: 1 }, 0);
        tl.to(stage, { opacity: 0, duration: 0.22 }, 0.82);
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return ref;
}
