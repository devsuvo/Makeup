"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Eye } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, title }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = React.useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  }, []);

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      handleMove(e.touches[0].clientX);
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="flex flex-col items-center w-full">
      {title && (
        <h4 className="font-serif text-sm tracking-widest text-slate-800 dark:text-slate-200 uppercase mb-3 flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-rose-500" />
          {title}
        </h4>
      )}

      <div
        ref={containerRef}
        className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-rose-100 dark:border-rose-950/20"
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* AFTER Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt="After Glamour look"
            fill
            sizes="(max-w-7xl) 100vw"
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 right-4 bg-rose-600/90 text-white text-[10px] uppercase tracking-widest font-mono px-2.5 py-1 rounded-full shadow-md z-10">
            Glamour After
          </div>
        </div>

        {/* BEFORE Image (Clipped with standard CSS clipPath) */}
        <div className="absolute inset-0 z-10" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <Image
            src={beforeImage}
            alt="Before look"
            fill
            sizes="(max-w-7xl) 100vw"
            className="object-cover pointer-events-none"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 bg-slate-900/95 text-white text-[10px] uppercase tracking-widest font-mono px-2.5 py-1 rounded-full shadow-md z-10 whitespace-nowrap">
            Natural Before
          </div>
        </div>

        {/* SLIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-20 cursor-ew-resize shadow-lg flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 shadow-2xl border-2 border-rose-500 text-rose-500 dark:text-rose-400 flex items-center justify-center scale-100 hover:scale-110 active:scale-90 transition-transform duration-150">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
          </div>
        </div>

        {/* Touch Hint overlay */}
        <div className="absolute inset-x-0 top-4 flex justify-center pointer-events-none opacity-80 z-10">
          <span className="bg-slate-950/75 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] font-mono text-slate-300 px-3 py-1 rounded-full">
            Drag Center Slider To Reveal
          </span>
        </div>
      </div>
    </div>
  );
}
