"use client";

import React, { useState } from "react";
import NavigationRail, { TabId } from "@/components/NavigationRail";
import OverviewSection from "@/components/OverviewSection";
import ProjectInspector from "@/components/ProjectInspector";
import SkillsDashboard from "@/components/SkillsDashboard";
import TimelineSection from "@/components/TimelineSection";
import ContactCard from "@/components/ContactCard";
import ResumeDialog from "@/components/ResumeDialog";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--m3-surface)] text-[var(--m3-on-surface)] flex flex-col lg:flex-row transition-colors duration-200">
      {/* Left Navigation Rail (Desktop) & Bottom Navigation Bar (Mobile) */}
      <NavigationRail
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Workspace Canvas */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-10 pb-24 lg:pb-12 max-w-6xl overflow-y-auto">
        {activeTab === "overview" && (
          <OverviewSection
            onNavigateToProjects={() => setActiveTab("projects")}
            onNavigateToSystems={() => setActiveTab("systems")}
            onNavigateToTimeline={() => setActiveTab("timeline")}
            onNavigateToContact={() => setActiveTab("contact")}
            onOpenResume={() => setResumeOpen(true)}
          />
        )}

        {activeTab === "projects" && <ProjectInspector />}

        {activeTab === "systems" && <SkillsDashboard />}

        {activeTab === "timeline" && <TimelineSection />}

        {activeTab === "contact" && <ContactCard />}

        {/* Global Footer */}
        <footer className="mt-16 pt-8 border-t border-[var(--m3-outline-variant)]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[var(--m3-on-surface-variant)]">
          <span>Mehdi © {new Date().getFullYear()} — Material Design 3</span>
          <span>Next.js 15 · Bun · Google Sans Flex · GitHub Pages</span>
        </footer>
      </main>

      {/* M3 Resume Dialog */}
      <ResumeDialog
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
