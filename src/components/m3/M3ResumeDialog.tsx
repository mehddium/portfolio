"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { X, Printer, GraduationCap, Cpu } from "lucide-react";

interface M3ResumeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function M3ResumeDialog({ isOpen, onClose }: M3ResumeDialogProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl max-h-[90vh] rounded-[32px] bg-[var(--m3-surface)] border border-[var(--m3-outline-variant)] p-6 sm:p-10 flex flex-col overflow-hidden shadow-2xl">
        {/* Dialog Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--m3-outline-variant)]">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[var(--m3-primary)]" />
            <span className="font-bold text-sm text-[var(--m3-on-surface)]">
              {lang === "fr" ? "Curriculum Vitae — Aperçu" : "Curriculum Vitae — Preview"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--m3-primary)] text-[var(--m3-on-primary)] text-xs font-semibold shadow-xs"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === "fr" ? "Imprimer / PDF" : "Print / PDF"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[var(--m3-surface-container-high)] text-[var(--m3-on-surface-variant)] hover:text-[var(--m3-on-surface)]"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dialog Body */}
        <div className="overflow-y-auto space-y-6 pt-6 text-[var(--m3-on-surface)] font-sans">
          {/* Top Profile */}
          <div className="border-b border-[var(--m3-outline-variant)] pb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--m3-on-surface)] uppercase">
                  {portfolioData.profile.name}
                </h1>
                <p className="text-xs font-mono text-[var(--m3-primary)] mt-1 font-semibold">
                  {portfolioData.profile.role[lang]}
                </p>
              </div>
              <div className="font-mono text-xs text-[var(--m3-on-surface-variant)] text-left sm:text-right space-y-0.5">
                <p>{portfolioData.profile.email}</p>
                <p>{portfolioData.profile.githubUrl}</p>
                <p>{portfolioData.profile.location}</p>
              </div>
            </div>
            <p className="text-xs text-[var(--m3-on-surface-variant)] mt-3 leading-relaxed">
              {portfolioData.profile.bio[lang].description}
            </p>
          </div>

          {/* Education & Projects */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[var(--m3-primary)] border-b border-[var(--m3-outline-variant)] pb-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Formation & Projets Clés" : "Education & Trajectory"}</span>
            </div>

            <div className="space-y-4">
              {portfolioData.timeline.map((item) => {
                const t = item.translations[lang];
                return (
                  <div key={item.id} className="space-y-0.5">
                    <div className="flex justify-between items-baseline font-mono text-xs">
                      <span className="font-bold text-[var(--m3-on-surface)]">{t.title}</span>
                      <span className="text-[var(--m3-on-surface-variant)]">{item.period}</span>
                    </div>
                    <p className="text-xs font-mono text-[var(--m3-on-surface-variant)]">{t.institution}</p>
                    <p className="text-xs text-[var(--m3-on-surface-variant)] leading-relaxed mt-1">
                      {t.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Competencies */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[var(--m3-primary)] border-b border-[var(--m3-outline-variant)] pb-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Compétences Techniques" : "Technical Competencies"}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-2xl bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)]">
                <span className="text-[var(--m3-primary)] font-bold uppercase text-[10px] block mb-0.5">
                  LANGUAGES & C
                </span>
                <p>C (C99/C11), TypeScript, JavaScript, Python, Bash, SQL</p>
              </div>
              <div className="p-3 rounded-2xl bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)]">
                <span className="text-[var(--m3-primary)] font-bold uppercase text-[10px] block mb-0.5">
                  WEB ARCHITECTURE
                </span>
                <p>Next.js 15, React 19, Node.js, Bun, Tailwind CSS</p>
              </div>
              <div className="p-3 rounded-2xl bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)]">
                <span className="text-[var(--m3-primary)] font-bold uppercase text-[10px] block mb-0.5">
                  NETWORKING & POSIX
                </span>
                <p>POSIX Sockets, TCP/IP, pthreads, Raw Sockets, Multiplexing</p>
              </div>
              <div className="p-3 rounded-2xl bg-[var(--m3-surface-container-low)] border border-[var(--m3-outline-variant)]">
                <span className="text-[var(--m3-primary)] font-bold uppercase text-[10px] block mb-0.5">
                  TOOLS & DEVOPS
                </span>
                <p>Linux/Unix, Git, GitHub Actions, Docker, GDB, Valgrind, Figma</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[var(--m3-outline-variant)] flex justify-between items-center text-xs font-mono text-[var(--m3-on-surface-variant)]">
          <span>MEHDI — PORTFOLIO CV</span>
          <button onClick={onClose} className="hover:text-[var(--m3-on-surface)] font-medium">
            {lang === "fr" ? "Fermer (Échap)" : "Close (Esc)"}
          </button>
        </div>
      </div>
    </div>
  );
}
