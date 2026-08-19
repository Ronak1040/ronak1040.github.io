import { CheckCircle2, Server, Cloud, Cpu, Layers } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/cv-data";

const pillars = [
  {
    icon: Server,
    title: "Backend & System Design",
    desc: "Robust APIs, microservices, and distributed architecture built for high concurrency.",
  },
  {
    icon: Cloud,
    title: "AWS Cloud & DevOps",
    desc: "Production deployments on EC2, S3, Lambda, ALB, CI/CD pipelines & automated workflows.",
  },
  {
    icon: Layers,
    title: "Monolith to Microservices",
    desc: "Proven track record refactoring legacy systems into modern scalable services.",
  },
  {
    icon: Cpu,
    title: "IoT & Real-Time Data",
    desc: "MQTT, WebSocket pipelines, and responsive real-time data processing engines.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Executive Profile"
          title="Engineering Scalable Cloud & Backend Systems"
          description="A comprehensive look into my technical philosophy, architectural approach, and core capabilities."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Paragraphs */}
          <div className="space-y-4">
            {portfolioData.about.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08}>
                <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                  <p className="leading-relaxed text-muted-foreground text-sm sm:text-base">
                    {paragraph}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Core Pillars Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={0.15 + i * 0.08}>
                  <div className="group rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground sm:text-sm leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
