"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { X, Printer, GraduationCap, Cpu } from "lucide-react";

interface ClayResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClayResumeModal({ isOpen, onClose }: ClayResumeModalProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl max-h-[90vh] clay-box p-6 sm:p-10 flex flex-col overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-5 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-indigo-500" />
            <span className="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase">
              {lang === "fr" ? "Curriculum Vitae — Aperçu" : "Curriculum Vitae — Preview"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl clay-primary text-xs font-mono font-semibold"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === "fr" ? "Imprimer / PDF" : "Print / PDF"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl clay-btn text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto space-y-6 pt-6 text-neutral-800 dark:text-neutral-200 font-sans">
          {/* Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
                  {portfolioData.profile.name}
                </h1>
                <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-1 font-semibold">
                  {portfolioData.profile.role[lang]}
                </p>
              </div>
              <div className="font-mono text-xs text-neutral-500 text-left sm:text-right space-y-0.5">
                <p>{portfolioData.profile.email}</p>
                <p>{portfolioData.profile.githubUrl}</p>
                <p>{portfolioData.profile.location}</p>
              </div>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-3 leading-relaxed">
              {portfolioData.profile.bio[lang].description}
            </p>
          </div>

          {/* Education & Projects */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 border-b border-neutral-200 dark:border-neutral-800 pb-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
              <span>{lang === "fr" ? "Formation & Projets Clés" : "Education & Trajectory"}</span>
            </div>

            <div className="space-y-4">
              {portfolioData.timeline.map((item) => {
                const t = item.translations[lang];
                return (
                  <div key={item.id} className="space-y-0.5">
                    <div className="flex justify-between items-baseline font-mono text-xs">
                      <span className="font-bold text-neutral-900 dark:text-white">{t.title}</span>
                      <span className="text-neutral-400">{item.period}</span>
                    </div>
                    <p className="text-xs font-mono text-neutral-500">{t.institution}</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mt-1">
                      {t.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Competencies */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 border-b border-neutral-200 dark:border-neutral-800 pb-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-500" />
              <span>{lang === "fr" ? "Compétences Techniques" : "Technical Competencies"}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-2xl clay-pill">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase text-[10px] block mb-0.5">
                  LANGUAGES & C
                </span>
                <p>C (C99/C11), TypeScript, JavaScript, Python, Bash, SQL</p>
              </div>
              <div className="p-3 rounded-2xl clay-pill">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase text-[10px] block mb-0.5">
                  WEB ARCHITECTURE
                </span>
                <p>Next.js 15, React 19, Node.js, Bun, Tailwind CSS</p>
              </div>
              <div className="p-3 rounded-2xl clay-pill">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase text-[10px] block mb-0.5">
                  NETWORKING & POSIX
                </span>
                <p>POSIX Sockets, TCP/IP, pthreads, Raw Sockets, Multiplexing</p>
              </div>
              <div className="p-3 rounded-2xl clay-pill">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase text-[10px] block mb-0.5">
                  TOOLS & DEVOPS
                </span>
                <p>Linux/Unix, Git, GitHub Actions, Docker, GDB, Valgrind, Figma</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-xs font-mono text-neutral-500">
          <span>MEHDI — PORTFOLIO CV</span>
          <button onClick={onClose} className="hover:text-neutral-900 dark:hover:text-white uppercase">
            {lang === "fr" ? "Fermer (Échap)" : "Close (Esc)"}
          </button>
        </div>
      </div>
    </div>
  );
}
