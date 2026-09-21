"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/data/portfolioData";
import {
  X,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  BarChart3,
  Lightbulb,
  AlertTriangle,
  Code2,
} from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-neutral-200 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-neutral-800 pb-5 gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-500">{project.year}</span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                {t.metricBadge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-cyan-400">{t.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors shrink-0"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5 fill-black" />
                <span>{lang === "fr" ? "Code Source GitHub" : "GitHub Repository"}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold text-xs hover:bg-cyan-500/30 transition-colors"
              >
                <span>{lang === "fr" ? "Démo en direct" : "Live Demo"}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Structured Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          {/* Problem & Goal */}
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span>{lang === "fr" ? "1. Problème & Objectifs" : "1. Problem & Goals"}</span>
            </div>
            <p className="text-neutral-300 leading-relaxed font-light text-xs sm:text-sm">
              {cs.problem[lang]}
            </p>
          </div>

          {/* Personal Role */}
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
              <Cpu className="w-4 h-4" />
              <span>{lang === "fr" ? "2. Rôle & Contribution" : "2. Personal Role"}</span>
            </div>
            <p className="text-neutral-300 leading-relaxed font-light text-xs sm:text-sm">
              {cs.role[lang]}
            </p>
          </div>

          {/* Architecture & Decisions */}
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-2 md:col-span-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400">
              <Layers className="w-4 h-4" />
              <span>
                {lang === "fr"
                  ? "3. Choix d'Architecture & Compromis"
                  : "3. Architecture & Trade-Offs"}
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed font-light text-xs sm:text-sm">
              {cs.architecture[lang]}
            </p>
          </div>

          {/* Measurable Results & Benchmarks */}
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-2.5 md:col-span-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <BarChart3 className="w-4 h-4" />
              <span>
                {lang === "fr"
                  ? "4. Résultats Mesurables & Benchmarks"
                  : "4. Measurable Results & Metrics"}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              {cs.metrics[lang].map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-300">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges Overcome */}
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-400">
              <AlertTriangle className="w-4 h-4" />
              <span>
                {lang === "fr" ? "5. Défis Résolus" : "5. Key Challenges Overcome"}
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed font-light text-xs sm:text-sm">
              {cs.challenges[lang]}
            </p>
          </div>

          {/* Key Learnings */}
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300">
              <Lightbulb className="w-4 h-4" />
              <span>{lang === "fr" ? "6. Enseignements Tirés" : "6. Engineering Learnings"}</span>
            </div>
            <p className="text-neutral-300 leading-relaxed font-light text-xs sm:text-sm">
              {cs.learnings[lang]}
            </p>
          </div>
        </div>

        {/* Code Snippet if present */}
        {cs.codeSnippet && (
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>{cs.codeSnippet.title}</span>
              </span>
              <span className="uppercase text-[10px] text-neutral-500">
                {cs.codeSnippet.language}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 overflow-x-auto font-mono text-xs text-neutral-300 leading-relaxed">
              <pre>
                <code>{cs.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Modal Footer CTA */}
        <div className="border-t border-neutral-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-neutral-400">
          <span>{lang === "fr" ? "Étude de cas vérifiée et documentée" : "Documented engineering case study"}</span>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
              >
                <span>{lang === "fr" ? "Inspecter le code sur GitHub" : "Inspect code on GitHub"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
