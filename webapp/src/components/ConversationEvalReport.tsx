import { ConversationErrorsAccordion } from "./ConversationErrorsAccordion";

const getConversationEvalReportFromContext = () => {
    return {
        "score": 87,
        "maxScore": 100,
        "totalErrorsCount": 39,
        "avgDelay": 20,
        "avgDelayUnit": "seconds",
        "conversationErrors": [{
            "metricId": "metric_goal_completion",
            "metricLabel": "Goal Completion",
            "hasFailed": true,
            "explanation": "The Chatbot did not achieve the Persona's intent (goal) because it repeatedly focused on Roman history instead of providing detailed information about the Industrial Revolution, which was the Persona's primary focus for their exam preparation."
        }, {
            "metricId": "metric_retention",
            "metricLabel": "Retention",
            "hasFailed": false,
            "explanation": "The model has performed fine with regards to this metric so far."
        }, {
            "metricId": "metric_nps",
            "metricLabel": "Net Promoter Score",
            "hasFailed": true,
            "explanation": "The Persona would not promote the Chatbot because it repeatedly failed to address the Persona's focus on the Industrial Revolution and instead kept reverting to Roman history, which was not relevant to the Persona's exam preparation needs."
        }],
        "result": "PASS"
    };
}

export default function ConversationEvalReport() {

    const evalReport = getConversationEvalReportFromContext();

    return (
        <div className="mx-2 flex flex-col bg-light-green py-2 rounded-xl gap-2">
            {/* HEADER */}
            <h3 className="font-bold text-lg text-center">Real-time Evaluation</h3>

            {/* SCORE */}
            <div className="flex justify-center items-end gap-2">
                <h4 className="font-bold text-5xl text-center">{evalReport.score}</h4>
                <span>/ {evalReport.maxScore}</span>
            </div>

            {/* ERRORS */}
            <p className="text-xs italic text-center">Total {evalReport.totalErrorsCount} errors</p>

            {/* AVERAGE DELAY */}
            <p className="text-xs italic text-center">Average Delay: {evalReport.avgDelay} {evalReport.avgDelayUnit}</p>

            {/* ERRORS ACCORDION */}
            <ConversationErrorsAccordion errors={evalReport.conversationErrors} />

            {/* PASS / FAIL RESULT */}
            <div className="text-xl font-extrabold txt-green-pass text-center">PASS</div>
        </div>
    );
}