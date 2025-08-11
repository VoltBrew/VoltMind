# VoltMind training datasets (full list)

## VoltMind-SET: Datasets\_base_10k

* `policy_qna/train.jsonl` — 1,500
* `dr_planning/train.jsonl` — 1,500
* `scheme_match/train.jsonl` — 1,200
* `billing_audit/train.jsonl` — 900
* `dc_ai_flex/train.jsonl` — 1,200
* `interoperability/train.jsonl` — 1,200  *(UEI/DEG/Beckn ONIX payload tasks)*
* `open_standards/train.jsonl` — 800  *(OpenADR / IEC 61850 / IEEE 2030.5 mapping)*
* `discom_chatops/train.jsonl` — 700
* `grid_ops/train.jsonl` — 700
* `vernacular/train.jsonl` — 300

## VoltMind-SET: Datasets\_refine_bugfix_3K
* `policy_qna/train.jsonl` — 700 items
* `dr_planning/train.jsonl` — 600 items
* `scheme_match/train.jsonl` — 600 items
* `billing_audit/train.jsonl` — 500 items
* `dc_ai_flex/train.jsonl` — 300 items
* `vernacular/train.jsonl` — 300 items

## VoltMind-SET: DEG / UEI / Standards

* `deg_foundations/train.jsonl` → 900
* `deg_use_cases/train.jsonl` → 1300
* `uei_beckn_payloads/train.jsonl` → 1100
* `compliance_governance/train.jsonl` → 700
* `market_mechanisms/train.jsonl` → 600
* `ai_synergy/train.jsonl` → 400

## VoltMind-SET: Market operations Beckn (opening bell → settlement)

* `opening_bell/train.jsonl` → 700

    * *search → on\_search → select → on\_select payload skeletons with feeder IDs, windows, and offer quantities.*
* `trading_order_init/train.jsonl` → 600

    * *init → on\_init for Trading Order plus a cascaded init to the Transmission BPP (wheeling charge fields).*
* `trading_order_confirm/train.jsonl` → 500

    * *confirm → on\_confirm for Trading Order and Delivery Order at closing bell.*
* `fulfillment_updates/train.jsonl` → 600

    * *on\_update loops for apportioning actual produced energy and cascading updates BG→BAPs (as in your diagram).*
* `settlement_penalty/train.jsonl` → 400

    * *Logic for produced < traded (penalty/adjustment) vs produced > traded (surplus payout at grid buy rate).*
* `error_edge_cases/train.jsonl` → 200

    * *Timeouts, mismatched quotes, capacity drops, BG routing failure—each with idempotent recovery guidance.*

## VoltMind-SET: City / region P2P datasets

* `delhi_p2p_dataset/delp2p.jsonl` *(≈1,485 items)*
* `up_p2p_dataset/upp2p.jsonl` *(\~1,705 items)*

## VoltMind-SET: Identity / brand / positioning

* `voltmind_identity.jsonl` — *answers to “what are you”, “one-liner”, “detailed capabilities”, “how much data”, etc.*
* `voltbrew_brand_faq.jsonl` — *RAG policy (no RAG), Ollama/offline, languages, compliance, function calling, data ownership.*
* `voltmind_capabilities.jsonl` — *bullets and positioning: UEI/Beckn/DEG-aware, DR/DER/VPP, policy/tariff reasoning, ChatOps.*
* `voltmind_guardrails.jsonl` — *consistent rules*

## VoltMind-SET: PM Surya Ghar (PMSG) — base dataset

* `eligibility/pmsg_eligibility.jsonl` — *citizen/household eligibility checks*
* `subsidy_math/pmsg_subsidy_math.jsonl` — *CFA math + ₹30k/₹60k/₹78k examples*
* `portal_workflow/pmsg_portal_workflow.jsonl` — *end-to-end portal steps + SLA hints*
* `discom_incentives/pmsg_discom_incentives.jsonl` — *slab logic, base capacity, 18,000 MW cap*
* `model_solar_village/pmsg_msv.jsonl` — *challenge mode, CFA tranches, DPR content*
* `finance_loans/pmsg_finance.jsonl` — *post-CFA loan/EMI illustrations*
* `grievance_sla/pmsg_grievance.jsonl` — *meter/inspection/CFA credit grievance routes*
* `uei_payloads/pmsg_uei_payloads.jsonl` — *UEI/Beckn-style discovery/enroll payloads*
* `multilingual_faq/pmsg_multilingual_faq.jsonl` — *EN/HI/BN/GU/MR/PA/TA/TE/KN/ML FAQs*

Assumptions:
- CFA examples use current benchmark amounts (₹30k/₹60k/₹78k) and rule 60% up to 2 kW; 40% of additional cost from 2–3 kW; capped at 3 kW.
- DISCOM incentive slabs per official guideline; 18,000 MW national cap.
- Portal steps reflect the national portal flow.

## VoltMind-SET: PM Surya Ghar — v2 corpus

* `local_bodies/pm_sg_local_bodies.jsonl` — *ULB/PRI incentives (₹1,000 per installation), DLC monitoring*
* `govt_saturation/pm_sg_govt_saturation.jsonl` — *Govt buildings saturation (no CFA), SIPs, 4 mechanisms, 12% LPS, ≤8 billing centres*
* `capacity_building/pm_sg_capacity_building.jsonl` — *>3 lakh skilled, ≥1L technicians, NSCBAP/SSCBAP/DSCBAP, SIDH, STT & upskilling hours*
* `simplified_proc_2022/pm_sg_simplified_2022.jsonl` — *National Portal simplification, vendor empanelment, PBG ₹2.5 lakh, O\&M 5 years*
* `service_charge/pm_sg_service_charge.jsonl` — *₹657 cr allocation; NPIA 5% base + up to 5% MISC; SIAs ₹200 cr base*
* `awareness_outreach/pm_sg_awareness_outreach.jsonl` — *NAOP/SAOP/DAOP, A\&O Committee, CBC rates, branding rules*
* `combined/pm_sg_master_multilingual.jsonl` — *10-language curated Q\&A set for multilingual fine-tune*
* `eval/pm_sg_eval.jsonl` — *Sanity checks for critical rules*

Languages: *English core across categories; curated multilingual set in EN/HI/BN/GU/MR/PA/TA/TE/KN/ML.*
Note: *Paraphrases policy language conservatively; encodes numeric rules from PDFs.*

### VoltMind-SET: What’s included (benchmarks & calculators)

* `state_benchmarks/pmsg_state_benchmarks.json` — *training assumptions for per-kW benchmark costs by state (editable)*
* `state_benchmarks/pmsg_state_benchmarks_qna.jsonl` — *Q\&A using benchmarks → total cost, national CFA cap (₹30k/₹60k/₹78k), user payable*
* `discom_msv_math/pmsg_discom_incentives_math.jsonl` — *slab math: compute eligible MW in the 5% slab (10–15% over base) and 10% slab (>15% over base), example payouts*
* `discom_msv_math/pmsg_msv_tranche_math.jsonl` — *Model Solar Village eligibility & 40/40/20 tranche amounts (₹1 crore total)*
* `calculators/pmsg_calculator_cfa.jsonl` — *few-shot prompts for CFA calculation (with step examples)*
* `calculators/pmsg_calculator_emi.jsonl` — *few-shot EMI calculator prompts using the standard loan formula*
* `calculators/pmsg_calculator_ulb.jsonl` — *few-shot ULB incentive (₹1,000 per tagged install) prompts*

## VoltMind-SET: PM Surya Ghar — v2\_plus\_ext

* `state_benchmarks/pmsg_state_benchmarks.json` — *TRAINING ASSUMPTIONS: per-kW costs by state (editable)*
* `state_benchmarks/pmsg_state_benchmarks_qna.jsonl` — *Q\&A using benchmarks → total cost, CFA cap (₹30k/₹60k/₹78k), payable*
* `discom_msv_math/pmsg_discom_incentives_math.jsonl` — *Slab MW calcs (10–15% → 5% slab; >15% → 10% slab), example payouts*
* `discom_msv_math/pmsg_msv_tranche_math.jsonl` — *MSV eligibility & 40/40/20 tranche math*
* `calculators/pmsg_calculator_cfa.jsonl` — *Few-shot CFA calculator prompts*
* `calculators/pmsg_calculator_emi.jsonl` — *Few-shot EMI calculator prompts*
* `calculators/pmsg_calculator_ulb.jsonl` — *Few-shot ULB payout prompts*

Notes For Trainers: *All numeric factors tagged `training_assumption` are placeholders for fine-tune scaffolding; replace with official notifications to localize to each state.*

## VoltMind Tool-Calling Dataset (DR / Grid / DER / Sensors / UEI-DEG) — v1

* `dataset/dr/ueid_openadr.jsonl` — *DR program create/status/settle (UEI/OpenADR)*
* `dataset/grid/ops_and_health.jsonl` — *grid read/topology/reconfig/harmonics*
* `dataset/der/pv_battery_control.jsonl` — *PV setpoint, BESS SOC, DER schedules*
* `dataset/sensors/stream_and_alerts.jsonl` — *sensor reads, alert subscriptions, weather*
* `dataset/uei_deg/transactions.jsonl` — *UEI/DEG service discovery/fulfillment/settlement*
* `dataset/calculators/flex_forecast_and_shift.jsonl` — *simple tool-calculator calls*
* `dataset/master_multilingual.jsonl` — *curated 500 prompts in 10 languages (prefix-stub)*


Notes:

* *Multilingual prompts are prefix-stubs to seed NLU across languages.*
* *Adjust tools and schema as your UEI/DEG adapters evolve.*
