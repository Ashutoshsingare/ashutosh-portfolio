"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Sparkles, FileText, FileCode, Download, X, ArrowUpRight, Menu } from "lucide-react";
import { LayoutContainer } from "./LayoutContainer";
import { useLoading } from "@/context/LoadingContext";

export const Navbar: React.FC = () => {
  const { isLoading } = useLoading();
  const [activeLink, setActiveLink] = useState("Home");
  const [spinCount, setSpinCount] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isLoading) {
      document.body.style.overflow = "";
    }
  }, [isResumeOpen, isLoading]);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      setScrolled(window.scrollY > 40);
      setIsMenuOpen(false);

      const contactEl = document.getElementById("contact");
      const worksEl = document.getElementById("works");
      const skillsEl = document.getElementById("skills");
      const educationEl = document.getElementById("education");

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveLink("Contact");
      } else if (worksEl && scrollPos >= worksEl.offsetTop) {
        setActiveLink("Works");
      } else if (skillsEl && scrollPos >= skillsEl.offsetTop) {
        setActiveLink("Skills");
      } else if (educationEl && scrollPos >= educationEl.offsetTop) {
        setActiveLink("Education");
      } else {
        setActiveLink("Home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 sm:top-6 inset-x-0 w-full z-[1000] pointer-events-none">
      <LayoutContainer className="pointer-events-auto">
        <div className="relative">
        <motion.nav
          initial={{ opacity: 0, y: -25, scale: 0.96 }}
          animate={
            isLoading
              ? { opacity: 0, y: -25, scale: 0.96 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`relative flex items-center justify-between px-6 sm:px-8 rounded-full backdrop-saturate-200 border select-none w-full transition-all duration-500 overflow-hidden ${
            scrolled
              ? "py-3 sm:py-3.5 backdrop-blur-[35px] bg-gradient-to-b from-white/[0.14] via-white/[0.05] to-black/65 border-white/[0.24] shadow-[0_16px_48px_-10px_rgba(0,0,0,0.85),inset_0_1px_1.5px_rgba(255,255,255,0.28)]"
              : "py-4 sm:py-4.5 backdrop-blur-[28px] bg-gradient-to-b from-white/[0.10] via-white/[0.03] to-black/45 border-white/[0.15] shadow-[0_10px_36px_-12px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.18)]"
          }`}
        >
          {/* Subtle Animated Specular Highlight Sweep across Navbar Top Rim */}
          <motion.div
            animate={{ left: ["-100%", "200%"] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut",
            }}
            className="absolute top-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-20"
          />

          {/* Liquid Specular Top Edge Static Light */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

          {/* Brand Logo & Name */}
          <a
            href="#"
            onClick={(e) => {
              setSpinCount((prev) => prev + 1);
            }}
            className="flex items-center gap-3.5 group relative z-10"
          >
            <div className="relative">
              {/* Ambient Radial Backlight Glow */}
              <div className="absolute inset-0 rounded-full bg-[#7F9CF5]/25 blur-md group-hover:bg-[#7F9CF5]/50 group-hover:scale-125 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />

              {/* Liquid Glass Orb Container with Interactive Click Spin & Shared FLIP layoutId */}
              <motion.div
                layoutId="brand-logo-orb"
                animate={{
                  rotate: spinCount * 360,
                  scale: spinCount > 0 ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  rotate: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  layout: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
                }}
                style={{ willChange: "transform" }}
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full backdrop-blur-xl backdrop-saturate-200 bg-gradient-to-b from-white/[0.22] via-white/[0.05] to-black/60 border border-white/[0.28] ring-1 ring-white/[0.12] shadow-[0_6px_16px_rgba(0,0,0,0.6),inset_0_2px_1.5px_rgba(255,255,255,0.45),inset_0_-1.5px_1.5px_rgba(0,0,0,0.5)] flex items-center justify-center group-hover:scale-110 group-hover:border-white/45 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.22),inset_0_2px_2px_rgba(255,255,255,0.65)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden p-1.5 cursor-pointer shrink-0"
              >
                {/* Top Lens Curvature Highlight */}
                <div className="absolute top-0 inset-x-1.5 h-3 bg-gradient-to-b from-white/45 via-white/15 to-transparent rounded-t-full pointer-events-none blur-[0.3px]" />
                {/* Bottom Rim Reflection */}
                <div className="absolute bottom-0 inset-x-2 h-1.5 bg-gradient-to-t from-white/25 to-transparent rounded-b-full pointer-events-none" />
                <img
                  src="/logo.png"
                  alt="Ashutosh Singare Logo"
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
            </div>

            <span className="font-mono font-medium tracking-[0.16em] text-xs sm:text-sm text-white/90 uppercase group-hover:text-white transition-colors duration-300">
              Ashutosh{" "}
              <span className="font-bold text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] transition-all">
                Singare
              </span>
            </span>
          </a>

          {/* Center Nav Links - Linear / Raycast Style Spaced Capsule with Generous Click Targets */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-[22px] xl:gap-[26px] px-6 py-1 rounded-full z-10">
            {navItems.map((item) => {
              const isActive = activeLink === item.name;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveLink(item.name)}
                  whileHover={{ y: -1.5, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative px-5 py-2.5 rounded-full font-mono text-xs sm:text-[13px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isActive
                      ? "text-white font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                      : "text-white/70 hover:text-white font-medium"
                  }`}
                >
                  {/* Shared Layout Active Pill with Soft Shadows & Depth */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.22] via-white/[0.10] to-white/[0.04] border border-white/[0.32] shadow-[0_4px_18px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] -z-10"
                    />
                  )}
                  {item.name}
                </motion.a>
              );
            })}
          </div>

          {/* Unified Action Control Capsule: Linear, Arc & Raycast Inspired */}
          <div className="relative z-10 flex items-center">
            {/* Faint Ambient Blue Glow Behind Control (<10% opacity) */}
            <div className="absolute -inset-1.5 rounded-full bg-[#7F9CF5]/[0.08] blur-xl pointer-events-none -z-10" />

            {/* Shared Outer Glass Container */}
            <div className="relative flex items-center gap-1.5 sm:gap-2.5 h-[50px] sm:h-[52px] p-1.5 sm:p-2 rounded-full backdrop-blur-[30px] backdrop-saturate-150 bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-black/60 border border-white/[0.18] shadow-[0_8px_32px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.22)] ring-1 ring-white/[0.08] overflow-hidden">
              {/* Gentle Animated Highlight Sweep across Container (every 8-10s) */}
              <motion.div
                animate={{ left: ["-100%", "250%"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatDelay: 8,
                  ease: "easeInOut",
                }}
                className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.16] to-transparent pointer-events-none -skew-x-12 z-20"
              />

              {/* Secondary Action: Resume */}
              <motion.button
                type="button"
                whileHover={{ y: -1.5, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setIsResumeOpen(true)}
                title="View & Download Resume"
                className="relative flex items-center justify-center gap-2.5 h-full px-5 sm:px-6 rounded-full bg-transparent hover:bg-white/[0.12] border border-transparent hover:border-white/[0.25] text-white font-mono text-[13px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(127,156,245,0.22)] cursor-pointer group"
              >
                <FileCode className="w-4 h-4 text-[#7F9CF5] group-hover:rotate-[7deg] group-hover:scale-110 transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] shrink-0" />
                <span>Resume</span>
              </motion.button>

              {/* Vertical Divider with Generous Spacing */}
              <div className="h-5 w-[1px] bg-white/[0.20] mx-1 sm:mx-2 shrink-0" />

              {/* Primary Action CTA: Let's Talk */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative hidden sm:flex items-center justify-center gap-2.5 h-full px-6 sm:px-7 rounded-full bg-white hover:bg-[#F5F6FA] text-[#0B0D11] font-mono text-[13px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 shadow-[0_4px_16px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_26px_rgba(255,255,255,0.45)] group cursor-pointer"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 text-[#0B0D11] group-hover:translate-x-[6px] group-hover:-translate-y-[6px] transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] shrink-0" />
              </motion.a>
            </div>

            {/* Mobile Menu Toggle (hamburger) — replaces center nav links below lg */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              className="lg:hidden relative z-10 flex items-center justify-center w-[50px] h-[50px] sm:w-[52px] sm:h-[52px] ml-2 sm:ml-2.5 rounded-full backdrop-blur-[30px] backdrop-saturate-150 bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-black/60 border border-white/[0.18] ring-1 ring-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.22)] text-white hover:bg-white/[0.1] transition-colors cursor-pointer shrink-0"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Optional Page Progress Indicator directly beneath navbar */}
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#7F9CF5] to-transparent origin-left rounded-full pointer-events-none opacity-80"
          />
        </motion.nav>

        {/* Mobile Navigation Dropdown Panel (below lg) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden absolute top-full left-0 right-0 mt-3 z-40 origin-top rounded-3xl p-2.5 backdrop-blur-[35px] backdrop-saturate-200 bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-black/70 border border-white/[0.18] ring-1 ring-white/[0.08] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.2)] pointer-events-auto"
            >
              <nav className="flex flex-col">
                {navItems.map((item) => {
                  const isActive = activeLink === item.name;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setActiveLink(item.name);
                        setIsMenuOpen(false);
                      }}
                      className={`px-5 py-3.5 rounded-2xl font-mono text-sm uppercase tracking-[0.16em] transition-colors ${
                        isActive
                          ? "text-white bg-white/[0.08] font-bold"
                          : "text-white/70 hover:text-white hover:bg-white/[0.05] font-medium"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}

                {/* Primary CTA inside menu */}
                <a
                  href="#contact"
                  onClick={() => {
                    setActiveLink("Contact");
                    setIsMenuOpen(false);
                  }}
                  className="mt-2 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-white hover:bg-[#F5F6FA] text-[#0B0D11] font-mono text-sm font-semibold tracking-[0.12em] uppercase transition-colors"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </LayoutContainer>

      {/* In-Page Fixed Size Resume Modal Viewer */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md pointer-events-auto select-none"
          >
            {/* Modal Dialog Window */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl h-[86vh] flex flex-col bg-[#12141A] border border-white/20 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Top Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/[0.04] border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#7F9CF5]/15 border border-[#7F9CF5]/30 flex items-center justify-center text-[#7F9CF5]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm sm:text-base tracking-wide">
                      Ashutosh Singare — Curriculum Vitae
                    </h3>
                    <p className="text-white/50 text-xs font-mono">
                      PDF Document // Verified Size
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Download Action */}
                  <a
                    href="/resume/Ashutosh_Singare_Resume.pdf"
                    download="Ashutosh_Singare_Resume.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7F9CF5] hover:bg-[#6886e0] text-black font-mono text-xs uppercase font-semibold tracking-wider transition-colors shadow-lg cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(false)}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                    title="Close Viewer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Fixed Size PDF Container */}
              <div className="flex-1 w-full h-full bg-[#1e1e1e] relative overflow-hidden">
                <iframe
                  src="/resume/Ashutosh_Singare_Resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                  className="w-full h-full border-0 block"
                  title="Ashutosh Singare Resume PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
