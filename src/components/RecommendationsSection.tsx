"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { CheckCircle2 } from "lucide-react";

export default function RecommendationsSection() {
  const { lang } = useLanguage();

  if (!portfolioData.recommendations || portfolioData.recommendations.length === 0) {
    return null;
  }

  return (
    <section id="recommandations" className="py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-t border-[#232635]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Title & Context (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-28">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-medium">
            {lang === "fr" ? "Témoignages & Encadrement" : "Endorsements & Supervision"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            {lang === "fr" ? "Recommandations" : "Recommendations"}
          </h2>
          <p className="text-sm text-neutral-300 font-light leading-relaxed">
            {lang === "fr"
              ? "Retours d'ingénieurs et d'enseignants sur ma méthode de travail, ma rigueur technique et ma capacité d'apprentissage."
              : "Feedback from engineers and supervisors on my work discipline, technical rigor, and problem solving."}
          </p>
        </div>

        {/* Right Column: Open Editorial Blockquotes (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-12 divide-y divide-[#232635]">
          {portfolioData.recommendations.map((rec) => (
            <figure key={rec.id} className="pt-10 first:pt-0 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === "fr" ? "Avis vérifié d'encadrant" : "Verified supervisor review"}</span>
              </div>

              <blockquote className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed italic border-l-2 border-blue-500/40 pl-5">
                &ldquo;{rec.text[lang]}&rdquo;
              </blockquote>

              <figcaption className="pl-5 space-y-1 text-xs">
                <div className="font-semibold text-white tracking-tight text-sm">
                  {rec.author}
                </div>
                <div className="text-blue-400 font-medium">
                  {rec.role[lang]}
                </div>
                <div className="text-neutral-500">
                  {rec.institution}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
