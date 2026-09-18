"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Copy, Check, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ContactProps {
  onOpenResume: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-20 md:py-28">
      <div className="space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
            {lang === "fr" ? "Contact & Collaborations" : "Contact & Collaborations"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-950 max-w-xl">
            {lang === "fr"
              ? "Disponible pour des opportunités de stage et de projets."
              : "Available for internships and engineering projects."}
          </h2>
        </div>

        {/* Email & Actions — Clean typography, no cards */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-2 text-lg sm:text-xl font-mono text-neutral-900 hover:text-blue-600 transition-colors text-left"
          >
            <span>{portfolioData.profile.email}</span>
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
            )}
          </button>

          {copied && (
            <span className="text-xs font-mono text-emerald-600">
              {lang === "fr" ? "Copié dans le presse-papier" : "Copied to clipboard"}
            </span>
          )}
        </div>

        {/* Minimalist links */}
        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-neutral-200 text-xs font-mono text-neutral-600">
          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "Curriculum Vitae (PDF)" : "Resume (PDF)"}</span>
          </button>

          <span className="text-neutral-400 ml-auto">
            © {new Date().getFullYear()} {portfolioData.profile.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
