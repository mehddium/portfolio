"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { MessageSquareQuote, CheckCircle2 } from "lucide-react";

export default function RecommendationsSection() {
  const { lang } = useLanguage();

  if (!portfolioData.recommendations || portfolioData.recommendations.length === 0) {
    return null;
  }

  return (
    <section id="recommandations" className="py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-t border-[#232635]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            {lang === "fr" ? "Recommandations" : "Recommendations"}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {lang === "fr"
              ? "Retours d'ingénieurs et d'enseignants sur ma méthode de travail, ma rigueur technique et ma capacité d'apprentissage."
              : "Feedback from engineers and supervisors on my work discipline, technical rigor, and problem solving."}
          </p>
        </div>

        {/* 2-Column Widescreen Testimonial Cards - Clean, unboxed micro-elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.recommendations.map((rec) => (
            <figure
              key={rec.id}
              className="rounded-2xl bg-[#161824]/85 border border-[#25293a] p-7 sm:p-9 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <MessageSquareQuote className="w-6 h-6 text-blue-400/80" />
                  <div className="inline-flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === "fr" ? "Avis vérifié" : "Verified review"}</span>
                  </div>
                </div>

                <blockquote className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed italic">
                  &ldquo;{rec.text[lang]}&rdquo;
                </blockquote>
              </div>

              <figcaption className="pt-6 border-t border-[#222533] space-y-1">
                <div className="font-semibold text-white tracking-tight">
                  {rec.author}
                </div>
                <div className="text-xs text-blue-400 font-medium">
                  {rec.role[lang]}
                </div>
                <div className="text-xs text-neutral-400">
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
