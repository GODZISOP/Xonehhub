"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";
import SectionLabel from "./ui/SectionLabel";
import { ArrowUpRight, Sparkles, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 80]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0.4]);

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
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col justify-between bg-white"
    >
      {/* Background Ambient Purple Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ambient-glow w-[550px] h-[550px] -top-20 -left-20 bg-purple-200/50 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="ambient-glow w-[650px] h-[650px] top-1/4 -right-32 bg-violet-200/40 pointer-events-none"
      />

      {/* Grid line accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed0a_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div
        style={{ opacity: opacityParallax }}
        className="relative max-w-7xl mx-auto px-6 md:px-10 w-full z-10"
      >
        {/* Top Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <SectionLabel number="01" text="E-Commerce & Digital Growth" />
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping inline-block" />
            <span>Open For New Clients</span>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Staggered Heading */}
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] tracking-tight leading-[0.98] text-[#0f0f17]">
              <motion.span
                initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block overflow-hidden"
              >
                <span className="inline-block">We Build & Scale</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block overflow-hidden mt-1 sm:mt-2"
              >
                <span className="inline-block gradient-text-purple">Global Brands</span>
              </motion.span>
            </h1>

            {/* Easy-to-read Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-8 text-lg sm:text-xl text-slate-600 max-w-xl font-light leading-relaxed"
            >
              From Amazon store management and profitable advertising to US company formation,
              branding, and custom online stores. We do the hard work so your business grows fast.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <MagneticButton onClick={onOpenQuote} dataCursor="Talk">
                <button className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-display font-bold text-base tracking-wide shadow-[0_10px_35px_rgba(124,58,237,0.35)] hover:shadow-[0_15px_45px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center gap-3">
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-200" />
                    Contact Us
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </MagneticButton>

              <Link
                href="/services"
                className="px-7 py-4 rounded-full border border-purple-200 hover:border-purple-400 bg-white hover:bg-purple-50 text-slate-700 hover:text-purple-800 font-semibold text-sm transition-all duration-300 shadow-sm flex items-center gap-2 group"
                data-cursor="Services"
              >
                <span>Explore All Services</span>
                <ArrowUpRight className="w-4 h-4 text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Credibility Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-purple-100 grid grid-cols-3 gap-6 max-w-lg"
            >
              <div>
                <div className="font-display font-bold text-2xl md:text-3xl text-[#0f0f17]">
                  120<span className="text-purple-600">+</span>
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-mono mt-1">
                  Projects Done
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl md:text-3xl text-[#0f0f17]">
                  80<span className="text-purple-600">+</span>
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-mono mt-1">
                  Global Clients
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl md:text-3xl text-[#0f0f17]">
                  100<span className="text-purple-600">%</span>
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-mono mt-1">
                  Satisfaction
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating 3D Cards with Gentle Floating Loop */}
          <div className="lg:col-span-5 relative h-[480px] sm:h-[560px] md:h-[620px] w-full flex items-center justify-center">
            {/* Visual Frame 1: Top Right Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -top-4 right-2 sm:right-6 w-44 sm:w-56 md:w-64 aspect-[4/3] rounded-2xl overflow-hidden border border-purple-200 shadow-[0_20px_45px_rgba(124,58,237,0.15)] z-20 will-change-transform bg-purple-50 group hover:shadow-[0_25px_60px_rgba(124,58,237,0.25)] transition-shadow"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px, 0) rotate(3deg)`,
              }}
            >
              <Image
                src="/images/hero-1.jpg"
                alt="Brand Design"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 180px, 260px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-3 text-[10px] font-mono uppercase tracking-wider text-purple-100 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                Brand & Design
              </div>
            </motion.div>

            {/* Visual Frame 2: Center Left Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, 8, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.35 },
                scale: { duration: 0.8, delay: 0.35 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
              className="absolute bottom-6 left-0 sm:left-4 w-52 sm:w-64 md:w-72 aspect-[3/4] rounded-2xl overflow-hidden border border-purple-200 shadow-[0_25px_50px_rgba(124,58,237,0.18)] z-10 will-change-transform bg-purple-50 group hover:shadow-[0_30px_65px_rgba(124,58,237,0.25)] transition-shadow"
              style={{
                transform: `translate3d(${mouseOffset.x * -0.6}px, ${mouseOffset.y * -0.6}px, 0) rotate(-2deg)`,
              }}
            >
              <Image
                src="/images/hero-2.jpg"
                alt="Creative Direction"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 220px, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f17]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[11px] font-mono text-purple-200 uppercase tracking-widest font-bold">
                  Amazon FBA & Growth
                </div>
                <div className="font-display font-bold text-white text-sm">
                  Turnkey Scaling
                </div>
              </div>
            </motion.div>

            {/* Visual Frame 3: Center Right Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.5 },
                scale: { duration: 0.8, delay: 0.5 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 },
              }}
              className="absolute top-28 sm:top-36 right-4 sm:right-12 w-48 sm:w-60 md:w-68 aspect-[4/3] rounded-2xl overflow-hidden border border-purple-200 shadow-[0_25px_50px_rgba(124,58,237,0.15)] z-15 will-change-transform bg-purple-50 group hover:shadow-[0_30px_65px_rgba(124,58,237,0.25)] transition-shadow"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0) rotate(1deg)`,
              }}
            >
              <Image
                src="/images/hero-3.jpg"
                alt="Digital Marketing"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 200px, 280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1.5 text-[10px] text-white font-mono">
                <TrendingUp className="w-3 h-3 text-purple-300" />
                <span>+347% Reach</span>
              </div>
            </motion.div>

            {/* Floating Glass Badge Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -bottom-2 right-6 sm:right-16 z-30 p-3.5 rounded-2xl border border-purple-200 bg-white/95 backdrop-blur-xl shadow-[0_15px_35px_rgba(124,58,237,0.15)] flex items-center gap-3"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px, 0)`,
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-slate-500 font-bold">
                  Certified Team
                </div>
                <div className="font-display font-bold text-[#0f0f17] text-sm">
                  100% Guaranteed Setup
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
