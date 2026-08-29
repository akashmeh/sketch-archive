import { REGISTER_URL } from "@/data/sketch";
import { useParallaxLayers } from "@/hooks/use-scroll-fx";

export function Register() {
  const ref = useParallaxLayers<HTMLElement>();

  return (
    <section
      ref={ref}
      id="register"
      className="relative overflow-hidden section-seam px-5 py-28 md:py-40"
      aria-labelledby="register-title"
    >
      <div data-speed="0.14" className="retro-grid absolute inset-[-20%] opacity-30" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[50vh] opacity-35"
        style={{ background: "radial-gradient(ellipse at bottom, var(--ember), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="panel offset-shadow relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-border/70 bg-[oklch(0.14_0.016_48)] px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.26em] text-primary">
            <span>sketch@club:~</span>
            <span className="text-muted-foreground">session 2026</span>
          </div>

          <div className="relative bg-[oklch(0.12_0.014_48)] px-6 py-14 text-center md:px-14 md:py-20">
            <div className="scanlines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
            <div
              className="animate-sweep pointer-events-none absolute inset-x-0 h-10 opacity-15"
              style={{
                background: "linear-gradient(180deg,transparent,var(--phosphor),transparent)",
              }}
              aria-hidden
            />

            <p className="mono-label text-accent">&gt; run join.sketch</p>
            <h2
              id="register-title"
              className="display crt-glow mt-6 text-[clamp(2.2rem,8vw,5.5rem)] text-accent"
            >
              Ready to join SKETCH?
            </h2>
            <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.24em] text-foreground/80">
              10 years of building. Your turn to create.
            </p>

            <a
              href={REGISTER_URL}
              className="group mt-12 inline-flex items-center gap-4 border-2 border-primary bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.24em] text-primary-foreground shadow-[6px_6px_0_0_var(--cream)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_0_var(--cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Register now
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            <p className="mt-10 font-mono text-[0.62rem] tracking-[0.24em] text-accent/80">
              awaiting input<span className="animate-blink">█</span>
            </p>
          </div>
        </div>

        <footer className="mt-14 flex flex-col items-center gap-3 text-center">
          <p className="display text-3xl text-foreground">SKETCH</p>
          <p className="mono-label text-muted-foreground">Design. Develop. Deliver. — Est. 2015</p>
        </footer>
      </div>
    </section>
  );
}
