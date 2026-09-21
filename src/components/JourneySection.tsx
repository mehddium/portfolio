"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export default function JourneySection() {
  const { lang } = useLanguage();

  return (
    <section id="parcours" className="py-20 px-6 sm:px-8 max-w-5xl mx-auto border-t border-[#262935]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Header */}
        <div className="md:col-span-4 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {lang === "fr" ? "Parcours & formation" : "Background & Journey"}
          </h2>
          <p className="text-sm text-neutral-400 font-light leading-relaxed">
            {lang === "fr"
              ? "Études universitaires en informatique et projets pratiques d'envergure."
              : "Computer science studies combined with large-scale technical projects."}
          </p>
        </div>

        {/* Right Minimalist Timeline */}
        <div className="md:col-span-8 space-y-8 divide-y divide-[#262935]">
          {portfolioData.timeline.map((item) => (
            <div key={item.id} className="pt-6 first:pt-0 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {item.translations[lang].title}
                </h3>
                <span className="text-xs text-neutral-400">
                  {item.period}
                </span>
              </div>

              <p className="text-xs text-neutral-400">
                {item.translations[lang].institution}
              </p>

              <p className="text-sm text-neutral-300 font-light leading-relaxed pt-1">
                {item.translations[lang].description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.translations[lang].skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-neutral-400"
                  >
                    {s}{idx < item.translations[lang].skills.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
