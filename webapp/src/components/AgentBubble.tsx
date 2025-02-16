import { House, MessageCircle, Shield, Star, TrendingUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface AgentBubblePropsInterface {
    name: string,
    iconName: string,
    selected: boolean
}

const getIcon = (iconName:string) => {
    switch(iconName) {
        case "MessageCircle": {
            return <MessageCircle />;
        } 
        case "House": {
            return <House />;
        } 
        case "TrendingUp": {
            return <TrendingUp />;
        } 
        case "Shield": {
            return <Shield />;
        } 
        case "Star": {
            return <Star />;
        } 
        default: {
            return null;
        }
    }
}

export default function AgentBubble({name, iconName, selected}:AgentBubblePropsInterface) {
    return (
        <div className={`flex justify-center rounded-full w-[40px] h-[40px] ${selected && 'bg-white'}`}>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>{getIcon(iconName)}</TooltipTrigger>
                    <TooltipContent>
                    <p>{name}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}