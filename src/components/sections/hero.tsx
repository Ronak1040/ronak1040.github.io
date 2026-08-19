import Image from "next/image";
import { ArrowRight, Download, MapPin, Sparkles, Terminal, Code2, Cloud } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/cv-data";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 -z-10 h-[300px] w-[400px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_400px] xl:gap-16">
        <div>
          {/* Availability & Location Pills */}
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for New Projects
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {portfolioData.location}
              </span>
            </div>
          </Reveal>

          {/* Name & Title */}
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-gradient">
                {portfolioData.name}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-4 flex items-center gap-2 text-xl font-semibold sm:text-2xl md:text-3xl text-gradient-primary">
              <span>{portfolioData.title}</span>
            </div>
          </Reveal>

          {/* Tagline */}
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {portfolioData.tagline}
            </p>
          </Reveal>

          {/* Quick Tech Highlights */}
          <Reveal delay={0.18}>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1 rounded-md border border-border/60 bg-card/40 px-2.5 py-1">
                <Terminal className="h-3 w-3 text-primary" /> Python • Node.js
              </span>
              <span className="flex items-center gap-1 rounded-md border border-border/60 bg-card/40 px-2.5 py-1">
                <Code2 className="h-3 w-3 text-accent" /> NestJS • React
              </span>
              <span className="flex items-center gap-1 rounded-md border border-border/60 bg-card/40 px-2.5 py-1">
                <Cloud className="h-3 w-3 text-indigo-400" /> AWS Cloud • Microservices
              </span>
            </div>
          </Reveal>

          {/* Action Buttons */}
          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-gradient-to-r from-primary via-indigo-600 to-accent px-6 font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                <a href="#projects">
                  Explore Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                variant="outline"
                asChild
                size="lg"
                className="h-12 rounded-xl border-border/70 bg-card/50 px-6 font-medium backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card hover:-translate-y-0.5"
              >
                <a href={portfolioData.resumeHref} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4 text-primary" />
                  Download CV
                </a>
              </Button>
            </div>
          </Reveal>

          {/* Stats Bar */}
          <Reveal delay={0.26}>
            <ul className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {portfolioData.heroStats.map((stat, i) => (
                <li
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
                >
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="text-2xl font-bold tracking-tight text-gradient-primary sm:text-3xl">
                    {stat.value}+
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Profile Visual Card */}
        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
            {/* Ambient Aura Background */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary via-accent to-indigo-500 opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50" />

            <div className="relative rounded-3xl border border-border/80 bg-card/80 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/50 bg-muted/30">
                <Image
                  src={portfolioData.profileImageSrc}
                  alt={portfolioData.profileImageAlt}
                  fill
                  sizes="(max-width: 1024px) 340px, 400px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Subtle gradient vignette overlay at the bottom */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Bottom floating badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 backdrop-blur-md text-white">
                  <div>
                    <p className="text-xs font-semibold">Ronak Patel</p>
                    <p className="text-[10px] text-white/70">6+ Years Exp</p>
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/30 text-primary">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
