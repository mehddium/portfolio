"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { GitPullRequest, GitCommit, Star, ExternalLink, Activity } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function GithubStatsSection() {
  const { lang } = useLanguage();

  const metrics = [
    {
      label: { en: "Primary Focus", fr: "Axes Principaux" },
      value: "C / TS / Networks",
      icon: <GitCommit className="w-4 h-4 text-neutral-400" />,
    },
    {
      label: { en: "Version Control", fr: "Gestion de Versions" },
      value: "Git & GitHub CI/CD",
      icon: <GitPullRequest className="w-4 h-4 text-neutral-400" />,
    },
    {
      label: { en: "Open Source Code", fr: "Dépôts Publics" },
      value: "github.com/mehddium",
      icon: <Star className="w-4 h-4 text-neutral-400" />,
    },
    {
      label: { en: "Build System", fr: "Outils de Build" },
      value: "Bun / Next.js / Make",
      icon: <Activity className="w-4 h-4 text-neutral-400" />,
    },
  ];

  return (
    <section className="py-20 border-b border-neutral-800/60">
      <div className="p-8 rounded-xl bg-neutral-900/40 border border-neutral-800/80 relative overflow-hidden">
        {/* Background Subtle Badge */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-neutral-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-neutral-800 rounded-lg border border-neutral-700">
              <GithubIcon className="w-6 h-6 text-neutral-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-neutral-100">
                  github.com/{portfolioData.profile.githubUsername}
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-xs font-mono text-neutral-400 mt-0.5">
                {lang === "fr" ? "Activité technique et dépôts de code" : "Open Source & Academic Repositories"}
              </p>
            </div>
          </div>

          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded bg-neutral-100 text-neutral-950 font-mono text-xs font-bold hover:bg-neutral-300 transition-colors"
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
              className="p-4 rounded bg-neutral-950/80 border border-neutral-850 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-neutral-400 mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider">{m.label[lang]}</span>
                {m.icon}
              </div>
              <span className="text-sm font-mono font-bold text-neutral-100">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
