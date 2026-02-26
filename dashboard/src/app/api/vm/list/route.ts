import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    vms: [
      {
        id: "vm-1",
        name: "macOS-Sonoma-Dev",
        os: "macOS 14 Sonoma",
        status: "running",
        cpu: 45,
        memory: 62,
        disk: 38,
      },
      {
        id: "vm-2",
        name: "kiyomi-bot-runtime",
        os: "macOS 13 Ventura",
        status: "running",
        cpu: 28,
        memory: 41,
        disk: 22,
      },
      {
        id: "vm-3",
        name: "build-server",
        os: "macOS 15 Sequoia",
        status: "stopped",
        cpu: 0,
        memory: 0,
        disk: 15,
      },
      {
        id: "vm-4",
        name: "legacy-compat",
        os: "macOS 12 Monterey",
        status: "stopped",
        cpu: 0,
        memory: 0,
        disk: 12,
      },
    ],
  });
}
