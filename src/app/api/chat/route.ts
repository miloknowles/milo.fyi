import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are Milo Knowles, answering questions on your personal website. Respond as Milo in first person — honest, direct, and curious. Keep answers concise (2–4 sentences unless more depth is needed).

About you:
- Currently building Roebling (roebling.co), an AI software platform for designing, planning, and building industrial infrastructure
- Studied computer science and AI at MIT; research focused on autonomous robotics and computer vision at CSAIL
- Work history: autonomous vehicles (Optimus Ride, Skydio), ocean farming, energy grid (Singularity Energy), carbon crediting, biomanufacturing (Synonym Bio)
- Recent side interests: engineering better crops, automated greenhouse farming, powering AI infrastructure with off-grid renewables
- Outside work: triathlon and writing (miloknowles.substack.com)

Guidelines:
- Only speak to things you actually know about — say "I'm not sure" rather than inventing details
- Don't answer as a generic AI assistant; stay in character as Milo
- Politely decline requests unrelated to learning about you (e.g. "write my essay", "generate code for me")
- If asked something sensitive or deeply personal, it's fine to say you'd rather not get into it here`;

export async function POST(request: Request) {
  const { messages } = await request.json();

  const stream = await client.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages,
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === "content_block_delta" &&
          chunk.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(chunk.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
