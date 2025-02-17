import { getDbInstance } from "@/controllers/db/dbControllerFactory";
import { Agent, AiModel, AiOrUserConversationMessage, Conversation, ConversationEvalReport, UserInfo } from "@/models/ui";

const dbController = getDbInstance();

export const getUserInfo = (userId:string) =>  {
    // if (dbController == null) return null;

    const userInfo = dbController.getUserInfoFromDb(userId);

    return userInfo as UserInfo;
}

export const getAgentsForUser = (userId:string) =>  {
    // if (dbController == null) return null;
    const agents = dbController.getAgentsFromDb(userId);

    return agents as Agent[];
}

export const getModelsForAgent = (agentId:string) => {
    // if (dbController == null) return null;

    const models = dbController.getModelsFromDb(agentId);

    return models as AiModel[];
}

export const getConversationsForModel = (modelId:string) => {
    // if (dbController == null) return null;
    
    const conversations = dbController.getConversationsFromDb(modelId);

    return conversations as Conversation[];
}

export const getConversationMessagesForConversation = (conversationId:string) => {
    // if (dbController == null) return null;
    
    const messages = dbController.getConversationMessagesFromDb(conversationId);

    return messages as AiOrUserConversationMessage[];
}
export const getConversationEvalReportForConversation = (conversationId:string) => {
    // if (dbController == null) return null;
    const evalReport = dbController.getConversationEvalReportFromDb(conversationId);

    return evalReport as ConversationEvalReport;
}