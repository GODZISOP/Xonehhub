"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader_004 from "@/components/v1/skiper10";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import SolutionsSection from "@/components/SolutionsSection";
import PortfolioStackSection from "@/components/PortfolioStackSection";
import SvgFollowScrollSection from "@/components/SvgFollowScrollSection";
import WhySection from "@/components/WhySection";
import StatisticsSection from "@/components/StatisticsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import { Skiper44 } from "@/components/v1/skiper44";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="relative min-h-screen bg-[#060608] text-[#f4f4f6] selection:bg-purple-600 selection:text-white">
      {/* ── Skiper UI #10: Double Stairs Preloader (Preloader_004) ── */}
      <AnimatePresence mode="wait">
        {showPreloader && (
          <Preloader_004 onComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>
      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Top Award-Winning Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <HeroSection onOpenQuote={() => handleOpenQuote()} />

        {/* Dual Contra-Directional Infinite Marquee */}
        <MarqueeSection />

        {/* Solutions / Core Services Grid with 3D Tilt */}
        <SolutionsSection onSelectService={(service) => handleOpenQuote(service)} />

        {/* Sticky Stacking Cards Portfolio Section */}
        <PortfolioStackSection onOpenQuote={() => handleOpenQuote()} />

        {/* Skiper UI #19: Svg Follow Scroll Animation Section */}
        <SvgFollowScrollSection />

        {/* Studio Manifesto / Why X-One Hub */}
        <WhySection />

        {/* Animated Statistics */}
        <StatisticsSection />

        {/* 4-Step Engineering Process */}
        <ProcessSection />

        {/* Client Endorsements / Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Full Contact Form & Methods */}
        <CtaSection onOpenQuote={() => handleOpenQuote()} />

        {/* Skiper UI #44: Vercel Scroll With Blur Animation (Right before Footer) */}
        <Skiper44 onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Quote / Direct Inquiry Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        preselectedService={selectedService}
      />
    </div>
  );
}
