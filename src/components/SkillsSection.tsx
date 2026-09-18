"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, Terminal, Sparkles } from "lucide-react";

export default function SkillsSection() {
  const { lang } = useLanguage();

  const groupAccents = {
    languages: { bg: "bg-[#FFE600]", text: "text-black" },
    web: { bg: "bg-[#00F0FF]", text: "text-black" },
    systems: { bg: "bg-[#4ADE80]", text: "text-black" },
    tools: { bg: "bg-[#FF8E3C]", text: "text-black" },
  };

  return (
    <section id="skills" className="py-20 border-b-2 border-black dark:border-zinc-800">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white dark:bg-white dark:text-black font-mono font-black text-xs uppercase mb-3 shadow-[2px_2px_0px_0px_#4ADE80]">
          <Cpu className="w-3.5 h-3.5" />
          <span>03 // {lang === "fr" ? "Matrice Technique" : "Technical Matrix"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white uppercase">
          {lang === "fr" ? "Compétences & Stack" : "Engineering Skills & Stack"}
        </h2>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.skillGroups.map((group) => {
          const accent = groupAccents[group.nameKey];

          return (
            <div
              key={group.nameKey}
              className="p-6 bg-white dark:bg-[#14151B] border-2 border-black dark:border-zinc-700 shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#000]"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b-2 border-black dark:border-zinc-800 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 border border-black ${accent.bg} shadow-[1px_1px_0px_0px_#000]`}
                  />
                  <h3 className="font-mono text-xs font-black uppercase tracking-wider text-black dark:text-white">
                    {group.translations[lang]}
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-black text-white dark:bg-zinc-800 dark:text-zinc-300">
                  {group.skills.length} ITEMS
                </span>
              </div>

              {/* Skill Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 bg-[#FDFBF7] dark:bg-[#0D0E12] border-2 border-black dark:border-zinc-800 hover:border-[#FFE600] transition-colors"
                  >
                    <span className="text-xs font-mono font-bold text-black dark:text-zinc-200">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-black uppercase px-1.5 py-0.5 border border-black ${
                        skill.level === "Advanced"
                          ? "bg-[#FFE600] text-black"
                          : "bg-zinc-200 dark:bg-zinc-800 text-black dark:text-zinc-300"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
