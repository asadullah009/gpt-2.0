"use client";

import { KeyboardEvent, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleResize = () => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px";
  };

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message.trim());

    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="sticky bottom-0 border-t border-white/10 bg-[#0d0d0d]/90 p-4 backdrop-blur-xl">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-end gap-3 rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
          <textarea
            ref={textareaRef}
            value={message}
            rows={1}
            onChange={(event) => {
              setMessage(event.target.value);
              handleResize();
            }}
            onKeyDown={handleKeyDown}
            placeholder="Message AI Assistant..."
            className="max-h-64 flex-1 overflow-y-auto bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-zinc-500"
          />

          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-3 text-center text-xs text-zinc-500">
          AI can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
}