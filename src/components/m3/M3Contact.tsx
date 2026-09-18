"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Copy, Check, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function M3Contact() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const email = "314468480+mehddium@users.noreply.github.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16">
      <div className="rounded-[32px] bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)]/70 p-8 sm:p-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--m3-secondary-container)] text-[var(--m3-on-secondary-container)] text-xs font-semibold">
          <MessageSquareCode className="w-3.5 h-3.5 text-[#0B57D0] dark:text-[#A8C7FA]" />
          <span>04 // Contact</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--m3-on-surface)]">
          {lang === "fr" ? "Démarrons une collaboration" : "Let's Build Together"}
        </h2>

        <p className="text-base text-[var(--m3-on-surface-variant)] font-normal max-w-md mx-auto leading-relaxed">
          {lang === "fr"
            ? "Disponible pour des opportunités de stage, des projets systèmes, réseau ou développement fullstack."
            : "Available for engineering internships, low-level systems, and modern fullstack opportunities."}
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 font-medium">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--m3-surface)] border border-[var(--m3-outline)] text-xs font-mono text-[var(--m3-on-surface)] hover:bg-[var(--m3-surface-container-high)] active:scale-95 transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-[#34A853]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (lang === "fr" ? "Email copié !" : "Email copied!") : email}</span>
          </button>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--m3-primary)] text-[var(--m3-on-primary)] text-xs font-medium shadow-sm hover:shadow-md active:scale-95 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>{lang === "fr" ? "Envoyer un email" : "Send Email"}</span>
          </a>
        </div>

        {/* GitHub link */}
        <div className="pt-2 flex justify-center">
          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--m3-surface)] border border-[var(--m3-outline-variant)] text-xs font-mono text-[var(--m3-on-surface-variant)] hover:text-[var(--m3-on-surface)] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub Profile: github.com/mehddium</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--m3-on-surface-variant)]" />
          </a>
        </div>
      </div>
    </section>
  );
}
