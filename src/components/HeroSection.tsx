"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowRight,
  FileText,
  Copy,
  Check,
} from "lucide-react";

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
    <section className="pt-32 sm:pt-40 pb-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.07] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{portfolioData.profile.status[lang]}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-400">
            <span>{portfolioData.profile.location}</span>
          </div>
        </div>

        {/* Main Headline & 10-Second Pitch */}
        <div className="space-y-6 max-w-4xl">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-400">
            {portfolioData.profile.name} {" // "} {portfolioData.profile.role[lang]}
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            {lang === "fr" ? (
              <>
                De la programmation <span className="text-cyan-400 font-serif italic font-normal">C bas niveau</span> au développement{" "}
                <span className="text-emerald-400 font-serif italic font-normal">web fullstack</span>.
              </>
            ) : (
              <>
                From low-level <span className="text-cyan-400 font-serif italic font-normal">POSIX C</span> to modern{" "}
                <span className="text-emerald-400 font-serif italic font-normal">fullstack web</span> architecture.
              </>
            )}
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            {portfolioData.profile.pitch[lang]}
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
          <a
            href="#projets"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-bold hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <span>{lang === "fr" ? "Explorer les projets & études de cas" : "Explore Case Studies"}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-semibold transition-colors"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>{lang === "fr" ? "Consulter le CV (PDF)" : "View Resume (PDF)"}</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white transition-colors"
            title="Copier l'email"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{lang === "fr" ? "Email copié !" : "Email copied!"}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-neutral-400" />
                <span>{portfolioData.profile.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Measurable Key Metrics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08]">
          {portfolioData.keyMetrics.map((km, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                {km.value}
              </div>
              <div className="text-xs font-bold text-white tracking-tight">
                {km.label[lang]}
              </div>
              <div className="text-[11px] font-mono text-neutral-500">
                {km.subtext[lang]}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Terminal / Code Teaser */}
        <div className="rounded-2xl bg-neutral-950 border border-neutral-800/80 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/80 border-b border-neutral-800 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-neutral-300">mehdi@dev-systems:~# ./verify-profile.sh</span>
            </div>
            <span className="text-[11px] text-neutral-500">ANSI C &bull; POSIX &bull; Next.js 16</span>
          </div>

          <div className="p-5 font-mono text-xs sm:text-sm text-neutral-300 space-y-2 leading-relaxed overflow-x-auto">
            <p className="text-emerald-400">[✓] Target: Software & Systems Engineering / Fullstack</p>
            <p className="text-neutral-400">
              [✓] Stack 1: POSIX C (pthreads, sockets, poll multiplexing, manual heap alloc)
            </p>
            <p className="text-neutral-400">
              [✓] Stack 2: React 19, Next.js 16 (App Router, Server Actions, TypeScript strict)
            </p>
            <p className="text-cyan-400">
              [✓] Audits: Valgrind Memcheck = 0 errors | 0 bytes leaked in 10k requests
            </p>
            <p className="text-neutral-500">
              [i] Ready to ship resilient, high-performance software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
