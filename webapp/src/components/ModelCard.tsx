interface ModelCardPropsInterface {
    name: string,
    lastCommitMsg: string,
    lastCommitTimestamp: string,
    deploymentStatus: string|null,
    selected: boolean
}

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

export default function ModelCard({name, lastCommitMsg, lastCommitTimestamp, deploymentStatus, selected}:ModelCardPropsInterface) {
    return (
        <div className={`flex flex-col gap-1 rounded-md border-2 p-2 ${selected && 'bg-light-gray'}`}>
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