
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export const getJewelryStylingAdvice = async (userInput: string, preferences: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is asking: "${userInput}". Their general preferences are: "${preferences}". You are an elite jewelry consultant at AURELIA LUXE. Provide elegant, concise, and expert advice on choosing the perfect piece. Use sophisticated language.`,
      config: {
        systemInstruction: "You are the Aurelia Luxe AI Concierge. You are helpful, sophisticated, and expert in fine jewelry, diamonds, and minimalist aesthetics. Keep responses under 100 words.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our concierge is momentarily unavailable. Please reach out to our human specialists for immediate assistance.";
  }
};
