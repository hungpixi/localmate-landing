-- LocalMate CRM initial schema
-- IDs are application-generated UUID strings. No production data is seeded here.

PRAGMA foreign_keys = ON;

BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS workspaces (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  deleted_at TEXT
);

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY NOT NULL,
  email TEXT NOT NULL COLLATE NOCASE UNIQUE,
  display_name TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  deleted_at TEXT
);

CREATE TABLE IF NOT EXISTS workspace_members (
  id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'MEMBER' CHECK (role IN ('OWNER', 'ADMIN', 'MEMBER', 'VIEWER')),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  UNIQUE (workspace_id, user_id)
);

CREATE TABLE IF NOT EXISTS crm_companies (
  id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  legal_name TEXT NOT NULL,
  trade_name TEXT,
  tax_code TEXT,
  city_country TEXT,
  industry TEXT,
  website TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  deleted_at TEXT,
  UNIQUE (id, workspace_id)
);

CREATE TABLE IF NOT EXISTS crm_contacts (
  id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  company_id TEXT,
  full_name TEXT NOT NULL,
  email TEXT COLLATE NOCASE,
  phone TEXT,
  job_title TEXT,
  preferred_channel TEXT CHECK (preferred_channel IN ('PHONE', 'EMAIL', 'ZALO', 'WHATSAPP', 'OTHER')),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  deleted_at TEXT,
  UNIQUE (id, workspace_id),
  FOREIGN KEY (company_id, workspace_id) REFERENCES crm_companies(id, workspace_id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS crm_lead_sources (
  id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  code TEXT NOT NULL,
  name TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  UNIQUE (workspace_id, code),
  UNIQUE (id, workspace_id)
);

CREATE TABLE IF NOT EXISTS crm_pipeline_stages (
  id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  code TEXT NOT NULL,
  name TEXT NOT NULL,
  sort_order INTEGER NOT NULL CHECK (sort_order >= 0),
  is_closed INTEGER NOT NULL DEFAULT 0 CHECK (is_closed IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  UNIQUE (workspace_id, code),
  UNIQUE (workspace_id, sort_order),
  UNIQUE (id, workspace_id)
);

CREATE TABLE IF NOT EXISTS crm_leads (
  id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  company_id TEXT,
  primary_contact_id TEXT,
  source_id TEXT,
  stage_id TEXT,
  owner_user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW', 'CONTACTED', 'QUALIFIED', 'DISQUALIFIED', 'CONVERTED', 'LOST')),
  priority TEXT NOT NULL DEFAULT 'NORMAL' CHECK (priority IN ('LOW', 'NORMAL', 'HIGH', 'URGENT')),
  score INTEGER CHECK (score IS NULL OR (score >= 0 AND score <= 100)),
  business_category TEXT,
  priority_goal TEXT,
  package_interest TEXT,
  captured_city_country TEXT,
  first_touch_at TEXT,
  last_contacted_at TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer TEXT,
  source_ip TEXT,
  user_agent TEXT,
  note TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  deleted_at TEXT,
  UNIQUE (id, workspace_id),
  FOREIGN KEY (company_id, workspace_id) REFERENCES crm_companies(id, workspace_id) ON DELETE SET NULL,
  FOREIGN KEY (primary_contact_id, workspace_id) REFERENCES crm_contacts(id, workspace_id) ON DELETE SET NULL,
  FOREIGN KEY (source_id, workspace_id) REFERENCES crm_lead_sources(id, workspace_id) ON DELETE SET NULL,
  FOREIGN KEY (stage_id, workspace_id) REFERENCES crm_pipeline_stages(id, workspace_id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS crm_opportunities (
  id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  lead_id TEXT,
  company_id TEXT,
  primary_contact_id TEXT,
  stage_id TEXT,
  owner_user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  amount_vnd INTEGER CHECK (amount_vnd IS NULL OR amount_vnd >= 0),
  probability_percent INTEGER CHECK (probability_percent IS NULL OR (probability_percent >= 0 AND probability_percent <= 100)),
  expected_close_date TEXT,
  status TEXT NOT NULL DEFAULT 'OPEN' CHECK (status IN ('OPEN', 'WON', 'LOST')),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  deleted_at TEXT,
  FOREIGN KEY (lead_id, workspace_id) REFERENCES crm_leads(id, workspace_id) ON DELETE SET NULL,
  FOREIGN KEY (company_id, workspace_id) REFERENCES crm_companies(id, workspace_id) ON DELETE SET NULL,
  FOREIGN KEY (primary_contact_id, workspace_id) REFERENCES crm_contacts(id, workspace_id) ON DELETE SET NULL,
  FOREIGN KEY (stage_id, workspace_id) REFERENCES crm_pipeline_stages(id, workspace_id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS crm_activities (
  id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  lead_id TEXT,
  company_id TEXT,
  contact_id TEXT,
  assigned_user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
  activity_type TEXT NOT NULL CHECK (activity_type IN ('CALL', 'EMAIL', 'MEETING', 'TASK', 'NOTE', 'OTHER')),
  subject TEXT NOT NULL,
  body TEXT,
  due_at TEXT,
  completed_at TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  CHECK (lead_id IS NOT NULL OR company_id IS NOT NULL OR contact_id IS NOT NULL),
  FOREIGN KEY (lead_id, workspace_id) REFERENCES crm_leads(id, workspace_id) ON DELETE CASCADE,
  FOREIGN KEY (company_id, workspace_id) REFERENCES crm_companies(id, workspace_id) ON DELETE CASCADE,
  FOREIGN KEY (contact_id, workspace_id) REFERENCES crm_contacts(id, workspace_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS crm_notes (
  id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  lead_id TEXT,
  company_id TEXT,
  contact_id TEXT,
  author_user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
  body TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  CHECK (lead_id IS NOT NULL OR company_id IS NOT NULL OR contact_id IS NOT NULL),
  FOREIGN KEY (lead_id, workspace_id) REFERENCES crm_leads(id, workspace_id) ON DELETE CASCADE,
  FOREIGN KEY (company_id, workspace_id) REFERENCES crm_companies(id, workspace_id) ON DELETE CASCADE,
  FOREIGN KEY (contact_id, workspace_id) REFERENCES crm_contacts(id, workspace_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS crm_tags (
  id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  color TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  UNIQUE (workspace_id, name),
  UNIQUE (id, workspace_id)
);

CREATE TABLE IF NOT EXISTS crm_lead_tags (
  workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  lead_id TEXT NOT NULL REFERENCES crm_leads(id) ON DELETE CASCADE,
  tag_id TEXT NOT NULL REFERENCES crm_tags(id) ON DELETE CASCADE,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  PRIMARY KEY (lead_id, tag_id),
  FOREIGN KEY (lead_id, workspace_id) REFERENCES crm_leads(id, workspace_id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id, workspace_id) REFERENCES crm_tags(id, workspace_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS crm_lead_events (
  id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  lead_id TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('CAPTURED', 'UPDATED', 'STATUS_CHANGED', 'STAGE_CHANGED', 'ASSIGNED', 'CONTACTED', 'CONVERTED', 'DISQUALIFIED', 'REOPENED')),
  from_status TEXT,
  to_status TEXT,
  from_stage_id TEXT,
  to_stage_id TEXT,
  actor_user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
  occurred_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  metadata TEXT,
  FOREIGN KEY (lead_id, workspace_id) REFERENCES crm_leads(id, workspace_id) ON DELETE CASCADE,
  FOREIGN KEY (from_stage_id, workspace_id) REFERENCES crm_pipeline_stages(id, workspace_id) ON DELETE SET NULL,
  FOREIGN KEY (to_stage_id, workspace_id) REFERENCES crm_pipeline_stages(id, workspace_id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_workspace_members_user ON workspace_members (user_id, workspace_id);
CREATE INDEX IF NOT EXISTS idx_crm_companies_workspace ON crm_companies (workspace_id, deleted_at);
CREATE INDEX IF NOT EXISTS idx_crm_companies_tax_code ON crm_companies (workspace_id, tax_code);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_workspace ON crm_contacts (workspace_id, deleted_at);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_company ON crm_contacts (company_id);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_phone ON crm_contacts (workspace_id, phone);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_email ON crm_contacts (workspace_id, email);
CREATE INDEX IF NOT EXISTS idx_crm_sources_workspace ON crm_lead_sources (workspace_id, code);
CREATE INDEX IF NOT EXISTS idx_crm_stages_workspace_order ON crm_pipeline_stages (workspace_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_crm_leads_workspace_status ON crm_leads (workspace_id, status, deleted_at);
CREATE INDEX IF NOT EXISTS idx_crm_leads_workspace_stage ON crm_leads (workspace_id, stage_id, deleted_at);
CREATE INDEX IF NOT EXISTS idx_crm_leads_contact ON crm_leads (primary_contact_id);
CREATE INDEX IF NOT EXISTS idx_crm_leads_company ON crm_leads (company_id);
CREATE INDEX IF NOT EXISTS idx_crm_leads_owner ON crm_leads (workspace_id, owner_user_id, status);
CREATE INDEX IF NOT EXISTS idx_crm_leads_created ON crm_leads (workspace_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_crm_opportunities_workspace_status ON crm_opportunities (workspace_id, status, deleted_at);
CREATE INDEX IF NOT EXISTS idx_crm_opportunities_lead ON crm_opportunities (lead_id);
CREATE INDEX IF NOT EXISTS idx_crm_opportunities_stage ON crm_opportunities (workspace_id, stage_id, status);
CREATE INDEX IF NOT EXISTS idx_crm_activities_workspace_due ON crm_activities (workspace_id, due_at, completed_at);
CREATE INDEX IF NOT EXISTS idx_crm_activities_lead ON crm_activities (lead_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_crm_activities_assignee ON crm_activities (workspace_id, assigned_user_id, completed_at);
CREATE INDEX IF NOT EXISTS idx_crm_notes_lead ON crm_notes (lead_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_crm_lead_events_lead ON crm_lead_events (lead_id, occurred_at DESC);
CREATE INDEX IF NOT EXISTS idx_crm_lead_events_workspace ON crm_lead_events (workspace_id, event_type, occurred_at DESC);

COMMIT;
