"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({
  language,
  code,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-4 py-2 text-xs">
        <span className="text-zinc-400">{language}</span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-white/10"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}

          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          background: "#0a0a0a",
          padding: "1rem",
          fontSize: "0.85rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}