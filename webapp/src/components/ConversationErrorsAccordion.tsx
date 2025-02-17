import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Check, X } from "lucide-react"

interface EvalReportError {
    "metricId": string,
    "metricLabel": string,
    "hasFailed": boolean,
    "explanation": string
}

interface ConversationErrorsAccordionPropInterface {
    errors:EvalReportError[]
}
  
export function ConversationErrorsAccordion({errors}:ConversationErrorsAccordionPropInterface) {
    return (
      <Accordion type="single" collapsible className="w-full bg-white text-sm">
        {errors.map((errorObj) => (
            <AccordionItem value={errorObj.metricId}>
                <AccordionTrigger>
                    <div className="flex items-start gap-1">
                        {errorObj.hasFailed ? <X className="txt-red-fail" /> : <Check className="txt-green-pass" />}
                        {errorObj.metricLabel}
                    </div>
                </AccordionTrigger>
                <AccordionContent>{errorObj.explanation}</AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>
    )
}  