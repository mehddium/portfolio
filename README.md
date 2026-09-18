# Mehdi — Software Engineer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.4-fbf0df?style=flat&logo=bun)](https://bun.sh/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Active-brightgreen?style=flat&logo=github)](https://mehddium.github.io/portfolio/)

> **Live Production Website**: [https://mehddium.github.io/portfolio/](https://mehddium.github.io/portfolio/)

A clean, minimalist personal portfolio designed with restraint, typography, and focus. Built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and **Bun**.

---

## 📐 Key Features

* **✨ Restrained & Minimal Design**: Zero unnecessary widgets, zero nested cards, pure typographical focus on what matters.
* **🌐 Bilingual Support (FR / EN)**: Clean client-side language switch.
* **🚀 Static Export Architecture (`output: 'export'`)**: Fast, lightweight static pre-rendering deployed to **GitHub Pages** via GitHub Actions.
* **📂 Selected Projects**: Direct presentation of key engineering work (C & POSIX network server, custom Unix shell & allocator, Next.js platform) with links to GitHub.
* **⏳ Background & Timeline**: Clear trajectory of academic studies and engineering projects.
* **📁 Projects File Explorer**: Finder/Explorer style window with categorized folder navigation, project search bar, tech badges, and direct GitHub links.
* **📊 Task Manager (Skills & Resources)**: CPU-like resource meters for technical competencies across C, TypeScript, Next.js, POSIX Sockets, Linux internals, and DevOps.
* **✨ Ambient Mesh Wallpapers**: Real-time wallpaper switcher cycling between *Deep Aurora*, *Cyberpunk Night*, *Cosmic Glass*, and *Obsidian Dark*.
* **🚀 Fluent Glass Dock & Start Menu**: Bottom taskbar with running app indicators, live system clock, FR/EN language toggle, and Windows-style Start Menu.
* **🌐 Full Bilingual Support (FR / EN)**: Instant client-side language toggle between French and English with local storage persistence.
* **🚀 Static Export Architecture (`output: 'export'`)**: Fully pre-rendered static HTML/CSS/JS deployed automatically to **GitHub Pages** via GitHub Actions.
* **📂 Interactive Projects Showcase**: Filterable project gallery (`Web Fullstack`, `C & Systems`, `Networking & Tools`) with source code links, tech stack badges, and technical highlights.
* **⏳ Education & Experience Timeline**: Interactive academic and professional trajectory cards highlighting computer science systems, low-level C programming, networking protocols, and web development.
* **⚡ Technical Matrix**: Exhaustive categorization of programming languages (C, TypeScript, Python, SQL, Bash), web architecture (Next.js, React 19, Node.js), low-level systems (POSIX Sockets, pthreads, Linux internals), and engineering tools (GDB, Valgrind, Figma).
* **📄 Interactive Resume (CV) Modal**: Embedded printable resume preview with print/PDF export and escape key bindings.
* **⚡ Zero 404 Asset Guarantee**: Custom lightweight vector SVG iconography (Lucide + inline SVGs) ensuring 100% path resolution reliability on GitHub Pages subpaths.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Runtime** | [Next.js 15 (App Router)](https://nextjs.org/), [Bun](https://bun.sh/), [React 19](https://react.dev/) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/), Swiss Typographic Grid, CSS Variables |
| **Language & Typings** | [TypeScript 5](https://www.typescriptlang.org/) (Strict mode) |
| **Iconography & Motion** | [Lucide React](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/) |
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
│   │   ├── globals.css         # Tailwind v4 imports & theme definitions
│   │   ├── layout.tsx          # Root layout, metadata & font definitions
│   │   └── page.tsx            # Main page assembling all portfolio sections
│   ├── components/
│   │   ├── Header.tsx          # Navigation, brand & language switcher
│   │   ├── Hero.tsx            # Swiss typography header, bio & quick actions
│   │   ├── ProjectsSection.tsx # Filterable project showcase
│   │   ├── TimelineSection.tsx # Experience & education node timeline
│   │   ├── SkillsSection.tsx   # Categorized technical matrix
│   │   ├── GithubStatsSection.tsx # GitHub profile metrics & activity overview
│   │   ├── ContactSection.tsx  # Direct email copy card & social links
│   │   ├── ResumeModal.tsx     # Printable CV preview modal
│   │   ├── Footer.tsx          # Minimalist footer & back-to-top button
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

### Prerequisites
* [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) v20+

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone git@github.com:mehddium/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Start the local development server**:
   ```bash
   bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

4. **Build and test static export locally**:
   ```bash
   bun run build
   ```

---

## 🔄 DevOps Workflow (Git & CI/CD)

This project strictly follows the **Feature Branch & Conventional Commits** workflow:

1. **Create a feature branch**:
   ```bash
   git checkout -b feat/my-new-feature
   ```
2. **Commit using Conventional Commits**:
   ```bash
   git commit -m "feat(section): add interactive project filter"
   ```
3. **Push and merge to `main`**:
   The `.github/workflows/deploy.yml` pipeline automatically builds and deploys changes to GitHub Pages in under 20 seconds.

---

## 📜 License

Created with passion by [Mehdi](https://github.com/mehddium). Open source under the MIT License.
