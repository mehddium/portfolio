"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export default function LedgerTimeline() {
  const { lang } = useLanguage();

  return (
    <section id="parcours" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#222533]">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#222533]">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs text-[#3b82f6] font-medium">
              {lang === "fr" ? "Formation & étapes clés" : "Background & milestones"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f5f8] uppercase">
              {lang === "fr" ? "Chronologie du parcours" : "Chronological Registry"}
            </h2>
            <p className="text-sm text-[#8b90a0] font-light leading-relaxed">
              {lang === "fr"
                ? "Formation universitaire exigeante en informatique couplée à une pratique concrète et soutenue du code."
                : "Demanding academic computer science curriculum paired with continuous hands-on software development."}
            </p>
          </div>

          <div className="text-xs font-mono text-[#8b90a0] shrink-0">
            {portfolioData.timeline.length} {lang === "fr" ? "étapes répertoriées" : "recorded milestones"}
          </div>
        </div>

        {/* The Timeline Ledger Table */}
        <div className="border border-[#222533] divide-y divide-[#222533] bg-[#0e1017]">
          {portfolioData.timeline.map((item, idx) => {
            const t = item.translations[lang];
            const refNumber = `#TR-${String(idx + 1).padStart(2, "0")}`;

            return (
              <div
                key={item.id}
                className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-[#12141d]/50 transition-colors"
              >
                {/* Left Column: Coordinates & Period */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-[#3b82f6] font-semibold">{refNumber}</span>
                    <span className="text-neutral-600">/</span>
                    <span className="text-[#f4f5f8]">{item.period}</span>
                  </div>
                  <div className="text-sm font-semibold text-blue-400 font-sans">
                    {t.institution}
                  </div>
                  <div className="text-xs font-mono text-[#8b90a0] uppercase">
                    TRACK: {item.type}
                  </div>
                </div>

                {/* Right Column: Title, Description & Acquired Skills */}
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="text-xl font-bold text-[#f4f5f8] tracking-tight">
                    {t.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8b90a0] font-light leading-relaxed">
                    {t.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {t.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-[#151822] text-[#f4f5f8] border border-[#222533] text-xs font-mono"
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
