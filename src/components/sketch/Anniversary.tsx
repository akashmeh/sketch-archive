import { useEffect, useState } from "react";
import { FOUNDED } from "@/data/sketch";
import { useParallaxLayers } from "@/hooks/use-scroll-fx";
import { SectionLabel } from "./Atmosphere";

type Elapsed = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function elapsedSince(from: Date, now: Date): Elapsed {
  let years = now.getUTCFullYear() - from.getUTCFullYear();
  let months = now.getUTCMonth() - from.getUTCMonth();
  let days = now.getUTCDate() - from.getUTCDate();
  let hours = now.getUTCHours() - from.getUTCHours();
  let minutes = now.getUTCMinutes() - from.getUTCMinutes();
  let seconds = now.getUTCSeconds() - from.getUTCSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const prevMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 0));
    days += prevMonth.getUTCDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }
  return { years, months, days, hours, minutes, seconds };
}

function Digit({ value, unit }: { value: number; unit: string }) {
  const text = String(value).padStart(2, "0");
  return (
    <div className="relative flex-1 border border-border/80 bg-[oklch(0.12_0.014_48)] px-2 py-4 text-center md:px-4 md:py-6">
      <div className="scanlines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <span className="crt-glow display block text-[clamp(1.8rem,5.4vw,4.4rem)] tabular-nums text-accent">
        {text}
      </span>
      <span className="mt-2 block font-mono text-[0.55rem] uppercase tracking-[0.24em] text-muted-foreground">
        {unit}
      </span>
    </div>
  );
}

export function Anniversary() {
  const ref = useParallaxLayers<HTMLElement>();
  const [t, setT] = useState<Elapsed | null>(null);

  useEffect(() => {
    const tick = () => setT(elapsedSince(FOUNDED, new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      id="ten-years"
      className="relative overflow-hidden border-t border-border/60 px-5 py-24 md:py-32"
      aria-labelledby="ten-title"
    >
      <div
        data-speed="0.3"
        aria-hidden
        className="display pointer-events-none absolute inset-x-0 top-6 select-none text-center text-[clamp(6rem,24vw,18rem)] text-secondary/40"
      >
        10 YEARS
      </div>

      <div className="relative mx-auto max-w-5xl">
        <SectionLabel index="02">Ten Years</SectionLabel>
        <h2 id="ten-title" className="display mt-6 text-[clamp(2.4rem,8vw,6rem)] text-foreground">
          2015 <span className="text-primary">—</span> 2026
        </h2>
        <p className="mt-4 max-w-lg text-xl text-muted-foreground">
          A decade of ideas, experiments, people and impact.
        </p>

        <div
          data-speed="0.06"
          className="panel offset-shadow mt-12 p-4 md:p-8"
          role="timer"
          aria-live="off"
        >
          <div className="mb-4 flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.24em] text-primary">
            <span>Uptime since inception</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary" aria-hidden />
              live
            </span>
          </div>
          <div className="flex flex-wrap gap-2 md:flex-nowrap md:gap-3">
            {t ? (
              <>
                <Digit value={t.years} unit="Years" />
                <Digit value={t.months} unit="Months" />
                <Digit value={t.days} unit="Days" />
                <Digit value={t.hours} unit="Hours" />
                <Digit value={t.minutes} unit="Minutes" />
                <Digit value={t.seconds} unit="Seconds" />
              </>
            ) : (
              <div className="h-24 w-full animate-pulse bg-secondary/60" aria-hidden />
            )}
          </div>
          <p className="mt-5 font-mono text-[0.62rem] tracking-[0.2em] text-muted-foreground">
            &gt; counter running since 2015<span className="animate-blink">_</span>
          </p>
        </div>
      </div>
    </section>
  );
}
