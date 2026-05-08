"use client";

import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

interface ChatHeaderProps {
  onOpenSidebar: () => void;
}

export function ChatHeader({ onOpenSidebar }: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-white/10 bg-black/30 px-4 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSidebar}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <h1 className="text-sm font-semibold">AI Assistant</h1>
          <p className="text-xs text-zinc-400">Frontend UI</p>
        </div>
      </div>

      <ThemeToggle />
    </header>
  );
}
