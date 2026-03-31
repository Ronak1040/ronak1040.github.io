"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Progress } from "@/components/ui/progress";
import { portfolioData } from "@/data/cv-data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="container">
        <SectionHeading eyebrow="Capabilities" title="Skills" description="Core technologies I use to deliver scalable, maintainable software." />

        <div className="grid gap-6 md:grid-cols-3">
          {portfolioData.skills.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 0.08}>
              <article className="rounded-xl border border-border/60 bg-card/70 p-5 backdrop-blur-sm">
                <h3 className="mb-5 text-lg font-semibold">{group.category}</h3>
                <ul className="space-y-4">
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: skillIndex * 0.08 }}>
                        <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
