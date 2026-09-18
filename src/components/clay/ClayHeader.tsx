"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { portfolioData } from "@/data/portfolioData";
import { Globe, Sun, Moon, FileText, Menu, X } from "lucide-react";

interface ClayHeaderProps {
  onOpenResume: () => void;
}

export default function ClayHeader({ onOpenResume }: ClayHeaderProps) {
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: lang === "fr" ? "Projets" : "Projects" },
    { href: "#experience", label: lang === "fr" ? "Parcours" : "Timeline" },
    { href: "#skills", label: lang === "fr" ? "Compétences" : "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-4xl mx-auto clay-box px-5 py-3 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-2xl clay-primary flex items-center justify-center font-mono font-bold text-sm shadow-md">
            M
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-neutral-900 dark:text-white">
              {portfolioData.profile.name}
            </span>
            <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 hidden sm:inline-block ml-2 pl-2 border-l border-neutral-300 dark:border-neutral-700">
              {portfolioData.profile.role[lang]}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl clay-btn text-neutral-700 dark:text-neutral-300 hover:text-indigo-500 transition-colors"
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Lang Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl clay-btn text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-500" />
            <span>{lang === "fr" ? "EN" : "FR"}</span>
          </button>

          {/* CV Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl clay-primary text-xs font-mono font-semibold"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl clay-btn text-neutral-700 dark:text-neutral-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-4xl mx-auto mt-2 clay-box p-4 space-y-2 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-neutral-800 dark:text-neutral-200 font-semibold"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 p-2 rounded-xl clay-primary font-bold"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Voir le CV (PDF)" : "View Resume (PDF)"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
