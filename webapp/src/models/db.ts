export interface UserCommentDBInterface {
    "commentId": string
    "referenceType": string,
    "referenceId": string,
    "userId": string,
    "content": string
}

export interface AiMessageErrorDBInterface {
    "metricID": string,
    "metricLabel": string,
    "score": number,
    "maxScore": number,
    "explanation": string,
    "isFlagged": boolean,
    "comments": UserCommentDBInterface[]
}

export interface ConversationErrorDBInterface {
    "metricId": string,
    "metricLabel": string,
    "hasFailed": boolean,
    "explanation": string
}

export interface ConversationMessageDBInterface {
    "id": string,
    "senderType": string,
    "timestamp": string,
    "content": string
}

export interface UserConversationMessageDBInterface extends ConversationMessageDBInterface {
    "status"?: string
}

export interface AiConversationMessageDBInterface extends ConversationMessageDBInterface {
    "delayInSeconds"?: number,
    "errors"?: AiMessageErrorDBInterface[]
}

export interface AiOrUserConversationMessageDBInterface extends UserConversationMessageDBInterface, AiConversationMessageDBInterface {};

export interface AgentDBInterface {
    "id": string,
    "name": string,
    "icon": string
}

export interface AiModelDBInterface {
    "id": string,
    "name": string,
    "lastCommitMsg": string,
    "lastCommitTimestamp": string,
    "deploymentStatus": string|null,
    "conversations": ConversationDBInterface[]
}

export interface ConversationDBInterface {
    "id": string;
    "messages": AiOrUserConversationMessageDBInterface[]
}

export interface UserInfoDBInterface {
    "id": string,
    "name": string,
    "email": string,
    "initials": string,
    "avatar": string
}

export interface ConversationErrorDBInterface {
    "metricId": string,
    "metricLabel": string,
    "hasFailed": boolean,
    "explanation": string
}

export interface ConversationEvalReportDBInterface {
    "score": number,
    "maxScore": number,
    "totalErrorsCount": number,
    "avgDelay": number,
    "avgDelayUnit": string,
    "conversationErrors": ConversationErrorDBInterface[]
}