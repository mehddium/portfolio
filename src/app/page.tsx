"use client";

import React, { useState, useEffect, useRef } from "react";
import CinematicNav from "@/components/CinematicNav";
import SceneIdentity from "@/components/SceneIdentity";
import SceneSystems from "@/components/SceneSystems";
import SceneWeb from "@/components/SceneWeb";
import SceneMatrix from "@/components/SceneMatrix";
import SceneTrajectory from "@/components/SceneTrajectory";
import SceneConnect from "@/components/SceneConnect";
import ResumeModal from "@/components/ResumeModal";

const TOTAL_SCENES = 6;

export default function Home() {
  const [activeScene, setActiveScene] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const jumpToScene = (index: number) => {
    if (index < 0 || index >= TOTAL_SCENES) return;
    if (!containerRef.current) return;
    const slides = containerRef.current.querySelectorAll(".cinematic-slide");
    if (slides[index]) {
      slides[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sync activeScene with scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slides = container.querySelectorAll(".cinematic-slide");
      const scrollPos = container.scrollTop + container.clientHeight / 2;

      slides.forEach((slide, idx) => {
        const el = slide as HTMLElement;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveScene(idx);
        }
      });
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation for presentation/keynote mode (ArrowUp, ArrowDown, PageUp, PageDown, Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when modal is open or when typing in an input
      if (resumeOpen) return;
      if (["input", "textarea"].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;

      if (e.key === "ArrowDown" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)) {
        e.preventDefault();
        jumpToScene(activeScene + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp" || (e.key === " " && e.shiftKey)) {
        e.preventDefault();
        jumpToScene(activeScene - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        jumpToScene(0);
      } else if (e.key === "End") {
        e.preventDefault();
        jumpToScene(TOTAL_SCENES - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeScene, resumeOpen]);

  return (
    <div className="relative w-full h-screen bg-[#07090e] text-neutral-100 overflow-hidden font-sans select-none md:select-auto">
      {/* Top HUD & Side Vertical Navigation */}
      <CinematicNav
        activeScene={activeScene}
        totalScenes={TOTAL_SCENES}
        onJumpToScene={jumpToScene}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Snap Scrolling Container */}
      <main
        ref={containerRef}
        className="cinematic-container w-full h-full overflow-y-auto focus:outline-none"
      >
        <SceneIdentity onScrollDown={() => jumpToScene(1)} />
        <SceneSystems />
        <SceneWeb />
        <SceneMatrix />
        <SceneTrajectory />
        <SceneConnect onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Curriculum Vitae Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
