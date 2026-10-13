'use client';

import { useState } from "react";
import {
  Plus,
  Share2,
  CodeXml,
  Users,
  TerminalSquare,
  Radio,
  Smartphone,
  Zap,
  Copy,
  Check,
  Star,
  Play,
  Check as CheckIcon,
} from "lucide-react";

const REPO_URL = "https://github.com/chitransh-sr/paircode-editor";
const DEMO_URL = "https://paircode-editor.vercel.app";
const ACCENT = "#22C55E";

function GithubMark({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function PairMark({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M24 19 L12 32 L24 45" stroke={ACCENT} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 19 L52 32 L40 45" stroke={ACCENT} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Hiveory-style L-shaped corner brackets */
function Corners() {
  const c = "absolute w-2 h-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none";
  return (
    <>
      <span className={`${c} -top-[1px] -left-[1px] border-t-2 border-l-2`} />
      <span className={`${c} -top-[1px] -right-[1px] border-t-2 border-r-2`} />
      <span className={`${c} -bottom-[1px] -left-[1px] border-b-2 border-l-2`} />
      <span className={`${c} -bottom-[1px] -right-[1px] border-b-2 border-r-2`} />
    </>
  );
}

/** Isometric grid + hatch backdrop with top fade (hero) */
function IsoGrid() {
  return (
    <div
      className="absolute top-0 inset-x-0 w-full h-[700px] pointer-events-none select-none overflow-hidden"
      style={{
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 120px, rgba(0,0,0,0.2) 260px, rgba(0,0,0,0.06) 440px, transparent 640px)",
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 120px, rgba(0,0,0,0.2) 260px, rgba(0,0,0,0.06) 440px, transparent 640px)",
      }}
    >
      <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pc-iso" width="120" height="69.282" patternUnits="userSpaceOnUse">
            <g transform="translate(30, 17.32)">
              <polygon points="0,-17.32 30,0 0,17.32 -30,0" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
              <polygon points="-30,0 0,17.32 0,51.96 -30,34.64" fill="rgba(255,255,255,0.008)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
              <polygon points="0,17.32 30,0 30,34.64 0,51.96" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            </g>
            <g transform="translate(90, 51.96)">
              <polygon points="0,-17.32 30,0 0,17.32 -30,0" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
              <polygon points="-30,0 0,17.32 0,51.96 -30,34.64" fill="rgba(255,255,255,0.008)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
              <polygon points="0,17.32 30,0 30,34.64 0,51.96" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            </g>
          </pattern>
          <pattern id="pc-hatch" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M-1,5 L5,-1 M-1,19 L19,-1 M-1,33 L33,-1 M9,33 L33,9 M23,33 L33,23" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pc-iso)" />
        <rect width="100%" height="100%" fill="url(#pc-hatch)" opacity="0.3" />
      </svg>
    </div>
  );
}

/** The Hiveory hero line animation: twin S-curves with a flowing dash of light */
function FlowLines() {
  const d = "M 138.5 0 L 138.5 373.523 C 138.5 422.622 112.031 467.907 69.25 492 L 69.25 492 C 26.469 516.093 0 561.378 0 610.477 L 0 985.5";
  const rail = (mirror: boolean, offsets: number[]) => (
    <>
      {offsets.map((top) => (
        <div key={top} className="absolute w-[151px] h-[986px] pointer-events-none select-none overflow-visible" style={{ top }}>
          <svg className="w-full h-full overflow-visible" viewBox="0 0 151 986" fill="none" role="presentation">
            <g transform={mirror ? "translate(151, 0) scale(-1, 1)" : undefined}>
              <path d={d} fill="none" stroke="rgba(34,197,94,0.07)" strokeWidth="0.8" strokeLinecap="butt" />
              <path
                d={d}
                fill="none"
                stroke="rgba(34,197,94,0.55)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="1036.24 1036.24"
                className="animate-paircode-flow"
                style={{ filter: "drop-shadow(0 0 1.5px rgba(34,197,94,0.45))" }}
              />
            </g>
          </svg>
        </div>
      ))}
    </>
  );
  return (
    <div
      className="absolute top-0 bottom-[-300px] left-1/2 -translate-x-1/2 w-[1014px] pointer-events-none overflow-visible hidden md:block"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 4%, black 10%, black 84%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 4%, black 10%, black 84%, transparent 100%)",
      }}
    >
      <div className="absolute top-0 bottom-0 left-[4px] w-[151px]">{rail(true, [0, 56, 112])}</div>
      <div className="absolute top-0 bottom-0 left-[859px] w-[151px]">{rail(false, [0, 56, 112])}</div>
    </div>
  );
}

/** 3-way animated trajectory splitter (modes section) */
function Trajectory() {
  const paths = [
    "M 576 -1.5 C 576 56.1, 181.33333333333334 68.9, 181.33333333333334 126.5",
    "M 576 -1.5 L 576 126.5",
    "M 576 -1.5 C 576 56.1, 970.6666666666666 68.9, 970.6666666666666 126.5",
  ];
  return (
    <div className="relative w-full h-[100px] sm:h-[115px] md:h-[125px] hidden md:block overflow-visible select-none pointer-events-none">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 1152 125" fill="none">
        <g stroke="rgba(255,255,255,0.16)" strokeWidth="0.85" strokeLinecap="butt">
          {paths.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g
          stroke="rgba(34,197,94,0.7)"
          fill="none"
          strokeDasharray="1000 1400"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 1.5px rgba(34,197,94,0.5))" }}
        >
          {paths.map((d) => (
            <path key={d} d={d} pathLength={1000} className="animate-paircode-trajectory" strokeWidth="0.85" />
          ))}
        </g>
      </svg>
    </div>
  );
}

function ShotFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div
      className="relative overflow-hidden bg-black"
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(255,255,255,0.1)",
        boxShadow: "0 15px 40px -15px rgba(0,0,0,0.8), 0 0 100px -20px rgba(34,197,94,0.25)",
      }}
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-[#0c0c10]">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/60" />
        <span className="ml-3 text-[11px] text-zinc-500 font-mono truncate">{url}</span>
      </div>
      <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
    </div>
  );
}

const FEATURES = [
  {
    icon: Users,
    title: "Real-time collaboration",
    body: "Yjs CRDT-based sync keeps every keystroke in order with sub-100ms latency. No merge conflicts, no lost work.",
  },
  {
    icon: CodeXml,
    title: "Monaco Editor",
    body: "The engine behind VS Code — IntelliSense, syntax highlighting, and multi-cursor support out of the box.",
  },
  {
    icon: TerminalSquare,
    title: "Code execution",
    body: "Run snippets in 15+ languages in a sandboxed runtime and see output instantly. Built for live problem-solving.",
  },
  {
    icon: Radio,
    title: "Presence awareness",
    body: "Live cursors, selections, and participant list — interviewer and candidate always stay in sync.",
  },
  {
    icon: Zap,
    title: "Zero-install",
    body: "Everything runs in the browser. Create a room in one click — no accounts, no downloads, no setup.",
  },
  {
    icon: Smartphone,
    title: "Mobile-friendly",
    body: "Responsive layout that works on phones, tablets, and desktops, so anyone can join from anywhere.",
  },
];

const LANGUAGES = [
  "JavaScript", "TypeScript", "React (JSX)", "HTML", "CSS",
  "Python", "Go", "Rust", "Java", "C++", "C", "Ruby", "PHP",
];

const MODES = [
  {
    n: "01",
    title: "Create a room",
    sub: "Interviewer flow, one click",
    points: ["Pick from 15+ languages", "No sign-up or install", "Room lives instantly"],
  },
  {
    n: "02",
    title: "Share the link",
    sub: "Candidate joins in seconds",
    points: ["Copy the room URL", "Send via email or ATS", "Join with just a name"],
  },
  {
    n: "03",
    title: "Code & run together",
    sub: "Live editing + output",
    points: ["Shared cursors & presence", "Run code sandboxed", "Console + preview panels"],
  },
];

export default function LandingPage() {
  const [copied, setCopied] = useState(false);
  const cloneCmd = `git clone ${REPO_URL}.git`;

  const copyClone = async () => {
    try {
      await navigator.clipboard.writeText(cloneCmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="w-full max-w-[1536px] mx-auto relative min-h-screen flex flex-col justify-between overflow-x-clip bg-[#060608] text-zinc-100 selection:bg-white/20 selection:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.5)_65%,#060608_100%)] z-0" />

      {/* ── Floating nav ─────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 w-full max-w-[1536px] mx-auto flex flex-col items-center pointer-events-none" style={{ paddingTop: 10, paddingLeft: 16, paddingRight: 16 }}>
        <nav
          className="w-full pointer-events-auto flex flex-col items-center justify-center backdrop-blur-xl px-3 sm:px-6 shadow-2xl"
          style={{ borderWidth: 1, borderStyle: "solid", maxWidth: 920, borderRadius: 16, backgroundColor: "rgba(18,18,22,0.8)", paddingTop: 9, paddingBottom: 9, borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="relative w-full flex items-center justify-between" style={{ maxWidth: 900 }}>
            <a href="#top" className="flex items-center gap-2 cursor-pointer group shrink-0">
              <div className="relative w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center bg-[#0c0c12] border border-white/10 shadow-[0_0_12px_rgba(34,197,94,0.25)] group-hover:scale-105 transition-transform duration-300">
                <PairMark />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-white group-hover:text-zinc-200 transition-colors duration-300">PairCode</span>
            </a>
            <div className="hidden md:flex items-center gap-1">
              {[
                ["Modes", "#modes"],
                ["Features", "#features"],
                ["Languages", "#languages"],
                ["Room", "#room"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="px-3 py-1.5 text-[13px] rounded-lg transition-all duration-200 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]">
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-1.5 px-3 py-2 h-9 bg-[#141418] border border-white/20 hover:border-white/40 text-sm font-medium text-white transition-all cursor-pointer shrink-0"
              >
                <Corners />
                <GithubMark />
                <span>Star</span>
              </a>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative hidden sm:flex items-center gap-1.5 px-3.5 py-2 h-9 bg-[#EAEAEA] hover:bg-white text-black text-sm font-semibold transition-all active:scale-95 cursor-pointer shrink-0 border border-zinc-400/40"
              >
                <Corners />
                <Play className="w-4 h-4 shrink-0" />
                <span>Try live</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Hero ─────────────────────────────── */}
      <section id="top" className="relative flex-1 flex flex-col items-center justify-center text-center w-full pt-40 sm:pt-56 pb-14 sm:pb-20 z-10 overflow-visible">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-visible select-none">
          <IsoGrid />
          <FlowLines />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.03] text-xs text-zinc-400 hover:border-white/30 hover:text-zinc-200 transition-colors mb-7"
          >
            <Star className="w-3.5 h-3.5 text-[#22C55E]" />
            Open source · MIT — star it on GitHub
          </a>
          <h1 className="relative z-10 w-full text-center text-4xl sm:text-5xl lg:text-[62px] font-medium tracking-[-0.03em] text-white leading-[1.1] mb-6 mx-auto">
            <span className="block">Interview together, in real time</span>
            <span className="text-zinc-400 font-normal block mt-3 text-xl sm:text-2xl lg:text-[38px] tracking-[-0.02em]">
              Share a link &amp; start coding
            </span>
          </h1>
          <p className="relative z-10 max-w-[820px] mx-auto text-base sm:text-lg text-zinc-400/90 leading-relaxed font-normal mb-10">
            <span className="lg:block">A lightweight, real-time collaborative code editor designed for technical interviews.</span>
            <span className="lg:block">Monaco + Yjs CRDT sync + sandboxed execution — zero install, just the browser.</span>
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-between p-1 pr-4 bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-lg"
            >
              <Corners />
              <span className="absolute inset-y-1 left-1 w-9 bg-[#22C55E] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[calc(100%-8px)] pointer-events-none" />
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0">
                  <Play className="w-[18px] h-[18px] fill-current" />
                </span>
                <span className="text-[15px] font-semibold text-white group-hover:text-black transition-colors duration-300">Try it live</span>
              </span>
              <span className="relative z-10 text-white/50 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 pl-3">→</span>
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-between p-1 pr-3.5 bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-sm"
            >
              <Corners />
              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[calc(100%-8px)] pointer-events-none" />
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0">
                  <GithubMark className="w-5 h-5" />
                </span>
                <span className="text-[15px] font-medium text-white group-hover:text-black transition-colors duration-300">View on GitHub</span>
              </span>
              <span className="relative z-10 text-white/40 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 pl-2">→</span>
            </a>
          </div>
          <p className="text-[12px] text-zinc-500 mt-4">Free &amp; open source · MIT · No sign-up needed</p>
        </div>
      </section>

      {/* ── Product screenshot ───────────────── */}
      <section className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 pt-6 sm:pt-10 pb-16 sm:pb-24 z-20 overflow-visible">
        <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 h-64 bg-green-500/10 blur-[130px] rounded-full will-change-[width,opacity]" style={{ width: "50%", opacity: 0.35 }} />
        <div className="relative will-change-transform w-full" style={{ maxWidth: 960 }}>
          <ShotFrame src="/screenshots/home.png" alt="PairCode lobby — interviewer and candidate join cards" url="paircode-editor.vercel.app" />
          <p className="text-center text-xs text-zinc-500 font-mono mt-4">The lobby — interviewers create rooms, candidates join with a link</p>
        </div>
      </section>

      {/* ── Modes ────────────────────────────── */}
      <section id="modes" className="relative w-full border-t border-white/[0.08] bg-[#07070a] px-4 sm:px-6 lg:px-8 py-20 sm:py-24 overflow-hidden z-10">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#22C55E]/[0.03] blur-[150px] rounded-full" />
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-medium tracking-[-0.025em] text-white leading-tight mb-3">One link. Three steps.</h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">From zero to a live interview in under a minute — no accounts, no downloads.</p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="relative z-20 flex flex-col items-center">
            <div className="group relative w-20 h-20 sm:w-24 sm:h-24 border border-white/20 hover:border-[#22C55E]/60 bg-[#0c0c12] p-3.5 sm:p-4 flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors duration-300">
              <Corners />
              <PairMark className="w-full h-full brightness-110 contrast-125 drop-shadow-[0_2px_8px_rgba(34,197,94,0.3)]" />
            </div>
          </div>

          <Trajectory />
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#22C55E]/40 via-white/15 to-transparent block md:hidden mb-4" />

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
            {MODES.map((m) => (
              <div key={m.n} className="group relative border transition-all duration-300 bg-[#0c0c11] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.06)] flex flex-col p-6 sm:p-7 border-white/[0.12] hover:border-[#22C55E]/40">
                <Corners />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-3">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/[0.03] border border-white/10 text-[11px] font-mono tracking-wider text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                      <span className="text-white font-semibold">{m.n}</span>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight mb-1">{m.title}</h3>
                  <p className="text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed">{m.sub}</p>
                  <div className="w-full border-b border-white/[0.08] my-5" />
                  <ul className="space-y-3.5 flex-1">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[13px] text-zinc-300">
                        <CheckIcon className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="z-20 flex items-center justify-center">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-between p-1 pr-4 bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-lg"
            >
              <Corners />
              <span className="absolute inset-y-1 left-1 w-9 bg-[#22C55E] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[calc(100%-8px)] pointer-events-none" />
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0">
                  <Play className="w-4 h-4 fill-current" />
                </span>
                <span className="text-sm font-semibold text-white group-hover:text-black tracking-wide transition-colors duration-300">Open the live app</span>
              </span>
              <span className="relative z-10 text-white/50 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 pl-3">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="relative w-full flex items-center justify-center pointer-events-none z-10">
        <div className="w-full border-t border-white/[0.08]" />
        <div className="absolute text-white/30 font-mono text-xs select-none bg-[#060608] px-3">+</div>
      </div>

      {/* ── Features ─────────────────────────── */}
      <section id="features" className="relative w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 z-10">
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-medium tracking-[-0.025em] text-white leading-tight mb-3">Built for interviews</h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">Everything a live coding session needs — nothing it doesn&apos;t.</p>
        </div>
        <div className="w-full max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="group relative border bg-[#0c0c11] p-6 sm:p-7 transition-all duration-300 border-white/[0.12] hover:border-[#22C55E]/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]">
              <Corners />
              <div className="w-10 h-10 bg-[#22C55E]/15 border border-[#22C55E]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="w-5 h-5 text-[#22C55E]" />
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight mb-2">{f.title}</h3>
              <p className="text-[13px] text-zinc-400 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Languages marquee ────────────────── */}
      <section id="languages" className="relative w-full border-t border-white/[0.08] bg-[#07070a] py-16 sm:py-20 overflow-hidden z-10">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">15+ languages, one link</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Frontend to systems — pick the language per room, run it sandboxed.</p>
        </div>
        <div
          className="relative overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
        >
          <div className="flex w-max animate-paircode-marquee gap-3 pr-3">
            {[...LANGUAGES, ...LANGUAGES].map((lang, i) => (
              <span key={`${lang}-${i}`} className="px-4 py-2 text-sm whitespace-nowrap bg-[#0c0c11] border border-white/10 text-zinc-200">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inside a room ────────────────────── */}
      <section id="room" className="relative w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 z-10">
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-medium tracking-[-0.025em] text-white leading-tight mb-3">Inside a room</h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">Candidates join with a name and cursor color — then it&apos;s just code.</p>
        </div>
        <div className="w-full max-w-5xl mx-auto">
          <ShotFrame src="/screenshots/room.png" alt="PairCode room — editor, run toolbar, join modal and console" url="paircode-editor.vercel.app/room/…" />
        </div>

        <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
          <div className="group relative bg-[#0c0c11] border border-white/[0.12] hover:border-[#22C55E]/40 transition-colors overflow-hidden">
            <Corners />
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.08]">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/60" />
              <span className="ml-2 text-[11px] text-zinc-500 font-mono">terminal</span>
            </div>
            <pre className="p-5 font-mono text-[13px] leading-7 text-zinc-200 overflow-x-auto">
              <code>
                <span className="text-zinc-500"># clone the repo</span>{"\n"}
                <span className="text-[#22C55E]">$ </span>git clone {REPO_URL}.git{"\n"}
                <span className="text-[#22C55E]">$ </span>cd paircode-editor {"&&"} npm install{"\n\n"}
                <span className="text-zinc-500"># start it</span>{"\n"}
                <span className="text-[#22C55E]">$ </span>npm run dev
              </code>
            </pre>
            <div className="px-5 pb-5">
              <button
                onClick={copyClone}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs border border-white/15 text-zinc-300 hover:border-white/40 hover:text-white transition-colors font-mono"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#22C55E]" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Copy clone command"}
              </button>
            </div>
          </div>

          <div className="group relative bg-[#0c0c11] border border-white/[0.12] hover:border-[#22C55E]/40 transition-colors p-6 sm:p-7">
            <Corners />
            <h3 className="text-xl font-medium text-white tracking-tight mb-1">Every room ships with</h3>
            <p className="text-[13px] text-zinc-400 mb-5">No database, no API keys — rooms live in server memory.</p>
            <ul className="space-y-3.5">
              {[
                "Run, Save, Format & Preview toolbar",
                "Per-language starter templates",
                "Console + live preview panels",
                "Light / dark / high-contrast themes",
                "Share-link modal for invites",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[13px] text-zinc-300">
                  <CheckIcon className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="leading-snug">{p}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Next.js 16", "Monaco v0.57", "Yjs CRDT", "Tailwind v4"].map((t) => (
                <span key={t} className="px-2.5 py-1 text-[11px] font-mono bg-white/[0.03] border border-white/10 text-zinc-400">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Open-source CTA ──────────────────── */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 pb-20 z-10">
        <div className="group relative w-full max-w-4xl mx-auto bg-[#0c0c11] border border-white/[0.12] hover:border-[#22C55E]/40 transition-colors p-8 md:p-12 text-center">
          <Corners />
          <div className="w-12 h-12 bg-[#22C55E]/15 border border-[#22C55E]/20 flex items-center justify-center mx-auto mb-5">
            <GithubMark className="w-6 h-6 text-[#22C55E]" />
          </div>
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-3">Free and open source, forever</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8">MIT-licensed. Star the repo, fork it, self-host it — issues and pull requests welcome.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="group/btn relative inline-flex items-center justify-between p-1 pr-4 bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              <Corners />
              <span className="absolute inset-y-1 left-1 w-9 bg-[#22C55E] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none" />
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0">
                  <Star className="w-4 h-4 fill-current" />
                </span>
                <span className="text-sm font-semibold text-white group-hover/btn:text-black transition-colors duration-300">Star on GitHub</span>
              </span>
              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300 pl-3">→</span>
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white text-sm font-medium transition-colors"
            >
              <Plus className="w-4 h-4 text-[#22C55E]" />
              Open the live app
            </a>
          </div>
          <p className="mt-6 font-mono text-[11px] text-zinc-500 break-all">{REPO_URL}</p>
        </div>
      </section>

      {/* ── Footer ───────────────────────────── */}
      <footer className="relative z-10 text-center text-xs text-zinc-500 pt-8 pb-10 border-t border-white/[0.08] px-4">
        <div className="flex items-center justify-center gap-2 mb-3">
          <PairMark className="w-4 h-4" />
          <span className="font-semibold text-white">PairCode</span>
        </div>
        <div className="flex items-center justify-center gap-4 mb-4">
          <a href={REPO_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-zinc-200 transition-colors">
            <GithubMark className="w-3.5 h-3.5" /> Repository
          </a>
          <span>•</span>
          <a href={`${REPO_URL}/issues`} target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors">Issues</a>
          <span>•</span>
          <span>MIT License</span>
        </div>
        <p>Live collaboration · 15+ languages · Real-time sync</p>
      </footer>
    </div>
  );
}
