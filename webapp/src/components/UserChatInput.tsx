import { Camera, Mic, Paperclip, Smile } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function UserChatInput() {
    return (
        <div className="flex gap-2">
            <div className="flex bg-white rounded-full items-center px-4 gap-2">
                <Smile />
                <Input className="flex-grow border-none focus:ring-none focus:ring-blue-500 focus-visible:border-none focus:border-none" placeholder="Message" />
                <Paperclip />
                <Camera />
            </div>
            <Button className="rounded-full w-[30] h-[30] p-3 bg-dark-green"><Mic /></Button>
        </div>
    );
}