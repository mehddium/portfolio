"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, ArrowUpRight, CheckCircle2, Network, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function SceneSystems() {
  const { lang } = useLanguage();

  const systemsProjects = portfolioData.projects.filter(
    (p) => p.category === "systems" || p.category === "network"
  );

  return (
    <section className="cinematic-slide glow-emerald px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        {/* Header Tag */}
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            02 // {lang === "fr" ? "Ingénierie Bas Niveau" : "Systems & Low-Level Engineering"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
            {lang === "fr" ? "Le Cœur Système : C & Protocoles POSIX" : "The Core : C & Network Systems"}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-2xl mt-2">
            {lang === "fr"
              ? "Conception de serveurs réseau concurrents, gestion fine de la mémoire et orchestration de processus Unix."
              : "Building concurrent network daemons, manual memory management, and Unix process orchestration."}
          </p>
        </div>

        {/* 2 Flagship Projects Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systemsProjects.slice(0, 2).map((project) => {
            const t = project.translations[lang];

            return (
              <div
                key={project.id}
                className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                      {project.category}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-1">{t.tagline}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {t.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-2 font-mono text-xs text-neutral-400">
                    {t.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.06] text-neutral-300 text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl || "https://github.com/mehddium"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
                  >
                    <span>Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
