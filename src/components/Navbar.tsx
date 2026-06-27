"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, FileText } from "lucide-react";
import { LayoutContainer } from "./LayoutContainer";

export const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Home");

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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-6 inset-x-0 w-full z-50 pointer-events-none"
    >
      <LayoutContainer className="pointer-events-auto">
        <nav className="relative flex items-center justify-between px-6 sm:px-8 py-4.5 sm:py-5 rounded-full backdrop-blur-3xl backdrop-saturate-200 bg-gradient-to-b from-white/[0.12] via-white/[0.05] to-black/40 border border-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.25)] ring-1 ring-white/[0.08] select-none w-full transition-all duration-500 hover:border-white/[0.25] hover:bg-gradient-to-b hover:from-white/[0.15] hover:via-white/[0.08] hover:to-black/50 overflow-hidden">
          {/* Liquid Specular Top Edge Light */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="font-sans font-light tracking-wider text-base text-white uppercase">
              Ashutosh <span className="font-semibold text-white/90">Singare</span>
            </span>
          </a>

          {/* Center Nav Links - Liquid Glass Capsule */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1.5 bg-white/[0.04] backdrop-blur-xl p-2 rounded-full border border-white/[0.12] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] z-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`relative px-5 xl:px-6 py-2 rounded-full text-xs sm:text-sm font-mono tracking-widest uppercase transition-all duration-300 ${
                  activeLink === item.name
                    ? "text-black bg-white font-semibold shadow-[0_0_25px_rgba(255,255,255,0.5)] scale-[1.02]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Action Toolbar: Resume & CTA */}
          <div className="flex items-center gap-3 relative z-10">
            <a
              href="/resume/Ashutosh_Singare_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Open Resume in New Tab"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.12] text-white font-mono text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-sm"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="relative group hidden sm:inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold overflow-hidden transition-transform active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)] ml-1"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </nav>
      </LayoutContainer>
    </motion.header>
  );
};
