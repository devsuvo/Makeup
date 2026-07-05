"use client";

import React from "react";
import { bridalPackages } from "@/lib/data";
import { useApp } from "@/lib/store";
import { Check, Calendar, Star, MapPin, Heart, HelpCircle, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function BridalPackagesPage() {
  const { openBooking } = useApp();

  const faqs = [
    { q: "Do you offer pre-wedding trials?", a: "Yes! Bridal trials are available at our South Kolkata studio. During the 2-hour trial, we do facial analysis and try out skin hydration formulas. If you book our Premium or Royal packages, we credit 50% of the trial fee towards your balance." },
    { q: "How many family makeovers can your team manage on the wedding day?", a: "With Suvo Dev and our senior team assistants on site, we can easily manage up to 8-10 family soft-glams alongside the main bride. For larger wedding parties, we coordinate with trusted certified affiliate artists." },
    { q: "What happens if my wedding is outside Kolkata?", a: "We travel globally! For destination packages (like Rajasthan, Goa, or international locations), flights, travel transfers, and basic room accommodation for Suvo Dev and a supporting assistant are managed by the client or covered as custom add-ons." },
  ];

  return (
    <div className="py-12">
      {/* Editorial Header */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-20 border-b border-rose-100 dark:border-rose-950/10 mb-16">
        <div className="max-w-4xl mx-auto px-6 text-center grid gap-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
            — Royal Bridal Curation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
            Bridal Artistry Packages
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif max-w-2xl mx-auto leading-relaxed">
            Discover our tailored bridal systems, ranging from classic timeless elegance to full-day palatial dedication.
          </p>
        </div>
      </section>

      {/* Packages list Grid */}
      <section className="max-w-7xl mx-auto px-6 grid gap-12 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bridalPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                pkg.id === "premium-bridal-pack"
                  ? "bg-slate-950 text-white border-rose-500 shadow-2xl scale-[1.03] z-10"
                  : "bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-rose-100/50 dark:border-rose-950/20 shadow-lg hover:shadow-2xl"
              }`}
            >
              {/* Premium Glow Badge */}
              {pkg.id === "premium-bridal-pack" && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-rose-600 text-white text-[9px] uppercase tracking-widest font-mono font-bold px-3 py-1 rounded-full border border-rose-400/20">
                  Most Preferred Atelier Choice
                </span>
              )}

              <div className="grid gap-4">
                {/* Package Name */}
                <div className="grid gap-1">
                  <h3 className="font-serif text-lg font-bold uppercase tracking-wide">
                    {pkg.name}
                  </h3>
                  <p className={`text-[10px] font-serif leading-relaxed ${pkg.id === "premium-bridal-pack" ? "text-rose-300" : "text-rose-600"}`}>
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="my-2">
                  <span className={`text-[9px] uppercase tracking-widest font-mono ${pkg.id === "premium-bridal-pack" ? "text-slate-400" : "text-slate-500"}`}>Artistry Value</span>
                  <p className="font-serif text-3xl font-bold tracking-tight">
                    ₹{pkg.price.toLocaleString()}
                  </p>
                  <span className={`text-[9px] font-mono ${pkg.id === "premium-bridal-pack" ? "text-amber-400" : "text-amber-600"}`}>
                    Duration: {pkg.duration}
                  </span>
                </div>

                <div className={`h-[1px] ${pkg.id === "premium-bridal-pack" ? "bg-rose-950" : "bg-rose-100/50"} my-1`} />

                {/* Features List */}
                <div className="grid gap-2">
                  <span className={`text-[9px] uppercase tracking-widest font-mono ${pkg.id === "premium-bridal-pack" ? "text-slate-400" : "text-slate-500"}`}>Included features:</span>
                  <ul className="grid gap-2.5 text-[11px] font-sans">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={pkg.id === "premium-bridal-pack" ? "text-slate-300" : "text-slate-600 dark:text-slate-300"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`h-[1px] ${pkg.id === "premium-bridal-pack" ? "bg-rose-950" : "bg-rose-100/50"} my-1`} />

                {/* Target User / Best for */}
                <div>
                  <span className={`text-[9px] uppercase tracking-widest font-mono ${pkg.id === "premium-bridal-pack" ? "text-slate-400" : "text-slate-500"}`}>Perfect For:</span>
                  <p className={`text-[10px] font-serif leading-relaxed italic ${pkg.id === "premium-bridal-pack" ? "text-amber-300" : "text-amber-600"}`}>
                    &ldquo;{pkg.bestFor}&rdquo;
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-8 border-t border-rose-100/50 dark:border-rose-950/20">
                <button
                  onClick={() => openBooking(pkg.id)}
                  className={`w-full py-3 font-serif text-xs uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md ${
                    pkg.id === "premium-bridal-pack"
                      ? "bg-rose-600 hover:bg-rose-700 text-white"
                      : "bg-slate-950 hover:bg-black text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                  }`}
                >
                  Reserve Package <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package comparison table */}
      <section className="max-w-7xl mx-auto px-6 mb-24 overflow-x-auto">
        <h3 className="font-serif text-xl uppercase tracking-widest text-slate-950 dark:text-white text-center mb-10">Matrix Comparison</h3>
        <table className="w-full text-left border-collapse border border-rose-100 dark:border-rose-950 text-xs">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900 border-b border-rose-100 dark:border-rose-950">
              <th className="p-4 font-serif uppercase tracking-widest text-[10px]">Artistry Offerings</th>
              <th className="p-4 font-serif uppercase tracking-widest text-[10px]">Classic</th>
              <th className="p-4 font-serif uppercase tracking-widest text-[10px]">Premium</th>
              <th className="p-4 font-serif uppercase tracking-widest text-[10px]">Royal Atelier</th>
              <th className="p-4 font-serif uppercase tracking-widest text-[10px]">Destination</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-50 dark:divide-rose-950/40">
            <tr>
              <td className="p-4 font-bold">Artistry Performed By</td>
              <td className="p-4">Senior Artists</td>
              <td className="p-4 text-rose-500 font-bold">Suvo Dev</td>
              <td className="p-4 text-rose-500 font-bold">Suvo Dev</td>
              <td className="p-4 text-rose-500 font-bold">Suvo Dev</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Foundation Choice</td>
              <td className="p-4">HD Luminous</td>
              <td className="p-4">Airbrush / HD Premium</td>
              <td className="p-4">Gold-infused HD / Airbrush</td>
              <td className="p-4">Waterproof Airbrush Only</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Skin Prep Layers</td>
              <td className="p-4">2 Steps</td>
              <td className="p-4">4 Steps (Full lymphatic)</td>
              <td className="p-4">Gold-massage + eye patch</td>
              <td className="p-4">Climate-controlled micro-prep</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Event Outfits Covered</td>
              <td className="p-4">1 Look</td>
              <td className="p-4">1 Look</td>
              <td className="p-4 text-rose-500 font-bold">2 Looks (Ceremony + Rec)</td>
              <td className="p-4 text-rose-500 font-bold">Unlimited looks (3-Days)</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Emergency Kit</td>
              <td className="p-4">Basic Kit</td>
              <td className="p-4">Deluxe Kit</td>
              <td className="p-4">Luxury Gift Bag</td>
              <td className="p-4">Full kit + continuous touchups</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Package FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 mb-12">
        <h3 className="font-serif text-xl uppercase tracking-widest text-slate-950 dark:text-white text-center mb-10">Bridal Package FAQ</h3>
        <div className="grid gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-rose-50 dark:border-rose-950/10">
              <h4 className="font-serif text-sm uppercase text-slate-900 dark:text-white font-bold flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5 text-rose-500 shrink-0" /> {f.q}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-serif leading-relaxed pl-6">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
