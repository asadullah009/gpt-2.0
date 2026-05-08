"use client";

export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-24 w-full animate-pulse rounded-3xl bg-white/5" />
      <div className="h-16 w-2/3 animate-pulse rounded-3xl bg-white/5" />
      <div className="h-32 w-full animate-pulse rounded-3xl bg-white/5" />
    </div>
  );
}