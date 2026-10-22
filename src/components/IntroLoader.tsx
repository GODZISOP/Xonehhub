"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

interface IntroLoaderProps {
  onComplete?: () => void;
}

const PHRASES = [
  { percent: 0, text: "INITIALIZING DIGITAL STUDIO" },
  { percent: 25, text: "ARCHITECTING BRAND IDENTITIES" },
  { percent: 55, text: "ENGINEERING HIGH-SPEED WEB PLATFORMS" },
  { percent: 80, text: "MAXIMIZING E-COMMERCE CONVERSION" },
  { percent: 95, text: "WELCOME TO X-ONE HUB" },
];

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(PHRASES[0].text);

  useEffect(() => {
    // Check if user has already seen intro in this session
    const hasSeenIntro = sessionStorage.getItem("xonehub_intro_seen");
    if (hasSeenIntro === "true") {
      setIsFinished(true);
      if (onComplete) onComplete();
      return;
    }

    // Smooth staggered progress counter
    let current = 0;
    const interval = setInterval(() => {
      // realistic dynamic increment
      const step = current < 30 ? 2 : current < 70 ? 3 : current < 90 ? 2 : 1;
      current = Math.min(100, current + step);
      setProgress(current);

      // update matching phrase
      for (let i = PHRASES.length - 1; i >= 0; i--) {
        if (current >= PHRASES[i].percent) {
          setCurrentPhrase(PHRASES[i].text);
          break;
        }
      }

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          sessionStorage.setItem("xonehub_intro_seen", "true");
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 1100);
        }, 400);
      }
    }, 28);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearInterval(interval);
        skipIntro();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  const skipIntro = () => {
    setIsExiting(true);
    sessionStorage.setItem("xonehub_intro_seen", "true");
    setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 600);
  };

  if (isFinished) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-auto select-none overflow-hidden font-display">
      {/* Top Half Shutter Panel */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 bg-[#ffffff] border-b border-purple-100 flex flex-col justify-end items-center pb-8 transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Ambient Purple Radiance in background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none" />

        {/* Brand Monogram & Eyebrow */}
        <div className="relative z-10 flex flex-col items-center mb-4">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-purple-700">
              Award-Winning Digital Growth Studio
            </span>
          </div>

          <div className="bg-[#0f0f17] px-4 py-2 rounded-xl shadow-md border border-purple-300/40 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="X ONE HUB"
              width={140}
              height={50}
              className="h-7 w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Half Shutter Panel */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#faf9ff] border-t border-purple-100 flex flex-col justify-start items-center pt-8 transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isExiting ? "translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Ambient Purple Radiance */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-violet-200/40 rounded-full blur-[100px] pointer-events-none" />

        {/* Dynamic Status / Phrase */}
        <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
          <div className="h-6 overflow-hidden">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-600 animate-pulse">
              {currentPhrase}
            </p>
          </div>

          {/* Luxury Laser Progress Bar */}
          <div className="w-64 sm:w-80 h-1.5 bg-purple-100 rounded-full overflow-hidden mt-4 relative border border-purple-200/60">
            <div
              className="h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 rounded-full transition-all duration-100 ease-out relative shadow-[0_0_15px_rgba(147,51,234,0.6)]"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_10px_#ffffff]" />
            </div>
          </div>

          {/* Coordinated Metrics Bar */}
          <div className="flex items-center justify-between w-64 sm:w-80 mt-3 text-[11px] font-mono text-slate-500">
            <span>SYS.OK • V2.4</span>
            <span className="font-bold text-purple-700">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Center Giant Counter Overlay (splits along the middle) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none transition-all duration-700 ${
          isExiting ? "scale-110 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="flex items-baseline gap-1 select-none">
          <span className="font-display font-extrabold text-7xl sm:text-9xl md:text-[10rem] tracking-tighter text-[#0f0f17] drop-shadow-sm">
            {progress < 10 ? `0${progress}` : progress}
          </span>
          <span className="font-display font-bold text-3xl sm:text-5xl text-purple-600">
            %
          </span>
        </div>
      </div>

      {/* Floating Skip Trigger for instant accessibility */}
      <button
        onClick={skipIntro}
        className="absolute top-6 right-6 z-30 px-4 py-2 rounded-full bg-white/90 hover:bg-white border border-purple-200 hover:border-purple-400 text-slate-700 hover:text-purple-700 font-mono text-xs tracking-wider transition-all shadow-sm flex items-center gap-1.5 group backdrop-blur-md"
      >
        <span>SKIP INTRO</span>
        <span className="text-[10px] text-slate-400 group-hover:text-purple-600">[ESC]</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Ambient Sound Equalizer Aesthetic Badge in top-left */}
      <div className="absolute top-6 left-6 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-purple-200 backdrop-blur-md shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600">
          Studio Experience • 60 FPS
        </span>
        <div className="flex items-end gap-0.5 h-3 ml-1">
          <span className="w-0.5 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-0.5 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-0.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
