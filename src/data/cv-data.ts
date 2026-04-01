import { PortfolioData } from "@/lib/types";

export const portfolioData: PortfolioData = {
  name: "Ronak Patel",
  title: "Senior Software Engineer",
  tagline:
    "Senior Software Engineer with 5.6 years of experience designing, developing, and scaling high-performance web applications and cloud-native systems.",
  location: "India",
  profileImageSrc: "/my-photo.jpeg",
  profileImageAlt: "Portrait of Ronak Patel",
  email: "ronak1040@gmail.com",
  phone: "+91-8980080954",
  address: "Vadodara, Gujarat, India - 390011",
  whatsapp: "+91-8980080954",
  resumeHref: "/Ronak_Patel_CV_with_photo.pdf",
  heroStats: [
    { label: "Years Experience", value: "5.6" },
    { label: "Work Roles", value: "5" },
    { label: "Key Projects", value: "5" },
  ],
  about: [
    "I specialize in backend and full-stack engineering with expertise in Python (Flask, Django) and JavaScript/TypeScript (Node.js, NestJS, React).",
    "I have a proven track record of modernizing legacy systems into microservices, optimizing database and API performance, and delivering scalable solutions on AWS and cloud infrastructure.",
    "I am adept at leading cross-functional teams, improving development workflows through CI/CD pipelines, and delivering business-driven solutions with measurable impact.",
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Ronak1040" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ronak-patel-se" },
  ],
  skills: [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "PHP", level: 90 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "NestJS", level: 88 },
        { name: "React", level: 88 },
        { name: "Flask", level: 82 },
        { name: "Django", level: 80 },
        { name: "Laravel", level: 90 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", level: 84 },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "MSSQL", level: 78 },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 82 },
        { name: "DigitalOcean", level: 80 },
        { name: "NGINX", level: 75 },
        { name: "GraphQL", level: 86 },
        { name: "REST APIs", level: 92 },
        { name: "WebSocket", level: 82 },
      ],
    },
    {
      category: "Developer Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Bitbucket", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "PHPStorm", level: 85 },
        { name: "JIRA", level: 80 },
      ],
    },
    {
      category: "Other Technologies",
      skills: [
        { name: "Microservices", level: 86 },
        { name: "Redis", level: 82 },
        { name: "BullMQ", level: 80 },
        { name: "AWS IoT", level: 78 },
        { name: "CI/CD Pipelines", level: 85 },
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
        "Decoupling SQL queries with GraphQL and improving system architecture quality through code standardization.",
      highlights: [
        "Decoupled SQL queries by introducing GraphQL, improving API response efficiency by ~30% and reducing backend query complexity by 40% through structured service-layer design.",
        "Advocated for best coding practices, system observability, and maintainability—reducing post-release defects by 20%.",
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
        "Engineered software architecture strategies and optimized system performance with cross-functional teams.",
      highlights: [
        "Engineered and executed software architecture strategies in partnership with diverse teams; optimized system performance and maintainability, resulting in a 25% increase in customer satisfaction and retention.",
        "Orchestrated collaborative efforts across cross-functional teams to design and implement scalable software solutions, reducing time-to-market by 40%.",
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
        "Pioneered transformation of legacy codebase to microservices architecture with significant performance gains.",
      highlights: [
        "Pioneered the transformation of legacy codebase to a microservices architecture, resulting in a 50% reduction in server response time and a 30% increase in concurrent user capacity.",
        "Orchestrated the design and deployment of scalable software solutions in PHP, Laravel, NodeJS, and Python, increasing system performance by 40% and reducing maintenance costs by 25% annually.",
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
        "Designed responsive and interactive web applications with strong focus on performance and user engagement.",
      highlights: [
        "Designed responsive and interactive web applications using PHP, MySQL, MongoDB, and JavaScript, achieving a 25% increase in page load speed and a 15% boost in user engagement.",
        "Collaborated closely with designers and front-end developers to ensure seamless user experiences, resulting in a 20% decrease in bounce rate and a 30% improvement in conversion rates.",
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
        "Led end-to-end software development lifecycle with significant improvements in system reliability and performance.",
      highlights: [
        "Led end-to-end software development lifecycle, from requirement analysis to deployment and maintenance, resulting in a 30% reduction in system bugs.",
        "Led the development of front-end and back-end systems using React, JavaScript, Node.js, and Python Frameworks, resulting in a 40% reduction in page load time and a 25% increase in website responsiveness, with a 30% decrease in system errors.",
      ],
      technologies: ["React", "Node.js", "JavaScript", "Python"],
    },
  ],
  projects: [
    {
      title: "Remote Metering Technologies",
      description:
        "Designed and implemented a scalable microservices-based remote metering platform for real-time IoT data ingestion, processing, and visualization using event-driven architecture with MQTT/WebSocket protocols. Optimized system performance through Redis caching and database indexing, reducing latency by 40% and improving throughput for high-frequency data streams. Enhanced system scalability achieving 30% reduction in downtime and ensuring reliable data availability across concurrent device connections.",
      tags: [
        "Node.js",
        "Python",
        "MongoDB",
        "PostgreSQL",
        "AWS IoT",
        "MQTT",
        "WebSocket",
        "Redis",
      ],
      category: "Full Stack",
    },
    {
      title: "Cricket League",
      description:
        "Developed a multiplayer Cricket game platform featuring Player Profiles, Match Creation, Real-Time Scoring, Leaderboards, and Tournament Management. Integrated live match updates and interactive gameplay, boosting user engagement by 60% and increasing average session duration by 45%. Optimized backend architecture and database performance, reducing API response times by 30% and improving overall system throughput by 40%.",
      tags: ["Node.js", "NestJS", "MongoDB", "PostgreSQL", "WebSocket"],
      category: "Full Stack",
    },
    {
      title: "Lechef B2B",
      description:
        "Created a comprehensive B2B e-commerce platform with Customer Management, Product Catalog, Price List, Price Modifier, Order Processing, and Quick Order modules. Resulted in 50% increase in daily orders processed and 40% decrease in order processing time. Optimized codebase and database queries for 40% improvement in system performance and 30% reduction in response time.",
      tags: ["Flask", "Node.js", "NestJS", "MySQL", "MongoDB"],
      category: "Backend",
    },
    {
      title: "Income-Expense",
      description:
        "Developed a user-friendly financial management platform for tracking incomes, expenses, receivables, and payables with comprehensive reporting capabilities. Resulted in 20% increase in user engagement and 15% decrease in time spent on financial tracking tasks. Enabled efficient receivables and payables management, resulting in 25% reduction in overdue payments and 20% increase in on-time payments.",
      tags: ["PHP", "Laravel", "Flask", "JavaScript", "MySQL", "MongoDB", "AWS"],
      category: "Full Stack",
    },
    {
      title: "Clienserv",
      description:
        "Developed a comprehensive service management platform with workflow automation and CSV data import/export functionality. Significantly reduced paperwork by 50% and increased operational efficiency by 40%. Incorporated advanced features for employee attendance management, reducing absenteeism rates by 25% and increasing overall workforce productivity by 20%.",
      tags: ["JavaScript", "React", "Python", "MySQL", "MongoDB", "AWS"],
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
