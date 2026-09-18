"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import LinearHUD from "@/components/LinearHUD";
import LinearScrubber from "@/components/LinearScrubber";
import BayIdentity from "@/components/bays/BayIdentity";
import BaySystems from "@/components/bays/BaySystems";
import BayWeb from "@/components/bays/BayWeb";
import BayMatrixTrajectory from "@/components/bays/BayMatrixTrajectory";
import BayConnect from "@/components/bays/BayConnect";
import ResumeModal from "@/components/ResumeModal";

const TOTAL_BAYS = 5;

export default function Home() {
  const [currentBay, setCurrentBay] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Jump to a specific bay index
  const jumpToBay = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_BAYS) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const bays = canvas.querySelectorAll<HTMLElement>(".horizontal-bay");
    if (bays[index]) {
      bays[index].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  }, []);

  // Update active bay and scroll percentage on scroll
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleScroll = () => {
      const scrollLeft = canvas.scrollLeft;
      const maxScroll = canvas.scrollWidth - canvas.clientWidth;
      const percent = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollPercentage(Math.min(100, Math.max(0, percent)));

      const bays = canvas.querySelectorAll<HTMLElement>(".horizontal-bay");
      const centerPoint = scrollLeft + canvas.clientWidth / 3;

      bays.forEach((bay, idx) => {
        const left = bay.offsetLeft;
        const right = left + bay.offsetWidth;
        if (centerPoint >= left && centerPoint < right) {
          setCurrentBay(idx);
        }
      });
    };

    canvas.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => canvas.removeEventListener("scroll", handleScroll);
  }, []);

  // Wheel listener: Converts vertical wheel delta into horizontal scroll seamlessly
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleWheel = (e: WheelEvent) => {
      // If user is inside a scrollable modal, do not intercept
      if (resumeOpen) return;

      // If already scrolling horizontally with a trackpad, let browser handle it
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      e.preventDefault();
      canvas.scrollLeft += e.deltaY * 1.2;
    };

    canvas.addEventListener("wheel", handleWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", handleWheel);
  }, [resumeOpen]);

  // Keyboard navigation for presentation/linear exploration
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (resumeOpen) return;
      if (["input", "textarea"].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;

      if (e.key === "ArrowRight" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)) {
        e.preventDefault();
        jumpToBay(currentBay + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp" || (e.key === " " && e.shiftKey)) {
        e.preventDefault();
        jumpToBay(currentBay - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        jumpToBay(0);
      } else if (e.key === "End") {
        e.preventDefault();
        jumpToBay(TOTAL_BAYS - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentBay, jumpToBay, resumeOpen]);

  return (
    <div className="relative w-screen h-screen bg-[#07080b] text-neutral-100 overflow-hidden font-sans bg-grid-blueprint">
      {/* Top HUD: Brand, Coordinates, Language, CV, GitHub */}
      <LinearHUD
        currentBay={currentBay}
        totalBays={TOTAL_BAYS}
        scrollPercentage={scrollPercentage}
        onJumpToBay={jumpToBay}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Horizontal Canvas */}
      <main
        ref={canvasRef}
        tabIndex={0}
        className="horizontal-canvas w-full h-full focus:outline-none"
      >
        <BayIdentity onExplore={() => jumpToBay(1)} />
        <BaySystems />
        <BayWeb />
        <BayMatrixTrajectory />
        <BayConnect onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Bottom Linear Scrubber & Track Ruler */}
      <LinearScrubber
        currentBay={currentBay}
        totalBays={TOTAL_BAYS}
        scrollPercentage={scrollPercentage}
        onJumpToBay={jumpToBay}
      />

      {/* Printable Specification / CV Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
