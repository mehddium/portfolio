"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Hero() {
  const { lang } = useLanguage();
  const profile = portfolioData.profile;

  return (
    <section className="py-20 md:py-28 border-b border-neutral-200/80">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left: Typography & Introduction (7 cols) */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{profile.status[lang]}</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.08]">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl font-normal text-neutral-700 leading-snug">
              {lang === "fr"
                ? "Ingénierie de systèmes bas niveau & applications web modernes."
                : "Building low-level systems & modern web applications."}
            </p>
          </div>

          <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl font-light">
            {lang === "fr"
              ? "Étudiant en informatique spécialisé dans le développement en C, les protocoles réseau POSIX et les architectures web complètes en Next.js et TypeScript."
              : "Computer Science student focused on C programming, POSIX network protocols, and end-to-end fullstack platforms with Next.js and TypeScript."}
          </p>

          <div className="flex items-center gap-4 pt-2 text-xs font-mono">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 transition-colors"
            >
              <span>{lang === "fr" ? "Voir les projets" : "View projects"}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-300 text-neutral-700 hover:text-neutral-950 hover:border-neutral-900 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>

        {/* Right: Technical Vector Illustration / Architecture Blueprint (5 cols) */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="w-full max-w-xs text-neutral-900 select-none">
            <svg
              viewBox="0 0 320 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              {/* Grid Background */}
              <defs>
                <pattern id="lightGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F1F3F5" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="320" height="280" fill="url(#lightGrid)" />

              {/* Systems Layer (C / POSIX) */}
              <g className="transition-all duration-300">
                <rect x="24" y="24" width="272" height="72" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
                <circle cx="44" cy="48" r="4" fill="#2563EB" />
                <text x="56" y="52" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" fill="#111827">
                  POSIX KERNEL & SOCKET LAYER
                </text>
                <text x="56" y="70" fontFamily="var(--font-mono)" fontSize="9.5" fill="#6B7280">
                  TCP/IP // SELECT // MMAP // PTHREADS
                </text>
              </g>

              {/* Connecting Bus Line */}
              <path d="M 160 96 L 160 144" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="160" cy="120" r="3" fill="#2563EB" />

              {/* Protocol / Interface Bridge */}
              <g className="transition-all duration-300">
                <rect x="64" y="136" width="192" height="40" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
                <text x="160" y="160" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fontWeight="500" fill="#374151">
                  RFC BINARY FRAMING // IPC
                </text>
              </g>

              {/* Connecting Bus Line 2 */}
              <path d="M 160 176 L 160 208" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="160" cy="192" r="3" fill="#10B981" />

              {/* Modern Web Layer (Next.js / TS) */}
              <g className="transition-all duration-300">
                <rect x="24" y="200" width="272" height="56" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
                <circle cx="44" cy="228" r="4" fill="#10B981" />
                <text x="56" y="232" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" fill="#111827">
                  REACTIVE WEB PLATFORM
                </text>
                <text x="56" y="246" fontFamily="var(--font-mono)" fontSize="9.5" fill="#6B7280">
                  NEXT.JS 15 // TYPESCRIPT // TAILWIND
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
