import Link from "next/link";
import {
  Bot,
  Camera,
  CreditCard,
  Lock,
  Settings,
  Shield,
  User,
} from "lucide-react";

const profileLinks = [
  { label: "Profile", active: true, icon: User },
  { label: "Preferences", active: false, icon: Settings },
  { label: "Security", active: false, icon: Shield },
  { label: "Integrations", active: false, icon: Bot },
  { label: "Billing", active: false, icon: CreditCard },
];

const infoRows = [
  { label: "Full Name", value: "Julian Thorne" },
  { label: "Email Address", value: "julian.thorne@architect.io" },
  { label: "Company", value: "Midnight Architect" },
  { label: "Role", value: "Lead Simulation Engineer" },
];

const preferenceRows = [
  { label: "Theme", value: "Nocturne" },
  { label: "Default Units", value: "SI (Metric)" },
  { label: "Workspace Mode", value: "Advanced" },
];

export function AccountPage() {
  return (
    <div className="space-y-10 p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-4">
          <section className="rounded-2xl border border-slate-700/30 bg-[#161b22] p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-700 bg-[#1e232b] text-2xl font-bold text-sky-300">
                  JT
                </div>
                <button className="absolute bottom-0 right-0 rounded-full bg-sky-300 p-2 text-[#002c37] shadow-lg transition hover:bg-sky-400">
                  <Camera className="h-4 w-4" />
                </button>
              </div>

              <h3 className="text-xl font-bold text-slate-100">Julian Thorne</h3>
              <p className="mb-6 text-sm text-slate-500">
                julian.thorne@architect.io
              </p>

              <button className="w-full rounded-xl bg-gradient-to-br from-sky-300 to-cyan-400 px-4 py-2.5 text-sm font-bold text-[#002c37] shadow-lg shadow-sky-300/10 transition active:scale-95">
                Update Profile
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-700/30 bg-[#161b22] p-4">
            <div className="space-y-2">
              {profileLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${
                      item.active
                        ? "bg-sky-300/10 text-sky-300"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        <div className="space-y-10 lg:col-span-8">
          <section>
            <div className="mb-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-100">
                Account Settings
              </h1>
              <p className="mt-2 max-w-2xl text-slate-400">
                Manage your personal information, workspace identity, and local
                preferences across the platform.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700/30 bg-[#161b22] p-6">
              <h2 className="mb-6 text-lg font-bold text-slate-100">
                Profile Information
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {infoRows.map((row) => (
                  <div key={row.label} className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      {row.label}
                    </label>
                    <input
                      defaultValue={row.value}
                      className="w-full rounded-xl border-none bg-[#1e232b] px-4 py-4 text-slate-200 outline-none ring-1 ring-transparent transition focus:ring-sky-300/30"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-700/30 bg-[#161b22] p-6">
            <h2 className="mb-6 text-lg font-bold text-slate-100">
              Workspace Preferences
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {preferenceRows.map((row) => (
                <div key={row.label} className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    {row.label}
                  </label>
                  <div className="rounded-xl bg-[#1e232b] px-4 py-4 text-sm text-slate-200">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-700/30 bg-[#161b22] p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-100">
                  Security Quick Access
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400">
                  Update your password, review active sessions, and manage
                  authentication controls from one place.
                </p>
              </div>

              <Link
                href="/settings/security"
                className="inline-flex items-center gap-2 rounded-xl border border-sky-300/30 px-4 py-2 text-sm font-bold text-sky-300 transition hover:bg-sky-300/10"
              >
                <Lock className="h-4 w-4" />
                Open Security
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}