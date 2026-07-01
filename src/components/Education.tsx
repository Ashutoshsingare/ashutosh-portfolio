"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutContainer } from "./LayoutContainer";

const educationEvents = [
  {
    year: "2021",
    badge: "Completed",
    title: "Class 10 (Secondary)",
    institution: "Kendriya Vidhyalaya",
    detail: "CBSE Board",
    metric: "79%",
    metricLabel: "Aggregate",
    accentColor: "border-accent/30 text-accent bg-accent/10",
  },
  {
    year: "2023",
    badge: "Completed",
    title: "Class 12 (Higher Secondary)",
    institution: "Kendriya Vidhyalaya",
    detail: "CBSE Board",
    metric: "72.6%",
    metricLabel: "Aggregate",
    accentColor: "border-accent/30 text-accent bg-accent/10",
  },
  {
    year: "2023 — 2027",
    badge: "Pursuing",
    title: "B.Tech Computer Science Engineering",
    institution: "Oriental Institute of Science & Technology",
    detail: "Specialization in Data Science",
    metric: "7.44",
    metricLabel: "CGPA (Till 5th Sem)",
    accentColor: "border-accent/30 text-accent bg-accent/10",
  },
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative z-20 bg-[#0d0f12] py-48 sm:py-64 border-t border-white/[0.05] w-full overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-accent/[0.04] blur-[180px] pointer-events-none rounded-full" />

      <LayoutContainer>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8 text-left w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
              
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent">
                // Academic Trajectory
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white leading-none">
              Education.
            </h2>
            <div className="h-6"></div>
          </div>
          <p className="text-base sm:text-lg text-white/50 font-light max-w-md leading-relaxed">
            A chronological progression of rigorous academic foundation, mathematical sciences, and data engineering.
                        <div className="h-6"></div>

          </p>
        </div>

        {/* Vertical Spine Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-12">
          {/* Animated Vertical Laser Line */}
          <div className="absolute top-3 bottom-6 left-2 sm:left-4 w-[2px] bg-white/[0.08] overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-accent/80 via-accent to-accent/40 shadow-[0_0_12px_rgba(124,147,179,0.35)]"
            />
          </div>

          <div className="flex flex-col gap-16 sm:gap-20">
            {educationEvents.map((event, index) => (
              <motion.div
                key={`${event.year}-${event.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative group pl-6 sm:pl-10"
              >
                {/* Glowing Node Circle */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0d0f12] border-2 border-white/40 group-hover:border-accent group-hover:bg-accent group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(124,147,179,0)] group-hover:shadow-[0_0_16px_rgba(124,147,179,0.5)] z-10" />

                {/* Glass Card Box */}
                <div className="surface-card rounded-3xl p-8 sm:p-10 bg-white/[0.015] hover:bg-white/[0.035] border border-white/[0.06] hover:border-white/[0.2] backdrop-blur-xl transition-all duration-500 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs sm:text-sm text-accent tracking-widest uppercase block">
                        {event.year}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-widest border ${event.accentColor}`}>
                        {event.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-light tracking-tight text-white mb-2 group-hover:text-white/95 leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-base sm:text-lg font-normal text-white/85 mb-1">
                      {event.institution}
                    </p>
                    <p className="text-sm font-light text-white/50 leading-relaxed">
                      {event.detail}
                    </p>
                  </div>

                  {/* Metric Display */}
                  <div className="pt-6 lg:pt-0 border-t border-white/20 lg:border-l lg:pl-10 flex lg:flex-col items-baseline lg:items-end justify-between min-w-[140px]">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">
                      {event.metricLabel}
                    </span>
                    <span className="text-3xl sm:text-4xl font-light font-mono text-white tracking-tight">
                      {event.metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}            <div className="h-6"></div>

          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};
