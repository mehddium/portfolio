"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface QuickHudNavProps {
  onOpenResume: () => void;
}

export default function QuickHudNav({ onOpenResume }: QuickHudNavProps) {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#projets", label: { en: "Projects", fr: "Projets" } },
    { href: "#competences", label: { en: "Skills", fr: "Compétences" } },
    { href: "#parcours", label: { en: "Journey", fr: "Parcours" } },
    { href: "#contact", label: { en: "Contact", fr: "Contact" } },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#14151b]/95 backdrop-blur-md border-b border-[#242735] py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Left: Clean Brand & Status */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-base font-semibold tracking-tight text-white hover:text-blue-400 transition-colors"
          >
            {portfolioData.profile.name}
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{lang === "fr" ? "Disponible" : "Available"}</span>
          </span>
          <span className="hidden md:inline text-xs text-neutral-400 font-normal">
            &middot; {portfolioData.profile.role[lang]}
          </span>
        </div>

        {/* Right: Minimalist Links & Actions */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <nav className="flex items-center gap-1 text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-md hover:bg-[#1e212d] hover:text-white transition-all text-xs font-medium"
              >
                {link.label[lang]}
              </a>
            ))}
          </nav>

          <span className="w-px h-4 bg-[#282c3a]" />

          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-md bg-[#1e222f] hover:bg-[#272c3d] text-white border border-[#2b3042] font-medium transition-all"
            >
              CV (PDF)
            </button>

            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 rounded-md text-neutral-300 hover:text-white border border-[#282c3a] hover:border-[#383e52] transition-colors font-medium"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-300 hover:text-white px-2 py-1.5 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            className="px-2 py-1 text-xs text-neutral-300 border border-[#282c3a] rounded"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-neutral-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-neutral-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-4 bg-[#181a22] border-b border-[#262935] space-y-3">
          <nav className="flex flex-col gap-2.5 text-sm text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-1 hover:text-white"
              >
                {link.label[lang]}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#262935] flex items-center justify-between text-xs">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="text-white font-medium"
            >
              CV (PDF)
            </button>
            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white inline-flex items-center gap-1"
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
