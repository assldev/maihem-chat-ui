import { ChatContextProvider } from "@/contexts/ChatContext";

export default function ChatPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChatContextProvider>
      {children}
    </ChatContextProvider>
  );
}
