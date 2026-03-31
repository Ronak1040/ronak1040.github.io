import { PortfolioData } from "@/lib/types";

export const portfolioData: PortfolioData = {
  name: "Ronak Patel",
  title: "Senior Software Engineer",
  tagline:
    "Senior Software Engineer with 5.6 years of experience building scalable web applications, microservices, and cloud-native systems.",
  location: "India",
  profileImageSrc: "/my-photo.jpeg",
  profileImageAlt: "Portrait of Ronak Patel",
  email: "ronak1040@gmail.com",
  phone: "+91-8980080954",
  resumeHref: "/Ronak_Patel_CV_with_photo.pdf",
  heroStats: [
    { label: "Years Experience", value: "5.6" },
    { label: "Work Roles", value: "5" },
    { label: "Key Projects", value: "5" },
  ],
  about: [
    "I specialize in backend and full-stack engineering using Node.js, NestJS, Laravel, Python, React, and TypeScript.",
    "I have modernized monolithic systems into microservices, optimized APIs and database queries, and delivered measurable performance improvements.",
    "I am experienced in leading cross-functional teams, driving coding best practices, and shipping maintainable cloud deployments on AWS and DigitalOcean.",
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Ronak1040" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ronak-patel-se" },
  ],
  skills: [
    {
      category: "Languages",
      skills: [
        { name: "PHP", level: 90 },
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 90 },
      ],
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Flask", level: 82 },
        { name: "Django", level: 80 },
        { name: "React", level: 88 },
        { name: "Node.js", level: 90 },
        { name: "NestJS", level: 88 },
        { name: "Laravel", level: 90 },
      ],
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 84 },
        { name: "MSSQL", level: 78 },
        { name: "AWS", level: 82 },
        { name: "NGINX", level: 75 },
        { name: "GraphQL", level: 86 },
        { name: "REST APIs", level: 92 },
      ],
    },
  ],
  experience: [
    {
      company: "Canterr: IT Consulting & Solutions Agency",
      role: "Senior Software Engineer",
      location: "Remote",
      start: "Nov 2024",
      end: "Nov 2025",
      summary:
        "Improved API and backend architecture quality by introducing GraphQL and service-layer optimizations.",
      highlights: [
        "Decoupled SQL queries by introducing GraphQL, improving API response efficiency by around 30%.",
        "Reduced backend query complexity by 40% through a structured service-layer design.",
        "Advocated coding standards and observability, reducing post-release defects by 20%.",
      ],
      technologies: ["Node.js", "TypeScript", "GraphQL", "PostgreSQL"],
    },
    {
      company: "Aarya SoftEx",
      role: "Senior Software Developer",
      location: "India",
      start: "Feb 2024",
      end: "Oct 2024",
      summary:
        "Led software architecture and cross-team execution for scalable enterprise solutions.",
      highlights: [
        "Engineered architecture strategies with cross-functional teams, increasing customer satisfaction and retention by 25%.",
        "Implemented scalable solutions aligned with business goals.",
        "Streamlined the development process and reduced time-to-market by 40%.",
      ],
      technologies: ["Node.js", "Laravel", "React", "TypeScript"],
    },
    {
      company: "Intellimedia Networks Pvt. Ltd.",
      role: "Senior PHP Laravel & NodeJS Developer",
      location: "India",
      start: "Aug 2022",
      end: "Sep 2023",
      summary:
        "Modernized legacy systems and delivered high-performance microservices-based solutions.",
      highlights: [
        "Transformed legacy codebase to microservices, reducing server response time by 50%.",
        "Increased concurrent user capacity by 30%.",
        "Improved system performance by 40% and reduced annual maintenance costs by 25%.",
      ],
      technologies: ["PHP", "Laravel", "Node.js", "Python", "MongoDB"],
    },
    {
      company: "Inbox Info Tech",
      role: "PHP Developer",
      location: "India",
      start: "May 2022",
      end: "Jul 2022",
      summary:
        "Built responsive PHP-based applications with strong performance and UX improvements.",
      highlights: [
        "Improved page load speed by 25% and increased user engagement by 15%.",
        "Reduced bounce rate by 20% and improved conversion rates by 30%.",
        "Increased user engagement by 20% with responsive design and optimization techniques.",
      ],
      technologies: ["PHP", "MySQL", "MongoDB", "JavaScript"],
    },
    {
      company: "Vowel Enterprise",
      role: "Fullstack Developer",
      location: "India",
      start: "Jan 2020",
      end: "Apr 2022",
      summary:
        "Led end-to-end development across frontend and backend systems.",
      highlights: [
        "Managed full software lifecycle from requirements to deployment, reducing system bugs by 30%.",
        "Built React and Node.js based systems that reduced page load time by 40%.",
        "Improved website responsiveness by 25% and reduced system errors by 30%.",
      ],
      technologies: ["React", "Node.js", "JavaScript", "Python"],
    },
  ],
  projects: [
    {
      title: "Clienserv",
      description:
        "Service management platform with workflow automation and CSV data operations for operational efficiency.",
      tags: ["React", "Python", "MySQL", "MongoDB", "AWS"],
      category: "Full Stack",
    },
    {
      title: "Income-Expense",
      description:
        "Finance tracking platform for income, expenses, receivables, and payables with user-focused reporting.",
      tags: ["PHP", "Laravel", "Flask", "MySQL", "MongoDB", "AWS"],
      category: "Full Stack",
    },
    {
      title: "Lechef B2B",
      description:
        "B2B e-commerce platform with customer management, product catalog, pricing, and order processing modules.",
      tags: ["Flask", "Node.js", "NestJS", "MySQL", "MongoDB"],
      category: "Backend",
    },
    {
      title: "Cricket League",
      description:
        "Multiplayer cricket game platform with real-time scoring, tournament management, and leaderboards.",
      tags: ["Node.js", "NestJS", "MongoDB", "PostgreSQL", "WebSocket"],
      category: "Full Stack",
    },
    {
      title: "Remote Metering Hub (IoT Data Monitoring Platform)",
      description:
        "Designed and developed a scalable web-based remote metering platform for real-time monitoring, analysis, and management of energy consumption data across multiple locations and devices. Built interactive multi-variable dashboards (kW, Voltage, Current, Frequency), dynamic analytics with hourly/daily/monthly aggregations, scheduled and on-demand reports (CSV/Excel/PDF), rule-based threshold alerts with automated email notifications, RBAC for Super Admin/Admin/Consumer roles with secure data isolation, location and virtual meter management, geospatial map visualization, and optimized APIs/query pipelines for high-frequency IoT data streams. Impact: enabled centralized monitoring of distributed meters, improved operational efficiency through reporting and alert automation, and reduced manual intervention in energy tracking and analysis.",
      tags: ["Node.js", "NestJS", "React", "MongoDB", "PostgreSQL", "AWS", "WebSockets", "GraphQL", "REST APIs"],
      category: "Full Stack",
    },
  ],
  education: [
    {
      institution:
        "Sardar Vallabhbhai Patel Institute of Technology, Gujarat Technological University (GTU), India",
      degree: "Master of Computer Applications",
      start: "Jul 2018",
      end: "Jun 2021",
    },
  ],
  certifications: [],
  blogPosts: [],
};
