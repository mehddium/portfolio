"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfolioData";
import { ArrowUpRight, ArrowRight } from "lucide-react";
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

  return (
    <section id="projets" className="py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-t border-[#232635]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="text-xs text-blue-400 font-medium">
            {lang === "fr" ? "Réalisations d'ingénierie" : "Engineering Deliverables"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#f0f2f5]">
            {lang === "fr" ? "Projets & études de cas" : "Projects & Case Studies"}
          </h2>
          <p className="text-sm sm:text-base text-[#8e94a5] font-light leading-relaxed">
            {lang === "fr"
              ? "Architecture logicielle, systèmes concurrents, programmation réseau POSIX et applications web de production."
              : "Software architecture, concurrent systems, POSIX network programming, and production web applications."}
          </p>
        </div>

        {/* Filter Tabs - Dedicated full-width line, strictly 1 single horizontal row */}
        <div className="pt-2 border-b border-[#232635] overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 whitespace-nowrap min-w-max pb-3 text-sm">
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
                  className={`pb-1 transition-colors flex items-center gap-2 font-medium relative ${
                    isActive
                      ? "text-[#f0f2f5]"
                      : "text-[#8e94a5] hover:text-[#f0f2f5]"
                  }`}
                >
                  <span>{cat.label[lang]}</span>
                  <span className={`text-xs ${isActive ? "text-blue-400" : "text-neutral-500"}`}>
                    {count}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Project Index (No repetitive grey box cards!) */}
        <div className="divide-y divide-[#232635]">
          {filteredProjects.map((project) => {
            const t = project.translations[lang];

            return (
              <article
                key={project.id}
                className="py-12 first:pt-4 last:pb-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start group"
              >
                {/* Left Column: Metadata, Title & Actions (lg:col-span-5) */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Category & Year */}
                  <div className="flex items-center gap-2.5 text-xs">
                    <span className="text-blue-400 uppercase tracking-wider font-semibold font-sans">
                      {project.category}
                    </span>
                    <span className="text-neutral-600">&middot;</span>
                    <span className="font-mono text-[#8e94a5]">{project.year}</span>
                    <span className="text-neutral-600">&middot;</span>
                    <span className="text-emerald-400 font-sans font-medium">
                      {t.metricBadge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#f0f2f5] tracking-tight group-hover:text-blue-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-[#8e94a5] font-light leading-relaxed">
                    {t.tagline}
                  </p>

                  {/* Direct Action Links */}
                  <div className="flex items-center gap-5 pt-3 text-xs font-medium">
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 text-[#f0f2f5] hover:text-blue-400 transition-colors"
                    >
                      <span>{lang === "fr" ? "Étude de cas détaillée" : "View case study"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#8e94a5] hover:text-[#f0f2f5] transition-colors"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Problem, Architecture & Tech Stack (lg:col-span-7) */}
                <div className="lg:col-span-7 space-y-5 text-[#8e94a5]">
                  {/* Detailed Description */}
                  <p className="text-sm sm:text-base font-light leading-relaxed text-[#f0f2f5]">
                    {t.description}
                  </p>

                  {/* Architecture & Engineering Specifics */}
                  <div className="space-y-2 pt-1 text-xs sm:text-sm">
                    <span className="text-xs uppercase tracking-wider text-[#8e94a5] font-medium block">
                      {lang === "fr" ? "Choix d'architecture & réalisations" : "Architecture & Deliverables"}
                    </span>
                    <p className="text-[#8e94a5] font-light leading-relaxed">
                      {project.caseStudy.architecture[lang]}
                    </p>
                  </div>

                  {/* Technologies list */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs text-[#f0f2f5] bg-[#181b26] border border-[#232635] font-normal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
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
