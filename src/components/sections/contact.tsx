"use client";

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/cv-data";

export function ContactSection() {
  const contactDetails = [
    {
      icon: MapPin,
      label: "Address",
      value: portfolioData.address || "N/A",
    },
    {
      icon: Phone,
      label: "Contact Number",
      value: portfolioData.phone || "N/A",
      href: portfolioData.phone ? `tel:${portfolioData.phone}` : undefined,
    },
    {
      icon: Mail,
      label: "Email Address",
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with me",
      href: portfolioData.whatsapp ? `https://wa.me/${portfolioData.whatsapp.replace(/\D/g, "")}` : undefined,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-20" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          eyebrow="Connect"
          title="Contact"
          description="Have an idea, role, or product challenge? Let us build it together."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((contact) => {
            const Icon = contact.icon;
            return (
              <div
                key={contact.label}
                className="rounded-xl border border-border/60 bg-card/70 p-6 text-center backdrop-blur-sm"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{contact.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.label === "WhatsApp" ? "_blank" : undefined}
                      rel={contact.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                      className="hover:text-foreground"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    contact.value
                  )}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6">
          <aside className="rounded-xl border border-border/60 bg-card/70 p-6">
            <h3 className="text-lg font-semibold">Connect on Social Media</h3>
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
