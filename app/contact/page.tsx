"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Calendar, Send, Check, Instagram, Facebook, AlertCircle } from "lucide-react";
import { useApp } from "@/lib/store";

export default function ContactPage() {
  const { openBooking } = useApp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    makeupType: "bridal",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill out all mandatory fields (Name, Email, Phone).");
      return;
    }
    setError("");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        makeupType: "bridal",
        message: "",
      });
    }, 5000);
  };

  const contactItems = [
    { icon: Phone, title: "Telephone", value: "+91 98765 43210", action: "tel:+919876543210", subtitle: "Available for call 9am – 8pm" },
    { icon: Mail, title: "Email Secretariat", value: "suvodev.hz@gmail.com", action: "mailto:suvodev.hz@gmail.com", subtitle: "Response within 12 business hours" },
    { icon: MapPin, title: "Atelier Studio", value: "Studio 42, Park Street, Kolkata", subtitle: "By private appointment reservation only" },
    { icon: Clock, title: "Operating Hours", value: "Mon – Sun: 8:00 AM – 9:00 PM", subtitle: "Urgent wedding callouts: 24/7" },
  ];

  return (
    <div className="py-12">
      {/* Editorial Header */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-20 border-b border-rose-100 dark:border-rose-950/10 mb-16">
        <div className="max-w-4xl mx-auto px-6 text-center grid gap-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">
            — Studio Coordinates
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
            Connect With Suvo Dev
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif max-w-2xl mx-auto leading-relaxed">
            Reserve your bridal consultation date, request masterclass parameters, or communicate press collaborations directly.
          </p>
        </div>
      </section>

      {/* Core Split Screen Layout */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 mb-24">
        {/* Left Side: Contact details & Hours */}
        <div className="lg:col-span-5 grid gap-10">
          <div className="grid gap-6">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">— Quick Details</span>
            <h2 className="font-serif text-2xl uppercase tracking-wide text-slate-900 dark:text-white">Studio Office</h2>
            <p className="text-xs text-slate-500 font-serif leading-relaxed">
              For destination wedding reservations, please specify flight proximity and local transfer coordinates inside the contact message block.
            </p>
          </div>

          <div className="grid gap-6">
            {contactItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4 items-start p-4 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-rose-100/10 hover:border-rose-300 transition-colors">
                  <div className="w-10 h-10 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs uppercase font-bold text-slate-400">{item.title}</h4>
                    {item.action ? (
                      <a href={item.action} className="text-xs sm:text-sm text-slate-900 dark:text-white font-mono hover:text-rose-500 transition-colors font-semibold mt-1 block">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-serif font-semibold mt-1 block">
                        {item.value}
                      </span>
                    )}
                    <p className="text-[10px] text-slate-400 font-serif mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social connection banner */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-rose-100/10 text-center">
            <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400">Social Connections</span>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-rose-500 transition-colors">
                <Instagram className="w-4.5 h-4.5 text-rose-500" /> @suvodev_studio
              </a>
              <a href="#" className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-rose-500 transition-colors">
                <Facebook className="w-4.5 h-4.5 text-rose-500" /> Suvo Dev Artistry
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Validated form */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-950 p-8 md:p-12 rounded-3xl border border-rose-100/50 dark:border-rose-950/20 shadow-xl">
          <div className="grid gap-2 mb-6">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500">— Inquiries Registry</span>
            <h3 className="font-serif text-xl uppercase tracking-wider text-slate-950 dark:text-white">Submit Secretarial Request</h3>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5 text-xs">
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 flex items-center gap-2 font-serif">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {submitted && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600 flex flex-col gap-1 font-serif">
                <div className="flex items-center gap-2 font-bold">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Request Transmitted Successfully!</span>
                </div>
                <p className="text-[11px] text-slate-500 pl-6">
                  Suvo Dev&apos;s personal concierge secretariat will review your date parameters and reach back to you within 12 business hours.
                </p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-1.5">
                <label className="font-serif uppercase tracking-widest text-[9px] text-slate-400">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Royal Highness Name"
                  className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none rounded-xl"
                />
              </div>

              <div className="grid gap-1.5">
                <label className="font-serif uppercase tracking-widest text-[9px] text-slate-400">Contact Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 90000 00000"
                  className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none rounded-xl"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-1.5">
                <label className="font-serif uppercase tracking-widest text-[9px] text-slate-400">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@luxurymail.com"
                  className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none rounded-xl"
                />
              </div>

              <div className="grid gap-1.5">
                <label className="font-serif uppercase tracking-widest text-[9px] text-slate-400">Target Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none rounded-xl text-slate-500"
                />
              </div>
            </div>

            <div className="grid gap-1.5">
              <label className="font-serif uppercase tracking-widest text-[9px] text-slate-400">Artistry Style Preference</label>
              <select
                name="makeupType"
                value={formData.makeupType}
                onChange={handleChange}
                className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none rounded-xl text-slate-500"
              >
                <option value="bridal">Bespoke Bridal Makeover</option>
                <option value="party">Pre-Wedding / Party Glamour</option>
                <option value="editorial">Fashion / Campaign Editorial</option>
                <option value="celebrity">Celebrity HD Touchup</option>
              </select>
            </div>

            <div className="grid gap-1.5">
              <label className="font-serif uppercase tracking-widest text-[9px] text-slate-400">Atelier message instructions</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="State special skin concerns, venue location, or outfit descriptions here..."
                className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none rounded-xl resize-none font-serif"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 bg-rose-600 hover:bg-rose-700 text-white font-serif text-xs uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
            >
              Submit Secretariat Request <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </section>

      {/* Styled Interactive map placeholder */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="relative h-[300px] w-full rounded-3xl overflow-hidden border border-rose-100/50 dark:border-rose-950/20 shadow-lg bg-slate-900 flex items-center justify-center text-center px-6">
          <div className="absolute inset-0 z-0 opacity-20">
            {/* Mock map graphic pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
          <div className="relative z-10 grid gap-2 text-white">
            <MapPin className="w-8 h-8 text-rose-500 mx-auto animate-bounce" />
            <h4 className="font-serif text-base uppercase font-bold tracking-widest">Suvo Dev Luxury Atelier Map Location</h4>
            <p className="text-[10px] text-slate-400 font-mono max-w-sm mx-auto uppercase">42 Park Street, Opposite Premium Central Plaza, Kolkata 700016</p>
            <div className="flex justify-center gap-3 mt-2">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="px-4 py-2 bg-white text-slate-950 rounded-full font-serif text-[10px] uppercase tracking-wider font-semibold">
                Open In Google Maps
              </a>
              <button onClick={() => openBooking()} className="px-4 py-2 bg-rose-600 text-white rounded-full font-serif text-[10px] uppercase tracking-wider font-semibold">
                Reserve Studio Slot
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
