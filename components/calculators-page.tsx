"use client";

import { useMemo, useState } from "react";
import {
  FileText,
  FlaskConical,
  Gauge,
  Sigma,
  Waves,
} from "lucide-react";

const thoughtCards = [
  {
    title: "Calculation: Reynolds Number",
    tone: "border-sky-300/40 text-sky-300",
    body: [
      "Re = (ρ * v * D) / μ",
      "Re = (998 kg/m³ * 3 m/s * 0.05 m) / 0.001002 Pa·s",
      "Re = 149,401.20",
      "Status: Fully Turbulent Flow (Re > 4000)",
    ],
  },
  {
    title: "Assumption: Pipe Roughness",
    tone: "border-amber-300/40 text-amber-300",
    body: [
      'Pipe material identified as "Steel".',
      "Defaulting to commercial steel roughness value of 0.046 mm.",
      "Override available for alternate surfaces.",
    ],
  },
  {
    title: "Recommendation: Pressure Drop",
    tone: "border-emerald-400/40 text-emerald-400",
    body: [
      "ΔP = f * (L/D) * (ρ * v² / 2)",
      "Estimated: 29.2 kPa per 20.0 m segment",
      "Suggested next step: sensitivity analysis.",
    ],
  },
];

type InputProps = {
  label: string;
  value: number;
  setValue: (value: number) => void;
  unit: string;
  step?: number;
  icon: React.ComponentType<{ className?: string }>;
};

function Input({ label, value, setValue, unit, step = 0.1, icon: Icon }: InputProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        {label}
      </span>
      <div className="flex items-center rounded-xl border border-slate-700/20 bg-[#10141a] px-4 py-3 focus-within:border-sky-300/30">
        <Icon className="mr-3 h-4 w-4 text-sky-300" />
        <input
          type="number"
          step={step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full bg-transparent text-lg font-semibold text-slate-100 outline-none"
        />
        <span className="text-sm font-medium text-cyan-300">{unit}</span>
      </div>
    </label>
  );
}

export function CalculatorsPage() {
  const [velocity, setVelocity] = useState(3);
  const [diameterMm, setDiameterMm] = useState(50);
  const [lengthM, setLengthM] = useState(20);
  const [density, setDensity] = useState(998);
  const [viscosity, setViscosity] = useState(0.001002);

  const calc = useMemo(() => {
    const diameterMeters = diameterMm / 1000;
    const area = (Math.PI * diameterMeters ** 2) / 4;
    const reynolds = (density * velocity * diameterMeters) / viscosity;
    const frictionFactor = 0.021;
    const pressureDrop =
      frictionFactor * (lengthM / diameterMeters) * ((density * velocity ** 2) / 2);
    const flowRate = area * velocity;

    return {
      reynolds,
      frictionFactor,
      pressureDrop,
      flowRate,
      regime: reynolds >= 4000 ? "Turbulent" : reynolds > 2300 ? "Transitional" : "Laminar",
    };
  }, [velocity, diameterMm, lengthM, density, viscosity]);

  return (
    <div className="space-y-8 p-8">
      <section className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/5 px-3 py-1">
            <Sigma className="h-3.5 w-3.5 text-sky-300" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-sky-300">
              Fluid Dynamics Workspace
            </span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
            Fluid Dynamics Calculator
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-400">
            Interactive engineering calculator with live inputs, computed
            outputs, and AI-style reasoning traces.
          </p>
        </div>

        <div className="rounded-xl bg-sky-300/10 px-4 py-3 text-sm font-medium text-sky-300">
          AI Sync Active
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="rounded-2xl border border-slate-700/30 bg-[#161b22] p-6 xl:col-span-7">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-slate-100">
              Input Parameters
            </h3>
            <span className="rounded-full bg-[#10141a] px-3 py-1 text-xs font-medium text-slate-500">
              RE-882-FX
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Input
              label="Flow velocity"
              value={velocity}
              setValue={setVelocity}
              unit="m/s"
              icon={Waves}
            />
            <Input
              label="Pipe diameter"
              value={diameterMm}
              setValue={setDiameterMm}
              unit="mm"
              icon={Gauge}
            />
            <Input
              label="Pipe length"
              value={lengthM}
              setValue={setLengthM}
              unit="m"
              icon={FileText}
            />
            <Input
              label="Density"
              value={density}
              setValue={setDensity}
              unit="kg/m³"
              icon={FlaskConical}
            />
            <div className="md:col-span-2">
              <Input
                label="Dynamic viscosity"
                value={viscosity}
                setValue={setViscosity}
                unit="Pa·s"
                step={0.000001}
                icon={Sigma}
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700/30 bg-[#161b22] p-6 xl:col-span-5">
          <h3 className="text-lg font-semibold tracking-tight text-slate-100">
            Calculated Results
          </h3>

          <div className="mt-5 space-y-3">
            {[
              ["Flow regime", calc.regime],
              ["Reynolds number", calc.reynolds.toLocaleString(undefined, { maximumFractionDigits: 2 })],
              ["Friction factor", calc.frictionFactor.toFixed(3)],
              ["Pressure drop", `${(calc.pressureDrop / 1000).toFixed(2)} kPa`],
              ["Volumetric flow", `${calc.flowRate.toFixed(4)} m³/s`],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-xl border border-slate-700/20 bg-[#10141a] px-4 py-4"
              >
                <span className="text-sm text-slate-500">{label}</span>
                <span className="font-mono text-sm font-semibold text-sky-300">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700/30 bg-[#161b22] p-6 xl:col-span-12">
          <div className="mb-5 flex items-center gap-2">
            <FileText className="h-5 w-5 text-sky-300" />
            <h3 className="text-lg font-semibold tracking-tight text-slate-100">
              AI Reasoning Trace
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {thoughtCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl border bg-[#10141a] p-5 ${card.tone}`}
              >
                <div className="text-sm font-semibold">{card.title}</div>
                <div className="mt-4 space-y-2">
                  {card.body.map((line) => (
                    <p key={line} className="font-mono text-sm leading-6 text-slate-300">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}