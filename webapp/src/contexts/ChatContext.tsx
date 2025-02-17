'use client';

import { ChatContextInterface, UserInfo, Agent, AiModel, AiOrUserConversationMessage, ConversationEvalReport } from '@/models/ui';
import { getAgentsForUser, getConversationMessagesForConversation, getConversationEvalReportForConversation, getConversationsForModel, getModelsForAgent, getUserInfo } from '@/services/dataService';
import React, { createContext, useState, ReactNode, useContext } from 'react';


const ChatContext = createContext<ChatContextInterface>({
    "userInfo": null,
    "agents": null,
    "activeAgent": null,
    "aiModels": null,
    "activeAiModel": null,
    "conversationMessages": null,
    "conversationEvalReport": null,
    "initializeChatContext": (string)=>{}
});

export const ChatContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo|null>(null);
  const [agents, setAgents] = useState<Agent[]|null>(null);
  const [activeAgent, setActiveAgent] = useState<Agent|null>(null);
  const [aiModels, setAiModels] = useState<AiModel[]|null>(null);
  const [activeAiModel, setActiveAiModel] = useState<AiModel|null>(null);
  const [conversationMessages, setConversationMessages] = useState<AiOrUserConversationMessage[]|null>(null);
  const [conversationEvalReport, setConversationEvalReport] = useState<ConversationEvalReport|null>(null);

  const initializeChatContext = (userId:string) => {
    
    // GET USER INFO
    const _userInfo = getUserInfo(userId);
    setUserInfo(_userInfo);

    // GET AGENTS LIST
    const _agents = getAgentsForUser(userId);
    setAgents(_agents);
    if (!_agents || _agents.length <= 0) return;

    // SET ACTIVE AGENT + GET AI MODELS
    setActiveAgent(_agents ? _agents[0] : null);
    const _aiModels = getModelsForAgent(_agents[0].id);
    setAiModels(_aiModels);
    if (!_aiModels || _aiModels.length <= 0) return;

    // SET ACTIVE MODEL + GET CONVERSATIONS
    setActiveAiModel(_aiModels[0]);
    const _conversations = getConversationsForModel(_aiModels[0].id);
    if (!_conversations || _conversations.length <= 0) return;

    // SET ACTIVE CONVERSATION + GET CONVERSATION MESSAGES
    const _activeConversation = _conversations[0];
    const _conversationMessages = getConversationMessagesForConversation(_activeConversation.id);
    setConversationMessages(_conversationMessages);

    // GET CONVERSATION EVAL REPORT
    const _conversationEvalReport = getConversationEvalReportForConversation(_activeConversation.id);
    setConversationEvalReport(_conversationEvalReport);
  }
  
  return (
    <ChatContext.Provider value={{ userInfo, agents, activeAgent, aiModels, activeAiModel, conversationMessages, conversationEvalReport, initializeChatContext }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatContextProvider');
  }
  return context;
};