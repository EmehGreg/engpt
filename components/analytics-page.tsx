import Link from "next/link";
import {
  Activity,
  BarChart3,
  Calculator,
  Database,
  HelpCircle,
  Home,
  Menu,
  Plus,
  Search,
  Settings,
  Timer,
  TrendingUp,
  User,
} from "lucide-react";

const metrics = [
  {
    title: "Total Calculations",
    value: "1,284,032",
    sub: "+12.4% from last month",
    icon: Activity,
    tone: "text-sky-300 bg-sky-300/10",
  },
  {
    title: "Avg Processing Time",
    value: "248ms",
    sub: "99.9th percentile optimization",
    icon: Timer,
    tone: "text-cyan-300 bg-cyan-300/10",
  },
  {
    title: "Storage Used",
    value: "4.2 TB",
    sub: "65% of available node capacity",
    icon: Database,
    tone: "text-violet-300 bg-violet-300/10",
  },
  {
    title: "Active Simulations",
    value: "87",
    sub: "Across 14 compute nodes",
    icon: TrendingUp,
    tone: "text-emerald-400 bg-emerald-400/10",
  },
];

const barHeights = [
  "h-24",
  "h-32",
  "h-20",
  "h-36",
  "h-44",
  "h-28",
  "h-16",
  "h-24",
  "h-36",
  "h-28",
  "h-40",
  "h-20",
];

export function AnalyticsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080c12] text-slate-200">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(159,202,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(159,202,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(159,202,255,0.04)_0%,transparent_70%)]" />

      <header className="fixed left-0 right-0 top-0 z-50 flex h-12 items-center justify-between border-b border-slate-700/30 bg-[#10141a] px-4">
        <div className="flex items-center gap-4">
          <button className="p-1 text-sky-300 transition hover:bg-sky-400/10">
            <Menu className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-tight">
            <span className="text-slate-500">SOMATRIX</span>
            <span className="text-slate-500">&gt;</span>
            <span className="font-bold text-sky-300">Analytics</span>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="border border-sky-300/40 px-3 py-1.5 text-[10px] font-bold uppercase text-sky-300 transition hover:bg-sky-300/10">
            Export Report
          </button>
          <button className="bg-sky-300 px-3 py-1.5 text-[10px] font-bold uppercase text-[#003259] transition hover:bg-sky-400">
            Live View
          </button>
        </div>
      </header>

      <aside className="fixed bottom-0 left-0 top-12 z-40 hidden w-64 flex-col bg-[#10141a] lg:flex">
        <div className="bg-[#080c12] p-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-sky-300">
            SOMATRIX_ENGINE
          </h2>
        </div>

        <nav className="mt-4 flex-1">
          <Link
            href="/dashboard"
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-xs font-medium uppercase tracking-tight text-slate-500 transition hover:bg-white/5 hover:text-sky-300"
          >
            <Home className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/calculators"
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-xs font-medium uppercase tracking-tight text-slate-500 transition hover:bg-white/5 hover:text-sky-300"
          >
            <Calculator className="h-4 w-4" />
            <span>Calculators</span>
          </Link>
          <Link
            href="/history"
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-xs font-medium uppercase tracking-tight text-slate-500 transition hover:bg-white/5 hover:text-sky-300"
          >
            <Activity className="h-4 w-4" />
            <span>History</span>
          </Link>
          <Link
            href="/analytics"
            className="flex w-full items-center gap-3 border-l-2 border-sky-300 bg-sky-300/5 px-4 py-3 text-left text-xs font-medium uppercase tracking-tight text-sky-300"
          >
            <BarChart3 className="h-4 w-4" />
            <span>Analytics</span>
          </Link>
        </nav>

        <div className="px-4 pb-4">
          <button className="w-full bg-gradient-to-br from-sky-300 to-cyan-400 px-4 py-2.5 text-sm font-bold text-[#002c37] shadow-lg shadow-sky-300/10 transition active:scale-95">
            New Calculation
          </button>

          <div className="mt-6 space-y-1">
            <Link
              href="/support"
              className="flex items-center gap-2 px-2 py-2 text-xs font-medium text-slate-400 transition hover:text-slate-100"
            >
              <HelpCircle className="h-4 w-4" />
              Support
            </Link>
            <Link
              href="/account"
              className="flex items-center gap-2 px-2 py-2 text-xs font-medium text-slate-400 transition hover:text-slate-100"
            >
              <User className="h-4 w-4" />
              Account
            </Link>
          </div>
        </div>
      </aside>

      <main className="relative min-h-screen pt-12 lg:ml-64">
        <div className="sticky top-12 z-30 border-b border-slate-700/30 bg-[#0d1117]/80 backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-6 px-8 py-3">
            <div className="flex items-center gap-8">
              <span className="text-xl font-black tracking-tight text-slate-100">
                Midnight Architect
              </span>
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <input
                  className="w-64 rounded border-none bg-[#1e232b] py-2 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 outline-none ring-1 ring-transparent transition focus:ring-sky-300/40"
                  placeholder="Search analytics..."
                />
              </div>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <button className="rounded p-2 text-slate-500 transition hover:bg-[#1e232b] hover:text-slate-100">
                <Settings className="h-4 w-4" />
              </button>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-[#1e232b] text-xs font-bold">
                JT
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1600px] space-y-8 p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-100">
                System Performance
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                Real-time resource allocation and architectural simulation
                metrics.
              </p>
            </div>

            <div className="flex gap-2">
              <button className="rounded bg-[#1e232b] px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-[#2a313a]">
                Export Report
              </button>
              <button className="rounded bg-sky-300 px-4 py-2 text-sm font-bold text-[#002c37] shadow-lg shadow-sky-300/20 transition hover:brightness-110">
                Live View
              </button>
            </div>
          </div>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-700/30 bg-[#161b22] p-6 transition hover:bg-[#1b2129]"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {item.title}
                    </span>
                    <div className={`rounded p-2 ${item.tone}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-3xl font-bold text-slate-100">
                      {item.value}
                    </div>
                    <div className="mt-2 text-xs text-sky-300">
                      {item.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_0.9fr]">
            <div className="rounded-xl border border-slate-700/30 bg-[#161b22] p-6">
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-100">
                    Computation Cycles
                  </h2>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">
                    Real-time Cluster Utilization
                  </p>
                </div>
                <div className="text-2xl font-bold text-slate-100">
                  482.4 <span className="text-xs text-slate-500">GFlops</span>
                </div>
              </div>

              <div className="flex h-52 items-end gap-2">
                {barHeights.map((height, index) => (
                  <div
                    key={index}
                    className={[
                      "flex-1 rounded-t-sm",
                      height,
                      index === 4
                        ? "bg-cyan-400 shadow-[0_-4px_12px_rgba(0,218,243,0.3)]"
                        : index % 3 === 0
                        ? "bg-white/35"
                        : index % 2 === 0
                        ? "bg-white/20"
                        : "bg-white/28",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-slate-700/30 bg-[#161b22] p-6">
                <h2 className="mb-4 text-lg font-bold text-slate-100">
                  Efficiency Snapshot
                </h2>
                <div className="space-y-4">
                  {[
                    ["Node Availability", "97.8%"],
                    ["Cache Hit Rate", "88.4%"],
                    ["Queued Jobs", "124"],
                    ["Failed Jobs", "6"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-lg bg-[#10141a] px-4 py-3"
                    >
                      <span className="text-sm text-slate-400">{label}</span>
                      <span className="font-mono text-sm font-bold text-sky-300">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/30 bg-[#161b22] p-6">
                <h2 className="mb-4 text-lg font-bold text-slate-100">
                  Throughput
                </h2>
                <div className="space-y-4">
                  {[
                    ["Simulation Load", "74%"],
                    ["GPU Utilization", "61%"],
                    ["Storage Throughput", "49%"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="text-slate-400">{label}</span>
                        <span className="font-bold text-cyan-300">{value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-[#10141a]">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-sky-300 to-cyan-400"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}