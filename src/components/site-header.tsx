"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#top" className="text-sm font-semibold tracking-[0.22em]">
          RONAK
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ModeToggle />
          <Button asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button size="icon" variant="outline" aria-label="Open navigation" onClick={() => setOpen((prev) => !prev)}>
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className={cn("overflow-hidden border-t border-border/50 md:hidden", open ? "max-h-72" : "max-h-0")}>
        <nav className="container flex flex-col py-3" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
