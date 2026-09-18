"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Cpu } from "lucide-react";

export default function ClaySkills() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="py-20">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clay-pill text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>03 // {lang === "fr" ? "Matrice Technique" : "Technical Matrix"}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {lang === "fr" ? "Compétences & Technologies" : "Skills & Engineering Stack"}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.skillGroups.map((group) => (
          <div
            key={group.nameKey}
            className="p-6 sm:p-7 rounded-3xl clay-box space-y-4"
          >
            <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                {group.translations[lang]}
              </h3>
              <span className="text-[11px] font-mono text-neutral-500">
                {group.skills.length} items
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-2.5 rounded-2xl clay-pill"
                >
                  <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">{skill.name}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      skill.level === "Advanced"
                        ? "clay-primary font-semibold text-white"
                        : "text-neutral-500 dark:text-neutral-400"
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
