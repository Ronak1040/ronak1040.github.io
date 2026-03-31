export type SocialLink = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  category: "Frontend" | "Backend" | "Full Stack" | "Mobile" | "AI";
  href?: string;
  repo?: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  start: string;
  end: string;
  score?: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  year: string;
  href?: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  href: string;
  date: string;
};

export type ContactDetail = {
  icon: string;
  label: string;
  value: string;
  href?: string;
};

export type PortfolioData = {
  name: string;
  title: string;
  tagline: string;
  location: string;
  profileImageSrc: string;
  profileImageAlt: string;
  email: string;
  phone?: string;
  address?: string;
  whatsapp?: string;
  resumeHref: string;
  heroStats: Array<{ label: string; value: string }>;
  about: string[];
  socialLinks: SocialLink[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  blogPosts: BlogPost[];
};
