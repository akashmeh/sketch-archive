import { useState } from "react";
import { domains } from "@/data/sketch";
import { useParallaxLayers } from "@/hooks/use-scroll-fx";
import { SectionLabel } from "./Atmosphere";

export function Domains() {
  const ref = useParallaxLayers<HTMLElement>();
  const [activeId, setActiveId] = useState(domains[0]!.id);
  const active = domains.find((d) => d.id === activeId) ?? domains[0]!;

  return (
    <section
      ref={ref}
      id="domains"
      className="relative overflow-hidden section-seam px-5 py-24 md:py-32"
      aria-labelledby="domains-title"
    >
      <div data-speed="0.12" className="retro-grid absolute inset-[-15%] opacity-25" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <SectionLabel index="04">Control Panel</SectionLabel>
        <h2 id="domains-title" className="display mt-6 text-[clamp(3.2rem,13vw,11rem)] text-foreground">
          Select a <span className="outline-ember">Domain</span>
        </h2>
        <p className="mt-4 max-w-lg font-mono text-xs leading-relaxed text-muted-foreground">
          Six domains keep SKETCH running. Choose a channel to load its brief and its people.
        </p>

        <div className="panel mt-12 md:mt-16">
          <div className="flex items-center justify-between border-b border-border/70 bg-[oklch(0.14_0.016_48)] px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.26em] text-primary">
            <span>channel select</span>
            <span className="text-muted-foreground">{active.code}</span>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,20rem)_1fr]">
            <div
              className="grid grid-cols-2 border-b border-border/70 lg:grid-cols-1 lg:border-b-0 lg:border-r"
              role="tablist"
              aria-label="SKETCH domains"
            >
              {domains.map((d) => {
                const on = d.id === activeId;
                return (
                  <button
                    key={d.id}
                    role="tab"
                    aria-selected={on}
                    aria-controls="domain-panel"
                    onClick={() => setActiveId(d.id)}
                    onMouseEnter={() => setActiveId(d.id)}
                    onFocus={() => setActiveId(d.id)}
                    className={`group flex flex-col items-start gap-1 border-b border-border/40 px-4 py-4 text-left transition-all ${
                      on
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <span className="font-mono text-[0.55rem] tracking-[0.24em] opacity-70">
                      {d.code} {on ? "● ON AIR" : "○"}
                    </span>
                    <span className="display text-lg leading-tight md:text-xl">{d.name}</span>
                  </button>
                );
              })}
            </div>

            <div id="domain-panel" role="tabpanel" className="relative p-6 md:p-10">
              <div className="scanlines pointer-events-none absolute inset-0 opacity-15" aria-hidden />
              <p className="mono-label text-primary">{active.short}</p>
              <h3 key={active.id} className="display mt-3 text-[clamp(2rem,5.5vw,4rem)] text-foreground">
                {active.name}
              </h3>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {active.description}
              </p>

              {active.leads.length > 0 && (
                <div className="mt-8">
                  <p className="mono-label text-primary">Leads</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {active.leads.map((l) => (
                      <li
                        key={l.name + l.role}
                        className="border border-primary/70 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-foreground"
                      >
                        {l.name} <span className="text-primary">/ {l.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8">
                <p className="mono-label text-primary">
                  Members {active.members.length > 0 && `[${active.members.length}]`}
                </p>
                {active.members.length > 0 ? (
                  <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 sm:grid-cols-3">
                    {active.members.map((m) => (
                      <li
                        key={m}
                        className="border-b border-border/50 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-foreground/85"
                      >
                        <span className="text-primary">›</span> {m}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                    Roster maintained by the core team
                    <span className="animate-blink">_</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
