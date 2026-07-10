import { api } from '@/lib/axios';
import type { Item, CreateItemDto } from '@/types';

export const itemsApi = {
  list: async (): Promise<Item[]> => {
    const { data } = await api.get('/items');
    return data;
  },

  getById: async (id: string): Promise<Item> => {
    const { data } = await api.get(`/items/${id}`);
    return data;
  },

  create: async (dto: CreateItemDto): Promise<Item> => {
    const { data } = await api.post('/items', dto);
    return data;
  },
};
