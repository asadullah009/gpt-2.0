"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "@/types/chat";
import { CodeBlock } from "./code-block";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`animate-in fade-in slide-in-from-bottom-4 duration-300 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-3xl rounded-3xl border px-5 py-4 shadow-xl backdrop-blur-xl ${
          isUser
            ? "border-white/10 bg-white text-black"
            : "border-white/10 bg-white/5 text-white"
        }`}
      >
        <div className="prose prose-invert max-w-none text-sm">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                const { children, className } = props;

                const match = /language-(\w+)/.exec(className || "");

                return match ? (
                  <CodeBlock
                    language={match[1]}
                    code={String(children).replace(/\n$/, "")}
                  />
                ) : (
                  <code className="rounded bg-black/40 px-1 py-0.5">
                    {children}
                  </code>
                );
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}