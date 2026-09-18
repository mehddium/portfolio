"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { History, GraduationCap, Briefcase, Award } from "lucide-react";

export default function TimelineSection() {
  const { lang } = useLanguage();

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4 text-neutral-300" />;
      case "experience":
        return <Briefcase className="w-4 h-4 text-neutral-300" />;
      default:
        return <Award className="w-4 h-4 text-neutral-300" />;
    }
  };

  return (
    <section id="experience" className="py-20 border-b border-neutral-800/60">
      {/* Section Title */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
          <History className="w-3.5 h-3.5" />
          <span>02 // {lang === "fr" ? "Parcours & Formation" : "Background & Timeline"}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-100">
          {lang === "fr" ? "Expériences & Formation Académique" : "Experience & Academic Background"}
        </h2>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-neutral-800 ml-3 sm:ml-4 space-y-10">
        {portfolioData.timeline.map((item, index) => {
          const t = item.translations[lang];

          return (
            <div key={item.id} className="relative pl-8 sm:pl-10 group">
              {/* Timeline node dot */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center group-hover:border-neutral-400 transition-colors">
                {getTypeIcon(item.type)}
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-lg bg-neutral-900/30 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 font-mono text-xs">
                  <span className="font-bold text-neutral-400">{item.period}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 uppercase tracking-wider w-fit">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-100 tracking-tight mb-1">
                  {t.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mb-4 font-medium">
                  {t.institution}
                </p>

                <p className="text-sm text-neutral-400 leading-relaxed mb-4 font-light">
                  {t.description}
                </p>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/50">
                  {t.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-400"
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
    </section>
  );
}
