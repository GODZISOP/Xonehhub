"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
  brandName?: string;
  tagline?: string;
}

export function Preloader_004({
  onComplete,
  brandName = "X-ONE HUB",
  tagline = "DIGITAL GROWTH STUDIO",
}: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING");
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  // Number of staircase columns
  const numColumns = 6;

  // Progress counter animation from 0 to 100%
  useEffect(() => {
    // Lock body scroll while preloader is active
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds counting duration

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress < 35) {
        setStatusText("INITIALIZING ENVIRONMENT");
      } else if (currentProgress < 70) {
        setStatusText("LOADING CREATIVE ASSETS");
      } else if (currentProgress < 95) {
        setStatusText("PREPARING INTERFACES");
      } else {
        setStatusText("READY");
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDoneLoading(true);
          if (onComplete) onComplete();
        }, 300);
      }
    }, 25);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  // Clean up body overflow when unmounted
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Cubic-bezier easing for high-end luxury staircase animation
  const stairEase = [0.76, 0, 0.24, 1] as const;

  // Layer 1: Foreground Dark Columns (Top & Bottom)
  const topStairs = {
    initial: { y: "0%" },
    exit: (i: number) => ({
      y: "-100%",
      transition: {
        duration: 0.8,
        delay: i * 0.065,
        ease: stairEase,
      },
    }),
  };

  const bottomStairs = {
    initial: { y: "0%" },
    exit: (i: number) => ({
      y: "100%",
      transition: {
        duration: 0.8,
        delay: i * 0.065,
        ease: stairEase,
      },
    }),
  };

  // Layer 2: Secondary Accent Columns (Purple depth tier beneath foreground)
  const topAccent = {
    initial: { y: "0%" },
    exit: (i: number) => ({
      y: "-100%",
      transition: {
        duration: 0.95,
        delay: i * 0.065 + 0.08,
        ease: stairEase,
      },
    }),
  };

  const bottomAccent = {
    initial: { y: "0%" },
    exit: (i: number) => ({
      y: "100%",
      transition: {
        duration: 0.95,
        delay: i * 0.065 + 0.08,
        ease: stairEase,
      },
    }),
  };

  return (
    <motion.div
      key="double-stairs-preloader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.95,
          duration: 0.2,
        },
      }}
      className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden"
    >
      {/* ── 1. CENTER BRAND CONTENT (Fades out right before stairs open) ── */}
      <AnimatePresence>
        {!isDoneLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: -15,
              filter: "blur(6px)",
              transition: { duration: 0.35, ease: "easeInOut" },
            }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center p-6 text-center pointer-events-none"
          >
            {/* Top pill badge */}
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 font-mono text-[11px] tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(147,51,234,0.25)]">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span>{tagline}</span>
            </div>

            {/* Main Brand Title */}
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-4">
              X-ONE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400">HUB</span>
            </h1>

            {/* Status indicator */}
            <p className="font-mono text-xs sm:text-sm text-purple-200/60 uppercase tracking-widest mb-8">
              {statusText}
            </p>

            {/* Large Sleek Percentage Counter */}
            <div className="flex items-baseline gap-1 font-mono font-bold text-3xl sm:text-5xl text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">
              <span>{progress}</span>
              <span className="text-xl sm:text-2xl text-purple-400/60">%</span>
            </div>

            {/* Minimal Progress Line */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full mt-5 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 via-violet-400 to-indigo-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 2. DUAL-DIRECTION STAIRCASE ANIMATION LAYERS ── */}
      <div className="absolute inset-0 flex w-full h-full pointer-events-none">
        {[...Array(numColumns)].map((_, i) => (
          <div key={i} className="relative h-full flex-1 overflow-hidden">
            {/* TIER 2 (ACCENT TIER) - TOP HALF */}
            <motion.div
              custom={i}
              variants={topAccent}
              initial="initial"
              exit="exit"
              className="absolute top-0 left-0 w-full h-[50.5vh] bg-[#1a0c30] border-r border-purple-500/10 z-10"
            />

            {/* TIER 2 (ACCENT TIER) - BOTTOM HALF */}
            <motion.div
              custom={i}
              variants={bottomAccent}
              initial="initial"
              exit="exit"
              className="absolute bottom-0 left-0 w-full h-[50.5vh] bg-[#1a0c30] border-r border-purple-500/10 z-10"
            />

            {/* TIER 1 (FOREGROUND DARK TIER) - TOP HALF */}
            <motion.div
              custom={i}
              variants={topStairs}
              initial="initial"
              exit="exit"
              className="absolute top-0 left-0 w-full h-[50.5vh] bg-[#07060a] border-r border-white/[0.04] z-20"
            />

            {/* TIER 1 (FOREGROUND DARK TIER) - BOTTOM HALF */}
            <motion.div
              custom={i}
              variants={bottomStairs}
              initial="initial"
              exit="exit"
              className="absolute bottom-0 left-0 w-full h-[50.5vh] bg-[#07060a] border-r border-white/[0.04] z-20"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Export aliases matching Skiper UI Pro naming conventions
export const Skiper10 = Preloader_004;
export const DoubleStairsPreloader = Preloader_004;
export default Preloader_004;
