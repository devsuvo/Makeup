"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/lib/store";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Clock, Sparkles, Check, ChevronUp } from "lucide-react";
import { INSTAGRAM_POSTS, BRANDS_WORKED_WITH } from "@/lib/data";
import Image from "next/image";

export default function Footer() {
  const { openLightbox, openBooking } = useApp();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 font-sans border-t border-rose-950/40">
      {/* Editorial Decorative Grid */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent" />

      {/* Brands Worked With Ribbon */}
      <div className="border-b border-rose-950/30 bg-slate-900/30 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-amber-500">
            Beauty Alliances
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {BRANDS_WORKED_WITH.map((brand) => (
              <span
                key={brand.name}
                className="font-serif text-xs font-bold uppercase tracking-[0.25em] text-slate-500 hover:text-rose-400 transition-colors"
              >
                {brand.logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Core Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About column */}
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-rose-600 flex items-center justify-center bg-rose-950/20">
              <Sparkles className="w-4 h-4 text-rose-400" />
            </div>
            <span className="font-serif text-sm tracking-widest font-bold text-white uppercase">
              SUVO DEV
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-serif">
            A luxury cosmetic specialist defining royal bridal elegance, high-fashion editorial sculpting, and luminous red-carpet transformations. Dedicated to micro-precision and timeless visual class.
          </p>
          <div className="grid gap-2 text-xs font-mono mt-2">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">
                +91 98765 43210
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-rose-500" />
              <a href="mailto:suvodev.hz@gmail.com" className="hover:text-white transition-colors">
                suvodev.hz@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Studio 42, Park Street, Kolkata</span>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="grid gap-4">
          <h4 className="font-serif text-xs uppercase tracking-widest text-white font-bold">
            Navigate Atelier
          </h4>
          <ul className="grid grid-cols-2 gap-2 text-xs font-serif">
            <li>
              <Link href="/" className="hover:text-rose-400 transition-colors">
                Home Suite
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-rose-400 transition-colors">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-rose-400 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/bridal-packages" className="hover:text-rose-400 transition-colors">
                Bridal Packages
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-rose-400 transition-colors">
                Portfolio Lookbook
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-rose-400 transition-colors">
                Master Gallery
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-rose-400 transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-rose-400 transition-colors">
                Beauty Chronicles
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-rose-400 transition-colors">
                Pricing Card
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-rose-400 transition-colors">
                Contact Office
              </Link>
            </li>
          </ul>
        </div>

        {/* Instagram Widget Column */}
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h4 className="font-serif text-xs uppercase tracking-widest text-white font-bold">
              Instagram Lookbook
            </h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] uppercase font-mono text-amber-500 hover:text-white transition-colors"
            >
              @suvodev_studio
            </a>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {INSTAGRAM_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => openLightbox(post.url, `Suvo Dev Instagram Showcase ${post.id}`)}
                className="relative aspect-square rounded-lg overflow-hidden border border-slate-900 group cursor-zoom-in"
              >
                <Image
                  src={post.url}
                  alt="Insta Look"
                  fill
                  sizes="120px"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-rose-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup Column */}
        <div className="grid gap-4">
          <h4 className="font-serif text-xs uppercase tracking-widest text-white font-bold">
            The Velvet Journal
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Subscribe to receive private masterclass invitations, premium product launches, and seasonal skincare prepare guides.
          </p>
          <form onSubmit={handleSubscribe} className="relative mt-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your royal email..."
              className="w-full pl-4 pr-12 py-3 text-xs bg-slate-900 border border-slate-800 focus:border-rose-500 focus:outline-none rounded-full text-white"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 w-10 bg-rose-600 hover:bg-rose-700 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Subscribe"
            >
              {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-3.5 h-3.5" />}
            </button>
          </form>
          {subscribed && (
            <span className="text-[10px] text-emerald-500 font-mono">
              Successfully entered the VIP list!
            </span>
          )}
          <div className="flex gap-4 mt-2">
            <span className="text-[10px] uppercase font-mono text-slate-500">Follow:</span>
            <div className="flex gap-3">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Band */}
      <div className="border-t border-rose-950/30 bg-slate-950 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-600">
          <span>© 2026 Suvo Dev Makeup Studio. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Ledger
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Service Agreement
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
