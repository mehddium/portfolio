"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ClayFooter() {
  const { lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 font-semibold">
          © {new Date().getFullYear()} {portfolioData.profile.name}.{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-normal">Claymorphism Edition.</span>
        </p>
        <p className="text-[11px] text-neutral-400 mt-0.5">
          Built with Next.js 15, Tailwind CSS v4, Bun & GitHub Pages.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={portfolioData.profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl clay-btn text-neutral-700 dark:text-neutral-300 hover:text-indigo-500 transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 px-3 py-1.5 rounded-xl clay-primary shadow-sm hover:scale-105 active:scale-95 transition-all"
          title={lang === "fr" ? "Retour en haut" : "Back to top"}
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Top</span>
        </button>
      </div>
    </footer>
  );
}
