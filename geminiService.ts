
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getKittenMatchRecommendation = async (userData: string, lang: string = 'ru') => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User Context: ${userData}. Language: ${lang}`,
      config: {
        systemInstruction: `You are an expert feline behaviorist from 'Great Elf' cattery. 
        Analyze if the user's lifestyle suits a Devon Rex cat. 
        Focus on: 
        1. Social compatibility.
        2. Maintenance (hypoallergenic qualities, grooming).
        3. Living conditions.
        Tone: Premium, expert, empathetic. 
        Language: Use the provided language (${lang}).
        Output MUST be JSON with 'analysis' and 'tagline'.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING },
            tagline: { type: Type.STRING }
          },
          required: ["analysis", "tagline"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    const fallbacks: any = {
      ru: { analysis: "Девон-рексы идеально подходят для активных семей.", tagline: "Ваш эльф ждет вас." },
      en: { analysis: "Devon Rex cats are perfect for active families who love companion pets.", tagline: "Your elf is waiting." },
      ua: { analysis: "Девон-рекси ідеально підходять для активних родин.", tagline: "Ваш ельф чекає на вас." }
    };
    return fallbacks[lang] || fallbacks.ru;
  }
};
