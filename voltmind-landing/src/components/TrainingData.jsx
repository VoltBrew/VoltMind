import React from 'react';

const TrainignData = () => {
    return (
      <section id="voltmind-datasets" className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-100">
          VoltMind Training Datasets (Full List)
        </h1>
  
        <div className="mt-8 space-y-6">
          {/* Section 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-slate-100">
              VoltMind-SET: Datasets_base_10k
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li><code>policy_qna/train.jsonl</code> — 1,500</li>
              <li><code>dr_planning/train.jsonl</code> — 1,500</li>
              <li><code>scheme_match/train.jsonl</code> — 1,200</li>
              <li><code>billing_audit/train.jsonl</code> — 900</li>
              <li><code>dc_ai_flex/train.jsonl</code> — 1,200</li>
              <li><code>interoperability/train.jsonl</code> — 1,200 <em>(UEI/DEG/Beckn ONIX payload tasks)</em></li>
              <li><code>open_standards/train.jsonl</code> — 800 <em>(OpenADR / IEC 61850 / IEEE 2030.5 mapping)</em></li>
              <li><code>discom_chatops/train.jsonl</code> — 700</li>
              <li><code>grid_ops/train.jsonl</code> — 700</li>
              <li><code>vernacular/train.jsonl</code> — 300</li>
            </ul>
          </div>
  
          {/* Section 2 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-slate-100">
              VoltMind-SET: Datasets_refine_bugfix_3K
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li><code>policy_qna/train.jsonl</code> — 700 items</li>
              <li><code>dr_planning/train.jsonl</code> — 600 items</li>
              <li><code>scheme_match/train.jsonl</code> — 600 items</li>
              <li><code>billing_audit/train.jsonl</code> — 500 items</li>
              <li><code>dc_ai_flex/train.jsonl</code> — 300 items</li>
              <li><code>vernacular/train.jsonl</code> — 300 items</li>
            </ul>
          </div>
  
          {/* Section 3 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-slate-100">
              VoltMind-SET: DEG / UEI / Standards
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li><code>deg_foundations/train.jsonl</code> → 900</li>
              <li><code>deg_use_cases/train.jsonl</code> → 1300</li>
              <li><code>uei_beckn_payloads/train.jsonl</code> → 1100</li>
              <li><code>compliance_governance/train.jsonl</code> → 700</li>
              <li><code>market_mechanisms/train.jsonl</code> → 600</li>
              <li><code>ai_synergy/train.jsonl</code> → 400</li>
            </ul>
          </div>
  
          {/* Section 4 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-slate-100">
              VoltMind-SET: Market operations Beckn (opening bell → settlement)
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-3 text-sm text-slate-300/90">
              <li>
                <code>opening_bell/train.jsonl</code> → 700
                <ul className="list-disc list-inside ml-6">
                  <li><em>search → on_search → select → on_select payload skeletons with feeder IDs, windows, and offer quantities.</em></li>
                </ul>
              </li>
              <li>
                <code>trading_order_init/train.jsonl</code> → 600
                <ul className="list-disc list-inside ml-6">
                  <li><em>init → on_init for Trading Order plus cascaded init to Transmission BPP (wheeling charge fields).</em></li>
                </ul>
              </li>
              <li>
                <code>trading_order_confirm/train.jsonl</code> → 500
                <ul className="list-disc list-inside ml-6">
                  <li><em>confirm → on_confirm for Trading Order and Delivery Order at closing bell.</em></li>
                </ul>
              </li>
              <li>
                <code>fulfillment_updates/train.jsonl</code> → 600
                <ul className="list-disc list-inside ml-6">
                  <li><em>on_update loops for apportioning actual produced energy and cascading updates BG→BAPs.</em></li>
                </ul>
              </li>
              <li>
                <code>settlement_penalty/train.jsonl</code> → 400
                <ul className="list-disc list-inside ml-6">
                  <li><em>Logic for produced &lt; traded (penalty/adjustment) vs produced &gt; traded (surplus payout at grid buy rate).</em></li>
                </ul>
              </li>
              <li>
                <code>error_edge_cases/train.jsonl</code> → 200
                <ul className="list-disc list-inside ml-6">
                  <li><em>Timeouts, mismatched quotes, capacity drops, BG routing failure—idempotent recovery guidance.</em></li>
                </ul>
              </li>
            </ul>
          </div>
  
          {/* Section 5 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-slate-100">
              VoltMind-SET: City / region P2P datasets
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li><code>delhi_p2p_dataset/delp2p.jsonl</code> <em>(≈1,485 items)</em></li>
              <li><code>up_p2p_dataset/upp2p.jsonl</code> <em>(~1,705 items)</em></li>
            </ul>
          </div>
  
          {/* Section 6 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-slate-100">
              VoltMind-SET: Identity / brand / positioning
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li><code>voltmind_identity.jsonl</code> — <em>answers to “what are you”, “one-liner”, “capabilities”, “data amount”, etc.</em></li>
              <li><code>voltbrew_brand_faq.jsonl</code> — <em>RAG policy (no RAG), offline, languages, compliance, function calling, ownership.</em></li>
              <li><code>voltmind_capabilities.jsonl</code> — <em>bullets & positioning: UEI/Beckn/DEG-aware, DR/DER/VPP, policy reasoning, ChatOps.</em></li>
              <li><code>voltmind_guardrails.jsonl</code> — <em>consistent rules</em></li>
            </ul>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-slate-100" id="voltmind-set-pm-surya-ghar-pmsg-base-dataset">
              VoltMind-SET: PM Surya Ghar (PMSG) — base dataset
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li><code>eligibility/pmsg_eligibility.jsonl</code> — <em>citizen/household eligibility checks</em></li>
              <li><code>subsidy_math/pmsg_subsidy_math.jsonl</code> — <em>CFA math + ₹30k/₹60k/₹78k examples</em></li>
              <li><code>portal_workflow/pmsg_portal_workflow.jsonl</code> — <em>end-to-end portal steps + SLA hints</em></li>
              <li><code>discom_incentives/pmsg_discom_incentives.jsonl</code> — <em>slab logic, base capacity, 18,000 MW cap</em></li>
              <li><code>model_solar_village/pmsg_msv.jsonl</code> — <em>challenge mode, CFA tranches, DPR content</em></li>
              <li><code>finance_loans/pmsg_finance.jsonl</code> — <em>post-CFA loan/EMI illustrations</em></li>
              <li><code>grievance_sla/pmsg_grievance.jsonl</code> — <em>meter/inspection/CFA credit grievance routes</em></li>
              <li><code>uei_payloads/pmsg_uei_payloads.jsonl</code> — <em>UEI/Beckn-style discovery/enroll payloads</em></li>
              <li><code>multilingual_faq/pmsg_multilingual_faq.jsonl</code> — <em>EN/HI/BN/GU/MR/PA/TA/TE/KN/ML FAQs</em></li>
            </ul>
            <p className="mt-4 text-sm text-slate-300/90">
              <strong>Assumptions:</strong><br/>
                -CFA examples use current benchmark amounts (₹30k/₹60k/₹78k) and rule 60% up to 2&nbsp;kW; 40% of additional cost from 2–3&nbsp;kW; capped at 3&nbsp;kW.<br/>
                – DISCOM incentive slabs per official guideline; 18,000&nbsp;MW national cap.<br/>
                – Portal steps reflect the national portal flow.
            </p>
          </div>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 class="text-xl font-semibold text-slate-100" id="voltmind-set-pm-surya-ghar-v2-corpus">
              VoltMind-SET: PM Surya Ghar — v2 corpus
            </h2>
            <ul class="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li><code>local_bodies/pm_sg_local_bodies.jsonl</code> — <em>ULB/PRI incentives (₹1,000 per installation), DLC monitoring</em></li>
              <li><code>govt_saturation/pm_sg_govt_saturation.jsonl</code> — <em>Govt buildings saturation (no CFA), SIPs, 4 mechanisms, 12% LPS, ≤8 billing centres</em></li>
              <li><code>capacity_building/pm_sg_capacity_building.jsonl</code> — <em>&gt;3 lakh skilled, ≥1L technicians, NSCBAP/SSCBAP/DSCBAP, SIDH, STT &amp; upskilling hours</em></li>
              <li><code>simplified_proc_2022/pm_sg_simplified_2022.jsonl</code> — <em>National Portal simplification, vendor empanelment, PBG ₹2.5 lakh, O&amp;M 5 years</em></li>
              <li><code>service_charge/pm_sg_service_charge.jsonl</code> — <em>₹657 cr allocation; NPIA 5% base + up to 5% MISC; SIAs ₹200 cr base</em></li>
              <li><code>awareness_outreach/pm_sg_awareness_outreach.jsonl</code> — <em>NAOP/SAOP/DAOP, A&amp;O Committee, CBC rates, branding rules</em></li>
              <li><code>combined/pm_sg_master_multilingual.jsonl</code> — <em>10-language curated Q&amp;A set for multilingual fine-tune</em></li>
              <li><code>eval/pm_sg_eval.jsonl</code> — <em>Sanity checks for critical rules</em></li>
            </ul>
            <p class="mt-4 text-sm text-slate-300/90">
              <strong>Languages:</strong> <em>English core across categories; curated multilingual set in EN/HI/BN/GU/MR/PA/TA/TE/KN/ML.</em><br/>
              <strong>Note:</strong> <em>Paraphrases policy language conservatively; encodes numeric rules from PDFs.</em>
            </p>
          </div>


          <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 class="text-xl font-semibold text-slate-100" id="voltmind-set-whats-included-benchmarks-calculators">
              VoltMind-SET: What’s included (benchmarks &amp; calculators)
            </h3>
            <ul class="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li><code>state_benchmarks/pmsg_state_benchmarks.json</code> — <em>training assumptions for per-kW benchmark costs by state (editable)</em></li>
              <li><code>state_benchmarks/pmsg_state_benchmarks_qna.jsonl</code> — <em>Q&amp;A using benchmarks → total cost, national CFA cap (₹30k/₹60k/₹78k), user payable</em></li>
              <li><code>discom_msv_math/pmsg_discom_incentives_math.jsonl</code> — <em>slab math: compute eligible MW in the 5% slab (10–15% over base) and 10% slab (&gt;15% over base), example payouts</em></li>
              <li><code>discom_msv_math/pmsg_msv_tranche_math.jsonl</code> — <em>Model Solar Village eligibility &amp; 40/40/20 tranche amounts (₹1 crore total)</em></li>
              <li><code>calculators/pmsg_calculator_cfa.jsonl</code> — <em>few-shot prompts for CFA calculation (with step examples)</em></li>
              <li><code>calculators/pmsg_calculator_emi.jsonl</code> — <em>few-shot EMI calculator prompts using the standard loan formula</em></li>
              <li><code>calculators/pmsg_calculator_ulb.jsonl</code> — <em>few-shot ULB incentive (₹1,000 per tagged install) prompts</em></li>
            </ul>
          </div>


          <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 class="text-xl font-semibold text-slate-100" id="voltmind-set-pm-surya-ghar-v2_plus_ext">
              VoltMind-SET: PM Surya Ghar — v2_plus_ext
            </h2>
            <ul class="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li><code>state_benchmarks/pmsg_state_benchmarks.json</code> — <em>TRAINING ASSUMPTIONS: per-kW costs by state (editable)</em></li>
              <li><code>state_benchmarks/pmsg_state_benchmarks_qna.jsonl</code> — <em>Q&amp;A using benchmarks → total cost, CFA cap (₹30k/₹60k/₹78k), payable</em></li>
              <li><code>discom_msv_math/pmsg_discom_incentives_math.jsonl</code> — <em>Slab MW calcs (10–15% → 5% slab; &gt;15% → 10% slab), example payouts</em></li>
              <li><code>discom_msv_math/pmsg_msv_tranche_math.jsonl</code> — <em>MSV eligibility &amp; 40/40/20 tranche math</em></li>
              <li><code>calculators/pmsg_calculator_cfa.jsonl</code> — <em>Few-shot CFA calculator prompts</em></li>
              <li><code>calculators/pmsg_calculator_emi.jsonl</code> — <em>Few-shot EMI calculator prompts</em></li>
              <li><code>calculators/pmsg_calculator_ulb.jsonl</code> — <em>Few-shot ULB payout prompts</em></li>
            </ul>
            <p class="mt-4 text-sm text-slate-300/90">
              <strong>Notes For Trainers:</strong> <em>All numeric factors tagged <code>training_assumption</code> are placeholders for fine-tune scaffolding; replace with official notifications to localize to each state.</em>
            </p>
          </div>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 class="text-xl font-semibold text-slate-100" id="voltmind-tool-calling-dataset-dr-grid-der-sensors-uei-deg-v1">
              VoltMind Tool-Calling Dataset (DR / Grid / DER / Sensors / UEI-DEG) — v1
            </h2>
            <ul class="list-disc list-inside mt-2 space-y-1 text-sm text-slate-300/90">
              <li><code>dataset/dr/ueid_openadr.jsonl</code> — <em>DR program create/status/settle (UEI/OpenADR)</em></li>
              <li><code>dataset/grid/ops_and_health.jsonl</code> — <em>grid read/topology/reconfig/harmonics</em></li>
              <li><code>dataset/der/pv_battery_control.jsonl</code> — <em>PV setpoint, BESS SOC, DER schedules</em></li>
              <li><code>dataset/sensors/stream_and_alerts.jsonl</code> — <em>sensor reads, alert subscriptions, weather</em></li>
              <li><code>dataset/uei_deg/transactions.jsonl</code> — <em>UEI/DEG service discovery/fulfillment/settlement</em></li>
              <li><code>dataset/calculators/flex_forecast_and_shift.jsonl</code> — <em>simple tool-calculator calls</em></li>
              <li><code>dataset/master_multilingual.jsonl</code> — <em>curated 500 prompts in 10 languages (prefix-stub)</em></li>
            </ul>
            <p class="mt-4 text-sm text-slate-300/90">
              <strong>Notes:</strong>
            </p>
            <ul class="list-disc list-inside mt-1 space-y-1 text-sm text-slate-300/90">
              <li><em>Multilingual prompts are prefix-stubs to seed NLU across languages.</em></li>
              <li><em>Adjust tools and schema as your UEI/DEG adapters evolve.</em></li>
            </ul>
          </div>

        </div>
      </section>
    );
  };
  
  export default TrainignData;
  