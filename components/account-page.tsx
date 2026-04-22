import Link from "next/link";
import {
  Bell,
  Bot,
  Camera,
  CreditCard,
  HelpCircle,
  History,
  Home,
  Lock,
  Menu,
  Search,
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
            <span className="font-bold text-sky-300">Account</span>
          </div>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              className="w-64 rounded-full border-none bg-[#1e232b] py-2 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 outline-none ring-1 ring-transparent transition focus:ring-sky-300/40"
              placeholder="Search settings..."
            />
          </div>

          <button className="rounded-full p-2 text-slate-500 transition hover:bg-[#1e232b] hover:text-slate-100">
            <Bell className="h-4 w-4" />
          </button>
          <button className="rounded-full p-2 text-slate-500 transition hover:bg-[#1e232b] hover:text-slate-100">
            <Settings className="h-4 w-4" />
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-[#1e232b] text-xs font-bold">
            JT
          </div>
        </div>
      </header>

      <aside className="fixed bottom-0 left-0 top-12 z-40 hidden w-64 flex-col bg-[#10141a] lg:flex">
        <div className="bg-[#080c12] p-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-sky-300">
            SOMATRIX_ENGINE
          </h2>
        </div>

        <nav className="mt-4 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-xs font-medium uppercase tracking-tight text-slate-500 transition hover:bg-white/5 hover:text-sky-300">
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link href="/history" className="flex items-center gap-3 px-4 py-3 text-xs font-medium uppercase tracking-tight text-slate-500 transition hover:bg-white/5 hover:text-sky-300">
            <History className="h-4 w-4" />
            History
          </Link>
          <Link href="/support" className="flex items-center gap-3 px-4 py-3 text-xs font-medium uppercase tracking-tight text-slate-500 transition hover:bg-white/5 hover:text-sky-300">
            <HelpCircle className="h-4 w-4" />
            Support
          </Link>
          <Link href="/account" className="flex items-center gap-3 border-l-2 border-sky-300 bg-sky-300/5 px-4 py-3 text-xs font-medium uppercase tracking-tight text-sky-300">
            <User className="h-4 w-4" />
            Account
          </Link>
        </nav>
      </aside>

      <main className="relative min-h-screen pt-12 lg:ml-64">
        <div className="mx-auto max-w-6xl p-8">
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
                    Manage your personal information, workspace identity, and
                    local preferences across the platform.
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
      </main>
    </div>
  );
}