"use client";

import { useState } from "react";
import StatusCard from "./StatusCard";

interface VM {
  id: string;
  name: string;
  os: string;
  status: "running" | "stopped" | "provisioning";
  cpu: number;
  memory: number;
  disk: number;
}

const initialVMs: VM[] = [
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
];

const statusColors = {
  running: "bg-success",
  stopped: "bg-foreground/30",
  provisioning: "bg-warning",
};

export default function VMDashboard() {
  const [vms, setVms] = useState<VM[]>(initialVMs);

  const toggleVM = (id: string) => {
    setVms((prev) =>
      prev.map((vm) =>
        vm.id === id
          ? {
              ...vm,
              status: vm.status === "running" ? "stopped" : "running",
              cpu: vm.status === "running" ? 0 : Math.floor(Math.random() * 60) + 10,
              memory: vm.status === "running" ? 0 : Math.floor(Math.random() * 50) + 20,
            }
          : vm
      )
    );
  };

  const runningCount = vms.filter((vm) => vm.status === "running").length;
  const totalCpu = Math.round(
    vms.reduce((sum, vm) => sum + vm.cpu, 0) / vms.length
  );
  const totalMemory = Math.round(
    vms.reduce((sum, vm) => sum + vm.memory, 0) / vms.length
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">VM Dashboard</h2>
        <p className="text-foreground/50 text-sm mt-1">
          Manage your VirtualBuddy macOS virtual machines
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatusCard
          label="Active VMs"
          value={`${runningCount}/${vms.length}`}
          color="text-success"
        />
        <StatusCard
          label="Avg CPU Usage"
          value={`${totalCpu}%`}
          color="text-accent-light"
        />
        <StatusCard
          label="Avg Memory"
          value={`${totalMemory}%`}
          color="text-warning"
        />
      </div>

      <div className="space-y-3">
        {vms.map((vm) => (
          <div
            key={vm.id}
            className="bg-surface border border-border rounded-xl p-5 hover:border-accent/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span
                  className={`w-3 h-3 rounded-full ${statusColors[vm.status]}`}
                />
                <div>
                  <h3 className="font-semibold">{vm.name}</h3>
                  <p className="text-xs text-foreground/50">{vm.os}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                {vm.status === "running" && (
                  <div className="flex gap-6 text-xs text-foreground/60">
                    <div>
                      <span className="text-foreground/40">CPU </span>
                      <span className="text-foreground font-mono">
                        {vm.cpu}%
                      </span>
                    </div>
                    <div>
                      <span className="text-foreground/40">MEM </span>
                      <span className="text-foreground font-mono">
                        {vm.memory}%
                      </span>
                    </div>
                    <div>
                      <span className="text-foreground/40">DISK </span>
                      <span className="text-foreground font-mono">
                        {vm.disk}%
                      </span>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => toggleVM(vm.id)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    vm.status === "running"
                      ? "bg-danger/20 text-danger hover:bg-danger/30"
                      : "bg-success/20 text-success hover:bg-success/30"
                  }`}
                >
                  {vm.status === "running" ? "Stop" : "Start"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface border border-border rounded-xl p-5">
        <h3 className="font-semibold mb-3">VirtualBuddy Integration</h3>
        <p className="text-sm text-foreground/50 mb-4">
          This dashboard connects to VirtualBuddy for macOS VM management on
          Apple Silicon. Configure your host machine connection below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Host IP (e.g., 192.168.1.100)"
            className="bg-background border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent"
          />
          <input
            type="text"
            placeholder="API Port (default: 8090)"
            className="bg-background border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent"
          />
        </div>
      </div>
    </div>
  );
}
