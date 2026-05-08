"use client";

import { MessageSquare } from "lucide-react";
import { Conversation } from "@/types/chat";

interface SidebarItemProps {
  conversation: Conversation;
  active: boolean;
  onClick: () => void;
}

export function SidebarItem({
  conversation,
  active,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
        active
          ? "bg-white text-black"
          : "bg-transparent text-zinc-300 hover:bg-white/5"
      }`}
    >
      <MessageSquare className="h-4 w-4 shrink-0" />

      <span className="truncate text-sm">{conversation.title}</span>
    </button>
  );
}