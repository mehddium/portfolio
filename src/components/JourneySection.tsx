"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, FolderGit2, Palette } from "lucide-react";

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
        return null;
    }
  };

  return (
    <section id="parcours" className="py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-t border-[#232635]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            {lang === "fr" ? "Parcours & apprentissage" : "Journey & Milestones"}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {lang === "fr"
              ? "Un cursus universitaire en informatique combiné à une pratique intensive de projets concrets."
              : "Academic computer science curriculum paired with intensive hands-on software development."}
          </p>
        </div>

        {/* 3-Column Timeline - Open, breathable, zero nested boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.timeline.map((item) => {
            const t = item.translations[lang];

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#161824]/85 border border-[#25293a] p-7 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Top metadata - Clean floating icon and direct text date (no nested boxes!) */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      {getTimelineIcon(item.type)}
                      <span className="text-neutral-400 font-medium">{t.institution}</span>
                    </div>
                    <span className="text-neutral-400 font-mono">
                      {item.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">
                    {t.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {t.description}
                  </p>
                </div>

                {/* Skills - Simple text tags */}
                <div className="pt-4 border-t border-[#222533] space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium block">
                    {lang === "fr" ? "Compétences clés" : "Key skills"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {t.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs text-neutral-300 bg-[#1c1f2b] border border-[#272b3b]"
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
