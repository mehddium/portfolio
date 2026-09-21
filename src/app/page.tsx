"use client";

import React, { useState } from "react";
import QuickHudNav from "@/components/QuickHudNav";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import JourneySection from "@/components/JourneySection";
import RecommendationsSection from "@/components/RecommendationsSection";
import ContactSection from "@/components/ContactSection";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-neutral-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Floating HUD Navigation */}
      <QuickHudNav onOpenResume={() => setResumeOpen(true)} />

      {/* Main Fluid Content */}
      <main className="w-full">
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <RecommendationsSection />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Curriculum Vitae Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
