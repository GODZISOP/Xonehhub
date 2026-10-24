"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export interface CharacterV1Props {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
}

/**
 * CharacterV1 - 3D Perspective Character Transformation (Skiper UI #31)
 */
export const CharacterV1: React.FC<CharacterV1Props> = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
  className = "",
}) => {
  const distance = index - centerIndex;

  // 3D perspective transforms driven by scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -25]);
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [distance * -8, 0, distance * 8]
  );
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [distance * -3, 0, distance * 3]
  );
  const z = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-Math.abs(distance) * 20, 20, -Math.abs(distance) * 20]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.04, 0.92]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.45, 1, 1, 0.45]
  );

  return (
    <motion.span
      className={`inline-block transform-gpu select-none ${className}`}
      style={{
        rotateX,
        rotateY,
        rotateZ,
        z,
        scale,
        opacity,
        transformStyle: "preserve-3d",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export interface Word3DProps {
  word: string;
  index: number;
  totalWords: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
}

/**
 * Word3D - Clean word-level 3D perspective reveal without layout collision
 */
export const Word3D: React.FC<Word3DProps> = ({
  word,
  index,
  totalWords,
  scrollYProgress,
  className = "",
}) => {
  const start = Math.max(0, (index / totalWords) * 0.4);
  const end = Math.min(1, start + 0.35);

  const rotateX = useTransform(scrollYProgress, [start, end], [25, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);

  return (
    <motion.span
      className={`inline-block mr-[0.25em] align-baseline ${className}`}
      style={{
        rotateX,
        opacity,
        transformOrigin: "bottom center",
      }}
    >
      {word}
    </motion.span>
  );
};

export interface ScrollParagraph3DProps {
  text: string;
  scrollYProgress: MotionValue<number>;
  className?: string;
  as?: "div" | "span" | "p";
}

export const ScrollParagraph3D: React.FC<ScrollParagraph3DProps> = ({
  text,
  scrollYProgress,
  className = "",
  as: Component = "span",
}) => {
  const words = text.split(" ");
  return (
    <Component className={className}>
      {words.map((word, idx) => (
        <Word3D
          key={`${word}-${idx}`}
          word={word}
          index={idx}
          totalWords={words.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </Component>
  );
};

export interface CharacterV2Props {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
}

export const CharacterV2: React.FC<CharacterV2Props> = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
  className = "",
}) => {
  const distance = index - centerIndex;

  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [distance * -10, 0, distance * 10]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.5]
  );

  return (
    <motion.span
      className={`inline-block transform-gpu select-none ${className}`}
      style={{
        rotateY,
        opacity,
        transformStyle: "preserve-3d",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export interface CharacterV3Props {
  icon?: string | React.ReactNode;
  label?: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
}

export const CharacterV3: React.FC<CharacterV3Props> = ({
  icon,
  label,
  index,
  centerIndex,
  scrollYProgress,
  className = "",
}) => {
  const distance = index - centerIndex;

  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [distance * -10, 0, distance * 10]
  );
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.5]
  );

  return (
    <motion.div
      className={`inline-flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-purple-100 shadow-md shadow-purple-950/5 transform-gpu ${className}`}
      style={{
        rotateX,
        rotateY,
        scale,
        opacity,
        transformStyle: "preserve-3d",
      }}
    >
      {typeof icon === "string" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={icon} alt={label || "Icon"} className="w-8 h-8 object-contain" />
      ) : (
        icon
      )}
      {label && (
        <span className="mt-1 text-[11px] font-mono uppercase tracking-wider text-slate-600 font-semibold">
          {label}
        </span>
      )}
    </motion.div>
  );
};

export interface Skiper31Props {
  text?: string;
  className?: string;
  perspective?: string;
}

export const Skiper31: React.FC<Skiper31Props> = ({
  text = "WHY X-ONE HUB",
  className = "",
  perspective = "600px",
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 28,
    mass: 0.2,
  });

  const chars = text.split("");
  const centerIndex = Math.floor(chars.length / 2);

  return (
    <div
      ref={targetRef}
      className={`relative w-full flex items-center justify-center overflow-hidden py-10 ${className}`}
    >
      <div
        className="w-full text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-slate-900"
        style={{ perspective }}
      >
        {chars.map((char, index) => (
          <CharacterV1
            key={index}
            char={char}
            index={index}
            centerIndex={centerIndex}
            scrollYProgress={smoothProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default Skiper31;
