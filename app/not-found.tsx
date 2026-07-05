"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CornerDownLeft, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-950 text-white font-sans px-6 py-20 relative overflow-hidden">
      {/* Decorative luxury orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Frame border */}
      <div className="absolute inset-8 border border-rose-950/40 pointer-events-none z-0 rounded-3xl" />

      <div className="relative z-10 max-w-md text-center grid gap-6">
        <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-rose-500 block">
          — Error 404 Coordinates
        </span>

        <h1 className="font-serif text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-rose-600 font-bold leading-none tracking-tight">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 font-serif leading-relaxed max-w-xs mx-auto">
          &ldquo;The most beautiful look you can wear is confidence. But unfortunately, the digital path you requested does not exist.&rdquo;
        </p>

        <div className="h-[1px] bg-rose-950/50 my-2" />

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-serif text-[10px] uppercase tracking-widest rounded-full transition-all inline-flex items-center justify-center gap-1.5"
          >
            <CornerDownLeft className="w-3.5 h-3.5" /> Return Home Suite
          </Link>
          <Link
            href="/portfolio"
            className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-serif text-[10px] uppercase tracking-widest rounded-full transition-all inline-flex items-center justify-center gap-1.5"
          >
            Explore Lookbook <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
