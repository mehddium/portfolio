"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { GitPullRequest, GitCommit, Star, ExternalLink, Activity, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function GithubStatsSection() {
  const { lang } = useLanguage();

  const metrics = [
    {
      label: { en: "Primary Focus", fr: "Axes Principaux" },
      value: "C / TS / NETWORKS",
      accent: "bg-[#FFE600]",
      icon: <GitCommit className="w-4 h-4 text-black" />,
    },
    {
      label: { en: "CI/CD & DevOps", fr: "CI/CD & DevOps" },
      value: "GITHUB ACTIONS / BUN",
      accent: "bg-[#00F0FF]",
      icon: <GitPullRequest className="w-4 h-4 text-black" />,
    },
    {
      label: { en: "Open Source Code", fr: "Dépôts Publics" },
      value: "MEHDDIUM (PUBLIC)",
      accent: "bg-[#4ADE80]",
      icon: <Star className="w-4 h-4 text-black" />,
    },
    {
      label: { en: "Build Engines", fr: "Outils de Build" },
      value: "BUN / NEXT.JS / MAKE",
      accent: "bg-[#FF8E3C]",
      icon: <Activity className="w-4 h-4 text-black" />,
    },
  ];

  return (
    <section className="py-20 border-b-2 border-black dark:border-zinc-800">
      <div className="p-6 sm:p-8 bg-white dark:bg-[#14151B] border-2 border-black dark:border-zinc-700 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#000]">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b-2 border-black dark:border-zinc-800 pb-6">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-[#FFE600] border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              <GithubIcon className="w-6 h-6 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-black dark:text-white font-mono uppercase">
                  github.com/{portfolioData.profile.githubUsername}
                </h3>
                <span className="w-2.5 h-2.5 bg-emerald-500 border border-black animate-pulse" />
              </div>
              <p className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 mt-0.5">
                {lang === "fr" ? "Activité technique et dépôts de code" : "Open Source & Academic Repositories"}
              </p>
            </div>
          </div>

          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-black text-white dark:bg-white dark:text-black border-2 border-black shadow-[3px_3px_0px_0px_#FFE600] font-mono text-xs font-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
          >
            <span>{lang === "fr" ? "Visiter le profil" : "View Profile"}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#FDFBF7] dark:bg-[#0D0E12] border-2 border-black dark:border-zinc-800 flex flex-col justify-between shadow-[2px_2px_0px_0px_#000]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {m.label[lang]}
                </span>
                <div className={`p-1 border border-black ${m.accent}`}>
                  {m.icon}
                </div>
              </div>
              <span className="text-xs font-mono font-black text-black dark:text-white">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
