import { useMemo, useState } from "react";
import { events, type SketchEvent } from "@/data/sketch";
import { useParallaxLayers } from "@/hooks/use-scroll-fx";
import { SectionLabel } from "./Atmosphere";

const TILT = ["-rotate-[2.4deg]", "rotate-[1.6deg]", "-rotate-[1deg]", "rotate-[2.8deg]"];

function Plate({ src, alt, i, big }: { src: string; alt: string; i: number; big?: boolean }) {
  return (
    <figure
      className={`relative shrink-0 border border-primary/70 bg-card p-1.5 shadow-[0_22px_50px_-20px_oklch(0.08_0.01_48/0.95)] transition-transform duration-500 hover:z-10 hover:scale-[1.03] hover:rotate-0 ${
        TILT[i % TILT.length]
      } ${big ? "w-full" : "w-[68vw] sm:w-[22rem]"}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full object-cover contrast-[1.06] saturate-[0.88] ${big ? "h-56 md:h-72" : "h-44 sm:h-52"}`}
      />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-25" aria-hidden />
      <figcaption className="pointer-events-none absolute bottom-2 left-2 right-2 font-mono text-[0.5rem] uppercase tracking-[0.18em] text-foreground/70 opacity-0 transition-opacity duration-300 group-hover/plate:opacity-100">
        {alt}
      </figcaption>
    </figure>
  );
}

function Record({
  ev,
  n,
  open,
  onToggle,
}: {
  ev: SketchEvent;
  n: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="relative pl-10 md:pl-16">
      {/* timeline marker */}
      <span
        aria-hidden
        className={`absolute left-[0.72rem] top-[1.5rem] h-3 w-3 -translate-x-1/2 rotate-45 border transition-all duration-500 md:left-6 ${
          open
            ? "scale-125 border-primary bg-primary shadow-[0_0_18px_2px_color-mix(in_oklab,var(--ember)_60%,transparent)]"
            : "border-primary/60 bg-background"
        }`}
      />

      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`rec-${ev.id}`}
          className="group flex w-full flex-wrap items-baseline gap-x-5 gap-y-1 border-b border-border/50 py-5 text-left transition-colors hover:border-primary/60"
        >
          <span className="font-mono text-[0.55rem] tracking-[0.24em] text-primary">
            {String(n).padStart(2, "0")}
          </span>
          <span
            className={`display leading-[0.86] transition-all duration-500 ${
              open
                ? "text-[clamp(2.2rem,6.5vw,5rem)] text-foreground"
                : "text-[clamp(1.6rem,4.4vw,3.4rem)] text-foreground/70 group-hover:text-foreground"
            }`}
          >
            {ev.title}
          </span>
          <span className="ml-auto font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground">
            {ev.date ?? ev.year} · {ev.category} <span className="text-primary">{open ? "—" : "+"}</span>
          </span>
        </button>
      </h3>

      <div
        id={`rec-${ev.id}`}
        hidden={!open}
        className={open ? "animate-fade-in pb-16 pt-8" : undefined}
      >
        {(ev.date || ev.time || ev.venue) && (
          <dl className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
            {ev.date && (
              <div className="flex gap-2">
                <dt className="text-primary">Date</dt>
                <dd>{ev.date}</dd>
              </div>
            )}
            {ev.time && (
              <div className="flex gap-2">
                <dt className="text-primary">Time</dt>
                <dd>{ev.time}</dd>
              </div>
            )}
            {ev.venue && (
              <div className="flex gap-2">
                <dt className="text-primary">Venue</dt>
                <dd>{ev.venue}</dd>
              </div>
            )}
            <div className="flex gap-2">
              <dt className="text-primary">Reel</dt>
              <dd>{ev.index}</dd>
            </div>
          </dl>
        )}

        {/* layered film strip */}
        <div className="group/plate -mx-5 mt-8 flex gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:px-0">
          {ev.photos.map((p, i) => (
            <Plate key={p.src} src={p.src} alt={p.alt} i={i} />
          ))}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.25fr_1fr]">
          <p className="text-[clamp(1rem,1.6vw,1.35rem)] leading-[1.5] text-foreground/85">
            {ev.description}
          </p>
          {ev.outcome && (
            <div className="border-l-2 border-primary pl-5">
              <p className="mono-label text-primary">Outcome</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">{ev.outcome}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function Rewind() {
  const parallaxRef = useParallaxLayers<HTMLElement>();
  const [filter, setFilter] = useState<string>("ALL");
  const [openId, setOpenId] = useState<string | null>(events[0]?.id ?? null);

  const filters = useMemo(() => {
    const years = [...new Set(events.map((e) => e.year))].sort();
    const cats = [...new Set(events.map((e) => e.category))].sort();
    return ["ALL", ...years, ...cats];
  }, []);

  const list = useMemo(
    () =>
      filter === "ALL"
        ? events
        : events.filter((e) => e.year === filter || e.category === filter),
    [filter],
  );

  return (
    <section
      ref={parallaxRef}
      id="rewind"
      className="relative overflow-hidden section-seam px-5 py-24 md:py-32"
      aria-labelledby="rewind-title"
    >
      <div data-speed="0.1" className="retro-grid absolute inset-[-15%] opacity-20" aria-hidden />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden />
      <span
        aria-hidden
        data-speed="0.3"
        className="display pointer-events-none absolute -left-[3vw] top-[18vh] select-none text-[34vw] leading-none text-secondary/30"
      >
        ◀◀
      </span>

      <div className="relative mx-auto max-w-6xl">
        <SectionLabel index="03">The SKETCH Archive / All Events</SectionLabel>
        <h2 id="rewind-title" className="display mt-6 text-[clamp(3.4rem,17vw,15rem)] leading-[0.8] text-foreground">
          Re<span className="outline-ember">wind</span>
        </h2>
        <p className="mt-5 max-w-xl font-mono text-xs leading-relaxed text-muted-foreground">
          ◀◀ Rolling back the tape. Every event SKETCH has run lives here — one directory, no
          detours. Open a record to load its photographs and notes.
        </p>

        {/* filter bar */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-y border-border/60 py-3">
          <span className="mr-2 font-mono text-[0.55rem] uppercase tracking-[0.24em] text-primary">
            filter
          </span>
          {filters.map((f) => {
            const on = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={on}
                className={`font-mono text-[0.6rem] uppercase tracking-[0.18em] px-3 py-1.5 border transition-colors ${
                  on
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/60 text-muted-foreground hover:border-primary/70 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            );
          })}
          <span className="ml-auto font-mono text-[0.55rem] uppercase tracking-[0.24em] text-muted-foreground">
            {String(list.length).padStart(2, "0")} / {String(events.length).padStart(2, "0")} records
          </span>
        </div>

        {/* directory */}
        <div className="relative mt-6">
          <span
            aria-hidden
            className="absolute bottom-0 left-[0.72rem] top-0 w-px bg-gradient-to-b from-transparent via-primary/45 to-transparent md:left-6"
          />
          {list.map((ev) => (
            <Record
              key={ev.id}
              ev={ev}
              n={events.indexOf(ev) + 1}
              open={openId === ev.id}
              onToggle={() => setOpenId(openId === ev.id ? null : ev.id)}
            />
          ))}
          {list.length === 0 && (
            <p className="py-16 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              No records on this channel<span className="animate-blink">_</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
