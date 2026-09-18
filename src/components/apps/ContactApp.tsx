"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ContactApp() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const email = "314468480+mehddium@users.noreply.github.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject || "Collaboration / Opportunity"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="p-5 rounded-2xl glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">
              {lang === "fr" ? "Messagerie & Contact" : "Mail Client & Contact"}
            </h2>
            <p className="text-xs font-mono text-neutral-400 truncate max-w-xs sm:max-w-sm">
              To: {email}
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/10 font-mono text-xs transition-all w-fit"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? (lang === "fr" ? "Email Copié !" : "Copied!") : (lang === "fr" ? "Copier l'adresse" : "Copy Email")}</span>
        </button>
      </div>

      {/* Compose Form */}
      <form onSubmit={handleSendMail} className="p-5 rounded-2xl glass-card space-y-4">
        <div>
          <label className="block text-xs font-mono text-neutral-400 mb-1">
            {lang === "fr" ? "Objet du message" : "Subject"}
          </label>
          <input
            type="text"
            required
            placeholder={lang === "fr" ? "ex: Opportunité de stage / Projet fullstack" : "e.g. Internship opportunity / Fullstack project"}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-neutral-400 mb-1">
            {lang === "fr" ? "Votre message" : "Message"}
          </label>
          <textarea
            rows={4}
            required
            placeholder={lang === "fr" ? "Bonjour Mehdi, nous aimerions échanger avec vous..." : "Hello Mehdi, we would love to connect..."}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-500/50 resize-none"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>

          <button
            type="submit"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-mono text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "Envoyer le message" : "Send Email"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
