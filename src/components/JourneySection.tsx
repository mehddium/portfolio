"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, FolderGit2, Palette, Calendar } from "lucide-react";

export default function JourneySection() {
  const { lang } = useLanguage();

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case "project":
        return <FolderGit2 className="w-5 h-5 text-emerald-400" />;
      case "experience":
        return <Palette className="w-5 h-5 text-indigo-400" />;
      default:
        return <Calendar className="w-5 h-5 text-neutral-400" />;
    }
  };

  return (
    <section id="parcours" className="py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-t border-[#232737]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-medium text-blue-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "Formation & Évolution" : "Education & Milestones"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            {lang === "fr" ? "Parcours & apprentissage" : "Journey & Experience"}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {lang === "fr"
              ? "Un cursus solide en informatique combiné à une pratique intensive de projets personnels et académiques exigeants."
              : "A solid academic computer science background paired with intensive hands-on systems and software development."}
          </p>
        </div>

        {/* 3-Column Widescreen Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData.timeline.map((item) => {
            const t = item.translations[lang];

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#161824]/85 border border-[#262a3c] hover:border-[#383e54] transition-all p-7 flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-5">
                  {/* Top metadata & period */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="p-2.5 rounded-xl bg-[#1d202e] border border-[#2b3042]">
                      {getTimelineIcon(item.type)}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-neutral-300 bg-[#1b1e2b] border border-[#292d3e]">
                      {item.period}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">
                      {t.title}
                    </h3>
                    <p className="text-xs text-blue-400 font-medium">
                      {t.institution}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {t.description}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="pt-5 border-t border-[#232737] space-y-2">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 block">
                    {lang === "fr" ? "Compétences clés" : "Key competencies"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {t.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-xs text-neutral-300 bg-[#1b1d28] border border-[#282d3e]"
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
    </section>
  );
}
