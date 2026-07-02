"use client";

import React, { useEffect, useRef } from "react";
import { LayoutContainer } from "./LayoutContainer";
import { Monitor, Server, Cpu, Terminal } from "lucide-react";

interface StackCategory {
  title: string;
  desc: string;
  skills: string[];
  icon: React.ReactNode;
}

const stackCategories: StackCategory[] = [
  {
    title: "Frontend Architecture",
    desc: "Cinematic user interfaces, fluid WebGL graphics & reactive state orchestration.",
    skills: [
      "React",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 Canvas",
      "GSAP",
      "Framer Motion",
      "Vite",
      "Shadcn UI",
      "Lenis Scroll",
      "Web Audio API",
      
    ],
    icon: <Monitor className="w-5 h-5 text-accent" />,
  },
  {
    title: "Backend & Systems",
    desc: "High-throughput server runtimes, distributed databases & secure API endpoints.",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "REST APIs",

      "JWT Auth",
      "Supabase",
    ],
    icon: <Server className="w-5 h-5 text-accent" />,
  },
  {
    title: "AI Engineering & ML",
    desc: "Applied artificial intelligence, LLM orchestrations & predictive algorithms.",
    skills: [
      "Google Gemini API",
      "OpenAI API",
      "Claude API",
      "Python",
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "LlamaIndex",
      "Hugging Face",
      "Vector DBs",
      "Pinecone",
      "RAG Pipelines",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
    icon: <Cpu className="w-5 h-5 text-accent" />,
  },
  {
    title: "DevOps & Cloud Infrastructure",
    desc: "Version control workflows, cloud deployment infrastructure & automated CI/CD pipelines.",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Vercel",
      "Git & GitHub",
      "CI/CD Pipelines",
      "Turbopack",
      "Webpack",
      "Terraform",
      "Cloudflare",
      "Postman",
      "ESLint",
      "Figma",
      "Jest & Vitest",
    ],
    icon: <Terminal className="w-5 h-5 text-accent" />,
  },
];

export const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  /*
    REVEAL ANIMATION (Vanilla JS + IntersectionObserver):
    - Observes each reveal wrapper marked with data-row.
    - On enter (threshold 0.15): fade in + settle upward (translateY 24px -> 0), staggered per card.
  */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";
          }
        });
      },
      { threshold: 0.15 }
    );

    const rows = containerRef.current?.querySelectorAll("[data-row]");
    rows?.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative z-20 bg-[#0d0f12] pt-28 md:pt-[150px] pb-36 md:pb-[220px] border-t border-white/20 w-full overflow-hidden">
      {/* Deep Ambient Background Illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/[0.05] blur-[190px] pointer-events-none rounded-full" />

      <LayoutContainer>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8 text-left w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent">
                // Technological Arsenal
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white leading-none">
              Skills.
               <div className="h-18 md:h-7"></div>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-white/50 font-light max-w-md leading-relaxed">
            A comprehensive matrix of production-grade frameworks, languages, and distributed systems architecture.
             <div className="h-18 md:h-7"></div>
          </p>
        </div>

        {/* Editorial 2×2 grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 sm:mb-16">
          {stackCategories.map((category, idx) => {
            return (
              <div
                key={category.title}
                data-row
                style={{
                  opacity: 0,
                  transform: "translateY(24px)",
                  transition:
                    "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${idx * 0.1}s`,
                }}
              >
                <article className="surface-card group h-full min-h-0 sm:min-h-[380px] flex flex-col rounded-[18px] p-6 sm:p-8 pb-10 border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.035] will-change-transform">
                  {/* Top row: category icon + index */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-accent/10 border border-accent/25 shadow-inner">
                      {category.icon}
                    </div>
                    <span className="font-mono text-xs text-white/25 tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Category name */}
                  <h3 className="mt-6 text-xl sm:text-2xl font-semibold tracking-tight text-white leading-snug">
                    {category.title}
                  </h3>

                  {/* Muted supporting line */}
                  <p className="mt-3 text-sm sm:text-[15px] font-light text-white/45 leading-relaxed max-w-sm">
                    {category.desc}
                  </p>

                  {/* Skills */}
<div className="mt-auto pt-8">
  <div className="flex flex-wrap gap-2 sm:gap-2.5">
    {category.skills.map((skill) => (
      <span
        key={skill}
        className="inline-flex items-center justify-center rounded-lg px-3.5 py-2 text-xs leading-none font-mono font-medium tracking-wide bg-accent/[0.08] text-accent-hover border border-accent/20 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-accent/[0.14] hover:border-accent/40 hover:text-white cursor-default select-none"
      >
        {skill}
      </span>
    ))}
  </div>

  {/* Bottom breathing room */}
  <div className="h-6" />
</div>
                </article>
              </div>
            );
          })}
                </div>

        {/* Space before next section */}
        <div className="h-24 md:h-18"></div>

      </LayoutContainer>
    </section>
  );
};
