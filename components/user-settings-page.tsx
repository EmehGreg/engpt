import Link from "next/link";
import {
  CreditCard,
  Puzzle,
  Settings,
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
    <div className="space-y-10 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mb-4 text-5xl font-bold tracking-[-0.04em] text-slate-100">
            Account Settings
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-slate-400">
            Manage your personal information, local preferences, and display
            interface to tailor the Architect experience.
          </p>
        </div>

        <Link
          href="/account"
          className="rounded-xl border border-slate-700 px-4 py-2 text-xs font-bold uppercase text-slate-300 transition hover:bg-white/5"
        >
          Back to Account
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-2xl border border-slate-700/30 bg-[#161b22] p-4">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-sky-300">Settings</h3>
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

        <form className="space-y-24">
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
      </div>
    </div>
  );
}