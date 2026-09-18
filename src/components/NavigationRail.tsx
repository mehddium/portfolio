"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { portfolioData } from "@/data/portfolioData";
import {
  LayoutDashboard,
  FolderGit2,
  Terminal,
  History,
  Cpu,
  Mail,
  FileText,
  Globe,
  Sun,
  Moon,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export type TabId = "overview" | "projects" | "systems" | "timeline" | "contact";

interface NavigationRailProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
  onOpenResume: () => void;
}

export default function NavigationRail({
  activeTab,
  onSelectTab,
  onOpenResume,
}: NavigationRailProps) {
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    {
      id: "overview" as TabId,
      label: { en: "Overview", fr: "Aperçu" },
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      id: "projects" as TabId,
      label: { en: "Projects", fr: "Projets" },
      icon: <FolderGit2 className="w-5 h-5" />,
    },
    {
      id: "systems" as TabId,
      label: { en: "C & Systems", fr: "Systèmes & C" },
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      id: "timeline" as TabId,
      label: { en: "Timeline", fr: "Parcours" },
      icon: <History className="w-5 h-5" />,
    },
    {
      id: "contact" as TabId,
      label: { en: "Contact", fr: "Contact" },
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* Desktop M3 Navigation Rail (Left Sidebar) */}
      <aside className="hidden lg:flex flex-col justify-between w-64 h-screen sticky top-0 bg-[var(--m3-surface-container-low)] border-r border-[var(--m3-outline-variant)]/60 p-4 shrink-0 transition-colors">
        <div className="space-y-6">
          {/* Header & Google-style Brand */}
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-10 h-10 rounded-full bg-[var(--m3-primary-container)] text-[var(--m3-on-primary-container)] flex items-center justify-center font-bold text-sm shadow-sm">
              M
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm tracking-tight text-[var(--m3-on-surface)]">
                  {portfolioData.profile.name}
                </span>
                <div className="flex items-center gap-0.5 ml-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC04]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
                </div>
              </div>
              <p className="text-[11px] font-mono text-[var(--m3-on-surface-variant)] truncate max-w-[140px]">
                {portfolioData.profile.role[lang]}
              </p>
            </div>
          </div>

          {/* M3 Extended FAB at top of Rail */}
          <button
            onClick={onOpenResume}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-[var(--m3-primary)] text-[var(--m3-on-primary)] font-semibold text-xs shadow-sm hover:shadow-md active:scale-95 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>{lang === "fr" ? "Curriculum Vitae" : "View Resume (PDF)"}</span>
          </button>

          {/* Navigation Items (M3 Rail Destinations) */}
          <nav className="space-y-1 font-medium text-sm">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-full transition-all text-left ${
                    isActive
                      ? "bg-[var(--m3-secondary-container)] text-[var(--m3-on-secondary-container)] font-bold shadow-xs"
                      : "text-[var(--m3-on-surface-variant)] hover:bg-[var(--m3-surface-container-high)] hover:text-[var(--m3-on-surface)]"
                  }`}
                >
                  <div
                    className={`p-1 rounded-full ${
                      isActive ? "text-[var(--m3-primary)]" : ""
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span>{item.label[lang]}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Rail Controls (Theme, Lang, GitHub) */}
        <div className="pt-4 border-t border-[var(--m3-outline-variant)]/60 space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between px-2">
            {/* Lang switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--m3-surface)] border border-[var(--m3-outline-variant)] text-[var(--m3-on-surface)] hover:bg-[var(--m3-surface-container-high)] transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--m3-primary)]" />
              <span className="font-bold">{lang === "fr" ? "EN" : "FR"}</span>
            </button>

            {/* Theme switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--m3-surface-container-high)] text-[var(--m3-on-surface-variant)]"
              title={theme === "dark" ? "Light Mode" : "Dark Mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#FBBC04]" />
              ) : (
                <Moon className="w-4 h-4 text-[#0B57D0]" />
              )}
            </button>
          </div>

          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2 rounded-xl bg-[var(--m3-surface)] hover:bg-[var(--m3-surface-container-high)] text-[var(--m3-on-surface-variant)] hover:text-[var(--m3-on-surface)] transition-colors"
          >
            <div className="flex items-center gap-2">
              <GithubIcon className="w-4 h-4" />
              <span>mehddium</span>
            </div>
            <span className="text-[10px] text-[var(--m3-primary)]">GitHub ↗</span>
          </a>
        </div>
      </aside>

      {/* Mobile M3 Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--m3-surface-container-low)]/95 backdrop-blur-md border-t border-[var(--m3-outline-variant)]/60 px-2 py-1.5 flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-2xl transition-all ${
                isActive
                  ? "text-[var(--m3-on-secondary-container)] font-bold"
                  : "text-[var(--m3-on-surface-variant)]"
              }`}
            >
              <div
                className={`px-3.5 py-1 rounded-full ${
                  isActive ? "bg-[var(--m3-secondary-container)]" : ""
                }`}
              >
                {item.icon}
              </div>
              <span className="text-[10px] tracking-tight">{item.label[lang]}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
