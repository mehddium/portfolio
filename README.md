# Mehdi — Software & Systems Engineer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.4-fbf0df?style=flat&logo=bun)](https://bun.sh/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Active-brightgreen?style=flat&logo=github)](https://mehddium.github.io/portfolio/)

> **Live Production Website**: [https://mehddium.github.io/portfolio/](https://mehddium.github.io/portfolio/)

A modern, high-performance portfolio presenting Mehdi's dual expertise in **Low-Level POSIX C / Systems Programming** and **Reactive Fullstack Web (Next.js 16 & TypeScript)**, engineered according to industry recruitment standards and Opquast/W3C accessibility guidelines.

---

## 🎯 Architectural Principles & Recruiter Standards

Designed to satisfy the highest recruitment standards for software and systems engineers:
* **⚡ The 10-Second Pitch**: Immediate clarity with zero corporate fluff—clear technical scope, current availability badge, and measurable key metrics ribbon.
* **🔬 Contextualized Evidence (Case Studies)**: Each major deliverable is accompanied by an in-depth technical study: Problem & Constraints $\rightarrow$ Architecture & Trade-offs $\rightarrow$ Measured Benchmarks & Results $\rightarrow$ Key Learnings.
* **🏷️ Interactive Domain Filtering**: Filter projects instantly between *All*, *C & Systems*, *POSIX Network*, and *Fullstack Web*.
* **🤝 Social Proof & Vouching**: Peer and academic supervisor recommendations highlighting code rigor, Valgrind audits, and teamwork.
* **📱 Responsive & Accessible (W3C/Opquast)**: Fluid, non-blocking native scrolling, semantic HTML5, high-contrast dark palette, and full mobile optimization.
* **🔍 SEO & Machine Discoverability**: Schema.org JSON-LD structured data (`Person` & `ProfilePage`) and complete OpenGraph / Twitter tags.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Runtime** | [Next.js 16 (App Router)](https://nextjs.org/), [Bun](https://bun.sh/), [React 19](https://react.dev/) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/), Swiss Minimalist Typography |
| **Languages & Typings** | [TypeScript 5](https://www.typescriptlang.org/) (Strict mode), ANSI C (C99/C11) |
| **Iconography** | [Lucide React](https://lucide.dev/), Custom SVGs |
| **CI / CD & Deployment** | [GitHub Actions](https://github.com/features/actions), [GitHub Pages](https://pages.github.com/) |

---

## 📂 Project Structure

```
portfolio/
├── public/                     # Static public assets
├── src/
│   ├── app/
│   │   ├── globals.css         # Swiss typography, theme tokens & custom scrollbar
│   │   ├── layout.tsx          # Root layout, Schema.org JSON-LD & OpenGraph metadata
│   │   └── page.tsx            # Main assembly of fluid portfolio sections
│   ├── components/
│   │   ├── QuickHudNav.tsx     # Floating HUD with status badge, anchor links & CTAs
│   │   ├── HeroSection.tsx     # 10s pitch, metrics ribbon & interactive terminal
│   │   ├── ProjectsSection.tsx # Filterable deliverables & case study triggers
│   │   ├── CaseStudyModal.tsx  # In-depth technical breakdown modal
│   │   ├── SkillsSection.tsx   # 4-Quadrant structured capabilities matrix
│   │   ├── JourneySection.tsx  # Academic background & engineering timeline
│   │   ├── RecommendationsSection.tsx # Peer & supervisor testimonials
│   │   ├── ContactSection.tsx  # 1-click email copy, GitHub & compliance footer
│   │   ├── ResumeModal.tsx     # Printable CV / PDF modal
│   │   └── Icons.tsx           # Custom inline SVG icons
│   ├── context/
│   │   ├── LanguageContext.tsx # EN/FR bilingual state provider with storage sync
│   │   └── ThemeContext.tsx    # Theme context provider
│   └── data/
│       └── portfolioData.ts    # Centralized, type-safe bilingual data source
├── next.config.ts              # Next.js static export & basePath config
├── package.json
└── tsconfig.json
```

---

## 🚀 Local Development

```bash
bun install
bun dev
```

Build for static production:
```bash
bun run build
```

Run linter:
```bash
bun run lint
```

---

## 📜 License

Created with passion by [Mehdi](https://github.com/mehddium). Open source under the MIT License.
