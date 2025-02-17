// UI DATA
export interface UserComment {
    "commentId": string
    "referenceType": string,
    "referenceId": string,
    "userId": string,
    "content": string
}

export interface AiMessageError {
    "metricID": string,
    "metricLabel": string,
    "score": number,
    "maxScore": number,
    "explanation": string,
    "isFlagged": boolean,
    "comments": UserComment[]
}

export interface EvalReportError {
    "metricId": string,
    "metricLabel": string,
    "hasFailed": boolean,
    "explanation": string
}

export interface ConversationError {
    "metricId": string,
    "metricLabel": string,
    "hasFailed": boolean,
    "explanation": string
}

export interface ConversationEvalReport {
    "score": number,
    "maxScore": number,
    "totalErrorsCount": number,
    "avgDelay": number,
    "avgDelayUnit": string,
    "conversationErrors": ConversationError[]
}

export interface ConversationMessage {
    "id": string,
    "senderType": string,
    "timestamp": string,
    "content": string
}

export interface UserConversationMessage extends ConversationMessage {
    "status"?: string
}

export interface AiConversationMessage extends ConversationMessage {
    "delayInSeconds"?: number,
    "errors"?: AiMessageError[]
}

export interface AiOrUserConversationMessage extends UserConversationMessage, AiConversationMessage {};

export interface Agent {
    "id": string,
    "name": string,
    "icon": string
}

export interface AiModel {
    "id": string,
    "name": string,
    "lastCommitMsg": string,
    "lastCommitTimestamp": string,
    "deploymentStatus": string|null
}

export interface Conversation {
    "id": string;
    "messages": AiOrUserConversationMessage[]
}

export interface UserInfo {
    "id": string,
    "name": string,
    "email": string,
    "initials": string,
    "avatar": string
}


// UI ELEMENTS
export interface ConversationErrorsAccordionPropInterface {
    errors:EvalReportError[]
}

export interface MessageErrorsAccordionPropInterface {
    msgId: string,
    errors:AiMessageError[]|undefined,
    commentViewToggle: () => void
}

export interface ModelCardPropsInterface {
    id: string,
    name: string,
    lastCommitMsg: string,
    lastCommitTimestamp: string,
    deploymentStatus: string|null,
    selected: boolean
}

export interface AgentItemPropsInterface {
    id: string,
    name: string,
    iconName: string,
    selected: boolean,
    expanded: boolean
}

export interface QuickActionMenuItemInterface {
    isButton: boolean,
    iconName: string,
    label: string
}

export interface ChatContextInterface {
    userInfo: UserInfo|null,
    agents: Agent[]|null,
    activeAgent: Agent|null,
    aiModels: AiModel[]|null,
    activeAiModel: AiModel|null,
    conversationMessages: AiOrUserConversationMessage[]|null,
    conversationEvalReport: ConversationEvalReport|null,
    initializeChatContext: (userId:string)=>void,
    addChatMessage: (chatMessage:UserConversationMessage|AiConversationMessage)=>void
}