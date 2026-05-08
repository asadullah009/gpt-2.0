"use client";

import { Plus } from "lucide-react";
import { Conversation } from "@/types/chat";
import { SidebarItem } from "./sidebar-item";
import { UserMenu } from "@/components/auth/user-menu";

interface SidebarProps {
  conversations: Conversation[];
  activeConversationId: string;
  onSelectConversation: (id: string) => void;
  onNewChat: () => void;
  user: {
    name: string;
    email: string;
  } | null;
  onOpenAuth: () => void;
  onLogout: () => void;
}

export function Sidebar({
  conversations,
  activeConversationId,
  onSelectConversation,
  onNewChat,
  user,
  onOpenAuth,
  onLogout,
}: SidebarProps) {
  return (
    <aside className="flex h-screen w-80 flex-col border-r border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="p-4">
        <button
          onClick={onNewChat}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium transition hover:bg-white/10"
        >
          <Plus className="h-4 w-4" />
          New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 pb-4">
        <div className="space-y-2">
          {conversations.map((conversation) => (
            <SidebarItem
              key={conversation.id}
              conversation={conversation}
              active={conversation.id === activeConversationId}
              onClick={() => onSelectConversation(conversation.id)}
            />
          ))}
        </div>
      </div>

      <UserMenu
        user={user}
        onOpenAuth={onOpenAuth}
        onLogout={onLogout}
      />
    </aside>
  );
}