"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

interface LoaderProps {
  progress?: number;
  isLoading?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ progress: propProgress, isLoading: propIsLoading }) => {
  const { isLoading: contextIsLoading, progress: contextProgress } = useLoading();

  const isLoading = propIsLoading !== undefined ? propIsLoading : contextIsLoading;
  const progress = propProgress !== undefined ? propProgress : contextProgress;

  // Animation phase timer: 0 = entrance, 1 = 360 spin & AI core power-up
  const [phase, setPhase] = useState<0 | 1>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase(1);
    }, 900); // transition to spin after entrance settles
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. Full-screen Cinematic Backdrop (exits with gentle fade when loading completes) */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="cinematic-backdrop"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#0B0D11] overflow-hidden select-none pointer-events-auto"
          >
            {/* Animated Noise Grain Backdrop */}
            <div 
              className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Soft Center Radial Spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_65%)] pointer-events-none" />

            {/* Ambient Glow (#7F9CF5 at 10% opacity) */}
            <motion.div
              animate={{
                scale: phase === 1 ? [1, 1.25, 1] : 0.8,
                opacity: phase === 1 ? [0.08, 0.14, 0.08] : 0.05,
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#7F9CF5] blur-[100px] pointer-events-none"
            />

            {/* AI Core Orbital Rings & Floating Spark Particles */}
            <div className="absolute flex items-center justify-center pointer-events-none">
              {/* Outer Orbital Ring */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0, rotateX: 65, rotateY: 15 }}
                animate={{
                  scale: phase === 1 ? [1, 1.05, 1] : 1,
                  opacity: phase === 1 ? 0.3 : 0.15,
                  rotateZ: 360,
                }}
                transition={{
                  rotateZ: { duration: 16, repeat: Infinity, ease: "linear" },
                  scale:
                    phase === 1
                      ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
                      : { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 1.1, ease: "easeOut" },
                }}
                className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full border border-dashed border-[#7F9CF5]/30"
              />

              {/* Inner Fast Orbital Ring */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0, rotateX: 55, rotateY: -20 }}
                animate={{
                  scale: 1,
                  opacity: phase === 1 ? 0.45 : 0.2,
                  rotateZ: -360,
                }}
                transition={{
                  rotateZ: { duration: 11, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 1.1, ease: "easeOut" },
                }}
                className="absolute w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] rounded-full border border-white/20"
              />

              {/* Floating Spark Nodes */}
              {[0, 72, 144, 216, 288].map((deg, idx) => (
                <motion.div
                  key={deg}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: phase === 1 ? [0.2, 0.8, 0.2] : 0,
                    scale: phase === 1 ? [0.8, 1.3, 0.8] : 0,
                    rotate: deg + (phase === 1 ? 360 : 0),
                  }}
                  transition={{
                    rotate: { duration: 7 + idx * 0.6, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.25 },
                    scale: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.25 },
                  }}
                  className="absolute w-[200px] h-[200px] flex items-start justify-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7F9CF5] shadow-[0_0_8px_#7F9CF5]" />
                </motion.div>
              ))}
            </div>

            {/* Minimalist Bottom System Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-8 inset-x-8 max-w-5xl mx-auto flex justify-between items-center text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/30"
            >
              <span>System OS // v2.6</span>
              <div className="w-32 sm:w-48 h-[1px] bg-white/[0.08] relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 bottom-0 bg-[#7F9CF5] shadow-[0_0_10px_#7F9CF5]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span>60FPS Hardware GPU</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Standalone Centerpiece Orb (Separated so it NEVER fades out during FLIP flight across screen) */}
      <AnimatePresence>
        {isLoading && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none select-none pb-12">
            <motion.div
              layoutId="brand-logo-orb"
              initial={{ scale: 0, opacity: 0, filter: "blur(20px)" }}
              animate={{
                scale: phase === 0 ? [0, 1.15, 1] : [1, 1.05, 1],
                y: phase === 1 ? [0, -6, 0] : 0,
                opacity: 1,
                filter: "blur(0px)",
                rotate: phase === 1 ? 360 : 0,
              }}
              transition={{
                scale:
                  phase === 0
                    ? { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
                    : { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.6, ease: "easeOut" },
                filter: { duration: 0.8 },
                rotate:
                  phase === 1
                    ? { duration: 2.6, ease: [0.22, 1, 0.36, 1] }
                    : { duration: 0.8 },
                layout: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
              }}
              style={{ willChange: "transform" }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full backdrop-blur-xl backdrop-saturate-200 bg-gradient-to-b from-white/[0.22] via-white/[0.06] to-black/60 border border-white/[0.35] ring-2 ring-white/[0.15] shadow-[0_0_50px_rgba(127,156,245,0.25),0_12px_32px_rgba(0,0,0,0.7),inset_0_3px_2px_rgba(255,255,255,0.5),inset_0_-2px_2px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden p-3 pointer-events-auto cursor-pointer"
            >
              {/* Top Lens Curvature Highlight */}
              <div className="absolute top-0 inset-x-2 h-7 bg-gradient-to-b from-white/50 via-white/15 to-transparent rounded-t-full pointer-events-none blur-[0.5px]" />
              {/* Bottom Rim Reflection */}
              <div className="absolute bottom-0 inset-x-3 h-3 bg-gradient-to-t from-white/30 to-transparent rounded-b-full pointer-events-none" />
              
              <img
                src="/logo.png"
                alt="Ashutosh Singare Logo"
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
