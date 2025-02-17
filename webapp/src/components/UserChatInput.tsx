import { Camera, Paperclip, Send, Smile } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { handleUserChatMessage } from "@/actions/ChatActions";
import { useChatContext } from "@/contexts/ChatContext";

export default function UserChatInput() {

    const [userMsg, setUserMsg] = useState<string>("");
    const {addChatMessage} = useChatContext();

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUserMsg(event.target.value);
    };

    const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
          event.preventDefault();
          handleSendClick();
        }
    };

    const handleSendClick = async () => {
        // USER INPUT VALIDATION

        // ADD USER INPUT  + AI_MESSAGE_LOADING TO CONTEXT
        addChatMessage({
            "id": "",
            "senderType": "user",
            "timestamp": "2:34 PM",
            "content": userMsg.slice(0),
            "status": ""
        });

        // CLEAR TEXTBOX
        setUserMsg('');

        // PROMPT AI
        const aiResponse = await handleUserChatMessage(userMsg);

        // REMOVE AI_MESSAGE_LOADING + ADD AI RESPONSE TO CONTEXT
        if (aiResponse != false) {
            addChatMessage({
                "id": "",
                "senderType": "ai",
                "timestamp": "2:34 PM",
                "content": aiResponse,
                "delayInSeconds": 5,
                "errors": []
            });
        }
    }

    return (
        <div className="flex gap-2">
            <div className="flex bg-white rounded-full items-center px-4 gap-2">
                <Smile />
                <Input value={userMsg} onKeyDown={handleKeyDown} onChange={handleInputChange} className="flex-grow border-none focus:ring-none focus:ring-blue-500 focus-visible:border-none focus:border-none" placeholder="Message" />
                <Paperclip />
                <Camera />
            </div>
            <Button className="rounded-full w-[30] h-[30] p-3 bg-dark-green" onClick={handleSendClick}>
                {/* <Mic /> */}
                <Send />
            </Button>
        </div>
    );
}