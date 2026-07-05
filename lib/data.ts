export interface PortfolioItem {
  id: string;
  title: string;
  category: string; // 'bridal' | 'party' | 'editorial' | 'fashion' | 'celebrity' | 'photoshoot' | 'engagement'
  categoryLabel: string;
  image: string;
  beforeImage: string;
  clientName: string;
  location: string;
  date: string;
  makeupStyle: string;
  skinPrepProcess: string[];
  makeupBreakdown: {
    face: string[];
    eyes: string[];
    lips: string[];
  };
  productsUsed: string[];
  testimonial: {
    quote: string;
    rating: number;
  };
  description: string;
  relatedIds: string[];
}

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  duration: string;
  productsUsed: string[];
  startingPrice: number;
}

export interface BridalPackage {
  id: string;
  name: string;
  tagline: string;
  price: number;
  duration: string;
  features: string[];
  addOnsAvailable: string[];
  bestFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  event: string;
  quote: string;
  rating: number;
  image: string;
  beforeAfterImg?: { before: string; after: string };
  videoThumbnail?: string;
  duration?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string; // 'Makeup Tips' | 'Bridal Beauty' | 'Skincare' | 'Beauty Trends' | 'Product Reviews' | 'Wedding Preparation'
  tags: string[];
  image: string;
  readTime: string;
  date: string;
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// PREMIUM GALLERY ASSETS (High Quality Unsplash links)
export const BEAUTY_IMAGES = {
  bridalHero: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&auto=format&fit=crop&q=80",
  bridalDetail1: "https://images.unsplash.com/photo-1522337094846-8a8101f49413?w=800&auto=format&fit=crop&q=80",
  editorialHero: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&auto=format&fit=crop&q=80",
  fashionHero: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&auto=format&fit=crop&q=80",
  celebrityHero: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&auto=format&fit=crop&q=80",
  photoshootHero: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=80",
  cosmeticsCloseUp: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&auto=format&fit=crop&q=80",
  palette: "https://images.unsplash.com/photo-1487412947147-5ce40f135ee5?w=800&auto=format&fit=crop&q=80",
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "royal-bridal-radiance",
    title: "Royal Crimson Bridal Elegance",
    category: "bridal",
    categoryLabel: "Bridal Makeup",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
    beforeImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80",
    clientName: "Aishwarya Sen",
    location: "The Oberoi Grand, Kolkata",
    date: "June 12, 2026",
    makeupStyle: "Traditional Royal Indian Bridal with HD Glow & Crimson Accents",
    description: "A signature luxury bridal look designed for a grand traditional wedding. The focus was on creating a flawless, luminous base that withstands high-definition cameras and warm lighting, paired with classic bold crimson lips and intricate gold-leafed eye details.",
    skinPrepProcess: [
      "Deep cleansing with luxury Chamomile Cleansing Balm",
      "Hydration infusion using Rosewater & Hyaluronic acid mist",
      "Bespoke 10-minute facial massage with pure Squalane oil to stimulate lymphatic drainage",
      "Silk-peptide smoothing primer to refine skin texture and lock moisture"
    ],
    makeupBreakdown: {
      face: ["Giorgio Armani Luminous Silk Foundation", "Cle de Peau Beauté Radiant Concealer", "Chanel Les Beiges Bronzing Cream", "Dior Backstage Rosy Glow Blush"],
      eyes: ["Pat McGrath Mothership V Palette (Bronze Seduction)", "Tom Ford Liquid Eye Liner in Carbon Black", "Swarovski crystal micro-embellishments on upper crease"],
      lips: ["Yves Saint Laurent Rouge Pur Couture in 01 Le Rouge", "Charlotte Tilbury Lip Cheat in Kiss 'N' Tell"]
    },
    productsUsed: ["Giorgio Armani Luminous Silk", "Charlotte Tilbury Flawless Filter", "Pat McGrath Mothership Palette", "Cle de Peau Concealer"],
    testimonial: {
      quote: "Suvo Dev transformed me into a royal queen for my wedding. The HD makeup was so light, and my skin glowed through the entire 12-hour ceremony. Unbelievable precision!",
      rating: 5
    },
    relatedIds: ["gilded-editorial-glam", "celebrity-red-carpet"]
  },
  {
    id: "gilded-editorial-glam",
    title: "Gilded Avant-Garde Editorial",
    category: "editorial",
    categoryLabel: "Editorial Makeup",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=80",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80",
    clientName: "Vogue India Campaign",
    location: "Studio 11, Mumbai",
    date: "April 05, 2026",
    makeupStyle: "Editorial Wet-Glow Look with Metallic Gold Strokes",
    description: "Designed for a high-fashion editorial spread exploring metallic elements. This look features a highly reflective, glass-like dewy skin finish, structured editorial contouring, and artistic gold leaf strokes across the orbital bone.",
    skinPrepProcess: [
      "Toning with Glycolic acid for cellular resurfacing",
      "Extreme hydration with marine collagen serum",
      "Glow-amplifying gold foil infused oil drops",
      "Embryolisse Lait-Crème Concentré for rich satin barrier priming"
    ],
    makeupBreakdown: {
      face: ["Danessa Myricks Beauty Wet Balm", "NARS Sheer Glow Foundation", "Fenty Beauty Match Stix Contour"],
      eyes: ["MAC Pigment in Gold Metal", "Glossier Boy Brow", "Kevyn Aucoin The Volume Mascara"],
      lips: ["Laneige Lip Glowy Balm", "Bobbi Brown Crushed Lip Color in Bare"]
    },
    productsUsed: ["Danessa Myricks Wet Balm", "NARS Sheer Glow", "MAC Metallic Gold Pigment", "Embryolisse Cream"],
    testimonial: {
      quote: "Suvo's understanding of editorial lighting is incomparable. The metallic accents captured the light beautifully on camera without losing their architectural texture.",
      rating: 5
    },
    relatedIds: ["royal-bridal-radiance", "fashion-runway-sculpt"]
  },
  {
    id: "celebrity-red-carpet",
    title: "Celebrity Red Carpet Soft-Glam",
    category: "celebrity",
    categoryLabel: "Celebrity Makeup",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80",
    beforeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=80",
    clientName: "Kiara Advani (Private Event)",
    location: "Taj Lands End, Mumbai",
    date: "May 20, 2026",
    makeupStyle: "Sultry Matte-Monochromatic Soft Glam",
    description: "A flawless, breathable red-carpet-ready look engineered to stay completely matte under flashing paparazzi bulbs while retaining a natural skin-like texture. Built using state-of-the-art HD micro-baking techniques.",
    skinPrepProcess: [
      "Clay mask spot-treatment for high-shine zones",
      "Hydra-smoothing hyaluronic serum hydration",
      "Sebum-control luxury botanical gel prep",
      "Hourglass Vanish Airbrush Primer"
    ],
    makeupBreakdown: {
      face: ["Estée Lauder Double Wear Foundation", "Laura Mercier Translucent Loose Setting Powder", "Hoola Matte Bronzer by Benefit"],
      eyes: ["Urban Decay Naked Reloaded Palette", "Stila Stay All Day Waterproof Liquid Liner", "Ardell Demi Wispies Lashes"],
      lips: ["Charlotte Tilbury Matte Revolution Lipstick in Pillow Talk", "MAC Lip Pencil in Spice"]
    },
    productsUsed: ["Estée Lauder Double Wear", "Hourglass Airbrush Primer", "Laura Mercier Powder", "Charlotte Tilbury Pillow Talk"],
    testimonial: {
      quote: "Truly red carpet magic. The look looked absolutely stunning under harsh camera flashes and stayed perfectly in place for over 8 hours.",
      rating: 5
    },
    relatedIds: ["royal-bridal-radiance", "photoshoot-monochromatic"]
  },
  {
    id: "fashion-runway-sculpt",
    title: "High-Fashion Runway Minimalist",
    category: "fashion",
    categoryLabel: "Fashion Makeup",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80",
    beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
    clientName: "Lakmé Fashion Week Autumn '26",
    location: "Jio World Convention Centre, Mumbai",
    date: "March 18, 2026",
    makeupStyle: "Structured Glass Skin with Floating Editorial Liner",
    description: "A highly conceptual and striking runway look emphasizing clean lines, razor-sharp facial sculpting, and an artistic graphic liner that floats across the upper lid. Perfect for high-contrast runway lights.",
    skinPrepProcess: [
      "Gentle enzyme peeling pads treatment",
      "Aveda botanical hydrating mist",
      "Lancer The Method nourishing moisturize lotion",
      "Milk Makeup Hydro Grip Primer for long-wear adhesion"
    ],
    makeupBreakdown: {
      face: ["Shiseido Synchro Skin Self-Refreshing Foundation", "Westman Atelier Face Trace Contour Stick", "Hourglass Ambient Lighting Powder"],
      eyes: ["Suva Beauty Hydra Liner in Space Panda", "Marc Jacobs Beauty Velvet Noir Mascara"],
      lips: ["Dior Addict Lip Glow in Coral", "MAC Lipglass Clear"]
    },
    productsUsed: ["Shiseido Synchro Skin", "Westman Atelier Contour", "Suva Beauty Hydra Liner", "Milk Hydro Grip"],
    testimonial: {
      quote: "Suvo designed a look that was incredibly clean yet packed an intense visual punch. It became the defining look of the autumn collection.",
      rating: 5
    },
    relatedIds: ["gilded-editorial-glam", "photoshoot-monochromatic"]
  },
  {
    id: "photoshoot-monochromatic",
    title: "Aesthetic Monochromatic Nude",
    category: "photoshoot",
    categoryLabel: "Photoshoot Makeup",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
    clientName: "L'Oréal Paris Campaign",
    location: "Studio 9, Delhi",
    date: "May 02, 2026",
    makeupStyle: "Monochromatic Terracotta HD Glam",
    description: "A cohesive, sophisticated beauty look designed for a commercial studio photoshoot. Using warm terracotta, peach, and toasted almond tones consistently across the eyes, cheeks, and lips to create stunning warmth and harmony.",
    skinPrepProcess: [
      "Double hydration layer with Laneige Cream Skin Refiner",
      "Kiehl's Ultra Facial Cream moisturizing",
      "Tatcha The Liquid Silk Canvas primer"
    ],
    makeupBreakdown: {
      face: ["Make Up For Ever HD Skin Foundation", "Rare Beauty Liquid Blush in Soft Pinch (Joy)", "Fenty Beauty Sun Stalk'r Bronzer"],
      eyes: ["Anastasia Beverly Hills Soft Glam Palette", "Tom Ford Eye Quad in Cognac Rose"],
      lips: ["Rare Beauty Matte Lip Cream in Bold", "Charlotte Tilbury Lip Cheat in Iconic Nude"]
    },
    productsUsed: ["MUFE HD Skin", "Rare Beauty Soft Pinch", "ABH Soft Glam Palette", "Tatcha Silk Canvas"],
    testimonial: {
      quote: "The monochromatic harmony was sublime. It gave the photographs a warm, classic, cohesive editorial energy.",
      rating: 5
    },
    relatedIds: ["celebrity-red-carpet", "gilded-editorial-glam"]
  },
  {
    id: "glowing-engagement-minimal",
    title: "Glowy Minimalist Engagement",
    category: "engagement",
    categoryLabel: "Engagement Makeup",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&auto=format&fit=crop&q=80",
    beforeImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80",
    clientName: "Meera Patel",
    location: "ITC Royal Bengal, Kolkata",
    date: "June 25, 2026",
    makeupStyle: "Soft Dewy Pastel Glam with Classic Winged Eye",
    description: "A fresh-faced, youthfully glowing engagement look featuring soft blush pinks, highlighted cheekbones, and an ultra-fine cat eye. Perfect for daytime outdoor pre-wedding celebrations.",
    skinPrepProcess: [
      "Vitamin C serum brightening application",
      "Estée Lauder Advanced Night Repair serum barrier support",
      "Glow Recipe Watermelon Moisturizer",
      "Supergoop Glow Screen SPF 40 base"
    ],
    makeupBreakdown: {
      face: ["Charlotte Tilbury Beautiful Skin Foundation", "Saie Glowy Super Gel", "Patrick Ta Double-Take Creme & Powder Blush"],
      eyes: ["Huda Beauty Rose Quartz Palette", "Kat Von D Tattoo Liner in Trooper Black"],
      lips: ["Fenty Beauty Gloss Bomb in Fenty Glow", "Lancôme L'Absolu Rouge Lipstick in 274"]
    },
    productsUsed: ["Charlotte Tilbury Beautiful Skin", "Saie Glow Gel", "Patrick Ta Blush", "Huda Rose Quartz"],
    testimonial: {
      quote: "Meera wanted something light, breezy, yet absolutely photo-ready. Suvo delivered a look that let her natural freckles peak through while giving her a heavenly glow.",
      rating: 5
    },
    relatedIds: ["royal-bridal-radiance", "photoshoot-monochromatic"]
  }
];

export const services: Service[] = [
  {
    id: "bridal-luxury",
    title: "Luxury Bridal Artistry",
    category: "bridal",
    description: "Our signature luxury bridal transformation. Includes premium multi-layer skin prep, customized lash extensions, premium airbrush/HD application, dupatta draping, jewelry setting, and on-location beauty support.",
    features: [
      "Customized on-location luxury service",
      "Advanced 4-step skin preparation",
      "Premium airbrush or ultra-thin HD foundation",
      "Custom individual silk eyelash extensions",
      "Dupatta draping, jewelry styling, and hair accessory placement",
      "Mini emergency beauty touch-up kit"
    ],
    duration: "3 - 3.5 Hours",
    productsUsed: ["Giorgio Armani", "Charlotte Tilbury", "Tom Ford", "Cle de Peau", "YSL"],
    startingPrice: 25000
  },
  {
    id: "celebrity-hd-makeup",
    title: "Celebrity HD & Red Carpet Makeup",
    category: "celebrity",
    description: "Flawless, lightweight micro-coverage engineered specifically for high-definition photography, flash bulbs, and cinematography. Tailored to look entirely like second skin under close-up viewports.",
    features: [
      "Ultra-high definition camera calibration base",
      "Advanced cream-sculpting and facial balance mapping",
      "Waterproof, smudge-proof guarantees (up to 12 hours)",
      "Premium luxury brand cosmetic inventory exclusively",
      "Chest, collarbone, and body highlighting gloss"
    ],
    duration: "1.5 - 2 Hours",
    productsUsed: ["Estée Lauder", "Make Up For Ever", "Danessa Myricks", "Hourglass"],
    startingPrice: 15000
  },
  {
    id: "editorial-avant-garde",
    title: "Editorial & High Fashion Artistry",
    category: "editorial",
    description: "Artistic, conceptual, and high-fashion looks crafted for magazine spreads, advertisements, runways, and commercial videos. Focused on creative boundaries, graphic shapes, and custom finishes.",
    features: [
      "Collaboration with photographer's lighting layout",
      "Graphic liners, gold foil details, or bespoke textures",
      "Wet-look, ultra-matte, or high-metallic avant-garde designs",
      "On-set continuous touch-ups and style pivots"
    ],
    duration: "2 - 2.5 Hours",
    productsUsed: ["MAC Cosmetics", "Suva Beauty", "Westman Atelier", "Pat McGrath"],
    startingPrice: 18000
  },
  {
    id: "airbrush-flawless",
    title: "Signature Airbrush Perfection",
    category: "airbrush",
    description: "A micro-atomized mist application of silicone or water-based foundations. Creates a flawlessly uniform skin tone with unparalleled longevity, completely sweat-proof and ideal for tropical climates.",
    features: [
      "Atomized airbrush application for lightweight feel",
      "Flawless pores and texture blur effect",
      "Completely transfer-resistant & waterproof wear",
      "Highly recommended for humid outdoor wedding receptions"
    ],
    duration: "2 Hours",
    productsUsed: ["TEMPTU Airbrush Systems", "Kryolan Professional", "Dior Backstage"],
    startingPrice: 20000
  },
  {
    id: "signature-party-makeup",
    title: "Glamorous Party & Reception Makeup",
    category: "party",
    description: "Sophisticated and glamorous beauty styling for family events, pre-wedding cocktail nights, or luxury receptions. Styled to elevate your natural charm with elegant contours and soft-glam eyes.",
    features: [
      "High-definition soft contouring base",
      "Elegant smokey eye or delicate shimmer shadow matching event attire",
      "Full premium strip lashes application included",
      "Setting lock for overnight celebrations"
    ],
    duration: "1.25 Hours",
    productsUsed: ["NARS", "Fenty Beauty", "Rare Beauty", "Huda Beauty"],
    startingPrice: 10000
  }
];

export const bridalPackages: BridalPackage[] = [
  {
    id: "basic-bridal-pack",
    name: "Classic Bridal Package",
    tagline: "Elegant elegance and essential beauty for your special day.",
    price: 18000,
    duration: "2.5 Hours",
    features: [
      "Premium HD Foundation application",
      "Standard individual silk lashes",
      "Essential pre-makeup skin hydration ritual",
      "Traditional bridal dupatta draping & jewelry placement",
      "Styling of basic hair accessories",
      "In-studio session with Suvo Dev senior artists"
    ],
    addOnsAvailable: ["Hair Extensions (+ ₹3,000)", "Luxury Skin Ampoule Therapy (+ ₹2,000)"],
    bestFor: "Brides seeking standard timeless elegance with absolute premium reliability."
  },
  {
    id: "premium-bridal-pack",
    name: "Premium Radiant Bridal Package",
    tagline: "Exclusive on-location artistry and elevated luxury styling.",
    price: 30000,
    duration: "3 Hours",
    features: [
      "Exclusive artistry performed personally by Suvo Dev",
      "Premium Airbrush or High-End Luminous HD Foundation",
      "Luxury 4-step skin preparation (including squalane massage)",
      "Premium custom individual lash design (various lengths/densities)",
      "Premium dupatta draping, jewelry setting, and custom hair floral support",
      "On-location travel inside municipal limits included",
      "Deluxe bridal beauty touch-up kit (mini lipstick, oil papers, powder puff)"
    ],
    addOnsAvailable: ["Bridal Party / Maid of Honor Makeup (+ ₹6,000 per person)", "Early Morning Call before 6 AM (+ ₹3,000)"],
    bestFor: "Brides desiring a fully bespoke, personally curated look by Suvo with maximum longevity."
  },
  {
    id: "luxury-bridal-pack",
    name: "Royal Atelier Ultimate Package",
    tagline: "The gold standard of bridal beauty. Pure luxury, zero stress.",
    price: 50000,
    duration: "Full-Day Dedicated Artistry",
    features: [
      "Full priority booking - Suvo Dev takes only one wedding on this day",
      "Bespoke pre-wedding 1-hour consultation and digital facial analysis",
      "Choice of Airbrush or Luminous Gold-infused HD Base",
      "Premium skin preparation with collagen-infused bio-cellulose eye patches",
      "Both Bridal ceremony look AND a secondary Reception look transformation",
      "Suvo Dev remains on-site for continuous touch-ups until the reception starts",
      "Premium Bridal Touch-Up Bag (luxury full-size lipstick, blotting papers, compact)",
      "Travel costs covered state-wide"
    ],
    addOnsAvailable: ["Bridal Mother Complimentary Soft-Glam", "Hair Extension rental included"],
    bestFor: "The luxury bride demanding complete day-of dedication, outfit-change transformations, and constant camera readiness."
  },
  {
    id: "destination-bridal-pack",
    name: "Destination Wandering Elegance",
    tagline: "Exquisite global beauty wherever your wedding paradise lies.",
    price: 85000,
    duration: "3-Day Wedding Coverage",
    features: [
      "Complete 3-day coverage (Mehendi, Sangeet, and main Wedding Day)",
      "Bespoke looks curated to align with each separate celebration theme",
      "Unrestricted access to Suvo Dev & a supporting assistant",
      "Complimentary styling for 2 immediate family members for all events",
      "Global travel ready (charges for flight & lodging to be managed or reimbursed)",
      "Premium waterproof airbrush systems utilized exclusively to tackle beach/desert climates"
    ],
    addOnsAvailable: ["Pre-wedding shoot styling included"],
    bestFor: "Exclusive royal weddings, palatial destination ceremonies (Rajasthan, Goa, Bali, Amalfi)."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rhea Banerjee",
    role: "Luxury Bride",
    event: "Destination Wedding in Jaipur",
    quote: "Working with Suvo Dev was the absolute best decision of my wedding. He created a bespoke look that perfectly complemented my red sabyasachi lehenga. The base looked like glowing skin, and it photographed like absolute perfection.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=150&auto=format&fit=crop"
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Fashion Model",
    event: "Vogue India Campaign Shoot",
    quote: "Suvo is an architectural wizard with skin texture. He creates editorial dewy glass skin that doesn't melt under hot studio lights. His creative instincts are top-notch and always bring editorial layouts to life.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop"
  },
  {
    id: "t3",
    name: "Dr. Anjali Sen",
    role: "Classic Bride",
    event: "Kolkata Reception",
    quote: "I wanted extremely subtle, elegant makeup as I don't wear cosmetic products daily. Suvo listend to me so carefully. He crafted an HD soft-glam look that made me feel so beautiful and completely confident, without looking heavy.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop"
  }
];

export const blogArticles: BlogArticle[] = [
  {
    id: "skincare-prep-flawless-makeup",
    title: "The Golden Rule: Skincare Prep Secrets for Flawless Bridal Makeup",
    excerpt: "Why the perfect wedding look starts 3 months before. A step-by-step hydration and exfoliating timeline from Suvo Dev's studio.",
    category: "Skincare",
    tags: ["Bridal Beauty", "Skincare", "Wedding Prep"],
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&auto=format&fit=crop&q=80",
    readTime: "6 Min Read",
    date: "June 28, 2026",
    author: "Suvo Dev",
    content: `When it comes to luxury bridal makeup, there is a fundamental truth that every bride should know: **Your makeup is only as flawless as the canvas underneath.** Over my years of styling royal brides and celebrity models, I have observed that skin preparation dictates 80% of the final makeup longevity and finish.

### 1. The 3-Month Countdown: Deep Hydration
Three months before your wedding, pivot your focus from heavy exfoliation to structural cellular hydration. 
* **Hyaluronic Infusions:** Incorporate a triple-molecular-weight hyaluronic acid serum onto damp skin twice daily.
* **Barrier Protection:** Maintain a strong ceramide barrier. Do not experiment with new intensive retinol or chemical peels within 30 days of your celebrations.

### 2. The Night Before: Gentle Re-texturizing
Avoid harsh clay masks or intensive mechanical scrubs the night before. Instead:
* **Enzyme Peeling:** Use a mild fruit enzyme peel (papaya or pineapple-based) to gently sweep away dead flakes without causing redness.
* **Overnight Hydration Sheet:** Seal with a premium biocellulose sheet mask soaked in rose water and marine collagen.

### 3. The Morning of: Lymphatic Awakening
When you sit in my chair, the first 15 minutes are dedicated entirely to active skincare prep. I utilize a signature cooling squalane massage. By massaging the face upwards towards the lymph nodes behind the ears, we reduce overnight puffiness, lift the jawline, and bring a natural rosy circulation to the cheeks. This minimizes the need for thick color correctors or heavy foundation layers!`
  },
  {
    id: "hd-vs-airbrush-makeup",
    title: "HD Makeup vs. Airbrush Makeup: Which is Perfect for Your Wedding?",
    excerpt: "An in-depth professional comparison detailing finishes, skin compatibility, humidity resistance, and photographer recommendations.",
    category: "Makeup Tips",
    tags: ["HD Makeup", "Airbrush", "Bridal Advice"],
    image: "https://images.unsplash.com/photo-1487412947147-5ce40f135ee5?w=800&auto=format&fit=crop&q=80",
    readTime: "5 Min Read",
    date: "May 15, 2026",
    author: "Suvo Dev",
    content: `Choosing between HD (High Definition) makeup and Airbrush makeup is one of the most frequent questions I receive in my studio consultation suite. Both techniques produce spectacular results, but they serve different skin profiles, climates, and visual aesthetics.

### What is HD Makeup?
HD makeup uses traditional, premium-grade cosmetic foundations formulated with micro-fine light-diffusing particles. These particles absorb light rather than bouncing it back, ensuring your skin looks completely poreless and natural under high-intensity 4K/8K cameras.
* **The Finish:** Natural-satin, highly buildable, mimics real human skin perfectly.
* **Best For:** Normal, dry, or combination skin types. Highly recommended for brides who love a soft, touchable, and dewier finish.

### What is Airbrush Makeup?
Airbrush makeup is applied using a professional mini compressor system that atomizes liquid silicone-based foundation into a micro-fine mist. This mist settles evenly across the face in micro-dots rather than a continuous coat.
* **The Finish:** Absolute velvet-matte, incredibly uniform, with unparalleled longevity.
* **Best For:** Oily, acne-prone, or humid climates. Airbrush makeup is completely sweat-proof and transfer-resistant. It will lock in place and won't transfer onto fabrics when hugging guests!

### Suvo's Professional Recommendation
If you have dry skin or are celebrating in a cool indoor setting, go with **HD Artistry** for that radiant lit-from-within look. If you are having an outdoor, tropical, or summer destination wedding, choose **Airbrush Artistry** to safeguard your beauty from morning sangeet to late-night phere!`
  },
  {
    id: "bridal-beauty-trends-2026",
    title: "2026 Bridal Beauty Trends: The Dawn of the 'Quiet Luxury' Glow",
    excerpt: "Step aside heavy baking. This season is all about monochromatic terracottas, delicate individual wisps, and glass-skin bases.",
    category: "Beauty Trends",
    tags: ["Trends", "Quiet Luxury", "Glamour"],
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80",
    readTime: "4 Min Read",
    date: "April 10, 2026",
    author: "Suvo Dev",
    content: `As we progress through the 2026 wedding season, we are witnessing a beautiful, grand shift in bridal beauty aesthetics. The days of heavy, thick 'instagram' makeup and extreme baking are transitioning into an era of **Quiet Luxury Beauty**—where elegance is achieved through micro-precision, seamless blending, and glowing vitality.

### 1. Monochromatic Harmony
Instead of contrasting bold eyes with totally neutral lips, 2026 is celebrating monochromatic warmth. We use similar tones—like rich toasted praline, soft terracotta, or antique rose gold—harmoniously across the eyes, cheeks, and lips. This creates a highly sophisticated and flattering cohesion.

### 2. Custom Lash Map Artistry
Thick, heavy synthetic strip lashes are replaced with custom lash maps. We select individual silk lash clusters of varying lengths, curling profiles, and densities to custom sculpt the client's eye structure. This elongates the eye elegantly and feels completely weightless.

### 3. Luminous Glass Skin Bases
Matte is no longer flat. The current standard is 'Dimensional Matte' or 'Luminous Glass' skin. By using targeted powdering only on high-shine areas (the T-zone) and allowing the perimeter of the face and the high cheekbones to reflect light naturally, we achieve an incredibly youthful and athletic glow that radiates health.`
  }
];

export const faqs: FAQItem[] = [
  {
    id: "f1",
    question: "How far in advance should I book my bridal makeup?",
    answer: "Because we prioritize absolute quality and take a very limited number of weddings per day to guarantee dedication, our bridal slots fill up rapidly. We highly recommend booking 6 to 12 months in advance, especially for peak wedding seasons (October to February).",
    category: "booking"
  },
  {
    id: "f2",
    question: "Do you travel on-location for destination weddings?",
    answer: "Yes, absolutely! Suvo Dev and our elite assistant team are fully equipped with compact, travel-safe luxury lighting and heavy-duty travel cases. We frequently travel state-wide and globally for luxury destination weddings. Travel and accommodation expenses are arranged in the destination package or reimbursed separately.",
    category: "services"
  },
  {
    id: "f3",
    question: "What is the difference between Airbrush and HD makeup?",
    answer: "HD makeup uses premium light-diffusing formulas applied with brushes and sponge blenders for a highly realistic, buildable skin-like satin finish. Airbrush makeup is sprayed using a compressed mist system, yielding a completely uniform, velvet-matte, highly sweat-proof and transfer-proof finish. Both look breathtaking, and we recommend which to use based on your skin type and weather.",
    category: "services"
  },
  {
    id: "f4",
    question: "Can I schedule a makeup trial session before booking?",
    answer: "Yes! We offer separate private bridal trial sessions at our studio. During the trial, we conduct a facial structure analysis, try out skin prep formulations, and design your complete makeup look. If you decide to book a Premium or Royal package, a percentage of the trial fee is credited directly towards your package balance.",
    category: "booking"
  },
  {
    id: "f5",
    question: "Which cosmetics and beauty brands are in your kit?",
    answer: "We carry exclusively luxury and prestige professional brands. Our kits are stocked with Giorgio Armani, Chanel, Charlotte Tilbury, Tom Ford, Cle de Peau, Yves Saint Laurent, Pat McGrath, Estée Lauder, NARS, Houglass, Westman Atelier, and Danessa Myricks. We constantly sanitize all palettes and use disposable micro-applicators for absolute hygiene.",
    category: "products"
  }
];

export const BRANDS_WORKED_WITH = [
  { name: "Vogue India", logo: "VOGUE" },
  { name: "Lakmé Fashion Week", logo: "LAKMÉ" },
  { name: "L'Oréal Paris", logo: "L'ORÉAL" },
  { name: "Sabyasachi", logo: "SABYASACHI" },
  { name: "Estée Lauder", logo: "ESTÉE LAUDER" },
  { name: "Harper's Bazaar", logo: "BAZAAR" }
];

export const INSTAGRAM_POSTS = [
  { id: "i1", url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop", likes: "1.2k" },
  { id: "i2", url: "https://images.unsplash.com/photo-1522337094846-8a8101f49413?w=400&h=400&fit=crop", likes: "890" },
  { id: "i3", url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop", likes: "1.5k" },
  { id: "i4", url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop", likes: "2.1k" },
  { id: "i5", url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop", likes: "940" },
  { id: "i6", url: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=400&h=400&fit=crop", likes: "1.1k" }
];
