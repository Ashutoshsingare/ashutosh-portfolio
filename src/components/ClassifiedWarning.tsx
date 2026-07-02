"use client";

import React from "react";

export const ClassifiedWarning: React.FC = () => {
  return (
    <div className="w-full px-6 py-6 flex justify-center z-10 relative">
      <div
        className="group relative w-fit max-w-[95vw] px-4 py-3 sm:px-5 sm:py-3.5 rounded-[14px] border transition-all duration-250 ease-out hover:-translate-y-[2px] hover:shadow-[0_12px_32px_-8px_rgba(245,158,11,0.22)] select-none cursor-default overflow-hidden"
        style={{
          backgroundColor: "rgba(245, 158, 11, 0.06)",
          borderColor: "rgba(245, 158, 11, 0.25)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Subtle top edge highlight */}
        <div className="absolute top-0 inset-x-3 h-[1px] bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
          {/* Badge & Icon */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-250">
              ⚠
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#f59e0b]/95">
              Warning
            </span>
          </div>

          {/* Mysterious Easter Egg Message */}
          <p className="font-sans text-xs sm:text-sm leading-relaxed text-left sm:text-right">
            <span className="text-[#FAFAFA] font-medium tracking-tight">
              Do not click the top navbar logo three times...{" "}
            </span>
            <span className="text-[#A1A1AA] font-light italic">
              unless you mean it.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
