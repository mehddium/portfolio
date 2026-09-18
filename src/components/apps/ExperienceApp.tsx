"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { History, GraduationCap, Briefcase, Award, CheckCircle2 } from "lucide-react";

export default function ExperienceApp() {
  const { lang } = useLanguage();

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div>
          <h2 className="text-lg font-bold text-white">
            {lang === "fr" ? "Parcours Académique & Projets" : "Academic Background & Trajectory"}
          </h2>
          <p className="text-xs font-mono text-neutral-400 mt-0.5">
            {lang === "fr" ? "Historique d'ingénierie et formation système" : "System & software engineering timeline"}
          </p>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
          LOGS // 2023-PRESENT
        </span>
      </div>

      <div className="relative border-l border-white/15 ml-3 sm:ml-4 space-y-6">
        {portfolioData.timeline.map((item, idx) => {
          const t = item.translations[lang];

          return (
            <div key={item.id} className="relative pl-6 sm:pl-8 group">
              {/* Dot */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-neutral-900 border-2 border-cyan-400 flex items-center justify-center text-[10px] text-white">
                {idx + 1}
              </div>

              {/* Card */}
              <div className="p-5 rounded-2xl glass-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 font-mono text-xs">
                  <span className="font-bold text-cyan-400">{item.period}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-neutral-300 uppercase w-fit">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1">{t.title}</h3>
                <p className="text-xs font-mono text-neutral-400 mb-3">{t.institution}</p>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {t.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {t.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
