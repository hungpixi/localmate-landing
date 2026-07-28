import { HttpError } from './http';
import type { Env, RequestContext } from './types';

export const authenticate = (request: Request, env: Env, context: RequestContext): RequestContext => {
  const expected = env.CRM_API_TOKEN;
  if (!expected) throw new HttpError(503, 'CRM API authentication is not configured.');
  if (!env.CRM_WORKSPACE_ID) throw new HttpError(503, 'CRM workspace scope is not configured.');
  const authorization = request.headers.get('authorization') || '';
  const [scheme, token] = authorization.split(' ');
  if (scheme?.toLowerCase() !== 'bearer' || !token || !constantTimeEqual(token, expected)) {
    throw new HttpError(401, 'A valid bearer token is required.');
  }
  return { ...context, organizationId: env.CRM_WORKSPACE_ID };
};

const constantTimeEqual = (left: string, right: string): boolean => {
  const encoder = new TextEncoder();
  const a = encoder.encode(left); const b = encoder.encode(right);
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i += 1) result |= a[i] ^ b[i];
  return result === 0;
};
