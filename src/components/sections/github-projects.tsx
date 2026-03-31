"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
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
    <section className="py-16 md:py-20" aria-labelledby="github-title">
      <div className="container">
        <h2 id="github-title" className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
          Latest GitHub Repositories
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {repos.map((repo) => (
            <Card key={repo.id}>
              <CardHeader>
                <CardTitle>{repo.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{repo.description ?? "No description provided."}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a className="text-sm font-medium text-primary hover:underline" href={repo.html_url} target="_blank" rel="noreferrer">
                    View Repo
                  </a>
                  <p className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4" /> {repo.stargazers_count}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
