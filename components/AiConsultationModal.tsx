"use client";

import React, { useState } from "react";
import { useApp } from "@/lib/store";
import { X, Sparkles, Wand2, ShieldAlert, Check, Copy, ArrowRight, Loader2, Sparkle, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AiConsultationModal() {
  const { aiConsultation, closeAiConsultation, openBooking } = useApp();
  const [formData, setFormData] = useState({
    skinType: "Dry Skin",
    eventType: "Grand Wedding",
    tonePreference: "Radiant, Dewy & Glowing",
    preferredStyle: "Classic Royal Elegance",
    specialConcerns: "Dryness and hyperpigmentation in dry climate",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const skinTypes = ["Dry Skin", "Oily / High Shine", "Sensitive / Reactive", "Combination Skin", "Normal Balances"];
  const eventTypes = ["Grand Wedding", "Cocktail & Pre-Wedding Reception", "High-Fashion Editorial Shoot", "Celebrity Red Carpet Gala", "Private Fashion Photoshoot"];
  const tonePreferences = ["Radiant, Dewy & Glowing", "Dimensional Velvet-Matte", "Sunkissed Bronzed Warmth", "Fresh Pastel Airbrush Base"];
  const preferredStyles = ["Classic Royal Elegance", "Sultry Smoldering Soft-Glam", "High-Fashion Graphic Avant-Garde", "Monochromatic Terracotta Nude"];

  const handleConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/gemini/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.recommendation) {
        setResult(data.recommendation);
      } else if (data.error) {
        setResult(`### Concierge Offline\n\n${data.error}`);
      }
    } catch (err) {
      setResult("### Concierge Unavailable\n\nOur beauty servers are currently re-aligning their palettes. Please try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {aiConsultation.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAiConsultation}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="relative w-full max-w-xl bg-white dark:bg-slate-950 h-full shadow-2xl flex flex-col z-10 border-l border-rose-100 dark:border-rose-950/40"
          >
            {/* Header */}
            <div className="p-6 border-b border-rose-100 dark:border-rose-950/40 bg-rose-50/50 dark:bg-rose-950/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-500/10 dark:bg-amber-400/5 rounded-full border border-amber-500/20">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">AI Beauty Concierge</h3>
                  <p className="text-[9px] uppercase tracking-widest font-mono text-amber-600 dark:text-amber-400">Bespoke Skincare & Makeup Curation</p>
                </div>
              </div>
              <button
                onClick={closeAiConsultation}
                className="p-2 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-full hover:scale-105 active:scale-95 transition-all"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {!result ? (
                <form onSubmit={handleConsultation} className="grid gap-6">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-rose-500 block mb-1">
                      — Curated by Suvo Dev AI Engine
                    </span>
                    <h4 className="font-serif text-lg uppercase text-slate-800 dark:text-slate-100">
                      Bespoke Palette Diagnostics
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Answer a few brief diagnostic details about your skin health and styling goal. Our server-side neural beauty coach will calculate a precise 4-step prep layer and paint guide specifically matching Suvo Dev&apos;s aesthetic standards.
                    </p>
                  </div>

                  {/* Skin Type selection */}
                  <div className="grid gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400">
                      1. What is your skin type?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {skinTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, skinType: type })}
                          className={`px-3.5 py-2 text-xs rounded-full border transition-all ${
                            formData.skinType === type
                              ? "bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400 font-medium"
                              : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Event type */}
                  <div className="grid gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400">
                      2. What event are we designing for?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {eventTypes.map((ev) => (
                        <button
                          key={ev}
                          type="button"
                          onClick={() => setFormData({ ...formData, eventType: ev })}
                          className={`px-3.5 py-2 text-xs rounded-full border transition-all ${
                            formData.eventType === ev
                              ? "bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400 font-medium"
                              : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50"
                          }`}
                        >
                          {ev}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tone preference */}
                  <div className="grid gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400">
                      3. Select your finish preference
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {tonePreferences.map((tone) => (
                        <button
                          key={tone}
                          type="button"
                          onClick={() => setFormData({ ...formData, tonePreference: tone })}
                          className={`px-3.5 py-2 text-xs rounded-full border transition-all ${
                            formData.tonePreference === tone
                              ? "bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400 font-medium"
                              : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50"
                          }`}
                        >
                          {tone}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Style */}
                  <div className="grid gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400">
                      4. What is your preferred look aesthetic?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {preferredStyles.map((style) => (
                        <button
                          key={style}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredStyle: style })}
                          className={`px-3.5 py-2 text-xs rounded-full border transition-all ${
                            formData.preferredStyle === style
                              ? "bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400 font-medium"
                              : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50"
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Concerns */}
                  <div className="grid gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      5. Specific skin concerns or hyper-pigmentation <span className="text-[9px] text-slate-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.specialConcerns}
                      onChange={(e) => setFormData({ ...formData, specialConcerns: e.target.value })}
                      placeholder="e.g. Occasional dryness on forehead, warm undertone, sweat breakout"
                      className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none dark:text-white transition-colors"
                    />
                  </div>

                  {/* Submit Trigger */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 mt-2 bg-gradient-to-r from-amber-500 to-rose-600 text-white font-serif text-xs uppercase tracking-widest rounded-full shadow-lg hover:shadow-rose-500/10 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        Mixing Color Pigments...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4 text-white" />
                        Curate Bespoke Experience
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* CONSULTATION RESULTS VIEW */
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid gap-6 pb-6"
                >
                  <div className="p-5 bg-gradient-to-br from-amber-500/5 to-rose-500/5 border border-amber-500/20 rounded-2xl flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 shadow-inner">
                      <Sparkle className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm uppercase text-slate-800 dark:text-white font-bold">Diagnostics Calculated Successfully</h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">Your bespoke skincare and glow formulation</p>
                    </div>
                  </div>

                  {/* Results Text Display */}
                  <div className="p-6 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-900 text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed font-sans max-h-[50vh] overflow-y-auto">
                    {result}
                  </div>

                  {/* Quick Options */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <button
                      onClick={handleCopy}
                      className="px-5 py-3 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 font-mono text-[10px] uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-1.5"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" /> Copied Consultation
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Save Diagnostic Summary
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => {
                        closeAiConsultation();
                        openBooking();
                      }}
                      className="px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white font-serif text-[10px] uppercase tracking-widest rounded-full shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      Reserve My Session <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Re-submit Button */}
                  <button
                    onClick={() => setResult(null)}
                    className="text-center text-[10px] uppercase font-mono tracking-widest text-slate-400 hover:text-rose-500 mt-2 transition-colors"
                  >
                    ← Recalculate Diagnostic Questionnaire
                  </button>
                </motion.div>
              )}
            </div>

            {/* Sticky Footnote safety info */}
            <div className="p-4 border-t border-rose-100 dark:border-rose-950/40 bg-rose-50/20 dark:bg-rose-950/5 flex items-center gap-2 justify-center text-[9px] text-slate-400 uppercase tracking-widest font-mono">
              <Heart className="w-3 h-3 text-rose-500 animate-pulse" /> Sanitized, Certified Professional Artistry
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
