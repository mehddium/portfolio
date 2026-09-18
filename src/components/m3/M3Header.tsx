"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { portfolioData } from "@/data/portfolioData";
import { Globe, Sun, Moon, FileText, Menu, X } from "lucide-react";

interface M3HeaderProps {
  onOpenResume: () => void;
}

export default function M3Header({ onOpenResume }: M3HeaderProps) {
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
    <header className="sticky top-0 z-50 bg-[var(--m3-surface)]/90 backdrop-blur-md border-b border-[var(--m3-outline-variant)]/60 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Google-Style Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[var(--m3-primary-container)] text-[var(--m3-on-primary-container)] flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            M
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base tracking-tight text-[var(--m3-on-surface)]">
                {portfolioData.profile.name}
              </span>
              {/* Google 4-Color Accent Dots */}
              <div className="flex items-center gap-0.5 ml-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC04]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
              </div>
            </div>
            <span className="text-[11px] font-mono text-[var(--m3-on-surface-variant)] -mt-0.5">
              {portfolioData.profile.role[lang]}
            </span>
          </div>
        </a>

        {/* Navigation Text Buttons */}
        <nav className="hidden md:flex items-center gap-1 font-medium text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-full text-[var(--m3-on-surface-variant)] hover:text-[var(--m3-on-surface)] hover:bg-[var(--m3-surface-container-high)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle (M3 Icon Button) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full hover:bg-[var(--m3-surface-container-high)] text-[var(--m3-on-surface-variant)] hover:text-[var(--m3-on-surface)] transition-colors"
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {theme === "dark" ? <Sun className="w-5 h-5 text-[#FBBC04]" /> : <Moon className="w-5 h-5 text-[#0B57D0]" />}
          </button>

          {/* M3 Language Filter Chip */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--m3-outline)] text-xs font-medium text-[var(--m3-on-surface)] hover:bg-[var(--m3-surface-container-high)] transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[var(--m3-primary)]" />
            <span className="font-semibold">{lang === "fr" ? "EN" : "FR"}</span>
          </button>

          {/* M3 Filled Button (CV) */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--m3-primary)] text-[var(--m3-on-primary)] font-medium text-xs shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-[var(--m3-surface-container-high)] text-[var(--m3-on-surface)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--m3-surface-container-low)] border-b border-[var(--m3-outline-variant)] px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-[var(--m3-on-surface)] hover:bg-[var(--m3-surface-container-high)]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[var(--m3-outline-variant)]">
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-[var(--m3-primary)] text-[var(--m3-on-primary)] text-xs font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === "fr" ? "Voir le CV (PDF)" : "View Resume (PDF)"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
