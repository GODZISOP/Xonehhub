"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import { Skiper35, DEFAULT_TESTIMONIALS } from "./v1/skiper35";
import { Sparkles, MousePointerClick } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 md:py-36 bg-white border-t border-purple-100 overflow-hidden">
      {/* Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ambient-glow w-[550px] h-[550px] top-1/2 right-1/4 bg-purple-200/40 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
        >
          <SectionLabel number="06" text="Client Reviews" />
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl text-[#0f0f17] tracking-tight">
            Trusted By <span className="gradient-text-purple">Global Founders</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base font-light">
            Real founders, real feedback, and long-term partnerships built on trust and reliable results.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-purple-700 text-xs font-mono">
            <MousePointerClick className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
            <span>Hover or tap any panel to expand full client story</span>
          </div>
        </motion.div>

        {/* Skiper UI #35: Hover Expand Showcase Gallery */}
        <div className="w-full">
          <Skiper35 items={DEFAULT_TESTIMONIALS} />
        </div>

        {/* Bottom Social Proof Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-12 pt-8 border-t border-purple-100 flex flex-wrap items-center justify-between gap-6 text-slate-500 text-xs font-mono"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-slate-800 font-semibold">100% Client Satisfaction Rate</span>
          </div>
          <div>All testimonials verified via direct founder partnerships</div>
          <div className="flex items-center gap-1.5 text-purple-700 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Award-Winning Creative Execution</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
