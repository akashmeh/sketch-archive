import { createFileRoute } from "@tanstack/react-router";
import { Atmosphere } from "@/components/sketch/Atmosphere";
import { Hero } from "@/components/sketch/Hero";
import { About } from "@/components/sketch/About";
import { Anniversary } from "@/components/sketch/Anniversary";
import { Rewind } from "@/components/sketch/Rewind";
import { Domains } from "@/components/sketch/Domains";
import { Team } from "@/components/sketch/Team";
import { Register } from "@/components/sketch/Register";

const title = "SKETCH — Design. Develop. Deliver.";
const description =
  "SKETCH is a student-led technology and innovation club founded in 2015. Ten years of design, development and delivery — explore our journey, events, domains and team.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#ten-years", label: "10 Years" },
  { href: "#rewind", label: "Rewind" },
  { href: "#domains", label: "Domains" },
  { href: "#team", label: "Team" },
];

function Index() {
  return (
    <>
      <Atmosphere />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-[oklch(0.11_0.012_48/0.72)] backdrop-blur-sm">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3"
        >
          <a href="#hero" className="display text-xl text-foreground">
            SKETCH
          </a>
          <ul className="hidden gap-6 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#register"
            className="border border-primary px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Join →
          </a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Anniversary />
        <Rewind />
        <Domains />
        <Team />
        <Register />
      </main>
    </>
  );
}
