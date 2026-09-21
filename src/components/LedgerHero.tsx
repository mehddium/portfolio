"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Copy, Check, FileText, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface LedgerHeroProps {
  onOpenResume: () => void;
}

export default function LedgerHero({ onOpenResume }: LedgerHeroProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-32 sm:pt-40 pb-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#222533]">
      <div className="space-y-12">
        {/* Architectural Masthead Label */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222533] pb-4 text-xs font-mono text-[#8b90a0]">
          <div className="flex items-center gap-3">
            <span className="text-[#3b82f6] font-semibold">{portfolioData.profile.role[lang].toUpperCase()}</span>
            <span>&middot;</span>
            <span>C (POSIX) & NEXT.JS</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span>{portfolioData.profile.location.toUpperCase()}</span>
            <span>&middot;</span>
            <span className="text-emerald-400 font-medium">{portfolioData.profile.status[lang]}</span>
          </div>
        </div>

        {/* Monumental Swiss Headline */}
        <div className="space-y-6 max-w-5xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#f4f5f8] leading-[1.05] uppercase">
            {lang === "fr" ? (
              <>
                Programmation système <span className="text-[#3b82f6]">Unix en C</span> et ingénierie <span className="text-neutral-300">web moderne</span>.
              </>
            ) : (
              <>
                Low-level systems in <span className="text-[#3b82f6]">Unix C</span> and modern <span className="text-neutral-300">web engineering</span>.
              </>
            )}
          </h1>

          <p className="text-base sm:text-xl text-[#8b90a0] font-light leading-relaxed max-w-3xl">
            {portfolioData.profile.bio[lang].intro}
          </p>
        </div>

        {/* Tactical Action Strip */}
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium">
          <a
            href="#projets"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f4f5f8] text-[#0e1017] hover:bg-white font-semibold transition-colors"
          >
            <span>{lang === "fr" ? "Explorer le registre des projets" : "Explore project ledger"}</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#151822] border border-[#222533] text-[#f4f5f8] hover:border-[#3b82f6] hover:bg-[#1a1e2b] transition-colors"
          >
            <FileText className="w-4 h-4 text-[#8b90a0]" />
            <span>{lang === "fr" ? "Dossier CV (PDF)" : "Resume Dossier (PDF)"}</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-3 bg-[#151822] border border-[#222533] text-[#8b90a0] hover:text-[#f4f5f8] hover:border-[#3b82f6] font-mono transition-colors"
            title="Copier l'email"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-sans font-semibold">
                  {lang === "fr" ? "Email copié !" : "Email copied!"}
                </span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#8b90a0]" />
                <span>{portfolioData.profile.email}</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-4 pl-2 text-[#8b90a0]">
            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#f4f5f8] transition-colors text-xs"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <span>/</span>

            <a
              href={portfolioData.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#f4f5f8] transition-colors text-xs"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Architectural 4-Metric Grid (Strict hairline grid, zero cards) */}
        <div className="border-t border-[#222533] pt-8 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#222533]">
          {portfolioData.keyMetrics.map((km, idx) => (
            <div key={idx} className={`space-y-1.5 ${idx > 0 ? "pt-6 md:pt-0 md:pl-8" : "pb-6 md:pb-0 md:pr-8"}`}>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#f4f5f8] tracking-tight font-mono">
                {km.value}
              </div>
              <div className="text-xs sm:text-sm text-[#f4f5f8] font-semibold uppercase tracking-wide">
                {km.label[lang]}
              </div>
              <div className="text-xs text-[#8b90a0] font-light">
                {km.subtext[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
