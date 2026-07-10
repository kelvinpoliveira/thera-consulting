import { api } from '@/lib/axios';
import type { AuditLog } from '@/types';

export const auditApi = {
  listBySalesOrder: async (salesOrderId: string): Promise<AuditLog[]> => {
    const { data } = await api.get(`/audit-logs/sales-orders/${salesOrderId}`);
    return data;
  },
};
