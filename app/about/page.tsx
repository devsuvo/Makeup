"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useApp } from "@/lib/store";
import { BEAUTY_IMAGES, BRANDS_WORKED_WITH } from "@/lib/data";
import { Award, ShieldCheck, Heart, Sparkles, Calendar, CheckCircle2, ChevronRight, BookOpen, Star } from "lucide-react";

export default function AboutPage() {
  const { openBooking, openLightbox } = useApp();

  const milestones = [
    { year: "2016", title: "Atelier Genesis", desc: "Launched private studio suite in South Kolkata, specializing strictly in luxury traditional bridal makeovers." },
    { year: "2019", title: "Vogue India Spot", desc: "Collaborated as lead backstage cosmetic specialist for Vogue India's autumn fashion editorial campaign." },
    { year: "2021", title: "Lakmé Masterclass", desc: "Appointed guest beauty educator at Lakmé Academy, certifying over 200 high-end student artists." },
    { year: "2023", title: "Royal Sabyasachi Alliance", desc: "Curated key promotional beauty looks for Sabyasachi's flagship bridal jewelry launch campaign." },
    { year: "2025", title: "Global Airbrush Certification", desc: "Awarded Master Instructor certification in micro-atomized airbrush systems by Kryolan Berlin." },
  ];

  const certifications = [
    "Kryolan Master Airbrush Certification (Berlin)",
    "MAC Cosmetic Senior Artistry Accreditation (Mumbai)",
    "Bobbi Brown Professional Bridal Makeup Certification",
    "EPA-Approved Cosmetic Sanitization & Hygiene License",
  ];

  const awards = [
    "Best Luxury Bridal Artist Kolkata — Beauty Guild Awards 2023",
    "Outstanding Editorial Artistry Nominee — Fashion India 2024",
    "Prestige Beauty Influencer of the Year Nominee — Cosmopolitan 2025",
  ];

  const skills = [
    { title: "Lymphatic Facial Prep", level: "98%" },
    { title: "Bespoke Lash Mapping", level: "95%" },
    { title: "Micro-fine HD Layering", level: "96%" },
    { title: "Waterproof Airbrushing", level: "99%" },
    { title: "Anatomical Contouring", level: "94%" },
    { title: "Traditional Bridal Draping", level: "97%" },
  ];

  const btsImages = [
    { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop", title: "Backstage palettes setup" },
    { url: "https://images.unsplash.com/photo-1522337094846-8a8101f49413?w=500&auto=format&fit=crop", title: "Precision eye sculpting focus" },
    { url: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=500&auto=format&fit=crop", title: "Skincare massage preparation" },
  ];

  return (
    <div className="py-12">
      {/* Hero Header */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-20 border-b border-rose-100 dark:border-rose-950/10 mb-16">
        <div className="max-w-4xl mx-auto px-6 text-center grid gap-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
            — Behind The Palettes
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
            The Philosophy of Pure Elegance
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif max-w-2xl mx-auto leading-relaxed">
            Unveiling the cosmetic journey, micro-credentials, and professional values that power Suvo Dev&apos;s luxury beauty studio.
          </p>
        </div>
      </section>
 
      {/* Biography & Portrait Section */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Biography left */}
        <div className="lg:col-span-7 grid gap-6">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
            — The Storytellers
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl uppercase text-slate-800 dark:text-white leading-snug">
            A Journey of Geometry, Color, and Radiance
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
            I discovered the language of cosmetics not through standard formulas, but by studying light. Over a decade ago, I realized that high-fashion editorials and royal bridal ceremonies share a central demand: skin must appear flawlessly radiant under extreme conditions without looking masked.
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
            This insight led me to discard thick heavy foundations in favor of the &ldquo;Luminous Layering&rdquo; method. By prepping the dermis with active squalane botanicals and hyaluronic weight-fusions, I ensure that makeup blends naturally, reflecting light beautifully on high-definition 4K sensors.
          </p>
 
          {/* Mission Box */}
          <div className="p-6 bg-rose-50/50 dark:bg-rose-950/5 border-l-2 border-rose-600 rounded-r-2xl">
            <h4 className="font-serif text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" /> Our Core Mission
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-serif leading-relaxed mt-2 italic">
              &ldquo;We believe cosmetics should never be used to mask your identity. Our goal is to balance facial symmetry, infuse radiant hydration, and unveil a refined, editorial version of your own natural elegance.&rdquo;
            </p>
          </div>
        </div>

        {/* Brand Image right */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-80 h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-rose-100 dark:border-rose-950/20">
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop"
              alt="Suvo Dev Makeup Session"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="bg-slate-50 dark:bg-slate-900/30 border-y border-rose-100 dark:border-rose-950/10 py-20 px-6 mb-24">
        <div className="max-w-7xl mx-auto grid gap-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500 block mb-1">
              — Chronology of Artistry
            </span>
            <h2 className="font-serif text-2xl uppercase tracking-wider">Atelier Experience Timeline</h2>
          </div>

          <div className="relative max-w-3xl mx-auto grid gap-10 pl-6 border-l border-rose-200 dark:border-rose-950">
            {milestones.map((milestone, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                key={idx}
                className="relative"
              >
                {/* Node circle */}
                <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 bg-white dark:bg-slate-950 border-2 border-rose-600 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full" />
                </div>

                <div className="grid gap-1">
                  <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400">{milestone.year}</span>
                  <h4 className="font-serif text-sm uppercase text-slate-800 dark:text-white font-bold">{milestone.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-serif max-w-xl">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertises (Bento Grid) */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 mb-24 items-center">
        {/* Left column */}
        <div className="grid gap-6">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
            — Micro-Precision
          </span>
          <h2 className="font-serif text-2xl uppercase text-slate-800 dark:text-white">Technical Skills & Expertise</h2>
          <p className="text-xs text-slate-500 leading-relaxed font-serif">
            A summary of diagnostic beauty techniques maintained by Suvo Dev studio. Every procedure conforms strictly to medical sanitization standards.
          </p>

          <div className="grid gap-4 mt-2">
            {skills.map((skill, i) => (
              <div key={i} className="grid gap-1.5">
                <div className="flex justify-between text-xs uppercase font-serif tracking-wider">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.title}</span>
                  <span className="font-mono text-rose-500">{skill.level}</span>
                </div>
                <div className="h-[3px] bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-600 rounded-full" style={{ width: skill.level }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Credentials */}
        <div className="p-8 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-rose-100/50 dark:border-rose-950/20 grid gap-6">
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-slate-900 dark:text-white font-bold flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" /> Accredited Certifications
            </h4>
            <div className="grid gap-3 mt-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-serif leading-relaxed">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-rose-100/50 dark:bg-rose-950/20" />

          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-slate-900 dark:text-white font-bold flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" /> Awards & Recognitions
            </h4>
            <div className="grid gap-3 mt-4">
              {awards.map((award, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-serif leading-relaxed">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Behind-the-Scenes Gallery */}
      <section className="max-w-7xl mx-auto px-6 grid gap-10">
        <div className="text-center">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500 block mb-1">
            — Backstage Access
          </span>
          <h2 className="font-serif text-2xl uppercase tracking-wider">Behind-The-Scenes Gallery</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {btsImages.map((bts, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(bts.url, bts.title)}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-zoom-in group border border-slate-200 dark:border-slate-800"
            >
              <Image
                src={bts.url}
                alt={bts.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-[10px] uppercase font-mono tracking-widest bg-slate-950/80 px-3 py-1.5 rounded-full border border-white/10">
                  {bts.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bottom */}
        <div className="text-center mt-6">
          <button
            onClick={() => openBooking()}
            className="px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-serif text-xs uppercase tracking-widest rounded-full shadow-lg transition-all"
          >
            Curate My Bridal Experience With Suvo
          </button>
        </div>
      </section>
    </div>
  );
}
