import { NextRequest } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/salesAgent";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "openai/gpt-oss-120b";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey || apiKey === "YOUR_GROQ_API_KEY_HERE") {
    return Response.json(
      {
        error: "GROQ_API_KEY belum dikonfigurasi. Edit file .env.local.",
      },
      { status: 500 }
    );
  }

  const body = await req.json();
  const messages: { role: string; content: string }[] = body.messages;

  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json(
      { error: "messages array wajib diisi" },
      { status: 400 }
    );
  }

  const fullMessages: ChatMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    ...messages.slice(-20).map((m) => ({
      role: (m.role === "assistant" ? "assistant" : "user") as
        | "user"
        | "assistant",
      content: String(m.content || ""),
    })),
  ];

  try {
    const res = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: fullMessages,
        temperature: 0.4,
        max_tokens: 1024,
        stream: true,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("Groq API error:", res.status, errBody);
      return Response.json(
        {
          error: `Groq API error: ${res.status}`,
          fallback: true,
        },
        { status: 502 }
      );
    }

    return new Response(res.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("Groq connection error:", err);
    return Response.json(
      { error: "Gagal terhubung ke Groq API", fallback: true },
      { status: 502 }
    );
  }
}
