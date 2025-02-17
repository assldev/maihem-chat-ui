'use client';

import { ChevronsLeft, ChevronsRight } from "lucide-react";
import ModelCard from "./ModelCard";
import { useState } from "react";
import { useChatContext } from "@/contexts/ChatContext";

export default function LeftPanel() {

    const [expanded, setExpanded] = useState<boolean>(true);

    const handleCollapseRequest = () => {
        setExpanded(!expanded);
    }

    const {activeAgent, aiModels, activeAiModel} = useChatContext();
    
    return (
        <div className={`h-full pt-5 flex flex-col gap-4 overflow-hidden transition-all ${expanded && "w-[25%] max-w-[500px]"}`}>
            
            {/* HEADER */}
            {!expanded ? 
            <div className="w-full flex-grow flex flex-col justify-center items-center gap-2">
                {Array.from("MODELS").map((character) => (
                    <span className="px-4 text-xs text-muted-foreground font-bold" key={character}>{character.toUpperCase()}</span>
                ))}
            </div>
            :
            <div className="px-4">
                <h1 className="text-3xl font-extrabold">Models</h1>
                <h2 className="text-sm">{activeAgent && activeAgent.name}</h2>
            </div>
            }

            {/* MODELS LIST */}
            {expanded && 
            <div className="px-4 flex-grow flex flex-col gap-2 overflow-y-scroll">
                {aiModels && aiModels.map((model) => (
                    <ModelCard 
                        key={model.id}
                        id={model.id}
                        name={model.name}
                        lastCommitMsg={model.lastCommitMsg}
                        lastCommitTimestamp={model.lastCommitTimestamp}
                        deploymentStatus={model.deploymentStatus}
                        selected={model.id == activeAiModel!.id}
                    />
                ))}
            </div>
            }

            {/* COLLAPSE CONTROL */}
            <div className="w-full py-4 border-t-2">
                <button className="w-full h-full flex justify-center text-muted-foreground" onClick={handleCollapseRequest}>
                    {expanded ? <><ChevronsLeft /> Collapse</> : <ChevronsRight />}
                </button>
            </div>
            
        </div>
    );
}