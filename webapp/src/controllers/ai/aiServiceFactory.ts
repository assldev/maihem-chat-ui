import { aiConfig } from "@/configs/appConfig"
import { azureopenaiInstance } from "./azureai";

export interface AiServiceInterface {
    sendQuery: (requestMsg:string) => Promise<string|null>
}

export const getQueryFunction = ():AiServiceInterface|null => {
    const {serviceProvider} = aiConfig;
    switch (serviceProvider) {
        case 'azure-openai': {
            return azureopenaiInstance;
        }
        default: {
            console.error("INVALID_AI_CONFIG");
            return null;
        }
    }
}