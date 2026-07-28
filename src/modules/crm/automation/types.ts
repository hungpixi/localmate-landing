export type CrmStage = 'new' | 'contacted' | 'qualified' | 'demo' | 'proposal' | 'won' | 'lost';

export interface Deal {
  id: string;
  workspaceId: string;
  stage: CrmStage;
  stageChangedAt: string;
  lastActivityAt: string | null;
  ownerId: string | null;
  companyName: string | null;
  contactName: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  qualifiedNeed: string | null;
  lostReason: string | null;
  demoApprovedAt: string | null;
}

export interface FollowUpTask {
  id: string;
  dealId: string;
  automationKey: string;
  title: string;
  dueAt: string;
  ownerId: string | null;
  status: 'open' | 'completed';
}

export interface Demo {
  id: string;
  dealId: string;
  scheduledAt: string | null;
  createdAt: string;
}

export interface AuditEvent {
  id: string;
  workspaceId: string;
  dealId: string;
  type: string;
  actorId: string | null;
  source: 'user' | 'system' | 'cron';
  requestId: string;
  occurredAt: string;
  payload: Record<string, unknown>;
}

export interface NotificationRequest {
  key: string;
  workspaceId: string;
  dealId: string;
  taskId: string;
  dueAt: string;
  payload: Record<string, unknown>;
}

export interface AutomationRepository {
  getDeal(id: string): Promise<Deal | null>;
  updateDeal(id: string, patch: Partial<Deal>): Promise<Deal>;
  findTask(dealId: string, automationKey: string): Promise<FollowUpTask | null>;
  upsertTask(input: Omit<FollowUpTask, 'id' | 'status'>): Promise<FollowUpTask>;
  completeTask(id: string, completedAt: string): Promise<FollowUpTask>;
  findDemo(dealId: string): Promise<Demo | null>;
  createDemo(input: Omit<Demo, 'id'>): Promise<Demo>;
  appendAudit(event: AuditEvent): Promise<AuditEvent>;
  findRequestResult(requestId: string): Promise<unknown | null>;
  saveRequestResult(requestId: string, result: unknown): Promise<void>;
}

export interface NotificationScheduler {
  schedule(request: NotificationRequest): Promise<void>;
  claimDue(now: string, limit: number): Promise<NotificationRequest[]>;
  acknowledge(key: string): Promise<void>;
  retry(key: string, nextAttemptAt: string): Promise<void>;
}

export interface NotificationSender {
  send(request: NotificationRequest): Promise<void>;
}

export interface AutomationDependencies {
  repository: AutomationRepository;
  scheduler: NotificationScheduler;
  sender: NotificationSender;
  now?: () => Date;
  id?: () => string;
  addBusinessDays?: (from: Date, days: number) => Date;
}

export interface Actor {
  id: string | null;
  source: AuditEvent['source'];
}
