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
  MessageCircle,
  ChevronDown,
  ShoppingCart,
  BarChart3,
  Package,
  Briefcase,
  FileCheck2,
  Tag,
  Building2,
  CreditCard,
  Landmark,
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
      { label: "Wyoming LLC — $500", href: "/services/wyoming-llc", icon: Building2 },
      { label: "Florida LLC — $500", href: "/services/florida-llc", icon: Building2 },
      { label: "Texas LLC — $550", href: "/services/texas-llc", icon: Building2 },
    ],
  },
  {
    category: "Bank Account Creation",
    color: "text-emerald-600",
    dot: "bg-emerald-500",
    items: [
      { label: "Stripe Account — $100", href: "/services/stripe-account-setup", icon: CreditCard },
      { label: "Wise Account — $100", href: "/services/wise-account-setup", icon: CreditCard },
      { label: "Payoneer Account — $100", href: "/services/payoneer-account-setup", icon: CreditCard },
      { label: "Airwallex Account — $100", href: "/services/airwallex-account-setup", icon: CreditCard },
      { label: "Chase Bank Setup — $1,500", href: "/services/chase-bank-setup", icon: Landmark },
      { label: "Bank of America — $1,500", href: "/services/bank-of-america-setup", icon: Landmark },
    ],
  },
];

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

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
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 sm:py-3 bg-white/95 backdrop-blur-xl border-b border-purple-100 shadow-[0_4px_30px_rgba(124,58,237,0.07)]"
            : "py-3.5 sm:py-5 bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between gap-3">
          {/* ── Logo ── */}
          <Link href="/" className="group flex items-center gap-2 select-none shrink-0">
            <div className="bg-[#0f0f17] px-3 py-1.5 rounded-xl border border-purple-300/40 shadow-sm flex items-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="X ONE HUB"
                width={120}
                height={40}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop Nav (lg:flex) ── */}
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
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-purple-600" : ""
                  }`}
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

          {/* ── Right Side Actions ── */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Contact Us CTA */}
            <MagneticButton onClick={onOpenQuote} dataCursor="Talk">
              <button className="hidden sm:flex relative group overflow-hidden px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-medium text-xs md:text-sm tracking-wide shadow-[0_4px_20px_rgba(124,58,237,0.35)] hover:shadow-[0_6px_25px_rgba(124,58,237,0.5)] transition-all duration-300 items-center gap-2">
                <span className="relative z-10 flex items-center gap-1.5 font-display font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-purple-200" />
                  Contact Us
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </MagneticButton>

            {/* Quick WhatsApp button for mobile screens */}
            <a
              href="https://wa.me/923322568950"
              target="_blank"
              rel="noreferrer"
              className="sm:hidden p-2 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
            </a>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-purple-200 bg-white text-slate-700 hover:text-purple-700 active:scale-95 transition-all shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-purple-700" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Navigation Drawer ── */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer slide-in panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[88%] max-w-sm bg-white border-l border-purple-100 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-purple-100">
            <div className="bg-[#0f0f17] px-3 py-1.5 rounded-xl">
              <Image src="/logo.png" alt="X ONE HUB" width={100} height={36} className="h-7 w-auto object-contain" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-purple-700 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body — Scrollable with all links & services */}
          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-xl font-display font-bold text-base text-slate-800 hover:text-purple-700 hover:bg-purple-50 transition-all"
            >
              <span>Home</span>
            </Link>

            {/* Services Accordion */}
            <div className="rounded-2xl border border-purple-100/80 bg-purple-50/40 p-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl font-display font-bold text-base text-purple-900 transition-all"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>All Services (15)</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-purple-600" : "text-slate-400"
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 space-y-3 pt-2 border-t border-purple-100">
                  {SERVICES_DROPDOWN.map((group) => (
                    <div key={group.category} className="space-y-1">
                      <div className="flex items-center gap-1.5 px-3 py-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${group.dot}`} />
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
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2.5 py-2 px-3 rounded-xl text-xs font-medium text-slate-700 hover:text-purple-700 hover:bg-white transition-all"
                            >
                              <Icon className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                              <span>{item.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  <div className="pt-2">
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-purple-600 text-white font-mono text-xs font-bold hover:bg-purple-700 transition-colors shadow-sm"
                    >
                      <span>Explore All Services Page</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other Dedicated Pages */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-xl font-display font-bold text-base text-slate-800 hover:text-purple-700 hover:bg-purple-50 transition-all"
            >
              <span>About Us</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-xl font-display font-bold text-base text-slate-800 hover:text-purple-700 hover:bg-purple-50 transition-all"
            >
              <span>Contact Us</span>
            </Link>

            <Link
              href="/privacy-policy"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-xl font-display font-bold text-base text-slate-800 hover:text-purple-700 hover:bg-purple-50 transition-all"
            >
              <span>Privacy Policy</span>
            </Link>
          </div>

          {/* Drawer Footer CTA */}
          <div className="border-t border-purple-100 p-4 sm:p-5 space-y-3 bg-slate-50">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(124,58,237,0.35)] active:scale-98 transition-all"
            >
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>Contact Us Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between pt-1 text-xs text-slate-600">
              <a
                href="https://wa.me/923322568950"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-emerald-700 font-semibold hover:underline"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:info@xonehub.com"
                className="flex items-center gap-1.5 text-purple-700 font-semibold hover:underline"
              >
                <Mail className="w-4 h-4 text-purple-600" />
                <span>info@xonehub.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
