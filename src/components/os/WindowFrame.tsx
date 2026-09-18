"use client";

import React from "react";
import { X, Minus, Square, Maximize2, Minimize2 } from "lucide-react";

interface WindowFrameProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onToggleMaximize: () => void;
  children: React.ReactNode;
  maxWidthClass?: string;
  defaultHeightClass?: string;
}

export default function WindowFrame({
  id,
  title,
  icon,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  children,
  maxWidthClass = "max-w-4xl",
  defaultHeightClass = "h-[75vh]",
}: WindowFrameProps) {
  if (!isOpen || isMinimized) return null;

  return (
    <div
      onClick={onFocus}
      style={{ zIndex }}
      className={`fixed transition-all duration-200 flex flex-col ${
        isMaximized
          ? "inset-2 md:inset-4 bottom-20 md:bottom-20 z-40 rounded-2xl"
          : `top-12 md:top-16 left-1/2 -translate-x-1/2 w-[95vw] ${maxWidthClass} ${defaultHeightClass} max-h-[82vh] rounded-2xl`
      } glass-panel shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-white/20 overflow-hidden animate-in zoom-in-95 duration-150`}
    >
      {/* Window Title Bar */}
      <div
        onDoubleClick={onToggleMaximize}
        className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/10 select-none cursor-grab active:cursor-grabbing backdrop-blur-md"
      >
        {/* Left App Icon & Title */}
        <div className="flex items-center gap-2.5">
          <div className="p-1 rounded-md bg-white/10 text-white border border-white/10">
            {icon}
          </div>
          <span className="font-mono text-xs font-semibold text-white/90 tracking-wide">
            {title}
          </span>
        </div>

        {/* Right Window Controls */}
        <div className="flex items-center gap-2">
          {/* Minimize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-3.5 h-3.5 rounded-full bg-amber-500/80 hover:bg-amber-400 border border-amber-300/40 flex items-center justify-center text-black/80 transition-colors group"
            title="Minimize"
          >
            <Minus className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100" />
          </button>

          {/* Maximize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleMaximize();
            }}
            className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 hover:bg-emerald-400 border border-emerald-300/40 flex items-center justify-center text-black/80 transition-colors group"
            title="Maximize"
          >
            {isMaximized ? (
              <Minimize2 className="w-2 h-2 opacity-0 group-hover:opacity-100" />
            ) : (
              <Maximize2 className="w-2 h-2 opacity-0 group-hover:opacity-100" />
            )}
          </button>

          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-3.5 h-3.5 rounded-full bg-rose-500/80 hover:bg-rose-400 border border-rose-300/40 flex items-center justify-center text-black/80 transition-colors group"
            title="Close"
          >
            <X className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>

      {/* Window Body */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-5 sm:p-7 text-neutral-100">
        {children}
      </div>
    </div>
  );
}
