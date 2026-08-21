import { HttpError } from './http';

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'won' | 'lost';
export interface OrganizationInput { name: string; slug?: string; }
export interface ContactInput { fullName: string; email?: string; phone?: string; title?: string; }
export interface LeadInput { companyId: string; primaryContactId: string; sourceId?: string; stageId: string; ownerUserId?: string; status: LeadStatus; priority?: number; score?: number; }

const text = (value: unknown, field: string, required = false, max = 200): string | undefined => {
  if (value === undefined || value === null || value === '') { if (required) throw new HttpError(422, `${field} is required.`); return undefined; }
  if (typeof value !== 'string' || value.trim().length === 0 || value.length > max) throw new HttpError(422, `${field} must be a non-empty string of at most ${max} characters.`);
  return value.trim();
};
const id = (value: unknown, field: string): string => { const result = text(value, field, true, 100); if (!/^[A-Za-z0-9_-]+$/.test(result as string)) throw new HttpError(422, `${field} has an invalid format.`); return result as string; };

export const parseOrganization = (body: unknown, partial = false): OrganizationInput => {
  const input = object(body); const name = text(input.name, 'name', !partial, 150); const slug = text(input.slug, 'slug', false, 100);
  if (partial && !name && !slug) throw new HttpError(422, 'At least one organization field is required.');
  return { ...(name ? { name } : {}), ...(slug ? { slug } : {}) } as OrganizationInput;
};
export const parseContact = (body: unknown, partial = false): ContactInput => {
  const input = object(body); const fullName = text(input.fullName, 'fullName', !partial, 150); const email = text(input.email, 'email', false, 254); const phone = text(input.phone, 'phone', false, 40); const title = text(input.title, 'title', false, 150);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new HttpError(422, 'email is invalid.');
  if (partial && !fullName && !email && !phone && !title) throw new HttpError(422, 'At least one contact field is required.');
  return { ...(fullName ? { fullName } : {}), ...(email ? { email } : {}), ...(phone ? { phone } : {}), ...(title ? { title } : {}) } as ContactInput;
};
export const parseLead = (body: unknown, partial = false): LeadInput => {
  const input = object(body); const companyId = input.companyId === undefined && partial ? undefined : id(input.companyId, 'companyId'); const primaryContactId = input.primaryContactId === undefined && partial ? undefined : id(input.primaryContactId, 'primaryContactId'); const sourceId = input.sourceId === undefined ? undefined : id(input.sourceId, 'sourceId'); const stageId = input.stageId === undefined && partial ? undefined : id(input.stageId, 'stageId'); const ownerUserId = input.ownerUserId === undefined ? undefined : id(input.ownerUserId, 'ownerUserId'); const status = text(input.status, 'status', !partial, 20) as LeadStatus; const priority = input.priority === undefined ? undefined : Number(input.priority); const score = input.score === undefined ? undefined : Number(input.score);
  if (status && !['new', 'contacted', 'qualified', 'won', 'lost'].includes(status)) throw new HttpError(422, 'status is invalid. Use a canonical stage code.');
  if (priority !== undefined && (!Number.isInteger(priority) || priority < 0 || priority > 100)) throw new HttpError(422, 'priority must be an integer from 0 to 100.');
  if (score !== undefined && (!Number.isInteger(score) || score < 0 || score > 100)) throw new HttpError(422, 'score must be an integer from 0 to 100.');
  if (partial && !companyId && !primaryContactId && !sourceId && !stageId && !ownerUserId && !status && priority === undefined && score === undefined) throw new HttpError(422, 'At least one lead field is required.');
  return { ...(companyId ? { companyId } : {}), ...(primaryContactId ? { primaryContactId } : {}), ...(sourceId ? { sourceId } : {}), ...(stageId ? { stageId } : {}), ...(ownerUserId ? { ownerUserId } : {}), ...(status ? { status } : {}), ...(priority !== undefined ? { priority } : {}), ...(score !== undefined ? { score } : {}) } as LeadInput;
};
const object = (body: unknown): Record<string, unknown> => { if (!body || typeof body !== 'object' || Array.isArray(body)) throw new HttpError(422, 'Request body must be a JSON object.'); return body as Record<string, unknown>; };
