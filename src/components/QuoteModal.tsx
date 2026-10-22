"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { X, Sparkles, Send, CheckCircle2, MessageCircle, Mail } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  preselectedService,
}: QuoteModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("$3k - $10k");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService && !selectedServices.includes(preselectedService)) {
      setSelectedServices([preselectedService]);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const servicesList = [
    "Digital Marketing",
    "Amazon Store Management",
    "Graphic Design",
    "Web Development",
    "Full Brand Overhaul",
  ];

  const budgetTiers = ["< $3k", "$3k - $10k", "$10k - $25k", "$25k+"];

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#a855f7", "#6366f1", "#38bdf8", "#ec4899"],
      });
    } catch {
      // Ignore if confetti not supported
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello X ONE HUB Team,\n\nI would like to get a quote.\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nServices: ${selectedServices.join(
      ", "
    )}\nBudget: ${budget}\nProject Details: ${details}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-2xl transition-opacity"
        onClick={resetForm}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0b0b14] border border-purple-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 my-8 max-h-[92vh] overflow-y-auto">
        <button
          onClick={resetForm}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400">
              <Sparkles className="w-4 h-4" />
              <span>Direct Studio Inquiry</span>
            </div>

            <h3 className="mt-3 font-display font-extrabold text-2xl sm:text-3xl text-white">
              Let&apos;s Build Something <span className="gradient-text-purple">Extraordinary</span>
            </h3>
            <p className="mt-2 text-zinc-400 text-sm font-light">
              Fill out this quick brief and our leads will review your requirements within 12 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3">
                  1. Which solutions are you looking for?
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {servicesList.map((svc) => {
                    const isSelected = selectedServices.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        className={`text-xs font-medium px-4 py-2 rounded-full border transition-all ${
                          isSelected
                            ? "bg-purple-600 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                            : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                        }`}
                      >
                        {svc}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Tiers */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3">
                  2. Anticipated Budget Range
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {budgetTiers.map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setBudget(tier)}
                      className={`text-xs font-semibold py-2.5 px-3 rounded-xl border text-center transition-all ${
                        budget === tier
                          ? "bg-purple-600/30 border-purple-400 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                          : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alexander Vance"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@brand.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  WhatsApp / Phone (Optional for instant chat)
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000 or +92 300 0000000"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Project Vision & Scope
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell us about your brand, current challenges, and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 hover:from-purple-500 hover:to-indigo-500 text-white font-display font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Project Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Inquiry Received!
            </h3>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-md mx-auto font-light leading-relaxed">
              Thank you, <strong className="text-white">{name || "Visionary"}</strong>. Our strategy team at <strong className="text-purple-300">X ONE HUB</strong> has registered your requirements.
            </p>

            {/* Direct Connect Options */}
            <div className="mt-8 space-y-3 max-w-md mx-auto">
              <a
                href={`https://wa.me/923322568950?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center gap-2.5 transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp (+92-332-2568950)</span>
              </a>

              <a
                href={`mailto:info@xonehub.com?subject=Project Inquiry from ${name}&body=${whatsappMessage}`}
                className="w-full py-3.5 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2.5 transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Email Us at info@xonehub.com</span>
              </a>
            </div>

            <div className="mt-8">
              <button
                onClick={resetForm}
                className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
