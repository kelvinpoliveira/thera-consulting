import { api } from '@/lib/axios';
import type { Customer, CreateCustomerDto, UpdateCustomerDto } from '@/types';

export const customersApi = {
  list: async (): Promise<Customer[]> => {
    const { data } = await api.get('/customers');
    return data;
  },

  getById: async (id: string): Promise<Customer> => {
    const { data } = await api.get(`/customers/${id}`);
    return data;
  },

  create: async (dto: CreateCustomerDto): Promise<Customer> => {
    const { data } = await api.post('/customers', dto);
    return data;
  },

  update: async (id: string, dto: UpdateCustomerDto): Promise<Customer> => {
    const { data } = await api.patch(`/customers/${id}`, dto);
    return data;
  },

  assignTransportType: async (
    customerId: string,
    transportTypeId: string
  ): Promise<{ customerId: string; transportTypeId: string }> => {
    const { data } = await api.post(`/customers/${customerId}/transport-types`, {
      transportTypeId,
    });
    return data;
  },

  removeTransportType: async (
    customerId: string,
    transportTypeId: string
  ): Promise<void> => {
    await api.delete(`/customers/${customerId}/transport-types/${transportTypeId}`);
  },
};
