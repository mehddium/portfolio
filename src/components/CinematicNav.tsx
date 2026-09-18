"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Globe, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface CinematicNavProps {
  activeScene: number;
  totalScenes: number;
  onJumpToScene: (index: number) => void;
  onOpenResume: () => void;
}

export default function CinematicNav({
  activeScene,
  totalScenes,
  onJumpToScene,
  onOpenResume,
}: CinematicNavProps) {
  const { lang, toggleLang } = useLanguage();

  const sceneTitles = [
    { en: "01 // Vision & Identity", fr: "01 // Vision & Identité" },
    { en: "02 // Systems & Low-Level C", fr: "02 // Systèmes & C Bas Niveau" },
    { en: "03 // Modern Fullstack Web", fr: "03 // Web Fullstack Moderne" },
    { en: "04 // Technical Matrix", fr: "04 // Matrice Technique" },
    { en: "05 // Trajectory & Timeline", fr: "05 // Parcours & Formation" },
    { en: "06 // Connect & Collaborate", fr: "06 // Contact & Opportunités" },
  ];

  return (
    <>
      {/* Top Floating Glass Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between pointer-events-none">
        {/* Brand */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={() => onJumpToScene(0)}
            className="flex items-center gap-2.5 text-white hover:text-cyan-400 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-bold text-sm tracking-tight uppercase">
              {portfolioData.profile.name}
            </span>
          </button>

          <span className="hidden sm:inline-block text-xs font-mono text-neutral-500 pl-3 border-l border-white/10">
            {sceneTitles[activeScene]?.[lang]}
          </span>
        </div>

        {/* Actions */}
        <div className="pointer-events-auto flex items-center gap-3 font-mono text-xs">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-neutral-300 hover:text-white transition-colors"
          >
            [{lang === "fr" ? "FR" : "EN"}]
          </button>

          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV (PDF)</span>
          </button>

          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-neutral-300 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Side Vertical Pagination Dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 pointer-events-auto">
        {Array.from({ length: totalScenes }).map((_, idx) => {
          const isActive = activeScene === idx;
          return (
            <button
              key={idx}
              onClick={() => onJumpToScene(idx)}
              className="group flex items-center gap-2.5 py-1"
            >
              <span
                className={`text-[10px] font-mono transition-all duration-300 ${
                  isActive
                    ? "opacity-100 text-cyan-400 font-bold translate-x-0"
                    : "opacity-0 group-hover:opacity-80 text-neutral-400 translate-x-2 group-hover:translate-x-0"
                }`}
              >
                0{idx + 1}
              </span>
              <span
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-8 h-1 bg-cyan-400"
                    : "w-2 h-1 bg-white/20 group-hover:bg-white/50 group-hover:w-4"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
}
