"use client";

import React, { useState } from "react";
import ClayHeader from "@/components/clay/ClayHeader";
import ClayHero from "@/components/clay/ClayHero";
import ClayProjects from "@/components/clay/ClayProjects";
import ClayTimeline from "@/components/clay/ClayTimeline";
import ClaySkills from "@/components/clay/ClaySkills";
import ClayContact from "@/components/clay/ClayContact";
import ClayResumeModal from "@/components/clay/ClayResumeModal";
import ClayFooter from "@/components/clay/ClayFooter";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#EAF0F8] dark:bg-[#0E131F] text-neutral-900 dark:text-neutral-100 selection:bg-indigo-500 selection:text-white relative transition-colors duration-300">
      {/* Floating Pill Header */}
      <ClayHeader onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <ClayHero onOpenResume={() => setResumeOpen(true)} />
        <ClayProjects />
        <ClayTimeline />
        <ClaySkills />
        <ClayContact />
        <ClayFooter />
      </main>

      {/* Clay Resume Modal */}
      <ClayResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
