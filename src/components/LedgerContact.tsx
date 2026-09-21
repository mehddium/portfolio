"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Copy, Check, FileText, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface LedgerContactProps {
  onOpenResume: () => void;
}

export default function LedgerContact({ onOpenResume }: LedgerContactProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="space-y-16">
        {/* Main Dispatch Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Intent & Parameters (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="text-xs text-[#3b82f6] font-medium">
              {lang === "fr" ? "Recrutement & prise de contact" : "Recruitment & contact"}
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f5f8] uppercase leading-tight">
              {lang === "fr" ? (
                <>
                  Engageons la <span className="text-[#3b82f6]">discussion</span>.
                </>
              ) : (
                <>
                  Let&apos;s start the <span className="text-[#3b82f6]">dialogue</span>.
                </>
              )}
            </h2>

            <p className="text-base text-[#8b90a0] font-light leading-relaxed">
              {lang === "fr"
                ? "Je recherche activement un stage ou une alternance pour l'année 2025–2026. Qu'il s'agisse de relever des défis systèmes en C (réseau, mémoire, descripteurs) ou de bâtir des applications web réactives Next.js/TypeScript, je suis disponible pour échanger."
                : "I am actively seeking an internship or apprenticeship for 2025–2026. Whether on low-level C challenges (POSIX networking, custom allocators) or modern fullstack web development with TypeScript/Next.js, I am ready to collaborate."}
            </p>

            {/* Availability Specimen */}
            <div className="border-t border-[#222533] pt-6 space-y-2 text-xs font-mono text-[#8b90a0]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-400" />
                <span className="text-[#f4f5f8] font-sans font-semibold">
                  STATUS: {portfolioData.profile.status[lang]}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#3b82f6]" />
                <span>
                  {lang === "fr"
                    ? "MOBILITÉ: France entière (sur site, hybride ou télétravail)"
                    : "MOBILITY: France (on-site, hybrid, remote)"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Routes (Zero Card-in-Card) (lg:col-span-7) */}
          <div className="lg:col-span-7 border border-[#222533] divide-y divide-[#222533] bg-[#0e1017]">
            {/* Route 01: Direct Email Channel */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#8b90a0]">
                <span className="text-[#3b82f6] font-semibold">{lang === "fr" ? "Canal prioritaire" : "Primary route"}</span>
                <span className="font-mono text-[11px]">DIRECT</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#f4f5f8] tracking-tight">
                  {lang === "fr" ? "Courrier électronique direct" : "Direct Email Channel"}
                </h3>
                <p className="text-xs sm:text-sm text-[#8b90a0] font-light">
                  {lang === "fr"
                    ? "Garantie de réponse technique sous 24 à 48 heures."
                    : "Technical reply guaranteed within 24 to 48 hours."}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f4f5f8] text-[#0e1017] hover:bg-white text-xs font-semibold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === "fr" ? "Envoyer un email" : "Send email"}</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#151822] border border-[#222533] text-xs font-mono text-[#8b90a0] hover:text-[#f4f5f8] hover:border-[#3b82f6] transition-colors"
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
              </div>
            </div>

            {/* Route 02: Curriculum Dossier */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#8b90a0]">
                <span className="text-[#3b82f6] font-semibold">{lang === "fr" ? "Dossier de candidature" : "Application file"}</span>
                <span className="font-mono text-[11px]">PDF</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#f4f5f8] tracking-tight">
                  {lang === "fr" ? "Curriculum Vitae imprimable & PDF" : "Curriculum Vitae PDF Dossier"}
                </h3>
                <p className="text-xs sm:text-sm text-[#8b90a0] font-light">
                  {lang === "fr"
                    ? "Synthèse complète de la formation universitaire, des compétences et des projets d'ingénierie."
                    : "Complete overview of university education, technical competencies, and engineering projects."}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#151822] border border-[#222533] text-[#f4f5f8] hover:border-[#3b82f6] hover:bg-[#1a1e2b] text-xs font-semibold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#8b90a0]" />
                  <span>{lang === "fr" ? "Ouvrir le dossier CV (PDF)" : "Open resume dossier (PDF)"}</span>
                </button>
              </div>
            </div>

            {/* Route 03: Source Code Repositories */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#8b90a0]">
                <span className="text-[#3b82f6] font-semibold">{lang === "fr" ? "Code & réseaux" : "Code & profiles"}</span>
                <span className="font-mono text-[11px]">LINKS</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#f4f5f8] tracking-tight">
                  {lang === "fr" ? "Dépôts Git & profil professionnel" : "Public Git Repositories & Profiles"}
                </h3>
                <p className="text-xs sm:text-sm text-[#8b90a0] font-light">
                  {lang === "fr"
                    ? "Historique des commits, revues de code et projets open source."
                    : "Commit history, code reviews, and open source repositories."}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-medium">
                <a
                  href={portfolioData.profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#8b90a0] hover:text-[#f4f5f8] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub ({portfolioData.profile.githubUsername})</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>

                <a
                  href={portfolioData.profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#8b90a0] hover:text-[#f4f5f8] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Colophon Banner */}
        <div className="border-t border-[#222533] pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#8b90a0]">
          <div className="flex items-center gap-3">
            <span className="text-[#f4f5f8] font-bold font-sans uppercase">{portfolioData.profile.name}</span>
            <span>/</span>
            <span>SWISS ARCHITECTURAL LEDGER SYSTEM</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span>NEXT.JS 16 (TURBOPACK)</span>
            <span>&middot;</span>
            <span>TYPESCRIPT STRICT</span>
            <span>&middot;</span>
            <span>WCAG AAA COMPLIANT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
