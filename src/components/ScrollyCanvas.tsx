"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import { Loader } from "./Loader";
import { Overlay } from "./Overlay";

const TOTAL_FRAMES = 120;

export const ScrollyCanvas: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);

  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Scroll tracking across the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Kinetic spring damping for ultra-smooth 60fps playhead scrubbing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.0001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload all 120 WebP images into memory
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;

      const onImageLoad = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = loadedImages;
          // Smooth transition out of preloader
          setTimeout(() => {
            setIsLoading(false);
          }, 600);
        }
      };

      img.onload = onImageLoad;
      img.onerror = onImageLoad; // prevent hang if any frame fails
      loadedImages.push(img);
    }
  }, []);

  // Canvas rendering function implementing precise object-fit: cover mathematics
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = imagesRef.current[index];
    if (!ctx || !img) return;

    // Handle high DPI retina displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.width;
    const imgHeight = img.height;

    // Calculate cover dimensions
    const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const centerShiftX = (canvasWidth - imgWidth * ratio) / 2;
    const centerShiftY = (canvasHeight - imgHeight * ratio) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(
      img,
      0,
      0,
      imgWidth,
      imgHeight,
      centerShiftX,
      centerShiftY,
      imgWidth * ratio,
      imgHeight * ratio
    );
  };

  // Redraw when scroll frameIndex changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isLoading) return;
    const idx = Math.round(latest);
    if (idx !== currentFrameRef.current) {
      currentFrameRef.current = idx;
      requestAnimationFrame(() => renderFrame(idx));
    }
  });

  // Initial draw & window Resize handler
  useEffect(() => {
    if (isLoading) return;

    // Draw initial frame immediately
    renderFrame(currentFrameRef.current);

    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoading]);

  return (
    <>
      <Loader isLoading={isLoading} progress={loadProgress} />

      <section ref={containerRef} className="relative h-[500vh] bg-[#121212] w-full">
        {/* Sticky Viewport Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0 bg-[#121212]">
          <canvas
            ref={canvasRef}
            className="block w-full h-full"
          />
        </div>

        {/* Parallax Typography Overlay */}
        <Overlay scrollYProgress={smoothProgress} />
      </section>
    </>
  );
};
