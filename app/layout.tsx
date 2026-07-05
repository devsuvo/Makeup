import type { Metadata } from 'next';
import './globals.css'; // Global styles
import { AppProvider } from '@/lib/store';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import AiConsultationModal from '@/components/AiConsultationModal';
import Lightbox from '@/components/Lightbox';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Suvo Dev Makeup Studio | Luxury Bridal, HD & Celebrity Makeup Artist',
  description: 'Ultra-luxury bridal makeup, celebrity HD makeup, and editorial cosmetics artistry by Suvo Dev. Specializing in high-end beauty transformations and pre-wedding skincare prep.',
  keywords: ['Suvo Dev', 'Luxury Makeup Artist', 'Bridal Makeup Specialist', 'HD Makeup Kolkata', 'Celebrity Makeup Artist India', 'Editorial Makeup', 'Airbrush Makeup'],
  authors: [{ name: 'Suvo Dev' }],
  openGraph: {
    title: 'Suvo Dev Makeup Studio | Luxury Bridal, HD & Celebrity Makeup Artist',
    description: 'Ultra-luxury beauty transformations by Suvo Dev. Specializing in royal bridal palettes, celebrity soft-glam, and editorial styling.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Suvo Dev Makeup Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Suvo Dev Bridal Makeup Masterpiece',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suvo Dev Makeup Studio | Luxury Bridal, HD & Celebrity Makeup Artist',
    description: 'Bespoke high-end bridal, HD, and editorial makeup services.',
    images: ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&auto=format&fit=crop'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Local Business & Beauty Professional JSON-LD Schema markup for Google Rich Snippets SEO
  const beautyProfessionalSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Suvo Dev Makeup Studio",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&auto=format&fit=crop",
    "@id": "https://suvodev.studio/#studio",
    "url": "https://suvodev.studio",
    "telephone": "+919876543210",
    "priceRange": "₹10,000 - ₹85,000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Studio 42, Park Street",
      "addressLocality": "Kolkata",
      "postalCode": "700016",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.5539",
      "longitude": "88.3541"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://instagram.com",
      "https://facebook.com"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(beautyProfessionalSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen flex flex-col font-sans">
        <AppProvider>
          {/* Sticky Header Navigation */}
          <Navbar />

          {/* Main Content Router Area */}
          <main className="flex-grow pt-20">
            {children}
          </main>

          {/* Global Immersive Overlays */}
          <BookingModal />
          <AiConsultationModal />
          <Lightbox />
          <BackToTop />

          {/* Global Editorial Footer */}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}

