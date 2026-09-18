"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfolioData";
import { ArrowUpRight, Cpu, Globe, Network } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<"all" | "systems" | "web">("all");

  const projects = portfolioData.projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "systems") return p.category === "systems" || p.category === "network";
    if (filter === "web") return p.category === "web";
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-neutral-200/80">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-950">
            {lang === "fr" ? "Projets d'ingénierie" : "Engineering Projects"}
          </h2>
          <p className="text-xs font-mono text-neutral-500 mt-1">
            {lang === "fr" ? "Architecture système & plateformes web" : "Systems architecture & web platforms"}
          </p>
        </div>

        {/* Minimal Category Filter (Text based, not pill cards) */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <button
            onClick={() => setFilter("all")}
            className={`transition-colors ${
              filter === "all" ? "text-neutral-950 font-bold border-b border-neutral-950 pb-0.5" : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            {lang === "fr" ? "Tous" : "All"}
          </button>
          <button
            onClick={() => setFilter("systems")}
            className={`transition-colors ${
              filter === "systems" ? "text-neutral-950 font-bold border-b border-neutral-950 pb-0.5" : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            {lang === "fr" ? "Systèmes & C" : "Systems & C"}
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`transition-colors ${
              filter === "web" ? "text-neutral-950 font-bold border-b border-neutral-950 pb-0.5" : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            Web
          </button>
        </div>
      </div>

      {/* Projects List — Open, airy, boundary-less */}
      <div className="space-y-20">
        {projects.map((project) => (
          <article
            key={project.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-neutral-200/60 first:border-t-0 first:pt-0"
          >
            {/* Left: Metadata & Tech (4 cols) */}
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                <span>{project.year}</span>
                <span>/</span>
                <span className="uppercase text-neutral-700">{project.category}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <div className="pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-600 hover:text-neutral-950 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source code</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
              )}
            </div>

            {/* Right: Description & Architecture Schematic (8 cols) */}
            <div className="md:col-span-8 space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-950">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-neutral-700">
                  {project.translations[lang].tagline}
                </p>
              </div>

              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                {project.translations[lang].description}
              </p>

              {/* Minimal SVG Technical Schematic representing the architecture */}
              <div className="pt-3">
                {project.category === "network" ? (
                  /* TCP Sockets Multiplexing Schematic */
                  <div className="p-4 bg-neutral-50 rounded border border-neutral-200/60">
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-2">
                      <span className="flex items-center gap-1.5">
                        <Network className="w-3.5 h-3.5 text-blue-600" />
                        <span>POSIX Socket Multiplexing Flow</span>
                      </span>
                      <span>RFC-Compliant</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div className="p-2 bg-white rounded border border-neutral-200">
                        <span className="text-neutral-900 font-medium block">Client Socket</span>
                        <span className="text-[10px] text-neutral-500">AF_INET / TCP</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-neutral-200">
                        <span className="text-neutral-900 font-medium block">select / poll</span>
                        <span className="text-[10px] text-neutral-500">I/O Multiplex</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-neutral-200">
                        <span className="text-neutral-900 font-medium block">Worker Pool</span>
                        <span className="text-[10px] text-neutral-500">pthreads</span>
                      </div>
                    </div>
                  </div>
                ) : project.category === "systems" ? (
                  /* Unix Process / Memory Allocation Schematic */
                  <div className="p-4 bg-neutral-50 rounded border border-neutral-200/60">
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-2">
                      <span className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Process & Memory Pipeline</span>
                      </span>
                      <span>POSIX.1</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div className="p-2 bg-white rounded border border-neutral-200">
                        <span className="text-neutral-900 font-medium block">fork() / execvp()</span>
                        <span className="text-[10px] text-neutral-500">Process Lifecycle</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-neutral-200">
                        <span className="text-neutral-900 font-medium block">Pipes & Signals</span>
                        <span className="text-[10px] text-neutral-500">IPC Redirections</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-neutral-200">
                        <span className="text-neutral-900 font-medium block">malloc / sbrk</span>
                        <span className="text-[10px] text-neutral-500">Heap Coalescing</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Fullstack Web Reactive Data Flow Schematic */
                  <div className="p-4 bg-neutral-50 rounded border border-neutral-200/60">
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-2">
                      <span className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Next.js 15 Fullstack Pipeline</span>
                      </span>
                      <span>TypeScript</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div className="p-2 bg-white rounded border border-neutral-200">
                        <span className="text-neutral-900 font-medium block">App Router</span>
                        <span className="text-[10px] text-neutral-500">Server Components</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-neutral-200">
                        <span className="text-neutral-900 font-medium block">Server Actions</span>
                        <span className="text-[10px] text-neutral-500">Optimistic UI</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-neutral-200">
                        <span className="text-neutral-900 font-medium block">PostgreSQL</span>
                        <span className="text-[10px] text-neutral-500">Relational Schema</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
