import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    logs: [
      { timestamp: "12:45:01", level: "info", message: "Kiyomi bot instance initialized" },
      { timestamp: "12:45:02", level: "info", message: "Connected to VM: kiyomi-bot-runtime" },
      { timestamp: "12:45:03", level: "info", message: "Loading bot configuration..." },
      { timestamp: "12:45:04", level: "info", message: "Bot modules loaded: core, nlp, scheduler" },
      { timestamp: "12:45:05", level: "warn", message: "Rate limiter threshold set to default (100 req/min)" },
      { timestamp: "12:45:06", level: "info", message: "Kiyomi bot is ready and listening" },
    ],
  });
}
