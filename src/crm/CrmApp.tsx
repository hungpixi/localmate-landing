import { useCallback, useEffect, useMemo, useState } from 'react';
import { AlertCircle, Bell, ChevronDown, ChevronLeft, ChevronRight, PlusCircle, LayoutDashboard, Menu, Phone, RefreshCw, Search, Settings2, Users, X } from 'lucide-react';
import { createLead, Lead, LeadCreateInput, LeadStage, listLeads, updateLeadStage } from './crmApi';
import './crm.css';

const stageLabels: Record<LeadStage, string> = { new: 'New', contacted: 'Contacted', qualified: 'Qualified', won: 'Won', lost: 'Lost' };
const stageOptions: Array<LeadStage | 'all'> = ['all', 'new', 'contacted', 'qualified', 'won', 'lost'];

function formatDate(value?: string) {
  if (!value) return 'No follow-up set';
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(value));
}

export function CrmApp() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [stage, setStage] = useState<LeadStage | 'all'>('all');
  const [page, setPage] = useState(1);
  const [showCreate, setShowCreate] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const pageSize = 25;

  const loadLeads = useCallback(async () => {
    setLoading(true); setError('');
    try {
      const result = await listLeads({ search, stage, page, pageSize });
      setLeads(result.items); setTotal(result.total);
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not load leads.'); }
    finally { setLoading(false); }
  }, [page, search, stage]);

  useEffect(() => { void loadLeads(); }, [loadLeads]);

  const counts = useMemo(() => stageOptions.slice(1).reduce((acc, key) => ({ ...acc, [key]: leads.filter((lead) => lead.stage === key).length }), {} as Record<string, number>), [leads]);
  const pages = Math.max(1, Math.ceil(total / pageSize));

  const handleStageChange = async (lead: Lead, nextStage: LeadStage) => {
    try { const updated = await updateLeadStage(lead.id, nextStage); setLeads((current) => current.map((item) => item.id === updated.id ? updated : item)); }
    catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not update this lead.'); }
  };

  return <div className="crm-app">
    <aside className={`crm-sidebar ${mobileNav ? 'is-open' : ''}`}>
      <div className="crm-brand"><img src="/logo.png" alt="LocalMate" /><span>CRM</span><button className="crm-icon-button crm-mobile-close" onClick={() => setMobileNav(false)} aria-label="Close navigation"><X size={18} /></button></div>
      <nav aria-label="CRM navigation">
        <p className="crm-nav-label">Workspace</p>
        <a className="crm-nav-item is-active" href="#overview"><LayoutDashboard size={17} />Overview</a>
        <a className="crm-nav-item" href="#leads"><Users size={17} />Leads <span className="crm-nav-count">{total || '—'}</span></a>
        <a className="crm-nav-item" href="#follow-ups"><Phone size={17} />Follow-ups <span className="crm-nav-count">{counts.qualified || 0}</span></a>
        <p className="crm-nav-label crm-nav-label-spaced">Manage</p>
        <a className="crm-nav-item" href="#settings"><Settings2 size={17} />Workspace settings</a>
      </nav>
      <div className="crm-sidebar-footer"><div className="crm-avatar">LM</div><div><strong>LocalMate team</strong><small>Operations workspace</small></div><ChevronDown size={15} /></div>
    </aside>
    {mobileNav && <button className="crm-scrim" aria-label="Close navigation" onClick={() => setMobileNav(false)} />}
    <main className="crm-main">
      <header className="crm-topbar"><button className="crm-icon-button crm-mobile-menu" onClick={() => setMobileNav(true)} aria-label="Open navigation"><Menu size={20} /></button><div className="crm-breadcrumb"><span>Workspace</span><b>/</b><strong>Overview</strong></div><div className="crm-topbar-actions"><button className="crm-icon-button" aria-label="Notifications"><Bell size={18} /><i /></button><div className="crm-avatar crm-avatar-small">TN</div><span className="crm-user-name">Thảo Nguyên</span><ChevronDown size={15} /></div></header>
      <div className="crm-content" id="overview">
        <section className="crm-page-heading"><div><p className="crm-kicker">Tuesday, July 28, 2026</p><h1>Good morning, Thảo.</h1><p className="crm-heading-copy">Keep the next conversation moving.</p></div><button className="crm-button crm-button-primary" onClick={() => setShowCreate(true)}><PlusCircle size={17} />New lead</button></section>
        <section className="crm-metric-grid" aria-label="Lead summary"><Metric label="Total leads" value={total} detail="All active records" /><Metric label="New this week" value={counts.new || 0} detail="Needs first response" tone="blue" /><Metric label="Qualified" value={counts.qualified || 0} detail="Ready for proposal" tone="green" /><Metric label="Follow-up due" value={leads.filter((lead) => lead.nextActionAt && new Date(lead.nextActionAt) <= new Date()).length} detail="From current page" tone="orange" /></section>
        <section className="crm-workspace" id="leads"><div className="crm-section-heading"><div><h2>Lead pipeline</h2><p>Every enquiry, with one clear next step.</p></div><button className="crm-button crm-button-quiet" onClick={() => void loadLeads()} disabled={loading}><RefreshCw size={16} className={loading ? 'crm-spin' : ''} />Refresh</button></div>
          <div className="crm-toolbar"><label className="crm-search"><Search size={17} /><input value={search} onChange={(event) => { setPage(1); setSearch(event.target.value); }} placeholder="Search leads or businesses" /></label><label className="crm-select"><span>Stage</span><select value={stage} onChange={(event) => { setPage(1); setStage(event.target.value as LeadStage | 'all'); }}>{stageOptions.map((option) => <option key={option} value={option}>{option === 'all' ? 'All stages' : stageLabels[option as LeadStage]}</option>)}</select><ChevronDown size={15} /></label></div>
          {error && <div className="crm-alert" role="alert"><AlertCircle size={18} /><span>{error}</span><button onClick={() => void loadLeads()}>Try again</button></div>}
          <div className="crm-table-wrap">{loading ? <LeadSkeleton /> : leads.length === 0 ? <EmptyLeads onCreate={() => setShowCreate(true)} hasFilters={Boolean(search || stage !== 'all')} /> : <table className="crm-table"><thead><tr><th>Lead</th><th>Stage</th><th>Source</th><th>Next action</th><th><span className="sr-only">Actions</span></th></tr></thead><tbody>{leads.map((lead) => <tr key={lead.id}><td><div className="crm-lead-cell"><div className="crm-lead-avatar">{lead.name.slice(0, 1).toUpperCase()}</div><div><strong>{lead.name}</strong><span>{lead.businessName || lead.category || 'Business details pending'}</span></div></div></td><td><select className={`crm-stage crm-stage-${lead.stage}`} value={lead.stage} onChange={(event) => void handleStageChange(lead, event.target.value as LeadStage)}>{stageOptions.slice(1).map((option) => <option key={option} value={option}>{stageLabels[option as LeadStage]}</option>)}</select></td><td><span className="crm-source">{lead.source || 'Direct'}</span></td><td><span className={lead.nextActionAt && new Date(lead.nextActionAt) <= new Date() ? 'crm-due' : ''}>{formatDate(lead.nextActionAt)}</span></td><td><button className="crm-row-action" aria-label={`Open ${lead.name}`}>Open <ChevronRight size={15} /></button></td></tr>)}</tbody></table>}</div>
          {!loading && leads.length > 0 && <div className="crm-pagination"><span>Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, total)} of {total}</span><div><button className="crm-icon-button" disabled={page === 1} onClick={() => setPage((current) => current - 1)} aria-label="Previous page"><ChevronLeft size={17} /></button><span>Page {page} of {pages}</span><button className="crm-icon-button" disabled={page >= pages} onClick={() => setPage((current) => current + 1)} aria-label="Next page"><ChevronRight size={17} /></button></div></div>}
        </section>
        <section className="crm-next-step" id="follow-ups"><div><p className="crm-kicker">Operations note</p><h2>Make the next call count.</h2><p>Use stages to keep ownership clear. A lead is only done when the customer knows what happens next.</p></div><div className="crm-next-step-rule"><span>Suggested rhythm</span><strong>New → Contacted → Qualified</strong><small>Move one stage after every meaningful interaction.</small></div></section>
      </div>
    </main>
    {showCreate && <CreateLeadDialog onClose={() => setShowCreate(false)} onCreated={(lead) => { setLeads((current) => [lead, ...current]); setTotal((current) => current + 1); setShowCreate(false); }} />}
  </div>;
}

function Metric({ label, value, detail, tone = '' }: { label: string; value: number; detail: string; tone?: string }) { return <div className={`crm-metric ${tone}`}><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>; }
function LeadSkeleton() { return <div className="crm-skeleton-list">{[1, 2, 3, 4].map((item) => <div className="crm-skeleton-row" key={item}><i /><span /><span /><span /></div>)}</div>; }
function EmptyLeads({ onCreate, hasFilters }: { onCreate: () => void; hasFilters: boolean }) { return <div className="crm-empty"><div className="crm-empty-icon"><Users size={21} /></div><h3>{hasFilters ? 'No leads match these filters' : 'Your pipeline is ready'}</h3><p>{hasFilters ? 'Try a different search or stage.' : 'Create your first lead to start tracking conversations in one place.'}</p>{!hasFilters && <button className="crm-button crm-button-primary" onClick={onCreate}><PlusCircle size={17} />Create first lead</button>}</div>; }
function CreateLeadDialog({ onClose, onCreated }: { onClose: () => void; onCreated: (lead: Lead) => void }) {
  const [form, setForm] = useState<LeadCreateInput>({ name: '', businessName: '', phone: '', category: '', source: 'Website' }); const [saving, setSaving] = useState(false); const [error, setError] = useState('');
  const update = (key: keyof LeadCreateInput, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const submit = async (event: React.FormEvent) => { event.preventDefault(); setSaving(true); setError(''); try { onCreated(await createLead(form)); } catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not create this lead.'); } finally { setSaving(false); } };
  return <div className="crm-dialog-backdrop" role="presentation"><div className="crm-dialog" role="dialog" aria-modal="true" aria-labelledby="new-lead-title"><div className="crm-dialog-heading"><div><p className="crm-kicker">Pipeline intake</p><h2 id="new-lead-title">Create a lead</h2></div><button className="crm-icon-button" onClick={onClose} aria-label="Close dialog"><X size={18} /></button></div><form onSubmit={submit}><div className="crm-form-grid"><label>Name<input required value={form.name} onChange={(event) => update('name', event.target.value)} /></label><label>Business name<input required value={form.businessName} onChange={(event) => update('businessName', event.target.value)} /></label><label>Phone<input required type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} /></label><label>Category<input value={form.category} onChange={(event) => update('category', event.target.value)} placeholder="e.g. home services" /></label></div>{error && <div className="crm-alert" role="alert"><AlertCircle size={17} />{error}</div>}<div className="crm-dialog-actions"><button type="button" className="crm-button crm-button-quiet" onClick={onClose}>Cancel</button><button type="submit" className="crm-button crm-button-primary" disabled={saving}>{saving ? 'Creating…' : 'Create lead'}</button></div></form></div></div>;
}
