"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, Globe, Terminal, Layers } from "lucide-react";

export default function Capabilities() {
  const { lang } = useLanguage();

  const getIcon = (nameKey: string) => {
    switch (nameKey) {
      case "languages":
        return <Terminal className="w-4 h-4 text-neutral-900" />;
      case "web":
        return <Globe className="w-4 h-4 text-neutral-900" />;
      case "systems":
        return <Cpu className="w-4 h-4 text-neutral-900" />;
      case "tools":
      default:
        return <Layers className="w-4 h-4 text-neutral-900" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-neutral-200/80">
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-950">
          {lang === "fr" ? "Domaines d'expertise" : "Technical Capabilities"}
        </h2>
        <p className="text-xs font-mono text-neutral-500 mt-1">
          {lang === "fr" ? "Langages, systèmes, architecture web et outillage" : "Languages, systems, web architecture, and tooling"}
        </p>
      </div>

      {/* Clean open columns — No cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {portfolioData.skillGroups.map((group) => (
          <div key={group.nameKey} className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-neutral-200">
              {getIcon(group.nameKey)}
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900">
                {group.translations[lang]}
              </h3>
            </div>

            <ul className="space-y-2 text-sm text-neutral-600 font-light">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between text-xs">
                  <span className="text-neutral-800">{skill.name}</span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {skill.level === "Advanced" ? "Adv." : "Prof."}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
