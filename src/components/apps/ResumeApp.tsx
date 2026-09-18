"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Printer, GraduationCap, Cpu, Download, FileText } from "lucide-react";

export default function ResumeApp() {
  const { lang } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs text-white font-bold">
            {lang === "fr" ? "CV_MEHDI.PDF (Aperçu Document)" : "RESUME_MEHDI.PDF (Document View)"}
          </span>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/30 text-xs font-mono transition-all"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>{lang === "fr" ? "Imprimer / Exporter PDF" : "Print / PDF Export"}</span>
        </button>
      </div>

      {/* Printable Sheet */}
      <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 text-neutral-200 space-y-6">
        {/* Header */}
        <div className="border-b border-white/10 pb-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight uppercase">
                {portfolioData.profile.name}
              </h1>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">
                {portfolioData.profile.role[lang]}
              </p>
            </div>
            <div className="font-mono text-xs text-neutral-400 text-left sm:text-right space-y-0.5">
              <p>{portfolioData.profile.email}</p>
              <p>{portfolioData.profile.githubUrl}</p>
              <p>{portfolioData.profile.location}</p>
            </div>
          </div>
          <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
            {portfolioData.profile.bio[lang].description}
          </p>
        </div>

        {/* Education & Projects */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider border-b border-white/10 pb-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === "fr" ? "Formation & Projets Clés" : "Education & Trajectory"}</span>
          </div>

          <div className="space-y-4">
            {portfolioData.timeline.map((item) => {
              const t = item.translations[lang];
              return (
                <div key={item.id} className="space-y-0.5">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="font-bold text-white">{t.title}</span>
                    <span className="text-neutral-500">{item.period}</span>
                  </div>
                  <p className="text-xs font-mono text-neutral-400">{t.institution}</p>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-1">
                    {t.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Matrix */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider border-b border-white/10 pb-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === "fr" ? "Compétences Techniques" : "Technical Competencies"}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-cyan-400 text-[10px] block mb-1 font-bold uppercase">
                LANGUAGES & C
              </span>
              <p className="text-neutral-200">C (C99/C11), TypeScript, JavaScript, Python, Bash, SQL</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-cyan-400 text-[10px] block mb-1 font-bold uppercase">
                WEB ARCHITECTURE
              </span>
              <p className="text-neutral-200">Next.js 15, React 19, Node.js, Bun, Tailwind CSS</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-cyan-400 text-[10px] block mb-1 font-bold uppercase">
                NETWORKING & POSIX
              </span>
              <p className="text-neutral-200">POSIX Sockets, TCP/IP, pthreads, Raw Sockets, Multiplexing</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-cyan-400 text-[10px] block mb-1 font-bold uppercase">
                TOOLS & DEVOPS
              </span>
              <p className="text-neutral-200">Linux/Unix, Git, GitHub Actions, Docker, GDB, Valgrind, Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
