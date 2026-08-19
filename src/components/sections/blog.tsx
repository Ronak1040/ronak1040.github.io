import { Calendar, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/cv-data";

export function BlogSection() {
  if (portfolioData.blogPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 relative" aria-labelledby="blog-title">
      <div className="container">
        <SectionHeading
          eyebrow="Insights & Articles"
          title="Technical Writing"
          description="Articles and architectural case studies."
        />

        <div className="grid gap-6 md:grid-cols-2" id="blog-title">
          {portfolioData.blogPosts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.08}>
              <Card className="group h-full rounded-2xl border-border/60 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <CardHeader className="p-6 pb-3">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mt-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.href}
                    className="inline-flex items-center text-xs font-semibold text-primary group-hover:underline"
                  >
                    Read Article <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
