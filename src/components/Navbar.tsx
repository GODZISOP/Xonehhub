"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "./ui/MagneticButton";
import {
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
  Phone,
  Mail,
  ChevronDown,
  ShoppingCart,
  BarChart3,
  Package,
  Briefcase,
  FileCheck2,
  Tag,
  Building2,
  Megaphone,
  Palette,
  Code2,
} from "lucide-react";

interface NavbarProps {
  onOpenQuote: () => void;
}

const SERVICES_DROPDOWN = [
  {
    category: "Amazon Growth",
    color: "text-orange-600",
    dot: "bg-orange-500",
    items: [
      { label: "Amazon Account Setup", href: "/services/amazon-account-creation", icon: ShoppingCart },
      { label: "Amazon PPC Ads", href: "/services/amazon-ppc-management", icon: BarChart3 },
      { label: "FBA Store (Hands-Free)", href: "/services/fba-store-automation", icon: Package },
      { label: "Product Hunting", href: "/services/amazon-product-hunting", icon: Briefcase },
      { label: "A+ Content & EBC", href: "/services/a-plus-content", icon: FileCheck2 },
      { label: "Brand Approvals", href: "/services/brand-approvals", icon: Tag },
      { label: "Wholesale Management", href: "/services/amazon-wholesale-fba", icon: ShoppingCart },
      { label: "Private Label", href: "/services/amazon-private-label", icon: Package },
      { label: "Trademark & Brand Registry", href: "/services/trademark-brand-registry", icon: FileCheck2 },
    ],
  },
  {
    category: "US Corporate",
    color: "text-blue-600",
    dot: "bg-blue-500",
    items: [
      { label: "Wyoming LLC — $350", href: "/services/wyoming-llc", icon: Building2 },
      { label: "Florida LLC — $500", href: "/services/florida-llc", icon: Building2 },
      { label: "Texas LLC — $550", href: "/services/texas-llc", icon: Building2 },
    ],
  },
  {
    category: "Design & Marketing",
    color: "text-purple-700",
    dot: "bg-purple-600",
    items: [
      { label: "Digital Marketing", href: "/services/digital-marketing", icon: Megaphone },
      { label: "Graphic Design & Branding", href: "/services/graphic-design", icon: Palette },
      { label: "Web Development", href: "/services/web-development", icon: Code2 },
    ],
  },
];

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setServicesDropdownOpen(false), 120);
  };

  const pageLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-white/95 backdrop-blur-xl border-b border-purple-100 shadow-[0_4px_30px_rgba(124,58,237,0.07)]"
            : "py-5 bg-white/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-4">
          {/* ── Logo ── */}
          <Link href="/" className="group flex items-center gap-3 select-none shrink-0">
            <div className="bg-[#0f0f17] px-3.5 py-1.5 rounded-xl border border-purple-300/40 shadow-sm flex items-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="X ONE HUB"
                width={125}
                height={48}
                className="h-8 md:h-9 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-purple-100 bg-white/80 backdrop-blur-md shadow-sm">
            {/* Home */}
            <Link
              href="/"
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-purple-700 hover:bg-purple-50/60 rounded-full transition-all"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <Link
                href="/services"
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-purple-700 hover:bg-purple-50/60 rounded-full transition-all flex items-center gap-1"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-purple-600" : ""}`}
                />
              </Link>

              {/* Mega Dropdown Panel */}
              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] p-5 rounded-2xl bg-white border border-purple-100 shadow-[0_20px_60px_rgba(124,58,237,0.15)] z-50 grid grid-cols-3 gap-5"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {SERVICES_DROPDOWN.map((group) => (
                    <div key={group.category}>
                      <div className="flex items-center gap-1.5 mb-3">
                        <span className={`w-2 h-2 rounded-full ${group.dot}`} />
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${group.color}`}>
                          {group.category}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        {group.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-all group/item"
                            >
                              <Icon className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-purple-600 shrink-0" />
                              <span>{item.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  {/* Footer strip */}
                  <div className="col-span-3 pt-3 border-t border-purple-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">15 services total</span>
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1 transition-colors"
                    >
                      <span>View all services</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              href="/about"
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-purple-700 hover:bg-purple-50/60 rounded-full transition-all"
            >
              About Us
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-purple-700 hover:bg-purple-50/60 rounded-full transition-all"
            >
              Contact
            </Link>

            {/* Privacy Policy */}
            <Link
              href="/privacy-policy"
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-purple-700 hover:bg-purple-50/60 rounded-full transition-all"
            >
              Privacy
            </Link>
          </nav>

          {/* ── Right Side CTA ── */}
          <div className="flex items-center gap-3">
            <MagneticButton onClick={onOpenQuote} dataCursor="Talk">
              <button className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-medium text-xs md:text-sm tracking-wide shadow-[0_4px_20px_rgba(124,58,237,0.35)] hover:shadow-[0_6px_25px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center gap-2">
                <span className="relative z-10 flex items-center gap-1.5 font-display font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-purple-200" />
                  Contact Us
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </MagneticButton>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-purple-200 bg-white text-slate-700 hover:text-purple-700 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[88%] max-w-sm bg-white border-l border-purple-100 flex flex-col shadow-2xl transition-transform duration-500 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-purple-100">
            <div className="bg-[#0f0f17] px-3 py-1.5 rounded-lg">
              <Image src="/logo.png" alt="X ONE HUB" width={90} height={35} className="h-6 w-auto object-contain" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-purple-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body — scrollable */}
          <div className="flex-1 overflow-y-auto py-5 px-5 space-y-1">

            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-xl font-display font-bold text-base text-slate-800 hover:text-purple-700 hover:bg-purple-50 transition-all"
            >
              Home
            </Link>

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl font-display font-bold text-base text-slate-800 hover:text-purple-700 hover:bg-purple-50 transition-all"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180 text-purple-600" : "text-slate-400"}`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 pl-4 space-y-4">
                  {SERVICES_DROPDOWN.map((group) => (
                    <div key={group.category}>
                      <div className="flex items-center gap-1.5 mb-1.5 px-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${group.dot}`} />
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${group.color}`}>
                          {group.category}
                        </span>
                      </div>
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-all"
                          >
                            <Icon className="w-4 h-4 text-slate-400 shrink-0" />
                            <span>{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 py-2 px-3 text-xs font-bold text-purple-700 hover:underline"
                  >
                    <span>See all {15} services</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Page Links */}
            {pageLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 px-4 rounded-xl font-display font-bold text-base text-slate-800 hover:text-purple-700 hover:bg-purple-50 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="border-t border-purple-100 p-5 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <Sparkles className="w-4 h-4 text-purple-200" />
              Contact Us
            </button>
            <div className="text-xs text-slate-500 space-y-2">
              <a
                href="mailto:info@xonehub.com"
                className="flex items-center gap-2 hover:text-purple-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-600" />
                info@xonehub.com
              </a>
              <a
                href="https://wa.me/923322568950"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-purple-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-purple-600" />
                +92-332-2568950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
