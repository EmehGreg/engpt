"use client";

import {
  ArrowUpRight,
  Edit3,
  FileText,
  FunctionSquare,
  Mic,
  Paperclip,
  ScanText,
  Send,
  Settings,
  Sigma,
  Terminal,
  Bot,
} from "lucide-react";

export function AssistantPage() {
  const activeParams = [
    { label: "ρ = 998", tone: "text-sky-300 border-slate-700" },
    { label: "v = 3.0", tone: "text-sky-300 border-slate-700" },
    { label: "ε = 0.046", tone: "text-amber-300 border-amber-400/30" },
    { label: "D = 0.05", tone: "text-sky-300 border-slate-700" },
  ];

  const reasoningNodes = [
    {
      node: "NODE_01: INPUT_PARSE",
      tone: "bg-sky-300",
      titleColor: "text-sky-300",
      text: "Determined medium: H2O (liquid) at STP.",
    },
    {
      node: "NODE_01B: OCR_EXTRACT",
      tone: "bg-fuchsia-300",
      titleColor: "text-fuchsia-300",
      text: "Parsing technical documentation image for P_inlet and layout.",
    },
    {
      node: "NODE_02: TURBULENCE_CHK",
      tone: "bg-sky-300",
      titleColor: "text-sky-300",
      text: "Re calculation triggered by velocity/diameter ratio.",
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-3rem)] overflow-hidden bg-transparent text-slate-200">
      <div className="mb-6 flex flex-col gap-4 border-b border-slate-700/30 pb-4">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-center gap-3 text-xs uppercase tracking-tight">
            <span className="text-slate-500">SOMATRIX</span>
            <span className="text-slate-500">&gt;</span>
            <span className="font-bold text-sky-300">AI Engineer</span>

            <div className="ml-4 hidden items-center gap-2 border border-emerald-400/20 bg-emerald-400/5 px-2 py-0.5 md:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                SOMATRIX Intelligence — Active
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 border border-slate-700/30 bg-[#10141a] px-4 py-2">
              <span className="font-mono text-xs text-slate-400">
                Session: Pipe Flow Analysis — Turbulence Study
              </span>
              <button className="text-slate-500 transition hover:text-sky-300">
                <Edit3 className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-1 bg-[#10141a] p-1">
              <button className="px-3 py-1 text-[10px] font-bold text-slate-500">
                CHAT
              </button>
              <button className="bg-sky-300 px-3 py-1 text-[10px] font-bold text-[#003259]">
                THINK
              </button>
              <button className="px-3 py-1 text-[10px] font-bold text-slate-500">
                AUTO
              </button>
            </div>

            <button className="border border-sky-300/40 px-3 py-1.5 text-[10px] font-bold uppercase text-sky-300 transition hover:bg-sky-300/10">
              Export Session
            </button>
            <button className="bg-sky-300 px-3 py-1.5 text-[10px] font-bold uppercase text-[#003259] transition hover:bg-sky-400">
              New Session
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
        <section className="flex min-h-0 flex-col gap-6 overflow-hidden">
          <div className="overflow-y-auto pr-1">
            <div className="space-y-6">
              <div className="flex justify-end">
                <div className="max-w-[80%] border-r-4 border-sky-300/50 bg-slate-800 p-4">
                  <p className="text-sm leading-relaxed text-slate-200">
                    I have a 50mm steel pipe, water flowing at 3 m/s. I need to
                    know if I should worry about turbulence and what my pressure
                    drop will be over 20 meters.
                  </p>
                </div>
              </div>

              <div className="max-w-[90%] space-y-3 border border-fuchsia-300/40 bg-[#181c22] p-4">
                <div className="flex items-center justify-between border-b border-slate-700/30 pb-2">
                  <div className="flex items-center gap-2">
                    <ScanText className="h-4 w-4 text-fuchsia-300" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-fuchsia-300">
                      Data Extraction: OCR Analysis
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-fuchsia-300">
                      PROCESSING...
                    </span>
                    <div className="h-1 w-16 bg-slate-700">
                      <div className="h-full w-[65%] bg-fuchsia-300" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden border border-slate-700/30 bg-[#10141a]">
                    <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                      <FileText className="h-8 w-8 text-slate-700/80" />
                    </div>
                    <div className="absolute inset-x-0 top-0 h-0.5 animate-[scan_2s_linear_infinite] bg-fuchsia-300/70 shadow-[0_0_8px_rgba(212,153,255,0.8)]" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <p className="font-mono text-xs leading-relaxed text-fuchsia-300">
                      OCR Engine: Extracting engineering schematics and parameters...
                    </p>

                    <div className="space-y-1">
                      <div className="font-mono text-[10px] uppercase tracking-tight text-slate-500">
                        Extracted Entities:
                      </div>
                      <ul className="space-y-0.5 font-mono text-[10px] text-slate-400">
                        <li className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-fuchsia-300" />
                          Detected: 3 Formulas
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-fuchsia-300" />
                          Detected: 12 Variables
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-fuchsia-300" />
                          Detected: 1 System Diagram
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-[90%] space-y-3 border border-sky-300/40 bg-[#181c22] p-4">
                <div className="flex items-center justify-between border-b border-slate-700/30 pb-2">
                  <div className="flex items-center gap-2">
                    <Sigma className="h-4 w-4 text-sky-300" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-sky-300">
                      Calculation: Reynolds Number
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-sky-300">
                      CONFIDENCE 99%
                    </span>
                    <div className="h-1 w-16 bg-slate-700">
                      <div className="h-full w-[99%] bg-sky-300" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1 font-mono text-sm">
                  <div className="text-sky-200">Re = (ρ * v * D) / μ</div>
                  <div className="text-slate-400">
                    Re = (998 kg/m³ * 3 m/s * 0.05 m) / 0.001002 Pa·s
                  </div>
                  <div className="mt-2 text-xl font-bold text-sky-300">
                    Re = 149,401.20
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-tight text-emerald-400">
                    Status: Fully Turbulent Flow (Re &gt; 4000)
                  </div>
                </div>
              </div>

              <div className="max-w-[90%] space-y-3 border border-amber-300/40 bg-[#181c22] p-4">
                <div className="flex items-center justify-between border-b border-slate-700/30 pb-2">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-amber-300" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300">
                      Assumption: Pipe Roughness (ε)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-amber-300">
                      CONFIDENCE 82%
                    </span>
                    <div className="h-1 w-16 bg-slate-700">
                      <div className="h-full w-[82%] bg-amber-300" />
                    </div>
                  </div>
                </div>

                <p className="text-sm italic text-slate-400 underline decoration-amber-300/30 underline-offset-4">
                  Pipe material identified as &quot;Steel&quot;. Defaulting to
                  commercial steel roughness value of 0.046 mm.
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  <button className="bg-slate-700 px-2 py-1 font-mono text-[10px] transition hover:bg-amber-300/20">
                    0.015 mm (PVC)
                  </button>
                  <button className="bg-slate-700 px-2 py-1 font-mono text-[10px] transition hover:bg-amber-300/20">
                    0.15 mm (Galv.)
                  </button>
                  <button className="bg-slate-700 px-2 py-1 font-mono text-[10px] transition hover:bg-amber-300/20">
                    Manual Override
                  </button>
                </div>
              </div>

              <div className="max-w-[90%] space-y-3 border border-emerald-300/40 bg-[#181c22] p-4">
                <div className="flex items-center justify-between border-b border-slate-700/30 pb-2">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                      Recommendation: Pressure Drop Analysis
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-emerald-400">
                      CONFIDENCE 96%
                    </span>
                    <div className="h-1 w-16 bg-slate-700">
                      <div className="h-full w-[96%] bg-emerald-400" />
                    </div>
                  </div>
                </div>

                <div className="font-mono text-sm">
                  <div className="text-slate-400">
                    ΔP = f * (L/D) * (ρ * v² / 2)
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-emerald-400">
                      29.2 kPa
                    </span>
                    <span className="text-[10px] text-slate-500">
                      per 20.0m segment
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button className="w-full bg-emerald-400 py-2 text-[10px] font-bold uppercase tracking-widest text-[#003918] transition hover:bg-emerald-500">
                    Run Sensitivity Analysis
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-t-xl border-t border-slate-700/30 bg-[#10141a]">
            <div className="flex h-8 items-center gap-6 overflow-x-auto border-b border-slate-700/20 bg-[#0a0e14] px-6">
              <span className="bg-sky-300/10 px-2 py-0.5 font-mono text-[9px] text-sky-300">
                [Re = ρvD/μ]
              </span>
              <span className="bg-sky-300/10 px-2 py-0.5 font-mono text-[9px] text-sky-300">
                [ΔP = f(L/D)(ρv²/2)]
              </span>
              <span className="bg-sky-300/10 px-2 py-0.5 font-mono text-[9px] text-sky-300">
                [Colebrook]
              </span>
              <span className="cursor-pointer font-mono text-[9px] text-slate-500 transition hover:text-sky-300">
                + ADD REFERENCE
              </span>
            </div>

            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-slate-500">
                  <button className="group relative p-1 transition hover:text-fuchsia-300">
                    <ScanText className="h-4 w-4" />
                    <span className="absolute -right-1 -top-1 h-2 w-2 animate-pulse rounded-full border border-[#10141a] bg-fuchsia-300" />
                  </button>
                  <button className="p-1 transition hover:text-sky-300">
                    <Sigma className="h-4 w-4" />
                  </button>
                  <button className="p-1 transition hover:text-sky-300">
                    <Paperclip className="h-4 w-4" />
                  </button>
                  <button className="p-1 transition hover:text-sky-300">
                    <span className="font-mono text-sm">123</span>
                  </button>
                  <button className="p-1 transition hover:text-sky-300">
                    <Mic className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Enter engineering query or override parameters..."
                    className="w-full border-0 border-b-2 border-slate-700 bg-transparent py-1 font-mono text-sm text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-sky-300"
                  />
                </div>

                <button className="flex items-center gap-2 bg-sky-300 px-6 py-2 text-xs font-bold text-[#003259] transition active:scale-95 hover:bg-sky-400">
                  SEND <Send className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="mt-1 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                    Context: Pipe Flow Analysis
                  </div>
                  <div className="h-3 w-px bg-slate-700/40" />
                  <div className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                    Mode: THINK
                  </div>
                </div>

                <div className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                  Tokens: 1,840 / 32,768
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hidden w-[360px] flex-col overflow-y-auto bg-[#181c22] xl:flex">
          <div className="border-b border-slate-700/30 p-4">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Active Parameters
            </div>

            <div className="grid grid-cols-2 gap-2">
              {activeParams.map((item) => (
                <div
                  key={item.label}
                  className={`group flex items-center justify-between border bg-[#10141a] p-2 ${item.tone}`}
                >
                  <span className="font-mono text-xs">{item.label}</span>
                  <Edit3 className="h-3 w-3 text-slate-600" />
                </div>
              ))}

              <div className="relative col-span-2 flex items-center justify-between border border-fuchsia-300/30 bg-[#10141a] p-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-fuchsia-300">
                    P_inlet = 12.5 bar
                  </span>
                  <span className="rounded-sm border border-sky-300/40 bg-sky-300/20 px-1 text-[8px] font-bold uppercase text-sky-300">
                    OCR
                  </span>
                </div>
                <Edit3 className="h-3 w-3 text-slate-600" />
              </div>
            </div>
          </div>

          <div className="flex-1 border-b border-slate-700/30 p-4">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Reasoning Chain
            </div>

            <div className="relative space-y-6 border-l border-slate-700/30 pl-6">
              {reasoningNodes.map((node) => (
                <div key={node.node} className="relative">
                  <div
                    className={`absolute -left-[29px] top-0 h-3 w-3 border-2 border-[#10141a] ${node.tone}`}
                  />
                  <div className={`mb-1 font-mono text-[10px] ${node.titleColor}`}>
                    {node.node}
                  </div>
                  <div className="text-xs text-slate-400">{node.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Formula Vault
            </div>

            <div className="space-y-2">
              <div className="border border-slate-700/20 bg-slate-800 p-2">
                <div className="text-[10px] font-bold text-slate-400">
                  Reynolds Number
                </div>
                <div className="font-mono text-[11px] text-sky-300">
                  Re = (ρvD)/μ
                </div>
              </div>
              <div className="border border-slate-700/20 bg-slate-800 p-2">
                <div className="text-[10px] font-bold text-slate-400">
                  Colebrook-White
                </div>
                <div className="font-mono text-[11px] text-sky-300">
                  1/√f = -2log(...)
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                AI Suggestions
              </div>
              <button className="w-full border border-sky-300/20 px-3 py-2 text-left font-mono text-[10px] uppercase text-sky-300 transition hover:bg-sky-300/5">
                Simulate pressure drop
              </button>
              <button className="w-full border border-sky-300/20 px-3 py-2 text-left font-mono text-[10px] uppercase text-sky-300 transition hover:bg-sky-300/5">
                Check valve losses
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}