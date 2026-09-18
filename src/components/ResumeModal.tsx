"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { X, Printer, Mail, ExternalLink, GraduationCap, Cpu, Layers } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-10 text-neutral-200 space-y-8">
        {/* Modal Controls */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>RESUME // CURRICULUM VITAE</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-neutral-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Imprimer / PDF" : "Print / PDF"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="border-b border-neutral-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">{portfolioData.profile.name}</h1>
            <p className="text-base text-cyan-400 font-mono mt-1">{portfolioData.profile.role[lang]}</p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {portfolioData.profile.email}
              </span>
              <a
                href={portfolioData.profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5 fill-current" /> github.com/{portfolioData.profile.githubUsername}
              </a>
              <span>{portfolioData.profile.location}</span>
            </div>
            <p className="text-sm text-neutral-300 mt-4 leading-relaxed font-light">
              {portfolioData.profile.bio[lang].aboutExtended}
            </p>
          </div>

          {/* Education & Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>{lang === "fr" ? "Formation & Parcours" : "Education & Journey"}</span>
            </h2>
            <div className="space-y-4">
              {portfolioData.timeline.map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white">{item.translations[lang].title}</h3>
                    <span className="text-xs font-mono text-neutral-400">{item.period}</span>
                  </div>
                  <p className="text-xs font-mono text-cyan-400/80">{item.translations[lang].institution}</p>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    {item.translations[lang].description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>{lang === "fr" ? "Projets Techniques Majeurs" : "Key Engineering Projects"}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                    <span className="text-xs font-mono text-neutral-400">{proj.year}</span>
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {proj.translations[lang].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800"
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
          <div className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-purple-400 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>{lang === "fr" ? "Compétences & Outils" : "Skills & Competencies"}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {portfolioData.skillGroups.map((group) => (
                <div key={group.nameKey} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold">
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
