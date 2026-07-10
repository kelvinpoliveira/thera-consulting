import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Edit2, Check, X } from 'lucide-react';
import { transportTypesApi } from '@/api/transport-types';
import { queryClient } from '@/lib/query-client';
import { Card, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/FormFields';
import { PageLoader, ErrorMessage, EmptyState } from '@/components/Feedback';
import { formatDate } from '@/lib/utils';
import type { TransportType } from '@/types';

const schema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

function EditableRow({ transport }: { transport: TransportType }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(transport.name);
  const [description, setDescription] = useState(transport.description ?? '');

  const updateMutation = useMutation({
    mutationFn: () =>
      transportTypesApi.update(transport.id, {
        name,
        description: description || undefined,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transport-types'] });
      setEditing(false);
    },
  });

  if (editing) {
    return (
      <tr className="bg-primary-50/30">
        <td className="px-5 py-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border border-brand-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
          />
        </td>
        <td className="px-5 py-3">
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded border border-brand-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
          />
        </td>
        <td className="px-5 py-3 text-slate-500">{formatDate(transport.createdAt)}</td>
        <td className="px-5 py-3">
          <div className="flex gap-1 justify-end">
            <button
              onClick={() => updateMutation.mutate()}
              disabled={updateMutation.isPending}
              className="p-1.5 text-green-600 hover:bg-green-50 rounded"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={() => setEditing(false)}
              className="p-1.5 text-slate-400 hover:bg-slate-100 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-5 py-3.5 font-medium text-slate-900">{transport.name}</td>
      <td className="px-5 py-3.5 text-slate-600">{transport.description ?? '—'}</td>
      <td className="px-5 py-3.5 text-slate-500">{formatDate(transport.createdAt)}</td>
      <td className="px-5 py-3.5 text-right">
        <button
          onClick={() => setEditing(true)}
          className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded"
        >
          <Edit2 className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}

export function TransportTypesPage() {
  const [showForm, setShowForm] = useState(false);
  const [formError, setFormError] = useState('');

  const { data: transports, isLoading, error, refetch } = useQuery({
    queryKey: ['transport-types'],
    queryFn: transportTypesApi.list,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const createMutation = useMutation({
    mutationFn: transportTypesApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transport-types'] });
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
          <h1 className="text-xl font-bold text-slate-900">Tipos de Transporte</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            {transports?.length ?? 0} tipos cadastrados
          </p>
        </div>
        <Button onClick={() => setShowForm((v) => !v)}>
          <Plus className="w-4 h-4" />
          Novo Tipo
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardContent className="py-5">
            <h3 className="text-sm font-semibold text-slate-800 mb-4">Novo Tipo de Transporte</h3>
            <form
              onSubmit={handleSubmit((v) => createMutation.mutate(v))}
              className="grid grid-cols-2 gap-4"
            >
              <Input
                label="Nome *"
                id="ttName"
                error={errors.name?.message}
                {...register('name')}
              />
              <Input
                label="Descrição"
                id="ttDescription"
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
                  {createMutation.isPending ? 'Salvando...' : 'Criar Tipo'}
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
      ) : (transports?.length ?? 0) === 0 ? (
        <EmptyState
          title="Nenhum tipo de transporte cadastrado"
          action={
            <Button size="sm" onClick={() => setShowForm(true)}>
              <Plus className="w-4 h-4" /> Novo Tipo
            </Button>
          }
        />
      ) : (
        <Card>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  {['Nome', 'Descrição', 'Cadastro', ''].map((h) => (
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
                {transports?.map((t: TransportType) => (
                  <EditableRow key={t.id} transport={t} />
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
