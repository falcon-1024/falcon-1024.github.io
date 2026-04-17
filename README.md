# Abhi Patel Portfolio

This repository contains a personal portfolio website built with Next.js and deployed to GitHub Pages. It is intended to showcase Abhi Patel's experience, projects, and contact information in a recruiter-friendly format.

The site is currently being refreshed to match the latest resume and present a stronger job-search profile. The current professional focus reflected in the latest CV is:

- Data/AI Engineer
- Generative AI and RAG systems
- Databricks, Spark, FastAPI, Snowflake, Kubernetes, and Azure

## Live Site

- Portfolio: https://falcon-1024.github.io
- Resume source used for upcoming content updates: [abhi_patel_resume.pdf](./abhi_patel_resume.pdf)

## What This Site Contains

The current site is a single-page portfolio with these sections:

- Hero / introduction
- Education
- Work experience
- Projects
- Contact information

Most recruiter-facing content is static and stored directly in the repo, which makes it easy to update and redeploy quickly.

## Tech Stack

- Next.js 14 App Router
- React 18
- Tailwind CSS
- Font Awesome
- GitHub Actions for GitHub Pages deployment

## Local Development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Run lint checks:

```bash
npm run lint
```

Create the production build and static export output:

```bash
npm run build
```

Because `next.config.js` uses `output: 'export'`, the production build writes the static site to `out/`, which is what GitHub Pages deploys.

## Deployment

The site is deployed automatically through GitHub Actions using `.github/workflows/nextjs.yml`.

Deployment flow:

1. Push to `main`
2. GitHub Actions installs dependencies
3. Next.js builds the static export
4. The `out/` directory is uploaded and deployed to GitHub Pages

## Project Structure

```text
src/
	app/
		layout.tsx        # App shell and fonts
		page.tsx          # Single-page composition and section ordering
	components/
		home.jsx          # Hero section
		education.jsx     # Education cards
		workexp.jsx       # Experience grid
		projects.jsx      # Project filters and cards
		contactme.jsx     # Contact section and links
		navbar.jsx        # Top navigation
		experienceModal.jsx
		projectModal.jsx
		skills.jsx
	data/
		experienceData.js # Experience content
		projectData.js    # Project content
```

## Content Source Of Truth

If you are updating portfolio copy, use the latest resume before editing recruiter-facing text. In this repository, the current reference file is [abhi_patel_resume.pdf](./abhi_patel_resume.pdf).

This matters because some of the existing site copy is older than the current resume. Future updates should align the following with the resume first:

- Headline and summary in the hero section
- Current role and technical focus
- Experience bullets and dates
- Project selection and descriptions
- Contact details and call to action

## Notes For Contributors

- Keep the site compatible with static export for GitHub Pages.
- Prefer updating structured data in `src/data/` when changing projects or experience items.
- Avoid adding backend-only features unless the deployment model changes.

## Next Refresh Priorities

- Rewrite the hero section around the current Data/AI Engineer profile
- Replace older machine learning and internship emphasis with recent production AI/data engineering work
- Curate projects to emphasize recruiter-relevant work in GenAI, data engineering, and backend systems
- Tighten contact and call-to-action copy for hiring conversations
