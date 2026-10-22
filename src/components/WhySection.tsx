"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import MagneticButton from "./ui/MagneticButton";
import { ArrowUpRight, Flame, Layers, Eye, Zap, X, Sparkles, CheckCircle2 } from "lucide-react";

export default function WhySection() {
  const [visionsModalOpen, setVisionsModalOpen] = useState(false);

  const pillars = [
    {
      icon: Layers,
      title: "Clean & Purposeful",
      desc: "We don't do guesswork or random designs. Every page layout, button, and image is designed to turn your website visitors into paying buyers.",
    },
    {
      icon: Flame,
      title: "Fast & High Converting",
      desc: "Our stores load fast on all smartphones, our Amazon listings are built to win, and our marketing campaigns bring consistent daily sales.",
    },
    {
      icon: Eye,
      title: "Memorable Branding",
      desc: "Standing out is what wins customers. We create unique logos, packaging, and clean aesthetics that make your business look trusted and established.",
    },
    {
      icon: Zap,
      title: "Direct & Fast Communication",
      desc: "You speak directly to the creators doing the work. No endless account managers or delays. Fast updates, weekly milestones, and honest support.",
    },
  ];

  return (
    <section id="why-us" className="relative py-28 md:py-36 bg-white overflow-hidden border-t border-purple-100">
      {/* Background Animated Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ambient-glow w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-200/40 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        <SectionLabel number="03" text="Why Choose Us" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Sticky CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#0f0f17] tracking-tight">
                Why <span className="gradient-text-purple">X-One Hub</span>
              </h2>
              <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed font-light">
                We combine great creative design with real commercial performance. Built for ambitious founders who want reliable growth without complications.
              </p>
            </div>

            <div className="mt-10">
              <MagneticButton onClick={() => setVisionsModalOpen(true)} dataCursor="Vision">
                <button className="group px-7 py-3.5 rounded-full border border-purple-200 hover:border-purple-400 bg-purple-50 hover:bg-purple-100 text-purple-800 text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 shadow-sm">
                  <span>Read About Our Mission</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Column: Statement & 4 Pillars */}
          <div className="lg:col-span-7 space-y-10">
            {/* Statement Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="p-8 sm:p-10 rounded-3xl border border-purple-100 bg-[#faf8ff] shadow-[0_15px_40px_rgba(124,58,237,0.05)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-8xl font-display font-black text-purple-600/5 select-none pointer-events-none">
                X
              </div>
              <blockquote className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#0f0f17] leading-tight tracking-tight">
                <span className="block text-slate-800">What we do is simple —</span>
                <span className="block gradient-text-purple mt-2">
                  We build solutions that look beautiful and actually sell.
                </span>
                <span className="block text-slate-900 mt-2">
                  No wasted budgets, no confusing jargon.
                </span>
              </blockquote>
            </motion.div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="p-6 rounded-2xl border border-purple-100 bg-white hover:border-purple-300 hover:shadow-[0_15px_35px_rgba(124,58,237,0.08)] transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="mt-4 font-display font-bold text-lg text-[#0f0f17] group-hover:text-purple-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Visions Modal */}
      {visionsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setVisionsModalOpen(false)}
          />
          <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-purple-200 shadow-2xl p-6 sm:p-10 z-10 animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-6 border-b border-purple-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="font-display font-black text-2xl text-[#0f0f17]">
                  The X-ONE HUB Mission
                </h3>
              </div>
              <button
                onClick={() => setVisionsModalOpen(false)}
                className="p-2 rounded-xl text-slate-500 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                At X-ONE HUB, we believe starting and scaling an online business should be straightforward. Too many agencies charge high retainers while delivering generic templates that fail to convert.
              </p>
              <p>
                Our mission is to help global entrepreneurs launch and scale with confidence by providing complete <strong>done-for-you e-commerce, Amazon management, US company formation, and digital marketing</strong>.
              </p>
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 mt-4 space-y-2">
                <div className="font-display font-bold text-sm text-purple-900">
                  Our Commitments To Every Client:
                </div>
                <div className="flex items-start gap-2 text-xs text-purple-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Fast and clean websites that load quickly on any device.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-purple-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>100% compliant Amazon and US company setup with guaranteed approvals.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-purple-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Transparent communication, clear weekly updates, and honest results.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-100 flex justify-end">
              <button
                onClick={() => setVisionsModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
