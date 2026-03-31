# Ronak Portfolio (Next.js + TypeScript)

A production-ready, CV-driven personal portfolio website built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ShadCN-style reusable UI components
- Framer Motion animations
- Lucide icons

## Features

- Hero, About, Skills, Experience, Projects, Education, Certifications, Contact sections
- Data-driven rendering from a single source file
- Project filtering by category
- Animated skill bars and scroll-based reveal animations
- Dark/Light mode toggle
- Contact form with API route and SMTP integration
- Optional Blog section
- Optional GitHub projects integration
- SEO metadata, OpenGraph, `sitemap.xml`, and `robots.txt`
- Mobile-first responsive layout and semantic HTML

## Folder Structure

- `src/app` - App Router pages, API routes, SEO utilities
- `src/components` - Shared and section components
- `src/lib` - Utilities and TypeScript types
- `src/data` - CV data model and content

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy env file:

```bash
cp .env.example .env.local
```

3. Update your portfolio content in:

- `src/data/cv-data.ts`

4. Start development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
npm run start
```

## CV Parsing Workflow

To convert your CV into website content:

1. Parse your CV and map details into `src/data/cv-data.ts`.
2. Keep each section array structured (experience, projects, education, etc.).
3. The UI updates automatically through mapped rendering.

## Deployment (GitHub Pages)

To publish at `https://ronak1040.github.io/`, use a repository named exactly `ronak1040.github.io`.

1. Push this project to the `main` branch of `ronak1040/ronak1040.github.io`.
2. In GitHub, open repository Settings -> Pages.
3. Set Source to `GitHub Actions`.
4. The included workflow `.github/workflows/deploy-pages.yml` builds and deploys automatically on every push to `main`.
5. Wait for the workflow to finish, then open `https://ronak1040.github.io/`.

Notes:

- This project is configured for static export in `next.config.mjs`.
- GitHub Pages does not support Next.js API routes; contact is currently direct email/social links only.

## Notes

- Replace placeholder social links and contact email in `src/data/cv-data.ts`.
- Replace `GithubProjects` username in `src/app/page.tsx`.
- Add your real resume file in `public/` and update `resumeHref`.
