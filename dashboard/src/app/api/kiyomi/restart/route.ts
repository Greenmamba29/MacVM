import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "restarting",
    message: "Kiyomi bot is restarting...",
    estimated_downtime_seconds: 5,
    timestamp: new Date().toISOString(),
  });
}
