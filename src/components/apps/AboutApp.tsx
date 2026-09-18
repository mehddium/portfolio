"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import {
  Code2,
  Cpu,
  Network,
  Layout,
  Mail,
  Check,
  FileText,
  Terminal,
  FolderGit2,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface AboutAppProps {
  onOpenProjects: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function AboutApp({
  onOpenProjects,
  onOpenTerminal,
  onOpenResume,
  onOpenContact,
}: AboutAppProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("314468480+mehddium@users.noreply.github.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const focusPillars = [
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: "Web Fullstack",
      subtitle: "Next.js 15, TypeScript, React 19, Node.js",
      gradient: "from-cyan-500/20 to-blue-500/10",
      border: "border-cyan-500/30",
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: "Systems & C",
      subtitle: "POSIX API, Memory Mgmt, Linux Kernel",
      gradient: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/30",
    },
    {
      icon: <Network className="w-5 h-5 text-indigo-400" />,
      title: "Networking",
      subtitle: "TCP/IP Sockets, Concurrency, pthreads",
      gradient: "from-indigo-500/20 to-purple-500/10",
      border: "border-indigo-500/30",
    },
    {
      icon: <Layout className="w-5 h-5 text-fuchsia-400" />,
      title: "UI/UX & Design",
      subtitle: "Glassmorphism, Figma Prototyping, Tailwind",
      gradient: "from-fuchsia-500/20 to-pink-500/10",
      border: "border-fuchsia-500/30",
    },
  ];

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Profile Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-[2px] shadow-xl shadow-cyan-500/10">
            <div className="w-full h-full rounded-[14px] bg-neutral-950 flex items-center justify-center font-mono text-2xl font-bold text-white">
              M.
            </div>
          </div>
          <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-neutral-950 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          </span>
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              {portfolioData.profile.name}
            </h1>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              {portfolioData.profile.status[lang]}
            </span>
          </div>

          <p className="text-sm font-mono text-cyan-400 font-medium">
            {portfolioData.profile.role[lang]}
          </p>

          <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
            {portfolioData.profile.bio[lang].description}
          </p>
        </div>
      </div>

      {/* Quick Launch Action Bar */}
      <div className="flex flex-wrap gap-2.5 font-mono text-xs">
        <button
          onClick={onOpenProjects}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/40 transition-all active:scale-95"
        >
          <FolderGit2 className="w-4 h-4 text-cyan-400" />
          <span>{lang === "fr" ? "Explorer les projets" : "Explore Projects"}</span>
        </button>

        <button
          onClick={onOpenTerminal}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-500/40 transition-all active:scale-95"
        >
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span>Terminal.sh</span>
        </button>

        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/15 transition-all active:scale-95"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
          <span>{copied ? (lang === "fr" ? "Email copié !" : "Email Copied!") : "Copy Email"}</span>
        </button>

        <button
          onClick={onOpenResume}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/15 transition-all active:scale-95"
        >
          <FileText className="w-4 h-4" />
          <span>{lang === "fr" ? "Curriculum Vitae" : "Resume (PDF)"}</span>
        </button>
      </div>

      {/* 4 Focus Pillars */}
      <div>
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>{lang === "fr" ? "Domaines d'expertise" : "Core Engineering Pillars"}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {focusPillars.map((p, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl bg-gradient-to-br ${p.gradient} border ${p.border} backdrop-blur-md transition-all hover:scale-[1.01]`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-black/40 border border-white/10">
                  {p.icon}
                </div>
                <h3 className="font-bold text-sm text-white">{p.title}</h3>
              </div>
              <p className="text-xs text-neutral-300 font-mono pl-1">{p.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
