Title: Live Content

Description: Fetched live

Source: https://raw.githubusercontent.com/withastro/flue/refs/heads/main/README.md

---

> **Experimental** — Flue is under active development. APIs may change.
>
> Looking for `v0.0.x`? [See here.](https://github.com/withastro/flue/tree/v0.0.x)

# Flue

Flue is **The Agent Harness Framework.** If you know how to use Claude Code (or Codex, OpenCode, Pi, etc)... then you already know the basics of how to build agents with Flue.

Flue is a TypeScript framework for building the next generation of agents, designed around a built-in **agent harness**. It's like Claude Code, but 100% headless and programmable. There's no baked-in assumption like requiring a human operator to function. No TUI. No GUI. Just TypeScript.

But using Flue feels like using Claude Code. The agents you build act autonomously to solve problems and complete tasks. They require very little code to run — most of the "logic" lives in Markdown: skills, context, and `AGENTS.md`.

Flue isn't another AI SDK. It's a proper runtime-agnostic framework — think Astro or Next.js, but for agents. Write once, build, and deploy your agents anywhere (Node.js, Cloudflare, GitHub Actions, GitLab CI/CD, etc).

## Packages

| Package                             | Description                                |
| ----------------------------------- | ------------------------------------------ |
| [`@flue/runtime`](packages/runtime) | Runtime: harness, sessions, tools, sandbox |
| [`@flue/cli`](packages/cli)         | CLI + build/dev tooling (`flue` binary)    |

## Examples

Message-driven agents receive direct HTTP or WebSocket messages at `/agents/:name/:id`; application-owned integrations may call `dispatch(...)` to deliver asynchronous input into agent sessions. See [Message-Driven Agents](https://flueframework.com/docs/guide/message-driven-agents/) for these surfaces. Runnable WebSocket examples are available for [Node](examples/node-websocket) and [Cloudflare](examples/cloudflare-websocket).

For external tracing, metrics, and error reporting, see [Observability](https://flueframework.com/docs/guide/observability/), the official [`@flue/opentelemetry`](packages/opentelemetry) adapter, the public `observe(...)`-based [Braintrust tracing example](examples/braintrust), and the [Sentry error-reporting example](examples/sentry).

### Quickstart

The simplest agent — no container, no tools, just a prompt and a typed result.

Unless you opt-in to initializing a full container sandbox, Flue will default to a virtual sandbox for every agent, powered by [just-bash](https://github.com/vercel-labs/just-bash). A virtual sandbox is going to be dramatically faster, cheaper, and more scalable than running a full container for every agent, which makes it perfect for building high-traffic/high-scale agents.

```ts
// .flue/workflows/hello-world.ts
import { createAgent, type FlueContext, type WorkflowRouteHandler } from '@flue/runtime';
import * as v from 'valibot';

// Public HTTP exposure is enabled by exported Hono middleware.
export const route: WorkflowRouteHandler = async (_c, next) => next();

const translator = createAgent(() => ({ model: 'anthropic/claude-sonnet-4-6' }));

// The workflow handler. Where the orchestration of the workflow lives.
export async function run({ init, payload }: FlueContext) {
  // `harness` -- Your initialized harness including sandbox, tools, skills, etc.
  const harness = await init(translator);
  const session = await harness.session();

  // prompt() sends a message in the session, triggering action.
  const { data } = await session.prompt(
    `Translate this to ${payload.language}: "${payload.text}"`,
    {
      // Pass `result` to get typed, schema-validated data back from your agent.
      result: v.object({
        translation: v.string(),
        confidence: v.picklist(['low', 'medium', 'high']),
      }),
    },
  );

  return data;
}
```

### Support Agent

A support agent can also run on Cloudflare without a container by using Flue's default virtual sandbox. Populate its filesystem with the context the agent needs, then it can search that content with its built-in `grep`, `glob`, and `read` tools.

Because this agent is deployed to Cloudflare, message history and session state are automatically persisted for you. So you (or your customer) can revisit this support session days, weeks, or years later and pick up exactly where you left off.

```ts
// .flue/workflows/support.ts
import { createAgent, type FlueContext, type WorkflowRouteHandler } from '@flue/runtime';

export const route: WorkflowRouteHandler = async (_c, next) => next();

const support = createAgent(() => ({ model: 'openrouter/moonshotai/kimi-k2.6' }));

export async function run({ init, payload }: FlueContext) {
  const harness = await init(support);
  const session = await harness.session();

  await session.fs.mkdir('/workspace/articles', { recursive: true });
  await session.fs.writeFile(
    '/workspace/articles/reset-password.md',
    '# Reset your password\n\nUse the account settings page to request a password reset email.',
  );

  return await session.prompt(
    `You are a support agent. Search the workspace for articles relevant
    to this request, then write a helpful response.\n\nCustomer: ${payload.message}`,
  );
}
```

This uses Flue's built-in, just-bash-powered virtual sandbox; no connector or container is required.

### Issue Triage (CI)

A triage agent that runs in CI whenever an issue is opened on GitHub. The `local()` sandbox gives the agent direct access to the host filesystem and shell — perfect for CI runners, where `gh`, `git`, and `npm` are already on `$PATH` and the runner itself is your isolation boundary.

```ts
// .flue/workflows/triage.ts
import { createAgent, type FlueContext } from '@flue/runtime';
import { local } from '@flue/runtime/node';
import * as v from 'valibot';

// Because we are running this in CI, we don't need to expose this as an HTTP endpoint.
// The CLI can run any workflow from the command line, `flue run triage ...`
export async function run({ init, payload }: FlueContext) {
  // `local()` gives the agent direct access to the host filesystem and
  // shell. The agent's bash tool can run `gh`, `git`, `npm` directly.
  // Skills and AGENTS.md are discovered from process.cwd().
  //
  // Only a small allowlist of shell-essential env vars (PATH, HOME,
  // locale, etc.) is inherited from process.env by default. Pass
  // `env: { GH_TOKEN: process.env.GH_TOKEN }` to expose more.
  //
  // `model` sets the default model for every prompt/skill call in this
  // agent. Override per-call with `{ model: '...' }` on prompt()/skill().
  const agent = createAgent(() => ({
    sandbox: local({
      env: { GH_TOKEN: process.env.GH_TOKEN },
    }),
    model: 'anthropic/claude-opus-4-7',
  }));
  const harness = await init(agent);
  const session = await harness.session();

  // Workspace-discovered skills are activated by their frontmatter `name:`.
  // Statically imported packaged skills can also be activated by passing their reference.
  const { data } = await session.skill('triage', {
    // Pass arguments to any prompt or skill.
    args: { issueNumber: payload.issueNumber },
    // Result schemas are great for being able to act/orchestrate based on
    // the structured `data` returned from your prompt or skill call.
    result: v.object({
      severity: v.picklist(['low', 'medium', 'high', 'critical']),
      reproducible: v.boolean(),
      summary: v.string(),
      fix_applied: v.boolean(),
    }),
  });

  return data;
}
```

### Coding Agent (Remote Sandbox)

The examples above all run on a lightweight virtual sandbox — no container needed. But for a full coding agent, you want a real Linux environment with git, Node.js, a browser, and a cloned repo ready to go.

Daytona's declarative image builder lets you define the environment in code. The image is cached after the first build, so subsequent sessions start instantly.

Install the Daytona connector with `flue add daytona | <your-agent>` (e.g. `claude`, `opencode`, `codex`, `cursor-agent`). It writes a small `connectors/daytona.ts` adapter into your project that you import directly.

```ts
// .flue/workflows/code.ts
import {
  Type,
  createAgent,
  defineTool,
  type FlueContext,
  type WorkflowRouteHandler,
} from '@flue/runtime';
import { Daytona } from '@daytona/sdk';
import { daytona } from '../connectors/daytona';

export const route: WorkflowRouteHandler = async (_c, next) => next();

export async function run({ init, payload, env }: FlueContext) {
  // Each agent gets a real container via Daytona. The container has
  /

