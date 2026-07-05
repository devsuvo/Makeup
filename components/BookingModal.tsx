"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/lib/store";
import { X, Calendar, MapPin, Mail, Phone, User, Sparkles, Check, ChevronDown, Clock, Heart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { bridalPackages, services } from "@/lib/data";

export default function BookingModal() {
  const { bookingModal, closeBooking } = useApp();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "Bridal Makeup",
    eventDate: "",
    location: "",
    packageSelection: "premium-bridal-pack",
    additionalReqs: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");

  // Sync selected package or service from context trigger
  useEffect(() => {
    const handleSync = setTimeout(() => {
      if (bookingModal.selectedPackageId) {
        setFormData((prev) => ({
          ...prev,
          packageSelection: bookingModal.selectedPackageId!,
          eventType: "Bridal Makeup",
          additionalReqs: bookingModal.selectedCustomDetails || prev.additionalReqs,
        }));
      } else if (bookingModal.selectedServiceId) {
        const matchedService = services.find((s) => s.id === bookingModal.selectedServiceId);
        setFormData((prev) => ({
          ...prev,
          packageSelection: bookingModal.selectedServiceId!,
          eventType: matchedService ? matchedService.title : "Party Makeup",
          additionalReqs: bookingModal.selectedCustomDetails || prev.additionalReqs,
        }));
      } else if (bookingModal.selectedCustomDetails) {
        setFormData((prev) => ({
          ...prev,
          additionalReqs: bookingModal.selectedCustomDetails!,
        }));
      }
    }, 0);
    return () => clearTimeout(handleSync);
  }, [bookingModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.eventDate || !formData.location) {
      alert("Please fill in all mandatory fields so Suvo can prepare your palette.");
      return;
    }

    setIsSubmitting(true);
    // Simulate luxury API booking dispatch
    setTimeout(() => {
      const ref = "SDEV-" + Math.floor(100000 + Math.random() * 900000);
      setReferenceNumber(ref);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const selectedPkg = bridalPackages.find((p) => p.id === formData.packageSelection);
  const selectedSvc = services.find((s) => s.id === formData.packageSelection);
  const priceDisplay = selectedPkg ? `₹${selectedPkg.price.toLocaleString()}` : selectedSvc ? `₹${selectedSvc.startingPrice.toLocaleString()}` : "Custom Quote";

  return (
    <AnimatePresence>
      {bookingModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-rose-100 dark:border-rose-950/30 max-h-[90vh] flex flex-col"
          >
            {/* Header banner */}
            <div className="bg-rose-600 dark:bg-rose-950/40 p-6 text-white flex items-center justify-between border-b border-rose-100 dark:border-rose-950/20">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="font-serif text-lg tracking-wider uppercase">Secure Your Glamour Date</h3>
                  <p className="text-[10px] uppercase tracking-widest text-rose-200 dark:text-amber-400 font-mono">Suvo Dev Beauty Reservation Lounge</p>
                </div>
              </div>
              <button
                onClick={closeBooking}
                className="p-1.5 hover:bg-white/10 rounded-full text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable content container */}
            <div className="overflow-y-auto p-6 md:p-8 flex-1">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="text-center md:text-left mb-2">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                      Select your desired package below. Suvo personally review all inquiries to design the ideal skincare preparation and color palette.
                    </p>
                  </div>

                  {/* Personal Fields Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="grid gap-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                        <User className="w-3 h-3 text-rose-500" /> Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rheas Banerjee"
                        className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none dark:text-white transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="grid gap-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                        <Mail className="w-3 h-3 text-rose-500" /> Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rhea@gmail.com"
                        className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none dark:text-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="grid gap-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                        <Phone className="w-3 h-3 text-rose-500" /> WhatsApp / Phone <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none dark:text-white transition-colors"
                      />
                    </div>

                    {/* Event Date */}
                    <div className="grid gap-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-rose-500" /> Event Date <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none dark:text-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Event Type & Selection Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Event Type dropdown */}
                    <div className="grid gap-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono">Event Type</label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none dark:text-white transition-colors appearance-none"
                      >
                        <option>Bridal Makeup</option>
                        <option>Engagement Makeup</option>
                        <option>Reception Makeup</option>
                        <option>Party Makeup</option>
                        <option>Editorial / Fashion Makeup</option>
                        <option>Celebrity HD Makeup</option>
                        <option>Photoshoot / Video Shoot</option>
                      </select>
                    </div>

                    {/* Package Selection */}
                    <div className="grid gap-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono">Select Package / Service</label>
                      <select
                        value={formData.packageSelection}
                        onChange={(e) => setFormData({ ...formData, packageSelection: e.target.value })}
                        className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none dark:text-white transition-colors appearance-none"
                      >
                        <optgroup label="Bridal Packages">
                          {bridalPackages.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} (₹{p.price.toLocaleString()})
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="A la Carte Services">
                          {services.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.title} (Starting From ₹{s.startingPrice.toLocaleString()})
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Location field */}
                  <div className="grid gap-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rose-500" /> Venue Location / City <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Hotel name, banquet venue, or city destination"
                      className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none dark:text-white transition-colors"
                    />
                  </div>

                  {/* Additional requirements */}
                  <div className="grid gap-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono">Special Notes, Skin Concerns, or Hairstyling Requests</label>
                    <textarea
                      value={formData.additionalReqs}
                      onChange={(e) => setFormData({ ...formData, additionalReqs: e.target.value })}
                      placeholder="Tell Suvo about your outfit color, veil/dupatta size, sensitive skin issues, or specific timeline concerns..."
                      rows={3}
                      className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:outline-none dark:text-white transition-colors resize-none"
                    />
                  </div>

                  {/* Estimated Pricing Quote box */}
                  <div className="p-4 bg-rose-50/50 dark:bg-rose-950/10 rounded-2xl border border-rose-100 dark:border-rose-950/20 flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-mono text-amber-600 dark:text-amber-400">Selected Package Value</span>
                      <p className="font-serif text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {selectedPkg ? selectedPkg.name : selectedSvc ? selectedSvc.title : "Custom Masterclass"}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400">Starting From</span>
                      <p className="font-serif text-xl font-bold text-rose-600 dark:text-rose-400">{priceDisplay}</p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 mt-2 bg-rose-600 hover:bg-rose-700 disabled:bg-rose-800/40 text-white font-serif text-xs uppercase tracking-widest rounded-full shadow-lg hover:shadow-rose-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin" /> Preparing Royal Booking Ledger...
                      </>
                    ) : (
                      <>
                        Request Booking Dates <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* LUXURY SUCCESS VIEW */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 px-4 grid gap-6"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-500 shadow-inner">
                    <Check className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-amber-500 dark:text-amber-400 block mb-1">
                      Reservation Confirmed
                    </span>
                    <h4 className="font-serif text-2xl text-slate-900 dark:text-white uppercase tracking-wider">
                      Your Date Has Been Saved
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900 dark:text-white font-medium">{formData.fullName}</strong>. Suvo Dev and our senior planners have reserved your date in our calendar ledger.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-900 grid gap-3 text-left max-w-md mx-auto">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Reference Number:</span>
                      <span className="font-mono font-bold text-rose-600 dark:text-rose-400">{referenceNumber}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Reserved Look Style:</span>
                      <span className="font-serif text-slate-800 dark:text-slate-200">{formData.eventType}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Celebration Date:</span>
                      <span className="font-mono text-slate-800 dark:text-slate-200">{formData.eventDate}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Atelier Pricing Estimate:</span>
                      <span className="font-serif font-semibold text-rose-600 dark:text-rose-400">{priceDisplay}</span>
                    </div>
                  </div>

                  <div className="grid gap-3 pt-2">
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 max-w-sm mx-auto">
                      Our coordinator will dispatch your personalized skincare timeline guide to <span className="text-slate-600 dark:text-slate-300">{formData.email}</span> within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`https://wa.me/919876543210?text=Hello%20Suvo%20Dev,%20I%20just%20submitted%20a%20booking%20request%20for%20${formData.eventType}%20on%20${formData.eventDate}%20(Ref:%20${referenceNumber})!`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-serif text-xs uppercase tracking-widest rounded-full transition-all duration-300 inline-flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" /> Instant WhatsApp Sync
                      </a>
                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({
                            fullName: "",
                            email: "",
                            phone: "",
                            eventType: "Bridal Makeup",
                            eventDate: "",
                            location: "",
                            packageSelection: "premium-bridal-pack",
                            additionalReqs: "",
                          });
                          closeBooking();
                        }}
                        className="px-6 py-3 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 font-serif text-xs uppercase tracking-widest rounded-full transition-all duration-300"
                      >
                        Close Window
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
