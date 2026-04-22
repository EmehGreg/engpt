"use client";

import { useState } from "react";
import { RightRail } from "@/components/right-rail";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";

type AppShellProps = {
  title: string;
  children: React.ReactNode;
};

export function AppShell({ title, children }: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c12] text-slate-200 lg:pl-64">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(159,202,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(159,202,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(159,202,255,0.04)_0%,transparent_70%)]" />

      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className="relative min-h-screen lg:grid lg:grid-cols-[1fr_320px]">
        <div className="min-w-0">
          <Topbar title={title} setMobileOpen={setMobileOpen} />
          <div className="relative">{children}</div>
        </div>

        <aside className="hidden border-l border-slate-700/30 bg-[#181c22] lg:block">
          <div className="sticky top-12 h-[calc(100vh-3rem)] overflow-auto p-5">
            <RightRail />
          </div>
        </aside>
      </div>
    </div>
  );
}