import { useState } from "react";
import { Brain, Sparkles, Zap, Server, Network, ShieldCheck, BookOpen, Waypoints, Workflow, Globe2, Download, Play } from "lucide-react";

// TailwindCSS assumed available per instructions
// Single-file React component for a professional landing page with two primary CTAs in the hero.

export default function VoltMindLanding() {
  const [openFAQ, setOpenFAQ] = useState(false);

  const nav = [
    { label: "Why Now", href: "#why" },
    { label: "What is VoltMind", href: "#what" },
    { label: "Features", href: "#features" },
    { label: "Platform", href: "#platform" },
    { label: "Model Card", href: "#model-card" },
    { label: "Docs", href: "#problem-why-how" },
    { label: "Impact", href: "#impact" },
    { label: "GTM", href: "#gtm" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 bg-slate-950/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 grid place-items-center shadow-md shadow-emerald-500/20">
              <Zap className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">VoltMind <span className="text-emerald-400">v1.0 Beta</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white transition">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#download" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-emerald-500 text-slate-900 font-semibold shadow-lg hover:brightness-95 transition">
              <Download className="h-4 w-4" /> Download
            </a>
            <a href="#try" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-slate-950 font-semibold shadow-lg hover:brightness-95 transition">
              <Play className="h-4 w-4" /> Try Online
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.25),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="uppercase tracking-widest text-emerald-400/90 text-xs font-semibold">India-first • UEI/Beckn/DEG-aware • Runs in Ollama</p>
            <h1 className="mt-3 text-4xl/tight md:text-6xl/tight font-semibold">
              The Energy Reasoning Model for <span className="text-emerald-400">Grid Services</span>, <span className="text-cyan-400">DR</span>, and <span className="text-sky-400">DRE</span>
            </h1>
            <p className="mt-5 text-slate-300/90 max-w-2xl">
              VoltMind v1.0 Beta is a pure fine-tuned DeepSeek-based vertical LLM—no RAG. Embedded with India’s grid, policy, and scheme knowledge. UEI/Beckn/DEG-aware. Offline-capable. Open-downloadable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3" id="download">
              <a href="/download/voltmind-v1.0b.gguf" className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-emerald-500 text-slate-900 font-semibold shadow-lg hover:brightness-95 transition text-lg">
                <Download className="h-5 w-5 transition -translate-y-0.5 group-hover:-translate-y-1" />
                Download Model
              </a>
              <a href="/app" id="try" className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-white text-slate-950 font-semibold shadow-lg hover:brightness-95 transition text-lg">
                <Play className="h-5 w-5 transition -translate-y-0.5 group-hover:-translate-y-1" />
                Try VoltMind Online
              </a>
            </div>
            <div className="mt-4 text-xs text-slate-400">SHA256 & usage guide in docs. Works with <code className="text-slate-200">ollama run voltmind</code>.</div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 grid place-items-center"><Brain className="h-5 w-5 text-slate-950" /></div>
                <div>
                  <p className="text-sm text-slate-300">Model</p>
                  <p className="font-semibold">VoltMind v1.0 Beta</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 mt-0.5 text-emerald-400"/> Pure fine-tune over DeepSeek (no RAG)</li>
                <li className="flex items-start gap-2"><Server className="h-4 w-4 mt-0.5 text-emerald-400"/> Offline-capable • Runs in Ollama</li>
                <li className="flex items-start gap-2"><Network className="h-4 w-4 mt-0.5 text-emerald-400"/> UEI/Beckn/DEG-aware agents</li>
                <li className="flex items-start gap-2"><Workflow className="h-4 w-4 mt-0.5 text-emerald-400"/> DR Planner • Tariff & Baseline engines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section id="why" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">What’s changing (why VoltMind now)</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Grids need flexibility, not just megawatts.",
              body: "DSM/DR integrates RE, reduces peaks, and defers capex.",
              icon: <Waypoints className="h-5 w-5" />,
            },
            {
              title: "Data centers become grid assets.",
              body: "Shift/curtail AI & ML workloads to align with utility signals.",
              icon: <Server className="h-5 w-5" />,
            },
            {
              title: "India is standardizing the energy internet.",
              body: "UEI/Beckn/DEG enable discovery, fulfillment, settlement for DR.",
              icon: <Globe2 className="h-5 w-5" />,
            },
            {
              title: "DSM policy momentum.",
              body: "National programs and OpenADR pilots unlock automation at scale.",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 text-emerald-400">{c.icon}<span className="font-semibold">{c.title}</span></div>
              <p className="mt-2 text-slate-300/90">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is VoltMind */}
      <section id="what" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">What is VoltMind</h2>
        <p className="mt-4 text-slate-300/90 max-w-4xl">
          VoltMind is a DeepSeek-based vertical reasoning LLM for India’s energy ecosystem—UEI/Beckn/DEG-aware, grid-literate, and built to plan, simulate, transact, and explain demand response, DER orchestration, and scheme advisory at scale. No RAG dependencies; all knowledge is embedded via fine-tuning. Open-downloadable and runnable locally in Ollama.
        </p>
      </section>

      {/* Feature Sets – Knowledge Domains & Functional Capabilities */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Feature Sets — What VoltMind must know, do, and reason on</h2>

        {/* Knowledge Domains */}
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold flex items-center gap-2"><BookOpen className="h-5 w-5 text-emerald-400"/> Knowledge Domains</h3>
            <div className="mt-4 space-y-5 text-slate-300/90">
              <div>
                <p className="font-semibold text-slate-200">Regulatory & Policy Knowledge</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>All India-based schemes: PM-KUSUM, SRISTI, Saubhagya, RDSS, Green Energy Corridor, PLI, etc.</li>
                  <li>State-wise DISCOM policies, net metering, subsidies, tariff orders, wheeling, cross-subsidy.</li>
                  <li>IEEE, CEA, MNRE, BEE guidelines and compliances.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Grid Infrastructure & Operations</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>SLDC/RLDC/NLDC protocols; feeder hierarchies; substations.</li>
                  <li>Power flow dynamics (AC/DC, 11kV/33kV), balancing, inertia.</li>
                  <li>RE integration, ramp rates, contingencies.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Demand Response & Energy Efficiency</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Aggregation, negawatt valuation, ToU pricing.</li>
                  <li>DERMS, VPP, energy audits, DSM programs.</li>
                  <li>AMI/smart meter intelligence, behavioral nudging.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Distributed Renewable Energy (DRE)</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>RTS, SHP, biogas, solar pumps, microgrids.</li>
                  <li>Financing: OPEX/CAPEX/RESCO; rural adoption.</li>
                  <li>Forecasting & scheduling for variable RE.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-200">AI, ML & Edge for Energy</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Predictive maintenance, load forecasting, anomaly detection.</li>
                  <li>Edge AI, smart inverters, sync management.</li>
                  <li>Interoperability: UEI/DEG, OpenADR, IEC 61850, IEEE 2030.5.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Functional Capabilities */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold flex items-center gap-2"><Sparkles className="h-5 w-5 text-emerald-400"/> Functional Capabilities</h3>
            <div className="mt-4 space-y-5 text-slate-300/90">
              <div>
                <p className="font-semibold text-slate-200">Dynamic DR Program Generator</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Eligibility filters, grid impact simulation, incentive modeling.</li>
                  <li>Fallback safety protocols & human-in-the-loop triggers.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Solar & Scheme Recommender</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Best-fit central/state schemes by consumer profile.</li>
                  <li>Auto payback, ROI, and subsidy mapping.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Load & Grid Health Optimizer</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Diagnoses stress points; recommends curtailment or RES injection.</li>
                  <li>Considers seasons, cascading faults, peak-shift planning.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-200">DISCOM & Utility ChatOps</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Turns PDFs, GIS, and spreadsheets into natural-language answers.</li>
                  <li>Supports ticket triage, field orders, scheme planning.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Reasoning + Audit Model</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Audits overcharging, billing errors, and contractual violations.</li>
                  <li>Understands PPAs, open access, deviation penalties.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Multilingual Explainability</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Explains in Hindi/Punjabi/Kannada/etc.</li>
                  <li>Adapts tone for policy officers, technicians, and farmers.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Edge */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Importance & Strategic Edge</h3>
          <div className="mt-4 grid md:grid-cols-5 gap-4 text-sm">
            {[
              { k: "India-First", v: "Localized policies, schemes, vernacular support" },
              { k: "Reasoning", v: "Goes beyond retrieval—suggests, simulates, adapts" },
              { k: "Human-AI Symbiosis", v: "Built for shared decision-making in infra" },
              { k: "Trustworthy AI", v: "Auditable steps, policy-linked justifications" },
              { k: "Cost-effective", v: "DR & solar advisory at scale across Bharat" },
            ].map((row) => (
              <div key={row.k} className="rounded-2xl bg-slate-900/60 border border-white/10 p-4">
                <p className="text-slate-400 text-xs">{row.k}</p>
                <p className="mt-1 font-medium">{row.v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Offerings */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Unique Offerings (vs. general LLMs)</h3>
          <ul className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
            {[
              { k: "Regulatory-Aware Decisioning", v: "Interprets and applies dynamic orders and policies" },
              { k: "Grid-Aware DR Simulation", v: "Local grid impact simulations for DR events" },
              { k: "Scheme-Specific Reasoning", v: "Explains why one scheme fits better in a district" },
              { k: "Human-Override Protocols", v: "Asks for approval beyond thresholds" },
              { k: "Explainable Infra-AI", v: "Transparent, traceable logic" },
              { k: "Bharat-Scale Interfacing", v: "Works over WhatsApp/IVR/mobile in low bandwidth" },
            ].map((row) => (
              <li key={row.k} className="rounded-2xl bg-slate-900/60 border border-white/10 p-4">
                <p className="font-medium">{row.k}</p>
                <p className="text-slate-300/90 mt-1">{row.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problem → Why → How */}
      <section id="problem-why-how" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Problem → Why → How</h2>
        <div className="mt-6 grid lg:grid-cols-3 gap-6 text-slate-300/90">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-slate-100">The Problem</h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Fragmented rules, changing tariffs, scattered PDFs slow decisions.</li>
              <li>Operators lack real-time, explainable tools for DR/VPP across load classes.</li>
              <li>Citizens & SMEs can’t navigate eligibility, ROI, and workflows.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-slate-100">Why VoltMind</h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Speaks UEI/DEG/Beckn to discover, fulfil, and settle grid services.</li>
              <li>Operational reasoning without external retrieval layers.</li>
              <li>Trustworthy outputs with policy-lineage audit trails.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-slate-100">How it works</h3>
            <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
              <li>Embedded knowledge via fine-tuning (no RAG).</li>
              <li>Reasoner + domain tools (tariff, baselines, DR simulator).</li>
              <li>UEI/Beckn/DEG agents to transact; human approval on thresholds.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Platform View */}
      <section id="platform" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Platform View</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-slate-100">DISCOMs / SLDCs / Utilities</h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li>DR Campaign Designer: segments, MW estimates, incentives, baselines.</li>
              <li>Realtime Dispatch & M&V; settlement-ready outputs; OpenADR where applicable.</li>
              <li>Compliance guardrails: cross-subsidy, OA constraints, policy lineage.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-slate-100">C&I / Campuses / Data Centers</h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li>AI-Workload Orchestrator: aligns ML jobs to DISCOM signals/time/loc.</li>
              <li>Behind-the-meter DER co-pilot for PV, storage, chillers, EV fleets.</li>
              <li>Contract & bill auditor: exposures, penalties, savings.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2">
            <h3 className="font-semibold text-slate-100">Citizens / MSMEs</h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li>Scheme Finder: personalized eligibility and ROI/payback.</li>
              <li>Urja Coach: ToD, net-metering, and step-by-step guidance in vernacular.</li>
              <li>Green Score: simple guidance to shift loads and save.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Model Card */}
      <section id="model-card" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Model Card</h2>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 grid md:grid-cols-2 gap-6 text-sm text-slate-300/90">
          <div>
            <p><span className="text-slate-100 font-medium">Name:</span> VoltMind (Energy Reasoning LLM)</p>
            <p><span className="text-slate-100 font-medium">Version:</span> 1.0 Beta</p>
            <p><span className="text-slate-100 font-medium">Base:</span> DeepSeek (fine-tuned, no RAG)</p>
            <p><span className="text-slate-100 font-medium">Modalities:</span> Text; tabular/time-series adapters</p>
            <p><span className="text-slate-100 font-medium">Availability:</span> Open-downloadable; runs in Ollama.</p>
          </div>
          <div>
            <p><span className="text-slate-100 font-medium">Standards:</span> UEI/Beckn message schemas; DEG principles; OpenADR adapters.</p>
            <p><span className="text-slate-100 font-medium">Guardrails:</span> Human approval thresholds; policy-lineage citations; rate-limits.</p>
            <p><span className="text-slate-100 font-medium">Ethics:</span> No control actions without consent/contract; immutable logs.</p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Impact You Can Measure</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { k: "Peak reduction", v: "MW shaved & avoided capex" },
            { k: "DR revenue & M&V", v: "Verified baselines & settlements" },
            { k: "AI-flex score", v: "Carbon & cost cut via workload shifting" },
          ].map((m) => (
            <div key={m.k} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-400 text-xs">{m.k}</p>
              <p className="mt-1 font-medium">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GTM */}
      <section id="gtm" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Go-to-Market</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm text-slate-300/90">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-slate-100">Utility Pilots</h3>
            <p className="mt-2">Summer-peak DR on 2–3 feeders; include one data center/IT park for AI-flex.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-slate-100">Citizen Portal</h3>
            <p className="mt-2">Scheme Finder + vernacular coach in 3 states.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-slate-100">Developer Program</h3>
            <p className="mt-2">UEI/Beckn/DEG APIs and sandboxes.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-slate-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} VoltBrew. VoltMind is fine-tuned over open models (DeepSeek). Attribution and licenses included in docs.</p>
          <div className="flex items-center gap-4">
            <a href="/docs" className="hover:text-white">Docs</a>
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
