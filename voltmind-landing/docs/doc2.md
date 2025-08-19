

# **VoltMind Model Card**

**Model Name:** `VoltMind-1.0-beta`
**Foundation Model:** DeepSeek-R1 Distill Qwen-7B (fine-tuned)
**Publisher:** VoltBrew Technologies Pvt. Ltd.
**Release Date:** August 2025
**Download:** \[CDN Link] | \[Ollama Pull Command]
**License:** Apache 2.0 (with attribution to VoltBrew for fine-tuning)

---

## **Overview**

VoltMind is **India’s first vertical large language model for grid services, demand response, DERMS, renewable energy trading, and regulatory compliance**.
Trained on **over 1 million curated energy-sector datapoints** across multilingual corpora, VoltMind can operate as:

* A **policy expert** for Indian state & central energy regulations
* A **tool-aware AI agent** for UEI, DEG, Beckn ONIX, DER control APIs
* A **multilingual assistant** for consumers, DISCOMs, and energy businesses
* A **developer platform** with function-calling APIs for grid automation

---

## **Intended Use**

VoltMind is designed for:

* **DISCOMs** to manage DR, settlements, and consumer engagement
* **DERMS & VPP operators** for automated asset control & protocol translation
* **Policy compliance teams** for instant, accurate regulation-based answers
* **Consumers & RESCOs** for subsidy eligibility checks and application help

---

## **Capabilities by Dataset**

| Dataset                  | Ability                    | Example Prompt                                        | Output                    |
| ------------------------ | -------------------------- | ----------------------------------------------------- | ------------------------- |
| `delp2p.jsonl`           | Delhi DERC P2P compliance  | "Generate settlement payload for 3 MW trade in Delhi" | JSON (DERC fields)        |
| `upp2p.jsonl`            | UPERC P2P compliance       | "UPERC onboarding JSON for 5 MW solar peer"           | JSON (UPERC fields)       |
| `pm_surya_ghar.jsonl`    | PM Surya Ghar Q\&A         | "Subsidy for 4 kW rooftop in Gujarat"                 | ₹ amount + terms          |
| `cfa_emi_ulb_calc.jsonl` | Subsidy calculators        | "EMI for 3 kW rooftop, 8% interest, 5 years"          | EMI breakdown             |
| `interoperability.jsonl` | UEI/DEG payload generation | "DEG request to settle DR incentive for Tamil Nadu"   | JSON (protocol-compliant) |
| `beckn_p2p.jsonl`        | Beckn trading payloads     | "Beckn publish\_offer for DR in Maharashtra"          | JSON                      |
| `grid_ops.jsonl`         | Grid control commands      | "Schedule feeder load shift at 6 PM"                  | JSON control              |
| `dr_planning.jsonl`      | DR event design            | "Plan DR for 5 MW, 6-9 PM, ₹6/kWh"                    | JSON + text plan          |
| `discom_chatops.jsonl`   | DISCOM staff chat          | "Summarize outages in Tamil Nadu"                     | Text summary              |
| `vernacular.jsonl`       | Multilingual responses     | Hindi/Tamil/Telugu Q\&A                               | Localized text            |
| `voltbrand.jsonl`        | Model self-introduction    | "Who made you?"                                       | VoltMind branding text    |
| `volt_tools.jsonl`       | Tool-call schemas          | "Adjust PV inverter to 80% output"                    | Tool call JSON            |

---

## **Tool Layer (Function Calling)**

VoltMind supports 20+ **tool schemas**, including:

* `create_dr_event`
* `settle_incentive`
* `dispatch_bess`
* `adjust_inverter_output`
* `get_meter_data`
* `forecast_load`
* `generate_p2p_offer`
* `verify_mandv`
* `scheme_match_lookup`

Example:

```json
{
  "name": "create_dr_event",
  "arguments": {
    "state": "Gujarat",
    "target_mw": 4.0,
    "window": "17:00–20:00",
    "price_incentive": 5.0,
    "approval_required": true
  }
}
```

---

## **Multilingual Support**

VoltMind supports:

* **Primary:** Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, English
* **Fallback:** English translation if unsupported dialect detected

Example (Hindi):

```
उपयोगकर्ता: तमिलनाडु में 3 मेगावाट के लिए शाम 6 से 9 बजे तक का डीआर इवेंट प्लान करें।
मॉडल: [create_dr_event टूल कॉल JSON]
```

---

## **Evaluation Summary** *(Internal Benchmarks)*

| Test Set              | Accuracy | Pass\@1 |
| --------------------- | -------- | ------- |
| Regulation Compliance | 94%      | 91%     |
| Tool JSON Validity    | 99%      | 99%     |
| Multilingual Q\&A     | 92%      | 89%     |
| Subsidy Calculations  | 97%      | 96%     |

---

## **Limitations**

* Not designed for **real-time SCADA control** (use as advisory layer only)
* Limited training on **non-Indian regulations**
* Protocol support currently **optimized for UEI/DEG/Beckn**; IEC/IEEE partial

---

## **Ethical & Legal**

* Complies with Indian public domain & open-data usage norms
* Does not contain private customer data
* Attribution to foundation model per Apache 2.0

---

## **Branding Responses**

* **One-liner:** *"I am VoltMind, India’s first vertical AI for grid services & renewable energy."*
* **Detailed:** *"I am VoltMind, trained on over 1 million energy-sector datapoints covering DR, grid ops, DERMS, P2P trading, and subsidies, supporting UEI/DEG/Beckn protocols. My foundation model is DeepSeek-R1 Distill Qwen-7B, fine-tuned by VoltBrew Technologies."*

---

## **Get Started**

* **Download:**

```bash
ollama pull voltmind:1.0-beta
```
