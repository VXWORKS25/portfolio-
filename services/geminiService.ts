import { GoogleGenAI, Type } from "@google/genai";
import { ARCHITECT_SYSTEM_PROMPT } from "../constants";

// Helper to get client safely
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) throw new Error("API_KEY not found in environment");
  return new GoogleGenAI({ apiKey });
};

export const chatWithArchitect = async (history: { role: string; text: string }[], newMessage: string) => {
  const client = getClient();
  
  // We use the Pro model for complex architectural reasoning
  const modelId = "gemini-3-pro-preview";

  try {
    const response = await client.models.generateContent({
      model: modelId,
      contents: [
        ...history.map(h => ({
          role: h.role,
          parts: [{ text: h.text }]
        })),
        {
          role: "user",
          parts: [{ text: newMessage }]
        }
      ],
      config: {
        systemInstruction: ARCHITECT_SYSTEM_PROMPT,
        temperature: 0.7,
        thinkingConfig: {
            thinkingBudget: 2048 // Enable thinking for deeper architectural design
        }
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
