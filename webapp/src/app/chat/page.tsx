"use client";

import ConversationMessagesWithErrors from "@/components/ConversationMessagesWithErrors";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import UserChatInput from "@/components/UserChatInput";
import { useChatContext } from "@/contexts/ChatContext";
import { Layers, Plus, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useState } from "react";

export default function ChatPage() {

    const [isContextInitialized, setIsContextInitialized] = useState<boolean>(false);

    const {initializeChatContext} = useChatContext();

    useEffect(() => {
      initializeChatContext();
      setIsContextInitialized(true);
    }, []);

    if (!isContextInitialized) {
      return null;
    }

    return (
      <div className="w-full h-full flex">
        {/* SIDEBAR */}
        <Sidebar />

        {/* LEFT PANEL */}
        <LeftPanel />

        {/* MAIN SECTION */}
        <div className="h-full w-full flex-grow p-4 bg-light-gray overflow-hiddeb flex flex-col items-center">

          {/* NEW CHAT BUTTON */}
          <div className="py-2 flex gap-4">
                <Button variant="secondary"><Layers />Run Test Suite</Button>
                <Button><Plus />New Chat</Button>
          </div>

          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="h-[700px] w-[700px] wa-frame flex flex-col">
              {/* LINE MARKER TO SHOW START OF ERROR MESSAGES */}
              <div className="w-full flex">
                <div className="w-[50%] h-[100px] pr-[40px]">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <h2 className="text-xl font-bold">Message Errors</h2>
                    <h3 className="text-sm italic">(Total 37 errors)</h3>
                  </div>
                  <div className="w-full h-[1px] bg-dark-gray"/>
                </div>
              </div>
              
              {/* CONVERSATION + ERRORS */}
              <div className="w-full flex-grow flex flex-col overflow-y-scroll">
                <ConversationMessagesWithErrors />
              </div>

              <div className="w-full flex">
                {/* HELPER MESSAGE */}
                <div className="w-[50%] pr-[40px]">
                  <div className="w-full h-[1px] bg-dark-gray"/>
                </div>
                {/* USER CHAT INPUT */}
                <div className="w-[50%] mb-[40px] mt-2 pl-8 pr-7">
                  <UserChatInput />
                </div>
              </div>
            </div>
          </div>

          {/* ZOOM IN/OUT BUTTONS */}
          <div className="py-2">
                <div className="flex items-center text-muted-foreground bg-white rounded-full">
                  <Button variant="link" ><ZoomIn /></Button>
                  /
                  <Button variant="link" ><ZoomOut /></Button>
                </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <RightPanel />
      </div>
    );
}