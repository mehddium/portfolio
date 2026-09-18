"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Copy, Check, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ContactSection() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const email = "314468480+mehddium@users.noreply.github.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-800/60">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
          <MessageSquareCode className="w-3.5 h-3.5" />
          <span>04 // Contact</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-100">
          {lang === "fr" ? "Démarrons une collaboration" : "Let's Build Something Together"}
        </h2>

        <p className="text-base sm:text-lg text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
          {lang === "fr"
            ? "Disponible pour des opportunités de stage, des projets systèmes, réseau ou développement fullstack."
            : "Available for engineering internships, systems architecture, and modern fullstack opportunities."}
        </p>

        {/* Email Copy Card */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 bg-neutral-900 border border-neutral-800 rounded-lg max-w-full">
          <span className="font-mono text-xs sm:text-sm text-neutral-300 px-3 truncate">
            {email}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === "fr" ? "Copié !" : "Copied!") : (lang === "fr" ? "Copier" : "Copy")}</span>
            </button>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-100 text-neutral-950 hover:bg-neutral-300 text-xs font-mono font-bold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Envoyer un email" : "Send Email"}</span>
            </a>
          </div>
        </div>

        {/* External links */}
        <div className="pt-6 flex justify-center gap-6 font-mono text-xs text-neutral-400">
          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
