"use client";

import { useState } from "react";
import StatusCard from "./StatusCard";

interface LogEntry {
  timestamp: string;
  level: "info" | "warn" | "error";
  message: string;
}

const initialLogs: LogEntry[] = [
  { timestamp: "12:45:01", level: "info", message: "Kiyomi bot instance initialized" },
  { timestamp: "12:45:02", level: "info", message: "Connected to VM: kiyomi-bot-runtime" },
  { timestamp: "12:45:03", level: "info", message: "Loading bot configuration..." },
  { timestamp: "12:45:04", level: "info", message: "Bot modules loaded: core, nlp, scheduler" },
  { timestamp: "12:45:05", level: "warn", message: "Rate limiter threshold set to default (100 req/min)" },
  { timestamp: "12:45:06", level: "info", message: "Kiyomi bot is ready and listening" },
];

const levelColors = {
  info: "text-accent-light",
  warn: "text-warning",
  error: "text-danger",
};

export default function KiyomiBotPanel() {
  const [botRunning, setBotRunning] = useState(true);
  const [logs] = useState<LogEntry[]>(initialLogs);
  const [config, setConfig] = useState({
    botName: "Kiyomi",
    vmTarget: "kiyomi-bot-runtime",
    autoRestart: true,
    logLevel: "info",
    maxMemory: "2048",
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Kiyomi Bot</h2>
          <p className="text-foreground/50 text-sm mt-1">
            Manage your Kiyomi bot instance running on macOS VM
          </p>
        </div>
        <button
          onClick={() => setBotRunning(!botRunning)}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            botRunning
              ? "bg-danger/20 text-danger hover:bg-danger/30"
              : "bg-success/20 text-success hover:bg-success/30"
          }`}
        >
          {botRunning ? "Stop Bot" : "Start Bot"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatusCard
          label="Status"
          value={botRunning ? "Running" : "Stopped"}
          color={botRunning ? "text-success" : "text-foreground/50"}
        />
        <StatusCard label="Uptime" value="4h 23m" color="text-accent-light" />
        <StatusCard label="Requests" value="1,247" color="text-foreground" />
        <StatusCard label="Errors" value="3" color="text-danger" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bot Configuration */}
        <div className="bg-surface border border-border rounded-xl p-5">
          <h3 className="font-semibold mb-4">Bot Configuration</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-foreground/50 block mb-1">
                Bot Name
              </label>
              <input
                type="text"
                value={config.botName}
                onChange={(e) =>
                  setConfig({ ...config, botName: e.target.value })
                }
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="text-xs text-foreground/50 block mb-1">
                Target VM
              </label>
              <select
                value={config.vmTarget}
                onChange={(e) =>
                  setConfig({ ...config, vmTarget: e.target.value })
                }
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent"
              >
                <option value="kiyomi-bot-runtime">kiyomi-bot-runtime</option>
                <option value="macOS-Sonoma-Dev">macOS-Sonoma-Dev</option>
                <option value="build-server">build-server</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-foreground/50 block mb-1">
                Max Memory (MB)
              </label>
              <input
                type="text"
                value={config.maxMemory}
                onChange={(e) =>
                  setConfig({ ...config, maxMemory: e.target.value })
                }
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="text-xs text-foreground/50 block mb-1">
                Log Level
              </label>
              <select
                value={config.logLevel}
                onChange={(e) =>
                  setConfig({ ...config, logLevel: e.target.value })
                }
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent"
              >
                <option value="debug">Debug</option>
                <option value="info">Info</option>
                <option value="warn">Warning</option>
                <option value="error">Error</option>
              </select>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() =>
                  setConfig({ ...config, autoRestart: !config.autoRestart })
                }
                className={`w-10 h-5 rounded-full transition-colors relative ${
                  config.autoRestart ? "bg-accent" : "bg-border"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                    config.autoRestart ? "left-5" : "left-0.5"
                  }`}
                />
              </button>
              <span className="text-sm text-foreground/70">Auto-restart on crash</span>
            </div>
          </div>
        </div>

        {/* Bot Logs */}
        <div className="bg-surface border border-border rounded-xl p-5">
          <h3 className="font-semibold mb-4">Live Logs</h3>
          <div className="bg-background rounded-lg p-3 font-mono text-xs space-y-1 h-80 overflow-y-auto">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-foreground/30">{log.timestamp}</span>
                <span className={`uppercase font-bold w-12 ${levelColors[log.level]}`}>
                  {log.level}
                </span>
                <span className="text-foreground/80">{log.message}</span>
              </div>
            ))}
            {botRunning && (
              <div className="flex gap-2 animate-pulse">
                <span className="text-foreground/30">12:45:07</span>
                <span className="text-accent-light uppercase font-bold w-12">
                  info
                </span>
                <span className="text-foreground/80">
                  Awaiting incoming requests...
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* API Endpoints */}
      <div className="bg-surface border border-border rounded-xl p-5">
        <h3 className="font-semibold mb-4">API Endpoints</h3>
        <div className="space-y-2 font-mono text-sm">
          {[
            { method: "GET", path: "/api/kiyomi/status", desc: "Bot status" },
            { method: "POST", path: "/api/kiyomi/message", desc: "Send message" },
            { method: "GET", path: "/api/kiyomi/logs", desc: "Fetch logs" },
            { method: "POST", path: "/api/kiyomi/restart", desc: "Restart bot" },
            { method: "GET", path: "/api/vm/list", desc: "List VMs" },
          ].map((endpoint) => (
            <div
              key={endpoint.path}
              className="flex items-center gap-4 py-2 px-3 rounded-lg hover:bg-surface-hover transition-colors"
            >
              <span
                className={`text-xs font-bold w-12 ${
                  endpoint.method === "GET"
                    ? "text-success"
                    : "text-warning"
                }`}
              >
                {endpoint.method}
              </span>
              <span className="text-foreground/80">{endpoint.path}</span>
              <span className="text-foreground/30 text-xs ml-auto">
                {endpoint.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
