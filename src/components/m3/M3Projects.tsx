"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfolioData";
import { FolderGit2, ArrowUpRight, CheckCircle2, Check } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function M3Projects() {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<"all" | "web" | "systems" | "network">("all");

  const categories = [
    { id: "all", label: { en: "All Projects", fr: "Tous les projets" } },
    { id: "web", label: { en: "Web Fullstack", fr: "Web Fullstack" } },
    { id: "systems", label: { en: "C & Systems", fr: "C & Systèmes" } },
    { id: "network", label: { en: "Networking & Tools", fr: "Réseau & Outils" } },
  ] as const;

  const filteredProjects = portfolioData.projects.filter((p) =>
    selectedCategory === "all" ? true : p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--m3-secondary-container)] text-[var(--m3-on-secondary-container)] text-xs font-semibold mb-2">
            <FolderGit2 className="w-3.5 h-3.5 text-[#0B57D0] dark:text-[#A8C7FA]" />
            <span>01 // {lang === "fr" ? "Projets Réalisés" : "Selected Works"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--m3-on-surface)]">
            {lang === "fr" ? "Projets & Ingénierie" : "Featured Engineering"}
          </h2>
        </div>

        {/* M3 Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count =
              cat.id === "all"
                ? portfolioData.projects.length
                : portfolioData.projects.filter((p) => p.category === cat.id).length;

            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[var(--m3-secondary-container)] text-[var(--m3-on-secondary-container)] font-semibold shadow-xs"
                    : "bg-[var(--m3-surface)] border border-[var(--m3-outline-variant)] text-[var(--m3-on-surface-variant)] hover:bg-[var(--m3-surface-container-high)]"
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 text-[var(--m3-primary)]" />}
                <span>{cat.label[lang]}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/15">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const t = project.translations[lang];

          return (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-[28px] bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)]/70 hover:border-[var(--m3-outline)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs font-mono mb-3 text-[var(--m3-on-surface-variant)]">
                  <span className="px-3 py-1 rounded-full bg-[var(--m3-primary-container)] text-[var(--m3-on-primary-container)] text-[11px] font-semibold uppercase">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-[var(--m3-on-surface)] tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[var(--m3-primary)] font-medium mb-3">
                  {t.tagline}
                </p>

                <p className="text-sm text-[var(--m3-on-surface-variant)] leading-relaxed mb-4 font-normal">
                  {t.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-5 p-3 rounded-2xl bg-[var(--m3-surface)] border border-[var(--m3-outline-variant)]/60 text-xs font-mono text-[var(--m3-on-surface-variant)]">
                  {t.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Links */}
              <div className="pt-4 border-t border-[var(--m3-outline-variant)]/60">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[var(--m3-surface-container-high)] text-[11px] font-mono text-[var(--m3-on-surface)] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-medium">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--m3-surface)] border border-[var(--m3-outline-variant)] text-[var(--m3-on-surface)] hover:bg-[var(--m3-surface-container-high)] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{lang === "fr" ? "Code Source" : "Source Code"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--m3-on-surface-variant)]" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-[var(--m3-tertiary-container)] text-[var(--m3-on-tertiary-container)] font-semibold"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
