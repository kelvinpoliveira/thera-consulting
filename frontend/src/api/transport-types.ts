import { api } from '@/lib/axios';
import type { TransportType, CreateTransportTypeDto, UpdateTransportTypeDto } from '@/types';

export const transportTypesApi = {
  list: async (): Promise<TransportType[]> => {
    const { data } = await api.get('/transport-types');
    return data;
  },

  getById: async (id: string): Promise<TransportType> => {
    const { data } = await api.get(`/transport-types/${id}`);
    return data;
  },

  create: async (dto: CreateTransportTypeDto): Promise<TransportType> => {
    const { data } = await api.post('/transport-types', dto);
    return data;
  },

  update: async (id: string, dto: UpdateTransportTypeDto): Promise<TransportType> => {
    const { data } = await api.patch(`/transport-types/${id}`, dto);
    return data;
  },
};
