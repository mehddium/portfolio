"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export default function RecommendationsSection() {
  const { lang } = useLanguage();

  if (!portfolioData.recommendations || portfolioData.recommendations.length === 0) {
    return null;
  }

  return (
    <section id="recommandations" className="py-20 px-6 sm:px-8 max-w-5xl mx-auto border-t border-[#262935]">
      <div className="space-y-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            {lang === "fr" ? "Recommandations" : "Recommendations"}
          </h2>
          <p className="text-sm text-neutral-400 mt-1 font-light">
            {lang === "fr"
              ? "Retours d'encadrants et de collaborateurs sur ma rigueur d'ingénierie et ma méthode de travail."
              : "Feedback from supervisors and teammates on my code discipline and problem solving."}
          </p>
        </div>

        {/* Editorial Quotes (No boxed cards!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioData.recommendations.map((rec) => (
            <figure key={rec.id} className="space-y-4">
              <blockquote className="text-base text-neutral-300 font-light leading-relaxed italic border-l-2 border-[#383c4d] pl-4">
                &ldquo;{rec.text[lang]}&rdquo;
              </blockquote>

              <figcaption className="pl-4 text-xs space-y-0.5">
                <div className="font-semibold text-white">{rec.author}</div>
                <div className="text-neutral-400">{rec.role[lang]}</div>
                <div className="text-neutral-500">{rec.institution}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
