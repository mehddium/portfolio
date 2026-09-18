"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfolioData";
import {
  FolderGit2,
  ArrowUpRight,
  CheckCircle2,
  Check,
  Code2,
  Cpu,
  Network,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectInspector() {
  const { lang } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState<string>(portfolioData.projects[0].id);
  const [categoryFilter, setCategoryFilter] = useState<"all" | "web" | "systems" | "network">("all");

  const categories = [
    { id: "all", label: { en: "All Projects", fr: "Tous les projets" } },
    { id: "web", label: { en: "Web Fullstack", fr: "Web Fullstack" } },
    { id: "systems", label: { en: "C & Systems", fr: "C & Systèmes" } },
    { id: "network", label: { en: "Networking", fr: "Réseaux & Outils" } },
  ] as const;

  const filteredProjects = portfolioData.projects.filter(
    (p) => categoryFilter === "all" || p.category === categoryFilter
  );

  const selectedProject =
    portfolioData.projects.find((p) => p.id === selectedProjectId) || portfolioData.projects[0];

  const selectedTrans = selectedProject.translations[lang];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Workspace Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--m3-outline-variant)]/60">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--m3-secondary-container)] text-[var(--m3-on-secondary-container)] text-xs font-semibold mb-1">
            <FolderGit2 className="w-3.5 h-3.5 text-[#0B57D0] dark:text-[#A8C7FA]" />
            <span>Workspace // {lang === "fr" ? "Inspecteur de Projets" : "Projects Inspector"}</span>
          </div>
          <h2 className="text-2xl font-bold text-[var(--m3-on-surface)]">
            {lang === "fr" ? "Projets & Livrables Techniques" : "Engineering Deliverables"}
          </h2>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isSelected = categoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[var(--m3-primary)] text-[var(--m3-on-primary)] shadow-xs"
                    : "bg-[var(--m3-surface-container-high)] text-[var(--m3-on-surface-variant)] hover:text-[var(--m3-on-surface)]"
                }`}
              >
                {isSelected && <Check className="w-3 h-3" />}
                <span>{cat.label[lang]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Master-Detail Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Master List (Projects Selector) */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-mono text-[var(--m3-on-surface-variant)] uppercase tracking-wider px-2 block">
            {lang === "fr" ? "Sélectionner un projet :" : "Select a project :"}
          </span>

          <div className="space-y-2.5">
            {filteredProjects.map((project) => {
              const isSelected = project.id === selectedProjectId;
              const t = project.translations[lang];

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProjectId(project.id)}
                  className={`p-4 rounded-[22px] border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-[var(--m3-surface-container-high)] border-[var(--m3-primary)] shadow-sm"
                      : "bg-[var(--m3-surface-container-low)] border-[var(--m3-outline-variant)]/60 hover:bg-[var(--m3-surface-container)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--m3-primary-container)] text-[var(--m3-on-primary-container)] text-[10px] font-bold uppercase">
                      {project.category}
                    </span>
                    <span className="text-[var(--m3-on-surface-variant)]">{project.year}</span>
                  </div>

                  <h3 className="font-bold text-sm text-[var(--m3-on-surface)] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[var(--m3-on-surface-variant)] line-clamp-2">
                    {t.tagline}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Detail Inspector */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-[32px] bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)] space-y-6">
          {/* Detail Header */}
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-[var(--m3-on-surface-variant)] mb-2">
              <span className="px-3 py-1 rounded-full bg-[var(--m3-secondary-container)] text-[var(--m3-on-secondary-container)] font-semibold uppercase">
                {selectedProject.category} // {selectedProject.year}
              </span>
              <span>ID: {selectedProject.id}</span>
            </div>

            <h3 className="text-2xl font-bold text-[var(--m3-on-surface)] tracking-tight mb-1">
              {selectedProject.title}
            </h3>
            <p className="text-xs font-mono text-[var(--m3-primary)] font-semibold mb-4">
              {selectedTrans.tagline}
            </p>

            <p className="text-sm text-[var(--m3-on-surface-variant)] leading-relaxed font-normal">
              {selectedTrans.description}
            </p>
          </div>

          {/* Technical Specs & Highlights */}
          <div className="p-4 rounded-2xl bg-[var(--m3-surface)] border border-[var(--m3-outline-variant)]/60 space-y-2.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--m3-primary)] block">
              {lang === "fr" ? "POINTS CLÉS & SPÉCIFICATIONS TECHNIQUES :" : "KEY TECHNICAL HIGHLIGHTS :"}
            </span>

            <div className="space-y-2 font-mono text-xs text-[var(--m3-on-surface)]">
              {selectedTrans.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34A853] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Chips */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-[var(--m3-on-surface-variant)] uppercase tracking-wider block">
              {lang === "fr" ? "Technologies & Outils :" : "Technologies & Tooling :"}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[var(--m3-surface-container-high)] text-xs font-mono font-medium text-[var(--m3-on-surface)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-[var(--m3-outline-variant)]/60 flex flex-wrap items-center gap-3">
            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--m3-primary)] text-[var(--m3-on-primary)] font-medium text-xs shadow-xs hover:shadow-md active:scale-95 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{lang === "fr" ? "Voir le Code Source" : "View Source Code"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {selectedProject.liveUrl && (
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[var(--m3-tertiary-container)] text-[var(--m3-on-tertiary-container)] font-semibold text-xs transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
