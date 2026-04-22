import Link from "next/link";
import {
  Activity,
  BarChart3,
  CalendarDays,
  Calculator,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HelpCircle,
  History,
  Home,
  Menu,
  Search,
  Settings,
  ShieldCheck,
  User,
} from "lucide-react";

const logRows = [
  {
    id: "RUN-1042",
    activity: "Calculation Run",
    project: "Pipe Flow Analysis",
    user: "Julian Thorne",
    status: "Success",
    time: "2 mins ago",
  },
  {
    id: "RUN-1041",
    activity: "Model Export",
    project: "Turbulence Study",
    user: "Alex Mercer",
    status: "Success",
    time: "14 mins ago",
  },
  {
    id: "RUN-1040",
    activity: "API Synchronize",
    project: "Pressure Network",
    user: "System",
    status: "Pending",
    time: "22 mins ago",
  },
  {
    id: "RUN-1039",
    activity: "Calculation Run",
    project: "Valve Loss Check",
    user: "Julian Thorne",
    status: "Failed",
    time: "51 mins ago",
  },
  {
    id: "RUN-1038",
    activity: "Calculation Run",
    project: "Pump Curve Match",
    user: "Nadia Stone",
    status: "Success",
    time: "1 hr ago",
  },
];

const timeline = [
  {
    title: "Pipe Flow Analysis executed",
    meta: "RUN-1042 • Solver v2.8",
    time: "2m ago",
    tone: "border-sky-300 text-sky-300",
  },
  {
    title: "Exported turbulence results",
    meta: "PDF + CSV bundle",
    time: "14m ago",
    tone: "border-emerald-400 text-emerald-400",
  },
  {
    title: "Sync queued for external node",
    meta: "Awaiting confirmation",
    time: "22m ago",
    tone: "border-amber-300 text-amber-300",
  },
  {
    title: "Valve loss simulation failed",
    meta: "Input validation issue",
    time: "51m ago",
    tone: "border-rose-400 text-rose-400",
  },
];

function statusClasses(status: string) {
  if (status === "Success") {
    return "border-emerald-400/30 bg-emerald-400/10 text-emerald-400";
  }
  if (status === "Pending") {
    return "border-amber-300/30 bg-amber-300/10 text-amber-300";
  }
  return "border-rose-400/30 bg-rose-400/10 text-rose-400";
}

export function HistoryPage() {
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
            <span className="font-bold text-sky-300">History</span>
          </div>
        </div>

        <div className="hidden items-center gap-6 xl:flex">
          <div className="flex h-12 items-center gap-8 border-x border-slate-700/30 px-4">
            <span className="border-b-2 border-sky-300 py-1 text-sm font-semibold text-sky-300">
              Activity Logs
            </span>
            <span className="text-sm text-slate-500">System Status</span>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="border border-sky-300/40 px-3 py-1.5 text-[10px] font-bold uppercase text-sky-300 transition hover:bg-sky-300/10">
            Export Logs
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
            className="flex w-full items-center gap-3 border-l-2 border-sky-300 bg-sky-300/5 px-4 py-3 text-left text-xs font-medium uppercase tracking-tight text-sky-300"
          >
            <History className="h-4 w-4" />
            <span>History</span>
          </Link>
          <Link
            href="/analytics"
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-xs font-medium uppercase tracking-tight text-slate-500 transition hover:bg-white/5 hover:text-sky-300"
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

      <main className="relative min-h-screen pb-10 pt-12 lg:ml-64">
        <div className="sticky top-12 z-30 border-b border-slate-700/30 bg-[#0d1117]/80 backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-6 px-8 py-3">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                className="w-full rounded-full border-none bg-[#1e232b] py-2 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 outline-none ring-1 ring-transparent transition focus:ring-sky-300/40"
                placeholder="Search logs, projects, or users..."
              />
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <button className="rounded-full p-2 text-slate-500 transition hover:bg-[#1e232b] hover:text-slate-200">
                <Settings className="h-4 w-4" />
              </button>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-[#1e232b] text-xs font-bold">
                JT
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl space-y-8 p-8">
          <section className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-slate-100">
                History
              </h1>
              <p className="max-w-xl text-slate-400">
                Complete chronological record of operations, calculation runs,
                exports, and sync activity across your engineering workspace.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-700/30 bg-[#161b22] px-4 py-3">
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-tight text-slate-500">
                  Total Runs
                </p>
                <p className="text-lg font-black text-slate-100">1,429</p>
              </div>
              <div className="h-8 w-px bg-slate-700/30" />
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-tight text-slate-500">
                  Success Rate
                </p>
                <p className="text-lg font-black text-sky-300">99.2%</p>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-700/30 bg-[#161b22] p-2 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-[#1e232b] px-4 py-3">
              <Activity className="h-4 w-4 text-slate-500" />
              <select className="w-full bg-transparent text-sm text-slate-200 outline-none">
                <option>All Statuses</option>
                <option>Success</option>
                <option>Failed</option>
                <option>Pending</option>
              </select>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#1e232b] px-4 py-3">
              <ShieldCheck className="h-4 w-4 text-slate-500" />
              <select className="w-full bg-transparent text-sm text-slate-200 outline-none">
                <option>All Activities</option>
                <option>Calculation Run</option>
                <option>Model Export</option>
                <option>API Synchronize</option>
              </select>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#1e232b] px-4 py-3 md:col-span-2">
              <CalendarDays className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-200">
                Oct 12, 2023 — Oct 19, 2023
              </span>
              <div className="ml-auto flex items-center gap-2">
                <button className="rounded p-1 transition hover:bg-white/5">
                  <ChevronLeft className="h-4 w-4 text-slate-400" />
                </button>
                <button className="rounded p-1 transition hover:bg-white/5">
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-8 xl:grid-cols-[1.6fr_0.9fr]">
            <div className="rounded-2xl border border-slate-700/30 bg-[#161b22] overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-700/30 px-6 py-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-100">
                    Activity Log Table
                  </h2>
                  <p className="text-xs text-slate-500">
                    Recent system and user operations
                  </p>
                </div>
                <button className="text-xs font-bold uppercase tracking-widest text-sky-300">
                  Export CSV
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead className="bg-[#10141a]">
                    <tr>
                      {["Run ID", "Activity", "Project", "User", "Status", "Time"].map(
                        (heading) => (
                          <th
                            key={heading}
                            className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500"
                          >
                            {heading}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {logRows.map((row) => (
                      <tr
                        key={row.id}
                        className="border-t border-slate-700/20 transition hover:bg-white/[0.02]"
                      >
                        <td className="px-6 py-4 font-mono text-xs text-sky-300">
                          {row.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-200">
                          {row.activity}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-400">
                          {row.project}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-400">
                          {row.user}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${statusClasses(
                              row.status
                            )}`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">
                          {row.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-700/30 bg-[#161b22] p-6">
                <h3 className="mb-4 text-lg font-bold text-slate-100">
                  Event Timeline
                </h3>
                <div className="space-y-5 border-l border-slate-700/30 pl-5">
                  {timeline.map((item) => (
                    <div key={item.title} className="relative">
                      <div
                        className={`absolute -left-[26px] top-1 h-3 w-3 rounded-full border-2 bg-[#10141a] ${item.tone}`}
                      />
                      <div className="text-sm font-semibold text-slate-200">
                        {item.title}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        {item.meta}
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400">
                        <Clock3 className="h-3.5 w-3.5" />
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700/30 bg-[#161b22] p-6">
                <h3 className="mb-4 text-lg font-bold text-slate-100">
                  Run Distribution
                </h3>
                <div className="space-y-4">
                  {[
                    ["Calculation Run", "68%"],
                    ["Model Export", "21%"],
                    ["API Synchronize", "11%"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="text-slate-400">{label}</span>
                        <span className="font-bold text-sky-300">{value}</span>
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