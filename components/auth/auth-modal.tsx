"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onLogin: (name: string, email: string) => void;
}

export function AuthModal({
  open,
  onClose,
  onLogin,
}: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-white">
              {isSignUp ? "Create account" : "Welcome back"}
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              Continue to your AI workspace
            </p>
          </div>

          <div className="space-y-4">
            {isSignUp && (
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Name
                </label>

                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="John Doe"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-white/20"
                />
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Email
              </label>

              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="john@example.com"
                className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-white/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-white/20"
              />
            </div>

            <button
              onClick={() =>
                onLogin(
                  name || "John Doe",
                  email || "john@example.com",
                )
              }
              className="mt-2 flex h-12 w-full items-center justify-center rounded-2xl bg-white text-sm font-medium text-black transition hover:scale-[1.01]"
            >
              {isSignUp ? "Create account" : "Sign in"}
            </button>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}