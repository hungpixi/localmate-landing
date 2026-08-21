import { authenticate } from './auth';
import { contextFrom, errorResponse, HttpError, json, withCors } from './http';
import { D1CrmRepository } from './repository';
import { CrmService } from './service';
import type { Env } from './types';

export default { async fetch(request: Request, env: Env): Promise<Response> {
  const initial = contextFrom(request); const origin = request.headers.get('origin');
  try {
    if (request.method === 'OPTIONS') return withCors(new Response(null, { status: 204 }), origin, env.ALLOWED_ORIGINS ?? '');
    const url = new URL(request.url); if (request.method === 'GET' && url.pathname === '/api/health') return withCors(json({ data: { ok: true } }, 200, initial.requestId), origin, env.ALLOWED_ORIGINS ?? '');
    const context = authenticate(request, env, initial); const service = new CrmService(new D1CrmRepository(env.DB)); const parts = url.pathname.split('/').filter(Boolean);
    if (parts[0] !== 'api') throw new HttpError(404, 'Route not found.');
    const response = await route(parts.slice(1), request, url, service, context.organizationId, initial.requestId);
    return withCors(response, origin, env.ALLOWED_ORIGINS ?? '');
  } catch (error) { return withCors(errorResponse(error, initial.requestId), origin, env.ALLOWED_ORIGINS ?? ''); }
} };

async function route(parts: string[], request: Request, url: URL, service: CrmService, orgId: string, requestId: string): Promise<Response> {
  const limit = boundedInt(url.searchParams.get('limit'), 50, 1, 100); const offset = boundedInt(url.searchParams.get('offset'), 0, 0, 1000000);
  if (parts[0] === 'organizations' && parts.length === 1 && request.method === 'GET') return json({ data: await service.organizations(limit, offset), meta: { limit, offset } }, 200, requestId);
  if (parts[0] === 'organizations' && parts.length === 1 && request.method === 'POST') return json({ data: await service.createOrganization(await body(request)) }, 201, requestId);
  if (parts[0] === 'organizations' && parts.length === 2 && request.method === 'GET') return json({ data: await service.organization(parts[1]) }, 200, requestId);
  if (parts[0] === 'contacts' && parts.length === 1 && request.method === 'GET') return json({ data: await service.contacts(orgId, limit, offset), meta: { limit, offset } }, 200, requestId);
  if (parts[0] === 'contacts' && parts.length === 1 && request.method === 'POST') return json({ data: await service.createContact(orgId, await body(request)) }, 201, requestId);
  if (parts[0] === 'contacts' && parts.length === 2 && request.method === 'GET') return json({ data: await service.contact(orgId, parts[1]) }, 200, requestId);
  if (parts[0] === 'contacts' && parts.length === 2 && request.method === 'PATCH') return json({ data: await service.updateContact(orgId, parts[1], await body(request)) }, 200, requestId);
  if (parts[0] === 'leads' && parts.length === 1 && request.method === 'GET') return json({ data: await service.leads(orgId, limit, offset), meta: { limit, offset } }, 200, requestId);
  if (parts[0] === 'leads' && parts.length === 1 && request.method === 'POST') return json({ data: await service.createLead(orgId, await body(request)) }, 201, requestId);
  if (parts[0] === 'leads' && parts.length === 2 && request.method === 'GET') return json({ data: await service.lead(orgId, parts[1]) }, 200, requestId);
  if (parts[0] === 'leads' && parts.length === 2 && request.method === 'PATCH') return json({ data: await service.updateLead(orgId, parts[1], await body(request)) }, 200, requestId);
  throw new HttpError(405, 'Method or route not allowed.');
}
const body = async (request: Request): Promise<unknown> => { if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) throw new HttpError(415, 'Content-Type must be application/json.'); try { return await request.json(); } catch { throw new HttpError(400, 'Request body is not valid JSON.'); } };
const boundedInt = (value: string | null, fallback: number, min: number, max: number): number => { const parsed = value === null ? fallback : Number(value); if (!Number.isInteger(parsed) || parsed < min || parsed > max) throw new HttpError(400, 'Pagination parameters are invalid.'); return parsed; };
