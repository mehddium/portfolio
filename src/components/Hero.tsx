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
      icon: <Code2 className="w-4 h-4 text-neutral-300" />,
      title: "Web Fullstack",
      subtitle: "Next.js, TypeScript, React 19, Node.js",
    },
    {
      icon: <Cpu className="w-4 h-4 text-neutral-300" />,
      title: "Systems & C",
      subtitle: "POSIX API, Memory Management, Linux Internals",
    },
    {
      icon: <Network className="w-4 h-4 text-neutral-300" />,
      title: "Networking",
      subtitle: "TCP/IP Sockets, Concurrency, Protocol Framing",
    },
    {
      icon: <Layout className="w-4 h-4 text-neutral-300" />,
      title: "UI/UX & Design",
      subtitle: "Swiss Typography, Figma Prototyping, Tailwind",
    },
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-neutral-800/60">
      {/* Top status indicator */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{portfolioData.profile.status[lang]}</span>
        </div>
        <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5" />
          <span>{portfolioData.profile.location}</span>
        </div>
      </div>

      {/* Main Swiss Typographic Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-100 leading-[1.12] mb-6">
        {lang === "fr" ? (
          <>
            Architecture logicielle, de la{" "}
            <span className="text-neutral-400 font-serif italic font-normal">
              programmation C & réseau
            </span>{" "}
            au développement{" "}
            <span className="text-neutral-400 font-serif italic font-normal">
              web fullstack moderne
            </span>
            .
          </>
        ) : (
          <>
            Engineering resilient software, from{" "}
            <span className="text-neutral-400 font-serif italic font-normal">
              low-level C & networking
            </span>{" "}
            to modern{" "}
            <span className="text-neutral-400 font-serif italic font-normal">
              fullstack web architecture
            </span>
            .
          </>
        )}
      </h1>

      {/* Bio paragraph */}
      <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mb-10 font-light">
        {portfolioData.profile.bio[lang].description}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3.5 font-mono text-xs mb-14">
        <a
          href="#projects"
          className="flex items-center gap-2 px-4 py-2.5 bg-neutral-100 text-neutral-950 font-bold hover:bg-neutral-300 transition-colors rounded"
        >
          <span>{lang === "fr" ? "Explorer les projets" : "Explore Projects"}</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>

        <a
          href={portfolioData.profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:border-neutral-600 transition-colors rounded"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
        </a>

        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:border-neutral-600 transition-colors rounded"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
          <span>{copied ? (lang === "fr" ? "Email copié !" : "Email copied!") : "Email"}</span>
        </button>

        <button
          onClick={onOpenResume}
          className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:border-neutral-600 transition-colors rounded"
        >
          <FileText className="w-4 h-4" />
          <span>{lang === "fr" ? "Curriculum Vitae" : "Resume / CV"}</span>
        </button>
      </div>

      {/* Focus Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-neutral-850">
        {focusPillars.map((pillar, i) => (
          <div
            key={i}
            className="p-4 rounded bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-1.5 rounded bg-neutral-800 border border-neutral-700">
                {pillar.icon}
              </div>
              <h3 className="font-mono text-xs font-bold text-neutral-200 uppercase tracking-wider">
                {pillar.title}
              </h3>
            </div>
            <p className="text-xs text-neutral-400 leading-snug">{pillar.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
