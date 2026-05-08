"use client";

import { Sparkles } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <Sparkles className="h-10 w-10 text-zinc-300" />
      </div>

      <h2 className="mt-6 text-3xl font-semibold">
        How can I help you today?
      </h2>

      <p className="mt-3 max-w-md text-center text-zinc-400">
        Start a conversation with your AI assistant. This is a fully
        frontend-only ChatGPT-style interface built with Next.js 16.
      </p>
    </div>
  );
}