import React from 'react';

const Document2 = () => (
  <section id="voltmind-model-card" className="mx-auto max-w-7xl px-4 py-16">
    <section id="model-card" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">VoltMind Model Card</h2>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 grid md:grid-cols-2 gap-6 text-sm text-slate-300/90">
          <div>
            <p>
              <span className="text-slate-100 font-medium">Model Name:</span> VoltMind 1.0 Beta
            </p>
            <p>
              <span className="text-slate-100 font-medium">Foundation Model:</span>  DeepSeek-R1 Distill Qwen-7B
              (fine-tuned) 
            </p>
            <p>
              <span className="text-slate-100 font-medium">Publisher:</span> VoltBrew Technologies Pvt. Ltd.
            </p>
            <p>
              <span className="text-slate-100 font-medium">Release Date:</span> August 2025
            </p>
            <p>
              <span className="text-slate-100 font-medium">Download:</span>
              [CDN Link] | [Ollama Pull Command]
            </p>
            <p>
              <span className="text-slate-100 font-medium">License:</span>
              Apache 2.0
              (with attribution to VoltBrew for fine-tuning)
            </p>
          </div>
        </div>
      </section>
     <hr className="my-6 border-white/10" />

     <h2 className="text-2xl md:text-3xl font-semibold">Overview</h2>
     <p className="mt-2 text-slate-300/90">
       VoltMind is <strong className="text-slate-100">India’s first vertical large language model for grid services, demand response, DERMS, renewable energy trading, and regulatory compliance</strong>. Trained on <strong className="text-slate-100">over 1 million curated energy-sector datapoints</strong> across multilingual corpora, VoltMind can operate as:
     </p>
     <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
       <li>A <strong className="text-slate-100">policy expert</strong> for Indian state & central energy regulations</li>
       <li>A <strong className="text-slate-100">tool-aware AI agent</strong> for UEI, DEG, Beckn ONIX, DER control APIs</li>
       <li>A <strong className="text-slate-100">multilingual assistant</strong> for consumers, DISCOMs, and energy businesses</li>
       <li>A <strong className="text-slate-100">developer platform</strong> with function-calling APIs for grid automation</li>
     </ul>
     <hr className="my-6 border-white/10" />

     <h2 className="text-2xl md:text-3xl font-semibold">Intended Use</h2>
     <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
       <li><strong className="text-slate-100">DISCOMs</strong> to manage DR, settlements, and consumer engagement</li>
       <li><strong className="text-slate-100">DERMS & VPP operators</strong> for automated asset control & protocol translation</li>
       <li><strong className="text-slate-100">Policy compliance teams</strong> for instant, accurate regulation-based answers</li>
       <li><strong className="text-slate-100">Consumers & RESCOs</strong> for subsidy eligibility checks and application help</li>
     </ul>
     <hr className="my-6 border-white/10" />

     {/* Capabilities by Dataset */}
    <h2 className="text-2xl md:text-3xl font-semibold">Capabilities by Dataset</h2>
     <div className="mt-4 overflow-x-auto">
       <table className="min-w-full table-auto border-collapse border border-white/20 text-sm">
         <thead className="bg-white/10">
           <tr>
             {['Dataset', 'Ability', 'Example Prompt', 'Output'].map((col) => (  
             <th key={col} className="border border-white/20 px-4 py-2 text-left text-slate-100">{col}</th>
             ))}
           </tr>
         </thead>
        <tbody>
           {[ 
             ['delp2p.jsonl', 'Delhi DERC P2P compliance', 'Generate settlement payload for 3 MW trade in Delhi', 'JSON (DERC fields)'],
             ['upp2p.jsonl', 'UPERC P2P compliance', 'UPERC onboarding JSON for 5 MW solar peer', 'JSON (UPERC fields)'],
             ['pm_surya_ghar.jsonl', 'PM Surya Ghar Q&A', 'Subsidy for 4 kW rooftop in Gujarat', '₹ amount + terms'],
             ['cfa_emi_ulb_calc.jsonl', 'Subsidy calculators', 'EMI for 3 kW rooftop, 8% interest, 5 years', 'EMI breakdown'],
             ['interoperability.jsonl', 'UEI/DEG payload generation', 'DEG request to settle DR incentive for Tamil Nadu', 'JSON (protocol-compliant)'],
             ['beckn_p2p.jsonl', 'Beckn trading payloads', 'Beckn publish_offer for DR in Maharashtra', 'JSON'],
             ['grid_ops.jsonl', 'Grid control commands', 'Schedule feeder load shift at 6 PM', 'JSON control'],
             ['dr_planning.jsonl', 'DR event design', 'Plan DR for 5 MW, 6-9 PM, ₹6/kWh', 'JSON + text plan'],
             ['discom_chatops.jsonl', 'DISCOM staff chat', 'Summarize outages in Tamil Nadu', 'Text summary'],
             ['vernacular.jsonl', 'Multilingual responses', 'Hindi/Tamil/Telugu Q&A', 'Localized text'],
             ['voltbrand.jsonl', 'Model self-introduction', 'Who made you?', 'VoltMind branding text'],
             ['volt_tools.jsonl', 'Tool-call schemas', 'Adjust PV inverter to 80% output', 'Tool call JSON'],
           ].map((row, idx) => (
             <tr key={idx} className={idx % 2 === 0 ? 'bg-white/5' : 'bg-white/10'}>
               {row.map((cell, cellIdx) => (
                 <td key={cellIdx} className="border border-white/20 px-4 py-2 text-slate-300/90">{cell}</td>
               ))}
             </tr>
           ))}
         </tbody>
       </table>
     </div>
     <hr className="my-6 border-white/10" />

     {/* Tool Layer */}
     <h2 className="text-2xl md:text-3xl font-semibold">Tool Layer (Function Calling)</h2>
     <p className="mt-2 text-slate-300/90">
       VoltMind supports 20+ <strong className="text-slate-100">tool schemas</strong>, including:
     </p>
     <ul className="list-disc list-inside mt-2 mb-4 space-y-1 text-sm text-slate-300/90">
       {['create_dr_event','settle_incentive','dispatch_bess','adjust_inverter_output','get_meter_data','forecast_load','generate_p2p_offer','verify_mandv','scheme_match_lookup'].map((tool) => (
         <li key={tool}><code className="bg-white/5 px-1 rounded">{tool}</code></li>
       ))}
     </ul>
     <div className="bg-white/10 p-4 rounded text-sm overflow-x-auto">
          <pre className="whitespace-pre-wrap">
            {`{
              "name": "create_dr_event",
              "arguments": {
              "state": "Gujarat",
              "target_mw": 4.0,
              "window": "17:00–20:00",
              "price_incentive": 5.0,
              "approval_required": true
        }`}
          </pre>
     </div>
    <hr className="my-6 border-white/10" />

     {/* Multilingual Support */}
     <h2 className="text-2xl md:text-3xl font-semibold">Multilingual Support</h2>
     <p className="mt-2 text-slate-300/90">VoltMind supports:</p>
     <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
       <li><strong className="text-slate-100">Primary:</strong> Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, English</li>
       <li><strong className="text-slate-100">Fallback:</strong> English translation if unsupported dialect detected</li>
     </ul>
     <pre className="bg-white/10 p-4 rounded text-sm mt-4">
       {`उपयोगकर्ता: तमिलनाडु में 3 मेगावाट के लिए शाम 6 से 9 बजे तक का डीआर इवेंट प्लान करें।
        मॉडल: [create_dr_event टूल कॉल JSON]`}
      </pre>
     <hr className="my-6 border-white/10" />

     {/* Evaluation Summary */}
     <h2 className="text-2xl md:text-3xl font-semibold">Evaluation Summary <em>(Internal Benchmarks)</em></h2>
     <div className="mt-4 overflow-x-auto">
       <table className="min-w-full table-auto border-collapse border border-white/20 text-sm">
         <thead className="bg-white/10">
           <tr>
            <th className="border border-white/20 px-4 py-2 text-left text-slate-100">Test Set</th>
             <th className="border border-white/20 px-4 py-2 text-left text-slate-100">Accuracy</th>
             <th className="border border-white/20 px-4 py-2 text-left text-slate-100">Pass@1</th>
           </tr>
         </thead>
         <tbody>
           {[
             ['Regulation Compliance', '94%', '91%'],
             ['Tool JSON Validity', '99%', '99%'],
             ['Multilingual Q&A', '92%', '89%'],
             ['Subsidy Calculations', '97%', '96%'],
           ].map((row, idx) => (
             <tr key={idx} className={idx % 2 === 0 ? 'bg-white/5' : 'bg-white/10'}>
               {row.map((cell, cIdx) => (
                 <td key={cIdx} className="border border-white/20 px-4 py-2 text-slate-300/90">{cell}</td>
               ))}
             </tr>
           ))}
         </tbody>
       </table>
     </div>
     <hr className="my-6 border-white/10" />

     {/* Limitations */}
     <h2 className="text-2xl md:text-3xl font-semibold">Limitations</h2>
     <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
       <li>Not designed for <strong className="text-slate-100">real-time SCADA control</strong> (use as advisory layer only)</li>
       <li>Limited training on <strong className="text-slate-100">non-Indian regulations</strong></li>
       <li>Protocol support currently <strong className="text-slate-100">optimized for UEI/DEG/Beckn</strong>; IEC/IEEE partial</li>
     </ul>
    <hr className="my-6 border-white/10" />

     {/* Ethical & Legal */}
     <h2 className="text-2xl md:text-3xl font-semibold">Ethical & Legal</h2>
     <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
       <li>Complies with Indian public domain & open-data usage norms</li>
       <li>Does not contain private customer data</li>
       <li>Attribution to foundation model per Apache 2.0</li>
     </ul>
     <hr className="my-6 border-white/10" />

     {/* Branding Responses */}
     <h2 className="text-2xl md:text-3xl font-semibold">Branding Responses</h2>
     <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
       <li><strong className="text-slate-100">One-liner:</strong> <em>“I am VoltMind, India’s first vertical AI for grid services & renewable energy.”</em></li>
       <li><strong className="text-slate-100">Detailed:</strong> <em>“I am VoltMind, trained on over 1 million energy-sector datapoints covering DR, grid ops, DERMS, P2P trading, and subsidies, supporting UEI/DEG/Beckn protocols. My foundation model is DeepSeek-R1 Distill Qwen-7B, fine-tuned by VoltBrew Technologies.”</em></li>
     </ul>
    <hr className="my-6 border-white/10" />

     {/* Get Started */}
     <h2 className="text-2xl md:text-3xl font-semibold">Get Started</h2>
     <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
       <li><strong className="text-slate-100">Download:</strong></li>
     </ul>
     <div className="bg-white/10 p-4 rounded text-sm overflow-x-auto mt-2">
       <pre className="whitespace-pre-wrap">
         ollama pull voltmind:1.0-beta
       </pre>
     </div>
   </section>
);


export default Document2;
