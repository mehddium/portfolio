"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Copy, Check, ArrowUpRight, FileText } from "lucide-react";

interface ContactSectionProps {
  onOpenResume: () => void;
}

export default function ContactSection({ onOpenResume }: ContactSectionProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 max-w-5xl mx-auto border-t border-[#262935]">
      <div className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            {lang === "fr" ? "Discutons d'une opportunité" : "Let's connect"}
          </h2>

          <p className="text-base text-neutral-300 font-light leading-relaxed">
            {lang === "fr"
              ? "Je recherche activement un stage ou une alternance pour l'année 2025–2026. Que ce soit pour un poste orienté bas niveau C/système, réseau ou développement fullstack Next.js, je serai ravi d'échanger avec vous."
              : "I'm actively looking for an internship or apprenticeship for 2025–2026. Whether for systems programming in C, networking, or modern fullstack Next.js engineering, I'd be happy to discuss."}
          </p>
        </div>

        {/* Minimal action links (no cards!) */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{lang === "fr" ? "Email copié !" : "Email copied!"}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{portfolioData.profile.email}</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#2e3240] text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
          >
            <span>{lang === "fr" ? "Ouvrir votre messagerie" : "Send email"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#2e3240] text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
          >
            <FileText className="w-4 h-4 text-neutral-400" />
            <span>{lang === "fr" ? "Consulter le CV (PDF)" : "View resume"}</span>
          </button>

          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2.5 text-neutral-400 hover:text-white transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Minimal Quiet Footer */}
        <div className="pt-12 border-t border-[#262935] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            <span>{portfolioData.profile.name} &middot; {portfolioData.profile.role[lang]}</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Next.js 16</span>
            <span>&middot;</span>
            <span>TypeScript</span>
            <span>&middot;</span>
            <span>Accessible W3C/WCAG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
