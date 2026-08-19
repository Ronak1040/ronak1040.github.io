import { PortfolioData } from "@/lib/types";

export const portfolioData: PortfolioData = {
  name: "Ronak Patel",
  title: "Senior Software Engineer",
  tagline:
    "Senior Software Engineer with 6 years of experience designing, developing, and deploying scalable backend systems, cloud-native applications, and microservices architectures.",
  location: "India",
  profileImageSrc: "/Profile_Photo.png",
  profileImageAlt: "Portrait of Ronak Patel",
  email: "ronak1040@gmail.com",
  phone: "+91-8980080954",
  address: "Vadodara, Gujarat, India - 390011",
  whatsapp: "+91-8980080954",
  resumeHref: "/Ronak_Patel_CV_2026.pdf",
  heroStats: [
    { label: "Years Experience", value: "6" },
    { label: "Work Roles", value: "7" },
    { label: "Key Projects", value: "5" },
  ],
  about: [
    "Senior Software Engineer with 6 years of experience designing, developing, and deploying scalable backend systems, cloud-native applications, and microservices architectures. Strong expertise in Python (Flask, Django), JavaScript/TypeScript (Node.js, NestJS), PHP (Laravel), and React, with hands-on experience building high-performance REST APIs, GraphQL services, and real-time applications.",
    "Experienced in architecting and delivering end-to-end software solutions, from requirement analysis and system design to development, deployment, monitoring, and production support. Proficient in AWS cloud services including EC2, S3, IAM, Route53, ALB, Auto Scaling Groups, Lambda, and CloudWatch, with experience implementing CI/CD pipelines using GitHub Actions and automating deployment workflows.",
    "Proven track record of modernizing monolithic applications into microservices, optimizing database and API performance, and building scalable systems for IoT, eCommerce, and SaaS platforms. Adept at collaborating with cross-functional teams, leading technical initiatives, and delivering business-driven solutions with measurable impact on performance, scalability, and operational efficiency.",
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Ronak1040" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ronak-patel-se" },
  ],
  skills: [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 92 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "PHP", level: 88 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "NestJS", level: 88 },
        { name: "Flask", level: 88 },
        { name: "Django", level: 85 },
        { name: "Laravel", level: 88 },
        { name: "React", level: 85 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "MSSQL", level: 80 },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "AWS (EC2, S3, Lambda, ALB, IAM)", level: 88 },
        { name: "DigitalOcean", level: 82 },
        { name: "Linux Server Administration", level: 85 },
        { name: "NGINX", level: 82 },
      ],
    },
    {
      category: "DevOps & CI/CD",
      skills: [
        { name: "Git & Bitbucket", level: 92 },
        { name: "GitHub Actions", level: 88 },
        { name: "Bitbucket Pipelines", level: 85 },
        { name: "CI/CD & Deployment Automation", level: 88 },
        { name: "PM2", level: 85 },
      ],
    },
    {
      category: "Backend, Architecture & AI",
      skills: [
        { name: "REST APIs & GraphQL", level: 94 },
        { name: "WebSockets & MQTT", level: 90 },
        { name: "Microservices Architecture", level: 90 },
        { name: "Event-Driven Systems", level: 88 },
        { name: "Redis & Caching", level: 88 },
        { name: "BullMQ & Background Jobs", level: 85 },
        { name: "LLM Integration & Generative AI", level: 85 },
      ],
    },
    {
      category: "Developer Tools & Soft Skills",
      skills: [
        { name: "VS Code & PHPStorm", level: 92 },
        { name: "JIRA & Postman", level: 88 },
        { name: "Technical Leadership & Team Management", level: 88 },
        { name: "Problem Solving & System Design", level: 92 },
      ],
    },
  ],
  experience: [
    {
      company: "Taicent Tech Private Limited",
      role: "Senior Software Engineer (Contract)",
      location: "Remote",
      start: "Jan 2026",
      end: "Present",
      summary:
        "Owned and led the complete software development lifecycle for the Champz sports booking platform, building scalable backend services, match booking systems, and real-time features.",
      highlights: [
        "Owned and led the complete software development lifecycle for the Champz sports booking platform, from requirement analysis and system architecture to deployment and production support.",
        "Directed the end-to-end development of a scalable online match booking system, enabling users to discover and book upcoming matches, create teams, manage player registrations, and participate in tournaments.",
        "Designed and developed scalable backend services using Python, Flask, PostgreSQL, Redis, WebSockets, and RESTful APIs, delivering high-performance and reliable application services.",
        "Implemented secure online payment gateway integration for match bookings and tournament registrations, ensuring seamless transaction processing and payment reconciliation.",
        "Built real-time features for match updates, team management, and player coordination using WebSockets and Redis, providing a responsive user experience.",
        "Established deployment pipelines, cloud infrastructure, monitoring, and operational workflows to ensure high availability, scalability, and production reliability.",
        "Successfully delivered the platform within project timelines while serving as the primary technical point of contact for clients, stakeholders, and deployment teams throughout the project lifecycle.",
      ],
      technologies: [
        "Python",
        "Flask",
        "PostgreSQL",
        "Redis",
        "WebSockets",
        "REST APIs",
      ],
    },
    {
      company: "LogiQuad Solutions",
      role: "Senior Software Engineer (Contract)",
      location: "Remote",
      start: "Feb 2026",
      end: "Apr 2026",
      summary:
        "Architected and delivered an event-driven Remote Metering IoT platform to process real-time telemetry data from connected devices.",
      highlights: [
        "Owned and led the complete software development lifecycle for a Remote Metering IoT platform, from requirement analysis and architecture design to deployment and production support.",
        "Directed a cross-functional development effort, making key architectural and technical decisions for backend services, device communication, and cloud infrastructure.",
        "Built scalable event-driven systems using MQTT, WebSockets, Python, Node.js, Redis, MongoDB, and PostgreSQL to process real-time telemetry data from connected devices.",
        "Established deployment workflows, cloud infrastructure, monitoring, and operational processes to ensure high availability and system reliability.",
        "Delivered the project successfully within the contractual engagement period, achieving stable production deployment and seamless integration with field devices.",
        "Acted as the primary technical point of contact for clients, stakeholders, and deployment teams throughout the project lifecycle.",
      ],
      technologies: [
        "Python",
        "Node.js",
        "MQTT",
        "WebSockets",
        "Redis",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      company: "Canterr: IT Consulting & Solutions Agency",
      role: "Senior Software Engineer",
      location: "Remote",
      start: "Nov 2024",
      end: "Nov 2025",
      summary:
        "Designed scalable backend services, introduced GraphQL to optimize query efficiency, and enhanced CI/CD and observability practices.",
      highlights: [
        "Designed and developed scalable backend services using Python, Node.js, GraphQL, PostgreSQL, and cloud-native architecture principles.",
        "Improved API response efficiency by approximately 30% and reduced backend query complexity by 40% by introducing GraphQL and implementing a structured service-layer architecture.",
        "Collaborated with cross-functional teams to design and deliver scalable enterprise solutions aligned with business requirements.",
        "Implemented coding standards, code review processes, and system observability practices, reducing post-release defects by 20%.",
        "Contributed to CI/CD improvements, deployment processes, and production support to enhance system reliability and maintainability.",
      ],
      technologies: ["Python", "Node.js", "GraphQL", "PostgreSQL", "AWS"],
    },
    {
      company: "Aarya SoftEx",
      role: "Senior Software Developer",
      location: "India",
      start: "Feb 2024",
      end: "Oct 2024",
      summary:
        "Architected enterprise application solutions, developed REST APIs and database solutions, and optimized application performance.",
      highlights: [
        "Designed and implemented software architecture solutions for enterprise applications, focusing on scalability, maintainability, and performance optimization.",
        "Developed REST APIs, backend services, and database solutions using Python, Node.js, PostgreSQL, and MongoDB.",
        "Collaborated with product owners, business stakeholders, and development teams to translate requirements into scalable technical solutions.",
        "Optimized application performance and architecture, contributing to a 25% increase in customer satisfaction and retention.",
        "Streamlined development and delivery workflows, reducing time-to-market by 40%.",
      ],
      technologies: ["Python", "Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      company: "Intellimedia Networks Pvt. Ltd.",
      role: "Senior PHP Laravel & NodeJS Developer",
      location: "India",
      start: "Aug 2022",
      end: "Sep 2023",
      summary:
        "Led the modernization of a monolithic application into a microservices architecture using Laravel, Node.js, and Python.",
      highlights: [
        "Led the modernization of a monolithic application into a microservices-based architecture using Laravel, Node.js, Python, MongoDB, and REST APIs.",
        "Designed and developed scalable backend services, API integrations, and database solutions supporting high-volume business operations.",
        "Reduced server response times by 50% and increased concurrent user capacity by 30% through architectural improvements and performance optimization.",
        "Participated in deployment planning, release management, and production environment support.",
        "Improved overall system performance by 40% while reducing annual maintenance costs by 25%.",
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
        "Developed web applications using PHP, MySQL, MongoDB, and REST APIs with performance optimization and UI collaboration.",
      highlights: [
        "Developed and maintained web applications using PHP, MySQL, MongoDB, JavaScript, and REST APIs.",
        "Collaborated with UI/UX designers and frontend developers to deliver responsive and user-friendly web applications.",
        "Optimized frontend and backend performance, improving page load speed by 25% and increasing user engagement by 15%.",
        "Enhanced application usability and responsiveness, contributing to improved conversion rates and reduced bounce rates.",
        "Participated in application deployment, bug fixing, and ongoing maintenance activities.",
      ],
      technologies: ["PHP", "MySQL", "MongoDB", "JavaScript", "REST APIs"],
    },
    {
      company: "Vowel Enterprise",
      role: "Fullstack Developer",
      location: "India",
      start: "Jan 2020",
      end: "Apr 2022",
      summary:
        "Delivered end-to-end full-stack software solutions using React, JavaScript, Node.js, Python, MySQL, and MongoDB.",
      highlights: [
        "Delivered end-to-end software solutions from requirement gathering and system design to development, deployment, and production support.",
        "Developed scalable frontend and backend applications using React, JavaScript, Node.js, Python, MySQL, and MongoDB.",
        "Designed and implemented REST APIs, database schemas, and business workflows for multiple client projects.",
        "Managed application deployments, production issue resolution, and feature enhancements across multiple projects.",
        "Improved website responsiveness by 25%, reduced page load times by 40%, and decreased system errors by 30% through performance optimization initiatives.",
      ],
      technologies: ["React", "JavaScript", "Node.js", "Python", "MySQL", "MongoDB"],
    },
  ],
  projects: [
    {
      title: "Remote Metering (IoT Platform)",
      description:
        "Designed and developed a microservices-based IoT platform for real-time remote metering, enabling device monitoring, telemetry processing, alert generation, and reporting. Implemented AI-powered anomaly detection workflows to identify abnormal meter readings and predictive analytics models for forecasting device failures. Built event-driven backend services using MQTT and WebSockets to process continuous streams of sensor data, and optimized Redis caching and database indexing to reduce data retrieval latency by 40% while reducing system downtime by 30%.",
      tags: [
        "Python",
        "Node.js",
        "MQTT",
        "WebSockets",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "AWS IoT",
      ],
      category: "Full Stack",
    },
    {
      title: "Cricket League (Real-Time Gaming Platform)",
      description:
        "Developed a multiplayer cricket gaming platform featuring player profiles, match creation, tournament management, leaderboards, and real-time score synchronization. Integrated AI-based player performance analytics to generate match insights and intelligent prediction models for player rankings. Built automated match summary generation using Large Language Models (LLMs). Reduced API response times by 30%, increased overall system throughput by 40%, and boosted user engagement by 60% with a 45% increase in average session duration.",
      tags: [
        "Python",
        "Node.js",
        "NestJS",
        "MongoDB",
        "PostgreSQL",
        "WebSockets",
        "LLMs",
      ],
      category: "Full Stack",
    },
    {
      title: "Lechef B2B (B2B eCommerce Platform)",
      description:
        "Designed and developed a B2B eCommerce platform supporting customer management, product catalogs, dynamic pricing, order processing, and inventory workflows. Implemented AI-powered product recommendation features, intelligent search capabilities using semantic search and NLP techniques, and automated product description generation using LLM APIs. Increased daily order processing volume by 50% while reducing order processing time by 40% and response times by 30%.",
      tags: ["Flask", "Python", "Node.js", "NestJS", "MySQL", "MongoDB", "LLM APIs"],
      category: "Backend",
    },
    {
      title: "Income-Expense (FinTech Platform)",
      description:
        "Developed a financial management platform enabling income tracking, expense management, receivables, payables, and financial reporting. Developed AI-driven expense categorization and transaction classification features using machine learning techniques. Implemented automated financial report summarization and forecasting capabilities using Generative AI models, alongside conversational financial assistant APIs for natural language queries. Improved user engagement by 20% and reduced financial tracking effort by 15%.",
      tags: [
        "Flask",
        "Python",
        "JavaScript",
        "Laravel",
        "MySQL",
        "MongoDB",
        "AWS",
        "Generative AI",
      ],
      category: "Full Stack",
    },
    {
      title: "Clienserv (Business Operations Management Platform)",
      description:
        "Developed a business operations platform to streamline workforce management, attendance tracking, customer data management, and administrative processes. Implemented AI-powered attendance anomaly detection and workforce productivity analysis, intelligent reporting using LLM-based summarization, and automated ticket classification using NLP techniques. Built CSV import/export functionality, reducing administrative overhead by 50%, data-entry errors by 35%, and increasing workforce productivity by 20%.",
      tags: ["React", "Python", "MySQL", "MongoDB", "AWS", "NLP", "LLMs"],
      category: "Full Stack",
    },
  ],
  education: [
    {
      institution:
        "Sardar Vallabhbhai Patel Institute of Technology, Gujarat Technological University (GTU), India",
      degree: "Master of Computer Applications (MCA)",
      start: "Jul 2018",
      end: "Jun 2021",
    },
  ],
  certifications: [],
  blogPosts: [],
};
