export type LeadStage = 'new' | 'contacted' | 'qualified' | 'won' | 'lost';

export interface Lead {
  id: string;
  name: string;
  businessName?: string;
  phone?: string;
  email?: string;
  category?: string;
  location?: string;
  stage: LeadStage;
  source?: string;
  ownerName?: string;
  nextActionAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LeadListResponse {
  items: Lead[];
  total: number;
  page: number;
  pageSize: number;
}

export interface LeadListParams {
  search?: string;
  stage?: LeadStage | 'all';
  page?: number;
  pageSize?: number;
}

export interface LeadCreateInput {
  name: string;
  businessName: string;
  phone: string;
  category: string;
  source: string;
}

const runtimeEnv = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env;
const baseUrl = (runtimeEnv?.VITE_LOCALMATE_API_BASE_URL || '').replace(/\/$/, '');

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function listLeads(params: LeadListParams = {}) {
  const query = new URLSearchParams();
  if (params.search) query.set('search', params.search);
  if (params.stage && params.stage !== 'all') query.set('stage', params.stage);
  query.set('page', String(params.page || 1));
  query.set('pageSize', String(params.pageSize || 25));
  return request<LeadListResponse>(`/api/crm/leads?${query.toString()}`);
}

export function createLead(input: LeadCreateInput) {
  return request<Lead>('/api/crm/leads', { method: 'POST', body: JSON.stringify(input) });
}

export function updateLeadStage(id: string, stage: LeadStage) {
  return request<Lead>(`/api/crm/leads/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    body: JSON.stringify({ stage }),
  });
}
