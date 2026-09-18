"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, Terminal, Sparkles } from "lucide-react";

export default function SkillsSection() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="py-20 border-b border-neutral-800/60">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>03 // {lang === "fr" ? "Matrice Technique" : "Technical Matrix"}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-100">
          {lang === "fr" ? "Compétences & Technologies" : "Skills & Engineering Stack"}
        </h2>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.skillGroups.map((group) => (
          <div
            key={group.nameKey}
            className="p-6 rounded-lg bg-neutral-900/30 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-200">
                {group.translations[lang]}
              </h3>
              <span className="text-[11px] font-mono text-neutral-500">
                {group.skills.length} {lang === "fr" ? "items" : "items"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-2.5 rounded bg-neutral-950/70 border border-neutral-850 hover:border-neutral-700 transition-colors"
                >
                  <span className="text-xs font-medium text-neutral-200">{skill.name}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      skill.level === "Advanced"
                        ? "bg-neutral-800 text-neutral-200 font-semibold"
                        : "bg-neutral-900 text-neutral-400"
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
    </section>
  );
}
