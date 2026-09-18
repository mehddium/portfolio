# Mehdi — Software & Systems Engineer Portfolio (Cinematic Keynote Storytelling Edition)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.4-fbf0df?style=flat&logo=bun)](https://bun.sh/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Active-brightgreen?style=flat&logo=github)](https://mehddium.github.io/portfolio/)

> **Live Production Website**: [https://mehddium.github.io/portfolio/](https://mehddium.github.io/portfolio/)

A cinematic, full-viewport storytelling portfolio presenting Mehdi's dual expertise in **Low-Level POSIX C / Systems Programming** and **Modern Reactive Fullstack Web (Next.js 15 & TypeScript)**.

---

## 📐 Architecture & Key Scenes

* **🎬 01 // Vision & Identity**: High-impact editorial opening statement and technical pillars.
* **⚡ 02 // Systems & Low-Level C**: Deep dive into concurrent TCP servers, POSIX sockets, and dynamic memory allocation.
* **🚀 03 // Modern Fullstack Web**: Reactive platform showcases built with Next.js 15 App Router, TypeScript, and Tailwind CSS v4.
* **📊 04 // Technical Matrix**: 4-quadrant engineering capability matrix across languages, web, systems, and developer tools.
* **🎓 05 // Trajectory & Milestones**: Chronological academic and engineering milestone journey.
* **📬 06 // Connect & Collaborate**: High-impact contact screen with one-click email copy, GitHub links, and printable CV preview.
* **⌨️ Presentation Controls**: Full keyboard navigation support (`Arrow Down` / `Arrow Up`, `PageDown` / `PageUp`, `Space`, `Home` / `End`).
* **🌐 Bilingual Support (FR / EN)**: Instant language switcher with localStorage persistence.
* **🚀 Static Export Architecture (`output: 'export'`)**: Fast, lightweight static build optimized for GitHub Pages CI/CD.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Runtime** | [Next.js 15 (App Router)](https://nextjs.org/), [Bun](https://bun.sh/), [React 19](https://react.dev/) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/), CSS Viewport Snapping, Ambient Glows |
| **Language & Typings** | [TypeScript 5](https://www.typescriptlang.org/) (Strict mode) |
| **Iconography** | [Lucide React](https://lucide.dev/), Custom SVGs |
| **CI / CD & Deployment** | [GitHub Actions](https://github.com/features/actions), [GitHub Pages](https://pages.github.com/) |

---

## 📂 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automated CI/CD pipeline
├── public/                     # Static public assets
├── src/
│   ├── app/
│   │   ├── globals.css         # Snapping, typography & ambient glow styles
│   │   ├── layout.tsx          # Root layout & bilingual metadata
│   │   └── page.tsx            # Main page assembling the 6 cinematic scenes
│   ├── components/
│   │   ├── CinematicNav.tsx    # Floating HUD & side vertical scene pagination
│   │   ├── SceneIdentity.tsx   # Scene 1 — Vision & identity
│   │   ├── SceneSystems.tsx    # Scene 2 — POSIX C, Sockets & Systems
│   │   ├── SceneWeb.tsx        # Scene 3 — Next.js 15 & TypeScript Web
│   │   ├── SceneMatrix.tsx     # Scene 4 — 4-Quadrant Capability Matrix
│   │   ├── SceneTrajectory.tsx # Scene 5 — Academic & Engineering Timeline
│   │   ├── SceneConnect.tsx    # Scene 6 — Contact & Direct Actions
│   │   ├── ResumeModal.tsx     # Printable CV / PDF modal
│   │   └── Icons.tsx           # Custom inline SVG icons
│   ├── context/
│   │   └── LanguageContext.tsx # EN/FR bilingual state provider
│   └── data/
│       └── portfolioData.ts    # Centralized bilingual data source
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

---

## 📜 License

Created with passion by [Mehdi](https://github.com/mehddium). Open source under the MIT License.
