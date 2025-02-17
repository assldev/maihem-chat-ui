// UI DATA
export interface UserComments {
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
    "comments": UserComments[]
}

export interface EvalReportError {
    "metricId": string,
    "metricLabel": string,
    "hasFailed": boolean,
    "explanation": string
}

export interface ChatContextInterface {
    
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