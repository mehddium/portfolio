"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AppId } from "@/types/os";
import { WallpaperId } from "./WallpaperBackground";
import {
  User,
  FolderGit2,
  Terminal,
  History,
  Cpu,
  FileText,
  Mail,
  Globe,
  Sparkles,
  Layers,
} from "lucide-react";

interface TaskbarProps {
  onToggleStartMenu: () => void;
  startMenuOpen: boolean;
  openApps: Record<AppId, boolean>;
  minimizedApps: Record<AppId, boolean>;
  activeAppId: AppId | null;
  onAppClick: (id: AppId) => void;
  currentWallpaper: WallpaperId;
  onCycleWallpaper: () => void;
}

export default function Taskbar({
  onToggleStartMenu,
  startMenuOpen,
  openApps,
  minimizedApps,
  activeAppId,
  onAppClick,
  currentWallpaper,
  onCycleWallpaper,
}: TaskbarProps) {
  const { lang, toggleLang } = useLanguage();
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
      setDateStr(
        now.toLocaleDateString([], { month: "short", day: "numeric" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const apps = [
    { id: "about" as AppId, title: "About", icon: <User className="w-5 h-5 text-cyan-400" /> },
    { id: "projects" as AppId, title: "Projects", icon: <FolderGit2 className="w-5 h-5 text-amber-400" /> },
    { id: "terminal" as AppId, title: "Terminal", icon: <Terminal className="w-5 h-5 text-emerald-400" /> },
    { id: "skills" as AppId, title: "Skills", icon: <Cpu className="w-5 h-5 text-purple-400" /> },
    { id: "experience" as AppId, title: "Timeline", icon: <History className="w-5 h-5 text-indigo-400" /> },
    { id: "resume" as AppId, title: "CV", icon: <FileText className="w-5 h-5 text-rose-400" /> },
    { id: "contact" as AppId, title: "Contact", icon: <Mail className="w-5 h-5 text-sky-400" /> },
  ];

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[96vw] max-w-4xl h-14 rounded-2xl glass-dock border border-white/20 shadow-2xl flex items-center justify-between px-3 sm:px-4 text-white">
      {/* Start Button */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          onClick={onToggleStartMenu}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all font-mono text-xs font-bold ${
            startMenuOpen
              ? "bg-cyan-500 text-neutral-950 shadow-lg shadow-cyan-500/30"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
          title="Start Menu"
        >
          <div className="w-4 h-4 rounded bg-gradient-to-tr from-cyan-400 to-indigo-400 flex items-center justify-center text-[10px] text-neutral-950 font-black">
            M
          </div>
          <span className="hidden sm:inline">MehdiOS</span>
        </button>
      </div>

      {/* Center Running/Pinned App Icons */}
      <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
        {apps.map((app) => {
          const isOpen = openApps[app.id];
          const isMinimized = minimizedApps[app.id];
          const isActive = activeAppId === app.id && isOpen && !isMinimized;

          return (
            <button
              key={app.id}
              onClick={() => onAppClick(app.id)}
              className={`relative p-2 rounded-xl transition-all ${
                isActive
                  ? "bg-white/20 shadow-inner scale-105"
                  : isOpen
                  ? "bg-white/10 hover:bg-white/15"
                  : "hover:bg-white/5 opacity-80 hover:opacity-100"
              }`}
              title={app.title}
            >
              {app.icon}

              {/* Running indicator dot */}
              {isOpen && (
                <span
                  className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-cyan-400 ring-2 ring-cyan-400/30" : "bg-white/60"
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* System Tray (Lang, Wallpaper, Clock) */}
      <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-xs">
        {/* Wallpaper cycle */}
        <button
          onClick={onCycleWallpaper}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-all hidden sm:block"
          title={`Wallpaper: ${currentWallpaper}`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </button>

        {/* Language switch */}
        <button
          onClick={toggleLang}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-cyan-300 transition-all font-bold"
          title="Toggle Language"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{lang === "fr" ? "FR" : "EN"}</span>
        </button>

        {/* Realtime clock */}
        <div className="hidden sm:flex flex-col items-end px-2 py-0.5 leading-tight text-neutral-200">
          <span className="font-bold text-[11px]">{timeStr}</span>
          <span className="text-[9px] text-neutral-400">{dateStr}</span>
        </div>
      </div>
    </div>
  );
}
