"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, Code2, ShieldCheck, Wrench } from "lucide-react";

export default function SkillsSection() {
  const { lang } = useLanguage();

  const getIcon = (key: string) => {
    switch (key) {
      case "systems":
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case "web":
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case "devops":
        return <ShieldCheck className="w-4 h-4 text-purple-400" />;
      default:
        return <Wrench className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="competences" className="py-20 sm:py-28 px-4 sm:px-8 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>{lang === "fr" ? "02 // Stack & Compétences" : "02 // Technical Capabilities"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {lang === "fr" ? "Matrice Technique Structurée" : "Structured Skills Matrix"}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl">
            {lang === "fr"
              ? "Des compétences classées par domaine opérationnel, du bas niveau système jusqu'au déploiement et à l'expérience utilisateur."
              : "Competencies categorized across systems programming, fullstack web, DevOps automation, and software engineering tools."}
          </p>
        </div>

        {/* 4 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioData.skillGroups.map((group) => (
            <div
              key={group.nameKey}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all space-y-5"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                    {getIcon(group.nameKey)}
                  </div>
                  <h3 className="font-bold text-sm text-white uppercase tracking-wider">
                    {group.translations[lang]}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-neutral-500">
                  {group.skills.length} {lang === "fr" ? "technologies" : "tools"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <span className="text-xs text-neutral-200 font-medium">{skill.name}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        skill.level === "Advanced"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
