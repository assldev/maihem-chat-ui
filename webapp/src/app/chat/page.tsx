import Sidebar from "@/components/Sidebar";

export default function ChatPage() {
    return (
      <div className="w-full h-full flex">
        {/* SIDEBAR */}
        <div className="h-full w-[60px]">
          <Sidebar />
        </div>

        {/* LEFT PANEL */}
        <div className="h-full w-[200px] bg-blue-200"></div>

        {/* MAIN SECTION */}
        <div className="h-full flex-grow p-10">
          <div className="w-full h-full wa-frame pr-6 flex flex-col">
            <div className="h-[85px] w-[50%] flex">
              <div className="w-full bg-blue-100"></div>
            </div>
            <div className="flex-grow bg-red-100"></div>
            <div className="h-[75px] flex justify-end">
              <div className="w-[275px] mt-1 mb-7 bg-blue-100"></div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="h-full w-[200px] bg-blue-200"></div>
      </div>
    );
  }
  