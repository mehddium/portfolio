"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfolioData";
import { FolderGit2, ArrowUpRight, Layers, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectsSection() {
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
    <section id="projects" className="py-20 border-b border-neutral-800/60">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>01 // {lang === "fr" ? "Projets Réalisés" : "Selected Works"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-100">
            {lang === "fr" ? "Projets & Ingénierie" : "Featured Engineering Projects"}
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg">
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
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-all ${
                  isActive
                    ? "bg-neutral-100 text-neutral-950 font-bold shadow"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"
                }`}
              >
                <span>{cat.label[lang]}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded ${
                    isActive ? "bg-neutral-900 text-neutral-100" : "bg-neutral-800 text-neutral-400"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project) => {
          const t = project.translations[lang];

          return (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-6 rounded-lg bg-neutral-900/30 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-200"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 mb-3">
                  <span className="uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                    {project.category.toUpperCase()}
                  </span>
                  <span>{project.year}</span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-neutral-100 group-hover:text-white tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mb-4 font-medium leading-relaxed">
                  {t.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-400 leading-relaxed mb-5 font-light">
                  {t.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-neutral-800/50">
                  {t.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Links Footer */}
              <div className="pt-4 border-t border-neutral-800/70">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between font-mono text-xs">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white hover:underline underline-offset-4"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{lang === "fr" ? "Code Source" : "Source Code"}</span>
                      <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
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
