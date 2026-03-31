import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/cv-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="container">
        <SectionHeading eyebrow="Career" title="Experience" description="Selected roles and impact milestones." />

        <ol className="relative space-y-10 border-l border-border/70 pl-8">
          {portfolioData.experience.map((item) => (
            <li key={`${item.company}-${item.role}`} className="relative">
              <span className="absolute -left-[2.25rem] top-1 h-4 w-4 rounded-full border border-primary bg-background" aria-hidden="true" />
              <article className="rounded-xl border border-border/60 bg-card/70 p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">{item.company} • {item.location}</p>
                  </div>
                  <p className="text-sm font-medium text-primary">{item.start} - {item.end}</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{item.summary}</p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground marker:text-primary">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Badge variant="secondary" key={tech}>{tech}</Badge>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
