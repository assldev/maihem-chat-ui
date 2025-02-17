import { getQueryFunction } from "@/controllers/ai/aiServiceFactory"

export const queryAI = async (requestMsg:string):Promise<string|false> => {
    
    return new Promise(async (resolve) => {
        const aiInstance = getQueryFunction();
        
        if (aiInstance === null) {
            resolve(false);
            return;
        }
    
        const aiResponse = await aiInstance.sendQuery(requestMsg);
        resolve(aiResponse ? aiResponse : false);
    });
}