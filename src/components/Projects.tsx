"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Sparkles, Layers, Terminal, Cpu } from "lucide-react";
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
}

const projects: Project[] = [
  {
    id: "neural-synth",
    title: "NEURAL SYNTH",
    category: "Generative AI & WebGL",
    description: "Real-time generative audio visualizer mapping mathematical harmonics into 3D particle nebulas. Built for high-frequency live acoustic performances.",
    tags: ["WebGL", "Web Audio API", "Three.js", "GLSL"],
    metrics: "60 FPS Audio Scrubbing // 2M+ Particles",
    icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    id: "chronos",
    title: "CHRONOS SPATIAL",
    category: "Spatial Web Architecture",
    description: "An immersive 4D timeline engine exploring relativistic astrophysical models. Seamlessly blends custom WebAssembly physics solvers with React DOM.",
    tags: ["Rust Wasm", "React Three Fiber", "Framer Motion"],
    metrics: "Awwwards SOTD // FWA of the Month",
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    accent: "from-cyan-500/20 to-transparent",
  },
  {
    id: "hyperion",
    title: "HYPERION DEX",
    category: "Fintech & Algorithmic UI",
    description: "Sub-second decentralized exchange interface featuring real-time orderbook rendering, custom canvas candlestick charts, and biometric wallet verification.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "WebSockets"],
    metrics: "$450M+ 24h Volume // 12ms Latency",
    icon: <Terminal className="w-6 h-6 text-purple-400" />,
    accent: "from-purple-500/20 to-transparent",
  },
  {
    id: "aether",
    title: "AETHER COMMERCE",
    category: "Immersive WebXR",
    description: "Next-generation luxury fashion showroom allowing real-time garment draping simulation and spatial audio ambient environments directly in the browser.",
    tags: ["WebXR", "Spline", "Tailwind CSS", "Next.js"],
    metrics: "+340% User Retention // Webby Winner",
    icon: <Cpu className="w-6 h-6 text-amber-400" />,
    accent: "from-amber-500/20 to-transparent",
  },
];

export const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative z-20 bg-[#121212] py-48 sm:py-64 border-t border-white/20 w-full">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-white/[0.03] to-transparent blur-3xl pointer-events-none" />

      <LayoutContainer>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-40 gap-8 text-left w-full">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white leading-none">
              Projects
            </h2>
            <div className="h-6"></div>
          </div>
          <p className="text-base sm:text-lg text-white/50 font-light max-w-md leading-relaxed">
            Every project engineered from scratch. Combining mathematical physics, custom shader pipelines, and uncompromising UI design.
          </p>
        </div>

        {/* Modern Glassmorphism Work Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl p-8 sm:p-10 bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.22] hover:bg-white/[0.04] backdrop-blur-xl transition-colors duration-500 overflow-hidden flex flex-col justify-between min-h-[420px]"
            >
              {/* Corner Accent Glow */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${project.accent} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div>
                {/* Top Bar: Icon & Arrow */}
                <div className="flex items-center justify-between mb-12">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                    {project.icon}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Category & Title */}
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-6 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 font-light text-base sm:text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Metrics Banner */}
                <div className="py-3 px-4 rounded-xl bg-black/40 border border-white/[0.05] font-mono text-xs text-white/70 tracking-wider mb-8 inline-block">
                  {project.metrics}
                </div>

                {/* Tags Footer */}
                <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/[0.06]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] text-white/60 border border-white/[0.05]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}            <div className="h-6"></div>

        </div>

        {/* Bottom Archive CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.25] text-white font-mono text-xs tracking-widest uppercase transition-all duration-300"
          >
            <span>Explore Complete Code Archive</span>
            <ExternalLink className="w-4 h-4 text-white/60" />            <div className="h-6"></div>

            
          </a>
                      <div className="h-6"></div>

        </div>
      </LayoutContainer>
    </section>
  );
};
