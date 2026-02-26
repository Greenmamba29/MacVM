import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { message } = body;

  if (!message || typeof message !== "string") {
    return NextResponse.json(
      { error: "Missing or invalid 'message' field" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    reply: `[Kiyomi] Received: "${message}"`,
    timestamp: new Date().toISOString(),
    processing_time_ms: Math.floor(Math.random() * 200) + 50,
  });
}
