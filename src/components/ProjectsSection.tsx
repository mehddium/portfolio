"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfolioData";
import { FolderGit2, ArrowUpRight, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<"all" | "web" | "systems" | "network">("all");

  const categories = [
    { id: "all", label: { en: "All Projects", fr: "Tous les projets" }, color: "bg-[#FFE600]" },
    { id: "web", label: { en: "Web Fullstack", fr: "Web Fullstack" }, color: "bg-[#00F0FF]" },
    { id: "systems", label: { en: "C & Systems", fr: "C & Systèmes" }, color: "bg-[#4ADE80]" },
    { id: "network", label: { en: "Networking & Tools", fr: "Réseau & Outils" }, color: "bg-[#FF8E3C]" },
  ] as const;

  const filteredProjects = portfolioData.projects.filter((p) =>
    selectedCategory === "all" ? true : p.category === selectedCategory
  );

  const getCategoryBadgeColor = (cat: string) => {
    switch (cat) {
      case "web":
        return "bg-[#00F0FF] text-black";
      case "systems":
        return "bg-[#4ADE80] text-black";
      case "network":
        return "bg-[#FF8E3C] text-black";
      default:
        return "bg-[#FFE600] text-black";
    }
  };

  return (
    <section id="projects" className="py-20 border-b-2 border-black dark:border-zinc-800">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white dark:bg-white dark:text-black font-mono font-black text-xs uppercase mb-3 shadow-[2px_2px_0px_0px_#FFE600]">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>01 // {lang === "fr" ? "Projets Réalisés" : "Selected Works"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white uppercase">
            {lang === "fr" ? "Projets & Ingénierie" : "Featured Engineering"}
          </h2>
        </div>

        {/* Filter Buttons */}
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
                className={`flex items-center gap-2 px-3.5 py-2 font-mono text-xs font-black border-2 border-black transition-all ${
                  isActive
                    ? `${cat.color} text-black shadow-[3px_3px_0px_0px_#000] translate-x-0.5 translate-y-0.5`
                    : "bg-white dark:bg-zinc-900 text-black dark:text-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#000] hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <span>{cat.label[lang]}</span>
                <span className="px-1.5 py-0.2 bg-black text-white text-[10px] font-bold">
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
              className="flex flex-col justify-between p-6 bg-white dark:bg-[#14151B] border-2 border-black dark:border-zinc-700 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#000] transition-all"
            >
              <div>
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between font-mono text-xs mb-4">
                  <span
                    className={`font-black uppercase px-2.5 py-1 border-2 border-black text-[11px] shadow-[2px_2px_0px_0px_#000] ${getCategoryBadgeColor(
                      project.category
                    )}`}
                  >
                    {project.category}
                  </span>
                  <span className="font-bold px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-zinc-300 border border-black dark:border-zinc-700">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-black dark:text-white tracking-tight mb-2 uppercase">
                  {project.title}
                </h3>
                <p className="text-xs font-mono font-bold text-zinc-600 dark:text-[#FFE600] mb-4">
                  {t.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                  {t.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2 mb-6 p-3 bg-[#FDFBF7] dark:bg-[#0D0E12] border-2 border-black dark:border-zinc-800">
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
                    KEY SPECS & CHALLENGES:
                  </span>
                  {t.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-black dark:text-zinc-300 font-mono">
                      <span className="text-emerald-500 font-bold">▶</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Actions Footer */}
              <div className="pt-4 border-t-2 border-black dark:border-zinc-800">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-white dark:bg-zinc-900 border border-black dark:border-zinc-700 text-[11px] font-mono font-bold text-black dark:text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between font-mono text-xs font-black">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white dark:bg-white dark:text-black border-2 border-black shadow-[2px_2px_0px_0px_#FFE600] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{lang === "fr" ? "SOURCE CODE" : "SOURCE CODE"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#4ADE80] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                    >
                      <span>LIVE DEMO</span>
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
