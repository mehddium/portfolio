"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfolioData";
import {
  Folder,
  FolderOpen,
  ArrowUpRight,
  Sparkles,
  Code2,
  Cpu,
  Network,
  Layers,
  Search,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectsApp() {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<"all" | "web" | "systems" | "network">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: { en: "All Projects", fr: "Tous les projets" }, icon: <Folder className="w-4 h-4 text-amber-400" /> },
    { id: "web", label: { en: "Web Fullstack", fr: "Web Fullstack" }, icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
    { id: "systems", label: { en: "C & Systems", fr: "C & Systèmes" }, icon: <Cpu className="w-4 h-4 text-emerald-400" /> },
    { id: "network", label: { en: "Networking & Tools", fr: "Réseau & Outils" }, icon: <Network className="w-4 h-4 text-indigo-400" /> },
  ] as const;

  const filteredProjects = portfolioData.projects.filter((p) => {
    const matchesCat = selectedCategory === "all" ? true : p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col md:flex-row gap-5 h-full min-h-[500px]">
      {/* Sidebar Folders */}
      <div className="w-full md:w-56 shrink-0 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder={lang === "fr" ? "Rechercher un repo..." : "Search repos..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>

        {/* Directory Categories */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider px-2 block">
            {lang === "fr" ? "Dossiers Projets" : "Project Folders"}
          </span>

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
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono transition-all ${
                  isSelected
                    ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/30"
                    : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center gap-2">
                  {cat.icon}
                  <span>{cat.label[lang]}</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/10 text-neutral-300">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Files & Projects Grid */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {filteredProjects.map((project) => {
            const t = project.translations[lang];

            return (
              <div
                key={project.id}
                className="p-5 rounded-2xl glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400 mb-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 uppercase">
                      {project.category}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-xs font-mono text-cyan-400/90 mb-3">{t.tagline}</p>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {t.description}
                  </p>

                  <div className="space-y-1.5 mb-4 p-2.5 rounded-xl bg-black/30 border border-white/5 font-mono text-xs text-neutral-300">
                    {t.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px]">
                        <span className="text-emerald-400">▹</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[10px] font-mono text-neutral-300"
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
                        className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
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
      </div>
    </div>
  );
}
