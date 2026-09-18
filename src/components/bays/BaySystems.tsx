"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, Terminal, Network, ShieldCheck, ExternalLink, Code2, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function BaySystems() {
  const { lang } = useLanguage();
  const [activeProjectTab, setActiveProjectTab] = useState(0);

  const systemsProjects = portfolioData.projects.filter(
    (p) => p.category === "systems" || p.category === "network"
  );

  const activeProject = systemsProjects[activeProjectTab] || systemsProjects[0];

  return (
    <section className="horizontal-bay w-[94vw] sm:w-[86vw] md:w-[78vw] lg:w-[70vw] min-w-[320px] md:min-w-[780px] bg-[#07080b] flex flex-col justify-between select-text">
      {/* Bay Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="text-sky-400 font-bold">01</span>
          <span className="text-neutral-500">// LOW-LEVEL POSIX & SYSTEMS LAB</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-400">
          <Cpu className="w-3.5 h-3.5 text-sky-400" />
          <span>C99 // POSIX.1-2008 // LINUX</span>
        </div>
      </div>

      {/* Main Content: Split Blueprint View */}
      <div className="my-auto py-4 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left: Project Selector & Specs (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {lang === "fr" ? "Ingénierie Système & Réseau" : "Systems & Network Core"}
            </h2>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              {lang === "fr"
                ? "Conception de serveurs TCP multi-threads, gestion des signaux POSIX, allocation mémoire dynamique et dissection de paquets binaires."
                : "Multi-threaded TCP servers, POSIX signals and concurrency, custom heap allocation algorithms, and binary packet dissection."}
            </p>
          </div>

          {/* Project Tabs / Cards */}
          <div className="space-y-2 pt-2">
            {systemsProjects.map((project, idx) => {
              const isSelected = activeProjectTab === idx;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProjectTab(idx)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    isSelected
                      ? "bg-white/[0.05] border-sky-400/40 text-white"
                      : "bg-white/[0.01] border-white/[0.05] text-neutral-400 hover:text-neutral-200 hover:border-white/[0.12]"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-semibold text-sky-400">
                      SYS_0{idx + 1}
                    </span>
                    <span className="text-[10px] text-neutral-500">{project.year}</span>
                  </div>
                  <div className="text-sm font-semibold truncate text-neutral-100">
                    {project.title}
                  </div>
                  <div className="text-[11px] text-neutral-400 truncate mt-0.5">
                    {project.translations[lang].tagline}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Technical Blueprint & Deep Dive (7 cols) */}
        <div className="lg:col-span-7 p-4 sm:p-5 rounded-lg bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between space-y-4">
          {/* Active Project Title & Metadata */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-xs font-mono">
              <span className="text-sky-400 font-bold uppercase tracking-wide">
                {activeProject.title}
              </span>
              <div className="flex items-center gap-2">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-neutral-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>SOURCE</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {activeProject.translations[lang].description}
            </p>

            {/* Technical Highlights with Monospace Bullet Badges */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                {lang === "fr" ? "Spécifications & Implémentation :" : "Core Architectural Highlights:"}
              </span>
              <ul className="space-y-1.5">
                {activeProject.translations[lang].highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="text-xs text-neutral-300 flex items-start gap-2 bg-white/[0.015] p-2 rounded border border-white/[0.04]"
                  >
                    <span className="text-sky-400 font-mono text-[10px] mt-0.5">▶</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Badges Matrix */}
          <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-1.5 items-center">
            <span className="text-[10px] font-mono text-neutral-500 mr-1">STACK:</span>
            {activeProject.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/40 text-sky-300 border border-sky-800/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bay Footer Status */}
      <div className="border-t border-white/[0.06] pt-3 flex items-center justify-between text-[11px] font-mono text-neutral-500">
        <span>POSIX THREADS // IPC // SBRK/MMAP HEAP // RAW SOCKETS</span>
        <span className="hidden sm:inline text-neutral-600">SECTION 01 / 04</span>
      </div>
    </section>
  );
}
