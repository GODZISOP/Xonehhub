"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "info@xonehub.com",
    href: "mailto:info@xonehub.com",
    badge: "Replies within 4h",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92-332-2568950",
    href: "https://wa.me/923322568950",
    badge: "Usually instant",
  },
  {
    icon: Phone,
    label: "Direct Call",
    value: "+92-332-2568950",
    href: "tel:+923322568950",
    badge: "9am–9pm PKT",
  },
  {
    icon: MapPin,
    label: "Studio Location",
    value: "Global Reach / Studio Hub",
    href: "#",
    badge: "Karachi, PK · Remote",
  },
];

const serviceOptions = [
  "Amazon Account Setup & FBA",
  "Amazon PPC Advertising",
  "A+ Content & Brand Store",
  "US LLC Formation (Wyoming / Florida / Texas)",
  "Graphic Design & Branding",
  "Custom Shopify Store / Web Development",
  "Digital Marketing (Meta / TikTok Ads)",
  "Full Brand Architecture",
  "Other / Custom Requirement",
];

interface CtaSectionProps {
  onOpenQuote?: () => void;
}

export default function CtaSection({ onOpenQuote }: CtaSectionProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#faf8ff] border-t border-purple-100 overflow-hidden">
      {/* Background ambient lighting */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ambient-glow w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-200/40 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <SectionLabel number="08" text="Contact Us" />
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#0f0f17] tracking-tight">
            Let&apos;s Build Something <span className="gradient-text-purple">Great Together</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base font-light">
            No delays, no complications. Direct access to our team. Send us your requirements and we&apos;ll get back to you with a custom plan.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Methods & Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <h3 className="font-display font-black text-2xl text-[#0f0f17]">
                Get In Touch
              </h3>
              <p className="mt-2 text-sm text-slate-600 font-light">
                Choose your preferred channel. We are responsive and ready to help.
              </p>
            </div>

            <div className="space-y-3.5">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <a
                    key={idx}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                    className="block p-4 sm:p-5 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 hover:shadow-[0_10px_25px_rgba(124,58,237,0.08)] transition-all group shadow-sm"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                          {method.label}
                        </div>
                        <div className="font-display font-bold text-sm text-[#0f0f17] truncate">
                          {method.value}
                        </div>
                      </div>
                      <span className="shrink-0 text-[10px] font-mono text-purple-700 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full">
                        {method.badge}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* 24/7 Support Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-[0_10px_30px_rgba(124,58,237,0.3)]">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-purple-200" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-200">
                  Support Availability
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-purple-100 text-sm">Client Support</span>
                  <span className="font-display font-black text-xl text-white">24/7 Available</span>
                </div>
                <p className="text-xs text-purple-100 font-light leading-relaxed">
                  Our team is available 24 hours a day, 7 days a week on WhatsApp and email to answer questions, provide instant quotes, and support your business.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>Online 24/7 — Ready to assist</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-3xl border border-purple-100 shadow-[0_15px_40px_rgba(124,58,237,0.06)] overflow-hidden">
              <div className="px-8 pt-8 pb-6 border-b border-purple-100">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Free Project Inquiry
                </div>
                <h3 className="font-display font-black text-2xl text-[#0f0f17]">
                  Send Us Your Requirements
                </h3>
                <p className="mt-1 text-sm text-slate-600 font-light">
                  Tell us what you need and we will prepare a clear roadmap and quote for your project.
                </p>
              </div>

              {submitted ? (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="font-display font-black text-2xl text-[#0f0f17]">
                    Message Sent Successfully!
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 font-light max-w-sm mx-auto">
                    Thank you for reaching out. We will review your requirements and respond within 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-purple-600 text-white font-semibold text-xs hover:bg-purple-700 transition-colors shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-[#faf8ff] text-sm text-[#0f0f17] placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-[#faf8ff] text-sm text-[#0f0f17] placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Brand Ltd."
                        className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-[#faf8ff] text-sm text-[#0f0f17] placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-[#faf8ff] text-sm text-[#0f0f17] focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                      >
                        <option value="">Select a service…</option>
                        {serviceOptions.map((s, i) => (
                          <option key={i} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Estimated Budget (USD)
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-[#faf8ff] text-sm text-[#0f0f17] focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                    >
                      <option value="">Select a budget range…</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1500">$500 – $1,500</option>
                      <option value="1500-3000">$1,500 – $3,000</option>
                      <option value="3000-5000">$3,000 – $5,000</option>
                      <option value="5000+">$5,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe what you want to achieve, your timeline, or any questions you have…"
                      className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-[#faf8ff] text-sm text-[#0f0f17] placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-display font-bold text-sm tracking-wide shadow-[0_8px_25px_rgba(124,58,237,0.35)] hover:shadow-[0_12px_35px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Your Message…</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-mono">
                    We reply quickly within 4 business hours. You can also contact us anytime on WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
