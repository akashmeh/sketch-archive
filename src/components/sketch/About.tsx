import { useState } from "react";
import { timeline } from "@/data/sketch";
import { useParallaxLayers, useReveal } from "@/hooks/use-scroll-fx";
import { SectionLabel } from "./Atmosphere";

export function About() {
  const parallaxRef = useParallaxLayers<HTMLElement>();
  const revealRef = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const node = timeline[active];

  return (
    <section
      ref={parallaxRef}
      id="about"
      className="relative overflow-hidden border-t border-border/60 px-5 py-24 md:py-32"
      aria-labelledby="about-title"
    >
      <div data-speed="0.12" className="retro-grid absolute inset-[-15%] opacity-25" aria-hidden />

      <div ref={revealRef} className="relative mx-auto max-w-6xl">
        <SectionLabel index="01">About</SectionLabel>

        <h2
          id="about-title"
          data-reveal
          className="display mt-6 text-[clamp(2.6rem,9vw,7rem)] text-foreground"
        >
          About <span className="outline-ember">SKETCH</span>
        </h2>

        <p data-reveal className="mt-4 max-w-xl font-mono text-xs leading-relaxed text-muted-foreground">
          A student-led community bringing creativity, technology and innovation onto one platform.
          Step through the log below.
        </p>

        {/* Retro terminal browser */}
        <div data-reveal className="panel offset-shadow mt-12 md:mt-16">
          <div className="flex items-center justify-between border-b border-border/70 bg-[oklch(0.14_0.016_48)] px-4 py-2">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-primary">
              /sketch/journey.log
            </span>
            <span className="flex gap-1.5" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-primary/70" />
              <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
              <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
            </span>
          </div>

          <div className="grid md:grid-cols-[minmax(0,15rem)_1fr]">
            <ul className="border-b border-border/70 md:border-b-0 md:border-r" role="tablist" aria-label="SKETCH timeline">
              {timeline.map((item, i) => (
                <li key={item.year + item.title}>
                  <button
                    role="tab"
                    aria-selected={active === i}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`flex w-full items-center justify-between gap-3 border-b border-border/40 px-4 py-3.5 text-left font-mono text-[0.68rem] uppercase tracking-[0.18em] transition-colors ${
                      active === i
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <span>{item.year}</span>
                    <span className="opacity-70">{active === i ? "▶" : item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="relative min-h-[19rem] p-6 md:p-10">
              <div className="scanlines pointer-events-none absolute inset-0 opacity-20" aria-hidden />
              <p className="mono-label text-primary">
                {node.label} — Entry {String(active + 1).padStart(2, "0")}/
                {String(timeline.length).padStart(2, "0")}
              </p>
              <h3 className="display mt-4 text-[clamp(1.8rem,4.4vw,3.2rem)] text-foreground">
                {node.title}
              </h3>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {node.body}
              </p>
              <p className="mt-8 font-mono text-[0.65rem] tracking-[0.2em] text-primary">
                &gt; next<span className="animate-blink">_</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { k: "Founded", v: "2015" },
            { k: "Domains", v: "06" },
            { k: "Motto", v: "D.D.D." },
          ].map((s) => (
            <div key={s.k} data-reveal className="border border-border/70 px-5 py-5">
              <p className="mono-label text-muted-foreground">{s.k}</p>
              <p className="display mt-2 text-4xl text-primary">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
