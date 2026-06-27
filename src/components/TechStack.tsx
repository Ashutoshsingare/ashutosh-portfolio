"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutContainer } from "./LayoutContainer";

const stackCategories = [
  {
    title: "Frontend Architecture",
    desc: "Cinematic user interfaces, fluid WebGL graphics & reactive state orchestration",
    skills: [
      "React",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 Canvas",
      "WebGL",
      "Three.js",
      "GSAP",
      "Redux Toolkit",
      "Vite",
      "Lenis Scroll"
    ],
    accentText: "text-emerald-400",
    accentBorder: "border-emerald-500/30",
    pillDot: "bg-emerald-400",
    pillHover: "hover:border-emerald-500/50 hover:bg-emerald-500/15 hover:text-emerald-200 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    cardGlow: "from-emerald-500/15 via-transparent to-transparent",
    topLine: "from-emerald-500 via-emerald-300 to-transparent",
  },
  {
    title: "Backend & Systems",
    desc: "High-throughput server runtimes, distributed databases & secure API endpoints",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "Prisma ORM",
      "JWT Auth",
      "Mongoose",
      "WebSockets",
      "Microservices"
    ],
    accentText: "text-cyan-400",
    accentBorder: "border-cyan-500/30",
    pillDot: "bg-cyan-400",
    pillHover: "hover:border-cyan-500/50 hover:bg-cyan-500/15 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    cardGlow: "from-cyan-500/15 via-transparent to-transparent",
    topLine: "from-cyan-500 via-cyan-300 to-transparent",
  },
  {
    title: "AI Engineering & ML",
    desc: "Applied artificial intelligence, LLM orchestrations & predictive algorithms",
    skills: [
      "Google Gemini API",
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "PyTorch",
      "NumPy",
      "LangChain",
      "Hugging Face",
      "Jupyter",
      "OpenAI API",
      "Vector DBs"
    ],
    accentText: "text-purple-400",
    accentBorder: "border-purple-500/30",
    pillDot: "bg-purple-400",
    pillHover: "hover:border-purple-500/50 hover:bg-purple-500/15 hover:text-purple-200 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    cardGlow: "from-purple-500/15 via-transparent to-transparent",
    topLine: "from-purple-500 via-purple-300 to-transparent",
  },
  {
    title: "DevOps & Tooling",
    desc: "Version control workflows, cloud deployment infrastructure & UI design systems",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Figma",
      "Docker",
      "Turbopack",
      "Postman",
      "Webpack",
      "ESLint",
      "AWS",
      "CI/CD Pipelines"
    ],
    accentText: "text-amber-400",
    accentBorder: "border-amber-500/30",
    pillDot: "bg-amber-400",
    pillHover: "hover:border-amber-500/50 hover:bg-amber-500/15 hover:text-amber-200 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    cardGlow: "from-amber-500/15 via-transparent to-transparent",
    topLine: "from-amber-500 via-amber-300 to-transparent",
  },
];


export const TechStack: React.FC = () => {
  return (
    <section id="skills" className="relative z-20 bg-[#121212] py-48 sm:py-64 border-t border-white/20 w-full overflow-hidden">
      {/* Deep Ambient Background Illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-purple-500/[0.035] via-cyan-500/[0.035] to-emerald-500/[0.035] blur-[190px] pointer-events-none rounded-full" />
            <div className="h-6"></div>

      <LayoutContainer>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8 text-left w-full">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400">
                
                // Technological Arsenal
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white leading-none">
              Tech Stack.
            </h2>
            <div className="h-6"></div>
          </div>
          <p className="text-base sm:text-lg text-white/50 font-light max-w-md leading-relaxed">
            A comprehensive matrix of production-grade frameworks, languages.
                        <div className="h-6"></div>

          </p>
        </div>

        {/* Premium Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl p-8 sm:p-12 bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.25] hover:bg-white/[0.04] backdrop-blur-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
            >
              {/* Glowing Top Accent Border Line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${category.topLine} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Ambient Radial Background Glow */}
              <div className={`absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br ${category.cardGlow} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10 mb-8">
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white group-hover:text-white/95 transition-colors">
                    {category.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border bg-white/[0.02] ${category.accentBorder} ${category.accentText}`}>
                    // 0{idx + 1}
                  </span>
                  
                </div>

                <p className="text-sm sm:text-base font-light text-white/50 leading-relaxed">
                  {category.desc}
                </p>
                            <div className="h-6"></div>

              </div>

              {/* Dense Matrix of Floating Technology Pills */}
              <div className="relative z-10 pt-8 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.06, y: -3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-mono tracking-wider bg-white/[0.03] border border-white/[0.08] text-white/80 transition-all duration-300 cursor-default select-none shadow-sm ${category.pillHover}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${category.pillDot} shadow-[0_0_8px_currentColor] opacity-75 group-hover:opacity-100 transition-opacity`} />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                  
                </div>
              </div>
            </motion.div>
          ))}            <div className="h-6"></div>


        </div>
                    <div className="h-6"></div>

      </LayoutContainer>
    </section>
  );
};
