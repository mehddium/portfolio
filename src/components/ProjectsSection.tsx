"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfolioData";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
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
        {/* Section Header & Clean Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
              {lang === "fr" ? "Projets & études de cas" : "Projects & Case Studies"}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              {lang === "fr"
                ? "Conception logicielle, architecture système, benchmarks réels et code audité sans fuite mémoire."
                : "Software engineering, systems architecture, verified benchmarks, and leak-free audited codebases."}
            </p>
          </div>

          {/* Clean, stable filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#171924] border border-[#25293a] text-xs font-medium self-start sm:self-auto">
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
                      ? "bg-[#252a3b] text-white shadow-sm"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  <span>{cat.label[lang]}</span>
                  <span className={`text-[11px] ${isActive ? "text-blue-300 font-semibold" : "text-neutral-500"}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Unified Project Grid - Consistent presentation for all deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const t = project.translations[lang];
            // If the total count is odd and this is the last card in "all" view, let it span 2 columns on lg
            const isLastOdd = activeCategory === "all" && filteredProjects.length % 2 !== 0 && idx === filteredProjects.length - 1;

            return (
              <article
                key={project.id}
                className={`rounded-2xl bg-[#161824]/85 border border-[#25293a] hover:border-[#383e54] transition-all p-7 sm:p-9 flex flex-col justify-between group shadow-sm ${
                  isLastOdd ? "lg:col-span-2" : ""
                }`}
              >
                <div className="space-y-5">
                  {/* Top Metadata row - Clean text, no cards-in-cards */}
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-neutral-400 font-medium">
                      <span className="uppercase tracking-wider text-blue-400 font-semibold text-[11px]">
                        {project.category}
                      </span>
                      <span className="text-neutral-600">&middot;</span>
                      <span>{project.year}</span>
                    </div>

                    <span className="text-emerald-400 text-xs font-medium">
                      {t.metricBadge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-normal">
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
                        <span className="leading-normal">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Tech Stack & Actions */}
                <div className="pt-7 mt-6 border-t border-[#222533] space-y-4">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs text-neutral-300 bg-[#1c1f2b] border border-[#272b3b]"
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
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
