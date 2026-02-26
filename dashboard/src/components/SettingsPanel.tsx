"use client";

import { useState } from "react";

export default function SettingsPanel() {
  const [settings, setSettings] = useState({
    virtualBuddyPath: "/Applications/VirtualBuddy.app",
    apiHost: "0.0.0.0",
    apiPort: "8090",
    vmStoragePath: "~/VirtualBuddy",
    enableTLS: false,
    webhookUrl: "",
  });

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-foreground/50 text-sm mt-1">
          Configure VirtualBuddy integration and deployment settings
        </p>
      </div>

      <div className="bg-surface border border-border rounded-xl p-5 space-y-4">
        <h3 className="font-semibold">VirtualBuddy Host</h3>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-foreground/50 block mb-1">
              VirtualBuddy Path
            </label>
            <input
              type="text"
              value={settings.virtualBuddyPath}
              onChange={(e) =>
                setSettings({ ...settings, virtualBuddyPath: e.target.value })
              }
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm font-mono focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="text-xs text-foreground/50 block mb-1">
              VM Storage Path
            </label>
            <input
              type="text"
              value={settings.vmStoragePath}
              onChange={(e) =>
                setSettings({ ...settings, vmStoragePath: e.target.value })
              }
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm font-mono focus:outline-none focus:border-accent"
            />
          </div>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-xl p-5 space-y-4">
        <h3 className="font-semibold">API Server</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-foreground/50 block mb-1">
              Bind Address
            </label>
            <input
              type="text"
              value={settings.apiHost}
              onChange={(e) =>
                setSettings({ ...settings, apiHost: e.target.value })
              }
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm font-mono focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="text-xs text-foreground/50 block mb-1">
              Port
            </label>
            <input
              type="text"
              value={settings.apiPort}
              onChange={(e) =>
                setSettings({ ...settings, apiPort: e.target.value })
              }
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm font-mono focus:outline-none focus:border-accent"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setSettings({ ...settings, enableTLS: !settings.enableTLS })
            }
            className={`w-10 h-5 rounded-full transition-colors relative ${
              settings.enableTLS ? "bg-accent" : "bg-border"
            }`}
          >
            <span
              className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                settings.enableTLS ? "left-5" : "left-0.5"
              }`}
            />
          </button>
          <span className="text-sm text-foreground/70">Enable TLS</span>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-xl p-5 space-y-4">
        <h3 className="font-semibold">Webhooks</h3>
        <div>
          <label className="text-xs text-foreground/50 block mb-1">
            Webhook URL (for bot events)
          </label>
          <input
            type="text"
            value={settings.webhookUrl}
            placeholder="https://example.com/webhook"
            onChange={(e) =>
              setSettings({ ...settings, webhookUrl: e.target.value })
            }
            className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="bg-surface border border-border rounded-xl p-5 space-y-4">
        <h3 className="font-semibold">About</h3>
        <div className="text-sm text-foreground/60 space-y-2">
          <p>
            <span className="text-foreground/40">VirtualBuddy:</span>{" "}
            <a
              href="https://github.com/insidegui/VirtualBuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:underline"
            >
              github.com/insidegui/VirtualBuddy
            </a>
          </p>
          <p>
            <span className="text-foreground/40">Dashboard:</span> MacVM Kiyomi
            Bot Dashboard v1.0.0
          </p>
          <p>
            <span className="text-foreground/40">Runtime:</span> Next.js on
            Vercel
          </p>
        </div>
      </div>
    </div>
  );
}
