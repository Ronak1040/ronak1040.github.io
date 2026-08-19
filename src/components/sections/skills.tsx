"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, Wrench, Shield } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/cv-data";

const categoryIcons: Record<string, typeof Code2> = {
  Languages: Code2,
  "Frameworks & Libraries": Server,
  "Databases & Caching": Database,
  "Cloud & DevOps": Cloud,
  "Architecture & Concepts": Shield,
  "Tools & Methodologies": Wrench,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="container">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills & Technical Mastery"
          description="A categorized breakdown of programming languages, frameworks, cloud infrastructure, and databases."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.skills.map((group, groupIndex) => {
            const Icon = categoryIcons[group.category] || Code2;

            return (
              <Reveal key={group.category} delay={groupIndex * 0.06}>
                <article className="group h-full rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                  {/* Category Header */}
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skill Items */}
                  <ul className="space-y-4">
                    {group.skills.map((skill, skillIndex) => (
                      <li key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between text-xs font-medium">
                          <span className="text-foreground/90">{skill.name}</span>
                          <span className="font-mono text-muted-foreground">{skill.level}%</span>
                        </div>

                        {/* Progress Bar with Gradient Glow */}
                        <div className="h-2 w-full overflow-hidden rounded-full bg-muted/60 p-0.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.9,
                              delay: skillIndex * 0.05 + 0.1,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
