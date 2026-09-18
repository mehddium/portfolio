"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function M3Footer() {
  const { lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[var(--m3-outline-variant)]/60 text-xs font-mono text-[var(--m3-on-surface-variant)] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p className="text-[var(--m3-on-surface)] font-medium">
          © {new Date().getFullYear()} {portfolioData.profile.name}.{" "}
          <span className="text-[var(--m3-primary)]">Material You / M3 Edition.</span>
        </p>
        <p className="text-[11px] text-[var(--m3-on-surface-variant)] mt-0.5">
          Built with Next.js 15, Tailwind CSS v4, Bun & GitHub Pages.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={portfolioData.profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--m3-surface-container-high)] text-[var(--m3-on-surface)] hover:text-[var(--m3-primary)] transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[var(--m3-primary-container)] text-[var(--m3-on-primary-container)] font-semibold hover:shadow-xs active:scale-95 transition-all"
          title={lang === "fr" ? "Retour en haut" : "Back to top"}
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Top</span>
        </button>
      </div>
    </footer>
  );
}
