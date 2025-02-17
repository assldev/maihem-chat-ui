import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { BellPlus, Bug, Compass, Flag, Ghost, Layers, MessageSquare, ThumbsDown, ThumbsUp, UserCheck } from "lucide-react"
import { Button } from "./ui/button"

interface UserComments {
    "commentId": string
    "referenceType": string,
    "referenceId": string,
    "userId": string,
    "content": string
}

interface AiMessageError {
    "metricID": string,
    "metricLabel": string,
    "score": number,
    "maxScore": number,
    "explanation": string,
    "isFlagged": boolean,
    "comments": UserComments[]
}

interface MessageErrorsAccordionPropInterface {
    msgId: string,
    errors:AiMessageError[]|undefined
}

const getIcon = (iconName:string) => {
    switch(iconName) {
        case "Compass": {
            return <Compass />;
        }
        case "Ghost": {
            return <Ghost />;
        }
        case "UserCheck": {
            return <UserCheck />;
        }
        default: {
            return null;
        }
    }
}

const getIconNameFromMetricId = (metricId:string) => {
    switch(metricId) {
        case "metric_helpfullness": {
            return "Compass";
        }
        case "metric_hallucination": {
            return "Ghost";
        }
        case "metric_bias_gender": {
            return "UserCheck";
        }
        default: {
            return null;
        }
    }
}
  
export function MessageErrorsAccordion({msgId, errors}:MessageErrorsAccordionPropInterface) {
    return (
      <Accordion type="single" collapsible className="w-full text-sm">
        {errors && errors.map((errorObj) => (
            <AccordionItem value={`${msgId}_${errorObj.metricID}`} className="rounded-md mb-1">

                {/* METRIC LABEL + SCORE */}
                <AccordionTrigger className="rounded-xl bg-light-red px-2">
                    <div className="flex items-center gap-2 px-2">
                        {getIcon(getIconNameFromMetricId(errorObj.metricID)!)}
                        {errorObj.metricLabel} (Score: {errorObj.score} / {errorObj.maxScore})
                    </div>
                </AccordionTrigger>

                <AccordionContent className="pb-0">
                    <div className="px-2 pt-2 txt-light-red">
                        {/* EXPLANATION */}
                        {errorObj.explanation}

                        <div className="flex">
                            {/* CONTROLS */}
                            <div className="flex-grow flex gap-1">
                                <Button className="px-1 txt-red-fail" variant="link"><Bug /></Button>
                                <Button className="px-1 txt-red-fail" variant="link"><Layers /></Button>
                                <Button className="px-1 txt-red-fail" variant="link"><BellPlus /></Button>
                                <Button className="px-1 txt-red-fail" variant="link"><Flag /></Button>
                                <Button className="px-1 txt-red-fail" variant="link"><MessageSquare /></Button>
                            </div>

                            {/* USER FEEDBACK */}
                            <div className="">
                                <Button className="px-1 txt-red-fail" variant="link"><ThumbsUp /></Button>
                                <Button className="px-1 txt-red-fail" variant="link"><ThumbsDown /></Button>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>
    )
}  