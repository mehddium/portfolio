"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { X, Printer, Mail } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#171922] border border-[#2b2e3d] rounded-xl shadow-2xl p-6 sm:p-10 text-neutral-200 space-y-8">
        {/* Controls */}
        <div className="flex items-center justify-between border-b border-[#262935] pb-4">
          <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
            Curriculum Vitae
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#222531] hover:bg-[#2b2f3e] text-xs font-medium text-neutral-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Imprimer / PDF" : "Print / PDF"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#222531] text-neutral-400 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="border-b border-[#262935] pb-6 space-y-3">
            <h1 className="text-3xl font-semibold text-white tracking-tight">
              {portfolioData.profile.name}
            </h1>
            <p className="text-sm text-neutral-400">
              {portfolioData.profile.role[lang]}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-neutral-400 pt-1">
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
            <p className="text-sm text-neutral-300 font-light leading-relaxed pt-2">
              {portfolioData.profile.bio[lang].intro}
            </p>
          </div>

          {/* Education & Experience */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              {lang === "fr" ? "Formation & Parcours" : "Education & Journey"}
            </h2>
            <div className="space-y-4 divide-y divide-[#262935]">
              {portfolioData.timeline.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-semibold text-white">
                      {item.translations[lang].title}
                    </h3>
                    <span className="text-xs text-neutral-400">{item.period}</span>
                  </div>
                  <p className="text-xs text-neutral-400">{item.translations[lang].institution}</p>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed pt-1">
                    {item.translations[lang].description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Summary */}
          <div className="space-y-4 pt-4 border-t border-[#262935]">
            <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              {lang === "fr" ? "Projets d'Ingénierie" : "Key Engineering Projects"}
            </h2>
            <div className="space-y-4 divide-y divide-[#262935]">
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} className="pt-4 first:pt-0 space-y-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-sm font-semibold text-white">{proj.title}</h3>
                    <span className="text-xs text-neutral-400">{proj.year}</span>
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {proj.translations[lang].description}
                  </p>
                  <p className="text-[11px] text-neutral-400 pt-1">
                    {proj.technologies.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4 pt-4 border-t border-[#262935]">
            <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              {lang === "fr" ? "Compétences Techniques" : "Technical Skills"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {portfolioData.skillCategories.map((group, idx) => (
                <div key={idx} className="space-y-1">
                  <h3 className="font-medium text-white">{group.title[lang]}</h3>
                  <p className="text-neutral-400 font-light">{group.skills.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
