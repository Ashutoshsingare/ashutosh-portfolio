"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { LayoutContainer } from "./LayoutContainer";
import { useLoading } from "@/context/LoadingContext";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export const Overlay: React.FC<OverlayProps> = ({ scrollYProgress }) => {
  const { isLoading } = useLoading();
  // Section 1: 0% scroll (Visible 0.0 to 0.22)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.22], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.22], [0, -100]);

  // Section 2: 30% scroll (Visible 0.22 to 0.55)
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.32, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.22, 0.55], [80, -80]);

  // Section 3: 60% scroll (Visible 0.55 to 0.90)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.9], [80, -80]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between">
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full relative overflow-hidden">
        <LayoutContainer className="h-full flex items-center">
          <div className="w-full h-full relative flex items-center">
            
            {/* SECTION 1: HERO (0% SCROLL) - ALIGNED LEFT OF FACE */}
            <motion.div
              style={{ opacity: opacity1, y: y1 }}
              className="absolute left-0 -translate-x-69 inset-y-0 my-auto flex flex-col justify-center items-start text-left max-w-lg lg:max-w-2xl pr-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-md mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-ping" />
                <span className="text-[11px] font-mono tracking-widest text-white/80 uppercase">Available for Projects</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={isLoading ? { opacity: 0, y: 25 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-white mb-4 leading-none"
              >
                Ashutosh <span className="font-normal bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">Singare<span className="block h-6" aria-hidden="true" /></span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="text-lg sm:text-2xl md:text-3xl font-light tracking-wide text-white/60"
              >
                Creative Developer.
                <span className="block h-6" aria-hidden="true" />
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isLoading ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
                className="mt-16 flex flex-col items-start gap-2 text-white/40 animate-bounce"
              >
                <span className="text-xs uppercase tracking-widest font-mono">Scroll to scrub sequence</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>

            {/* SECTION 2: SCROLL TEXT 1 (30% SCROLL) - ALIGNED RIGHT OF FACE */}
            <motion.div
              style={{ opacity: opacity2, y: y2 }}
              className="absolute right-0 translate-x-69 inset-y-0 my-auto flex flex-col justify-center items-end text-right max-w-lg lg:max-w-2xl pl-6 ml-auto"
            >
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4 block">
                // 01. ABOUT ME

              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white leading-tight mb-6">
                I build intelligent<br />
                <span className="font-normal italic bg-gradient-to-r from-accent via-white to-white/40 bg-clip-text text-transparent">
                software.
                </span>
              </h2>
              <p className="text-base sm:text-xl md:text-2xl font-light text-white/60 leading-relaxed ml-auto">
                Computer Science student specializing in Data Science, passionate about building full-stack web applications, AI-powered products, and scalable software that solve real-world problems through clean architecture and thoughtful user experiences.
              </p>
            </motion.div>

            {/* SECTION 3: SCROLL TEXT 2 (60% SCROLL) - ALIGNED LEFT OF FACE */}
            <motion.div
              style={{ opacity: opacity3, y: y3 }}
              className="absolute left-0 -translate-x-69 inset-y-0 my-auto flex flex-col justify-center items-start text-left max-w-lg lg:max-w-2xl pr-6"
            >
                 <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4 block">
                // 02. MY PHILOSOPHY
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white leading-tight mb-6">
                Creating software <br />
                <span className="font-normal italic bg-gradient-to-r from-accent via-white to-white/40 bg-clip-text text-transparent">
                  that matters.
                </span>
              </h2>
              <p className="text-base sm:text-xl md:text-2xl font-light text-white/60 leading-relaxed ml-auto">
                Every project is built with performance, scalability, and user experience at its core, combining modern web technologies with practical AI.
              </p>
            </motion.div>

          </div>
        </LayoutContainer>
      </div>
    </div>
  );
};
