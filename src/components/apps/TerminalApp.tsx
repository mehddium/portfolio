"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Terminal as TerminalIcon, Send } from "lucide-react";

interface TerminalLine {
  type: "input" | "output" | "system" | "error";
  text: string | React.ReactNode;
}

export default function TerminalApp() {
  const { lang } = useLanguage();
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: "system",
      text: "MehdiOS Interactive Shell [Version 1.0.0-x86_64-posix]",
    },
    {
      type: "system",
      text: "Type 'help' to list available commands or 'neofetch' for system specs.",
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory: TerminalLine[] = [
      ...history,
      { type: "input", text: `mehdi@system:~$ ${inputVal}` },
    ];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1 text-neutral-300">
              <p className="text-cyan-400 font-bold">AVAILABLE COMMANDS:</p>
              <p><span className="text-emerald-400 font-bold">help</span> - Display this help message</p>
              <p><span className="text-emerald-400 font-bold">about</span> - Print developer biography & philosophy</p>
              <p><span className="text-emerald-400 font-bold">projects</span> - List all repositories & technical deliverables</p>
              <p><span className="text-emerald-400 font-bold">c-specs</span> - View low-level C & networking engineering focus</p>
              <p><span className="text-emerald-400 font-bold">skills</span> - Dump fullstack & systems technical matrix</p>
              <p><span className="text-emerald-400 font-bold">neofetch</span> - Display developer specs & system info</p>
              <p><span className="text-emerald-400 font-bold">contact</span> - Show email, GitHub, and communication channels</p>
              <p><span className="text-emerald-400 font-bold">clear</span> - Clear terminal buffer</p>
            </div>
          ),
        });
        break;

      case "about":
        newHistory.push({
          type: "output",
          text: portfolioData.profile.bio[lang].description,
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-2">
              {portfolioData.projects.map((p) => (
                <div key={p.id} className="border-l-2 border-cyan-500/40 pl-2">
                  <p className="text-white font-bold">{p.title} ({p.year})</p>
                  <p className="text-neutral-400 text-xs">{p.translations[lang].tagline}</p>
                  <p className="text-cyan-300 text-xs">Stack: {p.technologies.join(", ")}</p>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case "c-specs":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1 text-emerald-300">
              <p className="text-white font-bold">=== C & SYSTEMS PROGRAMMING PROFILE ===</p>
              <p>• POSIX Socket API: AF_INET, SOCK_STREAM, multiplexing with select/poll/epoll</p>
              <p>• Multi-threading: pthreads, mutex synchronization, race-condition prevention</p>
              <p>• Memory profiling: Valgrind (Memcheck, Massif), GDB debugging, custom heap allocators</p>
              <p>• Linux internals: Processes lifecycle (fork/exec/waitpid), signal handling, pipes</p>
            </div>
          ),
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: (
            <div className="grid grid-cols-2 gap-2 text-xs">
              {portfolioData.skillGroups.map((g) => (
                <div key={g.nameKey} className="p-2 rounded bg-white/5">
                  <p className="text-cyan-400 font-bold uppercase">{g.translations[lang]}</p>
                  <p className="text-neutral-300">{g.skills.map((s) => s.name).join(", ")}</p>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case "neofetch":
        newHistory.push({
          type: "output",
          text: (
            <div className="flex gap-4 items-center">
              <div className="font-mono text-cyan-400 text-xs leading-none">
                <pre>{`
  /\_/\  
 ( o.o ) 
  > ^ <  
[MehdiOS]
`}</pre>
              </div>
              <div className="text-xs space-y-0.5">
                <p><span className="text-cyan-400 font-bold">USER:</span> mehdi@portfolio</p>
                <p><span className="text-cyan-400 font-bold">OS:</span> MehdiOS Glassmorphism Desktop</p>
                <p><span className="text-cyan-400 font-bold">KERNEL:</span> Next.js 15 / Bun 1.4 / React 19</p>
                <p><span className="text-cyan-400 font-bold">SPECIALTIES:</span> Low-Level C, POSIX Sockets, Web Architecture</p>
                <p><span className="text-cyan-400 font-bold">STATUS:</span> Ready for Internship / Collaboration</p>
              </div>
            </div>
          ),
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1 text-xs">
              <p>Email: 314468480+mehddium@users.noreply.github.com</p>
              <p>GitHub: https://github.com/mehddium</p>
            </div>
          ),
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "ls":
        newHistory.push({
          type: "output",
          text: "AboutMe/  Projects/  Timeline/  Skills/  Resume.pdf  ContactMail/",
        });
        break;

      case "whoami":
        newHistory.push({
          type: "output",
          text: "mehdi — Fullstack & Systems Engineer",
        });
        break;

      default:
        newHistory.push({
          type: "error",
          text: `bash: command not found: ${cmd}. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="h-full min-h-[420px] font-mono text-xs text-neutral-200 flex flex-col justify-between"
    >
      {/* Terminal Output Stream */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-2 pr-2">
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed">
            {item.type === "input" && (
              <span className="text-emerald-400 font-semibold">{item.text}</span>
            )}
            {item.type === "system" && (
              <span className="text-neutral-400">{item.text}</span>
            )}
            {item.type === "output" && (
              <div className="mt-0.5 text-neutral-200">{item.text}</div>
            )}
            {item.type === "error" && (
              <span className="text-rose-400">{item.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Terminal Input Prompt */}
      <form onSubmit={handleCommand} className="mt-4 flex items-center gap-2 pt-2 border-t border-white/10">
        <span className="text-emerald-400 font-bold shrink-0">mehdi@system:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help'..."
          className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs caret-cyan-400"
          autoFocus
        />
        <button type="submit" className="text-neutral-500 hover:text-cyan-400">
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
