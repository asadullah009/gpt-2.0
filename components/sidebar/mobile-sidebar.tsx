"use client";

import { X } from "lucide-react";
import { Conversation } from "@/types/chat";
import { Sidebar } from "./sidebar";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
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

export function MobileSidebar({
  open,
  onClose,
  conversations,
  activeConversationId,
  onSelectConversation,
  onNewChat,
  user,
  onOpenAuth,
  onLogout,
}: MobileSidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed left-0 top-0 z-50 h-screen transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute right-4 top-4 z-50">
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/40"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <Sidebar
          conversations={conversations}
          activeConversationId={activeConversationId}
          onSelectConversation={(id) => {
            onSelectConversation(id);
            onClose();
          }}
          onNewChat={() => {
            onNewChat();
            onClose();
          }}
          user={user}
          onOpenAuth={onOpenAuth}
          onLogout={onLogout}
        />
      </div>
    </>
  );
}