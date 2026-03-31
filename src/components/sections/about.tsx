import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/cv-data";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container">
        <SectionHeading eyebrow="Profile" title="About Me" description="A quick snapshot of how I approach product engineering and design." />

        <div className="grid gap-4">
          {portfolioData.about.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.07}>
              <p className="max-w-3xl leading-relaxed text-muted-foreground">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
