"use client";

import { useEffect, useState } from "react";
import { ChatLayout } from "@/components/chat/chat-layout";
import { Conversation, Message } from "@/types/chat";
import { generateId } from "@/utils/generate-id";

const initialConversationId = generateId();

export default function ChatPage() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: initialConversationId,
      title: "New Chat",
      createdAt: new Date(),
      messages: [],
    },
  ]);

  const [activeConversationId, setActiveConversationId] =
    useState(initialConversationId);

  const [isTyping, setIsTyping] = useState(false);

  const activeConversation = conversations.find(
    (conversation) => conversation.id === activeConversationId,
  );

  useEffect(() => {
    if (!activeConversation) return;

    if (activeConversation.messages.length > 0) {
      const firstMessage = activeConversation.messages[0];

      setConversations((prev) =>
        prev.map((conversation) =>
          conversation.id === activeConversation.id
            ? {
                ...conversation,
                title: firstMessage.content.slice(0, 30),
              }
            : conversation,
        ),
      );
    }
  }, [activeConversation]);

  const handleSendMessage = (content: string) => {
    if (!activeConversation) return;

    const userMessage: Message = {
      id: generateId(),
      role: "user",
      content,
      createdAt: new Date(),
    };

    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === activeConversation.id
          ? {
              ...conversation,
              messages: [...conversation.messages, userMessage],
            }
          : conversation,
      ),
    );

    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: generateId(),
        role: "assistant",
        content: `# AI Response

You said:

> ${content}

\`\`\`ts
const response = "This is a mock AI response";
console.log(response);
\`\`\`

This UI is fully frontend-only with local state.`,
        createdAt: new Date(),
      };

      setConversations((prev) =>
        prev.map((conversation) =>
          conversation.id === activeConversation.id
            ? {
                ...conversation,
                messages: [...conversation.messages, assistantMessage],
              }
            : conversation,
        ),
      );

      setIsTyping(false);
    }, 1800);
  };

  const handleNewChat = () => {
    const newConversation: Conversation = {
      id: generateId(),
      title: "New Chat",
      createdAt: new Date(),
      messages: [],
    };

    setConversations((prev) => [newConversation, ...prev]);
    setActiveConversationId(newConversation.id);
  };

  return (
    <ChatLayout
      conversations={conversations}
      activeConversationId={activeConversationId}
      onSelectConversation={setActiveConversationId}
      onNewChat={handleNewChat}
      messages={activeConversation?.messages || []}
      onSendMessage={handleSendMessage}
      isTyping={isTyping}
    />
  );
}