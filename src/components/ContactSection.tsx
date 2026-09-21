"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Check, Copy, FileText, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

interface ContactSectionProps {
  onOpenResume: () => void;
}

export default function ContactSection({ onOpenResume }: ContactSectionProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-8 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>{lang === "fr" ? "05 // Contact & Recrutement" : "05 // Connect & Opportunities"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {lang === "fr" ? (
              <>
                Concevons des systèmes <span className="text-purple-400 font-serif italic font-normal">solides</span> & performants.
              </>
            ) : (
              <>
                Let&apos;s build <span className="text-purple-400 font-serif italic font-normal">resilient</span> & high-performance software.
              </>
            )}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
            {lang === "fr"
              ? "Ouvert aux opportunités de stage, alternance et collaborations techniques sur des systèmes C, réseaux POSIX ou plateformes web Next.js modernes."
              : "Open to engineering internships, technical apprenticeships, and high-impact software/systems projects."}
          </p>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Email Direct Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                {lang === "fr" ? "Email Direct" : "Direct Email"}
              </p>
              <p className="text-sm font-medium text-white break-all">
                {portfolioData.profile.email}
              </p>
            </div>

            <div className="flex gap-2 pt-2 font-mono text-xs">
              <button
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === "fr" ? "Copié !" : "Copied!"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{lang === "fr" ? "Copier" : "Copy"}</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${portfolioData.profile.email}`}
                className="p-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 transition-colors flex items-center justify-center"
                title="Send direct email"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <GitHubIcon className="w-5 h-5 fill-cyan-400" />
              </div>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">GitHub</p>
              <p className="text-sm font-medium text-white">@{portfolioData.profile.githubUsername}</p>
            </div>

            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-mono text-xs transition-colors"
            >
              <span>{lang === "fr" ? "Consulter les dépôts" : "Inspect Repositories"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Printable Resume Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                {lang === "fr" ? "Curriculum Vitae" : "Resume"}
              </p>
              <p className="text-sm font-medium text-white">
                {lang === "fr" ? "Version PDF & Imprimable" : "Printable & PDF Document"}
              </p>
            </div>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-semibold transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Consulter le CV" : "Open Resume"}</span>
            </button>
          </div>
        </div>

        {/* Technical Footer & Standards declaration */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div>
            <span>{portfolioData.profile.name} &bull; {portfolioData.profile.role[lang]}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-neutral-500 text-[11px]">
            <span>Next.js 16 App Router</span>
            <span>&bull;</span>
            <span>TypeScript 5</span>
            <span>&bull;</span>
            <span>W3C & Opquast Accessible</span>
            <span>&bull;</span>
            <span>No Cookies / 100% Privacy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
