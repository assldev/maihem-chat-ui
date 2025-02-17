import { AZURE_OPENAI_API_KEY } from "@/configs/appConfig";
import { AiServiceInterface } from "./aiServiceFactory";
import { AzureOpenAI } from "openai";

const sendQuery = (requestMsg:string):Promise<string|null> => {
    return new Promise(async (resolve) => {
        const openai = new AzureOpenAI({
            endpoint: "https://maihem-openai-uswest.openai.azure.com",
            apiKey: AZURE_OPENAI_API_KEY,
            apiVersion: "2024-08-01-preview",
            deployment: "maihem-mini",
          });
        
          const result = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: requestMsg }],
          });
        
          resolve(result.choices[0]!.message?.content);
    });
}

export const azureopenaiInstance:AiServiceInterface = {sendQuery};