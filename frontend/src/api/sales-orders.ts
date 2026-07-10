import { api } from '@/lib/axios';
import type {
  SalesOrder,
  CreateSalesOrderDto,
  FilterSalesOrdersParams,
  OrderStatus,
} from '@/types';

export const salesOrdersApi = {
  list: async (params?: FilterSalesOrdersParams): Promise<SalesOrder[]> => {
    const { data } = await api.get('/sales-orders', { params });
    return data;
  },

  getById: async (id: string): Promise<SalesOrder> => {
    const { data } = await api.get(`/sales-orders/${id}`);
    return data;
  },

  create: async (dto: CreateSalesOrderDto): Promise<SalesOrder> => {
    const { data } = await api.post('/sales-orders', dto);
    return data;
  },

  updateStatus: async (id: string, status: OrderStatus): Promise<SalesOrder> => {
    const { data } = await api.patch(`/sales-orders/${id}/status`, { status });
    return data;
  },

  updateTransportType: async (id: string, transportTypeId: string): Promise<SalesOrder> => {
    const { data } = await api.patch(`/sales-orders/${id}/transport`, { transportTypeId });
    return data;
  },
};
