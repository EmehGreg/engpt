import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  HelpCircle,
  History,
  Home,
  Menu,
  MessageSquare,
  Search,
  Settings,
  Shield,
  User,
  Wand2,
} from "lucide-react";

const supportCards = [
  {
    title: "Getting Started",
    copy: "Master the basics of simulations and workspace setup.",
    icon: BookOpen,
    tone: "text-sky-300 bg-sky-300/10",
  },
  {
    title: "Advanced Simulations",
    copy: "Deep dive into multithreaded calculations and complex modeling.",
    icon: Wand2,
    tone: "text-violet-300 bg-violet-300/10",
  },
  {
    title: "Security & Access",
    copy: "Manage permissions, credentials, and environment integrity.",
    icon: Shield,
    tone: "text-amber-300 bg-amber-300/10",
  },
  {
    title: "Contact Support",
    copy: "Reach a technical specialist for solver and deployment issues.",
    icon: MessageSquare,
    tone: "text-emerald-400 bg-emerald-400/10",
  },
];

export function SupportPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080c12] text-slate-200">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(159,202,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(159,202,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(109,221,255,0.08),transparent_40%)]" />

      <header className="fixed left-0 right-0 top-0 z-50 flex h-12 items-center justify-between border-b border-slate-700/30 bg-[#10141a] px-4">
        <div className="flex items-center gap-4">
          <button className="p-1 text-sky-300 transition hover:bg-sky-400/10">
            <Menu className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2 text-xs uppercase tracking-tight">
            <span className="text-slate-500">SOMATRIX</span>
            <span className="text-slate-500">&gt;</span>
            <span className="font-bold text-sky-300">Support</span>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
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
          <Link href="/calculators" className="flex items-center gap-3 px-4 py-3 text-xs font-medium uppercase tracking-tight text-slate-500 transition hover:bg-white/5 hover:text-sky-300">
            <Calculator className="h-4 w-4" />
            Calculators
          </Link>
          <Link href="/history" className="flex items-center gap-3 px-4 py-3 text-xs font-medium uppercase tracking-tight text-slate-500 transition hover:bg-white/5 hover:text-sky-300">
            <History className="h-4 w-4" />
            History
          </Link>
          <Link href="/support" className="flex items-center gap-3 border-l-2 border-sky-300 bg-sky-300/5 px-4 py-3 text-xs font-medium uppercase tracking-tight text-sky-300">
            <HelpCircle className="h-4 w-4" />
            Support
          </Link>
          <Link href="/account" className="flex items-center gap-3 px-4 py-3 text-xs font-medium uppercase tracking-tight text-slate-500 transition hover:bg-white/5 hover:text-sky-300">
            <User className="h-4 w-4" />
            Account
          </Link>
        </nav>
      </aside>

      <main className="min-h-screen pt-12 lg:ml-64">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <section className="relative overflow-hidden py-12">
            <div className="relative mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-100 md:text-6xl">
                How can we <span className="italic text-sky-300">help?</span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
                Access documentation, community wisdom, and direct technical
                assistance for the engineering suite.
              </p>

              <div className="relative mx-auto max-w-2xl">
                <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-sky-300" />
                <input
                  className="w-full rounded-full border-0 bg-[#1e232b] py-5 pl-14 pr-6 text-slate-100 placeholder:text-slate-500 outline-none ring-2 ring-transparent shadow-2xl shadow-sky-300/10 transition focus:ring-sky-300/40"
                  placeholder="Search for documentation, errors, or simulations..."
                />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {supportCards.map((card) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.title}
                  className="group flex flex-col items-start rounded-xl border border-slate-700/30 bg-[#161b22] p-8 text-left transition duration-300 hover:border-sky-300/30 hover:bg-[#1b2129]"
                >
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${card.tone} transition group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-slate-100">
                    {card.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-400">
                    {card.copy}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-300">
                    Explore Guides <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
}