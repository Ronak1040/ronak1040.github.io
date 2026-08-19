import { Award, Calendar, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/cv-data";

export function CertificationsSection() {
  if (portfolioData.certifications.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 relative" aria-labelledby="certifications-title">
      <div className="container">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Accreditations"
          description="Industry certifications demonstrating domain expertise."
        />

        <div className="grid gap-6 md:grid-cols-2" id="certifications-title">
          {portfolioData.certifications.map((cert, index) => (
            <Reveal key={`${cert.title}-${cert.year}`} delay={index * 0.08}>
              <article className="group rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform group-hover:scale-105">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                    <div className="mt-4 flex items-center justify-between pt-3 border-t border-border/40 text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {cert.year}
                      </span>
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
