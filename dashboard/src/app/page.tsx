"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import VMDashboard from "@/components/VMDashboard";
import KiyomiBotPanel from "@/components/KiyomiBotPanel";
import SettingsPanel from "@/components/SettingsPanel";

export type ActiveView = "dashboard" | "kiyomi" | "settings";

export default function Home() {
  const [activeView, setActiveView] = useState<ActiveView>("dashboard");

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 overflow-y-auto p-6">
        {activeView === "dashboard" && <VMDashboard />}
        {activeView === "kiyomi" && <KiyomiBotPanel />}
        {activeView === "settings" && <SettingsPanel />}
      </main>
    </div>
  );
}
