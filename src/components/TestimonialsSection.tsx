"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "X ONE HUB took our cosmetics brand from idea to a high-converting international store. Their Shopify design and fast checkout delivered great results within our first month of launch.",
    author: "Elena Jin",
    role: "Founder",
    company: "Korean Skins Care",
    location: "Seoul / London",
    rating: 5,
  },
  {
    quote:
      "The logo and packaging design X ONE HUB created for Clothing Thrift Stores blew us away. They gave our clothing line a modern look that boosted both our footfall and online sales.",
    author: "Marcus Vance",
    role: "Co-Founder",
    company: "Clothing Thrift Stores",
    location: "Melbourne, Australia",
    rating: 5,
  },
  {
    quote:
      "Their social media video strategy brought a huge increase in reach and thousands of new buyers for Comfort Shoes. They really know how to make videos that convert viewers into sales.",
    author: "David Althaus",
    role: "Marketing Director",
    company: "Comfort Shoes",
    location: "Berlin, Germany",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 md:py-36 bg-white border-t border-purple-100 overflow-hidden">
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
        className="ambient-glow w-[500px] h-[500px] top-1/2 right-1/4 bg-purple-200/40 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <SectionLabel number="06" text="Client Reviews" />
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl text-[#0f0f17] tracking-tight">
            Trusted By <span className="gradient-text-purple">Global Founders</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base font-light">
            Real founders, real feedback, and long-term partnerships built on trust and reliable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="p-8 sm:p-10 rounded-3xl border border-purple-100 bg-[#faf8ff] hover:bg-white hover:border-purple-300 hover:shadow-[0_20px_45px_rgba(124,58,237,0.1)] transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-purple-600">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-purple-600 text-purple-600" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-purple-300 group-hover:text-purple-600 transition-colors" />
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-100 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-[#0f0f17] text-base">
                    {item.author}
                  </div>
                  <div className="text-xs text-purple-700 font-mono font-semibold">
                    {item.role} — {item.company}
                  </div>
                </div>
                <div className="text-[11px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded-md border border-purple-100">
                  {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
