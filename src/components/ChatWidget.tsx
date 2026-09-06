"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, Sparkles } from "lucide-react";
import { INTRO_MSG, INTRO_QUICK } from "@/lib/salesAgent";

type Message = { role: "bot" | "user"; text: string };

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: INTRO_MSG },
  ]);
  const [input, setInput] = useState("");
  const [quickReplies, setQuickReplies] = useState<string[]>(INTRO_QUICK);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const value = (text ?? input).trim();
    if (!value || isTyping) return;

    setMessages((prev) => [...prev, { role: "user", text: value }]);
    setInput("");
    setIsTyping(true);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const chatHistory = [
      ...messages.map((m) => ({
        role: m.role === "bot" ? ("assistant" as const) : ("user" as const),
        content: m.text,
      })),
      { role: "user" as const, content: value },
    ];

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatHistory }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${res.status}`);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No readable stream");

      const decoder = new TextDecoder();
      let botText = "";

      setMessages((prev) => [...prev, { role: "bot", text: "" }]);

      while (true) {
        const { done, value: chunk } = await reader.read();
        if (done) break;

        const text = decoder.decode(chunk, { stream: true });
        const lines = text.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") continue;

          try {
            const parsed = JSON.parse(data);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              botText += delta;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "bot",
                  text: botText,
                };
                return updated;
              });
            }
          } catch {
            // skip malformed chunks
          }
        }
      }

      if (!botText) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "bot",
            text: "Maaf, tidak ada respons. Silakan coba lagi atau hubungi WhatsApp 0897-0641-711.",
          };
          return updated;
        });
      }
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === "AbortError") return;

      setMessages((prev) => {
        const updated = [...prev];
        const lastMsg = updated[updated.length - 1];
        if (lastMsg.role === "bot" && lastMsg.text === "") {
          updated[updated.length - 1] = {
            role: "bot",
            text: "⚠️ Gagal terhubung. Coba lagi atau hubungi WhatsApp 0897-0641-711.",
          };
        } else {
          updated.push({
            role: "bot",
            text: "⚠️ Gagal terhubung. Coba lagi atau hubungi WhatsApp 0897-0641-711.",
          });
        }
        return updated;
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Floating action button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-cyan to-purple text-[#050510] flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Buka chat AI Sales Agent"
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-cyan/50"
          animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <Bot className="w-8 h-8" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm card-futuristic rounded-3xl overflow-hidden flex flex-col shadow-[0_0_60px_rgba(0,240,255,0.15)]"
            style={{ height: "min(560px, calc(100vh - 8rem))" }}
          >
            {/* Header */}
            <div className="relative px-5 py-4 bg-gradient-to-r from-cyan/10 to-purple-500/10 border-b border-cyan/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-purple flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-[#050510]" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0a0a1a]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                    AI Sales Agent
                    <Sparkles className="w-3.5 h-3.5 text-cyan" />
                  </div>
                  <p className="text-[11px] text-cyan/60">
                    Wu Ma Dev &bull; Online
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Tutup chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#0a0a1a]/40"
            >
              {messages.map((msg, i) =>
                msg.role === "bot" ? (
                  <div key={i} className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan to-purple flex items-center justify-center shrink-0 mb-1">
                      <Bot className="w-3.5 h-3.5 text-[#050510]" />
                    </div>
                    <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-[#12122a] border border-cyan/10 px-4 py-3 text-sm text-gray-200 leading-relaxed whitespace-pre-line">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-r from-cyan/20 to-purple-500/20 border border-cyan/20 px-4 py-3 text-sm text-white leading-relaxed whitespace-pre-line">
                      {msg.text}
                    </div>
                  </div>
                )
              )}

              {isTyping && (
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan to-purple flex items-center justify-center shrink-0 mb-1">
                    <Bot className="w-3.5 h-3.5 text-[#050510]" />
                  </div>
                  <div className="rounded-2xl rounded-bl-md bg-[#12122a] border border-cyan/10 px-4 py-3">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          className="w-2 h-2 rounded-full bg-cyan/60"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: d * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {!isTyping && quickReplies.length > 0 && (
              <div className="px-4 pb-2 bg-[#0a0a1a]/40 shrink-0">
                <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                  {quickReplies.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="shrink-0 px-3 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 text-[11px] text-cyan/80 hover:bg-cyan/10 hover:text-cyan transition-colors whitespace-nowrap"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 bg-[#0a0a1a]/60 border-t border-cyan/10 shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Tanya soal layanan Wu Ma Dev..."
                  className="flex-1 bg-[#12122a] border border-cyan/10 focus:border-cyan/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none transition-colors"
                  aria-label="Ketik pertanyaan"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan to-purple text-[#050510] flex items-center justify-center hover:opacity-90 disabled:opacity-30 transition-opacity shrink-0"
                  aria-label="Kirim pesan"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-gray-600 mt-2 text-center">
                AI Sales Agent &mdash; hanya menjawab seputar layanan Wu Ma Dev.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}