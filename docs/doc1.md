
# **VoltMind – Domain Knowledge & Capabilities Documentation**

**Version:** 1.0 Beta
**Foundation:** DeepSeek-R1 Distill Qwen-7B (fine-tuned over 1M+ energy datapoints)
**Publisher:** VoltBrew Technologies Pvt. Ltd.
**Deployment:** Available for download via CDN and in Ollama; also accessible via VoltMind Chat Portal.

---

## **1. Overview**

VoltMind is **India’s first vertical LLM for grid services, demand response, DERMS, and renewable energy trading**.
It is **multilingual** (supports all major Indian languages), **tool-aware** (UEI, DEG, Beckn, DER control APIs), and **regulation-trained** (state-specific policies & subsidies).

---

## **2. Dataset Inventory & Abilities**

Below is a structured breakdown of **every dataset integrated in VoltMind**, its **capability**, and **example use cases**.

---

### **2.1 Policy & Regulation Datasets**

| Dataset Name          | Coverage                                      | Ability Added                                                                               | Example Prompt (English)                                                    | Example Prompt (Hindi)                                                              |
| --------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **delp2p.jsonl**      | Delhi DERC P2P Energy Trading Guidelines 2024 | Can answer, validate, and generate transaction payloads compliant with Delhi P2P regulation | "Generate a DERC-compliant settlement JSON for a 2.5 MW P2P trade in Delhi" | "दिल्ली में 2.5 मेगावाट पी2पी व्यापार के लिए डीईआरसी के अनुसार सेटलमेंट JSON बनाएं" |
| **upp2p.jsonl**       | UPERC Uttar Pradesh P2P Guidelines 2024       | Similar ability for UP P2P                                                                  | "Create a UPERC-compliant onboarding payload for UPPCL"                     | "यूपीपीसीएल के लिए यूपीईआरसी के अनुरूप ऑनबोर्डिंग JSON तैयार करें"                  |
| **policy\_qna.jsonl** | Central & State energy policies               | Answers FAQs, compliance clarifications, subsidy eligibilities                              | "What are the CFA limits under MNRE rooftop solar scheme?"                  | "एमएनआरई रूफटॉप सोलर योजना के तहत सीएफए सीमा क्या है?"                              |

---

### **2.2 National Schemes & Subsidy Datasets**

| Dataset                       | Coverage                                                    | Ability Added                                                       | Example                                                             |
| ----------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **pm\_surya\_ghar.jsonl**     | PM Surya Ghar Muft Bijli Yojana – PIB releases, portal data | Detailed Q\&A, eligibility checks, multilingual answers             | "Check CFA for 5 kW rooftop in Maharashtra under PM Surya Ghar"     |
| **cfa\_emi\_ulb\_calc.jsonl** | CFA, EMI & ULB incentive calculators                        | Model can compute payouts given capacity, subsidy %, interest rates | "Calculate EMI for 4 kW rooftop, 20% CFA, 8% interest, 5-year term" |

---

### **2.3 Interoperability & Protocol Datasets**

| Dataset                    | Coverage                                           | Ability Added                                                                             |
| -------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **interoperability.jsonl** | UEI, DEG, Beckn ONIX payload generation            | Model can output ready-to-use JSON payloads for DR programs, P2P trades, settlement flows |
| **open\_standards.jsonl**  | IEC 61850, IEEE 2030.5, OpenADR mapping            | Can map between protocol fields and regulatory terms                                      |
| **beckn\_p2p.jsonl**       | Beckn-compliant P2P payloads from Postman examples | Generates valid Beckn trading, discovery, offer, and settlement payloads                  |

---

### **2.4 Grid Ops, DR & DER Control Datasets**

| Dataset                         | Ability Added                                                                                 |
| ------------------------------- | --------------------------------------------------------------------------------------------- |
| **grid\_ops.jsonl**             | Respond to operational commands like feeder reconfiguration, voltage control, outage response |
| **dr\_planning.jsonl**          | Design DR events, suggest target MW, participant groups, schedules                            |
| **settlement\_tools.jsonl**     | Automate DR settlement based on M\&V                                                          |
| **pv\_inverter\_control.jsonl** | Adjust inverter setpoints via Modbus/IEEE2030.5                                               |
| **bess\_control.jsonl**         | Dispatch battery charge/discharge schedules                                                   |

---

### **2.5 Discom & Consumer Engagement Datasets**

| Dataset                   | Ability Added                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| **discom\_chatops.jsonl** | Engage with DISCOM staff for outage, billing, load forecast                                             |
| **vernacular.jsonl**      | All above capabilities in Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi |
| **scheme\_match.jsonl**   | Suggest applicable subsidy schemes based on consumer profile                                            |

---

### **2.6 VoltBrew Branding & Model Persona Dataset**

| Dataset                | Ability Added                                                                                                                                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **voltbrand.jsonl**    | Ensures model self-introduces correctly: *"I am VoltMind, India’s first vertical LLM for grid services, trained over 1M+ energy datapoints. Foundation: DeepSeek-R1 Distill Qwen-7B fine-tuned."* in multiple languages |
| **brand\_guard.jsonl** | Prevents mention of base model unless specifically asked; emphasizes VoltBrew ownership                                                                                                                                 |

---

### **2.7 Tool-Calling & API Layer Dataset**

| Dataset                  | Ability Added                                       |
| ------------------------ | --------------------------------------------------- |
| **volt\_tools.jsonl**    | 20+ tool schemas for UEI/DEG/DER control            |
| **tool\_examples.jsonl** | Prompt → JSON mappings for function calling         |
| **validators.jsonl**     | Ensures completeness of time, MW, IDs in tool calls |

---

## **3. Developer Examples**

Example in **English**:

```
User: Schedule a DR event in Gujarat for 4 MW from 5 PM–8 PM, ₹5/kWh incentive.
Model: [create_dr_event tool call JSON]
```

Example in **Hindi**:

```
उपयोगकर्ता: गुजरात में 4 मेगावाट के लिए शाम 5 से 8 बजे तक का डीआर इवेंट शेड्यूल करें, ₹5/किलोवाट-घंटा प्रोत्साहन।
मॉडल: [create_dr_event टूल कॉल JSON]
```

---

## **4. Impact**

* **For DISCOMs:** Faster DR event setup, reduced manual errors.
* **For DERMS Vendors:** Drop-in API-ready responses for control systems.
* **For Policymakers:** Instant multilingual policy Q\&A and compliance mapping.
* **For Consumers:** Transparent scheme matching and subsidy computation.

---

Examples include:

Design UEI/Beckn ONIX payloads with actor/intent/catalog/fulfillment/schedule/M&V/settlement/human_approval.

Plan DR with feeder constraints, baseline choices (e.g., 3/5-day avg), ToU tariffs, overrides, and full M&V + audit trails.

Specify tamper-evident logs, consent receipts, fallback safety protocols, resilience for outage modes.

Orchestrate AI-flex for data centers with SLAs, guardrails, and carbon-aware scheduling.


VoltMind Multilingual Branding Dataset
Languages: English, Hindi, Punjabi, Kannada, Tamil, Telugu, Bengali, Gujarati, Marathi, Malayalam
Audiences: generic, farmer, corporate, regulator, developer
