export interface D1Result<T> {
  results: T[];
  success: boolean;
  meta?: Record<string, unknown>;
}

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T>(): Promise<T | null>;
  all<T>(): Promise<D1Result<T>>;
  run(): Promise<D1Result<never>>;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

export interface Env {
  DB: D1Database;
  CRM_API_TOKEN?: string;
  CRM_ORGANIZATION_ID?: string;
  CRM_WORKSPACE_ID?: string;
  ALLOWED_ORIGINS?: string;
}

export interface RequestContext {
  requestId: string;
  user: { subject: string };
  organizationId: string;
}
