"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Quote, ShieldCheck } from "lucide-react";

export default function RecommendationsSection() {
  const { lang } = useLanguage();

  if (!portfolioData.recommendations || portfolioData.recommendations.length === 0) {
    return null;
  }

  return (
    <section id="recommandations" className="py-20 sm:py-28 px-4 sm:px-8 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{lang === "fr" ? "04 // Références & Réassurance" : "04 // Vouching & Endorsements"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {lang === "fr" ? "Témoignages & Recommandations" : "Recommendations & Peer Vouching"}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl">
            {lang === "fr"
              ? "Des retours concrets d'encadrants académiques et de collaborateurs techniques attestant de la rigueur d'ingénierie et de la méthodologie de travail."
              : "Direct feedback from academic supervisors and technical peers validating engineering rigor, code discipline, and collaborative work."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.recommendations.map((rec) => (
            <div
              key={rec.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-6 relative"
            >
              <Quote className="w-8 h-8 text-cyan-400/20 absolute top-6 right-6" />

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed italic">
                &ldquo;{rec.text[lang]}&rdquo;
              </p>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                  {rec.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{rec.author}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <p className="text-xs font-mono text-neutral-400">{rec.role[lang]}</p>
                  <p className="text-[11px] font-mono text-neutral-500">{rec.relationship[lang]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
