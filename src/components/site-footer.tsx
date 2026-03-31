import { Github, Linkedin, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { portfolioData } from "@/data/cv-data";

export function SiteFooter() {
  const navigationLinks = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: portfolioData.resumeHref, target: "_blank" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Full Stack Development",
    "Backend Development",
    "Frontend Development",
    "API Development",
    "Database Design",
    "Cloud Solutions",
    "Performance Optimization",
    "Code Review & Debugging",
  ];

  return (
    <footer className="border-t border-border/60 bg-black text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* About Me Section */}
          <div>
            <h3 className="mb-6 text-xl font-bold">About Me</h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              I&apos;m <span className="font-semibold text-white">{portfolioData.name}</span>, a{" "}
              {portfolioData.title.toLowerCase()}. I build clean, efficient, and scalable web
              applications and RESTful APIs.
            </p>
            <div className="flex gap-4">
              {portfolioData.socialLinks.map((social) => {
                const Icon = social.label === "GitHub" ? Github : Linkedin;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Links</h3>
            <ul className="space-y-3 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.target}
                    rel={link.target ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <span>→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Services</h3>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>→</span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Have a Questions Section */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Have a Questions?</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {portfolioData.address && (
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  <span>{portfolioData.address}</span>
                </li>
              )}
              {portfolioData.phone && (
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  <a href={`tel:${portfolioData.phone}`} className="hover:text-white transition">
                    {portfolioData.phone}
                  </a>
                </li>
              )}
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <a href={`mailto:${portfolioData.email}`} className="hover:text-white transition">
                  {portfolioData.email}
                </a>
              </li>
              {portfolioData.whatsapp && (
                <li className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  <a
                    href={`https://wa.me/${portfolioData.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="container py-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} <span className="text-gray-400">{portfolioData.name}</span>. All rights
            reserved. Made with <span className="text-red-500">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
