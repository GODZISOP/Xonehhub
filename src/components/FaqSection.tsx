"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do I start working with X ONE HUB?",
    answer:
      "Getting started is simple. Send us a message through our contact form or WhatsApp. We will discuss your goals, recommend the right services, and give you a clear proposal, timeline, and fixed price.",
  },
  {
    question: "Can you help me if I live outside the United States?",
    answer:
      "Yes, absolutely! We specialize in helping international founders from across the world form US LLCs (Wyoming, Florida, Texas), get US tax EIN numbers, open US bank accounts, and set up verified Amazon Seller accounts without needing to visit the US.",
  },
  {
    question: "How long does US LLC formation take?",
    answer:
      "Most US LLC registrations take between 3 to 7 business days depending on the state chosen. We handle all paperwork, state filings, official registered agent service, and EIN tax registration for you.",
  },
  {
    question: "What is included in Amazon store setup?",
    answer:
      "We provide end-to-end setup: Amazon Seller Central registration, brand registry assistance, product hunting, listing copy with high-resolution imagery and A+ Content, and FBA shipment preparation.",
  },
  {
    question: "Do you offer ongoing management for Amazon ads (PPC)?",
    answer:
      "Yes! We provide full monthly Amazon advertising management. We optimize search terms, eliminate wasted ad spend, lower your ACOS, and scale profitable sales with regular transparent reports.",
  },
  {
    question: "How fast can you build my website or Shopify store?",
    answer:
      "Standard custom Shopify stores and business websites typically take 1 to 2 weeks from start to launch, including full branding, responsive mobile design, product catalog upload, and payment gateway connection.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 md:py-36 bg-white border-t border-purple-100 overflow-hidden">
      {/* Background ambient lighting */}
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
        className="ambient-glow w-[550px] h-[550px] top-1/3 -left-20 bg-purple-200/40 pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <SectionLabel number="07" text="Common Questions" />
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#0f0f17] tracking-tight">
            Frequently Asked <span className="gradient-text-purple">Questions</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base font-light">
            Got questions before getting started? Here are clear answers to the most common questions our clients ask.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#faf8ff] border-purple-300 shadow-[0_10px_30px_rgba(124,58,237,0.08)]"
                    : "bg-white border-purple-100/90 hover:border-purple-200 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-bold text-purple-600 bg-purple-50 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border border-purple-100">
                      0{idx + 1}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-[#0f0f17]">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-purple-600 text-white rotate-180" : "bg-purple-50 text-purple-700"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base font-light leading-relaxed border-t border-purple-100/60 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Need More Answers Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-[#0f0f17]">
                Have a question that isn&apos;t listed here?
              </div>
              <div className="text-xs text-slate-600 font-light">
                Feel free to message us on WhatsApp anytime for an instant response.
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/923322568950"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
