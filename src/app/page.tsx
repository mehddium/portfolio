"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Trajectory from "@/components/Trajectory";
import Contact from "@/components/Contact";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Light Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Single-Column Vertical Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-8">
        <Hero />
        <Projects />
        <Capabilities />
        <Trajectory />
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Curriculum Vitae Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
