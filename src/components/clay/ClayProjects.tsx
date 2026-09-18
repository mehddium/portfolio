"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfolioData";
import { FolderGit2, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ClayProjects() {
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
    <section id="projects" className="py-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clay-pill text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>01 // {lang === "fr" ? "Projets Réalisés" : "Selected Works"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {lang === "fr" ? "Projets & Ingénierie" : "Featured Engineering"}
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count =
              cat.id === "all"
                ? portfolioData.projects.length
                : portfolioData.projects.filter((p) => p.category === cat.id).length;

            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                  isActive
                    ? "clay-primary shadow-md"
                    : "clay-pill text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                <span>{cat.label[lang]}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-black/20 text-white" : "bg-black/5 dark:bg-white/10 text-neutral-500 dark:text-neutral-400"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const t = project.translations[lang];

          return (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-3xl clay-box flex flex-col justify-between hover:scale-[1.01] transition-all"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between font-mono text-xs mb-3 text-neutral-500 dark:text-neutral-400">
                  <span className="px-2.5 py-0.5 rounded-full clay-pill text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-indigo-600 dark:text-cyan-400 font-medium mb-3">
                  {t.tagline}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 font-light">
                  {t.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5 font-mono text-xs text-neutral-600 dark:text-neutral-300">
                  {t.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Links Footer */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full clay-pill text-[11px] font-mono text-neutral-600 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between font-mono text-xs font-semibold">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl clay-btn text-neutral-800 dark:text-neutral-200 hover:text-indigo-500 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{lang === "fr" ? "Code Source" : "Source Code"}</span>
                      <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl clay-btn text-emerald-600 dark:text-emerald-400 hover:underline"
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
