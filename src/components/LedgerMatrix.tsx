"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LedgerMatrix() {
  const { lang } = useLanguage();

  const domainColumns = [
    {
      code: "SYS-01",
      title: { en: "Unix & Low-Level C Systems", fr: "Systèmes Unix & C Bas Niveau" },
      desc: {
        en: "POSIX network sockets, multi-threaded concurrency, heap memory allocators, and Valgrind profiling.",
        fr: "Sockets réseau POSIX, concurrence multi-threads, allocateurs mémoire sur le tas et profilage Valgrind.",
      },
      skills: [
        "C (C99 / C11)",
        "Sockets POSIX (TCP/IP)",
        "pthreads & mutex locks",
        "API noyau Linux (sys_brk, mmap)",
        "GDB & Valgrind Memcheck",
        "Allocateurs mémoire personnalisés",
        "Signaux Unix & IPC",
        "Makefiles & GCC/Clang",
      ],
    },
    {
      code: "WEB-02",
      title: { en: "Reactive Fullstack Web", fr: "Web Fullstack Réactif" },
      desc: {
        en: "Next.js 16 App Router architectures, 100% strict TypeScript, React 19 Server Components, and relational PostgreSQL.",
        fr: "Architectures Next.js 16 App Router, TypeScript 100% strict, React 19 Server Components et PostgreSQL relationnel.",
      },
      skills: [
        "Next.js 16 (App Router)",
        "TypeScript 5 (strict)",
        "React 19",
        "PostgreSQL & requêtes typées",
        "Tailwind CSS",
        "Bun & Node.js",
        "Server Actions & REST",
        "Zod runtime validation",
      ],
    },
    {
      code: "ENV-03",
      title: { en: "Infrastructure, Network & Protocols", fr: "Infrastructure, Réseau & Outils" },
      desc: {
        en: "Daily Linux workflow, automated CI/CD pipelines, Wireshark packet inspection, and WCAG AAA compliance.",
        fr: "Environnement Linux quotidien, pipelines automatisés CI/CD, inspection de paquets Wireshark et conformité WCAG AAA.",
      },
      skills: [
        "Linux & shell scripting (Bash)",
        "Docker & conteneurs",
        "GitHub Actions CI/CD",
        "Wireshark (analyse de trames)",
        "Neovim & Git workflow",
        "Figma & Design Systems",
        "Accessibilité WCAG AAA",
      ],
    },
  ];

  return (
    <section id="matrice" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#222533]">
      <div className="space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#222533]">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs text-[#3b82f6] font-medium">
              {lang === "fr" ? "Socle technique & environnement" : "Technical Stack & Environment"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f5f8] uppercase">
              {lang === "fr" ? "Matrice des compétences" : "Engineering Matrix"}
            </h2>
            <p className="text-sm text-[#8b90a0] font-light leading-relaxed">
              {lang === "fr"
                ? "Double compétence concrète : optimisation fine du bas niveau Unix et réactivité du web moderne."
                : "Dual concrete engineering foundation: low-level Unix optimization and modern web speed."}
            </p>
          </div>

          <div className="text-xs font-mono text-[#8b90a0] shrink-0">
            {lang === "fr" ? "3 domaines d'expertise" : "3 domain specifications"}
          </div>
        </div>

        {/* 3-Column Swiss Grid (Zero rounded corners, 1px hairlines) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-[#222533] divide-y lg:divide-y-0 lg:divide-x divide-[#222533] bg-[#0e1017]">
          {domainColumns.map((col) => (
            <div key={col.code} className="p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#8b90a0]">
                  <span className="text-[#3b82f6] font-semibold">{col.code}</span>
                  <span>{col.code === "SYS-01" ? "POSIX C" : col.code === "WEB-02" ? "NEXT.JS" : "DEVOPS"}</span>
                </div>

                <h3 className="text-xl font-bold text-[#f4f5f8] tracking-tight">
                  {col.title[lang]}
                </h3>

                <p className="text-xs sm:text-sm text-[#8b90a0] font-light leading-relaxed">
                  {col.desc[lang]}
                </p>
              </div>

              {/* Skills list */}
              <div className="pt-6 border-t border-[#222533] space-y-2">
                <div className="text-[11px] text-[#8b90a0] uppercase tracking-wider font-medium">
                  {lang === "fr" ? "Compétences clés" : "Key competencies"}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {col.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-[#151822] text-[#f4f5f8] border border-[#222533] text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Guarantees Specimen Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#222533] divide-y md:divide-y-0 md:divide-x divide-[#222533] bg-[#151822] p-6 sm:p-8 gap-6 md:gap-0">
          <div className="space-y-2 md:pr-8">
            <div className="text-xs text-[#3b82f6] font-semibold">
              {lang === "fr" ? "Garantie mémoire" : "Memory soundness"}
            </div>
            <h4 className="text-base font-bold text-[#f4f5f8]">
              {lang === "fr" ? "Zéro fuite mémoire tolérée" : "Zero memory leak tolerance"}
            </h4>
            <p className="text-xs text-[#8b90a0] font-light leading-relaxed">
              {lang === "fr"
                ? "Chaque exécutable et daemon C est rigoureusement audité avec Valgrind Memcheck. Aucun descripteur orphelin ni fuite sur le tas."
                : "Every low-level C codebase is profiled under Valgrind Memcheck with zero leaked file descriptors or heap loss."}
            </p>
          </div>

          <div className="space-y-2 md:pl-8">
            <div className="text-xs text-[#3b82f6] font-semibold">
              {lang === "fr" ? "Garantie typage" : "Type safety"}
            </div>
            <h4 className="text-base font-bold text-[#f4f5f8]">
              {lang === "fr" ? "Typage strict de bout en bout" : "End-to-end strict type safety"}
            </h4>
            <p className="text-xs text-[#8b90a0] font-light leading-relaxed">
              {lang === "fr"
                ? "TypeScript en mode strict sans aucun type 'any'. Validation des entrées réseau à l'exécution avec schémas Zod et sécurité SQL."
                : "TypeScript 5 in strict mode with zero 'any' casts. Runtime payload validation with Zod and type-safe database queries."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
