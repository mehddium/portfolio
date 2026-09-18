"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Code2, ArrowUpRight, CheckCircle2, Zap, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function SceneWeb() {
  const { lang } = useLanguage();

  const webProjects = portfolioData.projects.filter((p) => p.category === "web");

  return (
    <section className="cinematic-slide glow-blue px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        {/* Header Tag */}
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            03 // {lang === "fr" ? "Architecture Web Moderne" : "Modern Fullstack Architecture"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
            {lang === "fr" ? "Plateformes Réactives : Next.js & TypeScript" : "Reactive Platforms : Next.js & TypeScript"}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-2xl mt-2">
            {lang === "fr"
              ? "Des interfaces rapides et hautement typées, couplées à des architectures serveur robustes et scalables."
              : "High-performance reactive user experiences backed by strictly type-safe backend services."}
          </p>
        </div>

        {/* Web Project Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webProjects.map((project) => {
            const t = project.translations[lang];

            return (
              <div
                key={project.id}
                className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase">
                      {project.category}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400 mt-1">{t.tagline}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {t.description}
                  </p>

                  <div className="space-y-1.5 pt-2 font-mono text-xs text-neutral-400">
                    {t.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

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
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
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
