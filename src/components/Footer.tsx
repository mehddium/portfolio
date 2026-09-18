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
    <footer className="py-12 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-black dark:border-zinc-800">
      <div>
        <p className="text-black dark:text-white uppercase">
          © {new Date().getFullYear()} {portfolioData.profile.name}.{" "}
          <span className="px-1.5 py-0.5 bg-[#FFE600] text-black border border-black text-[10px] ml-1">
            NEO-BRUTALIST EDITION
          </span>
        </p>
        <p className="text-[11px] text-zinc-500 mt-1">
          Built with Next.js 15, Tailwind CSS v4, Bun & GitHub Pages.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={portfolioData.profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-zinc-900 text-black dark:text-white border-2 border-black dark:border-zinc-700 shadow-[2px_2px_0px_0px_#000] hover:bg-[#FFE600] hover:text-black transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GITHUB</span>
        </a>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFE600] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
          title={lang === "fr" ? "Retour en haut" : "Back to top"}
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>TOP</span>
        </button>
      </div>
    </footer>
  );
}
