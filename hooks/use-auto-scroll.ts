"use client";

import { DependencyList, useEffect, useRef } from "react";

export function useAutoScroll(dependencies: DependencyList) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, dependencies);

  return ref;
}