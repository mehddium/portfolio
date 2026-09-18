"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { FileText } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 text-neutral-950 font-medium hover:text-blue-600 transition-colors">
          <span className="font-semibold text-sm tracking-tight">{portfolioData.profile.name}</span>
          <span className="text-neutral-400 text-xs font-mono">/</span>
          <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
            {lang === "fr" ? "Systèmes & Web" : "Systems & Web"}
          </span>
        </a>

        {/* Navigation links & controls */}
        <nav className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5 text-xs font-mono text-neutral-600">
            <a href="#projects" className="hover:text-neutral-950 transition-colors">
              {lang === "fr" ? "Projets" : "Projects"}
            </a>
            <a href="#capabilities" className="hover:text-neutral-950 transition-colors">
              {lang === "fr" ? "Compétences" : "Capabilities"}
            </a>
            <a href="#trajectory" className="hover:text-neutral-950 transition-colors">
              {lang === "fr" ? "Parcours" : "Trajectory"}
            </a>
            <a href="#contact" className="hover:text-neutral-950 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2.5 pl-2">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="text-xs font-mono px-2 py-1 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 rounded transition-colors"
              title="Toggle language"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            {/* Resume / CV */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 transition-colors"
            >
              <FileText className="w-3 h-3" />
              <span>CV</span>
            </button>

            {/* GitHub */}
            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-neutral-600 hover:text-neutral-950 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
