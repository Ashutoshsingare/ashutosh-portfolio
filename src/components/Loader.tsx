"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  progress: number;
  isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ progress, isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="luxury-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#121212] px-8 py-12 text-white overflow-hidden select-none"
        >
          {/* Top Brand Tag */}
          <div className="w-full max-w-7xl flex justify-between items-center text-xs tracking-widest text-white/40 uppercase font-mono">
            <span>Ashutosh Singare</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Preloading 60FPS Canvas Assets
            </span>
          </div>

          {/* Center Huge Percentage */}
          <div className="flex flex-col items-center text-center my-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-baseline font-extralight tracking-tighter text-8xl sm:text-9xl lg:text-[14rem]"
            >
              <span>{progress}</span>
              <span className="text-3xl sm:text-5xl text-white/30 ml-2 font-light">%</span>
            </motion.div>
            <p className="mt-4 text-sm sm:text-base tracking-[0.3em] uppercase text-white/50 font-light">
              Cinematic Experience Loading
            </p>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full max-w-7xl flex flex-col gap-4">
            <div className="h-[2px] w-full bg-white/[0.08] overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-white/40 via-white to-white/40 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] sm:text-xs text-white/30 font-mono uppercase tracking-wider">
              <span>Next.js 14 App Router</span>
              <span>Sequence 000 — 119</span>
              <span>HTML5 Canvas Engine</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
