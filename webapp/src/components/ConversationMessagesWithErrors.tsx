"use client";

import { useEffect, useRef, useState } from "react";
import { MessageErrorsAccordion } from "./MessageErrorsAccordion";
import { Button } from "./ui/button";
import { Save } from "lucide-react";
import { useChatContext } from "@/contexts/ChatContext";
export default function ConversationMessagesWithErrors() {

    const [isCommentVisible, setCommentVisiblity] = useState<boolean>(false);

    const {conversationMessages} = useChatContext();

    const toggleCommentView = () => {
        setCommentVisiblity(!isCommentVisible);
    }

    const messagesEndRef = useRef(null);
    const messageListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesEndRef.current && messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, []);
    
    useEffect(() => {
        if (messagesEndRef.current && messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, [conversationMessages]);


    return (
        <div ref={messageListRef} className="overflow-y-auto">
            {conversationMessages && conversationMessages.map((message) => (
                <>
                    {message.senderType == "user" &&
                        <div className="w-full h-auto flex justify-end mb-2">
                            {/* USER MESSAGE */}
                            <div className="w-[50%] px-[50px]">
                                <div className="user-message">
                                    <div className="absolute top-0 right-[-6px]">
                                        <svg width="10" height="10">
                                            <polygon className="user-message-callout" points="0,0 10,0 0,10" />
                                        </svg>
                                    </div>
                                    <div className="">{message.content}</div>
                                    <div className="absolute bottom-1 right-1 text-xs text-muted-foreground">{message.timestamp}</div>
                                </div>
                            </div>
                        </div>
                    }

                    {message.senderType == "ai" && 
                        <div className="w-full h-auto flex mb-2">
                            {/* ERRORS (IF ANY) */}
                            <div className="w-[50%] pr-[40px]">
                                <div className="w-full bg-white p-2 rounded-lg">
                                    <MessageErrorsAccordion msgId={message.id} errors={message.errors} commentViewToggle={toggleCommentView} />
                                    <span className="text-sm italic">Response Delay: {message.delayInSeconds}s</span>
                                    {isCommentVisible && 
                                        <>
                                            <textarea rows={2} placeholder="Add your comment here" className="w-full border-gray-100 p-1 text-xs" />
                                            <Button variant="outline"><Save /></Button>
                                        </>
                                    }
                                </div>
                            </div>
                            {/* AI MESSAGE */}
                            <div className="w-[50%] px-[50px]">
                                <div className="relative bg-white rounded-md p-2 text-sm">
                                    <div className="absolute top-0 left-[-6px]">
                                        <svg width="10" height="10">
                                            <polygon className="ai-message-callout" points="0,0 10,0 10,10" />
                                        </svg>
                                    </div>
                                    <div className="">{message.content}</div>
                                    <div className="absolute bottom-1 right-1 text-xs text-muted-foreground">{message.timestamp}</div>
                                </div>
                            </div>
                        </div>
                    }
                </>
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
}