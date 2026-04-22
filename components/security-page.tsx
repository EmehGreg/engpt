import { Lock } from "lucide-react";

export function SecurityPage() {
  return (
    <div className="space-y-10 p-8">
      <div className="grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="h-fit lg:sticky lg:top-24 lg:col-span-4">
          <h2 className="mb-6 text-6xl font-black leading-none tracking-tight text-slate-100">
            Security
          </h2>
          <p className="max-w-xs text-lg leading-relaxed text-slate-400">
            Manage your architectural integrity and secure your systemic access.
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
                  Strengthen your account access with an additional verification
                  layer.
                </p>
              </div>

              <button className="rounded-lg bg-gradient-to-br from-sky-300 to-cyan-400 px-4 py-2 text-sm font-bold text-[#002c37]">
                Enable 2FA
              </button>
            </div>
          </section>

          <div className="flex justify-end gap-4 border-t border-slate-700/30 pt-8">
            <button className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5">
              Cancel
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-sky-300 to-cyan-400 px-5 py-3 text-sm font-bold text-[#002c37] shadow-lg shadow-sky-300/10 transition active:scale-95">
              <Lock className="h-4 w-4" />
              Update Security
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}