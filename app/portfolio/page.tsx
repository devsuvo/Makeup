"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/lib/store";
import { portfolioItems } from "@/lib/data";
import { Search, Sparkles, SlidersHorizontal, ArrowRight, Eye, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function PortfolioPage() {
  const { openLightbox } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Looks" },
    { id: "bridal", label: "Bridal" },
    { id: "engagement", label: "Engagement" },
    { id: "party", label: "Party" },
    { id: "editorial", label: "Editorial" },
    { id: "fashion", label: "Fashion" },
    { id: "celebrity", label: "Celebrity" },
    { id: "photoshoot", label: "Photoshoot" },
  ];

  // Filter logic
  const filteredItems = portfolioItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.makeupStyle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12">
      {/* Editorial Header banner */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-20 border-b border-rose-100 dark:border-rose-950/10 mb-12">
        <div className="max-w-4xl mx-auto px-6 text-center grid gap-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
            — Interactive Lookbook
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
            Advanced Portfolio Showcase
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif max-w-2xl mx-auto leading-relaxed">
            Filter through our high-definition masterworks. Discover products, skin preps, and structural cosmetic balance.
          </p>
        </div>
      </section>

      {/* Advanced Filtering & Search panel */}
      <section className="max-w-7xl mx-auto px-6 mb-12 grid gap-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl border border-rose-100/50 dark:border-rose-950/10">
          {/* Search bar */}
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, style keywords (e.g. glow, YSL)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none text-slate-800 dark:text-white transition-colors"
            />
          </div>

          {/* Quick Filters banner */}
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <SlidersHorizontal className="w-4.5 h-4.5 text-rose-500" />
            <span>Found {filteredItems.length} Masterpiece looks</span>
          </div>
        </div>

        {/* Categories Tab Buttons */}
        <div className="flex flex-wrap gap-2 justify-center border-b border-rose-50 dark:border-rose-950/20 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4.5 py-2 text-xs rounded-full font-serif uppercase tracking-widest border transition-all ${
                selectedCategory === cat.id
                  ? "bg-rose-600 border-rose-600 text-white font-bold shadow-md"
                  : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-rose-300 hover:text-rose-500 bg-white dark:bg-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Portfolio Display */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        {filteredItems.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={item.id}
                  className="group bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-rose-50 dark:border-rose-950/10 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Before After interactive display if bridal, else regular zoom */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                      onClick={() => openLightbox(item.image, item.title)}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Quick Labels */}
                    <span className="absolute top-4 left-4 bg-slate-900/95 text-white text-[9px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full border border-white/10 z-10 pointer-events-none">
                      {item.categoryLabel}
                    </span>

                    <button
                      onClick={() => openLightbox(item.image, item.title)}
                      className="absolute bottom-4 right-4 p-2 bg-slate-900/90 text-amber-400 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Launch Fullscreen View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Core copy info */}
                  <div className="p-6 grid gap-3">
                    <div className="flex justify-between items-center text-[10px] font-mono text-amber-600 dark:text-amber-400">
                      <span>{item.location}</span>
                      <span>{item.date}</span>
                    </div>

                    <h3 className="font-serif text-base text-slate-900 dark:text-white uppercase font-bold tracking-wide leading-snug group-hover:text-rose-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    <div className="h-[1px] bg-rose-100/50 dark:bg-rose-950/10 my-1" />

                    {/* Specific style label */}
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 italic">
                      Style: {item.makeupStyle}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1 mt-1 border-t border-rose-50 dark:border-rose-950/5">
                      <span className="text-slate-400 font-mono text-[10px] uppercase">
                        {item.productsUsed.length} Key Brands
                      </span>
                      <Link
                        href={`/portfolio/${item.id}`}
                        className="text-rose-600 hover:text-rose-700 font-serif uppercase tracking-wider font-bold flex items-center gap-1"
                      >
                        Breakdown Details <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-24 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-dashed border-rose-100 dark:border-rose-950/20 max-w-lg mx-auto grid gap-3">
            <RefreshCw className="w-8 h-8 text-rose-500 animate-spin mx-auto" />
            <h4 className="font-serif text-lg uppercase font-bold">No looks found</h4>
            <p className="text-xs text-slate-400">No portfolio items matched your current search filters. Try typing &apos;glow&apos; or selecting &apos;All Looks&apos;.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-5 py-2 mt-2 bg-rose-600 text-white font-serif text-[10px] uppercase tracking-widest rounded-full mx-auto"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Featured Before/After Segment */}
      <section className="bg-slate-50 dark:bg-slate-900/30 border-y border-rose-100 dark:border-rose-950/10 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
              — Precision Detail
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase text-slate-900 dark:text-white tracking-wider leading-tight mb-4">
              Real Transformations, Real Camera Sensors
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-serif mb-3">
              We never utilize smoothing filters or artificial intelligence face editing on our portfolio images. What you see is genuine, micro-fine cosmetics precision sitting seamlessly on real skin textures.
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-serif">
              Our brides are prepared to withstand 4K cameras, ambient desert/beach heat, and physical embraces throughout their special day. Try out the slider to appreciate our structural base smoothing.
            </p>
          </div>
          <div>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&auto=format&fit=crop"
              title="The Glamour Slider Reveal"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
