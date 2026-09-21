"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function SkillsSection() {
  const { lang } = useLanguage();

  const domainGroups = [
    {
      title: { en: "Systems & Low-Level C", fr: "Systèmes Unix & C Bas Niveau" },
      subtitle: {
        en: "POSIX sockets, multi-threaded concurrency (pthreads), custom heap memory allocators, and memory profiling under Valgrind Memcheck & GDB.",
        fr: "Sockets POSIX, concurrence multi-threads (pthreads), allocateurs mémoire sur le tas et profilage mémoire sous Valgrind Memcheck & GDB.",
      },
      skills: [
        "C (C99 / C11)",
        "Sockets POSIX (TCP/IP)",
        "pthreads & mutex",
        "API noyau Linux (sys_brk, mmap)",
        "GDB & Valgrind Memcheck",
        "Allocateurs mémoire personnalisés",
        "Signaux Unix & IPC",
        "Makefiles & GCC/Clang",
      ],
    },
    {
      title: { en: "Modern Fullstack Web", fr: "Web Fullstack Moderne" },
      subtitle: {
        en: "Scalable applications using Next.js 16 (App Router), 100% strict TypeScript without any types, React 19 Server Components, and relational PostgreSQL databases.",
        fr: "Applications scalables avec Next.js 16 (App Router), TypeScript 5 strict sans type any, React Server Components et bases PostgreSQL relationnelles.",
      },
      skills: [
        "Next.js 16 (App Router)",
        "TypeScript 5 (strict)",
        "React 19",
        "PostgreSQL & requêtes typées",
        "Tailwind CSS",
        "Bun & Node.js",
        "APIs REST & Server Actions",
        "Zod validation",
      ],
    },
    {
      title: { en: "Infrastructure, Network & Tooling", fr: "Infrastructure, Réseau & Outils" },
      subtitle: {
        en: "Daily Unix/Linux workflow, automated GitHub Actions CI/CD pipelines, raw packet inspection via Wireshark, and accessible design system implementations.",
        fr: "Environnement Linux/Unix au quotidien, pipelines automatisés GitHub Actions, inspection de trames réseau brutes avec Wireshark et conformité accessibilité WCAG AAA.",
      },
      skills: [
        "Linux & shell scripting (Bash)",
        "Docker & conteneurs",
        "GitHub Actions CI/CD",
        "Wireshark (analyse de trames)",
        "Neovim & Git",
        "Figma & Design Systems",
        "Accessibilité WCAG AAA",
      ],
    },
  ];

  return (
    <section id="competences" className="py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-t border-[#232635]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Core Engineering Principles (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-blue-400 font-medium">
              {lang === "fr" ? "Socle technique" : "Technical Stack"}
            </div>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
              {lang === "fr" ? "Compétences & environnement" : "Skills & Environment"}
            </h2>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {lang === "fr"
                ? "Une double culture technique combinant la rigueur d'optimisation des systèmes bas niveau et la vitesse de livraison du web moderne."
                : "A dual technical foundation combining low-level systems optimization rigor and modern web delivery speed."}
            </p>
          </div>

          {/* Core Guarantees - Open, minimal text list */}
          <div className="pt-6 border-t border-[#232635] space-y-4 text-xs">
            <div className="space-y-1">
              <span className="font-semibold text-white block">
                {lang === "fr" ? "✓ 0 fuite mémoire constatée" : "✓ 0 memory leak tolerance"}
              </span>
              <p className="text-neutral-400 font-light leading-relaxed">
                {lang === "fr"
                  ? "Chaque projet système en C est validé et profilé avec Valgrind Memcheck sans perte de descripteur ni fuite de tas."
                  : "Every low-level C codebase is validated and profiled with Valgrind Memcheck."}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-white block">
                {lang === "fr" ? "✓ TypeScript 100% strict" : "✓ 100% strict TypeScript"}
              </span>
              <p className="text-neutral-400 font-light leading-relaxed">
                {lang === "fr"
                  ? "Aucun type any toléré dans les codebases web. Typage strict de bout en bout de la base SQL jusqu'au client."
                  : "Zero any types permitted. End-to-end type safety from SQL schemas to UI components."}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Open Architectural Matrix (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-10 divide-y divide-[#232635]">
          {domainGroups.map((domain, idx) => (
            <div key={idx} className="pt-10 first:pt-0 space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                  {domain.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {domain.subtitle[lang]}
                </p>
              </div>

              {/* Fluid Horizontal Tags - Ample space to flow naturally */}
              <div className="flex flex-wrap gap-2 pt-2">
                {domain.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs sm:text-sm text-neutral-200 bg-[#181b26] border border-[#262a3c] font-normal hover:border-neutral-400 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
