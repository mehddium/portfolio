"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { X, Printer, Mail, ExternalLink, GraduationCap, Cpu, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0c0e14] border border-white/[0.1] rounded-xl shadow-2xl p-6 sm:p-10 text-neutral-200 space-y-8 select-text">
        {/* Modal Controls */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold">
            <span>RESUME // CURRICULUM VITAE & SPECIFICATION</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-neutral-200 transition-colors border border-white/[0.08]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Imprimer / PDF" : "Print / PDF"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {portfolioData.profile.name}
            </h1>
            <p className="text-sm sm:text-base text-sky-400 font-mono">
              {portfolioData.profile.role[lang]}
            </p>
            <div className="flex flex-wrap gap-4 pt-1 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-500" /> {portfolioData.profile.email}
              </span>
              <a
                href={portfolioData.profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" /> github.com/{portfolioData.profile.githubUsername}
              </a>
              <span>{portfolioData.profile.location}</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 pt-3 leading-relaxed font-light">
              {portfolioData.profile.bio[lang].aboutExtended}
            </p>
          </div>

          {/* Education & Journey */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>{lang === "fr" ? "Formation & Parcours" : "Education & Journey"}</span>
            </h2>
            <div className="space-y-3">
              {portfolioData.timeline.map((item) => (
                <div key={item.id} className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white">{item.translations[lang].title}</h3>
                    <span className="text-[11px] font-mono text-neutral-400">{item.period}</span>
                  </div>
                  <p className="text-xs font-mono text-sky-400/90">{item.translations[lang].institution}</p>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    {item.translations[lang].description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>{lang === "fr" ? "Projets Techniques Majeurs" : "Key Engineering Projects"}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                    <span className="text-[10px] font-mono text-neutral-400">{proj.year}</span>
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {proj.translations[lang].description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>{lang === "fr" ? "Compétences & Outils" : "Skills & Competencies"}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {portfolioData.skillGroups.map((group) => (
                <div key={group.nameKey} className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-bold">
                    {group.translations[lang]}
                  </h3>
                  <ul className="space-y-1 text-xs text-neutral-400">
                    {group.skills.map((s) => (
                      <li key={s.name} className="flex items-center justify-between">
                        <span>{s.name}</span>
                        <span className="text-[10px] font-mono text-neutral-500">{s.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
