"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop with mouse
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let rafId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;
      if (interactiveEl) {
        setIsHovered(true);
        setCursorText(interactiveEl.getAttribute("data-cursor") || "");
      } else if (target?.closest("a, button, input, textarea, select, [role='button']")) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      // Smooth lerp for trailing outer ring
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      setTrailing({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Follower Ring */}
      <div
        className="fixed top-0 left-0 rounded-full border border-purple-400/50 backdrop-blur-[1px] transition-all duration-300 ease-out flex items-center justify-center font-display text-[10px] tracking-wider uppercase text-white font-medium"
        style={{
          transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0) translate(-50%, -50%) scale(${
            isHovered ? (cursorText ? 2.8 : 1.7) : 1
          })`,
          width: 36,
          height: 36,
          backgroundColor: isHovered
            ? cursorText
              ? "rgba(139, 92, 246, 0.9)"
              : "rgba(139, 92, 246, 0.25)"
            : "transparent",
          borderColor: isHovered ? "rgba(192, 132, 252, 0.8)" : "rgba(168, 85, 247, 0.45)",
          boxShadow: isHovered ? "0 0 25px rgba(168, 85, 247, 0.4)" : "none",
        }}
      >
        {cursorText && (
          <span className="scale-[0.55] select-none text-white tracking-widest font-semibold">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center Precision Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white transition-transform duration-75 ease-out shadow-[0_0_8px_#ffffff]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isHovered ? 0.3 : 1
          })`,
        }}
      />
    </div>
  );
}
