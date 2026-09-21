"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, ChevronDown, ChevronUp, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function LedgerProjects() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "systems" | "network" | "web">("all");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(portfolioData.projects[0]?.id || null);

  const categories = [
    { id: "all", label: { en: "All Projects", fr: "Tous les projets" } },
    { id: "systems", label: { en: "C & Systems", fr: "Systèmes & C" } },
    { id: "network", label: { en: "POSIX Networking", fr: "Réseau POSIX" } },
    { id: "web", label: { en: "Fullstack Web", fr: "Web Fullstack" } },
  ] as const;

  const filteredProjects =
    activeCategory === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  const toggleProject = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projets" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#222533]">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#222533]">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs text-[#3b82f6] font-medium">
              {lang === "fr" ? "Dépôts concrets & architecture" : "Engineering deliverables"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f5f8] uppercase">
              {lang === "fr" ? "Registre des réalisations" : "Engineering Ledger"}
            </h2>
            <p className="text-sm text-[#8b90a0] font-light leading-relaxed">
              {lang === "fr"
                ? "Dépôts concrets, protocoles réseau standards, allocateurs mémoire C et plateformes web réactives."
                : "Low-level POSIX daemons, standard network protocols, C heap allocators, and reactive web applications."}
            </p>
          </div>

          <div className="text-xs font-mono text-[#8b90a0] shrink-0">
            TOTAL DELIVERABLES: [{filteredProjects.length} / {portfolioData.projects.length}]
          </div>
        </div>

        {/* Filter Strip - Dedicated full-width horizontal row */}
        <div className="border-b border-[#222533] overflow-x-auto no-scrollbar pb-3">
          <div className="flex items-center gap-6 whitespace-nowrap min-w-max text-xs font-medium uppercase tracking-wider">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "all"
                  ? portfolioData.projects.length
                  : portfolioData.projects.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`pb-1 transition-colors flex items-center gap-2 relative ${
                    isActive ? "text-[#f4f5f8] font-bold" : "text-[#8b90a0] hover:text-[#f4f5f8]"
                  }`}
                >
                  <span>{cat.label[lang]}</span>
                  <span className={`font-mono text-[11px] ${isActive ? "text-[#3b82f6]" : "text-neutral-600"}`}>
                    ({count})
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3b82f6]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* The Architectural Ledger Table */}
        <div className="border border-[#222533] divide-y divide-[#222533] bg-[#0e1017]">
          {/* Table Header (Hidden on small screens) */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 bg-[#151822] text-[11px] font-mono uppercase tracking-wider text-[#8b90a0]">
            <div className="col-span-1">REF</div>
            <div className="col-span-1">DATE</div>
            <div className="col-span-4">DESIGNATION & REPERTOIRE</div>
            <div className="col-span-3">SPECIFICATION ARCHITECTURALE</div>
            <div className="col-span-2">METRIQUE VERIFIEE</div>
            <div className="col-span-1 text-right">DOSSIER</div>
          </div>

          {/* Table Rows */}
          {filteredProjects.map((project, idx) => {
            const isExpanded = expandedProjectId === project.id;
            const t = project.translations[lang];
            const cs = project.caseStudy;
            const refNumber = `#${String(idx + 1).padStart(2, "0")}`;

            return (
              <div key={project.id} className="transition-colors hover:bg-[#12141d]/60">
                {/* Ledger Summary Row */}
                <div
                  onClick={() => toggleProject(project.id)}
                  className="px-4 sm:px-6 py-5 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-4 items-center select-none"
                >
                  {/* Ref & Year */}
                  <div className="flex items-center gap-3 lg:col-span-2 text-xs font-mono">
                    <span className="text-[#3b82f6] font-semibold">{refNumber}</span>
                    <span className="text-neutral-600 lg:hidden">/</span>
                    <span className="text-[#8b90a0]">{project.year}</span>
                    <span className="text-neutral-600 lg:hidden">/</span>
                    <span className="text-blue-400 uppercase text-[11px] font-sans font-semibold lg:hidden">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="lg:col-span-4 space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#f4f5f8] tracking-tight hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#8b90a0] font-light line-clamp-1">
                      {t.tagline}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="hidden lg:flex flex-wrap gap-1.5 col-span-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] bg-[#151822] text-[#f4f5f8] border border-[#222533] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] text-neutral-500 font-mono self-center">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Metric Badge */}
                  <div className="lg:col-span-2 text-xs font-sans font-semibold text-emerald-400">
                    {t.metricBadge}
                  </div>

                  {/* Action Toggle */}
                  <div className="flex items-center justify-between lg:justify-end gap-2 col-span-1 text-xs text-[#8b90a0]">
                    <span className="lg:hidden text-[11px] font-mono uppercase">
                      {isExpanded ? "Fermer le dossier" : "Dossier technique"}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#3b82f6]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#8b90a0]" />
                    )}
                  </div>
                </div>

                {/* Inline Architectural Dossier (Zero popup modal!) */}
                {isExpanded && (
                  <div className="border-t border-[#222533] bg-[#151822]/80 px-4 sm:px-8 py-8 animate-ledgerExpand space-y-8">
                    {/* Dossier Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#222533] pb-6">
                      <div className="space-y-2 max-w-3xl">
                        <div className="flex items-center gap-3 text-xs font-mono text-[#8b90a0]">
                          <span className="text-[#3b82f6] font-semibold">DOSSIER TECHNIQUE {refNumber}</span>
                          <span>&middot;</span>
                          <span className="uppercase text-blue-400 font-sans font-medium">{project.category}</span>
                          <span>&middot;</span>
                          <span>ANNEE {project.year}</span>
                        </div>
                        <h4 className="text-2xl font-bold tracking-tight text-[#f4f5f8]">
                          {project.title}
                        </h4>
                        <p className="text-sm text-[#8b90a0] font-light leading-relaxed">
                          {t.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f4f5f8] text-[#0e1017] font-semibold text-xs hover:bg-white transition-colors"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>GitHub Source</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Technical Specifications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                      {/* Left: Problem & Role */}
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h5 className="text-xs font-semibold text-[#3b82f6]">
                            {lang === "fr" ? "Problématique d'ingénierie" : "Engineering Problem"}
                          </h5>
                          <p className="text-[#8b90a0] font-light leading-relaxed text-xs sm:text-sm">
                            {cs.problem[lang]}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h5 className="text-xs font-semibold text-[#3b82f6]">
                            {lang === "fr" ? "Architecture & Choix techniques" : "Architecture & Technical Choices"}
                          </h5>
                          <p className="text-[#8b90a0] font-light leading-relaxed text-xs sm:text-sm">
                            {cs.architecture[lang]}
                          </p>
                        </div>
                      </div>

                      {/* Right: Deliverables & Metrics */}
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h5 className="text-xs font-semibold text-[#3b82f6]">
                            {lang === "fr" ? "Résultats vérifiés" : "Measured Invariants"}
                          </h5>
                          <div className="space-y-2 pt-1">
                            {cs.metrics[lang].map((m, mIdx) => (
                              <div key={mIdx} className="flex items-start gap-2.5 text-xs text-[#f4f5f8] font-light">
                                <span className="w-1.5 h-1.5 bg-emerald-400 shrink-0 mt-1.5" />
                                <span>{m}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h5 className="text-xs font-semibold text-[#3b82f6]">
                            {lang === "fr" ? "Enseignement technique" : "Core Learning"}
                          </h5>
                          <p className="text-xs text-[#8b90a0] font-light leading-relaxed">
                            {cs.learnings[lang]}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Technologies Specification Strip */}
                    <div className="pt-4 border-t border-[#222533] flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-mono text-[#8b90a0] mr-2">TECH STACK:</span>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#0e1017] text-[#f4f5f8] border border-[#222533] font-mono text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Code Snippet if present */}
                    {cs.codeSnippet && (
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center justify-between text-xs font-mono text-[#8b90a0]">
                          <span className="flex items-center gap-2">
                            <Code2 className="w-3.5 h-3.5 text-[#3b82f6]" />
                            <span>{cs.codeSnippet.title}</span>
                          </span>
                          <span className="uppercase text-[11px]">{cs.codeSnippet.language}</span>
                        </div>
                        <div className="p-4 bg-[#0e1017] border border-[#222533] overflow-x-auto text-xs text-[#f4f5f8] font-mono leading-relaxed">
                          <pre>
                            <code>{cs.codeSnippet.code}</code>
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
