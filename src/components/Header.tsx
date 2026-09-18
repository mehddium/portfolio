"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Globe, FileText, Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const { lang, toggleLang } = useLanguage();
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
    { href: "#experience", label: lang === "fr" ? "Parcours" : "Experience" },
    { href: "#skills", label: lang === "fr" ? "Compétences" : "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-3 text-neutral-100 hover:text-white transition-colors"
        >
          <div className="w-7 h-7 bg-neutral-100 text-neutral-950 font-mono font-bold flex items-center justify-center text-xs tracking-tighter group-hover:bg-neutral-300 transition-colors">
            M
          </div>
          <div>
            <span className="font-bold tracking-tight text-sm uppercase">
              {portfolioData.profile.name}
            </span>
            <span className="text-[10px] text-neutral-400 font-mono ml-2 hidden sm:inline-block border-l border-neutral-800 pl-2">
              {portfolioData.profile.role[lang]}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-400 hover:text-neutral-100 transition-colors uppercase tracking-wider relative py-1 hover:underline underline-offset-4 decoration-neutral-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Lang toggle + Resume + Mobile menu toggle) */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-neutral-800 bg-neutral-900/80 text-neutral-300 hover:text-white hover:border-neutral-700 text-xs font-mono transition-colors"
            title={lang === "fr" ? "Switch to English" : "Passer en Français"}
          >
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-bold">{lang === "fr" ? "EN" : "FR"}</span>
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-100 text-neutral-950 hover:bg-neutral-300 text-xs font-mono font-semibold transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-neutral-800 px-6 py-4 space-y-3 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-white py-1 uppercase tracking-wider text-xs"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-800 flex gap-2">
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded bg-neutral-100 text-neutral-950 text-xs font-mono font-bold"
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
