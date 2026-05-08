"use client";

import { Moon } from "lucide-react";

export function ThemeToggle() {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10">
      <Moon className="h-4 w-4" />
    </button>
  );
}