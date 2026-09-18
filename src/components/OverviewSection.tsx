"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Check,
  FileText,
  Code2,
  Cpu,
  Network,
  Layout,
  Terminal,
  FolderGit2,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface OverviewSectionProps {
  onNavigateToProjects: () => void;
  onNavigateToSystems: () => void;
  onNavigateToTimeline: () => void;
  onNavigateToContact: () => void;
  onOpenResume: () => void;
}

export default function OverviewSection({
  onNavigateToProjects,
  onNavigateToSystems,
  onNavigateToTimeline,
  onNavigateToContact,
  onOpenResume,
}: OverviewSectionProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("314468480+mehddium@users.noreply.github.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const focusCards = [
    {
      icon: <Code2 className="w-5 h-5 text-[#4285F4]" />,
      title: "Web Fullstack",
      subtitle: "Next.js 15, TypeScript, React 19, Node.js",
      description: {
        en: "Server-side rendering, optimistic UI, relational data modeling with PostgreSQL.",
        fr: "Rendu côté serveur, Server Actions réactives et modélisation de base de données.",
      },
      onClick: onNavigateToProjects,
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#34A853]" />,
      title: "Systems & C",
      subtitle: "POSIX API, Memory Mgmt, Linux Kernel",
      description: {
        en: "Dynamic memory allocators, process lifecycle (fork/exec), signals, and pipes.",
        fr: "Allocateurs de mémoire heap, cycle de vie des processus Unix et signaux.",
      },
      onClick: onNavigateToSystems,
    },
    {
      icon: <Network className="w-5 h-5 text-[#FBBC04]" />,
      title: "Networking",
      subtitle: "TCP/IP Sockets, Concurrency, pthreads",
      description: {
        en: "Multi-threaded RFC-compliant TCP servers, packet framing, and I/O multiplexing.",
        fr: "Serveurs TCP multi-threads, gestion des sockets POSIX et streaming de paquets.",
      },
      onClick: onNavigateToSystems,
    },
    {
      icon: <Layout className="w-5 h-5 text-[#EA4335]" />,
      title: "UI/UX & Design",
      subtitle: "Material 3, Figma Prototyping, Tailwind",
      description: {
        en: "Design systems based on Google Material You, accessibility, and clean typography.",
        fr: "Systèmes de design basés sur Material You, accessibilité et rigueur typographique.",
      },
      onClick: onNavigateToProjects,
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Banner Card */}
      <div className="p-8 sm:p-10 rounded-[32px] bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)]/60 space-y-6">
        {/* Status chip */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--m3-tertiary-container)] text-[var(--m3-on-tertiary-container)] text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
            <span>{portfolioData.profile.status[lang]}</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-full bg-[var(--m3-surface-container-high)] text-[var(--m3-on-surface-variant)] text-xs font-mono">
            <span>📍 {portfolioData.profile.location}</span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--m3-on-surface)] leading-[1.15]">
          {lang === "fr" ? (
            <>
              Architecture logicielle, de la{" "}
              <span className="text-[#4285F4]">programmation C & réseau</span>{" "}
              au développement{" "}
              <span className="text-[#34A853]">Web Fullstack moderne</span>.
            </>
          ) : (
            <>
              Engineering resilient software, from{" "}
              <span className="text-[#4285F4]">low-level C & networking</span>{" "}
              to modern{" "}
              <span className="text-[#34A853]">fullstack web platforms</span>.
            </>
          )}
        </h1>

        {/* Bio */}
        <p className="text-base text-[var(--m3-on-surface-variant)] leading-relaxed max-w-3xl font-normal">
          {portfolioData.profile.bio[lang].description}
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3 pt-2 font-medium text-sm">
          <button
            onClick={onNavigateToProjects}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--m3-primary)] text-[var(--m3-on-primary)] shadow-sm hover:shadow-md active:scale-95 transition-all"
          >
            <span>{lang === "fr" ? "Explorer l'Espace Projets" : "Explore Projects Workspace"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-[var(--m3-secondary-container)] text-[var(--m3-on-secondary-container)] hover:shadow-sm active:scale-95 transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-[#34A853]" /> : <Mail className="w-4 h-4" />}
            <span>{copied ? (lang === "fr" ? "Email copié !" : "Email copied!") : "Email"}</span>
          </button>

          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full border border-[var(--m3-outline)] text-[var(--m3-on-surface)] hover:bg-[var(--m3-surface-container-high)] active:scale-95 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 text-[var(--m3-on-surface-variant)]" />
          </a>
        </div>
      </div>

      {/* 4 Pillars Interactive Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-lg font-bold text-[var(--m3-on-surface)]">
            {lang === "fr" ? "Domaines d'Expertise Technique" : "Engineering Specialties"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {focusCards.map((card, i) => (
            <div
              key={i}
              onClick={card.onClick}
              className="p-6 rounded-[28px] bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)]/60 hover:border-[var(--m3-outline)] hover:bg-[var(--m3-surface-container)] cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-2xl bg-[var(--m3-surface)] border border-[var(--m3-outline-variant)]/60">
                    {card.icon}
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--m3-on-surface-variant)] group-hover:translate-x-1 group-hover:text-[var(--m3-primary)] transition-all" />
                </div>
                <h3 className="font-bold text-base text-[var(--m3-on-surface)] mb-1">
                  {card.title}
                </h3>
                <p className="text-xs font-mono text-[var(--m3-primary)] mb-2 font-semibold">
                  {card.subtitle}
                </p>
                <p className="text-xs text-[var(--m3-on-surface-variant)] leading-relaxed">
                  {card.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
