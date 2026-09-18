"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { X, Printer, GraduationCap, Cpu } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#14151B] border-4 border-black shadow-[10px_10px_0px_0px_#FFE600] flex flex-col overflow-hidden">
        {/* Modal Window Top Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b-2 border-black bg-[#FDFBF7] dark:bg-[#0D0E12]">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#FF6B6B] border border-black" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#FFE600] border border-black" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#4ADE80] border border-black" />
            <span className="font-mono text-xs text-black dark:text-white font-black uppercase tracking-wider ml-2">
              {lang === "fr" ? "CV_MEHDI_PREVIEW.PDF" : "RESUME_MEHDI_PREVIEW.PDF"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1 bg-[#00F0FF] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] text-xs font-mono font-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === "fr" ? "IMPRIMER / PDF" : "PRINT / PDF"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 bg-[#FF6B6B] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white dark:bg-[#14151B] text-black dark:text-white font-sans">
          {/* Header */}
          <div className="border-b-2 border-black dark:border-zinc-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl font-black tracking-tight uppercase">
                  {portfolioData.profile.name}
                </h1>
                <p className="text-sm font-mono font-bold text-zinc-600 dark:text-[#FFE600] mt-1 uppercase">
                  {portfolioData.profile.role[lang]}
                </p>
              </div>
              <div className="font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400 text-left sm:text-right space-y-0.5">
                <p>{portfolioData.profile.email}</p>
                <p>{portfolioData.profile.githubUrl}</p>
                <p>{portfolioData.profile.location}</p>
              </div>
            </div>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-4 leading-relaxed font-normal">
              {portfolioData.profile.bio[lang].description}
            </p>
          </div>

          {/* Education & Projects */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono font-black text-xs uppercase tracking-wider border-b-2 border-black dark:border-zinc-800 pb-2">
              <GraduationCap className="w-4 h-4 text-[#FFE600]" />
              <span>{lang === "fr" ? "Formation & Projets Majeurs" : "Education & Key Projects"}</span>
            </div>

            <div className="space-y-6">
              {portfolioData.timeline.map((item) => {
                const t = item.translations[lang];
                return (
                  <div key={item.id} className="space-y-1">
                    <div className="flex justify-between items-baseline font-mono text-xs">
                      <span className="font-black text-black dark:text-white text-sm uppercase">{t.title}</span>
                      <span className="font-bold text-zinc-500">{item.period}</span>
                    </div>
                    <p className="text-xs font-mono font-bold text-zinc-600 dark:text-[#00F0FF]">{t.institution}</p>
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed mt-1">
                      {t.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Competencies */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono font-black text-xs uppercase tracking-wider border-b-2 border-black dark:border-zinc-800 pb-2">
              <Cpu className="w-4 h-4 text-[#00F0FF]" />
              <span>{lang === "fr" ? "Compétences Techniques" : "Technical Stack"}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 bg-[#FDFBF7] dark:bg-[#0D0E12] border border-black dark:border-zinc-800">
                <span className="font-black text-[#FF8E3C] uppercase text-[10px] block mb-1">
                  LANGUAGES & C
                </span>
                <p className="font-bold">C (C99/C11), TypeScript, JavaScript, Python, Bash, SQL</p>
              </div>
              <div className="p-3 bg-[#FDFBF7] dark:bg-[#0D0E12] border border-black dark:border-zinc-800">
                <span className="font-black text-[#FFE600] uppercase text-[10px] block mb-1">
                  WEB ARCHITECTURE
                </span>
                <p className="font-bold">Next.js 15, React 19, Node.js, Bun, Tailwind CSS</p>
              </div>
              <div className="p-3 bg-[#FDFBF7] dark:bg-[#0D0E12] border border-black dark:border-zinc-800">
                <span className="font-black text-[#00F0FF] uppercase text-[10px] block mb-1">
                  NETWORKING & POSIX
                </span>
                <p className="font-bold">POSIX Sockets, TCP/IP, pthreads, Multiplexing</p>
              </div>
              <div className="p-3 bg-[#FDFBF7] dark:bg-[#0D0E12] border border-black dark:border-zinc-800">
                <span className="font-black text-[#4ADE80] uppercase text-[10px] block mb-1">
                  SYSTEMS & TOOLS
                </span>
                <p className="font-bold">Linux/Unix, Git, GitHub Actions, Docker, GDB, Valgrind</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t-2 border-black dark:border-zinc-800 bg-[#FDFBF7] dark:bg-[#0D0E12] flex justify-between items-center text-xs font-mono font-bold text-zinc-500">
          <span>MEHDI — PORTFOLIO CV</span>
          <button onClick={onClose} className="hover:text-black dark:hover:text-white uppercase">
            {lang === "fr" ? "FERMER (ÉCHAP)" : "CLOSE (ESC)"}
          </button>
        </div>
      </div>
    </div>
  );
}
