"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Copy, Check, Send, Sparkles } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/cv-data";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
      action: "Send Email",
      primary: true,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 89800 80954",
      href: portfolioData.whatsapp ? `https://wa.me/${portfolioData.whatsapp.replace(/\D/g, "")}` : undefined,
      action: "Instant Chat",
    },
    {
      icon: Phone,
      label: "Phone",
      value: portfolioData.phone,
      href: portfolioData.phone ? `tel:${portfolioData.phone}` : undefined,
      action: "Direct Call",
    },
    {
      icon: MapPin,
      label: "Location",
      value: portfolioData.address || "Vadodara, Gujarat, India",
      action: "Based in India",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden" aria-labelledby="contact-title">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's Build Something Exceptional"
          description="Have a high-impact engineering role, scalable project, or system design challenge? Reach out directly."
        />

        {/* Quick Email Banner */}
        <Reveal>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/30">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Direct Inquiry</p>
                <p className="text-base font-bold text-foreground sm:text-lg">{portfolioData.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={copyEmail}
                className="h-10 rounded-xl border-border/70 bg-card/60 px-4 text-xs font-medium hover:border-primary/40"
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-3.5 w-3.5 text-emerald-400" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-3.5 w-3.5 text-muted-foreground" /> Copy Email
                  </>
                )}
              </Button>

              <Button
                asChild
                size="sm"
                className="h-10 rounded-xl bg-primary font-semibold text-white shadow-md shadow-primary/25 hover:bg-primary/90"
              >
                <a href={`mailto:${portfolioData.email}`}>
                  <Send className="mr-1.5 h-3.5 w-3.5" /> Compose
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Contact Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Reveal key={contact.label} delay={index * 0.06}>
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {contact.label}
                    </p>
                    <p className="mt-1 font-semibold text-foreground text-sm sm:text-base break-words">
                      {contact.value}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40">
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.label === "WhatsApp" ? "_blank" : undefined}
                        rel={contact.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                      >
                        {contact.action} →
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground">{contact.action}</span>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Social Links Bar */}
        <Reveal delay={0.25}>
          <div className="mt-8 rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-foreground">Connect Across Platforms</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Explore open-source repositories and professional networks.</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {portfolioData.socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    asChild
                    className="rounded-xl border-border/70 bg-card/50 text-xs font-semibold hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    <a href={social.href} target="_blank" rel="noreferrer">
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
