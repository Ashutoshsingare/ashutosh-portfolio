"use client";

import React from "react";
import { LayoutGroup } from "framer-motion";
import { LoadingProvider } from "@/context/LoadingContext";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LoadingProvider>
      <LayoutGroup id="cinematic-portfolio">
        {children}
      </LayoutGroup>
    </LoadingProvider>
  );
};
