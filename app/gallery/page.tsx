"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/lib/store";
import { INSTAGRAM_POSTS } from "@/lib/data";
import { Eye, Search, Filter, SlidersHorizontal, Sparkles } from "lucide-react";

export default function GalleryPage() {
  const { openLightbox } = useApp();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Shoots" },
    { id: "skin", label: "Skin Texture HD" },
    { id: "eyes", label: "Precision Eyelashes" },
    { id: "editorial", label: "Editorial Kampaigns" },
    { id: "bridal", label: "Royal Brides" },
  ];

  // Raw media photos catalog
  const photos = [
    { id: 1, url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop", cat: "bridal", desc: "Traditional Bengali gold-bordered eye detail" },
    { id: 2, url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop", cat: "skin", desc: "Hydrated dewy foundation base reflection" },
    { id: 3, url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop", cat: "eyes", desc: "Individual lash mapping and champagne glitter" },
    { id: 4, url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop", cat: "editorial", desc: "Avant-garde graphic liner backstage Vogue shoot" },
    { id: 5, url: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&auto=format&fit=crop", cat: "skin", desc: "Micro-powder setting focus under flash lights" },
    { id: 6, url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop", cat: "bridal", desc: "Engagement soft blush and silk draping" },
    { id: 7, url: "https://images.unsplash.com/photo-1522337094846-8a8101f49413?w=800&auto=format&fit=crop", cat: "eyes", desc: "Matte warm sunset cut crease technique" },
    { id: 8, url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop", cat: "editorial", desc: "Glass-skin glossy cheek highlight" },
  ];

  const filteredPhotos = photos.filter((p) => selectedCategory === "all" || p.cat === selectedCategory);

  return (
    <div className="py-12">
      {/* Editorial Header */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-20 border-b border-rose-100 dark:border-rose-950/10 mb-12">
        <div className="max-w-4xl mx-auto px-6 text-center grid gap-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
            — Immersive Media
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
            High-Definition Artistry Gallery
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif max-w-2xl mx-auto leading-relaxed">
            Click to expand and inspect raw cosmetic textures. No filters are used. Experience honest, precise beauty details.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
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

      {/* Masonry or Grid list */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo.url, photo.desc)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-rose-50 dark:border-rose-950/10 group cursor-zoom-in"
            >
              <Image
                src={photo.url}
                alt={photo.desc}
                width={400}
                height={500}
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                <div className="grid gap-2">
                  <Eye className="w-6 h-6 text-amber-400 mx-auto" />
                  <p className="text-[11px] font-serif uppercase text-white tracking-wider">
                    {photo.desc}
                  </p>
                  <span className="text-[9px] font-mono text-slate-400 uppercase">
                    Category: {photo.cat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aesthetic Callout */}
      <section className="max-w-2xl mx-auto text-center px-6 grid gap-4 mb-12">
        <h3 className="font-serif text-lg uppercase tracking-wider text-slate-950 dark:text-white">Interested in a signature beauty consultation?</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
          Open our private AI Virtual Consultant widget in the header navigation menu to receive skin-calibrated recommendations instantly.
        </p>
      </section>
    </div>
  );
}
