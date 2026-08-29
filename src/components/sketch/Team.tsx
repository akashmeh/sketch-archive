import { achievements, coreTeam, faculty, leads } from "@/data/sketch";
import { useParallaxLayers, useReveal } from "@/hooks/use-scroll-fx";
import { SectionLabel } from "./Atmosphere";

function Portrait({
  name,
  role,
  photo,
  size = "lg",
  tilt = "",
}: {
  name: string;
  role: string;
  photo: string;
  size?: "lg" | "sm";
  tilt?: string;
}) {
  return (
    <figure data-reveal className={`group relative ${tilt}`}>
      <div
        className={`relative overflow-hidden rounded-t-[999px] border border-primary/70 bg-secondary ${
          size === "lg" ? "aspect-[3/4]" : "aspect-square"
        } shadow-[10px_10px_0_0_var(--ember)] transition-transform duration-500 group-hover:-translate-y-1.5`}
      >
        <img
          src={photo}
          alt={`${name}, ${role} at SKETCH`}
          loading="lazy"
          className="h-full w-full scale-[1.06] object-contain object-bottom contrast-[1.06] saturate-[0.85] transition-transform duration-700 group-hover:scale-[1.12]"
        />
        <div className="scanlines pointer-events-none absolute inset-0 opacity-25" aria-hidden />
      </div>
      <figcaption className="mt-4">
        <p className="mono-label text-primary">{role}</p>
        <p
          className={`display mt-1 text-foreground ${size === "lg" ? "text-2xl md:text-3xl" : "text-lg"}`}
        >
          {name}
        </p>
      </figcaption>
    </figure>
  );
}

export function Team() {
  const parallaxRef = useParallaxLayers<HTMLElement>();
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section
      ref={parallaxRef}
      id="team"
      className="relative overflow-hidden border-t border-border/60 px-5 py-24 md:py-32"
      aria-labelledby="team-title"
    >
      <div
        data-speed="0.28"
        aria-hidden
        className="display pointer-events-none absolute -right-10 top-10 select-none text-[clamp(4rem,16vw,13rem)] text-secondary/40"
      >
        CORE
      </div>

      <div ref={revealRef} className="relative mx-auto max-w-6xl">
        <SectionLabel index="05">People</SectionLabel>
        <h2 id="team-title" className="display mt-6 text-[clamp(2.4rem,8vw,6rem)] text-foreground">
          Core <span className="outline-ember">Team</span>
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 md:gap-14">
          {coreTeam.map((m, i) => (
            <div key={m.name} className={i === 1 ? "sm:mt-14" : i === 2 ? "sm:mt-6" : ""}>
              <Portrait name={m.name} role={m.role} photo={m.photo} />
            </div>
          ))}
        </div>

        <h3 className="display mt-28 text-[clamp(1.8rem,5vw,3.4rem)] text-foreground">
          Domain <span className="outline-ember">Leads</span>
        </h3>
        <div className="mt-10 grid grid-cols-2 items-start gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
          {leads.map((m, i) => (
            <Portrait
              key={m.name}
              name={m.name}
              role={m.role}
              photo={m.photo}
              size="sm"
              tilt={i % 3 === 1 ? "sm:translate-y-5" : i % 3 === 2 ? "sm:-translate-y-2" : ""}
            />
          ))}
        </div>

        <div className="mt-28 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="display text-[clamp(1.6rem,4.4vw,2.8rem)] text-foreground">
              Faculty Coordinators
            </h3>
            <ul className="mt-6 space-y-5">
              {faculty.map((f) => (
                <li key={f.name} data-reveal className="border-l-2 border-primary pl-4">
                  <p className="display text-xl text-foreground">{f.name}</p>
                  <p className="mt-2 text-muted-foreground">{f.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="display text-[clamp(1.6rem,4.4vw,2.8rem)] text-foreground">Awards</h3>
            <ul className="mt-6 space-y-3">
              {achievements.map((a) => (
                <li
                  key={a}
                  data-reveal
                  className="flex gap-3 border-b border-border/60 pb-3 text-muted-foreground"
                >
                  <span className="mono-label mt-1 text-primary">★</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
