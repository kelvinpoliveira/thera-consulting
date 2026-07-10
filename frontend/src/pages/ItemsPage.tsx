import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus } from 'lucide-react';
import { itemsApi } from '@/api/items';
import { queryClient } from '@/lib/query-client';
import { Card, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/FormFields';
import { PageLoader, ErrorMessage, EmptyState } from '@/components/Feedback';
import { formatDate, formatCurrency } from '@/lib/utils';
import type { Item } from '@/types';

const schema = z.object({
  sku: z.string().min(1, 'SKU obrigatório'),
  name: z.string().min(2, 'Nome obrigatório'),
  description: z.string().optional(),
  unitPrice: z.coerce.number().positive('Preço deve ser positivo'),
});

type FormValues = z.infer<typeof schema>;

export function ItemsPage() {
  const [showForm, setShowForm] = useState(false);
  const [formError, setFormError] = useState('');

  const { data: items, isLoading, error, refetch } = useQuery({
    queryKey: ['items'],
    queryFn: itemsApi.list,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const createMutation = useMutation({
    mutationFn: (v: FormValues) => itemsApi.create(v),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      reset();
      setShowForm(false);
      setFormError('');
    },
    onError: (err: Error) => setFormError(err.message),
  });

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Itens</h1>
          <p className="text-sm text-slate-500 mt-0.5">{items?.length ?? 0} itens cadastrados</p>
        </div>
        <Button onClick={() => setShowForm((v) => !v)}>
          <Plus className="w-4 h-4" />
          Novo Item
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardContent className="py-5">
            <h3 className="text-sm font-semibold text-slate-800 mb-4">Novo Item</h3>
            <form
              onSubmit={handleSubmit((v) => createMutation.mutate(v))}
              className="grid grid-cols-2 gap-4"
            >
              <Input label="SKU *" id="sku" error={errors.sku?.message} {...register('sku')} />
              <Input
                label="Nome *"
                id="name"
                error={errors.name?.message}
                {...register('name')}
              />
              <Input
                label="Preço unitário (R$) *"
                type="number"
                step="0.01"
                id="unitPrice"
                error={errors.unitPrice?.message}
                {...register('unitPrice')}
              />
              <Input
                label="Descrição"
                id="description"
                {...register('description')}
              />
              {formError && (
                <div className="col-span-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {formError}
                </div>
              )}
              <div className="col-span-2 flex gap-3 justify-end">
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={createMutation.isPending}>
                  {createMutation.isPending ? 'Salvando...' : 'Criar Item'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {isLoading ? (
        <PageLoader />
      ) : error ? (
        <ErrorMessage message={error.message} onRetry={refetch} />
      ) : (items?.length ?? 0) === 0 ? (
        <EmptyState
          title="Nenhum item cadastrado"
          action={
            <Button size="sm" onClick={() => setShowForm(true)}>
              <Plus className="w-4 h-4" /> Novo Item
            </Button>
          }
        />
      ) : (
        <Card>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  {['SKU', 'Nome', 'Descrição', 'Preço Unitário', 'Cadastro'].map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {items?.map((item: Item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-5 py-3.5 font-mono text-xs text-slate-600">{item.sku}</td>
                    <td className="px-5 py-3.5 font-medium text-slate-900">{item.name}</td>
                    <td className="px-5 py-3.5 text-slate-500">{item.description ?? '—'}</td>
                    <td className="px-5 py-3.5 font-medium text-slate-900">
                      {formatCurrency(Number(item.unitPrice))}
                    </td>
                    <td className="px-5 py-3.5 text-slate-500">{formatDate(item.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
