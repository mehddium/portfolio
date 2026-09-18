"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { X, Printer, Mail, GraduationCap, Cpu, Layers } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm">
      {/* Modal Container — Light, paper-like, crisp */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl border border-neutral-200 p-6 sm:p-10 text-neutral-900 space-y-8 select-text">
        {/* Modal Controls */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <div className="text-xs font-mono text-neutral-500 uppercase">
            <span>Curriculum Vitae</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Imprimer / PDF" : "Print / PDF"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="border-b border-neutral-200 pb-6 space-y-2">
            <h1 className="text-3xl font-bold text-neutral-950 tracking-tight">
              {portfolioData.profile.name}
            </h1>
            <p className="text-sm text-neutral-600 font-mono">
              {portfolioData.profile.role[lang]}
            </p>
            <div className="flex flex-wrap gap-4 pt-1 text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> {portfolioData.profile.email}
              </span>
              <a
                href={portfolioData.profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" /> github.com/{portfolioData.profile.githubUsername}
              </a>
              <span>{portfolioData.profile.location}</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 pt-2 leading-relaxed font-light">
              {portfolioData.profile.bio[lang].aboutExtended}
            </p>
          </div>

          {/* Education & Journey */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-900 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-neutral-700" />
              <span>{lang === "fr" ? "Formation & Parcours" : "Education & Journey"}</span>
            </h2>
            <div className="space-y-4">
              {portfolioData.timeline.map((item) => (
                <div key={item.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-bold text-neutral-900">{item.translations[lang].title}</h3>
                    <span className="text-xs font-mono text-neutral-500">{item.period}</span>
                  </div>
                  <p className="text-xs font-mono text-neutral-600">{item.translations[lang].institution}</p>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {item.translations[lang].description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-900 font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-neutral-700" />
              <span>{lang === "fr" ? "Projets Techniques Majeurs" : "Key Engineering Projects"}</span>
            </h2>
            <div className="space-y-4">
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-sm font-bold text-neutral-900">{proj.title}</h3>
                    <span className="text-xs font-mono text-neutral-500">{proj.year}</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {proj.translations[lang].description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600"
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
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-900 font-bold flex items-center gap-2">
              <Layers className="w-4 h-4 text-neutral-700" />
              <span>{lang === "fr" ? "Compétences" : "Skills"}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioData.skillGroups.map((group) => (
                <div key={group.nameKey} className="space-y-1.5">
                  <h3 className="text-xs font-mono uppercase text-neutral-700 font-semibold">
                    {group.translations[lang]}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {group.skills.map((s) => s.name).join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
