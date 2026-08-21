import { HttpError } from './http';
import type { Contact, CrmRepository, Lead, Organization } from './repository';
import { parseContact, parseLead, parseOrganization } from './validation';

export class CrmService {
  constructor(private readonly repository: CrmRepository) { }
  organizations(limit: number, offset: number) { return this.repository.organizations(limit, offset); }
  async organization(id: string) { return required(await this.repository.organization(id), 'Organization'); }
  async createOrganization(body: unknown) { const input = parseOrganization(body); return this.repository.createOrganization(`org_${crypto.randomUUID()}`, input, now()); }
  contacts(orgId: string, limit: number, offset: number) { return this.repository.contacts(orgId, limit, offset); }
  async contact(orgId: string, id: string) { return required(await this.repository.contact(orgId, id), 'Contact'); }
  async createContact(orgId: string, body: unknown) { return this.repository.createContact(orgId, `contact_${crypto.randomUUID()}`, parseContact(body), now()); }
  async updateContact(orgId: string, id: string, body: unknown) { return required(await this.repository.updateContact(orgId, id, parseContact(body, true), now()), 'Contact'); }
  leads(orgId: string, limit: number, offset: number) { return this.repository.leads(orgId, limit, offset); }
  async lead(orgId: string, id: string) { return required(await this.repository.lead(orgId, id), 'Lead'); }
  async createLead(orgId: string, body: unknown) { return this.repository.createLead(orgId, `lead_${crypto.randomUUID()}`, parseLead(body), now()); }
  async updateLead(orgId: string, id: string, body: unknown) { return required(await this.repository.updateLead(orgId, id, parseLead(body, true), now()), 'Lead'); }
}
const now = () => new Date().toISOString();
const required = <T extends Organization | Contact | Lead>(value: T | null, resource: string): T => { if (!value) throw new HttpError(404, `${resource} not found.`); return value; };
