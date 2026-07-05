"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/lib/store";
import { Menu, X, Sparkles, Sun, Moon, Calendar, ChevronDown, Award, Heart, ShieldCheck, Sparkle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const { theme, toggleTheme, openBooking, openAiConsultation } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    const handleSync = setTimeout(() => {
      setIsOpen(false);
      setActiveMega(null);
    }, 0);
    return () => clearTimeout(handleSync);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Bridal Packages", href: "/bridal-packages" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 shadow-md backdrop-blur-md py-3 border-b border-rose-100 dark:border-rose-950/30"
            : "bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm py-5 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-rose-400 dark:border-rose-600 bg-rose-50 dark:bg-rose-950/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-rose-500 dark:text-rose-400 animate-pulse" />
            </div>
            <div>
              <span className="font-serif text-lg tracking-[0.2em] font-bold text-slate-900 dark:text-white uppercase transition-colors group-hover:text-rose-600 dark:group-hover:text-rose-400">
                SUVO DEV
              </span>
              <p className="text-[9px] uppercase tracking-[0.3em] text-amber-500 dark:text-amber-400 font-mono">
                Beauty Atelier
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 font-serif text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200 ${
                  pathname === link.href ? "text-rose-600 dark:text-rose-400 font-semibold" : ""
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-4 right-4 h-[1px] bg-rose-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Luxury Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMega("explore")}
              onMouseLeave={() => setActiveMega(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 font-serif text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                Explore <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence>
                {activeMega === "explore" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-1 w-72 bg-white dark:bg-slate-950 border border-rose-100 dark:border-rose-950/60 rounded-xl shadow-2xl p-4 grid gap-1 backdrop-blur-md"
                  >
                    {navLinks.slice(5).map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-serif uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 hover:text-rose-600 dark:hover:text-rose-400 transition-all ${
                          pathname === link.href ? "bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 font-semibold" : ""
                        }`}
                      >
                        <Sparkle className="w-2.5 h-2.5 text-amber-500" />
                        {link.name}
                      </Link>
                    ))}
                    <div className="h-[1px] bg-rose-100 dark:bg-rose-950/40 my-1"></div>
                    <button
                      onClick={() => openAiConsultation()}
                      className="w-full flex items-center justify-between text-left px-3 py-2 rounded-lg bg-amber-500/10 dark:bg-amber-400/5 hover:bg-amber-500/15 text-amber-600 dark:text-amber-400 transition-colors"
                    >
                      <span className="text-xs font-mono uppercase tracking-wider">AI Beauty Concierge</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Action Tools & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {/* AI Assistant Glow CTA */}
            <button
              onClick={() => openAiConsultation()}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase bg-amber-400/10 hover:bg-amber-400/20 text-amber-600 dark:text-amber-400 border border-amber-400/20 transition-all duration-300"
              title="Get a free AI consultation personalized to your skin type & event"
            >
              <Sparkles className="w-3.5 h-3.5 animate-bounce" />
              <span>AI Consult</span>
            </button>

            {/* Dark Mode button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/30 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-rose-500" />}
            </button>

            {/* Main Booking Trigger */}
            <button
              onClick={() => openBooking()}
              className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-serif text-xs uppercase tracking-widest rounded-full shadow-lg hover:shadow-rose-500/20 transition-all duration-300 transform active:scale-95"
            >
              Book Session
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Quick Mobile AI Consult */}
            <button
              onClick={() => openAiConsultation()}
              className="p-2 rounded-full bg-amber-400/10 text-amber-500"
              title="AI Consult"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-rose-50 dark:bg-rose-950/20 text-rose-500"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-800 dark:text-slate-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-950 p-6 pt-24 overflow-y-auto lg:hidden flex flex-col justify-between"
          >
            <div className="grid gap-4">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-500 mb-2 block">
                — Atelier Directory
              </span>
              <nav className="grid gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-serif text-base uppercase tracking-widest py-2 border-b border-slate-100 dark:border-slate-900 text-slate-800 dark:text-slate-200 hover:text-rose-500 transition-colors ${
                      pathname === link.href ? "text-rose-600 dark:text-rose-400 font-bold pl-2" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="grid gap-4 mt-8 pb-8">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openAiConsultation();
                }}
                className="w-full py-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-amber-500/20"
              >
                <Sparkles className="w-4 h-4" />
                AI Beauty Consultant
              </button>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  openBooking();
                }}
                className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-serif text-xs uppercase tracking-widest shadow-xl"
              >
                Book An Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
