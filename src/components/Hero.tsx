"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import {
  Terminal,
  ArrowDown,
  ArrowUpRight,
  Mail,
  Check,
  FileText,
  Code2,
  Cpu,
  Network,
  Layout,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("314468480+mehddium@users.noreply.github.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const focusPillars = [
    {
      icon: <Code2 className="w-5 h-5 text-black" />,
      title: "Web Fullstack",
      subtitle: "Next.js 15, TypeScript, React 19, Bun",
      accent: "bg-[#FFE600]",
    },
    {
      icon: <Cpu className="w-5 h-5 text-black" />,
      title: "Systems & C",
      subtitle: "POSIX API, Memory Mgmt, Linux Kernel",
      accent: "bg-[#00F0FF]",
    },
    {
      icon: <Network className="w-5 h-5 text-black" />,
      title: "Networking",
      subtitle: "TCP/IP Sockets, Concurrency, pthreads",
      accent: "bg-[#4ADE80]",
    },
    {
      icon: <Layout className="w-5 h-5 text-black" />,
      title: "UI/UX & Figma",
      subtitle: "Neo-Brutalism, Design Systems, Tailwind",
      accent: "bg-[#FF8E3C]",
    },
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b-2 border-black dark:border-zinc-800">
      {/* Top status tags */}
      <div className="flex flex-wrap items-center gap-2.5 mb-8 font-mono">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4ADE80] text-black font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
          <span>STATUS: OPEN FOR PROJECTS</span>
        </div>

        <div className="px-2.5 py-1 bg-white dark:bg-zinc-900 text-black dark:text-zinc-200 text-xs font-bold border-2 border-black dark:border-zinc-700 shadow-[2px_2px_0px_0px_#000]">
          📍 FRANCE (EU)
        </div>

        <div className="px-2.5 py-1 bg-[#FFE600] text-black text-xs font-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hidden sm:inline-block">
          ⚡ C99 + NEXT.JS 15
        </div>
      </div>

      {/* Main Chunky Neo-Brutalist Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-black dark:text-white leading-[1.1] mb-6">
        {lang === "fr" ? (
          <>
            Construire des systèmes robustes, du{" "}
            <span className="bg-[#FFE600] text-black px-2 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] inline-block my-1">
              C & Réseau bas niveau
            </span>{" "}
            au{" "}
            <span className="bg-[#00F0FF] text-black px-2 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] inline-block my-1">
              Web Fullstack moderne
            </span>
            .
          </>
        ) : (
          <>
            Engineering resilient software, from{" "}
            <span className="bg-[#FFE600] text-black px-2 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] inline-block my-1">
              Low-Level C & Networking
            </span>{" "}
            to modern{" "}
            <span className="bg-[#00F0FF] text-black px-2 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] inline-block my-1">
              Fullstack Architecture
            </span>
            .
          </>
        )}
      </h1>

      {/* Bio */}
      <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl mb-10 font-normal">
        {portfolioData.profile.bio[lang].description}
      </p>

      {/* Mechanical Push Buttons */}
      <div className="flex flex-wrap items-center gap-3.5 font-mono text-xs font-black mb-16">
        <a
          href="#projects"
          className="flex items-center gap-2 px-5 py-3 bg-[#FFE600] text-black border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase"
        >
          <span>{lang === "fr" ? "Voir les projets" : "Explore Projects"}</span>
          <ArrowDown className="w-4 h-4" />
        </a>

        <a
          href={portfolioData.profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-zinc-900 text-black dark:text-white border-2 border-black dark:border-zinc-700 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-2 px-5 py-3 bg-[#00F0FF] text-black border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase"
        >
          {copied ? <Check className="w-4 h-4 text-black" /> : <Mail className="w-4 h-4" />}
          <span>{copied ? (lang === "fr" ? "Email Copié !" : "Email Copied!") : "Email"}</span>
        </button>

        <button
          onClick={onOpenResume}
          className="flex items-center gap-2 px-5 py-3 bg-[#FF8E3C] text-black border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase"
        >
          <FileText className="w-4 h-4" />
          <span>{lang === "fr" ? "CV (PDF)" : "Resume (PDF)"}</span>
        </button>
      </div>

      {/* 4 Pillars Neo-Brutalist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t-2 border-black dark:border-zinc-800">
        {focusPillars.map((pillar, i) => (
          <div
            key={i}
            className="p-5 bg-white dark:bg-[#14151B] border-2 border-black dark:border-zinc-700 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 border-2 border-black ${pillar.accent} shadow-[2px_2px_0px_0px_#000]`}>
                  {pillar.icon}
                </div>
                <span className="font-mono font-black text-xs text-zinc-400">0{i + 1}</span>
              </div>
              <h3 className="font-mono text-sm font-black text-black dark:text-white uppercase mb-1">
                {pillar.title}
              </h3>
            </div>
            <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mt-2 font-medium">
              {pillar.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
