"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";
import { ArrowUpRight, TrendingUp, ShieldCheck, CheckCircle2, Star } from "lucide-react";

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 40]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0.7]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[94vh] lg:min-h-screen pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 overflow-hidden flex flex-col justify-between items-center bg-white selection:bg-purple-600 selection:text-white"
    >
      {/* ── 1. BACKGROUND IMAGE LAYER (Phone & Floating Cards as the Hero Background) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Ambient Aurora Glows to blend seamlessly with background image */}
        <div className="ambient-glow w-[550px] h-[550px] -top-20 -left-20 bg-purple-200/50" />
        <div className="ambient-glow w-[600px] h-[600px] top-1/4 -right-24 bg-violet-200/40" />

        {/* The Exact Reference Background Image with Phone Mockup & Floating Cards */}
        <div className="absolute inset-x-0 bottom-0 top-16 md:top-24 flex items-end justify-center">
          <Image
            src="/images/hero-showcase.png"
            alt="X-One Hub Hero Background Canvas"
            fill
            priority
            className="object-contain object-bottom pointer-events-none select-none max-w-[1700px] mx-auto opacity-95"
            sizes="(max-width: 768px) 100vw, 1700px"
          />
        </div>

        {/* Fine grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed06_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      {/* ── 2. ALL TEXT & CTAS POSITIONED DIRECTLY ON TOP OF THE BACKGROUND ── */}
      <motion.div
        style={{ opacity: opacityParallax }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-10 w-full flex flex-col items-center text-center"
      >
        {/* Top Centered Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-purple-200/90 shadow-sm mb-5"
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-white shadow-xs">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </span>
          <span className="text-xs sm:text-sm font-semibold text-purple-900 tracking-wide">
            One Time Is Enough
          </span>
        </motion.div>

        {/* Main Headline Resting on the Background */}
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] tracking-tight leading-[1.14] text-[#0f0f17]"
          >
            Enhance your digital growth
            <br className="hidden sm:inline" />{" "}
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 align-baseline mt-2">
              {/* Left Pointer Speech Tag: 'Simple' */}
              <span className="relative inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100/90 backdrop-blur-sm text-purple-700 text-xs sm:text-sm font-semibold tracking-wide border border-purple-200/90 shadow-xs animate-bounce-subtle">
                <span>Simple</span>
                <ArrowUpRight className="w-3 h-3 text-purple-600" />
                <svg
                  className="absolute -bottom-1.5 right-3 w-2.5 h-2 text-purple-100"
                  viewBox="0 0 10 8"
                  fill="currentColor"
                >
                  <polygon points="0,0 10,0 5,8" />
                </svg>
              </span>

              <span className="text-[#0f0f17] font-bold">with</span>

              {/* Purple Pill Capsule Container for X-One Hub */}
              <span className="inline-flex items-center px-4 sm:px-6 py-1 sm:py-1.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-extrabold shadow-[0_8px_25px_rgba(124,58,237,0.35)] mx-1 transform -rotate-1 hover:rotate-0 transition-transform">
                <span>X-One Hub</span>
              </span>

              {/* Right Pointer Speech Tag: 'Reliable' */}
              <span className="relative inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100/90 backdrop-blur-sm text-purple-700 text-xs sm:text-sm font-semibold tracking-wide border border-purple-200/90 shadow-xs animate-bounce-subtle">
                <CheckCircle2 className="w-3 h-3 text-purple-600" />
                <span>Reliable</span>
                <svg
                  className="absolute -bottom-1.5 left-3 w-2.5 h-2 text-purple-100"
                  viewBox="0 0 10 8"
                  fill="currentColor"
                >
                  <polygon points="0,0 10,0 5,8" />
                </svg>
              </span>
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl font-light leading-relaxed"
        >
          From Amazon store management &amp; high-ROI advertising to US company formation,
          custom Shopify storefronts, and brand design. We handle the hard work so your business scales fast.
        </motion.p>

        {/* CTA Buttons Resting on Background */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="mt-7 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton onClick={onOpenQuote} dataCursor="Talk">
            <button className="group relative overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-display font-bold text-sm sm:text-base tracking-wide shadow-[0_10px_35px_rgba(124,58,237,0.35)] hover:shadow-[0_15px_45px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center gap-2.5">
              <span className="relative z-10 flex items-center gap-2">
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </MagneticButton>

          <Link
            href="/services"
            className="px-7 py-3.5 rounded-full border border-purple-200 hover:border-purple-400 bg-white/90 backdrop-blur-md hover:bg-purple-50 text-slate-700 hover:text-purple-800 font-semibold text-sm transition-all duration-300 shadow-sm flex items-center gap-2 group"
            data-cursor="Services"
          >
            <span>Explore All Services</span>
            <ArrowUpRight className="w-4 h-4 text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Trust & Guarantee Badges Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs text-slate-600 font-mono"
        >
          <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-purple-100">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            100% Guaranteed Setup
          </span>
          <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-purple-100">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
            Certified US &amp; Global Team
          </span>
          <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-purple-100">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
            120+ Brands Scaled
          </span>
        </motion.div>
      </motion.div>

      {/* Spacer to guarantee the background phone illustration is nicely revealed below the text */}
      <div className="relative z-10 w-full h-44 sm:h-56 md:h-72 lg:h-80 pointer-events-none" />
    </section>
  );
}
