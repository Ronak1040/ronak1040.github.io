import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/cv-data";

export function BlogSection() {
  if (portfolioData.blogPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20" aria-labelledby="blog-title">
      <div className="container">
        <SectionHeading eyebrow="Insights" title="Latest Writing" description="Optional blog section ready for CMS or MDX integration." />

        <div className="grid gap-4 md:grid-cols-2" id="blog-title">
          {portfolioData.blogPosts.map((post) => (
            <Card key={post.title}>
              <CardHeader>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{post.date}</p>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-muted-foreground">{post.excerpt}</p>
                <a href={post.href} className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                  Read More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
