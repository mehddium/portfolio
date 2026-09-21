"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { FileText, Mail, Menu, X } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

interface QuickHudNavProps {
  onOpenResume: () => void;
}

export default function QuickHudNav({ onOpenResume }: QuickHudNavProps) {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#projets", label: { en: "Projects", fr: "Projets" } },
    { href: "#competences", label: { en: "Skills", fr: "Compétences" } },
    { href: "#parcours", label: { en: "Journey", fr: "Parcours" } },
    { href: "#recommandations", label: { en: "Vouching", fr: "Recommandations" } },
    { href: "#contact", label: { en: "Contact", fr: "Contact" } },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-lg"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand & Live Status */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-extrabold text-sm sm:text-base tracking-tight uppercase">
              {portfolioData.profile.name}
            </span>
          </a>

          {/* Availability Pill */}
          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{portfolioData.profile.status[lang]}</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {link.label[lang]}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-neutral-300 hover:text-white transition-colors"
            title="Switch Language"
          >
            [{lang === "fr" ? "FR" : "EN"}]
          </button>

          {/* Resume Modal CTA */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV (PDF)</span>
          </button>

          {/* Quick Contact Link */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "Contact" : "Hire Me"}</span>
          </a>

          {/* GitHub Icon */}
          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-neutral-300 hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4 fill-current" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-neutral-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-neutral-950 border-b border-neutral-800 space-y-3 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{portfolioData.profile.status[lang]}</span>
          </div>

          <nav className="flex flex-col gap-2 font-mono text-sm pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-neutral-300 hover:text-white"
              >
                {link.label[lang]}
              </a>
            ))}
          </nav>

          <div className="flex gap-2 pt-2 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white text-black font-semibold text-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV (PDF)</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold text-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
