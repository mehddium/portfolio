"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Copy, Check, FileText, Terminal, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"server" | "allocator" | "nextjs">("server");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippets = {
    server: {
      filename: "server_pool.c",
      tag: "POSIX / C99",
      badge: "500+ clients · Valgrind 0 leak",
      lines: [
        "// Thread pool worker dispatch loop",
        "void* worker_thread(void* arg) {",
        "    thread_pool_t* pool = (thread_pool_t*)arg;",
        "    while (1) {",
        "        pthread_mutex_lock(&pool->lock);",
        "        while (pool->queue_size == 0 && !pool->shutdown)",
        "            pthread_cond_wait(&pool->notify, &pool->lock);",
        "        if (pool->shutdown) break;",
        "        int fd = pool->queue[pool->queue_head++];",
        "        pool->queue_size--;",
        "        pthread_mutex_unlock(&pool->lock);",
        "        handle_client_session(fd); // non-blocking poll()",
        "    }",
        "    return NULL;",
        "}",
      ],
    },
    allocator: {
      filename: "allocator.c",
      tag: "Unix / Memory",
      badge: "O(1) coalescing · sys_brk",
      lines: [
        "// Constant-time boundary tag coalescing",
        "static block_t* coalesce(block_t* block) {",
        "    size_t prev_alloc = get_prev_alloc(block);",
        "    size_t next_alloc = get_next_alloc(block);",
        "    size_t size = get_size(block);",
        "",
        "    if (prev_alloc && !next_alloc) {",
        "        size += get_size(get_next_block(block));",
        "        remove_from_free_list(get_next_block(block));",
        "        set_header_footer(block, size, false);",
        "    }",
        "    insert_to_free_list(block);",
        "    return block; // 0% fragmentation overhead",
        "}",
      ],
    },
    nextjs: {
      filename: "page.tsx",
      tag: "Next.js 16 / TS",
      badge: "100% strict · FCP < 0.6s",
      lines: [
        "// React Server Component with direct Postgres pool",
        "export default async function DashboardPage() {",
        "    const session = await getAuthenticatedSession();",
        "    if (!session) redirect('/login');",
        "",
        "    const metrics = await db.query<MetricResult>(",
        "        'SELECT id, status, latency_ms FROM audits WHERE user_id = $1',",
        "        [session.userId]",
        "    );",
        "",
        "    return <MetricsVisualizer data={metrics.rows} />;",
        "}",
      ],
    },
  };

  const currentSnippet = codeSnippets[activeTab];

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Core Value Proposition & Identity */}
        <div className="lg:col-span-7 space-y-8">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#181b26] border border-[#272b3c] text-xs text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-white">{portfolioData.profile.status[lang]}</span>
            <span className="text-neutral-500">&middot;</span>
            <span className="text-neutral-400">{portfolioData.profile.location}</span>
          </div>

          {/* Heading */}
          <div className="space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
              {lang === "fr" ? (
                <>
                  Programmation système <span className="text-blue-400">Unix en C</span> et architectures <span className="text-neutral-200">web modernes</span>.
                </>
              ) : (
                <>
                  Low-level systems in <span className="text-blue-400">Unix C</span> and modern <span className="text-neutral-200">web engineering</span>.
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl">
              {lang === "fr"
                ? "Je conçois des logiciels système en C (concurrence multi-threads, sockets POSIX, gestion mémoire sans fuite) et des applications web complètes en Next.js et TypeScript strict. Rigueur d'exécution, clarté architecturale et performance mesurée."
                : "I build low-level Unix software in C (concurrency, POSIX sockets, leak-free memory management) and fullstack web platforms with Next.js and strict TypeScript. Focused on engineering rigor, clean architecture, and verified benchmarks."}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1 text-sm">
            <a
              href="#projets"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition-all shadow-sm"
            >
              <span>{lang === "fr" ? "Explorer les projets" : "Explore projects"}</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#181a25] border border-[#2c3042] text-neutral-200 hover:text-white hover:border-[#3d435c] transition-all"
            >
              <FileText className="w-4 h-4 text-neutral-400" />
              <span>{lang === "fr" ? "Consulter le CV (PDF)" : "View resume (PDF)"}</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#151722] border border-[#252838] text-xs text-neutral-300 hover:text-white hover:border-[#35394d] transition-colors"
              title="Copier l'email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">
                    {lang === "fr" ? "Email copié !" : "Email copied!"}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{portfolioData.profile.email}</span>
                </>
              )}
            </button>

            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Key Metrics Ribbon */}
          <div className="pt-8 border-t border-[#242737] grid grid-cols-2 sm:grid-cols-4 gap-6">
            {portfolioData.keyMetrics.map((km, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                  {km.value}
                </div>
                <div className="text-xs text-neutral-300 font-medium">
                  {km.label[lang]}
                </div>
                <div className="text-xs text-neutral-400">
                  {km.subtext[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Code & Architecture Inspector */}
        <div className="lg:col-span-5">
          <div className="rounded-xl bg-[#171924] border border-[#282c3e] overflow-hidden shadow-xl">
            {/* Top Bar with Window Controls and Interactive Tabs */}
            <div className="px-4 py-3 bg-[#13151f] border-b border-[#242838] flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#35394b]" />
                <span className="w-3 h-3 rounded-full bg-[#35394b]" />
                <span className="w-3 h-3 rounded-full bg-[#35394b]" />
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-1 bg-[#1a1c28] p-0.5 rounded-lg border border-[#2a2e40] text-xs">
                <button
                  onClick={() => setActiveTab("server")}
                  className={`px-2.5 py-1 rounded transition-colors font-medium ${
                    activeTab === "server"
                      ? "bg-[#25283a] text-white"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  server_pool.c
                </button>
                <button
                  onClick={() => setActiveTab("allocator")}
                  className={`px-2.5 py-1 rounded transition-colors font-medium ${
                    activeTab === "allocator"
                      ? "bg-[#25283a] text-white"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  allocator.c
                </button>
                <button
                  onClick={() => setActiveTab("nextjs")}
                  className={`px-2.5 py-1 rounded transition-colors font-medium ${
                    activeTab === "nextjs"
                      ? "bg-[#25283a] text-white"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  page.tsx
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto text-neutral-300">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#25293b] text-xs font-sans text-neutral-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span className="font-medium text-neutral-300">{currentSnippet.filename}</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#202332] text-neutral-300 border border-[#2b3042]">
                  {currentSnippet.tag}
                </span>
              </div>

              <div className="space-y-0.5 font-mono">
                {currentSnippet.lines.map((line, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-neutral-600 select-none text-right w-5 shrink-0 text-xs">
                      {idx + 1}
                    </span>
                    <span
                      className={
                        line.startsWith("//")
                          ? "text-neutral-500 italic"
                          : line.includes("pthread_") || line.includes("db.query") || line.includes("coalesce")
                          ? "text-blue-300"
                          : line.includes("return") || line.includes("while") || line.includes("if") || line.includes("export")
                          ? "text-purple-300"
                          : "text-neutral-200"
                      }
                    >
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Verification Banner */}
            <div className="px-4 py-2.5 bg-[#141621] border-t border-[#242838] flex items-center justify-between text-xs font-sans">
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentSnippet.badge}</span>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <Layers className="w-3 h-3" />
                <span>Production ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
