"use client";

import { useState } from "react";
import { ChatHeader } from "./chat-header";
import { ChatInput } from "./chat-input";
import { MessageList } from "./message-list";
import { EmptyState } from "./empty-state";
import { Sidebar } from "@/components/sidebar/sidebar";
import { MobileSidebar } from "@/components/sidebar/mobile-sidebar";
import { Conversation, Message } from "@/types/chat";
import { AuthModal } from "@/components/auth/auth-modal";

interface ChatLayoutProps {
  conversations: Conversation[];
  activeConversationId: string;
  onSelectConversation: (id: string) => void;
  onNewChat: () => void;
  messages: Message[];
  onSendMessage: (message: string) => void;
  isTyping: boolean;
}

export function ChatLayout({
  conversations,
  activeConversationId,
  onSelectConversation,
  onNewChat,
  messages,
  onSendMessage,
  isTyping,
}: ChatLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [authOpen, setAuthOpen] = useState(false);

  const [user, setUser] = useState<{
    name: string;
    email: string;
  } | null>(null);

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-[#0d0d0d]">
        <div className="hidden md:flex">
          <Sidebar
            conversations={conversations}
            activeConversationId={activeConversationId}
            onSelectConversation={onSelectConversation}
            onNewChat={onNewChat}
            user={user}
            onOpenAuth={() => setAuthOpen(true)}
            onLogout={() => setUser(null)}
          />
        </div>

        <MobileSidebar
                  open={mobileSidebarOpen}
                  onClose={() => setMobileSidebarOpen(false)}
                  conversations={conversations}
                  activeConversationId={activeConversationId}
                  onSelectConversation={onSelectConversation}
                  onNewChat={onNewChat} user={null} onOpenAuth={function (): void {
                      throw new Error("Function not implemented.");
                  } } onLogout={function (): void {
                      throw new Error("Function not implemented.");
                  } }        />

        <div className="flex flex-1 flex-col">
          <ChatHeader
            onOpenSidebar={() => setMobileSidebarOpen(true)}
          />

          <div className="flex-1 overflow-hidden">
            {messages.length === 0 ? (
              <EmptyState />
            ) : (
              <MessageList messages={messages} isTyping={isTyping} />
            )}
          </div>

          <ChatInput onSend={onSendMessage} />
        </div>
      </div>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onLogin={(name, email) => {
          setUser({
            name,
            email,
          });

          setAuthOpen(false);
        }}
      />
    </>
  );
}