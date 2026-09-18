"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, Code2, Network, ShieldCheck, Zap } from "lucide-react";

export default function SceneMatrix() {
  const { lang } = useLanguage();

  const getIcon = (key: string) => {
    switch (key) {
      case "languages":
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case "web":
        return <Zap className="w-4 h-4 text-amber-400" />;
      case "systems":
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section className="cinematic-slide glow-purple px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            04 // {lang === "fr" ? "Matrice Technique" : "Technical Capabilities"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
            {lang === "fr" ? "Stack & Compétences d'Ingénierie" : "Engineering Stack & Tooling"}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-2xl mt-2">
            {lang === "fr"
              ? "Un éventail complet de technologies éprouvées, du bas niveau au déploiement en production."
              : "A battle-tested technical arsenal across low-level computing, web platforms, and automated CI/CD."}
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioData.skillGroups.map((group) => (
            <div
              key={group.nameKey}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {getIcon(group.nameKey)}
                  </div>
                  <h3 className="font-bold text-sm text-white uppercase tracking-wider">
                    {group.translations[lang]}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-neutral-500">
                  {group.skills.length} skills
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5"
                  >
                    <span className="text-xs text-neutral-200">{skill.name}</span>
                    <span className="text-[10px] font-mono text-neutral-400">{skill.level}</span>
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
