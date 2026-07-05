"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useApp } from "@/lib/store";
import { portfolioItems, services, testimonials, BEAUTY_IMAGES } from "@/lib/data";
import { Sparkles, Calendar, ArrowRight, Star, Heart, Award, ShieldCheck, Trophy, Sparkle } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function HomePage() {
  const { openBooking, openLightbox } = useApp();
  const [activeCategory, setActiveCategory] = useState("bridal");

  const categories = [
    { id: "bridal", label: "Bridal" },
    { id: "party", label: "Party" },
    { id: "editorial", label: "Editorial" },
    { id: "fashion", label: "Fashion" },
  ];

  const filteredPortfolio = portfolioItems
    .filter((item) => item.category === activeCategory)
    .slice(0, 3);

  const stats = [
    { value: "1,200+", label: "Happy Brides & Clients", icon: Heart },
    { value: "450+", label: "Royal Bridal Projects", icon: Sparkles },
    { value: "10+", label: "Years of Masterclass Experience", icon: Award },
    { value: "2,500+", label: "Beauty Sessions Conducted", icon: Trophy },
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION: Full-screen Beauty Banner */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-slate-900 overflow-hidden py-16">
        {/* Background Dark Overlay & Luxury Lights */}
        <div className="absolute inset-0 z-0">
          <Image
            src={BEAUTY_IMAGES.bridalHero}
            alt="Suvo Dev Bridal Masterpiece Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/40" />
          {/* Ambient Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column Text */}
          <div className="lg:col-span-7 grid gap-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-xs font-mono tracking-widest uppercase mx-auto lg:mx-0 w-max"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" />
              <span>Ultra-Luxury Cosmetic Artistry</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight"
            >
              Enhancing Beauty, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-rose-600 font-bold">
                Creating Confidence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base font-serif max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Professional Makeup Artist specializing in luxury Bridal transformations, high-fashion Editorial sculpting, and flawless celebrity HD/Airbrush experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4"
            >
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-950 font-serif text-xs uppercase tracking-widest rounded-full shadow-xl transition-all hover:scale-[1.02]"
              >
                View Portfolio
              </Link>
              <button
                onClick={() => openBooking()}
                className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-serif text-xs uppercase tracking-widest rounded-full shadow-lg hover:shadow-rose-500/20 transition-all hover:scale-[1.02]"
              >
                Book Appointment
              </button>
            </motion.div>
          </div>

          {/* Column Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-96 sm:w-80 sm:h-[450px] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop"
                alt="Suvo Dev Makeup Artist Portrait"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              {/* Gold luxury overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-amber-500/20 text-center">
                <span className="font-serif text-xs text-white font-bold tracking-widest uppercase">Suvo Dev</span>
                <p className="text-[9px] uppercase tracking-wider text-amber-400 font-mono mt-0.5">Founder & Head Artistry Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. BRANDS WORKING WITH */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/40 border-y border-rose-100 dark:border-rose-950/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500 mb-6 block">
            — Prestige Collaborations
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-65 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-serif font-bold text-slate-800 dark:text-slate-200 tracking-widest text-sm">VOGUE</span>
            <span className="font-serif font-bold text-slate-800 dark:text-slate-200 tracking-widest text-sm">LAKMÉ FASHION</span>
            <span className="font-serif font-bold text-slate-800 dark:text-slate-200 tracking-widest text-sm">L&apos;ORÉAL PARIS</span>
            <span className="font-serif font-bold text-slate-800 dark:text-slate-200 tracking-widest text-sm">SABYASACHI</span>
            <span className="font-serif font-bold text-slate-800 dark:text-slate-200 tracking-widest text-sm">ESTÉE LAUDER</span>
            <span className="font-serif font-bold text-slate-800 dark:text-slate-200 tracking-widest text-sm">BAZAAR</span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED MAKEUP GALLERY (PORTFOLIO CATEGORIES) */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid gap-12">
        <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500 block mb-1">
              — The Master portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 dark:text-white uppercase tracking-wider">
              Signature Transformations
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md">
              A curated lookbook detailing our high-end canvas sculpting across bridal, party, and luxury editorial campaigns.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-serif text-xs uppercase tracking-widest border transition-all ${
                  activeCategory === cat.id
                    ? "bg-rose-600 border-rose-600 text-white font-bold shadow-md"
                    : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-rose-300 hover:text-rose-500 bg-white dark:bg-slate-900"
                }`}
              >
                {cat.label} Looks
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredPortfolio.map((item) => (
            <motion.div
              layout
              key={item.id}
              className="group bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-rose-50 dark:border-rose-950/10 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div
                onClick={() => openLightbox(item.image, item.title)}
                className="relative aspect-[3/4] overflow-hidden cursor-zoom-in"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-slate-900/90 text-white text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full border border-white/10">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="p-6 grid gap-3">
                <span className="text-[10px] uppercase font-mono text-amber-500 tracking-wider">
                  {item.location}
                </span>
                <h3 className="font-serif text-base text-slate-900 dark:text-white uppercase font-semibold leading-snug group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <div className="h-[1px] bg-rose-100/50 dark:bg-rose-950/20 my-1" />
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Products: {item.productsUsed.slice(0, 2).join(", ")}</span>
                  <Link
                    href={`/portfolio/${item.id}`}
                    className="text-rose-600 hover:text-rose-700 font-serif uppercase tracking-wider flex items-center gap-1 font-semibold"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. STATISTICS SECTION */}
      <section className="bg-slate-950 text-white py-20 px-6 border-y border-rose-950/40 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="grid gap-3">
                <div className="w-12 h-12 rounded-full border border-rose-500/30 flex items-center justify-center bg-rose-950/20 mx-auto text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-mono max-w-[160px] mx-auto leading-relaxed">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. ABOUT PREVIEW SECTION WITH BEFORE/AFTER INTERACTIVE SLIDER */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Interactive slider container */}
        <div className="w-full">
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop"
            title="The Royal Transformation Slider"
          />
        </div>

        {/* Right Info text */}
        <div className="grid gap-6">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
            — The Master Creator
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 dark:text-white uppercase tracking-wider leading-tight">
            Crafting Luminous Masterpieces Since 2016
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-serif">
            Hi, I&apos;m Suvo Dev. Over the last decade, I have dedicated my career to decoding skin geometry and the subtle balance of editorial lighting. To me, makeup is not a masking agent; it is an architectural enhancer of your innate confidence.
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-serif">
            Whether I am formulating a resilient, sweat-proof airbrush canvas for a destination bride in the heart of Rajasthan, or painting graphic elements for a Vogue editorial campaign under the flashing studio strobes, my standard remains uncompromised.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-emerald-500/10 rounded-full text-emerald-500">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold">100% Sanitized Kits</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">EPA-approved, single-use brushes exclusively.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-rose-500/10 rounded-full text-rose-500">
                <Sparkle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold">Prestige Cosmetics Only</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">Chanel, Tom Ford, Armani, and Pat McGrath.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="px-6 py-3 border border-rose-500 text-rose-600 dark:text-rose-400 hover:bg-rose-500 hover:text-white font-serif text-xs uppercase tracking-widest rounded-full transition-all flex items-center gap-1.5 font-semibold"
            >
              Read Full Biography <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SERVICES OVERVIEW */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-rose-100 dark:border-rose-950/10">
        <div className="max-w-7xl mx-auto px-6 grid gap-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500 block mb-1">
              — Bespoke Services
            </span>
            <h2 className="font-serif text-3xl text-slate-900 dark:text-white uppercase tracking-wider">
              Atelier Services Menu
            </h2>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Every appointment is framed by our custom squalane hydration facial. Choose from our specialized selection of luxury artistry treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-rose-100/50 dark:border-rose-950/20 shadow-lg flex flex-col justify-between"
              >
                <div className="grid gap-4">
                  <span className="text-[10px] uppercase tracking-wider text-amber-500 font-mono">
                    Starting From ₹{service.startingPrice.toLocaleString()}
                  </span>
                  <h3 className="font-serif text-lg text-slate-900 dark:text-white uppercase font-bold tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-serif">
                    {service.description}
                  </p>

                  <ul className="grid gap-2 text-[11px] text-slate-600 dark:text-slate-400 font-sans mt-2">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-rose-500 rounded-full" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-rose-50/50 dark:border-rose-950/10 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono uppercase">{service.duration}</span>
                  <button
                    onClick={() => openBooking(undefined, service.id)}
                    className="text-rose-600 hover:text-rose-700 font-serif text-xs uppercase tracking-wider font-bold flex items-center gap-1"
                  >
                    Reserve Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link
              href="/services"
              className="text-xs font-mono uppercase tracking-[0.2em] text-amber-500 hover:text-rose-500 transition-colors"
            >
              View Entire Services Menu & Details →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid gap-12">
        <div className="text-center">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500 block mb-1">
            — Social Endorsement
          </span>
          <h2 className="font-serif text-3xl text-slate-900 dark:text-white uppercase tracking-wider">
            Stories of Radiance
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-8 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-rose-50 dark:border-rose-950/10 relative"
            >
              <div className="absolute top-6 right-8 text-rose-300 dark:text-rose-900 font-serif text-6xl select-none leading-none">
                “
              </div>
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif mb-6 relative z-10 italic">
                &ldquo;{test.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-rose-100/50 dark:border-rose-950/20 pt-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-rose-200">
                  <Image
                    src={test.image}
                    alt={test.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-xs uppercase font-bold text-slate-800 dark:text-slate-100">
                    {test.name}
                  </h4>
                  <p className="text-[10px] uppercase text-slate-400 font-mono mt-0.5">
                    {test.role} — <span className="text-rose-500">{test.event}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. HIGH CONVERTING BOOKING CTA SECTION */}
      <section className="bg-gradient-to-br from-rose-900/90 via-slate-950 to-slate-950 py-24 text-center text-white px-6 border-t border-rose-950/50 relative overflow-hidden">
        {/* Background light */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-rose-500/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto grid gap-6">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-amber-400">
            Secure Your Date
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider leading-tight">
            Reserve Your Personalized Consultation Today
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-serif max-w-lg mx-auto leading-relaxed">
            Our priority calendar for the 2026 luxury wedding season is currently booking 6-12 months in advance. Contact Suvo Dev studio directly or launch our AI assistant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button
              onClick={() => openBooking()}
              className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-serif text-xs uppercase tracking-widest rounded-full shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              Book My Masterclass
            </button>
            <a
              href="/contact"
              className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-serif text-xs uppercase tracking-widest rounded-full transition-all inline-flex items-center justify-center"
            >
              Contact Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
