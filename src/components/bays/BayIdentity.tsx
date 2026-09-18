"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Terminal, Cpu, LayoutGrid, Sparkles } from "lucide-react";

interface BayIdentityProps {
  onExplore: () => void;
}

export default function BayIdentity({ onExplore }: BayIdentityProps) {
  const { lang } = useLanguage();
  const bio = portfolioData.profile.bio[lang];

  return (
    <section className="horizontal-bay w-[92vw] sm:w-[80vw] md:w-[68vw] lg:w-[58vw] min-w-[320px] md:min-w-[640px] bg-[#07080b] flex flex-col justify-between select-text">
      {/* Top Section Index */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="text-sky-400 font-bold">00</span>
          <span className="text-neutral-500">// SPECIFICATION & ARCHITECTURE</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] uppercase font-semibold">
            {portfolioData.profile.status[lang]}
          </span>
        </div>
      </div>

      {/* Main Content: Monumental Typography & Blueprint Grid */}
      <div className="my-auto py-6 space-y-6">
        {/* Role & Name Spec */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-400">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>{portfolioData.profile.role[lang]}</span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-500">{portfolioData.profile.location}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            {portfolioData.profile.name}
            <span className="text-sky-400">.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-light leading-snug max-w-xl">
            {bio.headline}
          </p>
        </div>

        {/* Dual Core Pillars: Low-level C Systems vs Modern Web Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* Pillar 1: Systems */}
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-sky-400/30 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-sky-400 font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>01. SYSTEMS & POSIX</span>
              </span>
              <span className="text-neutral-500 text-[10px]">C99 / C11</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              {lang === "fr"
                ? "Serveurs réseau TCP concurrents, programmation sockets POSIX, allocateurs mémoire et outils Unix système."
                : "Concurrent TCP network servers, POSIX socket orchestration, custom heap allocators, and Unix system tooling."}
            </p>
          </div>

          {/* Pillar 2: Reactive Web */}
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-sky-400/30 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>02. REACTIVE WEB</span>
              </span>
              <span className="text-neutral-500 text-[10px]">NEXT.JS 15</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              {lang === "fr"
                ? "Plateformes web modulaires en App Router, TypeScript strict, interfaces réactives et architecture fluide."
                : "Modular web platforms in Next.js App Router, strict TypeScript, responsive interfaces, and clean UI engineering."}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Action & Horizontal Scroll Prompt */}
      <div className="border-t border-white/[0.06] pt-3 flex items-center justify-between">
        <p className="text-xs text-neutral-500 font-mono hidden sm:block">
          {lang === "fr" ? "Ruban architectural continu" : "Continuous architectural strip"}
        </p>

        <button
          onClick={onExplore}
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-mono transition-all active:scale-[0.98]"
        >
          <span>{lang === "fr" ? "Explorer le ruban" : "Explore Linear Canvas"}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
