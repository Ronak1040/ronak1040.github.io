import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/cv-data";

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-20">
      <div className="container">
        <SectionHeading eyebrow="Academic" title="Education" />

        <div className="grid gap-4 md:grid-cols-2">
          {portfolioData.education.map((item) => (
            <article key={`${item.institution}-${item.degree}`} className="rounded-xl border border-border/60 bg-card/70 p-6">
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
              <p className="mt-3 text-sm">{item.start} - {item.end}</p>
              {item.score ? <p className="mt-1 text-sm text-primary">{item.score}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
