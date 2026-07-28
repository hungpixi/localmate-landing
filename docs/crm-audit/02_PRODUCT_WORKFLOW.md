# LocalMate CRM Product Workflow

**Document:** CRM audit 02 — product workflow  
**Source of truth:** LocalMate master brief / landing-page offer  
**Status:** Product definition (implementation-agnostic)

## 1. Workflow intent

The CRM should turn a lightweight “Nhận web demo” request into a clearly owned, qualification-led sales and delivery handoff. It must preserve the LocalMate promise:

- The prospect sees a demo before committing.
- The starter package is **2,900,000₫ per project**, normally delivered in **7–10 days**.
- The project has a defined scope and **two feedback rounds**.
- The customer receives the handover before payment.
- If the fit is wrong, LocalMate can close the record respectfully without forcing a sale.

The CRM tracks a **deal** (the sales/project opportunity) against a **contact** (the person) and optionally an **account** (their business). A contact may have more than one deal over time; each deal has one current stage, one owner, and one next action.

## 2. Lifecycle and state diagram

```text
                         ┌─────────────────────────┐
                         │ New lead / Unworked     │
                         └────────────┬────────────┘
                                      │ assign + first response
                                      v
                         ┌─────────────────────────┐
                         │ Contacted                │
                         └───────┬─────────┬─────────┘
                                 │ need is  │ no response
                                 │ understood│ after cadence
                                 v          v
                         ┌─────────────┐  ┌──────────────┐
                         │ Qualified   │  │ Nurture      │
                         └──────┬──────┘  └──────┬───────┘
                                │ fit +          │ re-engage
                                │ discovery done │ when relevant
                                v                └──────────────┐
                         ┌─────────────┐                         │
                         │ Demo ready  │<────────────────────────┘
                         └──────┬──────┘
                                │ demo presented
                                v
                         ┌─────────────────┐
                         │ Demo presented  │
                         └──────┬──────┬───┘
                                │ wants  │ declines / no fit
                                │ proceed│
                                v        v
                         ┌─────────────┐  ┌─────────────┐
                         │ Proposal /  │  │ Lost        │
                         │ scope agree │  │ (reason)    │
                         └──────┬──────┘  └─────────────┘
                                │ scope, owner,
                                │ timeline confirmed
                                v
                         ┌─────────────┐
                         │ Handoff     │
                         │ ready       │
                         └──────┬──────┘
                                │ delivery owner accepts brief
                                v
                         ┌─────────────┐
                         │ In delivery │
                         └──────┬──────┘
                                │ demo/final output approved,
                                │ handover completed
                                v
                         ┌─────────────┐
                         │ Won         │
                         │ (handover)  │
                         └─────────────┘

  Any open stage ── legitimate disqualification / customer decline ──> Lost
  Any open stage ── no active timing but future fit ────────────────> Nurture
  Nurture ── new response or agreed follow-up date ─────────────────> Contacted
```

`Won` is a completed outcome, not merely “customer said yes.” The deal is won when the agreed deliverable is handed over, the handoff checklist is complete, and the payment step can be initiated according to the LocalMate promise.

## 3. Stages, entry criteria, and exit criteria

| Stage | Purpose | Required to enter | Exit / success condition | Default SLA |
| --- | --- | --- | --- | --- |
| New lead / Unworked | Capture every inbound request without losing context. | Contact name, at least one contact method, source, created time. | Owner assigned and first response task created; otherwise remains visible as overdue. | Assign within 1 business hour. |
| Contacted | Establish a two-way conversation and understand the request. | Owner, contact method, first-contact timestamp, next action. | Prospect replies and discovery facts are recorded → Qualified; no active timing → Nurture; explicit decline → Lost. | First attempt within 1 business hour; follow up at least 3 attempts across 7 days. |
| Qualified | Confirm there is a real, serviceable need and a plausible path to a demo. | Qualification fields complete and qualification outcome = fit / needs review. | Discovery is complete and demo inputs are usable → Demo ready; not a fit → Lost; timing later → Nurture. | Qualification within 2 business days of reply. |
| Demo ready | Queue a tailored demo with enough information to make it relevant. | Demo-readiness checklist complete, demo owner, due/presentation date, next action. | Demo delivered → Demo presented; blocked inputs → back to Qualified with a blocker; no-show → Contacted with reschedule task. | Demo prepared within the agreed customer date. |
| Demo presented | Record what was shown and capture the buying decision. | Presented timestamp, demo link/version, attendees, recap, response due date. | Scope and commercial intent are agreed → Proposal / scope agree; future timing → Nurture; decline/no fit → Lost. | Recap same day; decision follow-up within 2 business days. |
| Proposal / scope agree | Make the offer, limits, responsibilities, and delivery plan explicit. | Package/price, scope, exclusions, feedback rounds, target timeline, decision owner, next action. | Customer accepts scope and delivery owner accepts brief → Handoff ready; changes materially → revise and keep stage; decline → Lost/Nurture. | Proposal within 1 business day after demo decision. |
| Handoff ready | Prevent sales-to-delivery information loss. | Handoff checklist complete and delivery owner assigned. | Delivery owner acknowledges the brief → In delivery; unresolved blocker → Proposal / scope agree. | Accept or reject handoff within 1 business day. |
| In delivery | Track fulfillment against the agreed scope. | Accepted handoff, delivery milestones, customer inputs owner, due date. | Final output approved and all assets/access transferred → Won; cancelled → Lost with reason. | Milestone tasks due-date driven. |
| Nurture | Keep a legitimate future opportunity without polluting the active pipeline. | Nurture reason, re-engagement date, owner, relevant context. | Customer re-engages → Contacted; no longer viable → Lost. | Review on re-engagement date. |
| Won | Close the loop and retain delivery/customer context. | Handover date, delivered assets/access, acceptance, payment status, source attribution. | Terminal state; future work creates a new deal. | Complete closeout within 1 business day. |
| Lost | Preserve why the opportunity ended and support learning. | Lost reason, lost date, owner, concise note; competitor/budget/timing where known. | Terminal state; a genuinely new opportunity may reopen as a new deal. | Record at decision time. |

## 4. Required record fields

### Contact and business

Required at creation: `full_name`, `phone_or_preferred_contact`, `lead_source`, `created_at`, and `owner`. The form’s four intended inputs map to `full_name`, `phone`, `industry`, and optional `facebook_url`; source must also be captured by the CRM even if hidden from the form.

Required before Qualified:

- `industry_or_trade` and `business_name` (use “individual / not provided” when appropriate).
- `service_or_product` and `service_area` / location.
- `current_online_presence` (website, Facebook, TikTok, Google Maps, none, or other) and links where available.
- `primary_goal` and the problem the prospect wants solved.
- `decision_maker` status and preferred contact channel.
- `need_timing` (now, 30 days, 1–3 months, later, unknown).
- `qualification_status` and `qualification_notes`.

### Deal

Required on every open deal: `stage`, `owner`, `created_at`, `last_activity_at`, `next_action`, `next_action_due_at`, `priority`, and `source/campaign`.

Required from Demo ready onward:

- `offer_or_package` (starter 2.9M₫, content 990k₫/month, specialized service, or custom).
- `estimated_value` and `currency` (VND by default).
- `target_start_date`, `target_delivery_date`, and `scope_summary`.
- `customer_inputs_status` and `known_constraints`.
- `demo_url_or_reference`, `demo_version`, and `demo_scheduled_at` when applicable.

Required for terminal states:

- Won: `handover_completed_at`, `handover_owner`, `handover_assets`, `account_access_transferred`, `customer_acceptance`, and `payment_status`.
- Lost: `lost_reason`, `lost_at`, and `lost_notes`; capture `competitor`, `budget_band`, or `reconsideration_date` when known.

## 5. Qualification model

Qualification is a lightweight fit check, not a gate that makes small-business prospects fill out a long form. Mark each dimension **Yes**, **Partial**, or **Unknown**:

| Dimension | Pass signal |
| --- | --- |
| Need | A concrete visibility, trust, content, website, or contact-conversion problem exists. |
| Customer fit | One-person business, tradesperson, contractor, local shop, service provider, or small business in LocalMate’s target audience. |
| Service fit | The need is addressable by standardization, digital presence, content support, or a stated specialist service. |
| Timing | The prospect wants to start now or has a credible target date. |
| Decision access | We can speak with the owner or person who can approve scope. |
| Budget / commercial fit | The prospect understands the indicative 2.9M₫ starter offer or requests a package that can be scoped. |
| Inputs | The prospect can provide basic service/product details, images, contact information, and access when needed. |

Set `qualification_status = Qualified` when Need, Customer fit, Service fit, and Decision access are Yes, and there is no blocking constraint. Timing, budget, and inputs may be Partial if a dated task exists to resolve them. Set `Needs review` when evidence is incomplete. Set `Disqualified` only when the need is outside service scope, the request is abusive/fraudulent, or the customer explicitly declines.

## 6. Demo-readiness checklist

The deal may enter Demo ready only when all of the following are true:

- The prospect’s industry, service/product, location, and primary goal are recorded.
- The requested outcome and audience are stated in plain language.
- At least one useful reference is available: current channel, Facebook/website link, supplied images, or a documented “none.”
- The proposed package or demo scope is clear enough to avoid promising unpriced work.
- A demo owner and presentation date/time are set.
- A demo task exists with a due date, and the prospect knows what will be shown and what feedback is needed.
- Any missing customer input has an owner and due date; “waiting on customer” is never an unowned blocker.

The demo record should include a link or version identifier, what was personalized, attendees, and the single decision the demo is intended to enable.

## 7. Activities and tasks

An **activity** is a record of what happened; a **task** is a commitment to do something next. Activities are immutable enough for an audit trail and should include timestamp, actor, channel/type, related contact/deal, summary, and attachments/links where relevant.

Activity types: inbound form, phone call, Zalo/chat, Facebook message, email, meeting, demo, note, proposal sent, customer approval, customer input received, delivery milestone, handover, and payment update.

Tasks must have `title`, `owner`, `due_at`, `priority`, `status` (open, in progress, blocked, done, cancelled), related deal, and a completion note. Standard task templates:

- Assign owner and send first response.
- Qualify lead / schedule 60-minute consultation.
- Collect missing brand, service, image, or access inputs.
- Prepare demo and send preview link.
- Present demo and record feedback.
- Send scope/proposal and confirm package.
- Prepare and accept delivery handoff.
- Deliver milestone, request review, and track up to two feedback rounds.
- Transfer website, accounts, data, guide, and handover record.
- Close won/lost and set follow-up or retention action.

## 8. Priority, ownership, and next action

Priority is operational urgency, not customer value alone:

- **P0 — urgent:** active delivery or customer-blocking issue, overdue handoff, or response promised today.
- **P1 — high:** qualified lead with a near-term start, scheduled demo, proposal awaiting decision, or milestone due within 2 business days.
- **P2 — normal:** active opportunity with no immediate risk; default for most open deals.
- **P3 — low:** nurture, long-horizon interest, or non-urgent follow-up.

Ownership rules:

- Every deal has exactly one accountable sales owner at a time.
- The owner is responsible for stage hygiene, the next action, and customer communication until Handoff ready.
- Delivery has one named delivery owner; sales remains informed until handoff acceptance.
- A task may have a different assignee, but never an absent owner.
- Reassignment records the old owner, new owner, timestamp, and reason.

`next_action` is mandatory for every non-terminal deal and must be concrete, customer-facing where possible, and date-bound. “Follow up” is invalid. Good examples: “Call Minh to confirm the two target services by 2026-08-03” or “Send revised starter-package scope after demo feedback by tomorrow 16:00.” When a next action is completed, the system requires the user to log the resulting activity and create the next action before leaving the record open.

## 9. Handoff contract

Handoff ready is a controlled boundary, not a passive label. The sales owner supplies:

- Customer identity, contact channel, business context, and qualification notes.
- Approved package, price, scope, exclusions, timeline, and two-round feedback limit.
- Demo link/version and recorded customer feedback or approval.
- Customer-provided content, images, links, access requirements, and outstanding blockers.
- Named customer decision-maker and preferred review channel.
- Delivery milestones, target handover date, and any commercial exceptions.

The delivery owner must explicitly **accept** or **return with a reason**. Acceptance creates the first delivery task and a customer-facing expectation. A returned handoff moves back to Proposal / scope agree until the missing information is resolved.

## 10. Won and lost rules

### Won

A deal can be marked Won only after the agreed output is accepted and the handover packet is recorded: website/link, admin accounts and permissions, content/files, usage guide, and handover meeting or confirmation. Record payment as `pending`, `requested`, `paid`, or `exception approved`; payment status does not silently rewrite the delivery outcome.

### Lost

Use a controlled reason plus a note:

- Not a fit / outside service scope.
- No response after the defined follow-up cadence.
- Timing postponed (use Nurture instead when a real future date exists).
- Budget mismatch.
- Chose competitor / internal solution.
- Scope or trust concern.
- Duplicate / spam / invalid request.
- Customer cancelled after agreement.

Never use Lost as a parking place for incomplete records. If the relationship may restart and a date or trigger is known, use Nurture. Lost records remain reportable and can be reopened only for a genuinely new buying context, preserving the original outcome.

## 11. Operating checks and reporting

The CRM should surface these exceptions daily:

- Open deal with no owner, no next action, or overdue next action.
- New lead without a first response attempt inside the SLA.
- Qualified deal missing a qualification dimension or demo-readiness input.
- Demo ready without a scheduled presentation or demo link.
- Handoff ready without delivery acceptance.
- In-delivery deal without milestone due dates or with a blocked task.
- Won without handover evidence or payment status.
- Lost without a controlled reason.

Core funnel reporting: lead source → contacted → qualified → demo ready → demo presented → proposal/scope agree → handoff ready → in delivery → won/lost. Review conversion by source, qualification reason, demo-to-scope conversion, average stage age, response SLA, lost reason, delivery cycle time, and handover completeness.

