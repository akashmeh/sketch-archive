import { useEffect, useRef, useState } from "react";
import { domains } from "@/data/sketch";
import { SectionLabel } from "./Atmosphere";

/** Per-domain visual signature: hue drives the whole composition. */
const SIGNATURES: Record<string, { hue: number; chroma: number; motif: string }> = {
  design: { hue: 44, chroma: 0.176, motif: "grid" },
  sponsorship: { hue: 92, chroma: 0.15, motif: "bars" },
  finance: { hue: 92, chroma: 0.15, motif: "bars" },
  content: { hue: 20, chroma: 0.16, motif: "rings" },
  media: { hue: 330, chroma: 0.14, motif: "rings" },
  marketing: { hue: 330, chroma: 0.14, motif: "rings" },
  rnd: { hue: 160, chroma: 0.13, motif: "grid" },
  "r&d": { hue: 160, chroma: 0.13, motif: "grid" },
  opr: { hue: 240, chroma: 0.12, motif: "bars" },
};

function sigFor(id: string, i: number) {
  return (
    SIGNATURES[id] ?? {
      hue: [44, 92, 20, 330, 160, 240][i % 6]!,
      chroma: 0.15,
      motif: ["grid", "bars", "rings"][i % 3]!,
    }
  );
}

export function Domains() {
  const [index, setIndex] = useState(0);
  const active = domains[index] ?? domains[0]!;
  const sig = sigFor(active.id, index);
  const listRef = useRef<HTMLDivElement>(null);

  // keyboard channel tuning
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setIndex((i) => (i + 1) % domains.length);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex((i) => (i - 1 + domains.length) % domains.length);
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, []);

  const tint = `oklch(0.63 ${sig.chroma} ${sig.hue})`;

  return (
    <section
      id="domains"
      aria-labelledby="domains-title"
      className="relative isolate min-h-screen overflow-hidden section-seam"
      style={
        {
          "--dom": tint,
          background: `radial-gradient(120% 90% at ${20 + index * 12}% ${index % 2 ? 80 : 20}%, color-mix(in oklab, ${tint} 16%, transparent) 0%, transparent 62%)`,
          transition: "background 700ms cubic-bezier(.22,1,.36,1)",
        } as React.CSSProperties
      }
    >
      {/* motif layer — swaps with the selected channel */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden>
        {sig.motif === "grid" && (
          <div
            className="absolute inset-[-10%] opacity-40"
            style={{
              backgroundImage: `linear-gradient(to right, color-mix(in oklab, ${tint} 30%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, ${tint} 30%, transparent) 1px, transparent 1px)`,
              backgroundSize: "76px 76px",
              maskImage: "radial-gradient(70% 60% at 60% 40%, black, transparent)",
            }}
          />
        )}
        {sig.motif === "bars" && (
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(115deg, color-mix(in oklab, ${tint} 34%, transparent) 0 2px, transparent 2px 26px)`,
              maskImage: "linear-gradient(to top, black, transparent 85%)",
            }}
          />
        )}
        {sig.motif === "rings" && (
          <div
            className="absolute left-1/2 top-1/2 aspect-square w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35"
            style={{
              backgroundImage: `repeating-radial-gradient(circle, color-mix(in oklab, ${tint} 30%, transparent) 0 1px, transparent 1px 56px)`,
              maskImage: "radial-gradient(closest-side, black, transparent)",
            }}
          />
        )}
      </div>

      {/* colossal channel numeral */}
      <span
        key={`num-${active.id}`}
        aria-hidden
        className="display pointer-events-none absolute -bottom-[8vw] right-[2vw] select-none text-[42vw] leading-[0.7] opacity-[0.07] animate-fade-in"
        style={{ color: tint }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="scanlines pointer-events-none absolute inset-0 opacity-10" aria-hidden />

      <div className="relative mx-auto flex min-h-screen max-w-[92rem] flex-col justify-center px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel index="04">Control Panel</SectionLabel>
            <h2
              id="domains-title"
              className="display mt-4 text-[clamp(3rem,11vw,10rem)] leading-[0.82] text-foreground"
            >
              Six <span className="outline-ember">Channels</span>
            </h2>
          </div>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
            <span style={{ color: tint }}>●</span> on air — {active.code} · arrow keys to tune
          </p>
        </div>

        <div className="mt-10 grid flex-1 gap-8 lg:mt-14 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
          {/* channel dial */}
          <div
            ref={listRef}
            tabIndex={0}
            role="tablist"
            aria-label="SKETCH domains"
            className="flex flex-col outline-none"
          >
            {domains.map((d, i) => {
              const on = i === index;
              const s = sigFor(d.id, i);
              return (
                <button
                  key={d.id}
                  role="tab"
                  aria-selected={on}
                  aria-controls="domain-panel"
                  onClick={() => setIndex(i)}
                  onMouseEnter={() => setIndex(i)}
                  className="group relative flex items-baseline gap-4 border-b border-border/30 py-3 text-left transition-all duration-500"
                  style={{
                    paddingLeft: on ? "1.25rem" : "0rem",
                    color: on ? `oklch(0.63 ${s.chroma} ${s.hue})` : undefined,
                  }}
                >
                  <span
                    className="absolute left-0 top-1/2 h-[62%] w-[3px] -translate-y-1/2 transition-transform duration-500 origin-center"
                    style={{
                      background: `oklch(0.63 ${s.chroma} ${s.hue})`,
                      transform: `translateY(-50%) scaleY(${on ? 1 : 0})`,
                    }}
                    aria-hidden
                  />
                  <span className="font-mono text-[0.55rem] tracking-[0.24em] opacity-60">{d.code}</span>
                  <span
                    className={`display leading-[0.9] transition-all duration-500 ${
                      on ? "text-[clamp(2.2rem,5vw,3.6rem)]" : "text-[clamp(1.5rem,3vw,2.2rem)] text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {d.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* live readout */}
          <div id="domain-panel" role="tabpanel" key={active.id} className="animate-fade-in">
            <p className="mono-label" style={{ color: tint }}>
              {active.short}
            </p>
            <p className="mt-4 max-w-2xl text-[clamp(1.05rem,1.9vw,1.6rem)] leading-[1.45] text-foreground/85">
              {active.description}
            </p>

            {active.leads.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
                {active.leads.map((l) => (
                  <span key={l.name + l.role} className="display text-2xl md:text-3xl text-foreground">
                    {l.name}
                    <span className="ml-2 font-mono text-[0.6rem] uppercase tracking-[0.2em]" style={{ color: tint }}>
                      {l.role}
                    </span>
                  </span>
                ))}
              </div>
            )}

            <div className="mt-10">
              <p className="mono-label text-muted-foreground">
                Roster {active.members.length > 0 && `[${String(active.members.length).padStart(2, "0")}]`}
              </p>
              {active.members.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-x-7 gap-y-1">
                  {active.members.map((m, i) => (
                    <li
                      key={m}
                      className="font-mono text-[0.8rem] uppercase tracking-[0.12em] text-foreground/75 transition-colors hover:text-foreground animate-fade-in"
                      style={{ animationDelay: `${Math.min(i * 28, 500)}ms` }}
                    >
                      <span style={{ color: tint }}>›</span> {m}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted-foreground">
                  Roster maintained by the core team<span className="animate-blink">_</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
