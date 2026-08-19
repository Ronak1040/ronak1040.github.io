import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/cv-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="container">
        <SectionHeading
          eyebrow="Career Path"
          title="Work Experience & Milestones"
          description="A chronological timeline of leadership, backend engineering, and cloud architecture roles."
        />

        <div className="relative border-l border-border/80 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12">
          {portfolioData.experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}>
              <div className="relative">
                {/* Timeline node icon */}
                <div className="absolute -left-[1.95rem] sm:-left-[2.45rem] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-background shadow-md shadow-primary/20 text-primary">
                  <Briefcase className="h-3.5 w-3.5" />
                </div>

                <article className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border/40 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {item.role}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">{item.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                      <Calendar className="h-3 w-3" />
                      {item.start} — {item.end}
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-medium leading-relaxed text-foreground/90">
                    {item.summary}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                    {item.technologies.map((tech) => (
                      <Badge
                        variant="secondary"
                        key={tech}
                        className="rounded-md border border-border/50 bg-muted/60 text-xs font-mono text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
