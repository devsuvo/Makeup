import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Initialize Gemini client with proper telemetry headers as required by our skill guidelines
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { skinType, eventType, tonePreference, specialConcerns, preferredStyle } = body;

    if (!skinType || !eventType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const systemInstruction = `You are the Virtual Beauty Consultant for Suvo Dev, an ultra-luxury, high-end Makeup Artist. 
Suvo Dev specializes in:
- Bridal Makeup (Basic, Premium, and Luxury packages)
- Editorial & Fashion Show Makeup
- HD & Airbrush Celebrity Makeup
- Photoshoot & Reception Makeup

Provide a personalized, highly organized, and exceptionally sophisticated skincare preparation routine and custom makeup look design. 
Format your response beautifully with elegant headings, clear bullet points, and high-end beauty insights.

Tone: Luxurious, professional, supportive, warm, and highly expert.
Structure your recommendation to include:
1. **Luxury Skincare Prep**: 3-4 steps tailored specifically to their skin type (${skinType}) and concerns (${specialConcerns || 'None specified'}) to ensure the makeup lays flawlessly.
2. **Custom Makeup Look Recommendation**: Design a signature makeup style matching their event (${eventType}) and style preference (${preferredStyle || 'Elegant and Natural'}) with tone guidance (${tonePreference || 'Radiant & Glowing'}).
3. **Product Textures & Finish**: Suggest whether they should go for Matte, Dewy, HD, or Airbrush finish based on their skin and event.
4. **Recommended Suvo Dev Package**: Politely recommend one of Suvo's premium services (e.g., Luxury Bridal Package, Celebrity HD Makeup, Airbrush Beauty) that perfectly aligns with their profile.
5. **A Signature Quote**: End with a short inspiring quote about beauty, confidence, and self-expression.

Use HTML-like or markdown styling (without raw markdown code blocks like \`\`\` inside the text, just bold fonts and clean spacing) that can be easily displayed.
Sign off elegantly as "Suvo Dev Beauty Atelier".`;

    const prompt = `Please design a bespoke beauty experience for a client with the following profile:
- **Skin Type**: ${skinType}
- **Event**: ${eventType}
- **Tone/Aesthetic Preference**: ${tonePreference || "Naturally radiant and glowing"}
- **Preferred Look Style**: ${preferredStyle || "Luxurious yet comfortable"}
- **Special Skin Concerns**: ${specialConcerns || "None specified"}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const recommendation = response.text || "Unable to generate custom beauty recommendation. Please contact Suvo Dev Studio directly for a private consultation.";

    return NextResponse.json({ recommendation });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Our virtual concierge is temporarily preparing palettes. Please try again soon." },
      { status: 500 }
    );
  }
}
