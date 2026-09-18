"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import SkillsSection from "@/components/SkillsSection";
import GithubStatsSection from "@/components/GithubStatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-800 selection:text-white relative">
      {/* Background Grid Pattern (Swiss Subtle Rhythm) */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* Header Navigation */}
      <Header onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <ProjectsSection />
        <TimelineSection />
        <SkillsSection />
        <GithubStatsSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Resume / CV Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
