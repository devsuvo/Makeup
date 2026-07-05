"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LightboxState {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
}

interface BookingModalState {
  isOpen: boolean;
  selectedPackageId?: string;
  selectedServiceId?: string;
  selectedCustomDetails?: string;
}

interface AIConsultationState {
  isOpen: boolean;
}

interface AppContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  bookingModal: BookingModalState;
  openBooking: (packageId?: string, serviceId?: string, customDetails?: string) => void;
  closeBooking: () => void;
  aiConsultation: AIConsultationState;
  openAiConsultation: () => void;
  closeAiConsultation: () => void;
  lightbox: LightboxState;
  openLightbox: (src: string, alt: string) => void;
  closeLightbox: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Theme state defaulting to light, but checking localstorage on client-side
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  const [bookingModal, setBookingModal] = useState<BookingModalState>({
    isOpen: false,
  });

  const [aiConsultation, setAiConsultation] = useState<AIConsultationState>({
    isOpen: false,
  });

  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    imageSrc: "",
    imageAlt: "",
  });

  useEffect(() => {
    // Sync theme on initial load
    const handleInit = setTimeout(() => {
      const savedTheme = localStorage.getItem("suvodev_theme") as "light" | "dark" | null;
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      } else {
        // Respect system preference
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        setTheme(systemTheme);
        document.documentElement.classList.toggle("dark", systemTheme === "dark");
      }
    }, 0);
    return () => clearTimeout(handleInit);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("suvodev_theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const openBooking = (packageId?: string, serviceId?: string, customDetails?: string) => {
    setBookingModal({ isOpen: true, selectedPackageId: packageId, selectedServiceId: serviceId, selectedCustomDetails: customDetails });
  };

  const closeBooking = () => {
    setBookingModal({ isOpen: false });
  };

  const openAiConsultation = () => {
    setAiConsultation({ isOpen: true });
  };

  const closeAiConsultation = () => {
    setAiConsultation({ isOpen: false });
  };

  const openLightbox = (src: string, alt: string) => {
    setLightbox({ isOpen: true, imageSrc: src, imageAlt: alt });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, imageSrc: "", imageAlt: "" });
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        bookingModal,
        openBooking,
        closeBooking,
        aiConsultation,
        openAiConsultation,
        closeAiConsultation,
        lightbox,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
