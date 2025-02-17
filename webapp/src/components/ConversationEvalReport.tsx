import { useChatContext } from "@/contexts/ChatContext";
import { ConversationErrorsAccordion } from "./ConversationErrorsAccordion";

export default function ConversationconversationEvalReport() {

    const {conversationEvalReport} = useChatContext();

    if (conversationEvalReport === null) {
        return null;
    }

    return (
        <div className="mx-2 flex flex-col bg-light-green py-2 rounded-xl gap-2">
            {/* HEADER */}
            <h3 className="font-bold text-lg text-center">Real-time Evaluation</h3>

            {/* SCORE */}
            <div className="flex justify-center items-end gap-2">
                <h4 className="font-bold text-5xl text-center">{conversationEvalReport.score}</h4>
                <span>/ {conversationEvalReport.maxScore}</span>
            </div>

            {/* ERRORS */}
            <p className="text-xs italic text-center">Total {conversationEvalReport.totalErrorsCount} errors</p>

            {/* AVERAGE DELAY */}
            <p className="text-xs italic text-center">Average Delay: {conversationEvalReport.avgDelay} {conversationEvalReport.avgDelayUnit}</p>

            {/* ERRORS ACCORDION */}
            <ConversationErrorsAccordion errors={conversationEvalReport.conversationErrors} />

            {/* PASS / FAIL RESULT */}
            <div className="text-xl font-extrabold txt-green-pass text-center">PASS</div>
        </div>
    );
}