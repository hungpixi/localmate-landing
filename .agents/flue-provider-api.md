---
description: Configure built-in model providers and register custom provider integrations.
---

# Provider API

Last updated May 31, 2026 [ View as Markdown](https://flueframework.com/docs/api/provider-api/index.md) 

The provider API configures model connection paths at runtime. Import ordinary provider APIs from `@flue/runtime`. For model selection, authentication setup, and Workers AI examples, see [Models & Providers](https://flueframework.com/docs/guide/models/).

## Imports

```
import {
  configureProvider,
  registerApiProvider,
  registerProvider,
  type HttpProviderRegistration,
  type ProviderConfiguration,
  type ProviderRegistration,
} from '@flue/runtime';
```

## `configureProvider()`

```
function configureProvider(providerId: string, settings: ProviderConfiguration): void;
```

Configures transport-level settings for an existing built-in or registered provider while preserving its resolved model metadata. The provider ID is the prefix used in model specifiers, such as `anthropic` in `anthropic/claude-sonnet-4-6`.

Repeated calls for the same provider ID replace the previous settings object.

### `ProviderConfiguration`

```
interface ProviderConfiguration {
  baseUrl?: string;
  headers?: Record<string, string>;
  apiKey?: string;
  storeResponses?: boolean;
}
```

| Property       | Purpose                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| baseUrl        | Override the provider endpoint.                                                                                                 |
| headers        | Merge headers into the resolved model’s provider-level headers.                                                                 |
| apiKey         | Override the API key returned to the underlying model runtime.                                                                  |
| storeResponses | Send store: true for OpenAI Responses API providers. Enable only when your application accepts the provider’s retention policy. |

## `registerProvider()`

```
function registerProvider(providerId: string, registration: ProviderRegistration): void;
```

Registers a model provider keyed by the provider ID used in model specifiers. Re-registering the same provider ID replaces its previous registration.

For example, registering `ollama` makes model specifiers such as `ollama/llama3.1:8b` available to agents and operations.

```
registerProvider('ollama', {
  api: 'openai-completions',
  baseUrl: 'http://localhost:11434/v1',
});
```

### `ProviderRegistration`

```
type ProviderRegistration = HttpProviderRegistration | CloudflareAIBindingRegistration;
```

Use an HTTP registration for ordinary URL-backed providers. Workers AI binding registrations are Cloudflare-specific and described below.

### `HttpProviderRegistration`

```
interface HttpProviderRegistration {
  api: Api;
  baseUrl: string;
  apiKey?: string;
  headers?: Record<string, string>;
  contextWindow?: number;
  maxTokens?: number;
  models?: Record<
    string,
    {
      contextWindow?: number;
      maxTokens?: number;
    }
  >;
}
```

| Property      | Purpose                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| api           | Wire protocol used for requests. Use a Pi-provided API slug or register one with registerApiProvider().               |
| baseUrl       | Endpoint root, such as https://api.anthropic.com/v1.                                                                  |
| apiKey        | Optional API key. When omitted, the underlying provider integration may use its normal environment-variable lookup.   |
| headers       | Default headers for outgoing requests.                                                                                |
| contextWindow | Default context-window size for models resolved through this registration. Defaults to 0, meaning unknown.            |
| maxTokens     | Default output-token limit for models resolved through this registration. Defaults to 0.                              |
| models        | Per-model contextWindow and maxTokens overrides keyed by model ID. Per-model values override provider-level defaults. |

## `registerApiProvider()`

```
const registerApiProvider: typeof import('@earendil-works/pi-ai').registerApiProvider;
```

Registers a wire-protocol handler for an API slug not shipped by Pi. Register the protocol first, then pass its `api` slug to `registerProvider()`.

Pi’s API-provider registry is module-scoped and last-write-wins. Registering the same API slug again replaces the previous handler.

## Cloudflare binding registrations

Import Workers AI binding registration types from `@flue/runtime/cloudflare`:

```
import {
  type CloudflareAIBinding,
  type CloudflareAIBindingRegistration,
  type CloudflareGatewayOptions,
} from '@flue/runtime/cloudflare';
```

`CloudflareAIBindingRegistration` registers a provider backed by an `env.AI` Workers AI binding instead of an HTTP endpoint. Its optional `gateway` setting forwards AI Gateway options to each `env.AI.run(...)` call; set `gateway: false` to omit the gateway option.

Cloudflare builds register the `cloudflare` provider ID automatically unless `app.ts` registers it first. Register that provider ID in `app.ts` when you intentionally want an authored binding registration to take precedence over the generated default. See [Cloudflare Workers AI](https://flueframework.com/docs/guide/models/#cloudflare-workers-ai-cloudflare-only) for setup and gateway examples.

## Docs Navigation

Current page: [Provider API](https://flueframework.com/docs/api/provider-api/)

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