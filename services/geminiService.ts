import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedRecipe } from "../types";

// Initialize the Gemini client directly with the API key as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRecipe = async (ingredientsOrDish: string): Promise<GeneratedRecipe | null> => {
  try {
    const model = "gemini-3-flash-preview";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: `You are a Corporate Executive Chef for 'CC Group', a global foodstuff wholesaler. 
      Your client is a business (Restaurant, Hotel, or Manufacturer).
      Create a commercial menu concept or bulk recipe formulation using these inputs: ${ingredientsOrDish}. 
      
      Focus on:
      1. Scalability for commercial kitchens.
      2. Usage of bulk commodities (Rice, Oil, Spices).
      3. Profitability.

      The output must be a structured JSON object.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "Commercial Menu Item Name" },
            conceptDescription: { type: Type.STRING, description: "Marketing description for a menu or product label" },
            targetSegment: { type: Type.STRING, description: "Ideal for: Fine Dining, QSR, Catering, or Retail Pack" },
            servingYield: { type: Type.STRING, description: "Batch size (e.g. '50 Portions' or '10kg Batch')" },
            ingredients: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of bulk ingredients with metric quantities"
            },
            instructions: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Commercial preparation steps" 
            },
            operationalTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Tips for storage, mise-en-place, or cost reduction"
            },
            estimatedCost: { type: Type.STRING, description: "Food Cost rating: Low, Medium, High" }
          },
          required: ["title", "conceptDescription", "targetSegment", "servingYield", "ingredients", "instructions", "operationalTips", "estimatedCost"],
        },
      },
    });

    const text = response.text;
    if (!text) return null;

    const recipe: GeneratedRecipe = JSON.parse(text);
    return recipe;

  } catch (error) {
    console.error("Error generating recipe:", error);
    return null;
  }
};