"use client";

import React, { useState } from "react";
import Image from "next/image";
import { blogArticles, BlogArticle } from "@/lib/data";
import { Search, Clock, User, Sparkles, BookOpen, ChevronRight, X, Heart, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  const categories = [
    { id: "all", label: "All Chronicles" },
    { id: "Skincare", label: "Skincare Prep" },
    { id: "Bridal", label: "Bridal Secrets" },
    { id: "Artistry", label: "Artistry Tips" },
  ];

  // Filtering
  const filteredArticles = blogArticles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "all" || art.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12">
      {/* Editorial Header */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-20 border-b border-rose-100 dark:border-rose-950/10 mb-12">
        <div className="max-w-4xl mx-auto px-6 text-center grid gap-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
            — The Velvet Journal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
            Beauty Chronicles & Tips
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif max-w-2xl mx-auto leading-relaxed">
            Professional skincare preparations, humidity defense guidelines, and secret product lists maintained by Suvo Dev studio.
          </p>
        </div>
      </section>

      {/* Filter panel */}
      <section className="max-w-7xl mx-auto px-6 mb-12 grid gap-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl border border-rose-100/50 dark:border-rose-950/10">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, skincare prep, humidity..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none text-slate-800 dark:text-white transition-colors"
            />
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Displaying {filteredArticles.length} beauty articles
          </div>
        </div>

        {/* Category Tabs */}
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

      {/* Articles Grid List */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="group bg-white dark:bg-slate-950 rounded-3xl overflow-hidden border border-rose-50 dark:border-rose-950/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image top */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-slate-900/95 text-white text-[9px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full border border-white/10">
                    {art.category}
                  </span>
                </div>

                {/* Core Copy */}
                <div className="p-6 grid gap-2">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-rose-500" />
                      <span>{art.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-rose-500" />
                      <span>{art.author}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-base text-slate-900 dark:text-white uppercase font-bold tracking-wide mt-2 leading-snug group-hover:text-rose-600 transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-serif line-clamp-3 mt-1">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Action bottom */}
              <div className="p-6 pt-0 mt-4 border-t border-rose-50/50 dark:border-rose-950/5 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-mono">{art.date}</span>
                <button
                  onClick={() => setActiveArticle(art)}
                  className="text-rose-600 hover:text-rose-700 font-serif text-xs uppercase tracking-wider font-bold flex items-center gap-1 cursor-pointer"
                >
                  Read Article <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ARTICLE DEEP READING MODAL DRAWER OVERLAY */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-slate-950 cursor-pointer"
            />

            {/* Side Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-2xl h-full bg-white dark:bg-slate-950 shadow-2xl border-l border-rose-950/30 flex flex-col justify-between z-10"
            >
              {/* Header block scrollable */}
              <div className="overflow-y-auto h-full p-8 md:p-12">
                {/* Close Button absolute */}
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid gap-6 mt-4">
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-rose-500">
                    — {activeArticle.category} Chronicle
                  </span>

                  <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
                    {activeArticle.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
                    <span>By {activeArticle.author}</span>
                    <span>Date: {activeArticle.date}</span>
                    <span>Read length: {activeArticle.readTime}</span>
                  </div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <Image
                      src={activeArticle.image}
                      alt={activeArticle.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* HTML/Markdown Content render */}
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed grid gap-4 mt-2">
                    {activeArticle.content.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom footer bar */}
              <div className="p-6 bg-slate-50 dark:bg-slate-900/40 border-t border-rose-100/50 dark:border-rose-950/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Thanks for reading Suvo Dev Studio.</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white uppercase tracking-widest text-[10px] font-serif rounded-full"
                >
                  Close Chronicle
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
