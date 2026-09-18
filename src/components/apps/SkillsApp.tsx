"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, Activity, Zap, HardDrive, ShieldCheck } from "lucide-react";

export default function SkillsApp() {
  const { lang } = useLanguage();

  const getPercentage = (level: string) => {
    switch (level) {
      case "Advanced":
        return 92;
      case "Proficient":
        return 80;
      default:
        return 65;
    }
  };

  const getProgressColor = (key: string) => {
    switch (key) {
      case "languages":
        return "bg-amber-400";
      case "web":
        return "bg-cyan-400";
      case "systems":
        return "bg-emerald-400";
      default:
        return "bg-purple-400";
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Resource Status Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-mono mb-1">
            <span>CORE DEV</span>
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <span className="font-mono text-sm font-bold text-white">C / TYPESCRIPT</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-mono mb-1">
            <span>WEB ENGINE</span>
            <Zap className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <span className="font-mono text-sm font-bold text-white">NEXT.JS 15</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-mono mb-1">
            <span>NETWORKING</span>
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="font-mono text-sm font-bold text-white">POSIX SOCKETS</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-mono mb-1">
            <span>SYSTEM</span>
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <span className="font-mono text-sm font-bold text-white">LINUX / UNIX</span>
        </div>
      </div>

      {/* Grouped Skills Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolioData.skillGroups.map((group) => (
          <div
            key={group.nameKey}
            className="p-5 rounded-2xl glass-card space-y-3"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                {group.translations[lang]}
              </h3>
              <span className="text-[10px] font-mono text-neutral-400">
                {group.skills.length} modules
              </span>
            </div>

            <div className="space-y-2.5 pt-1">
              {group.skills.map((skill) => {
                const pct = getPercentage(skill.level);
                const color = getProgressColor(group.nameKey);

                return (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-neutral-200">{skill.name}</span>
                      <span className="text-[10px] text-neutral-400 font-bold">{skill.level}</span>
                    </div>
                    {/* Load meter bar */}
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${color}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
