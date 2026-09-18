"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { History, GraduationCap, Briefcase, Award } from "lucide-react";

export default function TimelineSection() {
  const { lang } = useLanguage();

  const getStepColor = (index: number) => {
    const colors = ["bg-[#FFE600]", "bg-[#00F0FF]", "bg-[#4ADE80]", "bg-[#FF8E3C]"];
    return colors[index % colors.length];
  };

  return (
    <section id="experience" className="py-20 border-b-2 border-black dark:border-zinc-800">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white dark:bg-white dark:text-black font-mono font-black text-xs uppercase mb-3 shadow-[2px_2px_0px_0px_#00F0FF]">
          <History className="w-3.5 h-3.5" />
          <span>02 // {lang === "fr" ? "Parcours & Formation" : "Background & Timeline"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white uppercase">
          {lang === "fr" ? "Expériences & Formation" : "Experience & Education"}
        </h2>
      </div>

      {/* Timeline Steps */}
      <div className="space-y-8">
        {portfolioData.timeline.map((item, index) => {
          const t = item.translations[lang];

          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-[#14151B] border-2 border-black dark:border-zinc-700 shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#000]"
            >
              {/* Left Badge */}
              <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-3 md:w-56 shrink-0">
                <div
                  className={`w-10 h-10 border-2 border-black text-black font-mono font-black text-base flex items-center justify-center shadow-[2px_2px_0px_0px_#000] ${getStepColor(
                    index
                  )}`}
                >
                  0{index + 1}
                </div>
                <div>
                  <span className="font-mono text-xs font-black block text-black dark:text-white">
                    {item.period}
                  </span>
                  <span className="inline-block mt-1 font-mono text-[10px] font-bold px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-zinc-300 border border-black dark:border-zinc-700 uppercase">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1">
                <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-tight mb-1">
                  {t.title}
                </h3>
                <p className="text-xs font-mono font-bold text-zinc-500 dark:text-[#FFE600] mb-3">
                  {t.institution}
                </p>

                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 font-normal">
                  {t.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-zinc-200 dark:border-zinc-800">
                  {t.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono font-bold px-2 py-0.5 bg-[#FDFBF7] dark:bg-[#0D0E12] border border-black dark:border-zinc-700 text-black dark:text-zinc-200"
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
