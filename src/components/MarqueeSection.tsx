"use client";

import React from "react";

export default function MarqueeSection() {
  const phrase = "We Help Brands Get Noticed ➺ ";
  const rowOneItems = [
    phrase,
    "Digital Marketing ➺ ",
    "Amazon Store Management ➺ ",
    "Brand Identity ➺ ",
    phrase,
    "Web Development ➺ ",
    "Creative Direction ➺ ",
  ];

  const rowTwoItems = [
    "We Help Brands Get Noticed ➺ ",
    "Shopify Storefronts ➺ ",
    "High-Converting Funnels ➺ ",
    "Visual Architecture ➺ ",
    phrase,
    "Global Impact ➺ ",
    "Performance Scaling ➺ ",
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-[#faf8ff] border-y border-purple-100 marquee-container select-none">
      {/* Edge fade gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#faf8ff] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#faf8ff] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Leftward Infinite Marquee */}
      <div className="overflow-hidden py-1">
        <div className="animate-marquee-left flex items-center whitespace-nowrap">
          {[...rowOneItems, ...rowOneItems].map((text, i) => (
            <span
              key={`row1-${i}`}
              className="inline-flex items-center mx-4 md:mx-8 font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#0f0f17] hover:text-purple-700 transition-colors duration-300"
            >
              {text.includes("➺") ? (
                <>
                  <span>{text.replace("➺", "").trim()}</span>
                  <span className="ml-4 md:ml-8 text-purple-600 font-normal">➺</span>
                </>
              ) : (
                text
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Infinite Marquee */}
      <div className="overflow-hidden py-1 mt-2">
        <div className="animate-marquee-right flex items-center whitespace-nowrap">
          {[...rowTwoItems, ...rowTwoItems].map((text, i) => (
            <span
              key={`row2-${i}`}
              className="inline-flex items-center mx-4 md:mx-8 font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-transparent hover:text-purple-600 transition-colors duration-300"
              style={{
                WebkitTextStroke: "1px rgba(124, 58, 237, 0.45)",
              }}
            >
              {text.includes("➺") ? (
                <>
                  <span>{text.replace("➺", "").trim()}</span>
                  <span className="ml-4 md:ml-8 text-indigo-500 font-normal">➺</span>
                </>
              ) : (
                text
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
