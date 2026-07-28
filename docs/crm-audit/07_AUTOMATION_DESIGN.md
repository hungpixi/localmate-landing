# CRM V1 automation design

Status: implementation contract (V1)

This document defines the behavior owned by CRM automation. It deliberately does not define tables, HTTP routes, or screens. Callers provide persistence and notification adapters through the ports in `src/modules/crm/automation`.

## Invariants

- Every state-changing command writes one append-only audit event in the same unit of work as the business mutation. Audit events include actor, source, request/idempotency key, timestamp, and redacted before/after snapshots. A failed command writes no business event.
- `lastActivityAt` changes only for a meaningful user/system activity (stage transition, note, call, email, demo, task completion, or handoff), never for reads or an audit retry. The command timestamp is used for both the event and the activity update.
- Commands are safe to retry with the same idempotency key. A retry returns the original result and does not duplicate audit events, demos, tasks, or notifications.
- Automation owns side effects; API routes only authenticate/authorize, validate transport input, and call the service. Migrations own storage shape. Frontend code owns presentation.

## Stage side effects

Stage values are `new`, `contacted`, `qualified`, `demo`, `proposal`, `won`, and `lost`.

| Transition | Side effects |
| --- | --- |
| Any real stage change | Update `stage`, `stageChangedAt`, `lastActivityAt`; append `deal.stage_changed`. |
| `new` → `contacted` | Upsert the next “Contact lead” follow-up task. |
| `contacted` → `qualified` | Upsert “Confirm qualification”. |
| Any stage → `demo` | Create one idempotent demo and upsert “Prepare demo”. |
| `demo` → `proposal` | Complete the open demo-preparation task and upsert “Send proposal”. |
| Any stage → `won` | Validate handoff first; complete open sales follow-ups; append handoff audit event. |
| Any stage → `lost` | Require a non-empty `lostReason`; complete open follow-ups; preserve the reason in the stage event. |

Repeating the current stage is a no-op. Moving out of `lost` requires a new transition command and a new reason is not silently inferred. Automation never deletes tasks: it completes only tasks it owns and leaves manually created tasks alone.

## Follow-up tasks

Tasks are upserted by a stable automation key `(dealId, automationKey)`. An existing open task is updated in place (title, due date, owner, and context); a completed task is not reopened by a retry. A stage transition may complete only the previous automation task when its key is listed by the transition rule.

The initial V1 due-date policy is relative to the command timestamp: contact in 1 business day, qualification in 2 business days, demo preparation in 1 business day, and proposal in 2 business days. The business-day calculator is injected so holidays/time zones remain an application concern.

## Demos and handoff

Entering `demo` creates a demo once, keyed by deal and `demo` automation key. A caller may supply a scheduled time; otherwise the adapter stores an unscheduled demo. Demo creation updates activity and emits `demo.created` only when a new demo is actually created.

A handoff is valid only when the deal has an owner, contact identity (name plus phone or email), customer/company identity, a qualified product or need, and an explicit handoff note. If the workflow requires a demo, `demoApprovedAt` must also exist. Validation happens before changing to `won`; the result is a field-level error and no partial side effect.

## Notifications and cron

Automation depends on a `NotificationScheduler` abstraction. Scheduling stores a durable notification request with a stable key; it does not send mail/SMS directly. A cron/queue consumer calls `processDueNotifications(now)`, claims due requests, invokes the notifier, and acknowledges or retries with backoff. The same interface can be backed by a database queue, Cloudflare Queues, or a local test adapter. The domain does not use `setTimeout`, wall-clock polling, or provider SDKs.

Notification failures are retryable and observable. They do not roll back the original CRM mutation. At-least-once delivery is expected; consumers should use the notification key for deduplication.

## Audit event vocabulary

V1 emits `deal.stage_changed`, `task.upserted`, `task.completed`, `demo.created`, `handoff.validated`, `handoff.rejected`, and `notification.scheduled`. Payloads contain identifiers and changed fields, not secrets or full contact data. Retention, actor authorization, and redaction policy belong to the persistence/security slices.

## Integration boundary

The module accepts repositories and a unit-of-work callback. A later persistence slice maps these ports to its chosen schema without changing the rules above. No migration or API route is part of this deliverable.

## Verification status

The automation module passes a module-only TypeScript compilation and whitespace validation. Runtime automation is **untested** in this repository: there is no CRM persistence adapter, API server, scheduler backend, or runtime test harness in the checked-out Vite landing-page project. Integration tests should be added when those slices land.
