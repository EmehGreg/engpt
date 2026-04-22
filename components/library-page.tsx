import { Beaker, Database, Search, Sigma, Waves } from "lucide-react";

const materials = [
  ["Titanium Ti-6Al-4V", "113.8", "0.342", "4430", "8.6"],
  ["Aluminium 7075-T6", "71.7", "0.330", "2810", "23.5"],
  ["Stainless Steel 304", "193.0", "0.290", "8000", "17.3"],
  ["Carbon Fiber Epoxy", "135.0", "0.280", "1600", "0.8"],
];

const tabs = [
  { label: "Materials", active: true, icon: Beaker },
  { label: "Fluids", active: false, icon: Waves },
  { label: "Constants", active: false, icon: Sigma },
];

export function LibraryPage() {
  return (
    <div className="space-y-8 p-8">
      <section className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1">
            <Database className="h-3.5 w-3.5 text-cyan-300" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-300">
              Reference Database
            </span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
            Data Library
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-400">
            Reference materials, fluids, and engineering constants in a dark
            technical library interface.
          </p>
        </div>

        <button className="rounded-xl bg-sky-300 px-5 py-3 text-sm font-medium text-[#003259] shadow-lg shadow-sky-300/20">
          Custom Material
        </button>
      </section>

      <div className="rounded-2xl border border-slate-700/30 bg-[#161b22] p-4 sm:p-6">
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {tabs.map(({ label, active, icon: Icon }) => (
              <button
                key={label}
                className={
                  active
                    ? "inline-flex items-center gap-2 rounded-xl bg-sky-300 px-4 py-2 text-sm font-medium text-[#003259]"
                    : "inline-flex items-center gap-2 rounded-xl bg-[#10141a] px-4 py-2 text-sm font-medium text-slate-400"
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-slate-700/20 bg-[#10141a] px-3 py-2">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              className="bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500"
              placeholder="Search material properties..."
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-700/20">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-[#10141a]">
                <tr>
                  {[
                    "Material",
                    "Young's Modulus (GPa)",
                    "Poisson's Ratio",
                    "Density (kg/m³)",
                    "Thermal Expansion (µm/m·K)",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {materials.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-t border-slate-700/20 transition hover:bg-sky-300/[0.03]"
                  >
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className="px-5 py-4 text-sm text-slate-300"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}