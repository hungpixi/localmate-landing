---
description: Store Flue session conversation state through the public persistence contract.
---

# Data Persistence API

AI-generated, awaiting review [ View as Markdown](https://flueframework.com/docs/api/data-persistence-api/index.md) 

The data persistence API controls **session conversation state**: recorded messages, task relationships, compaction summaries, and metadata needed to reopen a session. It does not store sandbox files or create workflow run history.

For deciding what must survive deployment, see [Agents](https://flueframework.com/docs/guide/building-agents/) and [Sandboxes](https://flueframework.com/docs/guide/sandboxes/). For build output and the deployment handoff, see [Develop & Build](https://flueframework.com/docs/guide/develop-and-build/).

## Imports

```
import { createAgent, type SessionData, type SessionStore } from '@flue/runtime';
```

## `SessionStore`

```
interface SessionStore {
  save(id: string, data: SessionData): Promise<void>;
  load(id: string): Promise<SessionData | null>;
  delete(id: string): Promise<void>;
}
```

| Method         | Contract                                                                         |
| -------------- | -------------------------------------------------------------------------------- |
| save(id, data) | Persist the complete current session record under the supplied Flue storage key. |
| load(id)       | Return previously saved session data, or null when no stored session exists.     |
| delete(id)     | Delete the stored session state for that key.                                    |

Choose a store with consistency, retention, access control, and tenant-isolation properties appropriate to the conversation content your application retains.

## Configure `persist`

Return a `SessionStore` in created-agent runtime configuration:

```
import { createAgent, type SessionStore } from '@flue/runtime';
import { sessionStore } from '../storage/session-store.ts';

const persist: SessionStore = sessionStore;

export default createAgent(() => ({
  model: 'anthropic/claude-sonnet-4-6',
  persist,
}));
```

`persist` applies to sessions initialized from that created agent. It is not an `init(...)` option because it determines the agent environment’s conversation-state boundary.

## `SessionData`

```
interface SessionData {
  version: 4;
  entries: SessionEntry[];
  leafId: string | null;
  metadata: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}
```

Flue rejects records written with an unsupported `version`. During the beta, clear older persisted session state when upgrading across a storage-version change.

`entries` contains the stored session history tree:

| Entry kind      | Contains                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------- |
| message         | Recorded user, assistant, and tool-shaped messages, including dispatch metadata where applicable. |
| compaction      | Summaries and token accounting used to shorten active model context.                              |
| branch\_summary | Summary records for retained branch information.                                                  |

Treat `SessionData` as potentially sensitive. It can include model-visible text, tool output, dispatch input snapshots, and summaries derived from earlier content.

## Target defaults

| Runtime path                                                                            | Default conversation-state behavior                                                                         |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Generated Node.js application with no persist override                                  | Uses process-memory storage; state is lost on restart and is not shared between replicas.                   |
| Generated Cloudflare Durable Object-backed agent/workflow path with no persist override | Uses Durable Object SQLite-backed session storage by default when the durable storage context is available. |
| Created agent returning persist                                                         | Uses the supplied SessionStore instead of the target default for its sessions.                              |

## Separate persistence responsibilities

| State category                                                 | Controlled by                                          |
| -------------------------------------------------------------- | ------------------------------------------------------ |
| Agent session messages and compaction state                    | SessionStore / persist or the target default           |
| Sandbox files, installed dependencies, and workspace artifacts | The configured sandbox or connector                    |
| Workflow run records and persisted run events                  | Workflow-run runtime storage, not SessionStore alone   |
| Mutations performed through tools or external APIs             | The external system and application idempotency policy |

A persisted conversation does not make sandbox files durable. A durable workspace does not retain conversation history unless session persistence does as well.

## Identity and deletion

Session data is stored under keys derived from Flue identity boundaries: agent instance or workflow invocation ownership, harness name, and session name. Deleting a session removes its stored conversation data and stored child task-session tree; it does not undo external effects or remove sandbox files.

## Implementing a store

A custom store can use any application-controlled durable backend, such as Postgres, SQLite, Redis, or another database. Implement complete record replacement or suitable atomic behavior for your backend, since Flue calls `save(...)` with the current `SessionData` representation.

```
import type { SessionData, SessionStore } from '@flue/runtime';

export const sessionStore: SessionStore = {
  async save(id: string, data: SessionData) {
    await database.sessions.upsert(id, data);
  },
  async load(id: string) {
    return await database.sessions.get(id);
  },
  async delete(id: string) {
    await database.sessions.delete(id);
  },
};
```

Keep database credentials in trusted runtime configuration, enforce access control around routes that reopen sessions, and verify restart behavior in the deployment environment where continuity matters.

## Docs Navigation

Current page: [Data Persistence API](https://flueframework.com/docs/api/data-persistence-api/)

### Sections

* [Guide](https://flueframework.com/docs/getting-started/quickstart/)
* [Reference](https://flueframework.com/docs/api/agent-api/)
* [CLI](https://flueframework.com/docs/cli/overview/)
* [SDK](https://flueframework.com/docs/sdk/overview/)
* [Ecosystem](https://flueframework.com/docs/ecosystem/overview/)

### Runtime

* [ Configuration ](https://flueframework.com/docs/reference/configuration/)
* [ Errors Reference ](https://flueframework.com/docs/api/errors-reference/)
* [ Agent API ](https://flueframework.com/docs/api/agent-api/)
* [ Provider API ](https://flueframework.com/docs/api/provider-api/)
* [ Routing API ](https://flueframework.com/docs/api/routing-api/)
* [ Events Reference ](https://flueframework.com/docs/api/events-reference/)

### Advanced

* [ Sandbox Connector API ](https://github.com/withastro/flue/blob/main/docs/sandbox-connector-spec.md)
* [ Data Persistence API ](https://flueframework.com/docs/api/data-persistence-api/)