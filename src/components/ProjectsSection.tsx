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
    { id: "all", label: { en: "All", fr: "Tous" } },
    { id: "systems", label: { en: "C & Systems", fr: "Systèmes C" } },
    { id: "network", label: { en: "Networking", fr: "Réseau" } },
    { id: "web", label: { en: "Fullstack Web", fr: "Web Fullstack" } },
  ] as const;

  const filteredProjects =
    activeCategory === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projets" className="py-20 px-6 sm:px-8 max-w-5xl mx-auto border-t border-[#262935]">
      <div className="space-y-12">
        {/* Section Header with Minimal Filters */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              {lang === "fr" ? "Projets & études de cas" : "Featured Projects"}
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              {lang === "fr"
                ? "Conception technique, choix d'architecture et résultats mesurés."
                : "Technical implementation, architecture trade-offs, and verified results."}
            </p>
          </div>

          {/* Minimal Filter text links */}
          <div className="flex items-center gap-4 text-xs font-medium">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`pb-1 transition-colors ${
                    isActive
                      ? "text-white border-b-2 border-blue-500"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Project List (No repetitive cards!) */}
        <div className="divide-y divide-[#262935]">
          {filteredProjects.map((project) => {
            const t = project.translations[lang];

            return (
              <article
                key={project.id}
                className="py-10 first:pt-4 last:pb-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                {/* Left Column: Metadata, Title & Actions */}
                <div className="md:col-span-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="uppercase tracking-wider font-medium text-neutral-400">
                      {project.category}
                    </span>
                    <span>&middot;</span>
                    <span>{project.year}</span>
                    <span className="text-emerald-400 ml-1">
                      &middot; {t.metricBadge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-normal">
                    {t.tagline}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-2 text-xs">
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      <span>{lang === "fr" ? "Étude de cas détaillée" : "View case study"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-neutral-400 hover:text-neutral-200 transition-colors"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Description, Highlights & Tech Stack */}
                <div className="md:col-span-7 space-y-4 text-sm text-neutral-300 font-light leading-relaxed">
                  <p>{t.description}</p>

                  <ul className="space-y-1.5 text-xs text-neutral-400">
                    {t.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack inline */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs text-neutral-400 bg-[#1e2029] border border-[#2b2e3c]"
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
