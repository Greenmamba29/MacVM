import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Kiyomi",
    status: "running",
    uptime: "4h 23m",
    version: "1.0.0",
    vm: "kiyomi-bot-runtime",
    memory_usage_mb: 847,
    requests_handled: 1247,
    errors: 3,
    started_at: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
  });
}
