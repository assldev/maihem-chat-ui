import { BarChart3, Briefcase, CheckCircle, FileLineChart, FileSearch2, FileText, Github, Layers, Mail } from "lucide-react";
import { Button } from "./ui/button"

interface QuickActionMenuItemInterface {
    isButton: boolean,
    iconName: string,
    label: string
}

export interface QuickActionsMenuPropsInterface {
    header: string,
    menuItems: QuickActionMenuItemInterface[]
}

const getIcon = (iconName:string) => {
    switch(iconName) {
        case "CheckCircle": {
            return <CheckCircle />;
        } 
        case "Layers": {
            return <Layers />;
        } 
        case "Github": {
            return <Github />;
        } 
        case "FileText": {
            return <FileText />;
        } 
        case "FileSearch2": {
            return <FileSearch2 />;
        }
        case "Briefcase": {
            return <Briefcase />;
        }
        case "FileLineChart": {
            return <FileLineChart />;
        }
        case "BarChart3": {
            return <BarChart3 />;
        }
        case "Mail": {
            return <Mail />
        }
        default: {
            return null;
        }
    }
}


export default function QuickActionsMenu({header, menuItems}:QuickActionsMenuPropsInterface) {
    return (
        <div className="flex flex-col items-start">
            {/* HEADER */}
            <h3 className="text-sm font-bold text-muted-foreground pb-1 pt-2">{header}</h3>

            {/* MENU ITEMS */}
            {menuItems.map((menuItem) => (
                <>
                    {/* BUTTON */}
                    {menuItem.isButton && 
                        <Button className="bg-green-btn font-bold pl-2">
                            {getIcon(menuItem.iconName)}
                            {menuItem.label}
                        </Button>
                    }

                    {/* LINK */}
                    {!menuItem.isButton && 
                        <Button variant="link" className="text-xs txt-blue-link py-0 pl-2 h-7">
                            {getIcon(menuItem.iconName)}
                            {menuItem.label}
                        </Button>
                    }
                </>
            ))}
        </div>
    )
}