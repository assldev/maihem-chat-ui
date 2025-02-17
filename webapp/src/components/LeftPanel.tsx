'use client';

import { ChevronsLeft, ChevronsRight } from "lucide-react";
import ModelCard from "./ModelCard";
import { useState } from "react";

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

export default function LeftPanel() {

    const [expanded, setExpanded] = useState<boolean>(true);

    const handleCollapseRequest = () => {
        setExpanded(!expanded);
    }

    const activeAgent = getActiveAgentFromContext();
    const modelsList = getModelsFromContext();
    const activeModel = getActiveModelFromContext();

    return (
        <div className={`h-full pt-5 flex flex-col gap-4 overflow-hidden transition-all ${expanded && "w-[25%] max-w-[500px]"}`}>
            
            {/* HEADER */}
            {!expanded ? 
            <div className="w-full flex-grow flex flex-col justify-center items-center gap-2">
                {Array.from("MODELS").map((character) => (
                    <span className="px-4 text-xs text-muted-foreground font-bold">{character.toUpperCase()}</span>
                ))}
            </div>
            :
            <div className="px-4">
                <h1 className="text-3xl font-extrabold">Models</h1>
                <h2 className="text-sm">{activeAgent.name}</h2>
            </div>
            }

            {/* MODELS LIST */}
            {expanded && 
            <div className="px-4 flex-grow flex flex-col gap-2 overflow-y-scroll">
                {modelsList.map((model) => (
                    <ModelCard 
                        name={model.name}
                        lastCommitMsg={model.lastCommitMsg}
                        lastCommitTimestamp={model.lastCommitTimestamp}
                        deploymentStatus={model.deploymentStatus}
                        selected={model.id == activeModel.id}
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