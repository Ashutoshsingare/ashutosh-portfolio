"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LoadingContextType {
  isLoading: boolean;
  isDocking: boolean;
  isReady: boolean;
  progress: number;
  setProgress: (progress: number | ((prev: number) => number)) => void;
  startDocking: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  isDocking: false,
  isReady: false,
  progress: 0,
  setProgress: () => {},
  startDocking: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDocking, setIsDocking] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  // When startDocking is called (after cinematic spin sequence or image loading finishes)
  const startDocking = () => {
    if (!isLoading) return;
    setIsLoading(false);
    setIsDocking(true);

    // FLIP transition flight takes ~800ms to land in the Navbar
    setTimeout(() => {
      setIsDocking(false);
      setIsReady(true);
    }, 850);
  };

  // Lock page scrolling until intro settles
  useEffect(() => {
    if (isLoading || isDocking) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading, isDocking]);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        isDocking,
        isReady,
        progress,
        setProgress,
        startDocking,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
