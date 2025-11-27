import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { MessageRole } from "../types";
import { TRIP_DATA } from "../constants";

// Initialize the Gemini Client
// IMPORTANT: process.env.API_KEY must be set in the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// Prepare system context based on the trip data
const systemContext = `
You are a helpful and enthusiastic travel assistant for a specific trip: "${TRIP_DATA.tripName}".
Here is the full itinerary JSON data:
${JSON.stringify(TRIP_DATA)}

Your goal is to answer questions about this specific trip. 
- If the user asks "Where do we eat on Day 2?", look at Day 2's activities and recommendations.
- If the user asks about the weather, give general advice for Central Vietnam (Da Nang/Hoi An).
- Be concise, friendly, and use emojis.
- If a user asks something completely unrelated to travel or Vietnam, politely steer them back to the trip.
- Format your response with simple Markdown (bolding, lists) for readability.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemContext,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<string>> => {
  const chat = getChatSession();
  
  try {
    const resultStream = await chat.sendMessageStream({ message });
    
    // Generator to yield text chunks
    async function* streamGenerator() {
      for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    }

    return streamGenerator();

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};