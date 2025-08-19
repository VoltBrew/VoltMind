import React from "react";

// export default function Tool() {
//   return (
//     <>
//       {/* Intro */}
//       <section className="mx-auto max-w-7xl px-4 py-16">
//         <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
//           <p className="text-slate-300/90">
//             Here’s a <strong>full inventory of the tools</strong> in the generated dataset, along with{" "}
//             <strong>sample calls</strong> you can drop straight into your VoltMind model documentation so developers
//             understand each tool’s purpose, parameters, and example JSON payloads.
//           </p>
//           <hr className="my-6 border-white/10" />
//           <h2 id="voltmind-tool-registry" className="text-2xl md:text-3xl font-semibold">
//             <strong>📜 VoltMind Tool Registry</strong>
//           </h2>

//           {/* Table */}
//           <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
//             <table className="min-w-[800px] w-full text-left text-sm">
//               <thead className="bg-white/[0.04] text-slate-100">
//                 <tr>
//                   <th className="px-4 py-3 font-medium">Tool Name</th>
//                   <th className="px-4 py-3 font-medium">Purpose</th>
//                   <th className="px-4 py-3 font-medium">Key Parameters</th>
//                   <th className="px-4 py-3 font-medium">Sample Call</th>
//                 </tr>
//               </thead>
//               <tbody className="text-slate-300/90">
//                 {/* create_dr_event */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>create_dr_event</strong></td>
//                   <td className="px-4 py-4">Creates a new Demand Response (DR) event with UEI/OpenADR-compliant payload.</td>
//                   <td className="px-4 py-4">
//                     <code>event_id</code>, <code>target_mw</code>, <code>start_time</code>, <code>end_time</code>,{" "}
//                     <code>incentive_rate</code>, <code>feeder_ids</code>, <code>approval_required</code>
//                   </td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "create_dr_event", "parameters": { "event_id": "DR-2025-001", "target_mw": 3.5, "start_time": "2025-08-15T18:00", "end_time": "2025-08-15T21:00", "incentive_rate": 4.5, "feeder_ids": ["FD-1101", "FD-1102"], "approval_required": true } }`}</code>
//                   </td>
//                 </tr>

//                 {/* get_dr_status */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>get_dr_status</strong></td>
//                   <td className="px-4 py-4">Fetches the current status of a DR event.</td>
//                   <td className="px-4 py-4"><code>event_id</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "get_dr_status", "parameters": { "event_id": "DR-2025-001" } }`}</code>
//                   </td>
//                 </tr>

//                 {/* settle_dr_incentive */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>settle_dr_incentive</strong></td>
//                   <td className="px-4 py-4">Settles incentives for a completed DR event using M&V data.</td>
//                   <td className="px-4 py-4"><code>event_id</code>, <code>m_and_v_links</code>, <code>final_payment</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "settle_dr_incentive", "parameters": { "event_id": "DR-2025-001", "m_and_v_links": ["https://mv-data/discom1/dr001.csv"], "final_payment": 158000 } }`}</code>
//                   </td>
//                 </tr>

//                 {/* grid_state_read */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>grid_state_read</strong></td>
//                   <td className="px-4 py-4">Reads live grid health and topology state.</td>
//                   <td className="px-4 py-4">
//                     <code>substation_id</code>, <code>include_harmonics</code>, <code>include_voltage_profile</code>
//                   </td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "grid_state_read", "parameters": { "substation_id": "SS-DEL-003", "include_harmonics": true, "include_voltage_profile": true } }`}</code>
//                   </td>
//                 </tr>

//                 {/* grid_reconfig_suggest */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>grid_reconfig_suggest</strong></td>
//                   <td className="px-4 py-4">Suggests optimal grid reconfiguration to balance load or isolate faults.</td>
//                   <td className="px-4 py-4"><code>substation_id</code>, <code>reason</code>, <code>target_feeders</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "grid_reconfig_suggest", "parameters": { "substation_id": "SS-DEL-003", "reason": "Overload mitigation", "target_feeders": ["FD-1101", "FD-1102"] } }`}</code>
//                   </td>
//                 </tr>

//                 {/* pv_inverter_setpoint */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>pv_inverter_setpoint</strong></td>
//                   <td className="px-4 py-4">Updates PV inverter active/reactive power targets.</td>
//                   <td className="px-4 py-4"><code>inverter_id</code>, <code>target_kw</code>, <code>target_kvar</code>, <code>mode</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "pv_inverter_setpoint", "parameters": { "inverter_id": "INV-87654", "target_kw": 45.0, "target_kvar": 5.0, "mode": "PQ" } }`}</code>
//                   </td>
//                 </tr>

//                 {/* bess_setpoint */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>bess_setpoint</strong></td>
//                   <td className="px-4 py-4">Sets charge/discharge limits for a Battery Energy Storage System.</td>
//                   <td className="px-4 py-4"><code>battery_id</code>, <code>target_kw</code>, <code>target_soc</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "bess_setpoint", "parameters": { "battery_id": "BESS-2345", "target_kw": -20.0, "target_soc": 75 } }`}</code>
//                   </td>
//                 </tr>

//                 {/* der_schedule */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>der_schedule</strong></td>
//                   <td className="px-4 py-4">Schedules DER assets for specific time windows.</td>
//                   <td className="px-4 py-4"><code>asset_ids</code>, <code>start_time</code>, <code>end_time</code>, <code>mode</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "der_schedule", "parameters": { "asset_ids": ["INV-87654", "BESS-2345"], "start_time": "2025-08-15T06:00", "end_time": "2025-08-15T18:00", "mode": "max_export" } }`}</code>
//                   </td>
//                 </tr>

//                 {/* sensor_data_read */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>sensor_data_read</strong></td>
//                   <td className="px-4 py-4">Reads data from a specific grid or weather sensor.</td>
//                   <td className="px-4 py-4">
//                     <code>sensor_id</code>, <code>parameters</code>, <code>start_time</code>, <code>end_time</code>
//                   </td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "sensor_data_read", "parameters": { "sensor_id": "SEN-001", "parameters": ["voltage", "frequency"], "start_time": "2025-08-14T00:00", "end_time": "2025-08-14T23:59" } }`}</code>
//                   </td>
//                 </tr>

//                 {/* sensor_alert_subscribe */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>sensor_alert_subscribe</strong></td>
//                   <td className="px-4 py-4">Subscribes to threshold-based alerts from a sensor.</td>
//                   <td className="px-4 py-4"><code>sensor_id</code>, <code>alert_condition</code>, <code>callback_url</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "sensor_alert_subscribe", "parameters": { "sensor_id": "SEN-001", "alert_condition": "voltage<210", "callback_url": "https://voltalert/api/callback" } }`}</code>
//                   </td>
//                 </tr>

//                 {/* uei_deg_discover */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>uei_deg_discover</strong></td>
//                   <td className="px-4 py-4">Discovers services/resources via UEI/DEG API.</td>
//                   <td className="px-4 py-4"><code>domain</code>, <code>query_params</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "uei_deg_discover", "parameters": { "domain": "energy.trade.p2p", "query_params": { "state": "Delhi", "capacity_min": 10 } } }`}</code>
//                   </td>
//                 </tr>

//                 {/* uei_deg_fulfill */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>uei_deg_fulfill</strong></td>
//                   <td className="px-4 py-4">Executes a UEI/DEG fulfillment step.</td>
//                   <td className="px-4 py-4"><code>transaction_id</code>, <code>actor_id</code>, <code>fulfillment_payload</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "uei_deg_fulfill", "parameters": { "transaction_id": "TXN-9082", "actor_id": "BPP-DEL-01", "fulfillment_payload": { "meter_reading": "https://mv/delhi/txn9082.csv" } } }`}</code>
//                   </td>
//                 </tr>

//                 {/* uei_deg_settle */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>uei_deg_settle</strong></td>
//                   <td className="px-4 py-4">Settles a UEI/DEG transaction.</td>
//                   <td className="px-4 py-4"><code>transaction_id</code>, <code>settlement_details</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "uei_deg_settle", "parameters": { "transaction_id": "TXN-9082", "settlement_details": { "amount": 45200, "currency": "INR" } } }`}</code>
//                   </td>
//                 </tr>

//                 {/* flex_forecast */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>flex_forecast</strong></td>
//                   <td className="px-4 py-4">Generates a forecast for available DR flexibility.</td>
//                   <td className="px-4 py-4"><code>area_id</code>, <code>horizon_hours</code>, <code>granularity</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "flex_forecast", "parameters": { "area_id": "ZONE-DEL-N", "horizon_hours": 24, "granularity": "15min" } }`}</code>
//                   </td>
//                 </tr>

//                 {/* load_shift_plan */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>load_shift_plan</strong></td>
//                   <td className="px-4 py-4">Generates a recommended load-shift schedule.</td>
//                   <td className="px-4 py-4"><code>area_id</code>, <code>shift_mw</code>, <code>start_time</code>, <code>end_time</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "load_shift_plan", "parameters": { "area_id": "ZONE-DEL-N", "shift_mw": 2.5, "start_time": "2025-08-15T14:00", "end_time": "2025-08-15T18:00" } }`}</code>
//                   </td>
//                 </tr>

//                 {/* calc_cfa_subsidy */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>calc_cfa_subsidy</strong></td>
//                   <td className="px-4 py-4">Calculates CFA subsidy for rooftop solar projects.</td>
//                   <td className="px-4 py-4"><code>state</code>, <code>capacity_kw</code>, <code>consumer_type</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "calc_cfa_subsidy", "parameters": { "state": "Uttar Pradesh", "capacity_kw": 5, "consumer_type": "residential" } }`}</code>
//                   </td>
//                 </tr>

//                 {/* calc_emi */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>calc_emi</strong></td>
//                   <td className="px-4 py-4">Calculates EMI for solar/battery project financing.</td>
//                   <td className="px-4 py-4"><code>loan_amount</code>, <code>interest_rate</code>, <code>tenure_months</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "calc_emi", "parameters": { "loan_amount": 250000, "interest_rate": 6.5, "tenure_months": 60 } }`}</code>
//                   </td>
//                 </tr>

//                 {/* calc_ulb_payout */}
//                 <tr className="odd:bg-white/0 even:bg-white/[0.02] align-top">
//                   <td className="px-4 py-4"><strong>calc_ulb_payout</strong></td>
//                   <td className="px-4 py-4">Calculates payout from Urban Local Body for renewable projects.</td>
//                   <td className="px-4 py-4"><code>project_cost</code>, <code>ulb_subsidy_percent</code></td>
//                   <td className="px-4 py-4">
//                     <code className="font-mono text-xs whitespace-pre-wrap break-words">{`json { "name": "calc_ulb_payout", "parameters": { "project_cost": 450000, "ulb_subsidy_percent": 15 } }`}</code>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <hr className="my-8 border-white/10" />

//           {/* Notes for Docs */}
//           <h3 id="notes-for-docs" className="text-xl md:text-2xl font-semibold text-white">
//             🔹 Notes for Docs
//           </h3>
//           <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-300/90">
//             <li>
//               Each <strong>tool</strong> above corresponds to at least <strong>200–800 synthetic and multilingual training samples</strong> in the dataset.
//             </li>
//             <li>
//               The validators enforce <strong>parameter completeness</strong> (time, MW, IDs, etc.) so incomplete calls are rejected in training and inference.
//             </li>
//             <li>
//               For <strong>multilingual NLP</strong>, every tool also has <strong>prefix-localized prompts</strong> like <code>[हिंदी]</code>, <code>[தமிழ்]</code>, <code>[বাংলা]</code> to ensure parameter slots survive translation.
//             </li>
//           </ul>
//           <hr className="mt-8 border-white/10" />
//         </div>
//       </section>
//     </>
//   );
// }

import { ShieldCheck, Server, Network, Workflow, Waypoints, Globe2, Brain, Download, Play } from "lucide-react";

export default function Tool() {
  const tools = [
    {
      name: "create_dr_event",
      purpose: "Creates a new Demand Response (DR) event with UEI/OpenADR-compliant payload.",
      keyParams: "event_id, target_mw, start_time, end_time, incentive_rate, feeder_ids, approval_required",
      sampleCall: `{ "name": "create_dr_event", "parameters": { "event_id": "DR-2025-001", "target_mw": 3.5, "start_time": "2025-08-15T18:00", "end_time": "2025-08-15T21:00", "incentive_rate": 4.5, "feeder_ids": ["FD-1101", "FD-1102"], "approval_required": true } }`
    },
    {
      name: "get_dr_status",
      purpose: "Fetches the current status of a DR event.",
      keyParams: "event_id",
      sampleCall: `{ "name": "get_dr_status", "parameters": { "event_id": "DR-2025-001" } }`
    },
    {
      name: "settle_dr_incentive",
      purpose: "Settles incentives for a completed DR event using M&V data.",
      keyParams: "event_id, m_and_v_links, final_payment",
      sampleCall: `{ "name": "settle_dr_incentive", "parameters": { "event_id": "DR-2025-001", "m_and_v_links": ["https://mv-data/discom1/dr001.csv"], "final_payment": 158000 } }`
    },
    {
      name: "grid_state_read",
      purpose: "Reads live grid health and topology state.",
      keyParams: "substation_id, include_harmonics, include_voltage_profile",
      sampleCall: `{ "name": "grid_state_read", "parameters": { "substation_id": "SS-DEL-003", "include_harmonics": true, "include_voltage_profile": true } }`
    },
    {
      name: "grid_reconfig_suggest",
      purpose: "Suggests optimal grid reconfiguration to balance load or isolate faults.",
      keyParams: "substation_id, reason, target_feeders",
      sampleCall: `{ "name": "grid_reconfig_suggest", "parameters": { "substation_id": "SS-DEL-003", "reason": "Overload mitigation", "target_feeders": ["FD-1101", "FD-1102"] } }`
    },
    {
      name: "pv_inverter_setpoint",
      purpose: "Updates PV inverter active/reactive power targets.",
      keyParams: "inverter_id, target_kw, target_kvar, mode",
      sampleCall: `{ "name": "pv_inverter_setpoint", "parameters": { "inverter_id": "INV-87654", "target_kw": 45.0, "target_kvar": 5.0, "mode": "PQ" } }`
    },
    {
      name: "bess_setpoint",
      purpose: "Sets charge/discharge limits for a Battery Energy Storage System.",
      keyParams: "battery_id, target_kw, target_soc",
      sampleCall: `{ "name": "bess_setpoint", "parameters": { "battery_id": "BESS-2345", "target_kw": -20.0, "target_soc": 75 } }`
    },
    {
      name: "der_schedule",
      purpose: "Schedules DER assets for specific time windows.",
      keyParams: "asset_ids, start_time, end_time, mode",
      sampleCall: `{ "name": "der_schedule", "parameters": { "asset_ids": ["INV-87654", "BESS-2345"], "start_time": "2025-08-15T06:00", "end_time": "2025-08-15T18:00", "mode": "max_export" } }`
    },
    {
      name: "sensor_data_read",
      purpose: "Reads data from a specific grid or weather sensor.",
      keyParams: "sensor_id, parameters, start_time, end_time",
      sampleCall: `{ "name": "sensor_data_read", "parameters": { "sensor_id": "SEN-001", "parameters": ["voltage", "frequency"], "start_time": "2025-08-14T00:00", "end_time": "2025-08-14T23:59" } }`
    },
    {
      name: "sensor_alert_subscribe",
      purpose: "Subscribes to threshold-based alerts from a sensor.",
      keyParams: "sensor_id, alert_condition, callback_url",
      sampleCall: `{ "name": "sensor_alert_subscribe", "parameters": { "sensor_id": "SEN-001", "alert_condition": "voltage<210", "callback_url": "https://voltalert/api/callback" } }`
    },
    {
      name: "uei_deg_discover",
      purpose: "Discovers services/resources via UEI/DEG API.",
      keyParams: "domain, query_params",
      sampleCall: `{ "name": "uei_deg_discover", "parameters": { "domain": "energy.trade.p2p", "query_params": { "state": "Delhi", "capacity_min": 10 } } }`
    },
    {
      name: "uei_deg_fulfill",
      purpose: "Executes a UEI/DEG fulfillment step.",
      keyParams: "transaction_id, actor_id, fulfillment_payload",
      sampleCall: `{ "name": "uei_deg_fulfill", "parameters": { "transaction_id": "TXN-9082", "actor_id": "BPP-DEL-01", "fulfillment_payload": { "meter_reading": "https://mv/delhi/txn9082.csv" } } }`
    },
    {
      name: "uei_deg_settle",
      purpose: "Settles a UEI/DEG transaction.",
      keyParams: "transaction_id, settlement_details",
      sampleCall: `{ "name": "uei_deg_settle", "parameters": { "transaction_id": "TXN-9082", "settlement_details": { "amount": 45200, "currency": "INR" } } }`
    },
    {
      name: "flex_forecast",
      purpose: "Generates a forecast for available DR flexibility.",
      keyParams: "area_id, horizon_hours, granularity",
      sampleCall: `{ "name": "flex_forecast", "parameters": { "area_id": "ZONE-DEL-N", "horizon_hours": 24, "granularity": "15min" } }`
    },
    {
      name: "load_shift_plan",
      purpose: "Generates a recommended load-shift schedule.",
      keyParams: "area_id, shift_mw, start_time, end_time",
      sampleCall: `{ "name": "load_shift_plan", "parameters": { "area_id": "ZONE-DEL-N", "shift_mw": 2.5, "start_time": "2025-08-15T14:00", "end_time": "2025-08-15T18:00" } }`
    },
    {
      name: "calc_cfa_subsidy",
      purpose: "Calculates CFA subsidy for rooftop solar projects.",
      keyParams: "state, capacity_kw, consumer_type",
      sampleCall: `{ "name": "calc_cfa_subsidy", "parameters": { "state": "Uttar Pradesh", "capacity_kw": 5, "consumer_type": "residential" } }`
    },
    {
      name: "calc_emi",
      purpose: "Calculates EMI for solar/battery project financing.",
      keyParams: "loan_amount, interest_rate, tenure_months",
      sampleCall: `{ "name": "calc_emi", "parameters": { "loan_amount": 250000, "interest_rate": 6.5, "tenure_months": 60 } }`
    },
    {
      name: "calc_ulb_payout",
      purpose: "Calculates payout from Urban Local Body for renewable projects.",
      keyParams: "project_cost, ulb_subsidy_percent",
      sampleCall: `{ "name": "calc_ulb_payout", "parameters": { "project_cost": 450000, "ulb_subsidy_percent": 15 } }`
    }
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.25),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 py-20">
        
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-slate-300/90">
            Here's a <strong>full inventory of the tools</strong> in the generated dataset, along with <strong>sample calls</strong> you can drop straight into your VoltMind model documentation so developers understand each tool's purpose, parameters, and example JSON payloads.
          </p>
        </div>

        <hr className="my-8 border-white/10" />

        {/* Tool Registry Section */}
        <section id="what" className="py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            <strong>📜 VoltMind Tool Registry</strong>
          </h2>
          
          {/* Tools Table */}
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-2 font-semibold text-emerald-400">Tool Name</th>
                  <th className="text-left py-3 px-2 font-semibold text-emerald-400">Purpose</th>
                  <th className="text-left py-3 px-2 font-semibold text-emerald-400">Key Parameters</th>
                  <th className="text-left py-3 px-2 font-semibold text-emerald-400">Sample Call</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, index) => (
                  <tr key={tool.name} className={index % 2 === 0 ? "bg-white/5" : ""}>
                    <td className="py-3 px-2">
                      <strong className="text-slate-200">{tool.name}</strong>
                    </td>
                    <td className="py-3 px-2 text-slate-300/90">{tool.purpose}</td>
                    <td className="py-3 px-2">
                      <code className="text-slate-200 text-xs">{tool.keyParams}</code>
                    </td>
                    <td className="py-3 px-2">
                      <code className="text-slate-200 text-xs bg-slate-900/50 p-2 rounded block whitespace-pre-wrap">
                        {tool.sampleCall}
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr className="my-8 border-white/10" />

        {/* Notes Section */}
        <section className="py-8">
          <h3 className="text-xl font-semibold">🔹 Notes for Docs</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <ShieldCheck className="h-4 w-4 mt-0.5 text-emerald-400"/>
              Each <strong>tool</strong> above corresponds to at least <strong>200–800 synthetic and multilingual training samples</strong> in the dataset.
            </li>
            <li className="flex items-start gap-2">
              <Server className="h-4 w-4 mt-0.5 text-emerald-400"/>
              The validators enforce <strong>parameter completeness</strong> (time, MW, IDs, etc.) so incomplete calls are rejected in training and inference.
            </li>
            <li className="flex items-start gap-2">
              <Network className="h-4 w-4 mt-0.5 text-emerald-400"/>
              For <strong>multilingual NLP</strong>, every tool also has <strong>prefix-localized prompts</strong> like <code className="text-slate-200">[हिंदी]</code>, <code className="text-slate-200">[தமிழ்]</code>, <code className="text-slate-200">[বাংলা]</code> to ensure parameter slots survive translation.
            </li>
          </ul>
        </section>

      </div>
    </section>
  );
}
