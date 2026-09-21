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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Pitch & Availability Context */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-400">
              <Mail className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Recrutement & Contact" : "Recruitment & Contact"}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
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

            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
              {lang === "fr"
                ? "Je recherche activement un stage ou une alternance pour l'année 2025–2026. Que ce soit sur des problématiques bas niveau en C (systèmes, réseaux, performance) ou sur du développement web fullstack en TypeScript/Next.js, je suis prêt à m'investir au sein d'une équipe exigeante."
                : "I am actively looking for an internship or apprenticeship for 2025–2026. Whether on low-level C challenges (systems, networking, memory performance) or modern fullstack web development with TypeScript/Next.js, I am eager to contribute to an engineering team."}
            </p>

            <div className="pt-2 space-y-3 text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{portfolioData.profile.status[lang]}</span>
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

          {/* Right Column: Interactive Contact Hub Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#161824]/90 border border-[#262a3c] p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {lang === "fr" ? "Canaux directs" : "Direct Channels"}
                </h3>
                <p className="text-xs text-neutral-400 font-light">
                  {lang === "fr"
                    ? "Réponse assurée sous 24 à 48 heures."
                    : "Guaranteed response within 24 to 48 hours."}
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-400 block">
                  {lang === "fr" ? "Adresse email professionnelle" : "Professional Email"}
                </label>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#13151f] border border-[#252839] gap-3">
                  <span className="text-xs sm:text-sm text-neutral-200 font-mono truncate select-all">
                    {portfolioData.profile.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#202332] hover:bg-[#282c3f] text-neutral-200 hover:text-white text-xs font-medium transition-colors border border-[#2b3042]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">
                          {lang === "fr" ? "Copié" : "Copied"}
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{lang === "fr" ? "Copier" : "Copy"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition-all text-xs shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === "fr" ? "Écrire un email" : "Send an email"}</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1d202e] border border-[#2c3144] text-neutral-200 hover:text-white hover:border-[#3e445e] transition-all text-xs font-medium"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{lang === "fr" ? "Consulter le CV" : "View resume"}</span>
                </button>
              </div>

              {/* External Profiles */}
              <div className="pt-4 border-t border-[#232635] flex items-center justify-between text-xs text-neutral-400">
                <span>{lang === "fr" ? "Profils en ligne" : "Profiles"}</span>
                <div className="flex items-center gap-4">
                  <a
                    href={portfolioData.profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </a>

                  <a
                    href={portfolioData.profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer Banner */}
        <div className="pt-12 border-t border-[#232635] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400 font-light">
          <div className="flex items-center gap-2">
            <span className="font-medium text-neutral-300">{portfolioData.profile.name}</span>
            <span>&middot;</span>
            <span>{portfolioData.profile.role[lang]}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-neutral-400">
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
