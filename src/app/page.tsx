"use client";

import React, { useState } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhySection from "@/components/WhySection";
import StatisticsSection from "@/components/StatisticsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
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
