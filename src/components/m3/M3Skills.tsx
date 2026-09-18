"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Cpu } from "lucide-react";

export default function M3Skills() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="py-12">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--m3-secondary-container)] text-[var(--m3-on-secondary-container)] text-xs font-semibold mb-2">
          <Cpu className="w-3.5 h-3.5 text-[#0B57D0] dark:text-[#A8C7FA]" />
          <span>03 // {lang === "fr" ? "Matrice Technique" : "Technical Matrix"}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--m3-on-surface)]">
          {lang === "fr" ? "Compétences & Technologies" : "Skills & Engineering Stack"}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.skillGroups.map((group) => (
          <div
            key={group.nameKey}
            className="p-6 sm:p-7 rounded-[28px] bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)]/70 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[var(--m3-outline-variant)]/60 pb-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--m3-on-surface)]">
                {group.translations[lang]}
              </h3>
              <span className="text-[11px] font-mono text-[var(--m3-on-surface-variant)]">
                {group.skills.length} modules
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[var(--m3-surface)] border border-[var(--m3-outline-variant)]/60"
                >
                  <span className="text-xs font-medium text-[var(--m3-on-surface)]">{skill.name}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      skill.level === "Advanced"
                        ? "bg-[var(--m3-primary-container)] text-[var(--m3-on-primary-container)] font-semibold"
                        : "bg-[var(--m3-surface-container-high)] text-[var(--m3-on-surface-variant)]"
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
