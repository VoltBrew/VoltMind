
# **⚡ VoltMind Tool API Reference**

*A complete function-calling toolkit for Grid Services, DR, DERMS, and Renewable Energy Management*

VoltMind is trained over **1M+ energy-specific data points** for DR, grid management, DERMS, P2P trading, PV/battery control, and policy automation.
It supports **multilingual NLP for all major Indian languages** and provides **function-calling integration** via the following tools.

---

## **1. create\_dr\_event**

**Description**
Creates a Demand Response (DR) event with UEI/OpenADR-compliant payload.

**Schema**

```json
{
  "name": "create_dr_event",
  "parameters": {
    "type": "object",
    "properties": {
      "event_id": { "type": "string", "description": "Unique ID for DR event" },
      "target_mw": { "type": "number", "description": "Target MW reduction" },
      "start_time": { "type": "string", "format": "date-time" },
      "end_time": { "type": "string", "format": "date-time" },
      "incentive_rate": { "type": "number", "description": "Incentive per kWh" },
      "feeder_ids": { "type": "array", "items": { "type": "string" } },
      "approval_required": { "type": "boolean" }
    },
    "required": ["event_id", "target_mw", "start_time", "end_time", "incentive_rate"]
  }
}
```

**Example Prompt → Call**
**Prompt**:

> Schedule a DR event in Delhi DISCOM for 3.5 MW reduction from 6 PM to 9 PM today with ₹4.5/kWh incentive.

**Tool Call**:

```json
{
  "name": "create_dr_event",
  "parameters": {
    "event_id": "DR-DEL-2025-08",
    "target_mw": 3.5,
    "start_time": "2025-08-11T18:00",
    "end_time": "2025-08-11T21:00",
    "incentive_rate": 4.5,
    "feeder_ids": ["FD-DEL-101", "FD-DEL-102"],
    "approval_required": true
  }
}
```

---

## **2. get\_dr\_status**

**Description**
Fetches the current status of a DR event.

**Schema**

```json
{
  "name": "get_dr_status",
  "parameters": {
    "type": "object",
    "properties": {
      "event_id": { "type": "string", "description": "DR event ID" }
    },
    "required": ["event_id"]
  }
}
```

**Example Prompt → Call**
**Prompt**:

> Check the status of DR event DR-DEL-2025-08.

**Tool Call**:

```json
{
  "name": "get_dr_status",
  "parameters": {
    "event_id": "DR-DEL-2025-08"
  }
}
```

---

## **3. settle\_dr\_incentive**

**Description**
Settles incentives for a completed DR event using M\&V data.

**Schema**

```json
{
  "name": "settle_dr_incentive",
  "parameters": {
    "type": "object",
    "properties": {
      "event_id": { "type": "string" },
      "m_and_v_links": { "type": "array", "items": { "type": "string", "format": "uri" } },
      "final_payment": { "type": "number" }
    },
    "required": ["event_id", "m_and_v_links", "final_payment"]
  }
}
```

**Example Prompt → Call**
**Prompt**:

> Settle incentives for DR-DEL-2025-08 with ₹1,58,000 final payout based on M\&V data.

**Tool Call**:

```json
{
  "name": "settle_dr_incentive",
  "parameters": {
    "event_id": "DR-DEL-2025-08",
    "m_and_v_links": ["https://mv-data/delhi/dr2025-08.csv"],
    "final_payment": 158000
  }
}
```

---

## **📄 Full API Sections**

The above pattern continues for all tools:

* **grid\_state\_read**
* **grid\_reconfig\_suggest**
* **pv\_inverter\_setpoint**
* **bess\_setpoint**
* **der\_schedule**
* **sensor\_data\_read**
* **sensor\_alert\_subscribe**
* **uei\_deg\_discover**
* **uei\_deg\_fulfill**
* **uei\_deg\_settle**
* **flex\_forecast**
* **load\_shift\_plan**
* **calc\_cfa\_subsidy**
* **calc\_emi**
* **calc\_ulb\_payout**

---

## 📌 Developer Notes

* **Multilingual Input Support:** VoltMind can parse Hindi, Tamil, Telugu, Gujarati, Bengali, Punjabi, Marathi, Kannada, Malayalam, and English prompts directly into tool calls.
* **Validators:** Incomplete or missing parameters are auto-flagged, prompting the user for clarification.
* **Energy Data Provenance:** Model trained on **1M+ curated energy sector datapoints** with DR, DERMS, P2P, policy, and grid control coverage.
* **Foundation Model:** DeepSeek-R1 Distill Qwen-7B (fine-tuned).

---

If you want, I can now produce the **entire Markdown doc with all 20+ tools fully expanded** — ready to publish in your **VoltMind developer portal**.
That will make it look exactly like **OpenAI’s function calling reference**, but **energy-specific**.

Do you want me to prepare that **full expanded version** next? That will be a \~15–20 page API doc.

