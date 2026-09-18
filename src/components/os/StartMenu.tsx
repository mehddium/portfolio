"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { AppId } from "@/types/os";
import {
  User,
  FolderGit2,
  Terminal,
  History,
  Cpu,
  FileText,
  Mail,
  RotateCw,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (id: AppId) => void;
}

export default function StartMenu({ isOpen, onClose, onOpenApp }: StartMenuProps) {
  const { lang } = useLanguage();

  if (!isOpen) return null;

  const appList = [
    { id: "about" as AppId, label: { en: "About Developer", fr: "À Propos" }, icon: <User className="w-4 h-4 text-cyan-400" /> },
    { id: "projects" as AppId, label: { en: "Projects Explorer", fr: "Explorateur de Projets" }, icon: <FolderGit2 className="w-4 h-4 text-amber-400" /> },
    { id: "terminal" as AppId, label: { en: "Interactive Terminal", fr: "Terminal Interactif" }, icon: <Terminal className="w-4 h-4 text-emerald-400" /> },
    { id: "skills" as AppId, label: { en: "Task Manager (Skills)", fr: "Gestionnaire (Stack)" }, icon: <Cpu className="w-4 h-4 text-purple-400" /> },
    { id: "experience" as AppId, label: { en: "Experience Timeline", fr: "Parcours & Formation" }, icon: <History className="w-4 h-4 text-indigo-400" /> },
    { id: "resume" as AppId, label: { en: "Curriculum Vitae", fr: "Curriculum Vitae" }, icon: <FileText className="w-4 h-4 text-rose-400" /> },
    { id: "contact" as AppId, label: { en: "Mail Client", fr: "Messagerie & Contact" }, icon: <Mail className="w-4 h-4 text-sky-400" /> },
  ];

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed bottom-16 left-4 sm:left-6 z-50 w-80 sm:w-96 rounded-2xl glass-dock border border-white/20 shadow-2xl p-5 text-white animate-in slide-in-from-bottom-5 duration-150 backdrop-blur-3xl"
    >
      {/* Header Profile */}
      <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-mono font-bold text-white shadow-lg">
          M.
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-sm tracking-tight truncate">{portfolioData.profile.name}</h3>
          <p className="text-xs font-mono text-cyan-400 truncate">{portfolioData.profile.role[lang]}</p>
        </div>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
      </div>

      {/* Pinned Applications */}
      <div className="py-4 space-y-1">
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider px-2 block mb-1">
          {lang === "fr" ? "Applications Système" : "Pinned Applications"}
        </span>

        {appList.map((app) => (
          <button
            key={app.id}
            onClick={() => {
              onOpenApp(app.id);
              onClose();
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-mono text-neutral-200 hover:text-white hover:bg-white/10 transition-all text-left"
          >
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
              {app.icon}
            </div>
            <span>{app.label[lang]}</span>
          </button>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
        <a
          href={portfolioData.profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>github.com/mehddium</span>
        </a>

        <button
          onClick={() => window.location.reload()}
          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          title={lang === "fr" ? "Redémarrer MehdiOS" : "Reboot MehdiOS"}
        >
          <RotateCw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
