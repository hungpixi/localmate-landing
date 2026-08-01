import type { Actor, AutomationDependencies, CrmStage, Deal, FollowUpTask, NotificationRequest } from './types';

const dueDays: Partial<Record<CrmStage, number>> = { contacted: 1, qualified: 2, demo: 1, proposal: 2 };
const taskTitles: Partial<Record<CrmStage, string>> = {
  contacted: 'Contact lead', qualified: 'Confirm qualification', demo: 'Prepare demo', proposal: 'Send proposal',
};

const defaultBusinessDays = (from: Date, days: number) => {
  const result = new Date(from);
  let remaining = days;
  while (remaining > 0) {
    result.setUTCDate(result.getUTCDate() + 1);
    if (result.getUTCDay() !== 0 && result.getUTCDay() !== 6) remaining -= 1;
  }
  return result;
};

export class CrmAutomationError extends Error {
  constructor(public readonly code: 'NOT_FOUND' | 'INVALID_STAGE' | 'LOST_REASON_REQUIRED' | 'HANDOFF_INVALID', message: string, public readonly fields: string[] = []) {
    super(message);
    this.name = 'CrmAutomationError';
  }
}

export class CrmAutomationService {
  private readonly now: () => Date;
  private readonly id: () => string;
  private readonly addBusinessDays: (from: Date, days: number) => Date;

  constructor(private readonly deps: AutomationDependencies) {
    this.now = deps.now ?? (() => new Date());
    this.id = deps.id ?? (() => crypto.randomUUID());
    this.addBusinessDays = deps.addBusinessDays ?? defaultBusinessDays;
  }

  async changeStage(input: { dealId: string; stage: CrmStage; actor: Actor; requestId: string; lostReason?: string; scheduledDemoAt?: string | null; }): Promise<Deal> {
    const prior = await this.deps.repository.getDeal(input.dealId);
    if (!prior) throw new CrmAutomationError('NOT_FOUND', 'Deal was not found');
    const replay = await this.deps.repository.findRequestResult(input.requestId);
    if (replay) return replay as Deal;
    if (prior.stage === input.stage) { await this.deps.repository.saveRequestResult(input.requestId, prior); return prior; }
    if (input.stage === 'lost' && !input.lostReason?.trim()) throw new CrmAutomationError('LOST_REASON_REQUIRED', 'A lost reason is required', ['lostReason']);
    if (input.stage === 'won') {
      const handoffFields = this.handoffFields(prior);
      if (handoffFields.length) {
        await this.audit(prior, 'handoff.rejected', input.actor, input.requestId, this.now().toISOString(), { fields: handoffFields });
        throw new CrmAutomationError('HANDOFF_INVALID', 'Deal is not ready for handoff', handoffFields);
      }
    }
    const timestamp = this.now().toISOString();
    const updated = await this.deps.repository.updateDeal(prior.id, {
      stage: input.stage, stageChangedAt: timestamp, lastActivityAt: timestamp,
      lostReason: input.stage === 'lost' ? input.lostReason!.trim() : prior.lostReason,
    });
    await this.audit(updated, 'deal.stage_changed', input.actor, input.requestId, timestamp, { from: prior.stage, to: input.stage, lostReason: updated.lostReason });
    if (input.stage === 'demo') await this.ensureDemo(updated, input.scheduledDemoAt ?? null, input);
    if (input.stage === 'proposal') await this.upsertFollowUp(updated, 'proposal', input);
    if (input.stage === 'contacted' || input.stage === 'qualified') await this.upsertFollowUp(updated, input.stage, input);
    if (input.stage === 'won' || input.stage === 'lost') await this.completeOwnedTasks(updated, input);
    if (input.stage === 'won') await this.audit(updated, 'handoff.validated', input.actor, input.requestId, timestamp, { stage: input.stage });
    await this.deps.repository.saveRequestResult(input.requestId, updated);
    return updated;
  }

  async completeTask(input: { taskId: string; dealId: string; actor: Actor; requestId: string }): Promise<FollowUpTask> {
    const replay = await this.deps.repository.findRequestResult(input.requestId);
    if (replay) return replay as FollowUpTask;
    const task = await this.deps.repository.completeTask(input.taskId, this.now().toISOString());
    const deal = await this.deps.repository.getDeal(input.dealId);
    if (!deal) throw new CrmAutomationError('NOT_FOUND', 'Deal was not found');
    const timestamp = this.now().toISOString();
    await this.deps.repository.updateDeal(deal.id, { lastActivityAt: timestamp });
    await this.audit(deal, 'task.completed', input.actor, input.requestId, timestamp, { taskId: task.id, automationKey: task.automationKey });
    await this.deps.repository.saveRequestResult(input.requestId, task);
    return task;
  }

  async processDueNotifications(now = this.now().toISOString(), limit = 50): Promise<{ sent: number; retried: number }> {
    let sent = 0; let retried = 0;
    for (const request of await this.deps.scheduler.claimDue(now, limit)) {
      try { await this.deps.sender.send(request); await this.deps.scheduler.acknowledge(request.key); sent += 1; }
      catch { await this.deps.scheduler.retry(request.key, new Date(this.now().getTime() + 15 * 60_000).toISOString()); retried += 1; }
    }
    return { sent, retried };
  }

  private handoffFields(deal: Deal) {
    return [
      !deal.companyName?.trim() && 'companyName', !deal.contactName?.trim() && 'contactName',
      !deal.contactEmail?.trim() && !deal.contactPhone?.trim() && 'contactEmailOrPhone',
      !deal.ownerId && 'ownerId', !deal.qualifiedNeed?.trim() && 'qualifiedNeed',
    ].filter(Boolean) as string[];
  }

  private async upsertFollowUp(deal: Deal, stage: CrmStage, input: { actor: Actor; requestId: string }) {
    const days = dueDays[stage]; const title = taskTitles[stage];
    if (!days || !title) return;
    const dueAt = this.addBusinessDays(new Date(deal.stageChangedAt), days).toISOString();
    const task = await this.deps.repository.upsertTask({ dealId: deal.id, automationKey: `stage:${stage}`, title, dueAt, ownerId: deal.ownerId });
    const request: NotificationRequest = { key: `task-due:${task.id}:${task.dueAt}`, workspaceId: deal.workspaceId, dealId: deal.id, taskId: task.id, dueAt, payload: { title, ownerId: deal.ownerId } };
    await this.deps.scheduler.schedule(request);
    await this.audit(deal, 'task.upserted', input.actor, input.requestId, deal.stageChangedAt, { taskId: task.id, automationKey: task.automationKey, dueAt });
  }

  private async completeOwnedTasks(deal: Deal, input: { actor: Actor; requestId: string }) {
    for (const key of ['stage:contacted', 'stage:qualified', 'stage:demo', 'stage:proposal']) {
      const task = await this.deps.repository.findTask(deal.id, key);
      if (task?.status === 'open') {
        const completed = await this.deps.repository.completeTask(task.id, this.now().toISOString());
        await this.audit(deal, 'task.completed', input.actor, input.requestId, this.now().toISOString(), { taskId: completed.id, automationKey: key });
      }
    }
  }

  private async ensureDemo(deal: Deal, scheduledAt: string | null, input: { actor: Actor; requestId: string }) {
    if (await this.deps.repository.findDemo(deal.id)) return;
    const demo = await this.deps.repository.createDemo({ dealId: deal.id, scheduledAt, createdAt: this.now().toISOString() });
    await this.audit(deal, 'demo.created', input.actor, input.requestId, this.now().toISOString(), { demoId: demo.id, scheduledAt });
  }

  private async audit(deal: Deal, type: string, actor: Actor, requestId: string, occurredAt: string, payload: Record<string, unknown>) {
    await this.deps.repository.appendAudit({ id: this.id(), workspaceId: deal.workspaceId, dealId: deal.id, type, actorId: actor.id, source: actor.source, requestId, occurredAt, payload });
  }
}
