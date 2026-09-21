"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Copy, Check, ArrowUpRight, FileText, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

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
    <section id="contact" className="py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-t border-[#232635]">
      <div className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Pitch & Availability Context (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-400">
              <Mail className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Recrutement & Contact" : "Recruitment & Contact"}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#f0f2f5] leading-tight">
              {lang === "fr" ? (
                <>
                  Échangeons sur votre <span className="text-blue-400">prochaine opportunité</span>.
                </>
              ) : (
                <>
                  Let&apos;s discuss your <span className="text-blue-400">next engineering need</span>.
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-[#8e94a5] font-light leading-relaxed">
              {lang === "fr"
                ? "Je recherche activement un stage ou une alternance pour l'année 2025–2026. Que ce soit sur des problématiques bas niveau en C (systèmes, réseaux, performance) ou sur du développement web fullstack en TypeScript/Next.js, je suis prêt à m'investir au sein d'une équipe exigeante."
                : "I am actively looking for an internship or apprenticeship for 2025–2026. Whether on low-level C challenges (systems, networking, memory performance) or modern fullstack web development with TypeScript/Next.js, I am eager to contribute to an engineering team."}
            </p>

            <div className="pt-2 space-y-2 text-sm text-[#8e94a5]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[#f0f2f5] font-medium">{portfolioData.profile.status[lang]}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>
                  {lang === "fr"
                    ? "Mobilité : France entière (sur site, hybride ou télétravail)"
                    : "Location: France (On-site, Hybrid or Remote)"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Open Direct Channels Index (Zero Card-in-Card) (lg:col-span-7) */}
          <div className="lg:col-span-7 divide-y divide-[#232635]">
            {/* Email Channel */}
            <div className="pb-8 space-y-4">
              <span className="text-xs font-medium text-blue-400 block">
                {lang === "fr" ? "Canal prioritaire" : "Primary Channel"}
              </span>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-[#f0f2f5] tracking-tight">
                  {lang === "fr" ? "Courrier électronique" : "Direct Email"}
                </h3>
                <p className="text-xs sm:text-sm text-[#8e94a5] font-light">
                  {lang === "fr"
                    ? "Réponse assurée sous 24 à 48 heures pour toute opportunité technique."
                    : "Guaranteed response within 24 to 48 hours for technical opportunities."}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#f0f2f5] text-[#12141c] font-medium hover:bg-white transition-all text-xs shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === "fr" ? "Écrire un email" : "Send email"}</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#181b26] border border-[#232635] text-xs text-[#8e94a5] hover:text-[#f0f2f5] hover:border-[#35394d] transition-colors"
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
                      <Copy className="w-3.5 h-3.5 text-[#8e94a5]" />
                      <span className="font-mono text-neutral-300">{portfolioData.profile.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Resume Channel */}
            <div className="py-8 space-y-4">
              <span className="text-xs font-medium text-[#8e94a5] block">
                {lang === "fr" ? "Dossier de candidature" : "Application Dossier"}
              </span>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-[#f0f2f5] tracking-tight">
                  {lang === "fr" ? "Curriculum Vitae détaillé" : "Detailed Resume"}
                </h3>
                <p className="text-xs sm:text-sm text-[#8e94a5] font-light">
                  {lang === "fr"
                    ? "Parcours académique, synthèses de projets systèmes et web, compétences clés au format imprimable ou PDF."
                    : "Academic background, systems and web projects overview, core skills in printable or PDF format."}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#181b26] border border-[#232635] text-[#f0f2f5] hover:border-[#35394d] hover:bg-[#202332] transition-all text-xs font-medium"
                >
                  <FileText className="w-3.5 h-3.5 text-[#8e94a5]" />
                  <span>{lang === "fr" ? "Consulter le CV interactif" : "Open interactive resume"}</span>
                </button>
              </div>
            </div>

            {/* Social & Code Profiles */}
            <div className="pt-8 space-y-4">
              <span className="text-xs font-medium text-[#8e94a5] block">
                {lang === "fr" ? "Code & Réseau" : "Source Code & Network"}
              </span>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-[#f0f2f5] tracking-tight">
                  {lang === "fr" ? "Profils professionnels" : "Professional Profiles"}
                </h3>
                <p className="text-xs sm:text-sm text-[#8e94a5] font-light">
                  {lang === "fr"
                    ? "Dépôts Git publics, commits et historique de contributions."
                    : "Public Git repositories, commit history, and technical presence."}
                </p>
              </div>

              <div className="flex items-center gap-6 pt-2 text-xs">
                <a
                  href={portfolioData.profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#8e94a5] hover:text-[#f0f2f5] transition-colors font-medium"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub ({portfolioData.profile.githubUsername})</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>

                <a
                  href={portfolioData.profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#8e94a5] hover:text-[#f0f2f5] transition-colors font-medium"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer Banner */}
        <div className="pt-12 border-t border-[#232635] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#8e94a5] font-light">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#f0f2f5]">{portfolioData.profile.name}</span>
            <span>&middot;</span>
            <span>{portfolioData.profile.role[lang]}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[#8e94a5]">
            <span>Next.js 16 (App Router)</span>
            <span>&middot;</span>
            <span>TypeScript strict</span>
            <span>&middot;</span>
            <span>WCAG AAA Accessible</span>
          </div>
        </div>
      </div>
    </section>
  );
}
