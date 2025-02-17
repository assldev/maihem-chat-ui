'use client';

import { ChevronsLeft, ChevronsRight } from "lucide-react";
import QuickActionsMenu from "./QuickActionsMenu";
import ConversationEvalReport from "./ConversationEvalReport";
import { useState } from "react";

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

    const [expanded, setExpanded] = useState<boolean>(true);

    const handleCollapseRequest = () => {
        setExpanded(!expanded);
    }

    return (
        <div className={`h-full flex flex-col overflow-hidden transition-all ${expanded && "w-[25%] max-w-[500px] gap-4 pt-5"}`}>
            
            {!expanded ?
             <div className="w-full h-full flex flex-col justify-center items-center gap-2 bg-light-green px-4">
                <div className="text-3xl">87</div>
                <div className="text-sm">/100</div>
                <div className="text-base font-bold txt-green-pass">PASS</div>
            </div>
            :
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
            }

            {/* COLLAPSE */}
            <div className="w-full py-4 border-t-2">
                <button className="w-full h-full flex justify-center text-muted-foreground" onClick={handleCollapseRequest}>
                    {expanded ? <>Collapse <ChevronsRight /></> : <ChevronsLeft />}
                </button>
            </div>
        </div>
    );
}