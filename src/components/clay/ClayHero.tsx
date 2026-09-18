"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Check,
  FileText,
  Code2,
  Cpu,
  Network,
  Layout,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ClayHeroProps {
  onOpenResume: () => void;
}

export default function ClayHero({ onOpenResume }: ClayHeroProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("314468480+mehddium@users.noreply.github.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const focusPillars = [
    {
      icon: <Code2 className="w-5 h-5 text-indigo-500" />,
      title: "Web Fullstack",
      subtitle: "Next.js 15, React 19, TypeScript, Bun",
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
      title: "Systems & C",
      subtitle: "POSIX API, Memory Mgmt, Linux Kernel",
    },
    {
      icon: <Network className="w-5 h-5 text-cyan-500" />,
      title: "Networking",
      subtitle: "TCP/IP Sockets, Concurrency, pthreads",
    },
    {
      icon: <Layout className="w-5 h-5 text-rose-500" />,
      title: "UI/UX & Design",
      subtitle: "Claymorphism, Figma, Clean Architecture",
    },
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Top Status Pill */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-pill text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{portfolioData.profile.status[lang]}</span>
        </div>
        <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
          📍 {portfolioData.profile.location}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15] mb-6">
        {lang === "fr" ? (
          <>
            Architecture logicielle, de la{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              programmation C & réseau
            </span>{" "}
            au développement{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              web fullstack moderne
            </span>
            .
          </>
        ) : (
          <>
            Engineering resilient software, from{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              low-level C & networking
            </span>{" "}
            to modern{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              fullstack web platforms
            </span>
            .
          </>
        )}
      </h1>

      {/* Bio Paragraph */}
      <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-10 font-light">
        {portfolioData.profile.bio[lang].description}
      </p>

      {/* Action Buttons in Tactile Clay */}
      <div className="flex flex-wrap items-center gap-3.5 font-mono text-xs font-bold mb-16">
        <a
          href="#projects"
          className="flex items-center gap-2 px-5 py-3 rounded-2xl clay-primary shadow-lg active:scale-95 transition-all"
        >
          <span>{lang === "fr" ? "Explorer les projets" : "Explore Projects"}</span>
          <ArrowDown className="w-4 h-4" />
        </a>

        <a
          href={portfolioData.profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-2xl clay-btn text-neutral-800 dark:text-neutral-200 hover:text-indigo-500 active:scale-95 transition-all"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
        </a>

        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl clay-btn text-neutral-800 dark:text-neutral-200 hover:text-emerald-500 active:scale-95 transition-all"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Mail className="w-4 h-4" />}
          <span>{copied ? (lang === "fr" ? "Email copié !" : "Email copied!") : "Email"}</span>
        </button>

        <button
          onClick={onOpenResume}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl clay-btn text-neutral-800 dark:text-neutral-200 hover:text-indigo-500 active:scale-95 transition-all"
        >
          <FileText className="w-4 h-4" />
          <span>{lang === "fr" ? "Curriculum Vitae" : "Resume / CV"}</span>
        </button>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {focusPillars.map((p, i) => (
          <div
            key={i}
            className="p-5 rounded-3xl clay-box flex flex-col justify-between hover:scale-[1.02] transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl clay-pill flex items-center justify-center mb-3">
                {p.icon}
              </div>
              <h3 className="font-bold text-sm text-neutral-900 dark:text-white mb-1">
                {p.title}
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-2">
              {p.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
