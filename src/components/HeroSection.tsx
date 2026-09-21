"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Copy, Check, FileText } from "lucide-react";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-6 sm:px-8 max-w-5xl mx-auto">
      <div className="space-y-10">
        {/* Availability line */}
        <div className="flex items-center gap-2.5 text-xs text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>{portfolioData.profile.status[lang]}</span>
          <span className="text-neutral-600">&middot;</span>
          <span>{portfolioData.profile.location}</span>
        </div>

        {/* Title & Human Intro */}
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15]">
            {lang === "fr" ? (
              <>
                Programmation système en C et architectures web avec Next.js.
              </>
            ) : (
              <>
                Low-level systems in C and web architecture with Next.js.
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            {portfolioData.profile.bio[lang].intro}
          </p>
        </div>

        {/* Minimal actions row */}
        <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
          <a
            href="#projets"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition-colors"
          >
            <span>{lang === "fr" ? "Voir les projets" : "View projects"}</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#2e3240] text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
          >
            <FileText className="w-4 h-4 text-neutral-400" />
            <span>{lang === "fr" ? "Consulter le CV" : "View resume"}</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs text-neutral-400 hover:text-white transition-colors"
            title="Copier l'email"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">{lang === "fr" ? "Email copié" : "Email copied"}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{portfolioData.profile.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Minimal inline stats without cards */}
        <div className="pt-8 border-t border-[#262935] grid grid-cols-2 sm:grid-cols-4 gap-6">
          {portfolioData.keyMetrics.map((km, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl font-semibold text-white tracking-tight">
                {km.value}
              </div>
              <div className="text-xs text-neutral-300 font-medium">
                {km.label[lang]}
              </div>
              <div className="text-xs text-neutral-400 font-light">
                {km.subtext[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
