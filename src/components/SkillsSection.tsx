"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export default function SkillsSection() {
  const { lang } = useLanguage();

  return (
    <section id="competences" className="py-20 px-6 sm:px-8 max-w-5xl mx-auto border-t border-[#262935]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Header */}
        <div className="md:col-span-4 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {lang === "fr" ? "Compétences & environnement" : "Skills & Tooling"}
          </h2>
          <p className="text-sm text-neutral-400 font-light leading-relaxed">
            {lang === "fr"
              ? "Les technologies et outils que j'utilise au quotidien pour concevoir, auditer et déployer."
              : "The technologies and tools I use to design, audit, and deploy software."}
          </p>
        </div>

        {/* Right Typographic Tree (No cards) */}
        <div className="md:col-span-8 space-y-8 divide-y divide-[#262935]">
          {portfolioData.skillCategories.map((cat, idx) => (
            <div key={idx} className="pt-6 first:pt-0 space-y-2.5">
              <h3 className="text-sm font-medium text-white tracking-tight">
                {cat.title[lang]}
              </h3>

              <div className="flex flex-wrap gap-2 text-sm text-neutral-300">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-block px-2.5 py-1 rounded-md text-xs text-neutral-300 bg-[#1b1d25] border border-[#272a37]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
