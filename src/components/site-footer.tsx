import { portfolioData } from "@/data/cv-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container flex flex-col justify-between gap-4 text-sm text-muted-foreground md:flex-row md:items-center">
        <p>{new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        {/* <p>Built with Next.js, Tailwind CSS, ShadCN UI, and Framer Motion.</p> */}
      </div>
    </footer>
  );
}
