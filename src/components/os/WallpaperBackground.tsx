"use client";

import React from "react";

export type WallpaperId = "aurora" | "cyber" | "cosmic" | "obsidian";

interface WallpaperBackgroundProps {
  wallpaper: WallpaperId;
}

export default function WallpaperBackground({ wallpaper }: WallpaperBackgroundProps) {
  const getGradients = () => {
    switch (wallpaper) {
      case "cyber":
        return {
          bg: "bg-[#0B0813]",
          blob1: "bg-fuchsia-600/25",
          blob2: "bg-cyan-500/20",
          blob3: "bg-indigo-600/25",
        };
      case "cosmic":
        return {
          bg: "bg-[#060D1A]",
          blob1: "bg-blue-600/25",
          blob2: "bg-emerald-500/15",
          blob3: "bg-purple-600/25",
        };
      case "obsidian":
        return {
          bg: "bg-[#08080A]",
          blob1: "bg-zinc-700/20",
          blob2: "bg-zinc-800/30",
          blob3: "bg-neutral-600/15",
        };
      default: // aurora
        return {
          bg: "bg-[#080C14]",
          blob1: "bg-emerald-500/20",
          blob2: "bg-cyan-600/25",
          blob3: "bg-indigo-700/30",
        };
    }
  };

  const current = getGradients();

  return (
    <div className={`fixed inset-0 -z-10 transition-colors duration-700 ${current.bg} overflow-hidden`}>
      {/* Ambient Mesh Glows */}
      <div
        className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none animate-pulse duration-[8000ms] ${current.blob1}`}
      />
      <div
        className={`absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none animate-pulse duration-[10000ms] ${current.blob2}`}
      />
      <div
        className={`absolute -bottom-40 left-1/4 w-[700px] h-[700px] rounded-full blur-[150px] pointer-events-none animate-pulse duration-[9000ms] ${current.blob3}`}
      />

      {/* Glass Grid Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
