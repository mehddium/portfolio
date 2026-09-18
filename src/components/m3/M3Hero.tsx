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
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface M3HeroProps {
  onOpenResume: () => void;
}

export default function M3Hero({ onOpenResume }: M3HeroProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("314468480+mehddium@users.noreply.github.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const focusPillars = [
    {
      icon: <Code2 className="w-5 h-5 text-[#4285F4]" />,
      title: "Web Fullstack",
      subtitle: "Next.js 15, TypeScript, React 19, Bun",
      containerColor: "bg-[#4285F4]/10 border-[#4285F4]/20 text-[#4285F4]",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#34A853]" />,
      title: "Systems & C",
      subtitle: "POSIX API, Memory Mgmt, Linux Kernel",
      containerColor: "bg-[#34A853]/10 border-[#34A853]/20 text-[#34A853]",
    },
    {
      icon: <Network className="w-5 h-5 text-[#FBBC04]" />,
      title: "Networking",
      subtitle: "TCP/IP Sockets, Concurrency, pthreads",
      containerColor: "bg-[#FBBC04]/10 border-[#FBBC04]/20 text-[#FBBC04]",
    },
    {
      icon: <Layout className="w-5 h-5 text-[#EA4335]" />,
      title: "UI/UX & Design",
      subtitle: "Material You, Figma, Clean Systems",
      containerColor: "bg-[#EA4335]/10 border-[#EA4335]/20 text-[#EA4335]",
    },
  ];

  return (
    <section className="pt-8 pb-12">
      {/* M3 Main Elevated Surface Card */}
      <div className="rounded-[32px] bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)]/60 p-6 sm:p-10 lg:p-12 transition-all">
        {/* Top Status & Location Chips */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--m3-tertiary-container)] text-[var(--m3-on-tertiary-container)] text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
            <span>{portfolioData.profile.status[lang]}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--m3-surface-container-high)] text-[var(--m3-on-surface-variant)] text-xs font-mono">
            <span>📍 {portfolioData.profile.location}</span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--m3-on-surface)] leading-[1.12] mb-6">
          {lang === "fr" ? (
            <>
              Ingénierie logicielle, du{" "}
              <span className="text-[#4285F4] underline decoration-wavy decoration-[#FBBC04]/40 underline-offset-8">
                C & Réseaux bas niveau
              </span>{" "}
              au développement{" "}
              <span className="text-[#34A853]">
                Web Fullstack moderne
              </span>
              .
            </>
          ) : (
            <>
              Engineering resilient software, from{" "}
              <span className="text-[#4285F4] underline decoration-wavy decoration-[#FBBC04]/40 underline-offset-8">
                Low-Level C & Networking
              </span>{" "}
              to modern{" "}
              <span className="text-[#34A853]">
                Fullstack Web Platforms
              </span>
              .
            </>
          )}
        </h1>

        {/* Bio text */}
        <p className="text-base sm:text-lg text-[var(--m3-on-surface-variant)] leading-relaxed max-w-2xl mb-8 font-normal">
          {portfolioData.profile.bio[lang].description}
        </p>

        {/* M3 Extended Floating Action Buttons (FABs) & Actions */}
        <div className="flex flex-wrap items-center gap-3 font-medium text-sm mb-12">
          {/* Primary Filled Extended FAB */}
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--m3-primary)] text-[var(--m3-on-primary)] shadow-sm hover:shadow-md active:scale-95 transition-all"
          >
            <span>{lang === "fr" ? "Explorer les projets" : "Explore Projects"}</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Outlined Action: GitHub */}
          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full border border-[var(--m3-outline)] text-[var(--m3-on-surface)] hover:bg-[var(--m3-surface-container-high)] active:scale-95 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-[var(--m3-on-surface-variant)]" />
          </a>

          {/* Tonal Action: Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-[var(--m3-secondary-container)] text-[var(--m3-on-secondary-container)] hover:shadow-sm active:scale-95 transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-[#34A853]" /> : <Mail className="w-4 h-4" />}
            <span>{copied ? (lang === "fr" ? "Email copié !" : "Email copied!") : "Email"}</span>
          </button>

          {/* Outlined Action: Resume */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-3.5 rounded-full border border-[var(--m3-outline)] text-[var(--m3-on-surface)] hover:bg-[var(--m3-surface-container-high)] active:scale-95 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>{lang === "fr" ? "Curriculum Vitae" : "Resume (PDF)"}</span>
          </button>
        </div>

        {/* 4 Focus Cards in M3 Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[var(--m3-outline-variant)]/60">
          {focusPillars.map((p, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[var(--m3-surface)] border border-[var(--m3-outline-variant)]/80 hover:border-[var(--m3-outline)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl ${p.containerColor} border flex items-center justify-center mb-3`}>
                  {p.icon}
                </div>
                <h3 className="font-bold text-sm text-[var(--m3-on-surface)] mb-1">
                  {p.title}
                </h3>
              </div>
              <p className="text-xs font-mono text-[var(--m3-on-surface-variant)] mt-2">
                {p.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
