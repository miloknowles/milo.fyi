"use client";

import { useState, useRef } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function StreamingText({ content }: { content: string }) {
  // Split into alternating [word, whitespace, word, ...] tokens, preserving spaces.
  // key={index} means React reuses existing DOM nodes and only mounts new spans,
  // so the animation only fires on freshly arrived tokens.
  const tokens = content.split(/(\s+)/);
  return (
    <>
      {tokens.map((token, i) => (
        <span key={i} className="word-fade-in">
          {token}
        </span>
      ))}
    </>
  );
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  async function sendMessage() {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    const assistantMessage: Message = { role: "assistant", content: "" };
    setMessages([...nextMessages, assistantMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: updated[updated.length - 1].content + chunk,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Something went wrong. Try again.",
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
        Ask me anything
      </p>

      {messages.length > 0 && (
        <div className="flex flex-col gap-4 mb-2">
          {messages.map((msg, i) => (
            <div key={i} className={msg.role === "user" ? "text-right" : ""}>
              {msg.role === "user" ? (
                <span className="inline-block bg-primary/10 text-foreground px-3 py-2 text-sm max-w-[85%]">
                  {msg.content}
                </span>
              ) : (
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {msg.content ? (
                    <StreamingText content={msg.content} />
                  ) : (
                    <span className="inline-block w-1.5 h-3.5 bg-neutral-400 animate-pulse" />
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="relative flex items-end border-b border-neutral-200 dark:border-neutral-700">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What are you working on?"
          rows={1}
          disabled={isLoading}
          className="flex-1 resize-none bg-transparent border-none outline-none ring-0 focus:outline-none focus:ring-0 pl-3 pr-10 py-2.5 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600 disabled:opacity-50 leading-relaxed"
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim() || isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-primary hover:text-primary/70 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Send"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <p className="text-xs text-neutral-400 dark:text-neutral-600">
        AI-generated responses — may not perfectly reflect my views.
      </p>
    </div>
  );
}
