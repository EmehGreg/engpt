import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  Building2,
  Droplets,
  FlaskConical,
  Plus,
  Ruler,
  Sigma,
  Waves,
  Zap,
} from "lucide-react";

const categories = [
  { label: "Mechanical", icon: Sigma, active: false },
  { label: "Electrical", icon: Zap, active: false },
  { label: "Civil Engineering", icon: Building2, active: true },
  { label: "Chemical", icon: FlaskConical, active: false },
];

const tools = [
  {
    title: "Fluid Dynamics",
    description: "Analyze fluid flow, pressure drops, and pipe systems.",
    icon: Waves,
    href: "/calculators/fluid-dynamics",
  },
  {
    title: "Reynolds Number",
    description: "Calculate flow regimes for pipes and open channels.",
    icon: Sigma,
    href: "/calculators/fluid-dynamics",
  },
  {
    title: "Hydraulic Flow",
    description: "Manning equation for open-channel flow velocity analysis.",
    icon: Droplets,
    href: "/calculators/fluid-dynamics",
  },
  {
    title: "Retaining Wall",
    description: "Stability checks against sliding and overturning moments.",
    icon: Building2,
    href: "/calculators/fluid-dynamics",
  },
  {
    title: "Column Buckling",
    description: "Euler critical-load calculation for slender columns.",
    icon: Ruler,
    href: "/calculators/fluid-dynamics",
  },
];

export function CalculatorsPage() {
  return (
    <div className="space-y-10 p-8">
      <header className="max-w-4xl">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-sky-300">
          Engineering Modules
        </p>
        <h1 className="mb-4 text-6xl font-extrabold tracking-tight text-slate-100">
          Calculators
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
          Select a high-precision engineering module before launching a calculator workspace.
        </p>
      </header>

      <section className="overflow-hidden rounded-2xl border border-slate-700/30 bg-[#161b22]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <aside className="border-b border-slate-700/30 bg-[#10141a] p-6 lg:col-span-3 lg:border-b-0 lg:border-r">
            <h3 className="mb-6 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Categories
            </h3>

            <div className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <button
                    key={category.label}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${
                      category.active
                        ? "bg-sky-300/10 font-bold text-sky-300"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </aside>

          <main className="p-6 lg:col-span-9 lg:p-10">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-100">
                  Civil Engineering Tools
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Structural, hydraulic, and pipe-flow analysis modules.
                </p>
              </div>

              <button className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:underline">
                View all Civil tools
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {tools.map((tool) => {
                const Icon = tool.icon;

                return (
                  <Link
                    key={tool.title}
                    href={tool.href}
                    className="group rounded-2xl border border-slate-700/20 bg-[#10141a] p-6 transition hover:border-sky-300/30 hover:bg-[#1b2129]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-300/10 text-sky-300 transition group-hover:bg-sky-300 group-hover:text-[#002c37]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="mb-2 font-bold text-slate-100">{tool.title}</h4>
                    <p className="text-sm leading-6 text-slate-400">{tool.description}</p>
                  </Link>
                );
              })}

              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700/40 bg-[#10141a] p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1b2129] text-slate-400">
                  <Plus className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-slate-400">
                  Request Custom Module
                </span>
              </div>
            </div>
          </main>
        </div>

        <div className="flex flex-col gap-6 border-t border-slate-700/30 bg-sky-300/10 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-300 text-[#002c37]">
              <Beaker className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-sky-300">
                Recently Updated
              </span>
              <span className="font-bold text-slate-100">
                Eurocode 2 Compliance Module
              </span>
            </div>
          </div>

          <button className="rounded-xl bg-sky-300 px-6 py-3 text-sm font-bold text-[#002c37]">
            Launch Project Builder
          </button>
        </div>
      </section>
    </div>
  );
}