"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export default function Trajectory() {
  const { lang } = useLanguage();

  return (
    <section id="trajectory" className="py-20 md:py-28 border-b border-neutral-200/80">
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-950">
          {lang === "fr" ? "Parcours & Formation" : "Trajectory & Journey"}
        </h2>
        <p className="text-xs font-mono text-neutral-500 mt-1">
          {lang === "fr" ? "Étapes académiques et réalisations" : "Academic milestones and engineering development"}
        </p>
      </div>

      {/* Clean open list — No cards */}
      <div className="space-y-12">
        {portfolioData.timeline.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline pt-6 border-t border-neutral-200/60 first:border-t-0 first:pt-0"
          >
            {/* Period (3 cols) */}
            <div className="md:col-span-3 text-xs font-mono text-neutral-500">
              {item.period}
            </div>

            {/* Content (9 cols) */}
            <div className="md:col-span-9 space-y-1.5">
              <h3 className="text-base font-bold text-neutral-950">
                {item.translations[lang].title}
              </h3>
              <p className="text-xs font-mono text-neutral-600">
                {item.translations[lang].institution}
              </p>
              <p className="text-sm text-neutral-600 font-light leading-relaxed pt-1">
                {item.translations[lang].description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
