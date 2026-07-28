-- Optional CRM reference catalog. No workspace or production lead data is inserted.
-- APIs may copy these rows into workspace-scoped source/stage tables.

PRAGMA foreign_keys = ON;

BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS crm_lead_source_templates (
  id TEXT PRIMARY KEY NOT NULL,
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

CREATE TABLE IF NOT EXISTS crm_pipeline_stage_templates (
  id TEXT PRIMARY KEY NOT NULL,
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  sort_order INTEGER NOT NULL UNIQUE CHECK (sort_order >= 0),
  is_closed INTEGER NOT NULL DEFAULT 0 CHECK (is_closed IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

INSERT OR IGNORE INTO crm_lead_source_templates (id, code, name)
VALUES
  ('00000000-0000-4000-8000-000000000001', 'WEBSITE', 'Website'),
  ('00000000-0000-4000-8000-000000000002', 'REFERRAL', 'Referral'),
  ('00000000-0000-4000-8000-000000000003', 'PARTNER', 'Partner'),
  ('00000000-0000-4000-8000-000000000004', 'OUTBOUND', 'Outbound'),
  ('00000000-0000-4000-8000-000000000005', 'OTHER', 'Other');

INSERT OR IGNORE INTO crm_pipeline_stage_templates (id, code, name, sort_order, is_closed)
VALUES
  ('00000000-0000-4000-8000-000000000101', 'NEW', 'New', 10, 0),
  ('00000000-0000-4000-8000-000000000102', 'CONTACTED', 'Contacted', 20, 0),
  ('00000000-0000-4000-8000-000000000103', 'QUALIFIED', 'Qualified', 30, 0),
  ('00000000-0000-4000-8000-000000000104', 'WON', 'Won', 40, 1),
  ('00000000-0000-4000-8000-000000000105', 'LOST', 'Lost', 50, 1);

COMMIT;
