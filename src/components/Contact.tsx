"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ArrowUpRight, Globe, Heart, Mail, Send } from "lucide-react";
import { LayoutContainer } from "./LayoutContainer";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const emailAddress = "ashutoshsingarehere@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      const subject = `Commission Inquiry: ${formData.name}`;
      const body = `${formData.message}\n\n---\nClient Name: ${formData.name}\nClient Email: ${formData.email}`;
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setTimeout(() => setSent(false), 7000);
    }, 1200);
  };

  const socials = [
    { name: "GitHub ", href: "https://github.com/Ashutoshsingare" },
    { name: "LinkedIn ", href: "https://www.linkedin.com/in/ashutosh-singare-6ba2bb327/" },
  ];

  return (
    <footer id="contact" className="relative z-20 bg-[#121212] pt-48 sm:pt-64 pb-16 border-t border-white/20 overflow-hidden w-full">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.05] blur-[150px] pointer-events-none rounded-full" />

      <LayoutContainer>
        {/* Top Status */}            <div className="h-6"></div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20 pb-12 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/80">Open for Software Engineering Internships & Full-Time Roles</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>Bhopal, IN // UTC+5:30</span>
          </div>
        </div>

        {/* Massive Call To Action Header */}
        <div className="my-16 text-center flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40 mb-6 block">
                      <div className="h-6"></div>

            // Initiation Phase
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-white leading-[0.95] max-w-6xl mb-12 mx-auto">
            Let&apos;s build the <br />
            <span className="font-normal italic bg-gradient-to-r from-emerald-400 via-white to-white/40 bg-clip-text text-transparent">
              unforgettable.<div className="h-6"></div>
            </span>
          </h2>

          <p className="text-lg sm:text-2xl font-light text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Have a project in mind, a vision to realize, or looking for pair programming consulting? Message directly below.<div className="h-6"></div>
          </p>

          {/* Quick Action Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-xl mx-auto mb-20">
            <a
              href={`mailto:${emailAddress}`}
              
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white font-mono text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-3 group"
            ><div className="h-6"></div>
              <Mail className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>{emailAddress}</span>
            </a>

            <button
              onClick={handleCopy}
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white font-mono text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Copy className="w-4 h-4 text-white/60" />
              <span>{copied ? "Copied To Clipboard!" : "Copy Email Address"}</span>
              
            </button>
            
          </div>

          {/* Direct Transmission Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-white/[0.015] border border-white/[0.08] backdrop-blur-2xl text-left shadow-2xl relative overflow-hidden mb-16"
          >
            
            <div className="h-6"></div>
            {/* Top Glowing Edge Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-cyan-400 to-transparent opacity-60" />

            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-emerald-400">
                <Send className="w-3.5 h-3.5 animate-pulse" />
                <span>// Direct Messaging Portal</span>
              </div>
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest hidden sm:inline">Instant Mailto Protocol</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-white/60 pl-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alan Turing"
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-400 focus:bg-white/[0.06] text-white text-sm font-light outline-none transition-all placeholder:text-white/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-white/60 pl-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alan@turing.ac.uk"
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-400 focus:bg-white/[0.06] text-white text-sm font-light outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-wider text-white/60 pl-1">Project Scope / Direct Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your vision, timeline, or engineering requirements..."
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-400 focus:bg-white/[0.06] text-white text-sm font-light outline-none transition-all placeholder:text-white/20 resize-none leading-relaxed"
                />
                
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className={`w-full py-5 mt-2 rounded-full font-mono text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-lg ${
                  sent
                    ? "bg-emerald-500 text-black font-semibold shadow-[0_0_30px_rgba(16,185,129,0.8)] cursor-default"
                    : sending
                    ? "bg-white/10 text-white/50 border border-white/20 cursor-wait"
                    : "bg-white text-black hover:bg-emerald-400 hover:scale-[1.01] shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(52,211,153,0.8)]"
                }`}
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4 animate-bounce" />
                    <span>Dispatched To Mail Client!</span>
                  </>
                ) : sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Encoding & Launching Mailer...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Dispatch Direct Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
          <div className="h-6"></div>
        </div>

        {/* Centered Social Links - Navbar Capsule Style */}
        <div className="flex items-center justify-center py-12 border-t border-white/[0.06] w-full">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-2 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/[0.12] shadow-2xl mx-auto">
            {socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-transparent hover:bg-white text-white/75 hover:text-black font-mono text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] font-semibold scale-100 active:scale-95"
              >
                <span>{soc.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Credits Footer */}
        <div className="mt-24 pt-8 border-t border-white/[0.05] flex flex-col items-center justify-center text-center gap-4 text-xs font-mono text-white/30 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Ashutosh Singare. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 justify-center">
           
          </p>
          <a href="#" className="hover:text-white transition-colors mt-2 block">Back to Top ↑</a>
        </div>
      </LayoutContainer>
    </footer>
  );
};
