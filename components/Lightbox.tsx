"use client";

import React from "react";
import Image from "next/image";
import { useApp } from "@/lib/store";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Lightbox() {
  const { lightbox, closeLightbox } = useApp();

  return (
    <AnimatePresence>
      {lightbox.isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
        >
          {/* Close trigger */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
          >
            <div className="relative w-full h-full">
              <Image
                src={lightbox.imageSrc}
                alt={lightbox.imageAlt}
                fill
                sizes="(max-w-7xl) 100vw"
                className="object-contain rounded-lg"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
          </motion.div>

          {/* Description banner */}
          <div className="absolute bottom-6 bg-slate-900/85 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 text-white text-xs font-serif uppercase tracking-widest max-w-[90vw] text-center select-none">
            {lightbox.imageAlt || "Suvo Dev Makeup Masterpiece"}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
