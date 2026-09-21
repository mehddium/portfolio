"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Terminal, Globe } from "lucide-react";

export default function SkillsSection() {
  const { lang } = useLanguage();

  // Combine categories into two wide, spacious domains so tags flow horizontally without awkward vertical stacking
  const systemsSkills = [
    ...portfolioData.skillCategories[0].skills,
    "Signaux Unix & IPC",
    "Multiplexage I/O (poll/select)",
  ];

  const webDevopsSkills = [
    ...portfolioData.skillCategories[1].skills,
    ...portfolioData.skillCategories[2].skills.slice(0, 4),
    "Figma & WCAG AAA",
    "Wireshark (réseau)",
  ];

  return (
    <section id="competences" className="py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-t border-[#232635]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            {lang === "fr" ? "Compétences & environnement" : "Skills & Environment"}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {lang === "fr"
              ? "Une double culture technique : l'optimisation des systèmes bas niveau et la rigueur produit du web moderne."
              : "A dual technical background: low-level systems optimization and modern web product engineering."}
          </p>
        </div>

        {/* Two Wide Spacious Domains - Tags flow horizontally across the screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Domain 1: Systems & Low-Level C */}
          <div className="rounded-2xl bg-[#161824]/85 border border-[#25293a] p-7 sm:p-9 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-blue-400">
                <Terminal className="w-5 h-5" />
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                  {lang === "fr" ? "Systèmes Unix & C Bas Niveau" : "Unix Systems & Low-Level C"}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                {lang === "fr"
                  ? "Programmation système POSIX, concurrence multi-threads (pthreads), communications réseau par sockets TCP/IP et gestion de la mémoire sans fuite auditée sous Valgrind Memcheck."
                  : "POSIX systems programming, multi-threaded concurrency (pthreads), TCP/IP socket communications, and leak-free memory management verified under Valgrind Memcheck."}
              </p>
            </div>

            {/* Horizontal flow chips */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {systemsSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm text-neutral-200 bg-[#1d202e] border border-[#2c3042] font-normal hover:border-neutral-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Domain 2: Modern Fullstack Web & DevOps */}
          <div className="rounded-2xl bg-[#161824]/85 border border-[#25293a] p-7 sm:p-9 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-indigo-400">
                <Globe className="w-5 h-5" />
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                  {lang === "fr" ? "Web Fullstack & Infrastructure" : "Fullstack Web & Infrastructure"}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                {lang === "fr"
                  ? "Développement d'applications performantes avec Next.js 16 (App Router), TypeScript 5 strict sans aucun type any, schémas relationnels PostgreSQL et conteneurisation Docker."
                  : "Modern applications built with Next.js 16 (App Router), 100% strict TypeScript without any types, relational PostgreSQL schemas, and Docker containerization."}
              </p>
            </div>

            {/* Horizontal flow chips */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {webDevopsSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm text-neutral-200 bg-[#1d202e] border border-[#2c3042] font-normal hover:border-neutral-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering Principles - Simple and unboxed */}
        <div className="pt-8 border-t border-[#232635] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-300">
          <div className="space-y-1">
            <span className="font-semibold text-white block">
              {lang === "fr" ? "Mémoire & Stabilité" : "Memory & Stability"}
            </span>
            <p className="text-neutral-400 font-light leading-relaxed">
              {lang === "fr"
                ? "Code C audité sous Valgrind Memcheck. Zéro fuite mémoire et gestion stricte des signaux Unix."
                : "C code verified with Valgrind Memcheck. Zero memory leaks and strict Unix signal handling."}
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-white block">
              {lang === "fr" ? "Typage Strict End-to-End" : "Strict End-to-End Typing"}
            </span>
            <p className="text-neutral-400 font-light leading-relaxed">
              {lang === "fr"
                ? "TypeScript en mode strict sans type any. Validation Zod et requêtes SQL typées."
                : "TypeScript in strict mode with zero any types. Zod validation and typed SQL queries."}
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-white block">
              {lang === "fr" ? "Respect des Protocoles" : "Standard Protocols"}
            </span>
            <p className="text-neutral-400 font-light leading-relaxed">
              {lang === "fr"
                ? "Implémentation fidèle des spécifications POSIX, des RFC réseau (TCP/IP) et normes WCAG."
                : "Strict compliance with POSIX standards, TCP/IP RFCs, and WCAG accessibility."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
