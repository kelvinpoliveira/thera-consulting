import { api } from '@/lib/axios';
import type { Schedule, CreateScheduleDto } from '@/types';

export const schedulingApi = {
  get: async (salesOrderId: string): Promise<Schedule> => {
    const { data } = await api.get(`/sales-orders/${salesOrderId}/schedule`);
    return data;
  },

  create: async (salesOrderId: string, dto: CreateScheduleDto): Promise<Schedule> => {
    const { data } = await api.post(`/sales-orders/${salesOrderId}/schedule`, dto);
    return data;
  },

  update: async (salesOrderId: string, dto: CreateScheduleDto): Promise<Schedule> => {
    const { data } = await api.put(`/sales-orders/${salesOrderId}/schedule`, dto);
    return data;
  },

  confirm: async (salesOrderId: string): Promise<Schedule> => {
    const { data } = await api.patch(`/sales-orders/${salesOrderId}/schedule/confirm`);
    return data;
  },
};
