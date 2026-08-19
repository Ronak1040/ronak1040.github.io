import { GraduationCap, Calendar, Award } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/cv-data";

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 relative">
      <div className="container">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education & Foundations"
          description="Formal degree coursework in Computer Engineering and Software Systems."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.education.map((item, index) => (
            <Reveal key={`${item.institution}-${item.degree}`} delay={index * 0.08}>
              <article className="group rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {item.institution}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3 pt-3 border-t border-border/40 text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {item.start} — {item.end}
                      </span>
                      {item.score ? (
                        <span className="flex items-center gap-1.5 font-semibold text-primary">
                          <Award className="h-3.5 w-3.5" />
                          {item.score}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
