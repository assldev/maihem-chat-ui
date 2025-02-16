import Image from "next/image";
import { AvatarFallback, Avatar, AvatarImage } from "./ui/avatar";
import AgentBubble from "./AgentBubble";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

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
            "name": 'Investment Advisory Bot',
            "icon": 'TrendingUp'
        }, {
            "id": "a_9a3b5c7d1e",
            "name": 'Fraud Prevention and Security Bot',
            "icon": 'Shield'
        }, {
           "id": "a_2c5b8a1d9f",
            "name": 'Premium Client Concierge Bot',
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

    const agents = getAgentsListFromContext();
    const activeAgent = getActiveAgentFromContext();
    const userInfo = getUserInfoFromContext();

    return (
        <div className="w-full h-full flex flex-col gap-8 px-1 bg-light-gray py-5">
            {/* MAIHEM LOGO */}
            <div className="w-full flex justify-center">
                <Image src="/maihem-logo-only-transparent.png" alt="Maihem Logo" width={20} height={20} />
            </div>
            
            {/* AGENTS LIST */}
            <div className="flex-grow flex flex-col items-center gap-3">
                <h1 className="text-xs text-muted-foreground font-bold text-center">AI AGENTS</h1>
                {agents.map((agent) => (
                    <AgentBubble name={agent.name} iconName={agent.icon} selected={activeAgent.id == agent.id}/>
                ))}
            </div>
            
            {/* USER PILL */}
            <div className="flex flex-col items-center">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Avatar>
                                <AvatarImage src={userInfo.avatar} alt={`Avatar for user: ${userInfo.name}`} />
                                <AvatarFallback>{userInfo.initials}</AvatarFallback>
                            </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="text-sm">{`Logged In as:`}</p>
                            <p className="font-bold">{userInfo.name}</p>
                            <p className="italic">{userInfo.email}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                
            </div>
        </div>
    );
  }
  