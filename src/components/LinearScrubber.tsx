"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";

interface LinearScrubberProps {
  currentBay: number;
  totalBays: number;
  scrollPercentage: number;
  onJumpToBay: (index: number) => void;
}

export default function LinearScrubber({
  currentBay,
  totalBays,
  scrollPercentage,
  onJumpToBay,
}: LinearScrubberProps) {
  const { lang } = useLanguage();

  const bays = [
    { id: 0, title: { en: "00 SPEC", fr: "00 IDENTITÉ" } },
    { id: 1, title: { en: "01 SYSTEMS", fr: "01 SYSTÈMES" } },
    { id: 2, title: { en: "02 REACTIVE", fr: "02 WEB" } },
    { id: 3, title: { en: "03 MATRIX", fr: "03 MATRICE" } },
    { id: 4, title: { en: "04 DISPATCH", fr: "04 CONTACT" } },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-14 px-5 sm:px-8 flex items-center justify-between border-t border-white/[0.06] bg-[#07080b]/90 backdrop-blur-md pointer-events-auto select-none">
      {/* Left: Direction Controls & Keyboard Cue */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <button
            onClick={() => onJumpToBay(Math.max(0, currentBay - 1))}
            disabled={currentBay === 0}
            className="p-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] disabled:opacity-30 disabled:pointer-events-none border border-white/[0.08] text-neutral-300 hover:text-white transition-colors"
            title="Previous Bay"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onJumpToBay(Math.min(totalBays - 1, currentBay + 1))}
            disabled={currentBay === totalBays - 1}
            className="p-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] disabled:opacity-30 disabled:pointer-events-none border border-white/[0.08] text-neutral-300 hover:text-white transition-colors"
            title="Next Bay"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 pl-3 border-l border-white/[0.08]">
          <span className="px-1.5 py-0.5 rounded bg-white/[0.06] text-neutral-400 font-bold border border-white/[0.06]">
            ← / →
          </span>
          <span>{lang === "fr" ? "Naviguer au clavier ou molette" : "Navigate via keys or wheel"}</span>
        </div>
      </div>

      {/* Center: Linear Track Ruler & Bay Anchors */}
      <div className="hidden md:flex items-center gap-1 lg:gap-2">
        {bays.map((bay) => {
          const isActive = currentBay === bay.id;
          return (
            <button
              key={bay.id}
              onClick={() => onJumpToBay(bay.id)}
              className={`group flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                isActive
                  ? "bg-white/[0.08] text-sky-400 border border-sky-400/30 font-semibold"
                  : "text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.03]"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  isActive ? "bg-sky-400" : "bg-neutral-600 group-hover:bg-neutral-400"
                }`}
              />
              <span>{bay.title[lang]}</span>
            </button>
          );
        })}
      </div>

      {/* Right: Coordinate & Progress Metric */}
      <div className="flex items-center gap-3 text-xs font-mono">
        {/* Progress Bar Mini */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-24 h-1 bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-sky-400 transition-all duration-150 ease-out"
              style={{ width: `${scrollPercentage}%` }}
            />
          </div>
        </div>

        <span className="text-neutral-400 text-[11px] tabular-nums">
          <span className="text-neutral-600">POS:</span> {Math.round(scrollPercentage)}%
        </span>
      </div>
    </footer>
  );
}
