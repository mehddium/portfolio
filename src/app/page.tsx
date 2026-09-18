"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowUpRight,
  Sun,
  Moon,
  Globe,
  Copy,
  Check,
  FileText,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Home() {
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<"all" | "web" | "systems" | "network">("all");

  const email = "314468480+mehddium@users.noreply.github.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredProjects = portfolioData.projects.filter(
    (p) => selectedFilter === "all" || p.category === selectedFilter
  );

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#ededed] font-sans antialiased selection:bg-neutral-800 selection:text-white">
      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24 space-y-16">
        {/* Top Header */}
        <header className="flex items-baseline justify-between pb-4 border-b border-neutral-800">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              {portfolioData.profile.name}
            </h1>
            <p className="text-sm text-neutral-400 font-mono mt-0.5">
              {lang === "fr" ? "Étudiant en Informatique & Développeur" : "Software & Systems Engineer"}
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              onClick={toggleLang}
              className="text-neutral-400 hover:text-white transition-colors"
              title="Toggle language"
            >
              [{lang === "fr" ? "FR" : "EN"}]
            </button>
          </div>
        </header>

        {/* Introduction */}
        <section className="space-y-4">
          <p className="text-base text-neutral-300 leading-relaxed font-normal">
            {lang === "fr" ? (
              <>
                Étudiant en informatique passionné par le développement{" "}
                <span className="text-white font-medium">système bas niveau (C, réseaux, protocoles)</span>{" "}
                et la conception d&apos;applications{" "}
                <span className="text-white font-medium">web fullstack modernes</span> avec Next.js et TypeScript.
              </>
            ) : (
              <>
                Computer science student focused on{" "}
                <span className="text-white font-medium">low-level systems (C, networking, protocols)</span>{" "}
                and building{" "}
                <span className="text-white font-medium">modern fullstack web applications</span> with Next.js and TypeScript.
              </>
            )}
          </p>

          <p className="text-sm text-neutral-400 leading-relaxed">
            {lang === "fr"
              ? "Attaché au code propre, à la rigueur algorithmique et à la performance sans artifice."
              : "Driven by clean code architecture, performance profiling, and building tools from the ground up."}
          </p>

          <div className="flex items-center gap-4 pt-2 font-mono text-xs">
            <a
              href="https://github.com/mehddium"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-300 hover:text-white link-hover"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/mehddium</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === "fr" ? "Email copié" : "Email copied") : "Email"}</span>
            </button>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-400">
              {lang === "fr" ? "Projets Sélectionnés" : "Selected Projects"}
            </h2>

            {/* Subtle Filter Tabs */}
            <div className="flex gap-2 font-mono text-xs">
              {(["all", "web", "systems", "network"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`capitalize transition-colors ${
                    selectedFilter === filter
                      ? "text-white font-bold underline underline-offset-4"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 divide-y divide-neutral-900 pt-1">
            {filteredProjects.map((project) => {
              const t = project.translations[lang];

              return (
                <article key={project.id} className="pt-5 first:pt-0 space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <a
                      href={project.githubUrl || "https://github.com/mehddium"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-base font-semibold text-white hover:text-neutral-300 transition-colors"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                    </a>
                    <span className="font-mono text-xs text-neutral-500">{project.year}</span>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {t.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-neutral-500 pt-1">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Education & Experience */}
        <section className="space-y-6">
          <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-400">
            {lang === "fr" ? "Parcours & Formation" : "Background"}
          </h2>

          <div className="space-y-5">
            {portfolioData.timeline.map((item) => {
              const t = item.translations[lang];
              return (
                <div key={item.id} className="space-y-1">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-neutral-200 font-semibold text-sm">{t.title}</span>
                    <span className="text-neutral-500">{item.period}</span>
                  </div>
                  <p className="text-xs font-mono text-neutral-400">{t.institution}</p>
                  <p className="text-xs text-neutral-400 leading-relaxed mt-1">
                    {t.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical Focus */}
        <section className="space-y-4">
          <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-400">
            {lang === "fr" ? "Compétences Techniques" : "Technical Stack"}
          </h2>

          <div className="space-y-2 text-xs font-mono text-neutral-300 leading-relaxed">
            <p>
              <span className="text-neutral-500 uppercase mr-2">{lang === "fr" ? "Systèmes & C:" : "Systems & C:"}</span>
              C (C99/C11), POSIX Sockets, TCP/IP, Multi-threading (pthreads), Linux internals, GDB, Valgrind.
            </p>
            <p>
              <span className="text-neutral-500 uppercase mr-2">{lang === "fr" ? "Web & Fullstack:" : "Web & Fullstack:"}</span>
              Next.js, TypeScript, React, Node.js, Bun, Tailwind CSS, PostgreSQL, REST APIs.
            </p>
            <p>
              <span className="text-neutral-500 uppercase mr-2">{lang === "fr" ? "DevOps & Outils:" : "DevOps & Tools:"}</span>
              Git, GitHub Actions, Docker, Make, Linux/Unix, Figma.
            </p>
          </div>
        </section>

        {/* Contact / Connect */}
        <section className="space-y-4 pt-6 border-t border-neutral-800">
          <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-400">
            Contact
          </h2>

          <p className="text-sm text-neutral-300 leading-relaxed">
            {lang === "fr"
              ? "Ouvert aux opportunités de stage et aux échanges sur des projets systèmes ou fullstack."
              : "Open for internship opportunities, systems projects, and fullstack engineering collaborations."}
          </p>

          <div className="flex flex-wrap gap-4 font-mono text-xs">
            <a
              href={`mailto:${email}`}
              className="text-white hover:underline underline-offset-4"
            >
              {email}
            </a>

            <a
              href="https://github.com/mehddium"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="pt-8 text-xs font-mono text-neutral-600 flex justify-between items-center">
          <span>Mehdi © {new Date().getFullYear()}</span>
          <span>Next.js · Bun · GitHub Pages</span>
        </footer>
      </div>
    </div>
  );
}
