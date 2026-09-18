"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Copy, Check, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ClayContact() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const email = "314468480+mehddium@users.noreply.github.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl clay-box text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clay-pill text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
          <MessageSquareCode className="w-3.5 h-3.5" />
          <span>04 // Contact</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {lang === "fr" ? "Démarrons une collaboration" : "Let's Build Together"}
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-light max-w-md mx-auto leading-relaxed">
          {lang === "fr"
            ? "Disponible pour des opportunités de stage, des projets systèmes, réseau ou développement fullstack."
            : "Available for engineering internships, low-level systems, and modern fullstack opportunities."}
        </p>

        {/* Action pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl clay-btn text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200 hover:text-emerald-500 active:scale-95 transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (lang === "fr" ? "Email copié !" : "Email copied!") : email}</span>
          </button>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl clay-primary text-xs font-mono font-bold active:scale-95 transition-all shadow-md"
          >
            <Mail className="w-4 h-4" />
            <span>{lang === "fr" ? "Envoyer un email" : "Send Email"}</span>
          </a>
        </div>

        {/* GitHub link */}
        <div className="pt-4 flex justify-center">
          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full clay-pill text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub: github.com/mehddium</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
