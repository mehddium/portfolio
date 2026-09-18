"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Layers, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

export default function BayMatrixTrajectory() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"matrix" | "trajectory">("matrix");

  return (
    <section className="horizontal-bay w-[94vw] sm:w-[88vw] md:w-[80vw] lg:w-[72vw] min-w-[320px] md:min-w-[800px] bg-[#07080b] flex flex-col justify-between select-text">
      {/* Bay Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="text-amber-400 font-bold">03</span>
          <span className="text-neutral-500">// CAPABILITY MATRIX & TRAJECTORY</span>
        </div>
        {/* Toggle Switcher */}
        <div className="flex items-center gap-1 p-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
          <button
            onClick={() => setActiveTab("matrix")}
            className={`px-2.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
              activeTab === "matrix"
                ? "bg-amber-400/20 text-amber-300 font-bold border border-amber-400/40"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {lang === "fr" ? "MATRICE" : "MATRIX"}
          </button>
          <button
            onClick={() => setActiveTab("trajectory")}
            className={`px-2.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
              activeTab === "trajectory"
                ? "bg-amber-400/20 text-amber-300 font-bold border border-amber-400/40"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {lang === "fr" ? "PARCOURS" : "TRAJECTORY"}
          </button>
        </div>
      </div>

      {/* Main Content Pane */}
      <div className="my-auto py-3">
        {activeTab === "matrix" ? (
          /* Technical Matrix View */
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {lang === "fr" ? "Matrice de Compétences Techniques" : "Technical Capability Matrix"}
                </h3>
                <p className="text-xs text-neutral-400 font-light">
                  {lang === "fr"
                    ? "Compétences clés articulées par domaines d'ingénierie et niveaux de maîtrise."
                    : "Core capabilities structured across engineering domains and verified proficiencies."}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {portfolioData.skillGroups.map((group) => (
                <div
                  key={group.nameKey}
                  className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-white/[0.12] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-amber-300/90 font-semibold border-b border-white/[0.04] pb-1.5">
                    <span>{group.translations[lang]}</span>
                    <span className="text-[10px] text-neutral-500 font-normal">
                      {group.skills.length} SKILLS
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 pt-1">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between text-xs">
                        <span className="text-neutral-300 truncate font-light">{skill.name}</span>
                        <span
                          className={`text-[9px] font-mono px-1 rounded ${
                            skill.level === "Advanced"
                              ? "text-sky-400 bg-sky-950/40"
                              : "text-neutral-400 bg-neutral-800/40"
                          }`}
                        >
                          {skill.level === "Advanced" ? "ADV" : "PRO"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Trajectory / Journey View */
          <div className="space-y-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {lang === "fr" ? "Parcours Académique & Projets" : "Academic & Engineering Journey"}
              </h3>
              <p className="text-xs text-neutral-400 font-light">
                {lang === "fr"
                  ? "Étapes de formation, projets d'envergure et réalisations d'ingénierie."
                  : "Key academic milestones, systems lab work, and professional development."}
              </p>
            </div>

            <div className="space-y-2.5 pt-1">
              {portfolioData.timeline.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                    <span className="font-bold text-neutral-100 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {item.translations[lang].title}
                    </span>
                    <span className="font-mono text-[10px] text-amber-300/80 bg-amber-950/30 px-2 py-0.5 rounded border border-amber-800/30">
                      {item.period}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-neutral-400">
                    {item.translations[lang].institution}
                  </div>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {item.translations[lang].description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.translations[lang].skills.map((s) => (
                      <span
                        key={s}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.03] text-neutral-400 border border-white/[0.06]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bay Footer Status */}
      <div className="border-t border-white/[0.06] pt-3 flex items-center justify-between text-[11px] font-mono text-neutral-500">
        <span>CURRICULUM SPEC // VERIFIED CAPABILITIES</span>
        <span className="hidden sm:inline text-neutral-600">SECTION 03 / 04</span>
      </div>
    </section>
  );
}
