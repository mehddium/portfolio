"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Code2, Cpu, Network, Sparkles } from "lucide-react";

interface SceneIdentityProps {
  onScrollDown: () => void;
}

export default function SceneIdentity({ onScrollDown }: SceneIdentityProps) {
  const { lang } = useLanguage();

  return (
    <section className="cinematic-slide glow-blue px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>{portfolioData.profile.status[lang]}</span>
        </div>

        {/* Big Narrative Statement */}
        <div className="space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            {lang === "fr" ? "Ingénieur Logiciel & Systèmes" : "Software & Systems Engineer"}
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
        </div>

        {/* Narrative Description */}
        <p className="text-base sm:text-xl text-neutral-400 leading-relaxed max-w-2xl font-light">
          {portfolioData.profile.bio[lang].description}
        </p>

        {/* 3 Pillars Summary */}
        <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs text-neutral-300">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Low-Level Systems & Sockets</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>Next.js 15 & TypeScript</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10">
            <Network className="w-4 h-4 text-purple-400" />
            <span>POSIX Concurrency & pthreads</span>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="pt-8">
          <button
            onClick={onScrollDown}
            className="group inline-flex items-center gap-2 font-mono text-xs text-neutral-500 hover:text-white transition-colors"
          >
            <span>{lang === "fr" ? "Faites défiler ou appuyez sur ↓" : "Scroll to explore ↓"}</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
