"use client";

import React, { useState } from "react";
import LedgerHeader from "@/components/LedgerHeader";
import LedgerHero from "@/components/LedgerHero";
import LedgerProjects from "@/components/LedgerProjects";
import LedgerMatrix from "@/components/LedgerMatrix";
import LedgerTimeline from "@/components/LedgerTimeline";
import LedgerEndorsements from "@/components/LedgerEndorsements";
import LedgerContact from "@/components/LedgerContact";
import LedgerResumeModal from "@/components/LedgerResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0e1017] bg-swiss-grid text-[#f4f5f8] font-sans selection:bg-[#3b82f6]/20 selection:text-white">
      {/* Swiss Architectural Masthead */}
      <LedgerHeader onOpenResume={() => setResumeOpen(true)} />

      {/* Main Structural Ledger Canvas */}
      <main className="w-full">
        <LedgerHero onOpenResume={() => setResumeOpen(true)} />
        <LedgerProjects />
        <LedgerMatrix />
        <LedgerTimeline />
        <LedgerEndorsements />
        <LedgerContact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Curriculum Vitae Printable Dossier */}
      <LedgerResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
