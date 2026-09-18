<div align="center">

# 🏛️ Mehdi — Software & Systems Engineer
### *Linear Horizontal Architectural Portfolio*

[![Next.js 15](https://img.shields.io/badge/Next.js-15.x-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-22C55E?style=for-the-badge&logo=githubpages&logoColor=white)](https://mehddium.github.io/portfolio/)
[![License](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)

<br/>

> **🌐 Live Production Website**: **[https://mehddium.github.io/portfolio/](https://mehddium.github.io/portfolio/)**

<br/>

```
┌──────────────┬────────────────────────┬─────────────────────┬─────────────────┬──────────────┐
│ [00] SPEC    │ [01] POSIX & SYSTEMS   │ [02] REACTIVE WEB   │ [03] SPECTRUM   │ [04] DISPATCH│
│ Identity &   │ Multi-thread TCP C     │ Fullstack Next.js   │ Matrix & Journey│ Direct Action│
│ Manifesto    │ & Unix Allocator       │ & Design System     │ Capabilities    │ & PDF Resume │
└──────────────┴────────────────────────┴─────────────────────┴─────────────────┴──────────────┘
 ◄────────────────────── CONTINUOUS HORIZONTAL CANVAS (X-AXIS) ────────────────────────►
```

</div>

---

## 🧭 Spatial Architecture & Modular Bays

The portfolio breaks away from standard vertical landing pages by presenting an **editorial horizontal canvas** (*L-Strip Engine*):

| Bay Index | Identifier | Focus & Engineering Deliverables |
| :---: | :--- | :--- |
| **00** | **SPEC // Identity** | Dual-discipline manifesto, live status indicators, core engineering pillars. |
| **01** | **LAB // POSIX & Systems** | Multi-threaded TCP network server, Unix shell & dynamic memory allocator (`sbrk`/`mmap`), packet sniffer. |
| **02** | **ARCH // Reactive Web** | Modular fullstack platform in Next.js 15 App Router, TypeScript, and Swiss typographic design system. |
| **03** | **SPECTRUM // Matrix & Trajectory** | 4-Domain capability matrix (Languages, Web, Systems, Tools) & interactive chronological journey. |
| **04** | **DISPATCH // Connect** | Direct 1-click clipboard dispatch, live GitHub repository links, and printable CV preview. |

---

## ⚡ Interaction & Navigation Engine

- 🖱️ **Natural Wheel-to-Horizontal Mapping**: Smooth vertical mouse-wheel conversion to X-axis translation with zero jank.
- ⌨️ **Keyboard Controls**: Full arrow key (`←` / `→`), `PageDown` / `PageUp`, `Home` / `End` navigation.
- 📏 **Linear Scrubber & HUD**: Real-time coordinate tracking (`[BAY: 01 / 04]`, `[POS: 42%]`) and instant bay jumping.
- 🌐 **Instant Bilingual Support**: Live toggle between French (**FR**) and English (**EN**) with persistent storage.
- 📄 **Integrated Spec / CV Modal**: Clean printable curriculum vitae formatted for screen and paper PDF export.

---

## 🛠️ Technology Stack

<details open>
<summary><b>Component Architecture & Tooling</b></summary>

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automated static build & Pages deployment
├── public/                     # Static assets & icons
├── src/
│   ├── app/
│   │   ├── globals.css         # Horizontal canvas, blueprint grids & typography
│   │   ├── layout.tsx          # Root layout & bilingual metadata
│   │   └── page.tsx            # Horizontal canvas orchestrator & interaction listeners
│   ├── components/
│   │   ├── bays/
│   │   │   ├── BayIdentity.tsx         # Bay 00 — Identity & manifesto
│   │   │   ├── BaySystems.tsx          # Bay 01 — POSIX C, Sockets & Systems Lab
│   │   │   ├── BayWeb.tsx              # Bay 02 — Next.js 15 & Fullstack Architecture
│   │   │   ├── BayMatrixTrajectory.tsx # Bay 03 — Capability Matrix & Timeline
│   │   │   └── BayConnect.tsx          # Bay 04 — Direct Dispatch & Contact
│   │   ├── LinearHUD.tsx       # Top technical HUD & live coordinates
│   │   ├── LinearScrubber.tsx  # Bottom timeline ruler & bay navigation
│   │   ├── ResumeModal.tsx     # Printable CV / PDF specification modal
│   │   └── Icons.tsx           # Scalable custom SVG symbols
│   ├── context/
│   │   └── LanguageContext.tsx # EN/FR bilingual state provider
│   └── data/
│       └── portfolioData.ts    # Centralized bilingual data source
├── next.config.ts              # Static export configuration (`output: 'export'`)
└── package.json
```

</details>

---

## 🚀 Local Development & Build

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/)

### Quickstart

```bash
# 1. Clone repository
git clone https://github.com/mehddium/portfolio.git
cd portfolio

# 2. Install dependencies
npm install  # or: bun install

# 3. Start local development server
npm run dev  # or: bun dev
```

Open [http://localhost:3000](http://localhost:3000) to explore the horizontal canvas.

### Production Static Export
```bash
npm run build
```
Generates an optimized static bundle in the `out/` directory ready for deployment on GitHub Pages or any static host.

---

## 📜 License & Author

Crafted with precision by **[Mehdi](https://github.com/mehddium)**.  
Released under the [MIT License](LICENSE).
