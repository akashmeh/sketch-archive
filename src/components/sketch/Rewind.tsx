import { events } from "@/data/sketch";
import { useParallaxLayers, useReveal } from "@/hooks/use-scroll-fx";
import { SectionLabel } from "./Atmosphere";

const OFFSETS = [
  "md:translate-y-0 md:rotate-[-2.5deg]",
  "md:translate-y-10 md:rotate-[1.8deg]",
  "md:-translate-y-6 md:rotate-[3deg]",
  "md:translate-y-4 md:rotate-[-1.4deg]",
];

function Photo({
  src,
  alt,
  i,
  speed,
}: {
  src: string;
  alt: string;
  i: number;
  speed: string;
}) {
  return (
    <figure
      data-speed={speed}
      data-reveal
      className={`relative border border-primary/70 bg-card p-1.5 shadow-[0_18px_40px_-16px_oklch(0.08_0.01_48/0.9)] ${OFFSETS[i % OFFSETS.length]}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover contrast-[1.05] saturate-[0.9]"
      />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-25" aria-hidden />
    </figure>
  );
}

export function Rewind() {
  const parallaxRef = useParallaxLayers<HTMLElement>();
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section
      ref={parallaxRef}
      id="rewind"
      className="relative overflow-hidden border-t border-border/60 px-5 py-24 md:py-32"
      aria-labelledby="rewind-title"
    >
      <div data-speed="0.1" className="retro-grid absolute inset-[-15%] opacity-20" aria-hidden />

      <div ref={revealRef} className="relative mx-auto max-w-6xl">
        <SectionLabel index="03">Archive</SectionLabel>
        <h2 id="rewind-title" className="display mt-6 text-[clamp(2.6rem,10vw,8rem)] text-foreground">
          Re<span className="outline-ember">wind</span>
        </h2>
        <p className="mt-4 max-w-lg font-mono text-xs leading-relaxed text-muted-foreground">
          ◀◀ Rolling back the tape. Every event SKETCH has run, as recorded in the club magazine.
        </p>

        <div className="mt-16 space-y-28 md:space-y-40">
          {events.map((ev, idx) => {
            const flip = idx % 2 === 1;
            return (
              <article key={ev.id} className="relative">
                <span
                  aria-hidden
                  data-speed="0.24"
                  className="display pointer-events-none absolute -top-16 left-0 select-none text-[clamp(4rem,14vw,10rem)] text-secondary/50"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div
                  className={`relative grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                    flip ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className={`grid gap-4 ${ev.photos.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
                  >
                    {ev.photos.map((p, i) => (
                      <Photo
                        key={p.src}
                        src={p.src}
                        alt={p.alt}
                        i={i + idx}
                        speed={i % 2 === 0 ? "0.16" : "-0.1"}
                      />
                    ))}
                  </div>

                  <div data-reveal data-speed="0.05" className="relative">
                    <p className="mono-label text-primary">{ev.index}</p>
                    <h3 className="display mt-3 text-[clamp(1.7rem,4.6vw,3.4rem)] text-foreground">
                      {ev.title}
                    </h3>

                    {(ev.date || ev.time || ev.venue) && (
                      <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-y border-border/70 py-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
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
                      </dl>
                    )}

                    <p className="mt-5 leading-relaxed text-lg text-muted-foreground">
                      {ev.description}
                    </p>

                    {ev.outcome && (
                      <div className="mt-6 border-l-2 border-primary pl-4">
                        <p className="mono-label text-primary">Outcome</p>
                        <p className="mt-2 leading-relaxed text-foreground/85">{ev.outcome}</p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
