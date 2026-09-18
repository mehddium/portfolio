"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Footer() {
  const { lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 text-xs font-mono text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-850">
      <div>
        <p className="text-neutral-400">
          © {new Date().getFullYear()} {portfolioData.profile.name}.{" "}
          <span className="text-neutral-600">Swiss Minimalist Edition.</span>
        </p>
        <p className="text-[11px] text-neutral-600 mt-0.5">
          Built with Next.js 15, Tailwind CSS v4, Bun & GitHub Pages.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a
          href={portfolioData.profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-neutral-300 transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-neutral-300 transition-colors px-2 py-1 rounded bg-neutral-900 border border-neutral-800"
          title={lang === "fr" ? "Retour en haut" : "Back to top"}
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Top</span>
        </button>
      </div>
    </footer>
  );
}
