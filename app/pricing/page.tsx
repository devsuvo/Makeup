"use client";

import React, { useState } from "react";
import { services, bridalPackages } from "@/lib/data";
import { useApp } from "@/lib/store";
import { Calculator, Sparkles, Plus, Check, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export default function PricingPage() {
  const { openBooking } = useApp();

  // Calculator states
  const [baseService, setBaseService] = useState("premium-bridal");
  const [airbrushUpgrade, setAirbrushUpgrade] = useState(false);
  const [familyMembersCount, setFamilyMembersCount] = useState(0);
  const [minkLashes, setMinkLashes] = useState(false);
  const [hairstylingUpgrade, setHairstylingUpgrade] = useState(false);

  // Pricing constants
  const pricesMap: { [key: string]: number } = {
    "classic-bridal": 25000,
    "premium-bridal": 45000,
    "royal-bridal": 65000,
    "destination-bridal": 85000,
    "party-makeup": 12000,
    "editorial-makeup": 20000,
  };

  const calculateTotal = () => {
    let total = pricesMap[baseService] || 45000;
    if (airbrushUpgrade) total += 8000;
    if (minkLashes) total += 2500;
    if (hairstylingUpgrade) total += 7500;
    total += familyMembersCount * 6000; // 6,000 per family member
    return total;
  };

  const handleLaunchBookingCalculated = () => {
    const total = calculateTotal();
    const serviceName = baseService.replace("-", " ").toUpperCase();
    const details = `Estimated Reservation: ${serviceName} with Airbrush: ${airbrushUpgrade ? "Yes" : "No"}, Family Members: ${familyMembersCount}, Mink Lashes: ${minkLashes ? "Yes" : "No"}, Hair styling: ${hairstylingUpgrade ? "Yes" : "No"}. Estimated Total: ₹${total.toLocaleString()}`;
    openBooking(undefined, undefined, details);
  };

  const addOns = [
    { title: "Mink Silk Lashes Upgrade", price: 2500, desc: "Premium featherlight double-stacked lashes reusable up to 15 times." },
    { title: "Hair Styling Collaboration", price: 7500, desc: "Bespoke styling, hair extension setup, and floral crown placement." },
    { title: "Outstation Artist Travel Surcharge", price: 15000, desc: "Flat rate for services scheduled beyond 50km from South Kolkata." },
    { title: "Premium Saree / Dupatta Draping", price: 3000, desc: "Precise pleating and micro-pinning matching physical silhouettes." },
  ];

  return (
    <div className="py-12">
      {/* Editorial Header */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-20 border-b border-rose-100 dark:border-rose-950/10 mb-16">
        <div className="max-w-4xl mx-auto px-6 text-center grid gap-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
            — Transparent Fees
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
            Our Investment Plans
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif max-w-2xl mx-auto leading-relaxed">
            Customize your cosmetic parameters and calculate real-time estimates with our interactive suite. No hidden surcharges.
          </p>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 mb-24 items-start">
        {/* Left column: Calculator parameters form */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-950 p-8 md:p-10 rounded-3xl border border-rose-100/50 dark:border-rose-950/20 shadow-xl grid gap-6 text-xs">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="w-5 h-5 text-rose-500" />
            <h2 className="font-serif text-lg uppercase font-bold tracking-wider">Atelier Customizer</h2>
          </div>

          {/* Base service selection */}
          <div className="grid gap-2">
            <label className="font-serif uppercase tracking-widest text-[9px] text-slate-400">Select Core Artistry Treatment</label>
            <select
              value={baseService}
              onChange={(e) => setBaseService(e.target.value)}
              className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none rounded-xl text-slate-600 dark:text-slate-300 font-serif font-semibold"
            >
              <option value="classic-bridal">Classic Bridal Makeover — ₹25,000</option>
              <option value="premium-bridal">Premium Radiant Bridal (By Suvo Dev) — ₹45,000</option>
              <option value="royal-bridal">Royal Atelier Bridal (Full-day) — ₹65,000</option>
              <option value="destination-bridal">Destination Multi-Day Bridal — ₹85,000</option>
              <option value="party-makeup">Pre-Wedding / Party Glamour — ₹12,000</option>
              <option value="editorial-makeup">Fashion / Editorial Campaign — ₹20,000</option>
            </select>
          </div>

          <div className="h-[1px] bg-rose-50 dark:bg-rose-950/20" />

          {/* Upgrades Checkbox buttons */}
          <div className="grid gap-3">
            <span className="font-serif uppercase tracking-widest text-[9px] text-slate-400">Exclusive Upgrades</span>

            {/* Airbrush */}
            <label className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900 border border-rose-100/10 hover:border-rose-300 rounded-xl cursor-pointer">
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  checked={airbrushUpgrade}
                  onChange={(e) => setAirbrushUpgrade(e.target.checked)}
                  className="w-4 h-4 accent-rose-600 cursor-pointer"
                />
                <div>
                  <h4 className="font-bold">Micro-atomized Airbrush Base</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Ultra-waterproof pore blurring layer.</p>
                </div>
              </div>
              <span className="font-mono text-rose-500">+ ₹8,000</span>
            </label>

            {/* Lashes */}
            <label className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900 border border-rose-100/10 hover:border-rose-300 rounded-xl cursor-pointer">
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  checked={minkLashes}
                  onChange={(e) => setMinkLashes(e.target.checked)}
                  className="w-4 h-4 accent-rose-600 cursor-pointer"
                />
                <div>
                  <h4 className="font-bold">Mink Silk Lashes Upgrade</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Dual-stacked featherlight luxury eyelashes.</p>
                </div>
              </div>
              <span className="font-mono text-rose-500">+ ₹2,500</span>
            </label>

            {/* Hairstyling */}
            <label className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900 border border-rose-100/10 hover:border-rose-300 rounded-xl cursor-pointer">
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  checked={hairstylingUpgrade}
                  onChange={(e) => setHairstylingUpgrade(e.target.checked)}
                  className="w-4 h-4 accent-rose-600 cursor-pointer"
                />
                <div>
                  <h4 className="font-bold">Hair Styling & Draper Collaboration</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Bespoke crown extensions and pleat lock.</p>
                </div>
              </div>
              <span className="font-mono text-rose-500">+ ₹7,500</span>
            </label>
          </div>

          <div className="h-[1px] bg-rose-50 dark:bg-rose-950/20" />

          {/* Family members counter range */}
          <div className="grid gap-2">
            <div className="flex justify-between items-center">
              <label className="font-serif uppercase tracking-widest text-[9px] text-slate-400">Additional Family Member Soft-Glams</label>
              <span className="font-mono text-rose-500 font-bold">{familyMembersCount} Guests</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              value={familyMembersCount}
              onChange={(e) => setFamilyMembersCount(parseInt(e.target.value))}
              className="w-full accent-rose-600 cursor-ew-resize"
            />
            <div className="flex justify-between text-[9px] text-slate-400 uppercase font-mono">
              <span>0 Guests</span>
              <span>₹6,000 per guest</span>
              <span>10 Guests Max</span>
            </div>
          </div>
        </div>

        {/* Right column: Calculated summary value box */}
        <div className="lg:col-span-5 bg-slate-950 text-white p-8 md:p-10 rounded-3xl border border-rose-600/30 shadow-2xl relative overflow-hidden grid gap-6 sticky top-24">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-rose-600/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-amber-400">— Artistry Estimate</span>
            <h3 className="font-serif text-xl uppercase font-bold tracking-wider mt-1">Summary Overview</h3>
          </div>

          <div className="grid gap-3 text-xs font-mono">
            {/* Base price */}
            <div className="flex justify-between border-b border-rose-950 pb-2.5">
              <span className="text-slate-400">Core Treatment base:</span>
              <span className="text-white">₹{(pricesMap[baseService] || 45000).toLocaleString()}</span>
            </div>

            {/* Upgrades */}
            {airbrushUpgrade && (
              <div className="flex justify-between border-b border-rose-950 pb-2.5 text-[11px]">
                <span className="text-slate-400">Micro-Airbrush upgrade:</span>
                <span className="text-rose-400">+ ₹8,000</span>
              </div>
            )}

            {minkLashes && (
              <div className="flex justify-between border-b border-rose-950 pb-2.5 text-[11px]">
                <span className="text-slate-400">Mink Silk Lashes:</span>
                <span className="text-rose-400">+ ₹2,500</span>
              </div>
            )}

            {hairstylingUpgrade && (
              <div className="flex justify-between border-b border-rose-950 pb-2.5 text-[11px]">
                <span className="text-slate-400">Hair & Saree collaboration:</span>
                <span className="text-rose-400">+ ₹7,500</span>
              </div>
            )}

            {familyMembersCount > 0 && (
              <div className="flex justify-between border-b border-rose-950 pb-2.5 text-[11px]">
                <span className="text-slate-400">Guests Soft Glam ({familyMembersCount}):</span>
                <span className="text-rose-400">+ ₹{(familyMembersCount * 6000).toLocaleString()}</span>
              </div>
            )}
          </div>

          {/* Grand total large display */}
          <div className="p-4 bg-slate-900 rounded-2xl border border-rose-500/20 text-center">
            <span className="text-[9px] uppercase tracking-widest font-mono text-slate-400">Estimated Total investment</span>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-amber-400 tracking-tight mt-1">
              ₹{calculateTotal().toLocaleString()}
            </p>
            <span className="text-[8px] text-slate-500 font-mono uppercase block mt-1">Inc. of all custom facial prep hydration</span>
          </div>

          <button
            onClick={handleLaunchBookingCalculated}
            className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-serif text-xs uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-rose-600/10 cursor-pointer"
          >
            Reserve Calculated Estimate <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Flat rate Add On options */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h3 className="font-serif text-xl uppercase tracking-widest text-slate-950 dark:text-white text-center mb-10">Bespoke Add-on Rates</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {addOns.map((add, idx) => (
            <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-rose-100/10 flex items-center justify-between gap-6">
              <div className="grid gap-1">
                <h4 className="font-serif text-sm uppercase text-slate-900 dark:text-white font-bold">{add.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-serif leading-relaxed max-w-sm">{add.desc}</p>
              </div>
              <span className="font-mono text-rose-500 font-bold shrink-0">₹{add.price.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
