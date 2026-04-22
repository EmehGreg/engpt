import Link from "next/link";
import {
  Bell,
  Lock,
  Menu,
  Settings,
  Shield,
  User,
} from "lucide-react";

export function SecurityPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080c12] text-slate-200">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(159,202,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(159,202,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <header className="fixed left-0 right-0 top-0 z-50 flex h-12 items-center justify-between border-b border-slate-700/30 bg-[#10141a] px-4">
        <div className="flex items-center gap-4">
          <button className="p-1 text-sky-300 transition hover:bg-sky-400/10">
            <Menu className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2 text-xs uppercase tracking-tight">
            <span className="text-slate-500">SOMATRIX</span>
            <span className="text-slate-500">&gt;</span>
            <span className="font-bold text-sky-300">Security</span>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full p-2 text-slate-500 transition hover:bg-[#1e232b] hover:text-slate-100">
            <Bell className="h-4 w-4" />
          </button>
          <button className="rounded-full p-2 text-slate-500 transition hover:bg-[#1e232b] hover:text-slate-100">
            <User className="h-4 w-4" />
          </button>
        </div>
      </header>

      <aside className="fixed bottom-0 left-0 top-12 z-40 hidden w-72 flex-col bg-[#0e1218] px-8 py-12 lg:flex">
        <div className="mb-10">
          <h1 className="text-lg font-bold text-sky-300">Architect</h1>
          <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">
            Settings Panel
          </p>
        </div>

        <nav className="flex flex-col space-y-2">
          <button className="rounded-r-full bg-[#2a2f38] px-6 py-3 text-left text-sky-300">
            <span className="flex items-center gap-4">
              <Shield className="h-4 w-4" />
              <span className="text-sm uppercase tracking-widest">Security</span>
            </span>
          </button>
          <button className="px-6 py-3 text-left text-slate-400 transition hover:bg-[#1c222b] hover:text-slate-100">
            <span className="flex items-center gap-4">
              <Settings className="h-4 w-4" />
              <span className="text-sm uppercase tracking-widest">Preferences</span>
            </span>
          </button>
        </nav>
      </aside>

      <main className="min-h-screen px-6 py-12 pt-24 md:px-20 md:py-24 lg:ml-72">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="h-fit lg:sticky lg:top-32 lg:col-span-4">
            <h2 className="mb-6 text-6xl font-black leading-none tracking-tight text-slate-100">
              Security
            </h2>
            <p className="max-w-xs text-lg leading-relaxed text-slate-400">
              Manage your architectural integrity and secure your systemic
              access.
            </p>

            <div className="mt-16 rounded-xl bg-[#161b22] p-8 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Security Health
                </span>
                <span className="text-2xl font-black text-sky-300">94%</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-[#2a2f38]">
                <div className="h-full w-[94%] bg-gradient-to-r from-sky-300 to-cyan-400" />
              </div>
              <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
                Your account security is exceptional. Consider rotating your
                primary access token for 100%.
              </p>
            </div>
          </div>

          <div className="space-y-24 lg:col-span-8">
            <section>
              <div className="mb-8">
                <h3 className="text-2xl font-bold tracking-tight text-slate-100">
                  Password Management
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Update your authentication credentials frequently.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 ml-1 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full rounded-lg border-none bg-[#2a2f38] p-4 text-slate-100 outline-none ring-1 ring-transparent transition focus:ring-sky-300/20"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 ml-1 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      className="w-full rounded-lg border-none bg-[#2a2f38] p-4 text-slate-100 outline-none ring-1 ring-transparent transition focus:ring-sky-300/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 ml-1 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      className="w-full rounded-lg border-none bg-[#2a2f38] p-4 text-slate-100 outline-none ring-1 ring-transparent transition focus:ring-sky-300/20"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="mb-8">
                <h3 className="text-2xl font-bold tracking-tight text-slate-100">
                  Active Sessions
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Review devices and environments currently connected to your
                  workspace.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  ["Ubuntu-24.04 / WSL", "Active now", "Current device"],
                  ["Windows Chrome", "2 hours ago", "Port Harcourt"],
                  ["VS Code Remote", "Yesterday", "Development node"],
                ].map(([title, time, meta]) => (
                  <div
                    key={title}
                    className="flex items-center justify-between rounded-xl border border-slate-700/30 bg-[#161b22] px-5 py-4"
                  >
                    <div>
                      <div className="font-semibold text-slate-100">{title}</div>
                      <div className="mt-1 text-xs text-slate-500">{meta}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-sky-300">{time}</div>
                      <button className="mt-1 text-[10px] font-bold uppercase tracking-widest text-rose-400">
                        Revoke
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-slate-700/30 bg-[#161b22] p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">
                    Two-Factor Authentication
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Strengthen your account access with an additional
                    verification layer.
                  </p>
                </div>

                <button className="rounded-lg bg-gradient-to-br from-sky-300 to-cyan-400 px-4 py-2 text-sm font-bold text-[#002c37]">
                  Enable 2FA
                </button>
              </div>
            </section>

            <div className="flex justify-end gap-4 border-t border-slate-700/30 pt-8">
              <Link
                href="/account"
                className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5"
              >
                Cancel
              </Link>
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-sky-300 to-cyan-400 px-5 py-3 text-sm font-bold text-[#002c37] shadow-lg shadow-sky-300/10 transition active:scale-95">
                <Lock className="h-4 w-4" />
                Update Security
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}