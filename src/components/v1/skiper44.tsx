"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const WHEEL_ITEMS = [
  "8-figure Amazon storefronts",
  "verified Seller Central accounts",
  "high-converting A+ Content & EBC",
  "algorithmic Amazon PPC campaigns",
  "profitable Wholesale FBA pipelines",
  "compliant US LLC company formations",
  "US business bank accounts (Chase & BoA)",
  "brand ungating & LOA authorizations",
  "trademark & Amazon Brand Registry",
  "global financial rails (Stripe & Wise)",
  "hands-free FBA store automation",
  "sustainable Amazon revenue scale",
];

interface WheelRowProps {
  text: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  itemHeight: number;
  onClick?: () => void;
}

const WheelRow: React.FC<WheelRowProps> = ({
  text,
  index,
  total,
  scrollYProgress,
  itemHeight,
  onClick,
}) => {
  const step = 1 / (total - 1);
  const center = index * step;

  // Compute opacity based on distance from center
  const opacity = useTransform(
    scrollYProgress,
    [
      center - step * 2.2,
      center - step,
      center,
      center + step,
      center + step * 2.2,
    ],
    [0.08, 0.35, 1, 0.35, 0.08]
  );

  // Compute blur filter
  const blurVal = useTransform(
    scrollYProgress,
    [
      center - step * 2.2,
      center - step,
      center,
      center + step,
      center + step * 2.2,
    ],
    [10, 3.5, 0, 3.5, 10]
  );
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  // Subtle scale punch when in center focus
  const scale = useTransform(
    scrollYProgress,
    [
      center - step * 2,
      center - step,
      center,
      center + step,
      center + step * 2,
    ],
    [0.92, 0.97, 1.03, 0.97, 0.92]
  );

  return (
    <motion.div
      onClick={onClick}
      style={{
        height: itemHeight,
        opacity,
        filter,
        scale,
      }}
      className="flex items-center text-left select-none cursor-pointer origin-left transition-colors duration-300"
    >
      <span className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white whitespace-nowrap drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]">
        {text}
      </span>
    </motion.div>
  );
};

export interface Skiper44Props {
  onOpenQuote?: () => void;
  className?: string;
}

/**
 * Skiper44 - Vercel Scroll with Blur (Wheel Scroll with Blur)
 * Clean, minimal layout matching the exact reference:
 * Left: "We Design" (fixed, horizontally aligned)
 * Right: Vertical rolling wheel with blur and scaling transformations on scroll.
 * Zero cluttered top/bottom boxes.
 */
export const Skiper44: React.FC<Skiper44Props> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = WHEEL_ITEMS;
  const totalItems = items.length;

  const ITEM_HEIGHT = 88; // px

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    mass: 0.15,
  });

  // Vertical scroll transformation for the wheel column
  const maxOffset = (totalItems - 1) * ITEM_HEIGHT;
  const wheelY = useTransform(smoothProgress, [0, 1], [0, -maxOffset]);

  // Click row to jump scroll
  const handleItemClick = (index: number) => {
    if (!containerRef.current) return;
    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const totalHeight =
      containerRef.current.scrollHeight - window.innerHeight;
    const targetScroll =
      containerTop + (index / (totalItems - 1)) * totalHeight;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="capabilities-wheel"
      className={`relative h-[300vh] w-full bg-[#050508] text-white selection:bg-purple-600 ${className}`}
    >
      {/* ── Sticky Scene Viewport (h-screen) ── */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Radial Purple Glow Behind Center Text */}
        <div className="absolute w-[650px] h-[650px] rounded-full bg-purple-700/20 blur-[150px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-[radial-gradient(#272733_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

        {/* ── Main Stage: "We Scale" + Rolling Wheel ── */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-12 flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-7">
          {/* Left: Fixed "We Scale" */}
          <div className="shrink-0 flex items-center">
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white whitespace-nowrap leading-none select-none">
              We Scale
            </h2>
          </div>

          {/* Right: Rolling Wheel with Gradient Blur Mask */}
          <div
            className="relative overflow-hidden w-full md:w-auto"
            style={{
              height: ITEM_HEIGHT * 5, // Shows 5 rows (2 above, 1 center, 2 below)
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
            }}
          >
            {/* Scrolling Wheel Column */}
            <motion.div
              style={{
                y: wheelY,
                paddingTop: ITEM_HEIGHT * 2, // Centers the 1st item horizontally with "We Design"
              }}
              className="relative z-10 flex flex-col"
            >
              {items.map((item, idx) => (
                <WheelRow
                  key={idx}
                  text={item}
                  index={idx}
                  total={totalItems}
                  scrollYProgress={smoothProgress}
                  itemHeight={ITEM_HEIGHT}
                  onClick={() => handleItemClick(idx)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
