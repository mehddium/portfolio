"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { X, Download, Printer, GraduationCap, Briefcase, Cpu, CheckCircle } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-neutral-700" />
            <span className="font-mono text-xs text-neutral-300 font-bold uppercase tracking-wider">
              {lang === "fr" ? "Curriculum Vitae — Aperçu" : "Curriculum Vitae — Preview"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono transition-colors"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === "fr" ? "Imprimer / PDF" : "Print / PDF"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body (Printable Resume Content) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-neutral-950 text-neutral-200">
          {/* Header */}
          <div className="border-b border-neutral-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
                  {portfolioData.profile.name}
                </h1>
                <p className="text-sm font-mono text-neutral-400 mt-1">
                  {portfolioData.profile.role[lang]}
                </p>
              </div>
              <div className="font-mono text-xs text-neutral-400 text-left sm:text-right space-y-0.5">
                <p>{portfolioData.profile.email}</p>
                <p>{portfolioData.profile.githubUrl}</p>
                <p>{portfolioData.profile.location}</p>
              </div>
            </div>
            <p className="text-sm text-neutral-300 mt-4 leading-relaxed font-light">
              {portfolioData.profile.bio[lang].description}
            </p>
          </div>

          {/* Education & Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider border-b border-neutral-850 pb-2">
              <GraduationCap className="w-4 h-4" />
              <span>{lang === "fr" ? "Formation & Projets Clés" : "Education & Key Projects"}</span>
            </div>

            <div className="space-y-6">
              {portfolioData.timeline.map((item) => {
                const t = item.translations[lang];
                return (
                  <div key={item.id} className="space-y-1">
                    <div className="flex justify-between items-baseline text-xs font-mono">
                      <span className="font-bold text-white text-sm">{t.title}</span>
                      <span className="text-neutral-400">{item.period}</span>
                    </div>
                    <p className="text-xs font-mono text-neutral-400">{t.institution}</p>
                    <p className="text-xs text-neutral-300 leading-relaxed font-light mt-1">
                      {t.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Core Technical Competencies */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider border-b border-neutral-850 pb-2">
              <Cpu className="w-4 h-4" />
              <span>{lang === "fr" ? "Compétences Techniques" : "Technical Competencies"}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-neutral-400 uppercase text-[10px] block mb-1">
                  {lang === "fr" ? "Langages & Systèmes" : "Languages & Systems"}
                </span>
                <p className="text-neutral-200">C (C99/C11), TypeScript, JavaScript, Python, Bash, SQL</p>
              </div>
              <div>
                <span className="text-neutral-400 uppercase text-[10px] block mb-1">
                  {lang === "fr" ? "Web & Architecture" : "Web & Architecture"}
                </span>
                <p className="text-neutral-200">Next.js (App Router), React 19, Node.js, Bun, Tailwind CSS</p>
              </div>
              <div>
                <span className="text-neutral-400 uppercase text-[10px] block mb-1">
                  {lang === "fr" ? "Réseaux & Protocoles" : "Networking & Protocols"}
                </span>
                <p className="text-neutral-200">POSIX Sockets, TCP/IP, pthreads, Raw Sockets, Multiplexing</p>
              </div>
              <div>
                <span className="text-neutral-400 uppercase text-[10px] block mb-1">
                  {lang === "fr" ? "Outils & DevOps" : "DevOps & Tools"}
                </span>
                <p className="text-neutral-200">Linux/Unix, Git, GitHub Actions, Docker, GDB, Valgrind, Figma</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-neutral-800 bg-neutral-950 flex justify-between items-center text-xs font-mono text-neutral-500">
          <span>{portfolioData.profile.name} — Portfolio CV</span>
          <button onClick={onClose} className="hover:text-neutral-300">
            {lang === "fr" ? "Fermer (Échap)" : "Close (Esc)"}
          </button>
        </div>
      </div>
    </div>
  );
}
