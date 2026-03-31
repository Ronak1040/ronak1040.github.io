"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/cv-data";

const filters = ["All", "Frontend", "Backend", "Full Stack", "Mobile", "AI"] as const;

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const projects = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioData.projects;
    }
    return portfolioData.projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container">
        <SectionHeading eyebrow="Work" title="Projects" description="A selection of products and platforms I have designed and developed." />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
          {filters.map((filter) => (
            <Button
              key={filter}
              type="button"
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              role="tab"
              aria-selected={activeFilter === filter}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex h-full flex-col justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">
                    {project.href ? (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.href} target="_blank" rel="noreferrer">
                          Live <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    ) : null}
                    {project.repo ? (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.repo} target="_blank" rel="noreferrer">
                          Code <Github className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
