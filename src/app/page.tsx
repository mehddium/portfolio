"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AppId } from "@/types/os";
import WallpaperBackground, { WallpaperId } from "@/components/os/WallpaperBackground";
import DesktopIcons from "@/components/os/DesktopIcons";
import Taskbar from "@/components/os/Taskbar";
import StartMenu from "@/components/os/StartMenu";
import WindowFrame from "@/components/os/WindowFrame";

import AboutApp from "@/components/apps/AboutApp";
import ProjectsApp from "@/components/apps/ProjectsApp";
import TerminalApp from "@/components/apps/TerminalApp";
import ExperienceApp from "@/components/apps/ExperienceApp";
import SkillsApp from "@/components/apps/SkillsApp";
import ResumeApp from "@/components/apps/ResumeApp";
import ContactApp from "@/components/apps/ContactApp";

import {
  User,
  FolderGit2,
  Terminal,
  History,
  Cpu,
  FileText,
  Mail,
} from "lucide-react";

export default function Home() {
  const { lang } = useLanguage();

  // Wallpaper State
  const [wallpaper, setWallpaper] = useState<WallpaperId>("aurora");

  // Window Manager States
  const [openApps, setOpenApps] = useState<Record<AppId, boolean>>({
    about: true,
    projects: false,
    terminal: false,
    experience: false,
    skills: false,
    resume: false,
    contact: false,
  });

  const [minimizedApps, setMinimizedApps] = useState<Record<AppId, boolean>>({
    about: false,
    projects: false,
    terminal: false,
    experience: false,
    skills: false,
    resume: false,
    contact: false,
  });

  const [maximizedApps, setMaximizedApps] = useState<Record<AppId, boolean>>({
    about: false,
    projects: false,
    terminal: false,
    experience: false,
    skills: false,
    resume: false,
    contact: false,
  });

  const [zIndexes, setZIndexes] = useState<Record<AppId, number>>({
    about: 30,
    projects: 20,
    terminal: 20,
    experience: 20,
    skills: 20,
    resume: 20,
    contact: 20,
  });

  const [activeAppId, setActiveAppId] = useState<AppId | null>("about");
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  // Focus Window
  const focusApp = (id: AppId) => {
    setActiveAppId(id);
    setZIndexes((prev) => {
      const maxZ = Math.max(...Object.values(prev));
      return { ...prev, [id]: maxZ + 1 };
    });
  };

  // Open App
  const openApp = (id: AppId) => {
    setOpenApps((prev) => ({ ...prev, [id]: true }));
    setMinimizedApps((prev) => ({ ...prev, [id]: false }));
    focusApp(id);
    setStartMenuOpen(false);
  };

  // Close App
  const closeApp = (id: AppId) => {
    setOpenApps((prev) => ({ ...prev, [id]: false }));
    if (activeAppId === id) {
      const remainingOpen = (Object.keys(openApps) as AppId[]).filter(
        (appKey) => appKey !== id && openApps[appKey] && !minimizedApps[appKey]
      );
      setActiveAppId(remainingOpen.length > 0 ? remainingOpen[0] : null);
    }
  };

  // Minimize App
  const minimizeApp = (id: AppId) => {
    setMinimizedApps((prev) => ({ ...prev, [id]: true }));
    if (activeAppId === id) {
      setActiveAppId(null);
    }
  };

  // Maximize / Restore Toggle
  const toggleMaximize = (id: AppId) => {
    setMaximizedApps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Taskbar Icon Click (Toggle between Focus, Minimize, and Open)
  const handleTaskbarClick = (id: AppId) => {
    if (!openApps[id]) {
      openApp(id);
    } else if (minimizedApps[id]) {
      setMinimizedApps((prev) => ({ ...prev, [id]: false }));
      focusApp(id);
    } else if (activeAppId === id) {
      minimizeApp(id);
    } else {
      focusApp(id);
    }
  };

  // Cycle wallpaper
  const cycleWallpaper = () => {
    const list: WallpaperId[] = ["aurora", "cyber", "cosmic", "obsidian"];
    const currentIdx = list.indexOf(wallpaper);
    const next = list[(currentIdx + 1) % list.length];
    setWallpaper(next);
  };

  return (
    <div
      onClick={() => setStartMenuOpen(false)}
      className="relative w-screen h-screen overflow-hidden select-none font-sans"
    >
      {/* Dynamic Glassmorphism Background */}
      <WallpaperBackground wallpaper={wallpaper} />

      {/* Desktop Shortcuts */}
      <DesktopIcons onOpenApp={openApp} activeAppId={activeAppId} />

      {/* App Windows */}

      {/* 1. About Me Window */}
      <WindowFrame
        id="about"
        title={lang === "fr" ? "A_Propos // Mehdi.sys" : "About_Me // Mehdi.sys"}
        icon={<User className="w-4 h-4 text-cyan-400" />}
        isOpen={openApps.about}
        isMinimized={minimizedApps.about}
        isMaximized={maximizedApps.about}
        zIndex={zIndexes.about}
        onFocus={() => focusApp("about")}
        onClose={() => closeApp("about")}
        onMinimize={() => minimizeApp("about")}
        onToggleMaximize={() => toggleMaximize("about")}
      >
        <AboutApp
          onOpenProjects={() => openApp("projects")}
          onOpenTerminal={() => openApp("terminal")}
          onOpenResume={() => openApp("resume")}
          onOpenContact={() => openApp("contact")}
        />
      </WindowFrame>

      {/* 2. Projects Explorer Window */}
      <WindowFrame
        id="projects"
        title={lang === "fr" ? "Explorateur de Projets" : "Projects Explorer"}
        icon={<FolderGit2 className="w-4 h-4 text-amber-400" />}
        isOpen={openApps.projects}
        isMinimized={minimizedApps.projects}
        isMaximized={maximizedApps.projects}
        zIndex={zIndexes.projects}
        maxWidthClass="max-w-5xl"
        onFocus={() => focusApp("projects")}
        onClose={() => closeApp("projects")}
        onMinimize={() => minimizeApp("projects")}
        onToggleMaximize={() => toggleMaximize("projects")}
      >
        <ProjectsApp />
      </WindowFrame>

      {/* 3. Terminal Window */}
      <WindowFrame
        id="terminal"
        title="Terminal.sh (POSIX Shell)"
        icon={<Terminal className="w-4 h-4 text-emerald-400" />}
        isOpen={openApps.terminal}
        isMinimized={minimizedApps.terminal}
        isMaximized={maximizedApps.terminal}
        zIndex={zIndexes.terminal}
        onFocus={() => focusApp("terminal")}
        onClose={() => closeApp("terminal")}
        onMinimize={() => minimizeApp("terminal")}
        onToggleMaximize={() => toggleMaximize("terminal")}
      >
        <TerminalApp />
      </WindowFrame>

      {/* 4. Experience Timeline Window */}
      <WindowFrame
        id="experience"
        title={lang === "fr" ? "Journal de Parcours.log" : "Experience_Timeline.log"}
        icon={<History className="w-4 h-4 text-indigo-400" />}
        isOpen={openApps.experience}
        isMinimized={minimizedApps.experience}
        isMaximized={maximizedApps.experience}
        zIndex={zIndexes.experience}
        onFocus={() => focusApp("experience")}
        onClose={() => closeApp("experience")}
        onMinimize={() => minimizeApp("experience")}
        onToggleMaximize={() => toggleMaximize("experience")}
      >
        <ExperienceApp />
      </WindowFrame>

      {/* 5. Skills Task Manager Window */}
      <WindowFrame
        id="skills"
        title={lang === "fr" ? "Gestionnaire des Ressources (Stack)" : "Task Manager (Skills & Resources)"}
        icon={<Cpu className="w-4 h-4 text-purple-400" />}
        isOpen={openApps.skills}
        isMinimized={minimizedApps.skills}
        isMaximized={maximizedApps.skills}
        zIndex={zIndexes.skills}
        onFocus={() => focusApp("skills")}
        onClose={() => closeApp("skills")}
        onMinimize={() => minimizeApp("skills")}
        onToggleMaximize={() => toggleMaximize("skills")}
      >
        <SkillsApp />
      </WindowFrame>

      {/* 6. Resume PDF Window */}
      <WindowFrame
        id="resume"
        title={lang === "fr" ? "Curriculum_Vitae_Mehdi.pdf" : "Curriculum_Vitae_Mehdi.pdf"}
        icon={<FileText className="w-4 h-4 text-rose-400" />}
        isOpen={openApps.resume}
        isMinimized={minimizedApps.resume}
        isMaximized={maximizedApps.resume}
        zIndex={zIndexes.resume}
        onFocus={() => focusApp("resume")}
        onClose={() => closeApp("resume")}
        onMinimize={() => minimizeApp("resume")}
        onToggleMaximize={() => toggleMaximize("resume")}
      >
        <ResumeApp />
      </WindowFrame>

      {/* 7. Contact Mail Window */}
      <WindowFrame
        id="contact"
        title={lang === "fr" ? "Messagerie & Contact" : "Mail Client // Contact"}
        icon={<Mail className="w-4 h-4 text-sky-400" />}
        isOpen={openApps.contact}
        isMinimized={minimizedApps.contact}
        isMaximized={maximizedApps.contact}
        zIndex={zIndexes.contact}
        maxWidthClass="max-w-2xl"
        onFocus={() => focusApp("contact")}
        onClose={() => closeApp("contact")}
        onMinimize={() => minimizeApp("contact")}
        onToggleMaximize={() => toggleMaximize("contact")}
      >
        <ContactApp />
      </WindowFrame>

      {/* Start Menu Popup */}
      <StartMenu
        isOpen={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        onOpenApp={openApp}
      />

      {/* Bottom Taskbar Dock */}
      <Taskbar
        onToggleStartMenu={() => setStartMenuOpen(!startMenuOpen)}
        startMenuOpen={startMenuOpen}
        openApps={openApps}
        minimizedApps={minimizedApps}
        activeAppId={activeAppId}
        onAppClick={handleTaskbarClick}
        currentWallpaper={wallpaper}
        onCycleWallpaper={cycleWallpaper}
      />
    </div>
  );
}
