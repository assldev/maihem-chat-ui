import { ModelCardPropsInterface } from "@/models/ui"
import { useState } from "react"

const getDeploymentStatusPill = (deploymentStatus:string) => {
    switch(deploymentStatus) {
        case "DEV": {
            return <span className="rounded-md px-2 bg-blue-200 text-xs flex flex-col justify-center">{deploymentStatus}</span>
        }
        case "UAT": {
            return <span className="rounded-md px-2 bg-yellow-200 text-xs flex flex-col justify-center">{deploymentStatus}</span>
        }
        case "PDT": {
            return <span className="rounded-md px-2 bg-green-200 text-xs flex flex-col justify-center">{deploymentStatus}</span>
        }
        case "PRD": {
            return <span className="rounded-md px-2 bg-green-700 text-white text-xs flex flex-col justify-center">{deploymentStatus}</span>
        }
    }
}

const updateSelectedModelInContext = (modelId:string) => {
    // SELECT MODEL IN CONTEXT
}

export default function ModelCard({id, name, lastCommitMsg, lastCommitTimestamp, deploymentStatus, selected}:ModelCardPropsInterface) {
    const [isHovering, setIsHovering] = useState<boolean>(false);
  
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleOnClick = () => {
        updateSelectedModelInContext(id);
    };

    return (
        <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleOnClick}
            className={`flex flex-col gap-1 rounded-md border-2 p-2 cursor-pointer ${ (selected || isHovering) && 'bg-light-gray'}`}
        >
            <div className="flex gap-1">
                {deploymentStatus && getDeploymentStatusPill(deploymentStatus)}
                <p className="text-sm">{name}</p>
            </div>
            <div className="flex flex-col">
                <p className="text-xs italic text-muted-foreground"><span className="font-bold">Last Commit: </span>{lastCommitTimestamp}</p>
                <p className="text-xs italic text-muted-foreground">{lastCommitMsg}</p>
            </div>
        </div>
    );
}