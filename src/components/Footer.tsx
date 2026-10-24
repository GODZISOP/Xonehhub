"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MessageCircle, MapPin, Sparkles } from "lucide-react";
import AnimatedFooter from "@/components/ui/animated-footer";

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-[#040406] text-white border-t border-white/[0.08] pt-20 pb-12 overflow-hidden">
      {/* Ambient ambient background lighting */}
      <div className="ambient-glow w-[500px] h-[500px] -bottom-24 left-1/2 -translate-x-1/2 bg-purple-700/10" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        {/* ── VengeanceUI Animated ASCII Hands & Reveal Heading (Above content, seamless without box) ── */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] overflow-hidden mb-12">
          <AnimatedFooter
            headingLines={["XONEHUB"]}
            leftImage="/animated-footer/hand-left.jpg"
            rightImage="/animated-footer/hand-right.jpg"
            background="transparent"
            textColor="#ffffff"
            charColor="#7c3aed"
            hoverColor="#c084fc"
            hoverCharColor="#ffffff"
            revealOnScroll={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-horizontal-white.png"
                alt="XoneHub"
                width={200}
                height={50}
                className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]"
              />
            </div>

            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed font-light">
              Crafting category-defining brand identities, high-converting digital storefronts, and performance marketing architectures for visionary founders worldwide.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-200" />
                <span>Contact Us</span>
              </button>
              <a
                href="https://wa.me/923322568950"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/10 hover:border-emerald-500/50 bg-white/[0.03] text-zinc-300 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400">
              Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-zinc-400 hover:text-white transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-zinc-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/services/fba-store-automation" className="text-zinc-400 hover:text-white transition-colors">
                  FBA Store Automation
                </a>
              </li>
              <li>
                <a href="/services/amazon-ppc-management" className="text-zinc-400 hover:text-white transition-colors">
                  Amazon PPC Ads
                </a>
              </li>
              <li>
                <a href="/services/wyoming-llc" className="text-zinc-400 hover:text-white transition-colors">
                  Wyoming LLC — $500
                </a>
              </li>
              <li>
                <a href="/services/brand-approvals" className="text-zinc-400 hover:text-white transition-colors">
                  Brand Approvals
                </a>
              </li>
              <li>
                <a href="/services/airwallex-account-setup" className="text-zinc-400 hover:text-white transition-colors">
                  Airwallex Account — $100
                </a>
              </li>
              <li>
                <a href="/services/stripe-account-setup" className="text-zinc-400 hover:text-white transition-colors">
                  Stripe Account — $100
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400">
              Official Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@xonehub.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-purple-300 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@xonehub.com</span>
              </a>

              <a
                href="https://wa.me/923322568950"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-zinc-300 hover:text-purple-300 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+92-332-2568950</span>
              </a>

              <div className="flex items-center gap-3 text-zinc-400">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Global Reach / Studio Hub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © 2026 <span className="text-zinc-300 font-semibold">X ONE HUB</span>. All rights reserved. Minimal movement, maximum impact.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-purple-300 transition-colors group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
