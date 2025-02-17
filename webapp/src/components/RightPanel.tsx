import { ChevronsRight } from "lucide-react";
import QuickActionsMenu from "./QuickActionsMenu";
import ConversationEvalReport from "./ConversationEvalReport";

const approveReviewMenu = {
    "header": 'APPROVE / REJECT',
    "menuItems": [{
        "isButton": true,
        "iconName": 'CheckCircle',
        "label": 'Approve model for UAT'
    }, {
        "isButton": false,
        "iconName": 'Layers',
        "label": 'Review Test Suite'
    }, {
        "isButton": false,
        "iconName": 'Github',
        "label": 'Review Pull Request on GitHub'
    }, {
        "isButton": false,
        "iconName": 'FileText',
        "label": 'Review User Stores in Jira'
    }, {
        "isButton": false,
        "iconName": 'FileSearch2',
        "label": 'Review Requirements in Confluence'
    }, ]
}

const generateReportsMenu = {
    "header": "GENERATE REPORTS",
    "menuItems": [{
        "isButton": false,
        "iconName": 'Briefcase',
        "label": 'Generate Executive Report'
    }, {
        "isButton": false,
        "iconName": 'FileLineChart',
        "label": 'Generate Management Report'
    }, {
        "isButton": false,
        "iconName": 'BarChart3',
        "label": 'Generate Weekly Review Report'
    }]
}

const shareMenu = {
    "header": "SHARE",
    "menuItems": [{
        "isButton": false,
        "iconName": 'Mail',
        "label": 'Email Analytics Team'
    }, {
        "isButton": false,
        "iconName": 'Mail',
        "label": 'Email QA Team'
    }, {
        "isButton": false,
        "iconName": 'Mail',
        "label": 'Email Dev Team'
    }, {
        "isButton": false,
        "iconName": 'Mail',
        "label": 'Email AI Team'
    }, {
        "isButton": false,
        "iconName": 'Mail',
        "label": 'Email Program Manager'
    }, ]
} 

export default function RightPanel() {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-full flex flex-col gap-2 pt-2 overflow-y-scroll">
                {/* APPROVE / REVIEW */}
                <div className="px-4">
                    <QuickActionsMenu header={approveReviewMenu.header} menuItems={approveReviewMenu.menuItems} />
                </div>

                {/* CONVERSATION LEVEL EVAL REPORT */}
                <div className="px-0 py-4">
                    <ConversationEvalReport />
                </div>

                {/* GENERATE REPORTS */}
                <div className="px-4">
                    <QuickActionsMenu header={generateReportsMenu.header} menuItems={generateReportsMenu.menuItems} />
                </div>

                {/* SHARE */}
                <div className="px-4">
                    <QuickActionsMenu header={shareMenu.header} menuItems={shareMenu.menuItems} />
                </div>
            </div>

            {/* COLLAPSE */}
            <div className="w-full py-4 flex justify-center text-muted-foreground border-t-2">
                Collapse <ChevronsRight />
            </div>
        </div>
    );
}