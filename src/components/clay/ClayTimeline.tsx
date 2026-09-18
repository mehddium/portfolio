"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { History, GraduationCap, Briefcase, Award } from "lucide-react";

export default function ClayTimeline() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="py-20">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clay-pill text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
          <History className="w-3.5 h-3.5" />
          <span>02 // {lang === "fr" ? "Parcours & Formation" : "Background & Timeline"}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {lang === "fr" ? "Expériences & Formation Académique" : "Experience & Academic Background"}
        </h2>
      </div>

      <div className="space-y-6">
        {portfolioData.timeline.map((item) => {
          const t = item.translations[lang];

          return (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl clay-box"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 font-mono text-xs">
                <span className="font-bold text-indigo-600 dark:text-cyan-400 text-sm">{item.period}</span>
                <span className="text-[11px] px-3 py-0.5 rounded-full clay-pill uppercase font-semibold text-neutral-600 dark:text-neutral-300 w-fit">
                  {item.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-0.5">
                {t.title}
              </h3>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-3 font-medium">
                {t.institution}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 font-light">
                {t.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                {t.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full clay-pill text-neutral-700 dark:text-neutral-300"
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
