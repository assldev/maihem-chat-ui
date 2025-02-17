'use client';

import { ChatContextInterface, UserInfo, Agent, AiModel, AiOrUserConversationMessage, ConversationEvalReport } from '@/models/ui';
import React, { createContext, useState, ReactNode, useContext } from 'react';


const ChatContext = createContext<ChatContextInterface>({
    "userInfo": null,
    "agents": null,
    "activeAgent": null,
    "aiModels": null,
    "activeAiModel": null,
    "conversationMessages": null,
    "conversationEvalReport": null,
});

export const ChatContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo|null>(getUserInfoFromContext());
  const [agents, setAgents] = useState<Agent[]|null>(getAgentsListFromContext());
  const [activeAgent, setActiveAgent] = useState<Agent|null>(getActiveAgentFromContext());
  const [aiModels, setAiModels] = useState<AiModel[]|null>(getModelsFromContext());
  const [activeAiModel, setActiveAiModel] = useState<AiModel|null>(getActiveModelFromContext());
  const [conversationMessages, setConversationMessages] = useState<AiOrUserConversationMessage[]|null>(getConversationFromContext());
  const [conversationEvalReport, setConversationEvalReport] = useState<ConversationEvalReport|null>(getConversationEvalReportFromContext());
  
  return (
    <ChatContext.Provider value={{ userInfo, agents, activeAgent, aiModels, activeAiModel, conversationMessages, conversationEvalReport }}>
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

// MOCK INITIAL DATA
const getConversationEvalReportFromContext = () => {
    return {
        "score": 87,
        "maxScore": 100,
        "totalErrorsCount": 39,
        "avgDelay": 20,
        "avgDelayUnit": "seconds",
        "conversationErrors": [{
            "metricId": "metric_goal_completion",
            "metricLabel": "Goal Completion",
            "hasFailed": true,
            "explanation": "The Chatbot did not achieve the Persona's intent (goal) because it repeatedly focused on Roman history instead of providing detailed information about the Industrial Revolution, which was the Persona's primary focus for their exam preparation."
        }, {
            "metricId": "metric_retention",
            "metricLabel": "Retention",
            "hasFailed": false,
            "explanation": "The model has performed fine with regards to this metric so far."
        }, {
            "metricId": "metric_nps",
            "metricLabel": "Net Promoter Score",
            "hasFailed": true,
            "explanation": "The Persona would not promote the Chatbot because it repeatedly failed to address the Persona's focus on the Industrial Revolution and instead kept reverting to Roman history, which was not relevant to the Persona's exam preparation needs."
        }],
        "result": "PASS"
    };
}

const getConversationFromContext = () => {
  return [{
      "id": "msg_jwdlznkbyq",
  "senderType": "user",
      "timestamp": "2:32 PM",
      "content": "Hey there! I'm super excited to learn about the Industrial Revolution. I've got an exam tomorrow and I want to understand everything about it, especially how it connects to today's world. Can you help me out?",
      "status": "read"
  }, {
      "id": "msg_tqabrcvmji",
  "senderType": "ai",
      "timestamp": "2:32 PM",
      "content": "I'm glad you're excited to learn about the Industrial Revolution, but I think there's been a mistake. I'm a Roman history expert, and the Industrial Revolution is actually a topic in the history of Western civilization, particularly in the European context. It's a fascinating period that started in the 18th century and transformed society, economy, and politics. I'd be happy to help you with it. However, before we dive in, let's clarify that the Roman Empire ended in the 5th century AD, and the Industrial Revolution occurred much later. If you're preparing for an exam tomorrow, we can quickly cover the key points, but I'll need to adapt our focus to cover the relevant aspects of the Industrial Revolution.",
      "delayInSeconds": 23,
      "errors": [{
          "metricID": "metric_helpfullness",
          "metricLabel": "Helpfullness",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }, {
          "metricID": "metric_hallucination",
          "metricLabel": "Hallucination",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }, {
          "metricID": "metric_bias_gender",
          "metricLabel": "Gender Bias",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }]
  }, {
      "id": "msg_fghujklpoi",
  "senderType": "user",
      "timestamp": "2:32 PM",
      "content": "Hey there! I'm super excited to learn about the Industrial Revolution. I've got an exam tomorrow and I want to understand everything about it, especially how it connects to today's world. Can you help me out?",
      "status": "read"
  }, {
      "id": "msg_zxcvbnm123",
  "senderType": "ai",
      "timestamp": "2:32 PM",
      "content": "I'm glad you're excited to learn about the Industrial Revolution, but I think there's been a mistake. I'm a Roman history expert, and the Industrial Revolution is actually a topic in the history of Western civilization, particularly in the European context. It's a fascinating period that started in the 18th century and transformed society, economy, and politics. I'd be happy to help you with it. However, before we dive in, let's clarify that the Roman Empire ended in the 5th century AD, and the Industrial Revolution occurred much later. If you're preparing for an exam tomorrow, we can quickly cover the key points, but I'll need to adapt our focus to cover the relevant aspects of the Industrial Revolution.",
      "delayInSeconds": 23,
      "errors": [{
          "metricID": "metric_helpfullness",
          "metricLabel": "Helpfullness",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }, {
          "metricID": "metric_hallucination",
          "metricLabel": "Hallucination",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }, {
          "metricID": "metric_bias_gender",
          "metricLabel": "Gender Bias",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }]
  }, {
      "id": "msg_asdfghjkly",
  "senderType": "user",
      "timestamp": "2:32 PM",
      "content": "Hey there! I'm super excited to learn about the Industrial Revolution. I've got an exam tomorrow and I want to understand everything about it, especially how it connects to today's world. Can you help me out?",
      "status": "read"
  }, {
      "id": "msg_qwertyuiop",
  "senderType": "ai",
      "timestamp": "2:32 PM",
      "content": "I'm glad you're excited to learn about the Industrial Revolution, but I think there's been a mistake. I'm a Roman history expert, and the Industrial Revolution is actually a topic in the history of Western civilization, particularly in the European context. It's a fascinating period that started in the 18th century and transformed society, economy, and politics. I'd be happy to help you with it. However, before we dive in, let's clarify that the Roman Empire ended in the 5th century AD, and the Industrial Revolution occurred much later. If you're preparing for an exam tomorrow, we can quickly cover the key points, but I'll need to adapt our focus to cover the relevant aspects of the Industrial Revolution.",
      "delayInSeconds": 23,
      "errors": [{
          "metricID": "metric_helpfullness",
          "metricLabel": "Helpfullness",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }, {
          "metricID": "metric_hallucination",
          "metricLabel": "Hallucination",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }, {
          "metricID": "metric_bias_gender",
          "metricLabel": "Gender Bias",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }]
  }, {
      "id": "msg_1234567890",
  "senderType": "user",
      "timestamp": "2:32 PM",
      "content": "Hey there! I'm super excited to learn about the Industrial Revolution. I've got an exam tomorrow and I want to understand everything about it, especially how it connects to today's world. Can you help me out?",
      "status": "read"
  },{
      "id": "msg_poiuytrewq",
  "senderType": "ai",
      "timestamp": "2:32 PM",
      "content": "I'm glad you're excited to learn about the Industrial Revolution, but I think there's been a mistake. I'm a Roman history expert, and the Industrial Revolution is actually a topic in the history of Western civilization, particularly in the European context. It's a fascinating period that started in the 18th century and transformed society, economy, and politics. I'd be happy to help you with it. However, before we dive in, let's clarify that the Roman Empire ended in the 5th century AD, and the Industrial Revolution occurred much later. If you're preparing for an exam tomorrow, we can quickly cover the key points, but I'll need to adapt our focus to cover the relevant aspects of the Industrial Revolution.",
      "delayInSeconds": 23,
      "errors": [{
          "metricID": "metric_helpfullness",
          "metricLabel": "Helpfullness",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }, {
          "metricID": "metric_hallucination",
          "metricLabel": "Hallucination",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }, {
          "metricID": "metric_bias_gender",
          "metricLabel": "Gender Bias",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }]
  }, {
      "id": "msg_lkjhgfdsam",
  "senderType": "user",
      "timestamp": "2:32 PM",
      "content": "Hey there! I'm super excited to learn about the Industrial Revolution. I've got an exam tomorrow and I want to understand everything about it, especially how it connects to today's world. Can you help me out?",
      "status": "read"
  }, {
      "id": "msg_mnbvcxzlkj",
  "senderType": "ai",
      "timestamp": "2:32 PM",
      "content": "I'm glad you're excited to learn about the Industrial Revolution, but I think there's been a mistake. I'm a Roman history expert, and the Industrial Revolution is actually a topic in the history of Western civilization, particularly in the European context. It's a fascinating period that started in the 18th century and transformed society, economy, and politics. I'd be happy to help you with it. However, before we dive in, let's clarify that the Roman Empire ended in the 5th century AD, and the Industrial Revolution occurred much later. If you're preparing for an exam tomorrow, we can quickly cover the key points, but I'll need to adapt our focus to cover the relevant aspects of the Industrial Revolution.",
      "delayInSeconds": 23,
      "errors": [{
          "metricID": "metric_helpfullness",
          "metricLabel": "Helpfullness",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }, {
          "metricID": "metric_hallucination",
          "metricLabel": "Hallucination",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }, {
          "metricID": "metric_bias_gender",
          "metricLabel": "Gender Bias",
          "score": 20,
          "maxScore": 100,
          "explanation": "The message was somewhat helpful as it provided information about the Industrial Revolution, but it repeatedly mentioned the mix-up and the Chatbot's expertise in Roman history, which could be confusing and frustrating for the Persona who is eager to focus on the Industrial Revolution.",
          "isFlagged": false,
          "comments": []
      }]
  }, {
      "id": "msg_yuiopasdfg",
  "senderType": "user",
      "timestamp": "2:32 PM",
      "content": "Hey there! I'm super excited to learn about the Industrial Revolution. I've got an exam tomorrow and I want to understand everything about it, especially how it connects to today's world. Can you help me out?",
      "status": "read"
  }];
}

const getActiveAgentFromContext = () => {
    return {
        "id": "a_7d1d5a3c9b",
        "name": 'Mortgage Inquiry Bot',
        "icon": 'House'
    };
}

const getModelsFromContext = () => {
    return [{
        "id": "m_a7b3c9d1e5",
        "name": "v3.4.3-RAG-OpenAI",
        "lastCommitMsg": "System Prompt Update to include latest mortgage prices.",
        "lastCommitTimestamp": "Jan 5, 2025 | 2:33 PM",
        "deploymentStatus": "DEV"
    }, {
        "id": "m_f2g8h4i6j0",
        "name": "v3.2.3-RAG-OpenAI",
        "lastCommitMsg": "System Prompt Update to include latest mortgage prices.",
        "lastCommitTimestamp": "Jan 5, 2025 | 2:33 PM",
        "deploymentStatus": "DEV"
    }, {
        "id": "m_k5l1m7n9o3",
        "name": "v3.1.1-RAG-OpenAI",
        "lastCommitMsg": "System Prompt Update to include latest mortgage prices.",
        "lastCommitTimestamp": "Jan 5, 2025 | 2:33 PM",
        "deploymentStatus": "DEV"
    }, {
        "id": "m_p8q4r0s2t6",
        "name": "v2.2.5-RAG-Claude",
        "lastCommitMsg": "System Prompt Update to include latest mortgage prices.",
        "lastCommitTimestamp": "Jan 5, 2025 | 2:33 PM",
        "deploymentStatus": "UAT"
    }, {
        "id": "m_u9v5w1x3y7",
        "name": "v2.1.1-RAG-Claude",
        "lastCommitMsg": "System Prompt Update to include latest mortgage prices.",
        "lastCommitTimestamp": "Jan 5, 2025 | 2:33 PM",
        "deploymentStatus": "PDT"
    }, {
        "id": "m_z0a6b2c8d4",
        "name": "v1.6-RAG-Gemini",
        "lastCommitMsg": "System Prompt Update to include latest mortgage prices.",
        "lastCommitTimestamp": "Jan 5, 2025 | 2:33 PM",
        "deploymentStatus": "PRD"
    }, {
        "id": "m_e1f7g3h9i5",
        "name": "v1.5.3-RAG-Gemini",
        "lastCommitMsg": "System Prompt Update to include latest mortgage prices.",
        "lastCommitTimestamp": "Jan 5, 2025 | 2:33 PM",
        "deploymentStatus": null
    }, {
        "id": "m_j2k8l4m0n6",
        "name": "v1.4.3-RAG-Gemini",
        "lastCommitMsg": "System Prompt Update to include latest mortgage prices.",
        "lastCommitTimestamp": "Jan 5, 2025 | 2:33 PM",
        "deploymentStatus": null
    }];
}

const getActiveModelFromContext = () => {
    return {
        "id": "m_k5l1m7n9o3",
        "name": "v3.1.1-RAG-OpenAI",
        "lastCommitMsg": "System Prompt Update to include latest mortgage prices.",
        "lastCommitTimestamp": "Jan 5, 2025 | 2:33 PM",
        "deploymentStatus": "DEV"
    };
}

const getAgentsListFromContext = () => {
    return [
        {
            "id": "a_e4a4c8b2f9",
            "name": 'Customer Service Bot',
            "icon": 'MessageCircle'
        }, {
            "id": "a_7d1d5a3c9b",
            "name": 'Mortgage Inquiry Bot',
            "icon": 'House'
        }, {
            "id": "a_6b2c8a4f0e",
            "name": 'Investment Advisor',
            "icon": 'TrendingUp'
        }, {
            "id": "a_9a3b5c7d1e",
            "name": 'Fraud Prevention Bot',
            "icon": 'Shield'
        }, {
           "id": "a_2c5b8a1d9f",
            "name": 'Premium Client Concierge',
            "icon": 'Star'
        }
    ];
}

const getUserInfoFromContext = () => {
    return {
        "id": "u_8f4e2d6c0b",
        "name": "Akshit Singla",
        "email": "akshit@maihem.ai",
        "initials": "AK",
        "avatar": "https://github.com/shadcn.png"
    }
}