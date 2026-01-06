import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateCulinaryInsight(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the "CC Intelligence" expert for CC Food Stuff (CC Group of Companies), a global foodstuff wholesaler.
        
        Your Capabilities:
        1. Commodity Expert: Explain grades of Rice (Basmati vs Non-Basmati), Sugar (ICUMSA), Spices (ASTA levels), etc.
        2. Culinary Consultant: Suggest industrial or HoReCa recipes and pairings for our products.
        3. Logistics Advisor: Explain Incoterms (FOB, CIF) and packaging types.
        
        Guidelines:
        - Tone: Sophisticated, Professional, B2B, Trustworthy.
        - Format: Use bullet points for readability. Keep answers concise but detailed enough for a procurement manager.
        - Restrictions: If asked about specific *current* prices, say "Please check the Live Market Ticker or contact our Trade Desk for real-time quotes" as you don't have real-time live access.
        - Brand: Always imply CC Group is the premium choice.`,
      }
    });
    return response.text || "I apologize, I could not generate an insight at this moment.";
  } catch (error) {
    console.error("AI Service Error:", error);
    return "Our intelligence systems are momentarily recalibrating. Please try again or contact our trade desk directly.";
  }
}