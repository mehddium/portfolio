"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, Code2, Network, ShieldCheck, Zap } from "lucide-react";

export default function SkillsDashboard() {
  const { lang } = useLanguage();

  const getGroupIcon = (key: string) => {
    switch (key) {
      case "languages":
        return <Code2 className="w-4 h-4 text-[#4285F4]" />;
      case "web":
        return <Zap className="w-4 h-4 text-[#FBBC04]" />;
      case "systems":
        return <Cpu className="w-4 h-4 text-[#34A853]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#EA4335]" />;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="pb-4 border-b border-[var(--m3-outline-variant)]/60">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--m3-secondary-container)] text-[var(--m3-on-secondary-container)] text-xs font-semibold mb-1">
          <Cpu className="w-3.5 h-3.5 text-[#0B57D0] dark:text-[#A8C7FA]" />
          <span>Matrice Technique // Systems & Fullstack</span>
        </div>
        <h2 className="text-2xl font-bold text-[var(--m3-on-surface)]">
          {lang === "fr" ? "Compétences & Architecture Système" : "Technical Stack & Architecture"}
        </h2>
      </div>

      {/* Grid of 4 Tonal Category Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.skillGroups.map((group) => (
          <div
            key={group.nameKey}
            className="p-6 sm:p-7 rounded-[28px] bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)]/70 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[var(--m3-outline-variant)]/60 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[var(--m3-surface)] border border-[var(--m3-outline-variant)]/60">
                  {getGroupIcon(group.nameKey)}
                </div>
                <h3 className="font-bold text-sm text-[var(--m3-on-surface)] uppercase tracking-wider">
                  {group.translations[lang]}
                </h3>
              </div>
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
    </div>
  );
}
