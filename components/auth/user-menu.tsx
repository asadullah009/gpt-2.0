"use client";

import { LogOut, Settings, User } from "lucide-react";

interface UserMenuProps {
  user: {
    name: string;
    email: string;
  } | null;
  onOpenAuth: () => void;
  onLogout: () => void;
}

export function UserMenu({
  user,
  onOpenAuth,
  onLogout,
}: UserMenuProps) {
  if (!user) {
    return (
      <div className="border-t border-white/10 p-4">
        <button
          onClick={onOpenAuth}
          className="flex h-12 w-full items-center justify-center rounded-2xl bg-white text-sm font-medium text-black transition hover:scale-[1.01]"
        >
          Log in
        </button>
      </div>
    );
  }

  return (
    <div className="border-t border-white/10 p-4">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black">
            <User className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">
              {user.name}
            </p>

            <p className="truncate text-xs text-zinc-400">
              {user.email}
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <button className="flex h-11 w-full items-center gap-3 rounded-2xl px-3 text-sm text-zinc-300 transition hover:bg-white/10">
            <Settings className="h-4 w-4" />
            Settings
          </button>

          <button
            onClick={onLogout}
            className="flex h-11 w-full items-center gap-3 rounded-2xl px-3 text-sm text-red-400 transition hover:bg-red-500/10"
          >
            <LogOut className="h-4 w-4" />
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}