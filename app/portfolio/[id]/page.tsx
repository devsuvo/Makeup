import { portfolioItems } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Calendar, MapPin, Sparkles, Star, ShieldCheck, Heart, ArrowLeft, ArrowRight } from "lucide-react";

// In Next.js 15 App Router, page dynamic params are received as a Promise of params
export default async function PortfolioDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const item = portfolioItems.find((p) => p.id === id);

  if (!item) {
    notFound();
  }

  // Find related looks
  const relatedLooks = portfolioItems.filter((p) => item.relatedIds.includes(p.id));

  return (
    <div className="py-12">
      {/* 1. PROJECT HERO GALLERY */}
      <section className="relative min-h-[60vh] bg-slate-900 flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40 blur-[2px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center grid gap-4 text-white">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-slate-300 hover:text-rose-400 transition-colors mx-auto"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Lookbook
          </Link>

          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-amber-400 block mt-2">
            — {item.categoryLabel} Masterpiece
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-tight leading-tight">
            {item.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-2 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{item.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-rose-500" />
              <span>{item.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE LAYOUT: Client overview, Breakdown, Products, Skin prep */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 mb-20">
        {/* Left column: Comparative Slider & Testimonial */}
        <div className="lg:col-span-6 grid gap-10">
          <div className="w-full">
            <BeforeAfterSlider
              beforeImage={item.beforeImage}
              afterImage={item.image}
              title="Interactive Transformation Comparative"
            />
          </div>

          {/* Client Testimonial Card */}
          <div className="p-8 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-rose-50 dark:border-rose-950/10 relative">
            <div className="absolute top-6 right-8 text-rose-300 dark:text-rose-900 font-serif text-6xl leading-none select-none">“</div>
            <div className="flex gap-1 text-amber-400 mb-4">
              {[...Array(item.testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-serif italic leading-relaxed mb-6">
              &ldquo;{item.testimonial.quote}&rdquo;
            </p>
            <div className="text-[10px] uppercase font-mono tracking-wider text-rose-500">
              — {item.clientName}, Verified Client Review
            </div>
          </div>
        </div>

        {/* Right column: Description, Skin Prep, Makeup Breakdown */}
        <div className="lg:col-span-6 grid gap-8">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-rose-500 block mb-1">
              — Project Overview
            </span>
            <h2 className="font-serif text-xl uppercase tracking-wider text-slate-800 dark:text-white">
              The Style Curation
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
              <strong>Makeup Style</strong>: {item.makeupStyle}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif mt-3">
              {item.description}
            </p>
          </div>

          {/* Skin Prep process */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-rose-100/50 dark:border-rose-950/10">
            <h4 className="font-serif text-xs uppercase tracking-wider text-slate-900 dark:text-white font-bold flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-rose-500" /> Skin Preparation Process
            </h4>
            <ul className="grid gap-2.5 mt-4 text-[11px] text-slate-600 dark:text-slate-400 font-serif leading-relaxed">
              {item.skinPrepProcess.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5 shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Makeup Breakdown details */}
          <div className="grid gap-4">
            <h4 className="font-serif text-xs uppercase tracking-wider text-slate-900 dark:text-white font-bold flex items-center gap-2">
              <Sparkles className="w-4.5 h-4.5 text-amber-500" /> Cosmetic breakdown
            </h4>

            <div className="grid gap-3 text-[11px] font-sans">
              {/* Face */}
              <div className="flex flex-col sm:flex-row border-b border-rose-50 dark:border-rose-950/10 pb-2">
                <span className="w-24 font-bold text-slate-400 uppercase tracking-widest text-[9px] shrink-0 mt-0.5">FACE CANVASES:</span>
                <span className="text-slate-600 dark:text-slate-300">{item.makeupBreakdown.face.join(", ")}</span>
              </div>
              {/* Eyes */}
              <div className="flex flex-col sm:flex-row border-b border-rose-50 dark:border-rose-950/10 pb-2">
                <span className="w-24 font-bold text-slate-400 uppercase tracking-widest text-[9px] shrink-0 mt-0.5">EYE DETAILS:</span>
                <span className="text-slate-600 dark:text-slate-300">{item.makeupBreakdown.eyes.join(", ")}</span>
              </div>
              {/* Lips */}
              <div className="flex flex-col sm:flex-row pb-2">
                <span className="w-24 font-bold text-slate-400 uppercase tracking-widest text-[9px] shrink-0 mt-0.5">LIP CONTOURS:</span>
                <span className="text-slate-600 dark:text-slate-300">{item.makeupBreakdown.lips.join(", ")}</span>
              </div>
            </div>
          </div>

          {/* Products Used list */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Featured Products in Kit:</h4>
            <div className="flex flex-wrap gap-2">
              {item.productsUsed.map((prod, i) => (
                <span key={i} className="px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full font-mono text-[10px] uppercase border border-rose-500/10">
                  {prod}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELATED LOOKS */}
      {relatedLooks.length > 0 && (
        <section className="bg-slate-50 dark:bg-slate-900/30 border-y border-rose-100 dark:border-rose-950/10 py-16 px-6 mb-16">
          <div className="max-w-7xl mx-auto grid gap-8">
            <h3 className="font-serif text-lg uppercase text-slate-950 dark:text-white tracking-widest text-center">Related Masterpieces</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedLooks.map((look) => (
                <div key={look.id} className="bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-rose-50 dark:border-rose-950/10 shadow-md">
                  <div className="relative aspect-[3/4]">
                    <Image src={look.image} alt={look.title} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-4 grid gap-2">
                    <h4 className="font-serif text-sm uppercase text-slate-800 dark:text-white font-bold">{look.title}</h4>
                    <Link href={`/portfolio/${look.id}`} className="text-rose-600 text-[11px] font-mono uppercase tracking-wider flex items-center gap-1">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. BOOKING CTA */}
      <section className="max-w-2xl mx-auto text-center px-6 grid gap-4 mb-12">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-rose-500">— Atelier Booking</span>
        <h3 className="font-serif text-2xl uppercase tracking-wider text-slate-900 dark:text-white">Love this signature look?</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
          Suvo Dev can custom sculpt this exact palette style, calibrated to match your skin complexion and outfits.
        </p>
        <Link href="/contact" className="px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-serif text-xs uppercase tracking-widest rounded-full shadow-lg max-w-max mx-auto mt-2">
          Reserve This Look Style
        </Link>
      </section>
    </div>
  );
}
