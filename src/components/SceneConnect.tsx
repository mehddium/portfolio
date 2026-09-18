"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Check, Copy, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

interface SceneConnectProps {
  onOpenResume: () => void;
}

export default function SceneConnect({ onOpenResume }: SceneConnectProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="cinematic-slide glow-purple px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto w-full space-y-10">
        {/* Scene Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest">
            <span>06</span>
            <span>/</span>
            <span>{lang === "fr" ? "Contact & Collaboration" : "Connect & Collaborate"}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {lang === "fr" ? (
              <>
                Concevons des systèmes <span className="text-purple-400 font-serif italic font-normal">solides</span> & élégants.
              </>
            ) : (
              <>
                Let&apos;s build <span className="text-purple-400 font-serif italic font-normal">resilient</span> & elegant software.
              </>
            )}
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light max-w-2xl leading-relaxed">
            {lang === "fr"
              ? "Ouvert aux opportunités de stage, alternance et collaborations sur des projets systèmes, réseaux ou applications web d'envergure."
              : "Open to engineering internships, technical apprenticeships, and high-impact software/systems projects."}
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Email Copy Card */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                {lang === "fr" ? "Email direct" : "Direct Email"}
              </p>
              <p className="text-sm font-medium text-white truncate">{portfolioData.profile.email}</p>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === "fr" ? "Copié !" : "Copied!"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{lang === "fr" ? "Copier" : "Copy"}</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${portfolioData.profile.email}`}
                className="p-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 transition-colors flex items-center justify-center"
                title="Send email"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                <GitHubIcon className="w-5 h-5 fill-cyan-400" />
              </div>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">GitHub</p>
              <p className="text-sm font-medium text-white">@{portfolioData.profile.githubUsername}</p>
            </div>
            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
            >
              <span>{lang === "fr" ? "Voir les dépôts" : "View Repos"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Resume Modal Trigger Card */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                {lang === "fr" ? "Curriculum Vitae" : "Resume"}
              </p>
              <p className="text-sm font-medium text-white">
                {lang === "fr" ? "Version Imprimable & PDF" : "Printable & PDF Format"}
              </p>
            </div>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-mono text-xs transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Consulter le CV" : "Open Resume"}</span>
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div>
            <span>{portfolioData.profile.name} — {portfolioData.profile.role[lang]}</span>
          </div>
          <div>
            <span>Next.js 15 App Router &bull; Bun &bull; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
