import { useEffect, useRef, useState } from "react";
import crt from "@/assets/crt-workstation.png";
import { useParallaxLayers } from "@/hooks/use-scroll-fx";

const BOOT_LINES = [
  "SKETCH OS v10.0 — READY",
  "LOADING /CLUB/IDENTITY ...... OK",
  "MOUNTING DOMAINS [6] ........ OK",
  "DESIGN. DEVELOP. DELIVER.",
];

function ScreenTerminal() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= BOOT_LINES.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 520);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-hidden p-[6%] text-left">
      <div className="space-y-[3%]">
        {BOOT_LINES.slice(0, shown).map((line) => (
          <p
            key={line}
            className="crt-glow font-mono text-[clamp(0.42rem,0.85vw,0.8rem)] tracking-[0.14em] text-accent"
          >
            {line}
          </p>
        ))}
        <span className="crt-glow animate-blink inline-block font-mono text-[clamp(0.42rem,0.85vw,0.8rem)] text-accent">
          █
        </span>
      </div>
      <div className="flex items-end justify-between gap-2">
        <span className="display crt-glow text-[clamp(1.6rem,4.6vw,3.6rem)] text-accent">SKETCH</span>
        <span className="font-mono text-[clamp(0.36rem,0.7vw,0.62rem)] tracking-[0.24em] text-accent/70">
          EST. 2015
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useParallaxLayers<HTMLElement>();
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pt-20 pb-10"
    >
      <div data-speed="0.15" className="retro-grid absolute inset-[-20%] opacity-60" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-[40vh] opacity-40"
        style={{ background: "radial-gradient(ellipse, var(--ember), transparent 68%)" }}
      />

      <div
        data-speed="0.5"
        className="pointer-events-none absolute inset-x-0 top-[16%] z-10 select-none text-center"
        aria-hidden
      >
        <span className="display outline-ember block text-[clamp(5rem,26vw,20rem)] opacity-40">
          SKETCH
        </span>
      </div>

      <h1 className="sr-only">
        SKETCH — a student technology and innovation club. Design. Develop. Deliver.
      </h1>

      <div data-speed="0.25" className="relative z-20 mt-[10vh] w-full max-w-3xl">
        <div className="relative">
          <img
            src={crt}
            width={1280}
            height={1024}
            alt="Retro CRT computer workstation running SKETCH OS"
            className="animate-flicker w-full drop-shadow-[0_40px_60px_oklch(0.08_0.01_48/0.8)]"
          />
          {/* Screen overlay, positioned over the monitor glass */}
          <div className="absolute left-[26.5%] top-[10.5%] h-[36.5%] w-[41.5%] overflow-hidden rounded-[3px] bg-[oklch(0.14_0.03_48)]">
            <ScreenTerminal />
            <div className="scanlines pointer-events-none absolute inset-0 opacity-50" />
            <div
              className="animate-sweep pointer-events-none absolute inset-x-0 h-6 opacity-25"
              style={{ background: "linear-gradient(180deg,transparent,var(--phosphor),transparent)" }}
            />
          </div>
        </div>
      </div>

      <div data-speed="0.1" className="relative z-30 mt-10 w-full max-w-5xl text-center">
        <p className="display text-[clamp(1.6rem,5.2vw,4rem)] text-foreground">
          Design. <span className="outline-type">Develop.</span> Deliver.
        </p>
        <p className="mono-label mt-5 text-primary">10 Years of Turning Ideas Into Impact</p>
      </div>

      <a
        href="#about"
        className="group relative z-30 mt-10 inline-flex items-center gap-3 border border-primary/60 px-5 py-2 font-mono text-[0.7rem] uppercase tracking-[0.26em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Scroll to enter
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>

      <div
        ref={marqueeRef}
        aria-hidden
        className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-border/60 bg-[oklch(0.11_0.012_48)] py-2"
      >
        <div className="animate-marquee flex w-max gap-10 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>Student-led</span>
              <span className="text-primary">◆</span>
              <span>Multidisciplinary</span>
              <span className="text-primary">◆</span>
              <span>Founded 2015</span>
              <span className="text-primary">◆</span>
              <span>Design. Develop. Deliver.</span>
              <span className="text-primary">◆</span>
              <span>Ideas into impact</span>
              <span className="text-primary">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
