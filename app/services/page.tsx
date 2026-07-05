"use client";

import React from "react";
import { services } from "@/lib/data";
import { useApp } from "@/lib/store";
import { Clock, Tag, Sparkles, Check, HelpCircle, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const { openBooking } = useApp();

  const faqs = [
    { q: "What should I do to prepare my skin before the appointment?", a: "We highly recommend drinking plenty of water, using a gentle hydrator, and avoiding any fresh chemical peels or intense physical scrubs within 10 days of your appointment." },
    { q: "Do you supply the false eyelashes?", a: "Yes! High-quality individual silk or mink eyelashes are fully included with all our HD, airbrush, and party makeup services at no additional cost." },
    { q: "Is hair styling included in these services?", a: "No, our primary services focus purely on skincare prep and luxury cosmetic makeup. However, we collaborate with elite celebrity hairstylists and can arrange a combined package." },
  ];

  return (
    <div className="py-12">
      {/* Editorial Header */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-20 border-b border-rose-100 dark:border-rose-950/10 mb-16">
        <div className="max-w-4xl mx-auto px-6 text-center grid gap-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
            — Elite Beauty Treatments
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
            Our Artistry Menu
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif max-w-2xl mx-auto leading-relaxed">
            Every session is custom-tailored to align with your facial anatomy and lighting conditions. Discover our precise list of prestige treatments.
          </p>
        </div>
      </section>

      {/* Services Grid list */}
      <section className="max-w-7xl mx-auto px-6 grid gap-12 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-rose-100/50 dark:border-rose-950/20 shadow-lg hover:shadow-2xl hover:border-rose-300 dark:hover:border-rose-900/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="grid gap-4">
                {/* Header info */}
                <div className="flex justify-between items-start">
                  <div className="px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] uppercase font-mono tracking-widest border border-rose-500/10 rounded-full">
                    Starting ₹{svc.startingPrice.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-rose-500" />
                    <span>{svc.duration}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg text-slate-900 dark:text-white uppercase font-bold tracking-wide mt-2">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 font-serif leading-relaxed">
                  {svc.description}
                </p>

                {/* Features divider list */}
                <div className="h-[1px] bg-rose-100/50 dark:bg-rose-950/10 my-1" />

                <div className="grid gap-2">
                  <span className="text-[9px] uppercase tracking-widest font-mono text-slate-400">Included Features:</span>
                  <ul className="grid gap-2 text-[11px] text-slate-600 dark:text-slate-300 font-sans">
                    {svc.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products */}
                <div className="mt-2">
                  <span className="text-[9px] uppercase tracking-widest font-mono text-slate-400 block mb-1.5">Prestige Kit inventory:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.productsUsed.map((prod, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-900 text-slate-500 text-[9px] uppercase rounded-md font-mono">
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-8 border-t border-rose-100/50 dark:border-rose-950/20">
                <button
                  onClick={() => openBooking(undefined, svc.id)}
                  className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-serif text-xs uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:shadow-rose-600/10"
                >
                  Reserve Appointment <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services inclusion banner */}
      <section className="bg-slate-50 dark:bg-slate-900/40 border-y border-rose-100 dark:border-rose-950/10 py-16 px-6 mb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">— Atelier Standard</span>
            <h2 className="font-serif text-2xl uppercase text-slate-900 dark:text-white tracking-widest leading-tight mt-2 mb-4">Every appointment includes our Royal Prep</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-serif leading-relaxed mb-4">
              We believe a flawless base requires a calm, plump dermis. That is why we dedicate the first 15 minutes of every makeup session to intense, lymphatic massage and skin quenching.
            </p>
            <div className="grid gap-3 font-serif text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-rose-500" /> Organic Chamomile botanical cleansing balm.</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-rose-500" /> Rosewater toner misting layer.</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-rose-500" /> 10-minute squalane oil lymphatic facial massage.</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-rose-500" /> Silk peptide micro-pore texture blur smoothing.</div>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop"
              alt="Luxury Cosmetics preparation"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Services FAQ section */}
      <section className="max-w-3xl mx-auto px-6 mb-12">
        <h3 className="font-serif text-xl uppercase tracking-widest text-slate-950 dark:text-white text-center mb-10">Artistry FAQ</h3>
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
