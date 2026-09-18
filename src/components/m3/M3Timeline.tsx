"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { History, GraduationCap, Briefcase, Award } from "lucide-react";

export default function M3Timeline() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="py-12">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--m3-secondary-container)] text-[var(--m3-on-secondary-container)] text-xs font-semibold mb-2">
          <History className="w-3.5 h-3.5 text-[#0B57D0] dark:text-[#A8C7FA]" />
          <span>02 // {lang === "fr" ? "Parcours & Formation" : "Background & Timeline"}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--m3-on-surface)]">
          {lang === "fr" ? "Expériences & Formation Académique" : "Experience & Academic Background"}
        </h2>
      </div>

      <div className="space-y-4">
        {portfolioData.timeline.map((item) => {
          const t = item.translations[lang];

          return (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-[28px] bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)]/70 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 font-mono text-xs">
                <span className="font-bold text-[var(--m3-primary)] text-sm">{item.period}</span>
                <span className="text-[11px] px-3 py-1 rounded-full bg-[var(--m3-surface-container-high)] text-[var(--m3-on-surface-variant)] uppercase font-semibold w-fit">
                  {item.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[var(--m3-on-surface)] mb-0.5">
                {t.title}
              </h3>
              <p className="text-xs font-mono text-[var(--m3-on-surface-variant)] mb-3 font-medium">
                {t.institution}
              </p>

              <p className="text-sm text-[var(--m3-on-surface-variant)] leading-relaxed mb-4 font-normal">
                {t.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--m3-outline-variant)]/60">
                {t.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[var(--m3-surface)] border border-[var(--m3-outline-variant)]/60 text-[var(--m3-on-surface)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
