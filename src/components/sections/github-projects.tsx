"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, FolderGit2, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
};

type GithubProjectsProps = {
  username: string;
};

export function GithubProjects({ username }: GithubProjectsProps) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    let active = true;

    async function fetchRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`);
        if (!response.ok) {
          return;
        }
        const data: GithubRepo[] = await response.json();
        if (active) {
          setRepos(data);
        }
      } catch {
        // Ignore GitHub API issues and keep section hidden.
      }
    }

    fetchRepos();

    return () => {
      active = false;
    };
  }, [username]);

  if (repos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 relative" aria-labelledby="github-title">
      <div className="container">
        <SectionHeading
          eyebrow="Open Source"
          title="Recent GitHub Activity"
          description="Public repositories and code contributions on GitHub."
        />

        <div className="grid gap-6 md:grid-cols-3" id="github-title">
          {repos.map((repo, index) => (
            <Reveal key={repo.id} delay={index * 0.08}>
              <Card className="group flex h-full flex-col justify-between rounded-2xl border-border/60 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <CardHeader className="p-6 pb-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FolderGit2 className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                      <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  </div>
                  <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {repo.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {repo.description ?? "No description provided."}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/40">
                    <a
                      className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                    </a>
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
