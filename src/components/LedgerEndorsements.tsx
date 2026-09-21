"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { CheckCircle2 } from "lucide-react";

export default function LedgerEndorsements() {
  const { lang } = useLanguage();

  if (!portfolioData.recommendations || portfolioData.recommendations.length === 0) {
    return null;
  }

  return (
    <section id="recommandations" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#222533]">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#222533]">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs text-[#3b82f6] font-medium">
              {lang === "fr" ? "Témoignages & encadrement" : "Supervision & endorsements"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f5f8] uppercase">
              {lang === "fr" ? "Log des recommandations" : "Endorsement Log"}
            </h2>
            <p className="text-sm text-[#8b90a0] font-light leading-relaxed">
              {lang === "fr"
                ? "Retours circonstanciés d'ingénieurs et d'enseignants sur la rigueur d'exécution et la progression technique."
                : "Feedback from engineers and supervisors on discipline, technical rigor, and problem solving."}
            </p>
          </div>

          <div className="text-xs font-mono text-[#8b90a0] shrink-0">
            {portfolioData.recommendations.length} {lang === "fr" ? "témoignages enregistrés" : "verified records"}
          </div>
        </div>

        {/* Endorsements Table / Grid */}
        <div className="border border-[#222533] divide-y divide-[#222533] bg-[#0e1017]">
          {portfolioData.recommendations.map((rec, idx) => (
            <figure
              key={rec.id}
              className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-[#12141d]/50 transition-colors"
            >
              {/* Left Column: Author Metadata */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#3b82f6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>AVIS ENCADRANT #REC-0{idx + 1}</span>
                </div>
                <div className="text-base font-bold text-[#f4f5f8]">
                  {rec.author}
                </div>
                <div className="text-xs text-blue-400 font-medium">
                  {rec.role[lang]}
                </div>
                <div className="text-xs font-mono text-[#8b90a0]">
                  {rec.institution}
                </div>
              </div>

              {/* Right Column: Quote Text */}
              <div className="lg:col-span-8 border-l-2 border-[#3b82f6] pl-6 space-y-2">
                <blockquote className="text-base sm:text-lg text-[#f4f5f8] font-light leading-relaxed italic">
                  &ldquo;{rec.text[lang]}&rdquo;
                </blockquote>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
