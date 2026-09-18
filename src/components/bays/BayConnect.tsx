"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Copy, Check, FileText, ArrowUpRight, ShieldCheck, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface BayConnectProps {
  onOpenResume: () => void;
}

export default function BayConnect({ onOpenResume }: BayConnectProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="horizontal-bay w-[92vw] sm:w-[80vw] md:w-[68vw] lg:w-[58vw] min-w-[320px] md:min-w-[620px] bg-[#07080b] flex flex-col justify-between select-text">
      {/* Bay Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="text-sky-400 font-bold">04</span>
          <span className="text-neutral-500">// DIRECT DISPATCH & INITIATION</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] uppercase font-semibold">
            {lang === "fr" ? "CANAL OUVERT" : "READY FOR CONNECTION"}
          </span>
        </div>
      </div>

      {/* Main Terminal Block */}
      <div className="my-auto py-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {lang === "fr"
              ? "Prêt pour de nouveaux défis d'ingénierie."
              : "Let's build reliable software systems together."}
          </h2>
          <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-lg">
            {lang === "fr"
              ? "À la recherche d'opportunités de stage et de collaborations techniques en développement système bas niveau ou ingénierie web moderne."
              : "Available for internships and technical collaborations across systems engineering, networking tools, and modern web platforms."}
          </p>
        </div>

        {/* Action Modules */}
        <div className="space-y-3 pt-2">
          {/* Email Copy Card */}
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-sky-400/30 transition-colors">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                {lang === "fr" ? "EMAIL DIRECT" : "DIRECT DISPATCH"}
              </span>
              <div className="text-sm font-mono text-neutral-100 flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{portfolioData.profile.email}</span>
              </div>
            </div>

            <button
              onClick={copyEmail}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-all active:scale-[0.98] ${
                copied
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-neutral-200 border border-white/[0.08]"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === "fr" ? "COPIÉ !" : "COPIED"}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === "fr" ? "COPIER L'ADRESSE" : "COPY EMAIL"}</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Links: GitHub + PDF CV */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-200">
                <GithubIcon className="w-4 h-4" />
                <span>github.com/{portfolioData.profile.githubUsername}</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
            </a>

            <button
              onClick={onOpenResume}
              className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-sky-400/40 transition-colors flex items-center justify-between group text-left"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-200">
                <FileText className="w-4 h-4 text-sky-400" />
                <span>{lang === "fr" ? "Aperçu & PDF CV" : "View CV / Resume"}</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-sky-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Bay Footer */}
      <div className="border-t border-white/[0.06] pt-3 flex items-center justify-between text-[11px] font-mono text-neutral-500">
        <span>© {new Date().getFullYear()} {portfolioData.profile.name} // MIT LICENSE</span>
        <span className="text-neutral-600">STATIC EXPORT READY</span>
      </div>
    </section>
  );
}
