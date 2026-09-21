"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export default function JourneySection() {
  const { lang } = useLanguage();

  return (
    <section id="parcours" className="py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-t border-[#232635]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Title & Context (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-28">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-medium">
            {lang === "fr" ? "Évolution & Étapes" : "Background & Milestones"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            {lang === "fr" ? "Parcours & formation" : "Journey & Experience"}
          </h2>
          <p className="text-sm text-neutral-300 font-light leading-relaxed">
            {lang === "fr"
              ? "Un cursus universitaire exigeant en informatique couplé à une pratique continue de projets techniques concrets."
              : "A rigorous academic computer science curriculum paired with continuous hands-on software development."}
          </p>
        </div>

        {/* Right Column: Open Minimalist Timeline (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-12 divide-y divide-[#232635]">
          {portfolioData.timeline.map((item) => {
            const t = item.translations[lang];

            return (
              <div key={item.id} className="pt-10 first:pt-0 space-y-3">
                {/* Period & Institution - Pure typography */}
                <div className="flex items-center justify-between gap-4 text-xs font-mono">
                  <span className="text-blue-400 font-medium">{t.institution}</span>
                  <span className="text-neutral-500">{item.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {t.title}
                </h3>

                {/* Narrative */}
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {t.description}
                </p>

                {/* Acquired Competencies - Inline text list with middots */}
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  {t.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded text-xs text-neutral-400 bg-[#161924] border border-[#232736]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
