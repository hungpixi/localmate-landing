# Flue Framework Documentation Reference

Flue is **The Agent Harness Framework** for TypeScript. It allows building headless, programmable, and deployable agents that act autonomously using Markdown skills, context, and custom/MCP tools.

---

## 1. Directory Layouts

Flue supports two source layouts:
1. **Root Layout**: `./agents/` and `./workflows/`
2. **.flue Layout**: `./.flue/agents/` and `./.flue/workflows/`

For an existing backend project, use the **`.flue` layout** (`./server/.flue/agents/` and `./server/.flue/workflows/`) to avoid cluttering the parent workspace.

---

## 2. Configuration (`flue.config.ts`)

Located in the root of the Flue sub-directory:
```typescript
import { defineConfig } from '@flue/cli/config';

export default defineConfig({
  target: 'node', // Options: 'node' | 'cloudflare'
});
```

---

## 3. Agent API Reference

Agents and subagents are defined using `@flue/runtime`.

### 3.1. `createAgent`
Defines an agent initializer. Default-export the returned value from an `agents/<name>.ts` module.

```typescript
import { createAgent } from '@flue/runtime';
import { local } from '@flue/runtime/node'; // Node local sandbox
import { sessionStore } from '../storage/session-store';

export default createAgent((ctx) => ({
  model: 'ninerouter/gemini-2.5-flash', // Model specifier
  instructions: 'You are an export specialist agent.',
  sandbox: local({
    env: {
      NINEROUTER_KEY: process.env.NINEROUTER_KEY,
    }
  }),
  persist: sessionStore, // Session state persistence
}));
```

### 3.2. `defineAgentProfile`
Validates and returns a reusable agent profile. Use profiles as the baseline for a created agent or as named subagents available for delegated tasks.

```typescript
import { defineAgentProfile } from '@flue/runtime';

export const salesProfile = defineAgentProfile({
  name: 'helen',
  model: 'ninerouter/gemini-2.5-flash',
  instructions: 'You are Helen, the Sales Outreach specialist...',
  tools: [/* tools here */],
});
```

### 3.3. `defineTool`
Validates and freezes a custom tool that the model can call. Use `Type` (TypeBox style) to specify parameter schemas.

```typescript
import { defineTool, Type } from '@flue/runtime';

export const getProjectDetails = defineTool({
  name: 'get_project_details',
  description: 'Retrieve detailed export project info and documents.',
  parameters: Type.Object({
    projectId: Type.String({ description: 'ID of the export project' }),
  }),
  execute: async ({ projectId }) => {
    // Database call or logic returning a string
    return JSON.stringify({ id: projectId, status: 'Drafting' });
  },
});
```

### 3.4. `connectMcpServer`
Connects to an external Model Context Protocol (MCP) server.

```typescript
import { connectMcpServer } from '@flue/runtime';

const connection = await connectMcpServer('my-mcp-server', {
  url: 'http://localhost:3000/mcp',
  transport: 'streamable-http', // 'streamable-http' | 'sse'
});
const mcpTools = connection.tools; // Array of ToolDefinition
```

---

## 4. Provider API Reference

Registers and configures custom LLM providers. Call this globally or during application setup.

```typescript
import { registerProvider, configureProvider } from '@flue/runtime';

// Register a custom OpenAI-compatible provider (e.g. 9Router)
registerProvider('ninerouter', {
  api: 'openai-completions',
  baseUrl: process.env.NINEROUTER_URL || 'https://api.9router.com/v1',
  apiKey: process.env.NINEROUTER_KEY,
});

// Configure or override properties for a provider
configureProvider('ninerouter', {
  baseUrl: 'https://api.9router.com/v1',
  headers: {
    'X-Custom-Header': 'ExportMate',
  },
});
```

---

## 5. Session and Harness API

A **Harness** is an initialized agent environment. A **Session** is the conversation state tree inside that harness.

### 5.1. Initializing and Running Sessions Programmatically

```typescript
import { init } from '@flue/runtime'; // inside a FlueContext
// Or programmatically:
const harness = await init(agent);
const session = await harness.session('session-id-123'); // Retrieve or create session

// Send prompt
const response = await session.prompt(
  'Draft a cashew nut export proposal for Hamburg.',
  {
    thinkingLevel: 'medium', // Reasoning level
    tools: [getProjectDetails], // Session overrides
  }
);
console.log(response.text);
```

### 5.2. Structured Output via Schema Validation
Flue supports validating agent returns using Hono-style validator/schema frameworks (like Valibot or Zod under standard JSON-schemas):

```typescript
import * as v from 'valibot';

const { data } = await session.prompt(
  'Summarize this document and return key metadata.',
  {
    result: v.object({
      confidence: v.number(),
      language: v.string(),
      summary: v.string(),
    }),
  }
);
console.log(data.confidence); // Strongly-typed object
```

### 5.3. Harness Shell & File System (Direct Access)
Allows reading/writing to the sandbox filesystem or executing shell commands out-of-band:
```typescript
// Shell (without conversation log)
const result = await harness.shell('npm run test');

// File System
await harness.fs.writeFile('/workspace/draft.md', 'Cashew Nut Contract Draft');
const content = await harness.fs.readFile('/workspace/draft.md');
```

---

## 6. Data Persistence API

Conversation state (message logs, branch trees) is saved using a `SessionStore` implementation.

```typescript
import { type SessionData, type SessionStore } from '@flue/runtime';

export const prismaSessionStore: SessionStore = {
  async save(id: string, data: SessionData): Promise<void> {
    await prisma.agentSession.upsert({
      where: { sessionCode: id },
      update: { stateJson: JSON.stringify(data) },
      create: { sessionCode: id, stateJson: JSON.stringify(data) },
    });
  },

  async load(id: string): Promise<SessionData | null> {
    const record = await prisma.agentSession.findUnique({
      where: { sessionCode: id }
    });
    if (!record || !record.stateJson) return null;
    return JSON.parse(record.stateJson) as SessionData;
  },

  async delete(id: string): Promise<void> {
    await prisma.agentSession.delete({
      where: { sessionCode: id }
    });
  }
};
```

Mount `persist` on agent initialization:
```typescript
createAgent(() => ({
  model: 'ninerouter/gemini-2.5-flash',
  persist: prismaSessionStore,
}));
```

---

## 7. Events & Observation API

The `observe` function subscribes to runtime events (like model thoughts, delta streams, tool calls, and lifecycle events).

```typescript
import { observe, type FlueEvent } from '@flue/runtime';

// Subscribe to global isolate events
const unsubscribe = observe((event: FlueEvent, ctx) => {
  console.log(`Event [${event.type}] emitted`);

  if (event.type === 'turn_start') {
    // Model started a thinking step
  }
  
  if (event.type === 'text_delta') {
    // Stream delta text to client
    const textDelta = event.text; // Delta string
  }

  if (event.type === 'tool_start') {
    // Model called a tool
    console.log(`Running tool ${event.name} with args ${event.arguments}`);
  }

  if (event.type === 'tool_call') {
    // Tool completed execution
  }
});

// To unsubscribe:
// unsubscribe();
```

### 7.1. Event Types Reference
- **Lifecycle**: `run_start`, `run_resume`, `run_end`, `agent_start`, `agent_end`, `idle`
- **Operations**: `operation_start`, `operation` (ends prompt, skill, task, shell, or compact), `task_start`, `task`
- **Turns**: `turn_start`, `turn_request`, `turn_end`, `turn`
- **Streaming Content**: `message_start`, `message_update`, `message_end`, `text_delta`, `thinking_start`, `thinking_delta`, `thinking_end`
- **Tools**: `tool_execution_start`, `tool_execution_update`, `tool_execution_end`, `tool_start`, `tool_call`
- **Logs**: `log`
