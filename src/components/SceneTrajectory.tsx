"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Briefcase, Award, CheckCircle2 } from "lucide-react";

export default function SceneTrajectory() {
  const { lang } = useLanguage();

  return (
    <section className="cinematic-slide glow-blue px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Scene Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <span>05</span>
            <span>/</span>
            <span>{lang === "fr" ? "Parcours & Jalons" : "Trajectory & Milestones"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {lang === "fr" ? "Évolution & Bagage Académique" : "Engineering Journey & Milestones"}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl">
            {lang === "fr"
              ? "Une progression alliant rigueur académique en sciences informatiques et réalisations techniques autonomes."
              : "A steady path combining rigorous academic computer science with self-directed systems and software projects."}
          </p>
        </div>

        {/* Timeline items list */}
        <div className="space-y-6 pt-2">
          {portfolioData.timeline.map((item, index) => {
            const isEducation = item.type === "education";
            const isProject = item.type === "project";

            return (
              <div
                key={item.id}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl ${
                        isEducation
                          ? "bg-cyan-500/10 text-cyan-400"
                          : isProject
                          ? "bg-purple-500/10 text-purple-400"
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {isEducation ? (
                        <GraduationCap className="w-5 h-5" />
                      ) : isProject ? (
                        <Award className="w-5 h-5" />
                      ) : (
                        <Briefcase className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.translations[lang].title}
                      </h3>
                      <p className="text-xs font-mono text-neutral-400">
                        {item.translations[lang].institution}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-neutral-300 border border-white/10 w-fit">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {item.translations[lang].description}
                </p>

                {/* Associated competencies */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.translations[lang].skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] text-neutral-400 border border-white/[0.06]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400/70" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
