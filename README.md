# Mehdi — Systems & Web Engineer

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.4-fbf0df?style=flat&logo=bun)](https://bun.sh/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Active-brightgreen?style=flat&logo=github)](https://mehddium.github.io/portfolio/)

> **Live Production**: [https://mehddium.github.io/portfolio/](https://mehddium.github.io/portfolio/)

Minimalist editorial portfolio presenting technical projects in low-level POSIX C programming and modern reactive web development.

---

## Architecture & Layout

- **Light Editorial Interface**: High-contrast typography, generous whitespace, boundary-less open layouts (no rounded cards or boilerplate containers).
- **Smooth Vertical Flow**: Natural single-column layout optimized for reading and scanning.
- **Technical Vector Schematics**: Visual architectural representations of socket lifecycles, Unix process pipelines, and Next.js data flows.
- **Bilingual (FR / EN)**: Instant language switcher with localStorage state persistence.
- **Static Export**: Zero-dependency static build (`output: 'export'`) automatically deployed via GitHub Actions to GitHub Pages.

---

## Selected Projects

- **Concurrent TCP Server & Client**: Multi-threaded POSIX network server in C (RFC-compliant, `pthreads`, `select`/`poll` multiplexing).
- **Custom Unix Shell & Allocator**: Process lifecycle engine (`fork`, `execvp`, pipes) and dynamic heap allocator (`sbrk`/`mmap`).
- **Modular Fullstack Platform**: Reactive application in Next.js 15 App Router, TypeScript, and PostgreSQL.
- **Raw Packet Sniffer**: Low-level packet capture and binary protocol decoding utility.

---

## Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Languages** | C (C99/C11), TypeScript, JavaScript (ESNext), Python, SQL, Bash |
| **Systems & Network** | Linux/POSIX APIs, TCP/IP, Sockets, pthreads, GDB, Valgrind |
| **Web Architecture** | Next.js 15 (App Router), React 19, Tailwind CSS v4, Node.js, Bun |
| **Tooling & Workflow** | Git, GitHub Actions, Make, Docker, Wireshark, Figma |

---

## Local Development

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for static production
bun run build
```

---

## License

Crafted by [Mehdi](https://github.com/mehddium). Open source under the MIT License.
