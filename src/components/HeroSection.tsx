"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Copy, Check, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

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
    <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
      <div className="max-w-4xl space-y-10">
        {/* Availability pill - clean, breathing, no box-in-box */}
        <div className="inline-flex items-center gap-2.5 text-xs text-neutral-300 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white">{portfolioData.profile.status[lang]}</span>
          <span className="text-neutral-500">&middot;</span>
          <span className="text-neutral-400">{portfolioData.profile.location}</span>
        </div>

        {/* Headline */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.14]">
            {lang === "fr" ? (
              <>
                Programmation système <span className="text-blue-400">Unix en C</span> et architectures <span className="text-neutral-200">web modernes</span>.
              </>
            ) : (
              <>
                Low-level systems in <span className="text-blue-400">Unix C</span> and modern <span className="text-neutral-200">web engineering</span>.
              </>
            )}
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            {portfolioData.profile.bio[lang].intro}
          </p>
        </div>

        {/* Action Row - Clean and spacious */}
        <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
          <a
            href="#projets"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition-all shadow-sm"
          >
            <span>{lang === "fr" ? "Explorer les projets" : "Explore projects"}</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#181a25] border border-[#2c3042] text-neutral-200 hover:text-white hover:border-[#3e445e] transition-all"
          >
            <FileText className="w-4 h-4 text-neutral-400" />
            <span>{lang === "fr" ? "Consulter le CV (PDF)" : "View resume (PDF)"}</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#151722] border border-[#252838] text-xs text-neutral-300 hover:text-white hover:border-[#35394d] transition-colors"
            title="Copier l'email"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">
                  {lang === "fr" ? "Email copié !" : "Email copied!"}
                </span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
                <span>{portfolioData.profile.email}</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-3 pl-2 text-neutral-400">
            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-xs"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>

            <span className="text-neutral-600">&middot;</span>

            <a
              href={portfolioData.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-xs"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>
          </div>
        </div>

        {/* Key Metrics - Clean row with breathing room, no nested boxes */}
        <div className="pt-10 border-t border-[#232635] grid grid-cols-2 sm:grid-cols-4 gap-8">
          {portfolioData.keyMetrics.map((km, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {km.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-300 font-medium">
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
