"use client";

import React from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import { Star, Quote, Heart, Play, ShieldCheck, HelpCircle, FileText, Check } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useApp } from "@/lib/store";

export default function TestimonialsPage() {
  const { openBooking } = useApp();

  const successStories = [
    {
      bride: "Sanjana Sen",
      location: "Fairmont, Jaipur",
      look: "Royal Gold Rajasthani Bridal",
      story: "Suvo was like a calm anchor in my chaotic wedding morning. He did a gold-foil-embellished eye design that matched my lehenga borders exactly. It was so sweat-resistant that it lasted through the day-long photshoot in 38°C heat without a single smudge. Complete genius!",
    },
    {
      bride: "Neha Bose",
      location: "ITC Sonar, Kolkata",
      look: "Classic Bengali Red-Lipped Bridal",
      story: "My family was so anxious because I don't wear heavy cosmetics. Suvo sat down with me, analyzed my skin undertones, and applied a lightweight HD base. I didn't feel any weight, and my wedding pictures looked so timelessly elegant.",
    },
  ];

  const videos = [
    { title: "Rhea's Palatial Wedding Highlights", length: "2 Min Play", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop" },
    { title: "Kiara's Red Carpet Soft Glam touch-up", length: "1 Min Play", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop" },
  ];

  return (
    <div className="py-12">
      {/* Editorial Header */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-20 border-b border-rose-100 dark:border-rose-950/10 mb-16">
        <div className="max-w-4xl mx-auto px-6 text-center grid gap-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
            — Social Evidence
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
            Client Success Stories
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif max-w-2xl mx-auto leading-relaxed">
            True elegance is reflected in our client reviews. Explore the stories of brides, celebrities, and models we styled.
          </p>
        </div>
      </section>

      {/* Ratings Overview Section */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-20 items-center">
        {/* Total stats */}
        <div className="bg-rose-600 text-white p-8 rounded-3xl border border-rose-500 shadow-xl text-center grid gap-2">
          <span className="text-3xl font-serif font-bold">5.0</span>
          <div className="flex justify-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest font-mono text-rose-200">Average Bridal Rating</p>
          <p className="text-xs text-rose-100 leading-relaxed font-serif mt-2">
            Based on over 1,200+ verified bridal and editorial reviews since 2016.
          </p>
        </div>

        {/* Rating bars */}
        <div className="md:col-span-2 p-8 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-rose-50 dark:border-rose-950/10 grid gap-3">
          <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400">Rating Breakdown</span>
          <div className="grid gap-2">
            {/* 5 star */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="w-12 text-right">5 Stars</span>
              <div className="flex-grow h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 rounded-full" style={{ width: "98%" }} />
              </div>
              <span className="w-12 text-right text-rose-500">98%</span>
            </div>
            {/* 4 star */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="w-12 text-right">4 Stars</span>
              <div className="flex-grow h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 rounded-full" style={{ width: "2%" }} />
              </div>
              <span className="w-12 text-right text-rose-500">2%</span>
            </div>
            {/* under 4 */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="w-12 text-right">3 Stars</span>
              <div className="flex-grow h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 rounded-full" style={{ width: "0%" }} />
              </div>
              <span className="w-12 text-right text-rose-500">0%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After comparisons */}
      <section className="max-w-7xl mx-auto px-6 mb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">— Visual Diagnostics</span>
          <h2 className="font-serif text-2xl uppercase tracking-widest mt-1 mb-4">No smoothing filters. Ever.</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-serif">
            We preserve human skin details. Our makeup is engineered to balance facial geometry, blur pores through micro-pigments, and ensure high longevity without heavy mechanical mask layers. Use our comparative slider to analyze how the cosmetic layer sits on the client&apos;s cheeks.
          </p>
        </div>
        <div>
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop"
            title="The Natural Smoothing Reveal"
          />
        </div>
      </section>

      {/* Core Testimonial Cards */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-24">
        {testimonials.map((test) => (
          <div
            key={test.id}
            className="p-8 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-rose-50 dark:border-rose-950/10 relative"
          >
            <Quote className="absolute top-6 right-8 w-12 h-12 text-rose-100 dark:text-rose-950/20" />
            <div className="flex gap-1 text-amber-400 mb-4">
              {[...Array(test.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-serif italic leading-relaxed mb-6">
              &ldquo;{test.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border">
                <Image src={test.image} alt={test.name} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-serif text-xs uppercase font-bold text-slate-900 dark:text-white">{test.name}</h4>
                <p className="text-[10px] uppercase text-slate-400 font-mono mt-0.5">{test.role}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Video Highlights / reels */}
      <section className="bg-slate-50 dark:bg-slate-900/30 border-y border-rose-100 dark:border-rose-950/10 py-20 px-6 mb-20">
        <div className="max-w-7xl mx-auto grid gap-12">
          <div className="text-center">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500 block mb-1">
              — Immersive Reels
            </span>
            <h2 className="font-serif text-2xl uppercase tracking-wider">Video Testimonial Highlights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
            {videos.map((vid, idx) => (
              <div key={idx} className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group border border-slate-200 dark:border-slate-800">
                <Image src={vid.image} alt={vid.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-12 h-12 bg-rose-600 hover:bg-rose-700 text-white rounded-full flex items-center justify-center shadow-lg transform active:scale-90 transition-transform cursor-pointer">
                    <Play className="w-5 h-5 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-6 right-6 p-4 bg-slate-900/95 backdrop-blur-md rounded-2xl text-center border border-white/10">
                  <h4 className="font-serif text-xs text-white uppercase font-bold">{vid.title}</h4>
                  <span className="text-[9px] uppercase tracking-wider text-rose-400 font-mono mt-0.5">{vid.length}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Success Stories */}
      <section className="max-w-4xl mx-auto px-6 grid gap-10">
        <h3 className="font-serif text-xl uppercase tracking-widest text-slate-950 dark:text-white text-center">Bridal Diaries</h3>
        <div className="grid gap-6">
          {successStories.map((story, i) => (
            <div key={i} className="p-8 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-rose-50 dark:border-rose-950/10">
              <span className="text-[9px] uppercase font-mono text-rose-500 tracking-widest block mb-1">
                {story.look} — {story.location}
              </span>
              <h4 className="font-serif text-base uppercase text-slate-900 dark:text-white font-bold">{story.bride}&apos;s Celebration</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 font-serif leading-relaxed italic">
                &ldquo;{story.story}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button onClick={() => openBooking()} className="px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-serif text-xs uppercase tracking-widest rounded-full shadow-lg">
            Curate My Bridal Package Today
          </button>
        </div>
      </section>
    </div>
  );
}
