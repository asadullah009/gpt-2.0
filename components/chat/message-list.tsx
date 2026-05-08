"use client";

import { Message } from "@/types/chat";
import { useAutoScroll } from "@/hooks/use-auto-scroll";
import { MessageBubble } from "./message-bubble";
import { TypingIndicator } from "./typing-indicator";

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
}

export function MessageList({
  messages,
  isTyping,
}: MessageListProps) {
  const bottomRef = useAutoScroll([messages, isTyping]);

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-8">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {isTyping && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}