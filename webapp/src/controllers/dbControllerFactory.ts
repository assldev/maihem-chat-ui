import { AgentDBInterface, AiModelDBInterface, ConversationDBInterface, ConversationEvalReportDBInterface, ConversationMessageDBInterface, UserInfoDBInterface } from "@/models/db";
import { dbConfig } from "../configs/appConfig";
import mockDbController from "./mockDbController";

export interface DbControllerInterface {
    getUserInfoFromDb(userId:string):UserInfoDBInterface;
    getAgentsFromDb(userId:string):AgentDBInterface[];
    getModelsFromDb(agentId:string):AiModelDBInterface[];
    getConversationsFromDb(modelId:string):ConversationDBInterface[];
    getConversationMessagesFromDb(conversationId:string):ConversationMessageDBInterface[];
    getConversationEvalReportFromDb(conversationId:string):ConversationEvalReportDBInterface;
}

export const getDbInstance = () => {
    const {serviceProvider} = dbConfig;
    switch (serviceProvider) {
        case 'mock': {
            return mockDbController;
        }
        default: {
            throw new Error("DB_CONFIG_INVALID");
        }
    }
}