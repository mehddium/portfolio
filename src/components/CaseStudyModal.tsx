"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/data/portfolioData";
import { X, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const t = project.translations[lang];
  const cs = project.caseStudy;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#181b26] border border-[#232635] rounded-xl shadow-2xl p-6 sm:p-8 text-[#f0f2f5] space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-[#232635] pb-5 gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs">
              <span className="uppercase tracking-wider font-semibold text-blue-400 font-sans">
                {project.category}
              </span>
              <span className="text-neutral-600">&middot;</span>
              <span className="font-mono text-[#8e94a5]">{project.year}</span>
              <span className="text-emerald-400 font-sans font-medium">
                &middot; {t.metricBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#f0f2f5] tracking-tight">
              {project.title}
            </h2>

            <p className="text-sm text-[#8e94a5] font-light">
              {t.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#12141c] hover:bg-[#202332] text-[#8e94a5] hover:text-[#f0f2f5] transition-colors shrink-0 border border-[#232635]"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Technologies & GitHub Link */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-[#12141c] text-[#f0f2f5] border border-[#232635]"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#f0f2f5] text-[#12141c] font-medium hover:bg-white transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5 fill-current" />
              <span>{lang === "fr" ? "Voir sur GitHub" : "View on GitHub"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Structured Case Study Sections (Typographic open layout) */}
        <div className="space-y-6 text-sm divide-y divide-[#232635]">
          {/* Problem */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              {lang === "fr" ? "Problème & Objectifs" : "Problem & Goals"}
            </h3>
            <p className="text-[#8e94a5] font-light leading-relaxed">
              {cs.problem[lang]}
            </p>
          </div>

          {/* Role */}
          <div className="pt-6 space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              {lang === "fr" ? "Rôle & Contribution" : "Role & Contribution"}
            </h3>
            <p className="text-[#8e94a5] font-light leading-relaxed">
              {cs.role[lang]}
            </p>
          </div>

          {/* Architecture */}
          <div className="pt-6 space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              {lang === "fr" ? "Architecture & Choix techniques" : "Architecture & Technical Choices"}
            </h3>
            <p className="text-[#8e94a5] font-light leading-relaxed">
              {cs.architecture[lang]}
            </p>
          </div>

          {/* Metrics */}
          <div className="pt-6 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              {lang === "fr" ? "Résultats mesurables" : "Measured Results"}
            </h3>
            <ul className="space-y-2">
              {cs.metrics[lang].map((metric, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[#f0f2f5] font-light text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Learnings */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8e94a5]">
                {lang === "fr" ? "Défi résolu" : "Challenge overcome"}
              </h3>
              <p className="text-xs text-[#8e94a5] font-light leading-relaxed">
                {cs.challenges[lang]}
              </p>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8e94a5]">
                {lang === "fr" ? "Enseignement technique" : "Key learning"}
              </h3>
              <p className="text-xs text-[#8e94a5] font-light leading-relaxed">
                {cs.learnings[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Code Snippet if present */}
        {cs.codeSnippet && (
          <div className="space-y-2 pt-2">
            <div className="text-xs text-[#8e94a5] font-medium font-mono">
              {cs.codeSnippet.title}
            </div>
            <div className="p-4 rounded-lg bg-[#12141c] border border-[#232635] overflow-x-auto text-xs text-[#f0f2f5] font-mono leading-relaxed">
              <pre>
                <code>{cs.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
