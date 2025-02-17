"use server";

import { queryAI } from "@/services/aiService";

export const handleUserChatMessage = async (userMsg:string) => {
    // USER INPUT VALIDATION

    // RAISE ANALYTICS EVENT

    // PROMPT AI
    const aiResponse = await queryAI(userMsg);
    return aiResponse;
}