"use client";

import React, { useState } from "react";
import M3Header from "@/components/m3/M3Header";
import M3Hero from "@/components/m3/M3Hero";
import M3Projects from "@/components/m3/M3Projects";
import M3Timeline from "@/components/m3/M3Timeline";
import M3Skills from "@/components/m3/M3Skills";
import M3Contact from "@/components/m3/M3Contact";
import M3ResumeDialog from "@/components/m3/M3ResumeDialog";
import M3Footer from "@/components/m3/M3Footer";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--m3-surface)] text-[var(--m3-on-surface)] selection:bg-[var(--m3-primary-container)] selection:text-[var(--m3-on-primary-container)] transition-colors duration-200">
      {/* M3 Top App Bar */}
      <M3Header onOpenResume={() => setResumeOpen(true)} />

      {/* M3 Main Content Canvas */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 space-y-4">
        <M3Hero onOpenResume={() => setResumeOpen(true)} />
        <M3Projects />
        <M3Timeline />
        <M3Skills />
        <M3Contact />
        <M3Footer />
      </main>

      {/* M3 Full Dialog for CV */}
      <M3ResumeDialog
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
