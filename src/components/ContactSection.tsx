"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Copy, Check, ArrowUpRight, MessageSquareCode, Sparkles } from "lucide-react";
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
    <section id="contact" className="py-24 border-b-2 border-black dark:border-zinc-800">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white dark:bg-white dark:text-black font-mono font-black text-xs uppercase shadow-[2px_2px_0px_0px_#FF8E3C]">
          <MessageSquareCode className="w-3.5 h-3.5" />
          <span>04 // CONTACT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white uppercase">
          {lang === "fr" ? "Démarrons une collaboration" : "Let's Build Something Great"}
        </h2>

        <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-normal max-w-xl mx-auto leading-relaxed">
          {lang === "fr"
            ? "Disponible pour des opportunités de stage, des projets systèmes, réseau ou développement fullstack."
            : "Available for engineering internships, low-level systems, and modern fullstack engineering."}
        </p>

        {/* Email Box */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-3 bg-white dark:bg-[#14151B] border-2 border-black dark:border-zinc-700 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#000] max-w-full">
          <span className="font-mono text-xs sm:text-sm font-bold text-black dark:text-zinc-200 px-3 truncate">
            {email}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#FFE600] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] text-xs font-mono font-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === "fr" ? "COPIÉ !" : "COPIED!") : (lang === "fr" ? "COPIER" : "COPY")}</span>
            </button>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#00F0FF] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] text-xs font-mono font-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "ENVOYER UN EMAIL" : "SEND EMAIL"}</span>
            </a>
          </div>
        </div>

        {/* External Links */}
        <div className="pt-4 flex justify-center gap-6 font-mono text-xs font-black">
          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-zinc-900 text-black dark:text-white border border-black dark:border-zinc-700 shadow-[2px_2px_0px_0px_#000] hover:bg-[#FFE600] hover:text-black transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GITHUB PROFILE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
