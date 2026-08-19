"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#top"
          className="group flex items-center gap-2 text-sm font-bold tracking-wider transition-opacity hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
            <span className="font-mono text-xs font-black">RP</span>
          </div>
          <span className="font-semibold text-foreground tracking-tight">
            Ronak<span className="text-primary font-bold">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 backdrop-blur-md md:flex shadow-sm"
          aria-label="Main"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-muted/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <ModeToggle />
          <Button
            asChild
            size="sm"
            className="rounded-full bg-gradient-to-r from-primary to-accent font-medium text-white shadow-md shadow-primary/25 hover:opacity-95 hover:shadow-lg hover:shadow-primary/35 transition-all"
          >
            <a href="#contact">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Let&apos;s Connect
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            size="icon"
            variant="outline"
            className="rounded-lg border-border/60"
            aria-label="Open navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 border-b border-border/60 bg-background/95 backdrop-blur-xl md:hidden",
          open ? "max-h-96 py-4" : "max-h-0 py-0 border-transparent"
        )}
      >
        <nav className="container flex flex-col gap-1" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/60"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-border/40">
            <Button
              asChild
              className="w-full rounded-lg bg-gradient-to-r from-primary to-accent text-white"
              onClick={() => setOpen(false)}
            >
              <a href="#contact">
                <Sparkles className="mr-2 h-4 w-4" />
                Let&apos;s Connect
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
