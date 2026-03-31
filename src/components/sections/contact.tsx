"use client";

import { Mail, Phone } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/cv-data";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          eyebrow="Connect"
          title="Contact"
          description="Have an idea, role, or product challenge? Let us build it together."
        />

        <div className="grid gap-6">
          <aside className="rounded-xl border border-border/60 bg-card/70 p-6">
            <h3 className="text-lg font-semibold" id="contact-title">
              Reach Out Directly
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${portfolioData.email}`} className="hover:text-foreground">
                  {portfolioData.email}
                </a>
              </li>
              {portfolioData.phone ? (
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${portfolioData.phone}`} className="hover:text-foreground">
                    {portfolioData.phone}
                  </a>
                </li>
              ) : null}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {portfolioData.socialLinks.map((social) => (
                <Button key={social.label} variant="outline" size="sm" asChild>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </Button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
