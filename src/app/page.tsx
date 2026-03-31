import dynamic from "next/dynamic";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about";
import { BlogSection } from "@/components/sections/blog";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";

const SkillsSection = dynamic(() => import("@/components/sections/skills").then((mod) => mod.SkillsSection));
const GithubProjects = dynamic(() => import("@/components/sections/github-projects").then((mod) => mod.GithubProjects));

export default function HomePage() {
  return (
    <div className="relative">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <GithubProjects username="Ronak1040" />
        <BlogSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
