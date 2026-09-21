"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface LedgerHeaderProps {
  onOpenResume: () => void;
}

export default function LedgerHeader({ onOpenResume }: LedgerHeaderProps) {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#projets", label: { en: "Projects", fr: "Projets" } },
    { href: "#matrice", label: { en: "Engineering Matrix", fr: "Matrice Technique" } },
    { href: "#parcours", label: { en: "Milestones", fr: "Parcours" } },
    { href: "#contact", label: { en: "Dispatch / Contact", fr: "Contact" } },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-150 border-b ${
        scrolled
          ? "bg-[#0e1017]/95 backdrop-blur-md border-[#222533] py-3"
          : "bg-[#0e1017] border-[#222533] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Masthead Identity */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-[#f4f5f8] hover:text-blue-400 transition-colors uppercase"
          >
            {portfolioData.profile.name}
          </a>
          <span className="hidden sm:inline-block w-px h-4 bg-[#222533]" />
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#8b90a0]">
            <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse" />
            <span className="text-[#f4f5f8] font-sans font-medium text-xs">
              {portfolioData.profile.status[lang]}
            </span>
          </div>
        </div>

        {/* Desktop Registry Nav & Actions */}
        <div className="hidden md:flex items-center gap-6 text-xs font-medium">
          <nav className="flex items-center gap-1 text-[#8b90a0]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-[#8b90a0] hover:text-[#f4f5f8] hover:bg-[#151822] transition-colors"
              >
                {item.label[lang]}
              </a>
            ))}
          </nav>

          <span className="w-px h-4 bg-[#222533]" />

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 bg-[#151822] border border-[#222533] hover:border-[#3b82f6] text-[#f4f5f8] transition-colors"
            >
              CV (PDF)
            </button>

            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 border border-[#222533] hover:border-[#3b82f6] text-[#8b90a0] hover:text-[#f4f5f8] font-mono transition-colors"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#8b90a0] hover:text-[#f4f5f8] px-2 py-1.5 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLang}
            className="px-2 py-1 text-xs font-mono text-[#8b90a0] border border-[#222533]"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#8b90a0] hover:text-[#f4f5f8]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-[#0e1017] border-b border-[#222533] space-y-3">
          <nav className="flex flex-col gap-2 text-sm text-[#8b90a0]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#8b90a0] hover:text-[#f4f5f8]"
              >
                {item.label[lang]}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#222533] flex items-center justify-between text-xs">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-[#f4f5f8] font-semibold"
            >
              CV (PDF)
            </button>
            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#8b90a0]"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
