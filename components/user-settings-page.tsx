import Link from "next/link";
import {
  CreditCard,
  Menu,
  Puzzle,
  Shield,
  SlidersHorizontal,
  User,
} from "lucide-react";

const sideItems = [
  { label: "Profile", icon: User, active: true },
  { label: "Preferences", icon: SlidersHorizontal, active: false },
  { label: "Security", icon: Shield, active: false },
  { label: "Integrations", icon: Puzzle, active: false },
  { label: "Billing", icon: CreditCard, active: false },
];

export function UserSettingsPage() {
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
            <span className="font-bold text-sky-300">User Settings</span>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/account"
            className="rounded-xl border border-slate-700 px-3 py-1.5 text-[10px] font-bold uppercase text-slate-300 transition hover:bg-white/5"
          >
            Back to Account
          </Link>
        </div>
      </header>

      <aside className="fixed bottom-0 left-0 top-12 z-40 hidden w-72 flex-col bg-[#0e1218] px-6 py-10 lg:flex">
        <div className="mb-10">
          <h1 className="text-lg font-semibold text-sky-300">Settings</h1>
          <p className="text-xs text-slate-500">System Configuration</p>
        </div>

        <div className="flex flex-col space-y-2">
          {sideItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-sm transition ${
                  item.active
                    ? "bg-[#2a2f38] text-sky-300"
                    : "text-slate-400 hover:bg-[#1c222b]"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </aside>

      <main className="min-h-screen bg-[#131820] p-12 pt-24 lg:ml-72 lg:p-24">
        <header className="mb-20 max-w-4xl">
          <h2 className="mb-4 text-5xl font-bold tracking-[-0.04em] text-slate-100">
            Account Settings
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-slate-400">
            Manage your personal information, local preferences, and display
            interface to tailor the Architect experience.
          </p>
        </header>

        <form className="max-w-4xl space-y-24">
          <section className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <h3 className="mb-2 text-xl font-semibold text-sky-300">
                Profile
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                This information will be displayed on your public identity
                across the platform.
              </p>
            </div>

            <div className="space-y-8 md:col-span-8">
              <div className="space-y-2">
                <label className="ml-1 block text-xs font-medium uppercase tracking-widest text-slate-500">
                  Full Name
                </label>
                <input
                  defaultValue="Alexander Thorne"
                  className="w-full rounded-xl border-none bg-[#2a2f38] px-4 py-4 text-slate-100 outline-none ring-1 ring-transparent transition focus:ring-sky-300/20"
                />
              </div>

              <div className="space-y-2">
                <label className="ml-1 block text-xs font-medium uppercase tracking-widest text-slate-500">
                  Email Address
                </label>
                <input
                  defaultValue="alexander.thorne@architect.dev"
                  className="w-full rounded-xl border-none bg-[#2a2f38] px-4 py-4 text-slate-100 outline-none ring-1 ring-transparent transition focus:ring-sky-300/20"
                />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <h3 className="mb-2 text-xl font-semibold text-sky-300">
                Preferences
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Control your workspace defaults and local interface behavior.
              </p>
            </div>

            <div className="space-y-8 md:col-span-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  ["Theme", "Nocturne"],
                  ["Units", "Metric (SI)"],
                  ["Workspace Density", "Compact"],
                  ["Default Mode", "Think"],
                ].map(([label, value]) => (
                  <div key={label} className="space-y-2">
                    <label className="ml-1 block text-xs font-medium uppercase tracking-widest text-slate-500">
                      {label}
                    </label>
                    <div className="rounded-xl bg-[#2a2f38] px-4 py-4 text-slate-100">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="flex items-center justify-end gap-4 border-t border-slate-700/30 pt-8">
            <button
              type="button"
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-br from-sky-300 to-cyan-400 px-5 py-3 text-sm font-bold text-[#002c37] shadow-lg shadow-sky-300/10 transition active:scale-95"
            >
              Save Changes
            </button>
          </section>
        </form>
      </main>
    </div>
  );
}