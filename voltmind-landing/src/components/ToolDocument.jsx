import React from "react";

const ToolDocument = () => {
  return (
    <>
      {/* Platform View */}
      <section id="platform" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Platform View</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-slate-100">
              DISCOMs / SLDCs / Utilities
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li>
                DR Campaign Designer: segments, MW estimates, incentives,
                baselines.
              </li>
              <li>
                Realtime Dispatch & M&amp;V; settlement-ready outputs; OpenADR
                where applicable.
              </li>
              <li>
                Compliance guardrails: cross-subsidy, OA constraints, policy
                lineage.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-slate-100">
              C&amp;I / Campuses / Data Centers
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li>
                AI-Workload Orchestrator: aligns ML jobs to DISCOM
                signals/time/loc.
              </li>
              <li>
                Behind-the-meter DER co-pilot for PV, storage, chillers, EV
                fleets.
              </li>
              <li>
                Contract &amp; bill auditor: exposures, penalties, savings.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2">
            <h3 className="font-semibold text-slate-100">Citizens / MSMEs</h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li>
                Scheme Finder: personalized eligibility and ROI/payback.
              </li>
              <li>
                Urja Coach: ToD, net-metering, and step-by-step guidance in
                vernacular.
              </li>
              <li>
                Green Score: simple guidance to shift loads and save.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Model Card */}
      <section id="model-card" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Model Card</h2>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 grid md:grid-cols-2 gap-6 text-sm text-slate-300/90">
          <div>
            <p>
              <span className="text-slate-100 font-medium">Name:</span> VoltMind
              (Energy Reasoning LLM)
            </p>
            <p>
              <span className="text-slate-100 font-medium">Version:</span> 1.0
              Beta
            </p>
            <p>
              <span className="text-slate-100 font-medium">Base:</span> DeepSeek
              (fine-tuned, no RAG)
            </p>
            <p>
              <span className="text-slate-100 font-medium">Modalities:</span>{" "}
              Text; tabular/time-series adapters
            </p>
            <p>
              <span className="text-slate-100 font-medium">Availability:</span>{" "}
              Open-downloadable; runs in Ollama.
            </p>
          </div>
          <div>
            <p>
              <span className="text-slate-100 font-medium">Standards:</span>{" "}
              UEI/Beckn message schemas; DEG principles; OpenADR adapters.
            </p>
            <p>
              <span className="text-slate-100 font-medium">Guardrails:</span>{" "}
              Human approval thresholds; policy-lineage citations; rate-limits.
            </p>
            <p>
              <span className="text-slate-100 font-medium">Ethics:</span> No
              control actions without consent/contract; immutable logs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolDocument;
