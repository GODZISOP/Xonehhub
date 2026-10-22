"use client";

import React, { useState } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-[#0f0f17] selection:bg-purple-600 selection:text-white">
      <CustomCursor />
      <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />
      <main className="relative z-10">{children}</main>
      <Footer onOpenQuote={() => setQuoteModalOpen(true)} />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
