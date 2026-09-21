"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfolioData";
import {
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import CaseStudyModal from "@/components/CaseStudyModal";

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "systems" | "network" | "web">("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: { en: "All Projects", fr: "Tous les Projets" } },
    { id: "systems", label: { en: "C & Systems", fr: "C & Systèmes" } },
    { id: "network", label: { en: "POSIX Network", fr: "Réseau POSIX" } },
    { id: "web", label: { en: "Fullstack Web", fr: "Web Fullstack" } },
  ] as const;

  const filteredProjects =
    activeCategory === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projets" className="py-20 sm:py-28 px-4 sm:px-8 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{lang === "fr" ? "01 // Projets & Cas Concrets" : "01 // Concrete Case Studies"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {lang === "fr" ? "Réalisations d'Ingénierie" : "Featured Engineering Deliverables"}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl">
              {lang === "fr"
                ? "Une sélection de projets complexes documentés selon le principe de la preuve contextualisée : problème résolu, architecture, résultats chiffrés et code source."
                : "Curated engineering projects documented with contextualized evidence: problem solved, architectural trade-offs, measured results, and verified code."}
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs self-start md:self-auto">
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
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-emerald-500 text-black font-semibold shadow-sm"
                      : "text-neutral-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <span>{cat.label[lang]}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-black/20 text-black font-bold" : "bg-white/10 text-neutral-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const t = project.translations[lang];
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`p-6 sm:p-8 rounded-2xl bg-white/[0.02] border transition-all flex flex-col justify-between group relative overflow-hidden ${
                  isFeatured
                    ? "border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.03]"
                    : "border-white/[0.06] hover:border-white/20 hover:bg-white/[0.03]"
                }`}
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider text-[10px]">
                        {project.category}
                      </span>
                      <span className="text-neutral-500">{project.year}</span>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono">
                      {t.metricBadge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-1">
                      {t.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {t.description}
                  </p>

                  {/* Concrete Highlights list */}
                  <div className="space-y-2 pt-1 font-mono text-xs text-neutral-400">
                    {t.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Technologies & Action CTAs */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded bg-white/[0.05] text-neutral-300 text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-white/[0.02] text-neutral-500 text-[10px]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-colors font-semibold"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{lang === "fr" ? "Étude de cas" : "Case Study"}</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-neutral-300 hover:text-white transition-colors"
                        title={lang === "fr" ? "Code sur GitHub" : "View Code on GitHub"}
                      >
                        <GitHubIcon className="w-3.5 h-3.5 fill-current" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
