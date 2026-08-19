import { Github, Linkedin, MapPin, Phone, Mail, MessageCircle, Heart, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/cv-data";

export function SiteFooter() {
  const navigationLinks = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const coreStrengths = [
    "Distributed Microservices",
    "High-Performance REST & GraphQL APIs",
    "Cloud Infrastructure (AWS)",
    "Database Optimization & Caching",
    "IoT & Real-Time Data Pipelines",
    "DevOps & Automated CI/CD Workflows",
  ];

  return (
    <footer className="border-t border-border/60 bg-card/40 backdrop-blur-xl text-foreground">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white shadow-md shadow-primary/20">
                <span className="font-mono text-xs font-black">RP</span>
              </div>
              <span className="font-bold text-foreground tracking-tight">
                {portfolioData.name}
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Senior Software Engineer with 6+ years specializing in scalable backend systems, cloud architectures, and full-stack applications.
            </p>
            <div className="flex items-center gap-2.5">
              {portfolioData.socialLinks.map((social) => {
                const Icon = social.label === "GitHub" ? Github : Linkedin;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-card/60 text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="mr-1.5 text-xs text-primary">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Strengths */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Core Competencies</h3>
            <ul className="space-y-2.5 text-sm">
              {coreStrengths.map((strength) => (
                <li key={strength} className="flex items-center text-muted-foreground">
                  <span className="mr-1.5 text-xs text-accent">✓</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Contact & Inquiries</h3>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              {portfolioData.address && (
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{portfolioData.address}</span>
                </li>
              )}
              {portfolioData.phone && (
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <a href={`tel:${portfolioData.phone}`} className="hover:text-primary transition-colors">
                    {portfolioData.phone}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href={`mailto:${portfolioData.email}`} className="hover:text-primary transition-colors">
                  {portfolioData.email}
                </a>
              </li>
              {portfolioData.whatsapp && (
                <li className="flex items-center gap-2.5">
                  <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <a
                    href={`https://wa.me/${portfolioData.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border/40 bg-card/20">
        <div className="container flex flex-col sm:flex-row items-center justify-between py-6 text-xs text-muted-foreground gap-4">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-foreground">{portfolioData.name}</span>. All rights reserved.
          </p>
          <a
            href="#top"
            className="flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
          >
            Back to top <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
