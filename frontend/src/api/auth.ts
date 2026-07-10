import { api } from '@/lib/axios';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  accessToken: string;
  user: AuthUser;
}

export const authApi = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const { data } = await api.post('/auth/login', { email, password });
    return data;
  },
};