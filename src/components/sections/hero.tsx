import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/cv-data";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.18),transparent_45%),radial-gradient(circle_at_80%_10%,hsl(var(--accent)/0.2),transparent_40%)]" />
      <div className="container grid items-start gap-12 lg:grid-cols-[1fr_360px]">
        <div>
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {portfolioData.location}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">{portfolioData.name}</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-xl text-primary md:text-2xl">{portfolioData.title}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{portfolioData.tagline}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href={portfolioData.resumeHref} target="_blank" rel="noopener noreferrer">
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="mt-12 grid gap-4 sm:grid-cols-3">
              {portfolioData.heroStats.map((stat) => (
                <li key={stat.label} className="rounded-xl border border-border/60 bg-card/70 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto w-full max-w-[320px] rounded-3xl border border-border/60 bg-card/70 p-3 shadow-lg backdrop-blur-sm lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/50 bg-muted/40">
              <Image
                src={portfolioData.profileImageSrc}
                alt={portfolioData.profileImageAlt}
                fill
                sizes="(max-width: 1024px) 320px, 360px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
