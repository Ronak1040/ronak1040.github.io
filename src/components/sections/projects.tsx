"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

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
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects & Systems"
          description="High-performance applications, cloud microservices, and distributed platforms."
        />

        {/* Filter Pills */}
        <div className="mb-10 flex flex-wrap items-center gap-2" role="tablist" aria-label="Project filters">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                role="tab"
                aria-selected={isActive}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "border border-border/60 bg-card/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <Card className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border-border/60 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div>
                  <CardHeader className="p-6 pb-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <FolderGit2 className="h-4 w-4" />
                      </div>
                      <Badge variant="outline" className="border-border/60 text-xs font-medium text-muted-foreground">
                        {project.category}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </div>

                <CardContent className="p-6 pt-0">
                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-md border border-border/40 bg-muted/50 text-[11px] font-mono text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links (if present) */}
                  {(project.repo || project.href) ? (
                    <div className="flex items-center gap-3 border-t border-border/40 pt-4">
                      {project.repo ? (
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="h-8 rounded-lg border-border/60 text-xs font-medium hover:border-primary/40"
                        >
                          <a href={project.repo} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-1.5 h-3.5 w-3.5" /> Source Code
                          </a>
                        </Button>
                      ) : null}

                      {project.href ? (
                        <Button
                          size="sm"
                          asChild
                          className="h-8 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary hover:text-white"
                        >
                          <a href={project.href} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live Demo
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
