import { House, MessageCircle, Shield, Star, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { AgentItemPropsInterface } from "@/models/ui";

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

const updateSelectedAgentInContext = (agentId:string) => {
    // SELECT AGENT IN CONTEXT
    alert(`Implementation Skipped for this exercise: SELECT_AGENT_WITH_ID_${agentId}`);
}

export default function AgentItem({id, name, iconName, selected, expanded}:AgentItemPropsInterface) {

    const handleOnClick = () => {
        updateSelectedAgentInContext(id);
    }

    return (
        <Button variant="link" onClick={handleOnClick} className={`flex text-md items-center ${expanded && "mx-2"} ${selected && 'bg-white'} hover:no-underline hover:bg-white`}>
            <div className={`flex justify-center items-center w-[40px] h-[40px]`}>
                {getIcon(iconName)}
            </div>
            <div className={`flex-grow overflow-hidden text-left ${!expanded && "hidden"}`}>{name}</div>
        </Button>
    );
}