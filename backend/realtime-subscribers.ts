import { db, ws, json, error } from '@appdeploy/sdk';
const TABLE = 'entity_subscriptions';
type Sub = { id: string; entity_type: string; entity_id: string; connection_id: string; created_at: number };
async function all(): Promise<Sub[]> { const { items } = await db.list(TABLE, { limit: 1000 }); return items as Sub[]; }
export async function removeSubscriptionsByConnection(connectionId: string) { const ids = (await all()).filter(x => x.connection_id === connectionId).map(x => x.id); if (ids.length) await db.delete(TABLE, ids); }
export async function notifySubscribers(entityType: string, entityId: string, payload: unknown) { const ids = [...new Set((await all()).filter(x => x.entity_type === entityType && x.entity_id === entityId).map(x => x.connection_id))]; if (ids.length) await ws.send(ids, { v: 1, type: 'entity.update', payload: { entity_type: entityType, entity_id: entityId, data: payload } }); }
export const realtimeSubscriptionRoutes = {
  'POST /api/subscriptions': [async ({ body }: { body: unknown }) => { const b = (body || {}) as Record<string,string>; if (!b.entity_type || !b.entity_id || !b.connection_id) return error('Eksik abonelik bilgisi', 400); const existing = (await all()).some(x => x.entity_type === b.entity_type && x.entity_id === b.entity_id && x.connection_id === b.connection_id); if (!existing) await db.add(TABLE, [{ entity_type: b.entity_type, entity_id: b.entity_id, connection_id: b.connection_id, created_at: Date.now() }]); return json({ ok: true }); }],
  'POST /api/subscriptions/remove': [async ({ body }: { body: unknown }) => { const b = (body || {}) as Record<string,string>; const ids = (await all()).filter(x => x.entity_type === b.entity_type && x.entity_id === b.entity_id && x.connection_id === b.connection_id).map(x => x.id); if (ids.length) await db.delete(TABLE, ids); return json({ ok: true }); }]
};
