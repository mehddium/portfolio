"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { portfolioData } from "@/data/portfolioData";
import { Globe, FileText, Menu, X, Sun, Moon } from "lucide-react";

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#projects", label: lang === "fr" ? "Projets" : "Projects" },
    { href: "#experience", label: lang === "fr" ? "Parcours" : "Timeline" },
    { href: "#skills", label: lang === "fr" ? "Stack" : "Stack" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#FDFBF7]/90 dark:bg-[#0D0E12]/90 backdrop-blur-md border-b-2 border-black dark:border-zinc-800 py-3 shadow-[0_4px_0px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_0px_0px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Neo-Brutalist Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-black dark:text-white"
        >
          <div className="w-8 h-8 bg-[#FFE600] text-black font-mono font-black text-sm flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_#000] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
            M.
          </div>
          <div>
            <span className="font-black tracking-tight text-sm uppercase">
              {portfolioData.profile.name}
            </span>
            <span className="text-[10px] font-mono font-bold ml-2 px-1.5 py-0.5 bg-black text-white dark:bg-zinc-800 dark:text-zinc-300 rounded-none border border-black dark:border-zinc-700 hidden sm:inline-block">
              SYS & WEB
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs font-bold">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-[#FFE600] uppercase tracking-wider py-1 hover:underline decoration-2 underline-offset-4 transition-colors"
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
            className="p-1.5 bg-white dark:bg-zinc-900 text-black dark:text-white border-2 border-black dark:border-zinc-700 shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[#FFE600]" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-900" />
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#00F0FF] text-black font-mono font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "EN" : "FR"}</span>
          </button>

          {/* Resume Trigger */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#FFE600] text-black font-mono font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 text-black dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] dark:bg-[#14151B] border-b-2 border-black dark:border-zinc-700 px-6 py-4 space-y-3 font-mono font-bold text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-black dark:text-white py-1 uppercase tracking-wider text-xs hover:text-[#FFE600]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t-2 border-black dark:border-zinc-800">
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#FFE600] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] font-black text-xs uppercase"
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
