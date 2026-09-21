"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfolioData";
import { ArrowUpRight, ArrowRight, Check, Sparkles, Terminal, Globe, Cpu } from "lucide-react";
import CaseStudyModal from "@/components/CaseStudyModal";

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "systems" | "network" | "web">("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: { en: "All Projects", fr: "Tous les projets" } },
    { id: "systems", label: { en: "C & Systems", fr: "Systèmes & C" } },
    { id: "network", label: { en: "Networking", fr: "Réseau POSIX" } },
    { id: "web", label: { en: "Fullstack Web", fr: "Web Fullstack" } },
  ] as const;

  const filteredProjects =
    activeCategory === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "systems":
        return <Cpu className="w-3.5 h-3.5 text-blue-400" />;
      case "network":
        return <Terminal className="w-3.5 h-3.5 text-emerald-400" />;
      case "web":
        return <Globe className="w-3.5 h-3.5 text-indigo-400" />;
      default:
        return null;
    }
  };

  // Split into featured and secondary when in "all" view, or show all in grid
  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projets" className="py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-t border-[#232737]">
      <div className="space-y-12">
        {/* Section Header with Category Badges */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-medium text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Ingénierie & Réalisations" : "Engineering & Deliverables"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
              {lang === "fr" ? "Projets & études de cas" : "Projects & Case Studies"}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              {lang === "fr"
                ? "Conception logicielle, choix d'architecture, benchmarks réels et code audité sans fuite mémoire."
                : "Software engineering, architectural choices, verified benchmarks, and leak-free audited codebases."}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#171924] p-1.5 rounded-xl border border-[#272b3c] text-xs font-medium self-start">
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
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#252a3b] text-white shadow-sm"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  <span>{cat.label[lang]}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-blue-500/20 text-blue-300" : "bg-[#1f2230] text-neutral-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Projects Grid (Wide 2-Column Showcase) */}
        {featuredProjects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => {
              const t = project.translations[lang];

              return (
                <article
                  key={project.id}
                  className="rounded-2xl bg-[#161824]/90 border border-[#262a3c] hover:border-[#3d435e] transition-all p-7 sm:p-9 flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-5">
                    {/* Top Metadata row */}
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1d202e] border border-[#2c3144] font-medium text-neutral-300">
                          {getCategoryIcon(project.category)}
                          <span className="capitalize">{project.category}</span>
                        </span>
                        <span className="text-neutral-500">&middot;</span>
                        <span className="text-neutral-400">{project.year}</span>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40">
                        {t.metricBadge}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-normal font-light">
                        {t.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-neutral-300 font-light leading-relaxed">
                      {t.description}
                    </p>

                    {/* Architectural Highlights */}
                    <ul className="space-y-2 text-xs text-neutral-300 pt-1">
                      {t.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Footer: Tech Stack & Actions */}
                  <div className="pt-7 mt-6 border-t border-[#232737] space-y-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs text-neutral-300 bg-[#1b1d28] border border-[#292d3e]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600/15 hover:bg-blue-600/25 text-blue-300 border border-blue-500/30 font-medium transition-all"
                      >
                        <span>{lang === "fr" ? "Étude de cas complète" : "Full Case Study"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-neutral-400 hover:text-white px-2 py-1.5 transition-colors"
                        >
                          <span>GitHub</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Secondary Projects Grid (Widescreen 3-Column Grid) */}
        {secondaryProjects.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              {lang === "fr" ? "Autres réalisations notables" : "Other Notable Deliverables"}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryProjects.map((project) => {
                const t = project.translations[lang];

                return (
                  <article
                    key={project.id}
                    className="rounded-xl bg-[#161824]/80 border border-[#25293a] hover:border-[#383e54] transition-all p-6 flex flex-col justify-between group shadow-sm"
                  >
                    <div className="space-y-4">
                      {/* Top row */}
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1c1f2b] border border-[#2a2e40] text-neutral-300">
                          {getCategoryIcon(project.category)}
                          <span className="capitalize">{project.category}</span>
                        </span>

                        <span className="text-emerald-400 text-[11px] font-medium">
                          {t.metricBadge}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1">
                        <h4 className="text-lg font-semibold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-xs text-neutral-400 font-light leading-normal">
                          {t.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                        {t.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-1 text-xs text-neutral-400">
                        {t.highlights.slice(0, 2).map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-400">&bull;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer */}
                    <div className="pt-5 mt-4 border-t border-[#222635] space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] text-neutral-400 bg-[#1a1c27] border border-[#272a39]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1 text-xs">
                        <button
                          onClick={() => setSelectedCaseStudy(project)}
                          className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors"
                        >
                          <span>{lang === "fr" ? "Étude de cas" : "Case study"}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-neutral-200 inline-flex items-center gap-1 transition-colors"
                          >
                            <span>GitHub</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
