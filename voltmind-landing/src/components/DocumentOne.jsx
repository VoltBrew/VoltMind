import React from 'react';

const DocumentOne = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {/* Main Heading */}
      <h1 className="text-2xl md:text-3xl font-semibold text-slate-100">
        VoltMind – Domain Knowledge &amp; Capabilities Documentation
      </h1>
      <p className="mt-2 text-sm text-slate-300/90">
        <span className="text-slate-100 font-medium">Version:</span> 1.0 Beta &nbsp;|&nbsp;
        <span className="text-slate-100 font-medium">Foundation:</span> DeepSeek-R1 Distill Qwen-7B (fine-tuned over 1M+ energy datapoints) &nbsp;|&nbsp;
        <span className="text-slate-100 font-medium">Publisher:</span> VoltBrew Technologies Pvt. Ltd. &nbsp;|&nbsp;
        <span className="text-slate-100 font-medium">Deployment:</span> Available for download via CDN and in Ollama; also accessible via VoltMind Chat Portal.
      </p>

      {/* Overview Card */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-100"> Overview</h2>
        <p className="mt-2 text-sm text-slate-300/90">
          VoltMind is{" "}
          <span className="text-slate-100 font-medium">
            India’s first vertical LLM for grid services, demand response, DERMS, and renewable energy trading
          </span>. It is{" "}
          <span className="text-slate-100 font-medium">multilingual</span>,{" "}
          <span className="text-slate-100 font-medium">tool-aware</span>, and{" "}
          <span className="text-slate-100 font-medium">regulation-trained</span>.
        </p>
      </div>

      {/* Dataset Inventory Section */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-100"> Dataset Inventory &amp; Abilities</h2>
        <p className="mt-2 text-sm text-slate-300/90">
          Below is a structured breakdown of{" "}
          <span className="text-slate-100 font-medium">every dataset integrated in VoltMind</span>, its{" "}
          <span className="text-slate-100 font-medium">capability</span>, and{" "}
          <span className="text-slate-100 font-medium">example use cases</span>.
        </p>

        {/* Example: Policy & Regulation */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 overflow-x-auto">
          <h3 className="text-lg font-semibold text-slate-100 mb-4">
            2.1 Policy &amp; Regulation Datasets
          </h3>
          <table className="min-w-full text-sm text-slate-300/90">
            <thead className="text-slate-100">
              <tr>
                <th className="px-2 py-2 text-left">Dataset Name</th>
                <th className="px-2 py-2 text-left">Coverage</th>
                <th className="px-2 py-2 text-left">Ability Added</th>
                <th className="px-2 py-2 text-left">Example Prompt (English)</th>
                <th className="px-2 py-2 text-left">Example Prompt (Hindi)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10">
                <td className="px-2 py-2 font-medium text-slate-100">delp2p.jsonl</td>
                <td className="px-2 py-2">
                  Delhi DERC P2P Energy Trading Guidelines 2024
                </td>
                <td className="px-2 py-2">
                  Can answer, validate, and generate transaction payloads compliant with Delhi P2P regulation
                </td>
                <td className="px-2 py-2">
                  “Generate a DERC-compliant settlement JSON for a 2.5 MW P2P trade in Delhi”
                </td>
                <td className="px-2 py-2">
                  “दिल्ली में 2.5 मेगावाट पी2पी व्यापार के लिए डीईआरसी के अनुसार सेटलमेंट JSON बनाएं”
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* National Schemes Example */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 overflow-x-auto">
          <h3 className="text-lg font-semibold text-slate-100 mb-4">
            2.2 National Schemes &amp; Subsidy Datasets
          </h3>
          <table className="min-w-full text-sm text-slate-300/90">
            <thead className="text-slate-100">
              <tr>
                <th className="px-2 py-2 text-left">Dataset</th>
                <th className="px-2 py-2 text-left">Coverage</th>
                <th className="px-2 py-2 text-left">Ability Added</th>
                <th className="px-2 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10">
                <td className="px-2 py-2 font-medium text-slate-100">pm_surya_ghar.jsonl</td>
                <td className="px-2 py-2">
                  PM Surya Ghar Muft Bijli Yojana – PIB releases, portal data
                </td>
                <td className="px-2 py-2">
                  Detailed Q&amp;A, eligibility checks, multilingual answers
                </td>
                <td className="px-2 py-2">
                  “Check CFA for 5 kW rooftop in Maharashtra under PM Surya Ghar”
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Developer Examples */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-100">
          3. Developer Examples
        </h2>

        <hr className="my-4 border-white/10" />
        <p className="text-sm text-slate-300/90">Examples include:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
          <li>Design UEI/Beckn ONIX payloads with actor/intent/catalog/fulfillment/schedule/M&amp;V/settlement/human_approval.</li>
          <li>Plan DR with feeder constraints, baseline choices (e.g., 3/5-day avg), ToU tariffs, overrides, and full M&amp;V + audit trails.</li>
          <li>Specify tamper-evident logs, consent receipts, fallback safety protocols, resilience for outage modes.</li>
          <li>Orchestrate AI-flex for data centers with SLAs, guardrails, and carbon-aware scheduling.</li>
        </ul>

        <p className="mt-4 text-sm text-slate-300/90">
          <span className="text-slate-100 font-medium">VoltMind Multilingual Branding Dataset</span><br/>
          Languages: English, Hindi, Punjabi, Kannada, Tamil, Telugu, Bengali, Gujarati, Marathi, Malayalam<br/>
          Audiences: generic, farmer, corporate, regulator, developer
        </p>

        <pre className="mt-4 p-4 rounded-3xl border border-white/10 bg-white/5 text-sm text-slate-300/90">
{`User: Schedule a DR event in Gujarat for 4 MW from 5 PM–8 PM, ₹5/kWh incentive.
Model: [create_dr_event tool call JSON]`}
        </pre>
        <pre className="mt-4 p-4 rounded-3xl border border-white/10 bg-white/5 text-sm text-slate-300/90">
{`उपयोगकर्ता: गुजरात में 4 मेगावाट के लिए शाम 5 से 8 बजे तक का डीआर इवेंट शेड्यूल करें, ₹5/किलोवाट-घंटा प्रोत्साहन।
मॉडल: [create_dr_event टूल कॉल JSON]`}
        </pre>
      </div>

      {/* Impact */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-100"> Impact</h2>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
          <li>
            <span className="text-slate-100 font-medium">For DISCOMs:</span> Faster DR event setup, reduced manual errors.
          </li>
          <li>
            <span className="text-slate-100 font-medium">For DERMS Vendors:</span> Drop-in API-ready responses for control systems.
          </li>
          <li>
            <span className="text-slate-100 font-medium">For Policymakers:</span> Instant multilingual policy Q&amp;A and compliance mapping.
          </li>
          <li>
            <span className="text-slate-100 font-medium">For Consumers:</span> Transparent scheme matching and subsidy computation.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-100">Examples inlcude:</h2>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
          <li>
            Design UEI/Beckn ONIX payloads with
            actor/intent/catalog/fulfillment/schedule/M&amp;V/settlement/human_approval..
          </li>
          <li>
            Plan DR with feeder constraints, baseline choices (e.g., 3/5-day avg),
            ToU tariffs, overrides, and full M&amp;V + audit trails.
          </li>
          <li>
            Specify tamper-evident logs, consent receipts, fallback safety
            protocols, resilience for outage modes.
          </li>
          <li>
            Orchestrate AI-flex for data centers with SLAs, guardrails, and
            carbon-aware scheduling.
          </li>
          <li>
            VoltMind Multilingual Branding Dataset
          <br />
            <strong>Languages:</strong> English, Hindi, Punjabi, Kannada, Tamil,
            Telugu, Bengali, Gujarati, Marathi, Malayalam
            <br />
            <strong>Audiences:</strong> generic, farmer, corporate, regulator,
            developer
        </li>
        </ul>
      </div>

      
       
        
      
    
    </section>
  );
}

export default DocumentOne
