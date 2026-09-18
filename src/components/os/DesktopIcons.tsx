"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AppId } from "@/types/os";
import {
  User,
  FolderGit2,
  Terminal,
  History,
  Cpu,
  FileText,
  Mail,
} from "lucide-react";

interface DesktopIconsProps {
  onOpenApp: (id: AppId) => void;
  activeAppId: AppId | null;
}

export default function DesktopIcons({ onOpenApp, activeAppId }: DesktopIconsProps) {
  const { lang } = useLanguage();

  const desktopShortcuts = [
    {
      id: "about" as AppId,
      label: { en: "About_Me", fr: "A_Propos" },
      icon: <User className="w-6 h-6 text-cyan-400" />,
      glow: "hover:shadow-cyan-500/30",
    },
    {
      id: "projects" as AppId,
      label: { en: "Projects", fr: "Projets" },
      icon: <FolderGit2 className="w-6 h-6 text-amber-400" />,
      glow: "hover:shadow-amber-500/30",
    },
    {
      id: "terminal" as AppId,
      label: { en: "Terminal.sh", fr: "Terminal.sh" },
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      glow: "hover:shadow-emerald-500/30",
    },
    {
      id: "skills" as AppId,
      label: { en: "Task_Manager", fr: "Gestionnaire" },
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      glow: "hover:shadow-purple-500/30",
    },
    {
      id: "experience" as AppId,
      label: { en: "Timeline.log", fr: "Parcours.log" },
      icon: <History className="w-6 h-6 text-indigo-400" />,
      glow: "hover:shadow-indigo-500/30",
    },
    {
      id: "resume" as AppId,
      label: { en: "Resume.pdf", fr: "CV_Mehdi.pdf" },
      icon: <FileText className="w-6 h-6 text-rose-400" />,
      glow: "hover:shadow-rose-500/30",
    },
    {
      id: "contact" as AppId,
      label: { en: "Contact.app", fr: "Contact.app" },
      icon: <Mail className="w-6 h-6 text-sky-400" />,
      glow: "hover:shadow-sky-500/30",
    },
  ];

  return (
    <div className="fixed top-6 left-6 z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pointer-events-auto">
      {desktopShortcuts.map((item) => (
        <button
          key={item.id}
          onClick={() => onOpenApp(item.id)}
          className={`group flex flex-col items-center justify-center p-3 rounded-2xl w-24 sm:w-28 text-center transition-all duration-150 glass-panel-light hover:bg-white/[0.12] hover:scale-105 active:scale-95 ${item.glow}`}
        >
          <div className="p-3 rounded-xl bg-white/[0.08] border border-white/10 group-hover:border-white/20 shadow-lg group-hover:shadow-xl transition-all">
            {item.icon}
          </div>
          <span className="mt-2 font-mono text-[11px] font-semibold text-white/90 drop-shadow group-hover:text-white truncate max-w-[90px]">
            {item.label[lang]}
          </span>
        </button>
      ))}
    </div>
  );
}
