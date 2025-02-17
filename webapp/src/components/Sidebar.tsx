"use client";

import Image from "next/image";
import { AvatarFallback, Avatar, AvatarImage } from "./ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";
import AgentItem from "./AgentItem";

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

const getActiveAgentFromContext = () => {
    return {
        "id": "a_7d1d5a3c9b",
        "name": 'Mortgage Inquiry Bot',
        "icon": 'House'
    };
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

export default function Sidebar() {
    const [isHovering, setIsHovering] = useState<boolean>(false);
  
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const agents = getAgentsListFromContext();
    const activeAgent = getActiveAgentFromContext();
    const userInfo = getUserInfoFromContext();

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`h-full flex flex-col gap-8 bg-light-gray py-5 overflow-hidden transition-all ${isHovering ? 'w-[550px]' : 'min-w-[60px] px-1'}`}
        >
            {/* MAIHEM LOGO */}
            <div className="w-full flex justify-center">
                {isHovering ? 
                <Image src="/maihem-logo-transparent.png" alt="Maihem Logo" width={100} height={50} /> :
                <Image src="/maihem-logo-only-transparent.png" alt="Maihem Logo" width={20} height={20} />}
            </div>
            
            {/* AGENTS LIST */}
            <div className="flex-grow flex flex-col justify-start gap-3 px-1">
                <h1 className={`w-full text-xs text-muted-foreground font-bold ${!isHovering ? "text-center" : "px-4"}`}>AI AGENTS</h1>
                {agents.map((agent) => (
                    <AgentItem id={agent.id} name={agent.name} iconName={agent.icon} selected={activeAgent.id == agent.id} expanded={isHovering}/>
                ))}
            </div>
            
            {/* USER PILL */}<div className={`flex justify-center items-center gap-4 ${isHovering && "mx-4 px-4 py-2 bg-white rounded-3xl"}`}>
                <Avatar>
                    <AvatarImage src={userInfo.avatar} alt={`Avatar for user: ${userInfo.name}`} />
                    <AvatarFallback>{userInfo.initials}</AvatarFallback>
                </Avatar>
                <div className={`flex-grow ${!isHovering && "hidden"}`}>
                    <p className="text-sm italic">{`Logged In as:`}</p>
                    <p className="font-bold">{userInfo.name}</p>
                    <p className="">{userInfo.email}</p>
                </div>
            </div>
        </div>
    );
}