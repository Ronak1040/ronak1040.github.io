import { SectionHeading } from "@/components/section-heading";
import { BadgeCheck } from "lucide-react";

import { portfolioData } from "@/data/cv-data";

export function CertificationsSection() {
  if (portfolioData.certifications.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20" aria-labelledby="certifications-title">
      <div className="container">
        <SectionHeading eyebrow="Credentials" title="Certifications" />

        <ul className="grid gap-4 md:grid-cols-2" id="certifications-title">
          {portfolioData.certifications.map((cert) => (
            <li key={`${cert.title}-${cert.year}`} className="rounded-xl border border-border/60 bg-card/70 p-5">
              <p className="flex items-center gap-2 text-base font-medium">
                <BadgeCheck className="h-4 w-4 text-primary" />
                {cert.title}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="mt-1 text-sm text-primary">{cert.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
