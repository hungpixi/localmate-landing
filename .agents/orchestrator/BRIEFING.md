# BRIEFING — 2026-06-09T15:08:11+07:00

## Mission
Plan, coordinate, and execute the implementation of four core business features: onboarding preparation checklist, split packaging/marking compliance audits, visual geospatial EUDR checks, and carbon-rated route recommendations.

## 🔒 My Identity
- Archetype: teamwork_preview_orchestrator
- Roles: orchestrator, user_liaison, human_reporter, successor
- Working directory: d:\code\exportmate\.agents\orchestrator
- Original parent: main agent
- Original parent conversation ID: 72538b66-6efa-450b-9c7c-2e57461d6e0d

## 🔒 My Workflow
- **Pattern**: Project
- **Scope document**: d:\code\exportmate\.agents\orchestrator\PROJECT.md
1. **Decompose**: Decompose requirements into milestones.
2. **Dispatch & Execute**:
   - **Direct (iteration loop)**: Explorer -> Worker -> Reviewer -> test -> gate
   - **Delegate (sub-orchestrator)**: [TBD]
3. **On failure** (in this order):
   - Retry: nudge stuck agent or re-send task
   - Replace: spawn fresh agent with partial progress
   - Skip: proceed without (only if non-critical)
   - Redistribute: split stuck agent's remaining work
   - Redesign: re-partition decomposition
   - Escalate: report to parent (sub-orchestrators only, last resort)
4. **Succession**: self-succeed at 16 spawns, cancel timers, spawn successor.
- **Work items**:
  1. Onboarding Wizard & Preparation Checklist [pending]
  2. Split Packaging & Marking Audits [pending]
  3. Visual GIS Map & Deforestation Validation Alerts [pending]
  4. Carbon-Rated Shipping Route Recommendations [pending]
- **Current phase**: 1
- **Current focus**: Exploration and Planning

## 🔒 Key Constraints
- NEVER write, modify, or create source code files directly.
- NEVER run build/test commands yourself — require workers to do so.
- You MAY use file-editing tools ONLY for metadata/state files (.md) in your .agents/ folder.
- Never reuse a subagent after it has delivered its handoff — always spawn fresh

## Current Parent
- Conversation ID: 72538b66-6efa-450b-9c7c-2e57461d6e0d
- Updated: not yet

## Key Decisions Made
- Use Project Orchestrator pattern.
- Divide implementation into 4 milestones.

## Team Roster
| Agent | Type | Work Item | Status | Conv ID |
|---|---|---|---|---|
| explorer_m1 | teamwork_preview_explorer | Codebase Exploration | in-progress | 68ade495-970e-4c00-926d-0af4ec9159e9 |

## Succession Status
- Succession required: no
- Spawn count: 1 / 16
- Pending subagents: 68ade495-970e-4c00-926d-0af4ec9159e9
- Predecessor: none
- Successor: not yet spawned

## Active Timers
- Heartbeat cron: 4bd4d33f-a625-4662-913f-8c85ea8bb66e/task-19
- Safety timer: none
- On succession: kill all timers before spawning successor
- On context truncation: run `manage_task(Action="list")` — re-create if missing

## Artifact Index
- d:\code\exportmate\ORIGINAL_REQUEST.md — Verbatim user requests
- d:\code\exportmate\.agents\orchestrator\BRIEFING.md — My working memory
- d:\code\exportmate\.agents\orchestrator\progress.md — Heartbeat and status
- d:\code\exportmate\.agents\orchestrator\PROJECT.md — Project plan & milestone definitions
