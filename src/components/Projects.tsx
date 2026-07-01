"use client";

import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, ArrowUpRight, Sparkles, Layers, Terminal, Cpu, Code, Activity, Zap } from "lucide-react";
import { LayoutContainer } from "./LayoutContainer";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: string;
  icon: React.ReactNode;
  accent: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "devmind",
    title: "DEVMIND AI COMPILER",
    category: "AI DevTools & Cloud IDE",
    description:
      "DevMind is an AI-powered online compiler and browser-based code editor that enables developers to write, edit, execute, and debug code directly from their web browser without local setup.",
    tags: ["Next.js", "AI Compiler", "Monaco Editor", "WebAssembly", "Sandboxed Exec"],
    metrics: "Zero Local Setup // Live AI Code Debugging",
    icon: <Sparkles className="w-6 h-6 text-accent" />,
    accent: "from-accent/20 via-accent/5 to-transparent",
    liveUrl: "https://devmind-beige.vercel.app",
    githubUrl: "https://github.com/Ashutoshsingare/devmind",
  },
  {
    id: "chronos",
    title: "CHRONOS SPATIAL",
    category: "Spatial Web Architecture",
    description:
      "An immersive 4D timeline engine exploring relativistic astrophysical models. Seamlessly blends custom WebAssembly physics solvers with React DOM.",
    tags: ["Rust Wasm", "React Three Fiber", "Pure CSS"],
    metrics: "Awwwards SOTD // FWA of the Month",
    icon: <Layers className="w-6 h-6 text-accent" />,
    accent: "from-accent/20 via-accent/5 to-transparent",
  },
  {
    id: "hyperion",
    title: "HYPERION DEX",
    category: "Fintech & Algorithmic UI",
    description:
      "Sub-second decentralized exchange interface featuring real-time orderbook rendering, custom canvas candlestick charts, and biometric wallet verification.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "WebSockets"],
    metrics: "$450M+ 24h Volume // 12ms Latency",
    icon: <Terminal className="w-6 h-6 text-accent" />,
    accent: "from-accent/20 via-accent/5 to-transparent",
  },
  {
    id: "aether",
    title: "AETHER COMMERCE",
    category: "Immersive WebXR",
    description:
      "Next-generation luxury fashion showroom allowing real-time garment draping simulation and spatial audio ambient environments directly in the browser.",
    tags: ["WebXR", "Spline", "Tailwind CSS", "Next.js"],
    metrics: "+340% User Retention // Webby Winner",
    icon: <Cpu className="w-6 h-6 text-accent" />,
    accent: "from-accent/20 via-accent/5 to-transparent",
  },
];

export const Projects: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate total scrollable distance inside this pinned container
      const scrollableDistance = height - windowHeight;
      if (scrollableDistance <= 0) return;

      // Amount scrolled into the section
      const scrolled = Math.max(0, Math.min(-top, scrollableDistance));

      // Normalize progress from 0 to 1, then scale across project indices
      const rawProgress = scrolled / scrollableDistance;
      const maxIndex = projects.length - 1;
      
      // Ensure smooth easing and high precision tracking across projects
      setScrollProgress(rawProgress * maxIndex);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Determine active index with smooth thresholding
  const activeIndex = Math.min(projects.length - 1, Math.max(0, Math.round(scrollProgress)));

  // Helper to jump to specific project on indicator click
  const scrollToProject = (index: number) => {
    if (!sectionRef.current) return;
    const { top } = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollableDistance = sectionRef.current.offsetHeight - windowHeight;
    const targetScrolled = (index / (projects.length - 1)) * scrollableDistance;
    const targetY = window.scrollY + top + targetScrolled;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    /*
      SECTION WRAPPER:
      Calculated height gives ample storytelling timeline per project plus 0.5vh hold at the end.
    */
    <section
      id="projects"
      ref={sectionRef}
      style={{ height: `${(projects.length + 0.5) * 100}vh` }}
      className="relative z-20 bg-[#0d0f12] border-t border-white/20 w-full scroll-mt-28 sm:scroll-mt-32"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-white/[0.04] to-transparent blur-3xl pointer-events-none" />

      {/*
        STICKY VIEWPORT CONTAINER:
        Pins precisely underneath the fixed navbar (top-0 with responsive top padding giving optimal breathing room below navbar).
      */}
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-6 sm:pb-8">
        <LayoutContainer className="h-full flex flex-col min-h-0">
          
          {/* SECTION ENTRY HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left w-full shrink-0 relative z-50 mb-4 sm:mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-2 block">
                // FEATURED ARCHIVE
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white leading-none">
                Works.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-white/50 font-light max-w-xs sm:max-w-md leading-relaxed sm:text-right">
              Layered interactive stack. Scroll to explore architectural details and real-time system metrics.
            </p>
          </div>

          {/* MAIN 2-COLUMN SCROLLYTELLING LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center content-center flex-1 min-h-0 relative my-auto">
            
            {/* LEFT COLUMN (50% -> 6 cols): INTERACTIVE PROJECT CARDS STACK */}
            <div className="lg:col-span-6 h-[300px] sm:h-[360px] lg:h-[420px] relative w-full flex items-center justify-center">
              {projects.map((project, index) => {
                const diff = scrollProgress - index;

                // STACK & FOCUS TRANSITION LOGIC:
                // diff == 0: Active card -> expanded, centered, sharp
                // diff > 0: Past card -> shrinks slightly and shifts up
                // diff < 0: Future card -> slides up from below
                let translateY = "0px";
                let scale = 1;
                let opacity = 1;
                let blur = "0px";

                if (diff > 0) {
                  scale = Math.max(0.85, 1 - diff * 0.04);
                  translateY = `${-diff * 32}px`;
                  opacity = Math.max(0, 1 - diff * 0.45);
                  blur = `${Math.min(8, diff * 3)}px`;
                } else if (diff < 0) {
                  const incoming = -diff;
                  translateY = `${incoming * 110}%`;
                  scale = Math.max(0.92, 1 - incoming * 0.05);
                  opacity = incoming > 1.1 ? 0 : Math.max(0, 1 - (incoming - 0.4) * 1.8);
                  blur = `${Math.min(8, incoming * 4)}px`;
                }

                return (
                  <div
                    key={project.id}
                    style={{
                      transform: `translateY(${translateY}) scale(${scale})`,
                      opacity,
                      filter: `blur(${blur})`,
                      zIndex: index + 10,
                      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease, filter 0.5s ease",
                    }}
                    className="absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-white/[0.12] backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden will-change-transform"
                  >
                    {/* Corner Accent Glow */}
                    <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${project.accent} blur-3xl rounded-full pointer-events-none`} />

                    {/* Card Header */}
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/[0.12] shadow-inner">
                          {project.icon}
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-medium">
                          {project.category}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-white/40 tracking-widest">
                        0{index + 1} / 0{projects.length}
                      </span>
                    </div>

                    {/* Custom Interactive UI Snapshot Mockups */}
                    <div className="my-auto relative z-10 py-4 border-y border-white/[0.08] flex flex-col gap-3">
                      {project.id === "devmind" ? (
                        /* DevMind AI IDE Window Snapshot */
                        <div className="rounded-2xl bg-[#0a0c10] border border-white/[0.16] shadow-[0_12px_35px_rgba(0,0,0,0.85)] overflow-hidden font-mono text-[11px] group-hover:border-accent/40 transition-colors duration-500">
                          {/* Mac Window Titlebar */}
                          <div className="bg-white/[0.05] px-3.5 py-2 border-b border-white/[0.08] flex items-center justify-between text-white/50">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                            </div>
                            <span className="text-[10px] tracking-wider text-accent font-semibold flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-accent animate-pulse" />
                              DEVMIND_AI_COMPILER.TSX
                            </span>
                            <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              SANDBOX ONLINE
                            </span>
                          </div>
                          {/* Browser Address Bar with Clickable Live Demo Link */}
                          <div className="bg-black/60 px-3.5 py-1.5 border-b border-white/[0.06] flex items-center justify-between text-[10px]">
                            <div className="flex items-center gap-1.5 text-white/40">
                              <span className="text-emerald-400">🔒</span>
                              <span className="font-mono">https://</span>
                            </div>
                            <a
                              href="https://devmind-beige.vercel.app"
                              target="_blank"
                              rel="noreferrer"
                              className="px-3 py-0.5 rounded-md bg-white/[0.06] hover:bg-accent/20 border border-white/[0.12] hover:border-accent/40 text-accent hover:text-white transition-all flex items-center gap-1.5 font-semibold tracking-wide shadow-inner"
                            >
                              <span>devmind-beige.vercel.app</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          </div>
                          {/* IDE Code Area */}
                          <div className="p-3.5 space-y-1.5 text-white/85 bg-gradient-to-b from-transparent to-black/50">
                            <div className="flex items-center justify-between text-white/40 text-[10px] mb-1">
                              <span>// AI Assistant Active</span>
                              <span className="text-accent/90">Wasm Engine v2.4</span>
                            </div>
                            <p><span className="text-purple-400 font-semibold">async function</span> <span className="text-blue-400 font-semibold">compileAndRun</span>(source: <span className="text-yellow-300">string</span>) &#123;</p>
                            <p className="pl-3 text-white/75">const runtime = <span className="text-purple-400">await</span> CloudSandbox.<span className="text-blue-300">init</span>(&#123; mode: <span className="text-emerald-300">&apos;jit&apos;</span> &#125;);</p>
                            <div className="pl-3 my-1 bg-accent/[0.15] border-l-2 border-accent px-2.5 py-1 rounded text-accent text-[10px] flex items-center gap-2 shadow-inner">
                              <Sparkles className="w-3 h-3 shrink-0 animate-spin" style={{ animationDuration: "8s" }} />
                              <span>AI Suggestion: Memory leak prevented via zero-copy buffer transfer.</span>
                            </div>
                            <p>&#125;</p>
                          </div>
                          {/* Execution Terminal Footer */}
                          <div className="bg-black/90 px-3.5 py-2 border-t border-white/[0.08] flex items-center justify-between text-[10px]">
                            <span className="text-emerald-400 font-medium">
                              $ devmind execute --perf ➔ Output: Build Success (14ms)
                            </span>
                            <span className="text-white/40 font-mono">0 errors</span>
                          </div>
                        </div>
                      ) : (
                        /* Standard Architectural Snapshot for other cards */
                        <>
                          <div className="flex items-center justify-between font-mono text-[11px] text-white/50 mb-1">
                            <span>SYSTEM ARCHITECTURE</span>
                            <span className="text-emerald-400 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              ONLINE
                            </span>
                          </div>
                          <div className="h-3 w-2/5 bg-white/20 rounded-full animate-pulse" />
                          <div className="h-2 w-4/5 bg-white/10 rounded-full" />
                          <div className="h-2 w-3/5 bg-white/10 rounded-full" />
                          
                          <div className="mt-3 p-3.5 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-[11px] text-accent/90 flex items-center justify-between shadow-inner">
                            <span>METRIC SNAPSHOT</span>
                            <span className="font-semibold text-white">{project.metrics.split("//")[0]}</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Card Footer with Clickable Corner Demo Link Button */}
                    <div className="flex items-center justify-between relative z-10">
                      <h4 className="text-lg sm:text-xl font-light tracking-tight text-white/90 truncate pr-4">
                        {project.title}
                      </h4>
                      <a
                        href={project.liveUrl || "#contact"}
                        target={project.liveUrl ? "_blank" : undefined}
                        rel={project.liveUrl ? "noreferrer" : undefined}
                        aria-label={`Launch live demo for ${project.title}`}
                        className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white text-white hover:text-black border border-white/[0.16] hover:border-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] hover:scale-110 group/corner"
                      >
                        <ArrowUpRight className="w-4.5 h-4.5 group-hover/corner:translate-x-0.5 group-hover/corner:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN (50% -> 6 cols): DYNAMIC STORYTELLING DETAILS */}
            <div className="lg:col-span-6 flex flex-col justify-center pl-0 lg:pl-6 text-left relative z-20 min-h-[300px]">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;
                const distance = scrollProgress - index;
                // Transition styling inspired by Apple / Linear
                const translateY = isActive ? "0px" : distance > 0 ? "-20px" : "20px";
                const scale = isActive ? 1 : 0.98;
                const blur = isActive ? "0px" : "4px";

                return (
                  <div
                    key={`details-${project.id}`}
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: `translateY(${translateY}) scale(${scale})`,
                      filter: `blur(${blur})`,
                      pointerEvents: isActive ? "auto" : "none",
                      position: isActive ? "relative" : "absolute",
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    className="flex flex-col justify-center w-full"
                  >
                    {/* Category Label */}
                    <div className="inline-flex items-center gap-2.5 mb-3 sm:mb-4">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                      </span>
                      <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Large Project Title */}
                    <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-white mb-4 sm:mb-6 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 font-light text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Glowing Obsidian Metallic Metrics Badge (Requirement #5) */}
                    <div className="relative py-2.5 px-4 sm:py-3 sm:px-5 rounded-xl bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-transparent border border-white/[0.16] font-mono text-xs sm:text-sm text-white tracking-wider mb-6 sm:mb-8 w-fit shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)] flex items-center gap-2.5 overflow-hidden group">
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-accent" />
                      <Zap className="w-3.5 h-3.5 text-accent shrink-0 animate-pulse" />
                      <span className="font-semibold text-white">{project.metrics}</span>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] text-white/80 border border-white/[0.08] tracking-wide transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Dual Action Toolbar: Live Demo & Source Code (Requirement #3) */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <a
                        href={project.liveUrl || "#contact"}
                        target={project.liveUrl ? "_blank" : undefined}
                        rel={project.liveUrl ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-[#F5F6FA] text-black font-mono text-xs tracking-[0.16em] uppercase font-bold transition-all duration-300 shadow-[0_6px_25px_-4px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.5)] group"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>

                      <a
                        href={project.githubUrl || "https://github.com/Ashutoshsingare"}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.14] hover:border-white/[0.28] text-white font-mono text-xs tracking-[0.16em] uppercase font-semibold transition-all duration-300 shadow-sm group"
                      >
                        <Code className="w-4 h-4 text-[#7F9CF5] group-hover:scale-110 transition-transform" />
                        <span>Source Architecture</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* SECTION FOOTER & PROGRESS INDICATORS */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40 shrink-0">
            {/* Interactive Timeline Indicators */}
            <div className="flex items-center gap-3">
              <span>PROGRESS:</span>
              <div className="flex items-center gap-1.5">
                {projects.map((p, idx) => (
                  <button
                    key={`indicator-${p.id}`}
                    onClick={() => scrollToProject(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "w-8 bg-accent shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Jump to ${p.title}`}
                  />
                ))}
              </div>
              <span className="text-white/60 ml-1">0{activeIndex + 1} / 0{projects.length}</span>
            </div>

            {/* Complete Code Archive Link */}
            <a
              href="https://github.com/Ashutoshsingare"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white flex items-center gap-2 transition-colors group"
            >
              <span>COMPLETE CODE ARCHIVE</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </LayoutContainer>
      </div>
    </section>
  );
};
