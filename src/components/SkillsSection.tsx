"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Terminal, Globe, Server, ShieldCheck, Cpu } from "lucide-react";

export default function SkillsSection() {
  const { lang } = useLanguage();

  const domainIcons = [
    <Cpu key="0" className="w-5 h-5 text-blue-400" />,
    <Globe key="1" className="w-5 h-5 text-indigo-400" />,
    <Server key="2" className="w-5 h-5 text-emerald-400" />,
    <ShieldCheck key="3" className="w-5 h-5 text-amber-400" />,
  ];

  const domainGuarantees = [
    {
      badge: { en: "Valgrind & GDB Audited", fr: "Audité sous Valgrind & GDB" },
      focus: {
        en: "Multi-threaded concurrency, POSIX sockets, custom heap memory allocators.",
        fr: "Concurrence pthreads, sockets POSIX, allocateurs mémoire sans fuite.",
      },
    },
    {
      badge: { en: "100% Strict TypeScript", fr: "TypeScript 100% strict" },
      focus: {
        en: "Next.js 16 App Router, React Server Components, relational PostgreSQL modeling.",
        fr: "Next.js 16 App Router, Server Components, modélisation PostgreSQL.",
      },
    },
    {
      badge: { en: "Automated Pipelines", fr: "Pipelines automatisés" },
      focus: {
        en: "Daily Linux/Unix terminal workflow, GitHub Actions CI/CD, Docker containers.",
        fr: "Environnement Linux/Unix quotidien, GitHub Actions CI/CD, conteneurs Docker.",
      },
    },
    {
      badge: { en: "POSIX & W3C Standards", fr: "Standards POSIX & W3C" },
      focus: {
        en: "Wireshark frame analysis, Neovim, Figma UI systems, WCAG AAA accessibility.",
        fr: "Analyse réseau Wireshark, Neovim, Figma, accessibilité WCAG AAA.",
      },
    },
  ];

  return (
    <section id="competences" className="py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-t border-[#232737]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-medium text-blue-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "Stack & Environnement" : "Stack & Environment"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            {lang === "fr" ? "Compétences & architecture" : "Skills & Architecture"}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {lang === "fr"
              ? "Une double culture technique : la rigueur et l'optimisation des systèmes bas niveau, alliées à l'expérience produit et à la réactivité du web moderne."
              : "A dual technical foundation: low-level systems rigor and optimization, combined with modern web product agility and speed."}
          </p>
        </div>

        {/* 4-Column Widescreen Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skillCategories.map((cat, idx) => {
            const guarantee = domainGuarantees[idx];

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#161824]/85 border border-[#262a3c] hover:border-[#383e54] transition-all p-6 flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-5">
                  {/* Icon & Guarantee Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-2.5 rounded-xl bg-[#1d202e] border border-[#2b3042]">
                      {domainIcons[idx]}
                    </div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#1b1e2c] border border-[#2b3044] text-neutral-300">
                      {guarantee.badge[lang]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {cat.title[lang]}
                  </h3>

                  {/* Focus note */}
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {guarantee.focus[lang]}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs text-neutral-300 bg-[#1c1f2b] border border-[#282d3e]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Discipline Banner */}
        <div className="rounded-xl bg-[#141622] border border-[#252839] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-300">
          <div className="space-y-1">
            <span className="font-semibold text-white block">
              {lang === "fr" ? "Mémoire & Stabilité" : "Memory & Stability"}
            </span>
            <p className="text-neutral-400 leading-relaxed font-light">
              {lang === "fr"
                ? "Code en C audité sous Valgrind Memcheck. Zéro fuite de mémoire et isolation stricte des signaux Unix."
                : "C code audited with Valgrind Memcheck. Zero memory leaks and strict Unix signal handling."}
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-white block">
              {lang === "fr" ? "Typage Strict End-to-End" : "Strict End-to-End Typing"}
            </span>
            <p className="text-neutral-400 leading-relaxed font-light">
              {lang === "fr"
                ? "TypeScript en mode strict sans aucun type any. Validation des entrées avec Zod et requêtes SQL typées."
                : "TypeScript in strict mode with zero any types. Input validation with Zod and typed SQL queries."}
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-white block">
              {lang === "fr" ? "Respect des Protocoles" : "Standard Protocols"}
            </span>
            <p className="text-neutral-400 leading-relaxed font-light">
              {lang === "fr"
                ? "Implémentation fidèle des spécifications POSIX, des RFC réseau (TCP/IP) et des normes WCAG pour l'accessibilité."
                : "Strict compliance with POSIX standards, TCP/IP RFCs, and WCAG accessibility guidelines."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
