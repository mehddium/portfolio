"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface LinearHUDProps {
  currentBay: number;
  totalBays: number;
  scrollPercentage: number;
  onJumpToBay: (index: number) => void;
  onOpenResume: () => void;
}

export default function LinearHUD({
  currentBay,
  totalBays,
  scrollPercentage,
  onJumpToBay,
  onOpenResume,
}: LinearHUDProps) {
  const { lang, toggleLang } = useLanguage();

  const bayLabels = [
    { en: "SPEC // IDENTITY", fr: "SPEC // IDENTITÉ" },
    { en: "LAB // POSIX & SYSTEMS", fr: "LAB // SYSTÈMES & POSIX" },
    { en: "ARCH // REACTIVE WEB", fr: "ARCH // WEB FULLSTACK" },
    { en: "SPECTRUM // MATRIX & TIMELINE", fr: "SPECTRUM // MATRICE & PARCOURS" },
    { en: "DISPATCH // CONNECT", fr: "DISPATCH // CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 px-5 sm:px-8 flex items-center justify-between border-b border-white/[0.06] bg-[#07080b]/80 backdrop-blur-md pointer-events-auto">
      {/* Left: Identity & Coordinate */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => onJumpToBay(0)}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <span className="w-2 h-2 rounded-sm bg-sky-400 rotate-45 group-hover:rotate-90 transition-transform duration-300" />
          <span className="font-mono font-bold text-xs tracking-wider uppercase text-neutral-100 group-hover:text-sky-400 transition-colors">
            {portfolioData.profile.name}
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-500">
            / SYS-ENG
          </span>
        </button>

        {/* Live Coordinate Indicator */}
        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-white/[0.08] text-[11px] font-mono">
          <span className="text-neutral-500">BAY:</span>
          <span className="text-sky-400 font-semibold">
            0{currentBay} / 0{totalBays - 1}
          </span>
          <span className="text-neutral-600 ml-1 font-light">
            [{bayLabels[currentBay]?.[lang]}]
          </span>
        </div>
      </div>

      {/* Right: Quick actions */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Language switch */}
        <button
          onClick={toggleLang}
          className="px-2.5 py-1 text-[11px] font-mono rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-300 hover:text-white transition-colors"
          title={lang === "fr" ? "Passer en anglais" : "Switch to French"}
        >
          <span className="text-neutral-500 mr-1">LOC:</span>
          <span className="text-sky-400 font-bold">{lang.toUpperCase()}</span>
        </button>

        {/* CV / Spec Trigger */}
        <button
          onClick={onOpenResume}
          className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono rounded bg-neutral-100 text-black font-semibold hover:bg-white active:scale-[0.98] transition-all"
        >
          <FileText className="w-3 h-3 text-neutral-900" />
          <span className="tracking-wide">CV.PDF</span>
        </button>

        {/* GitHub Source */}
        <a
          href={portfolioData.profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-400 hover:text-white transition-colors"
          title="GitHub Profile"
        >
          <GithubIcon className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}
