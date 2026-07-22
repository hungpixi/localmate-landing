---
description: Reference runtime activity, attached-agent streams, WebSocket messages, and global observation APIs.
---

# Events Reference

Last updated May 30, 2026 [ View as Markdown](https://flueframework.com/docs/api/events-reference/index.md) 

Observable runtime types and global observation APIs are exported from `@flue/runtime`.

```
import {
  type AgentWebSocketClientMessage,
  type AgentWebSocketServerMessage,
  type AttachedAgentEvent,
  type AttachedAgentStreamError,
  type FlueEvent,
  type FluePublicError,
  type WebSocketErrorMessage,
  type WebSocketServerMessage,
  type WorkflowRunWebSocketErrorMessage,
  type WorkflowWebSocketClientMessage,
  type WorkflowWebSocketServerMessage,
  observe,
  type FlueEventSubscriber,
} from '@flue/runtime';
```

## Runtime events

`FlueEvent` is the observable runtime activity union. Workflow invocations emit workflow-run events with `runId`. Direct prompts and asynchronously dispatched agent inputs emit agent activity with `instanceId`; dispatched activity may also carry `dispatchId`. Those interactions are not workflow runs.

Runtime-emitted events receive a per-context `eventIndex` and `timestamp`. Applicable events may also carry harness and session names, generated operation and turn ids, task correlation, and parent-session correlation. Workflow history persists events where run-store persistence succeeds. Attached-agent streams and `observe(...)` are live observation surfaces, not durable workflow history.

### Lifecycle events

| Event        | Meaning                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------------- |
| run\_start   | Workflow run started. Includes workflow ownership and payload.                                                  |
| run\_resume  | Recovery continued handling an admitted workflow run after interruption. Workflow code did not resume or retry. |
| run\_end     | Workflow run ended. Includes result or error state and duration.                                                |
| agent\_start | Agent loop started.                                                                                             |
| agent\_end   | Agent loop ended.                                                                                               |
| idle         | Agent activity became idle.                                                                                     |

### Agent operations

| Event            | Meaning                                                                           |
| ---------------- | --------------------------------------------------------------------------------- |
| operation\_start | A prompt, skill, task, shell, or compact operation started.                       |
| operation        | An operation ended. Includes duration, error state, and optional result or usage. |
| task\_start      | Delegated task started.                                                           |
| task             | Delegated task ended.                                                             |

Operations, turns, task ids, and tool-call ids are generated correlation boundaries. Harnesses and sessions have names. Harness-level shell activity emits tool telemetry without a session operation boundary.

### Model turns

| Event                                           | Meaning                                                                                                 |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| turn\_start                                     | Model turn started.                                                                                     |
| turn\_request                                   | Model-visible request. Includes provider, model, input, tools, and optional reasoning level.            |
| turn\_end                                       | Detailed model turn ended. Includes assistant message and tool results.                                 |
| turn                                            | Normalized terminal model-turn telemetry. Includes duration, error state, and optional output or usage. |
| message\_start, message\_update, message\_end   | Detailed assistant-message stream.                                                                      |
| text\_delta                                     | Text stream delta.                                                                                      |
| thinking\_start, thinking\_delta, thinking\_end | Thinking stream lifecycle.                                                                              |

`turn_request` and `turn` use purpose `agent`, `compaction`, or `compaction_prefix`. Select detailed or normalized events intentionally when an observer must avoid double-counting model activity.

### Tool calls

| Event                   | Meaning                                                                |
| ----------------------- | ---------------------------------------------------------------------- |
| tool\_execution\_start  | Detailed tool execution started.                                       |
| tool\_execution\_update | Detailed partial tool result.                                          |
| tool\_execution\_end    | Detailed tool execution ended.                                         |
| tool\_start             | Normalized tool telemetry started.                                     |
| tool\_call              | Normalized terminal tool telemetry. Includes duration and error state. |

Detailed and normalized events overlap for model-driven tool execution. Programmatic shell activity emits normalized tool telemetry but not necessarily detailed execution events. Use `toolCallId` to correlate related events.

### Compaction

| Event             | Meaning                                                                               |
| ----------------- | ------------------------------------------------------------------------------------- |
| compaction\_start | Conversation compaction started. Includes threshold, overflow, or manual reason.      |
| compaction        | Conversation compaction ended. Includes message counts, duration, and optional usage. |

### Logs

| Event | Meaning                                                                             |
| ----- | ----------------------------------------------------------------------------------- |
| log   | Structured application log with info, warn, or error level and optional attributes. |

#### `FlueEvent`

```
type FlueEvent = RuntimeEventVariant & {
  runId?: string;
  instanceId?: string;
  dispatchId?: string;
  eventIndex?: number;
  timestamp?: string;
  session?: string;
  parentSession?: string;
  taskId?: string;
  harness?: string;
  operationId?: string;
  turnId?: string;
};
```

## Attached agent events

Attached-agent streams expose live direct-agent activity. They omit workflow lifecycle events, require `instanceId`, and never carry `runId`. They are distinct from persisted workflow-run event streams.

#### `AttachedAgentEvent`

```
type AttachedAgentEvent = Exclude<
  FlueEvent,
  { type: 'run_start' } | { type: 'run_resume' } | { type: 'run_end' }
> & {
  runId?: never;
  instanceId: string;
};
```

#### `AttachedAgentStreamError`

```
interface AttachedAgentStreamError {
  type: 'error';
  instanceId: string;
  error: FluePublicError;
}
```

Terminal error frame emitted after an attached-agent SSE stream has started.

## Global observation

### `observe(...)`

```
function observe(subscriber: FlueEventSubscriber): () => void;
```

Subscribes to live workflow-run and agent-interaction activity emitted in the current isolate. The returned function unsubscribes the listener. Subscribers run synchronously from the event emission path with isolated JSON snapshots. Keep callbacks lightweight and queue substantial asynchronous work instead of blocking emission. Returned promises are observed for rejection but are not awaited.

See [Observability](https://flueframework.com/docs/guide/observability/) for application setup and exporter guidance.

#### `FlueEventSubscriber`

```
type FlueEventSubscriber = (event: FlueEvent, ctx: FlueContext) => void | Promise<void>;
```

Receives an isolated decorated event snapshot and its originating context. Subscriber failures are logged and do not halt event dispatch or the originating execution. If an event cannot be serialized as JSON, Flue logs the snapshot failure and skips global observer delivery for that event.

## Public errors

Transport errors use the shared `FluePublicError` shape. See [Errors Reference](https://flueframework.com/docs/api/errors-reference/) for its fields, stable categories, transport envelopes, and the distinction between transport errors and open-ended workflow failure records.

## WebSocket protocol messages

These exports describe low-level protocol version 1 messages. For high-level external client APIs, see [SDK API](https://flueframework.com/docs/sdk/overview/).

#### `AgentWebSocketClientMessage`

```
type AgentWebSocketClientMessage =
  | { version: 1; type: 'prompt'; requestId: string; message: string; session?: string }
  | { version: 1; type: 'ping'; requestId?: string };
```

#### `AgentWebSocketServerMessage`

```
type AgentWebSocketServerMessage =
  | { version: 1; type: 'ready'; target: 'agent'; name: string; instanceId: string }
  | { version: 1; type: 'started'; requestId: string }
  | { version: 1; type: 'event'; requestId: string; event: AttachedAgentEvent }
  | { version: 1; type: 'result'; requestId: string; result: unknown }
  | WebSocketErrorMessage
  | { version: 1; type: 'pong'; requestId?: string };
```

Agent sockets can process sequential prompts. `requestId` correlates prompt-scoped messages.

#### `WorkflowWebSocketClientMessage`

```
interface WorkflowWebSocketClientMessage {
  version: 1;
  type: 'invoke';
  requestId: string;
  payload?: unknown;
}
```

#### `WorkflowWebSocketServerMessage`

```
type WorkflowWebSocketServerMessage =
  | { version: 1; type: 'ready'; target: 'workflow'; name: string }
  | { version: 1; type: 'started'; requestId: string; runId: string }
  | { version: 1; type: 'event'; requestId: string; runId: string; event: FlueEvent }
  | { version: 1; type: 'result'; requestId: string; runId: string; result: unknown }
  | WebSocketErrorMessage
  | WorkflowRunWebSocketErrorMessage;
```

Workflow sockets accept one invocation and close after completion or failure. `started` reports an admitted workflow invocation before workflow events are delivered.

#### `WebSocketErrorMessage`

```
type WebSocketErrorMessage = {
  version: 1;
  type: 'error';
  requestId?: string;
  error: FluePublicError;
};
```

Connection- or request-scoped WebSocket failure.

#### `WorkflowRunWebSocketErrorMessage`

```
type WorkflowRunWebSocketErrorMessage = WebSocketErrorMessage & {
  runId: string;
};
```

Workflow-run-scoped WebSocket failure after a run id has been allocated. It can occur before a `started` frame when workflow admission fails.

#### `WebSocketServerMessage`

```
type WebSocketServerMessage = AgentWebSocketServerMessage | WorkflowWebSocketServerMessage;
```

## Docs Navigation

Current page: [Events Reference](https://flueframework.com/docs/api/events-reference/)

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