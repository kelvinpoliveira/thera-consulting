import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Truck, X, ChevronDown, ChevronUp } from 'lucide-react';
import { customersApi } from '@/api/customers';
import { transportTypesApi } from '@/api/transport-types';
import { queryClient } from '@/lib/query-client';
import { Card, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/FormFields';
import { PageLoader, ErrorMessage, EmptyState } from '@/components/Feedback';
import { formatDate } from '@/lib/utils';
import type { Customer } from '@/types';

const createSchema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  document: z.string().min(1, 'Documento obrigatório'),
  email: z.string().email('E-mail inválido').optional().or(z.literal('')),
  phone: z.string().optional(),
});

type CreateValues = z.infer<typeof createSchema>;

function CustomerRow({ customer }: { customer: Customer }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedTransport, setSelectedTransport] = useState('');

  const { data: allTransports } = useQuery({
    queryKey: ['transport-types'],
    queryFn: transportTypesApi.list,
    enabled: expanded,
  });

  const { data: fullCustomer, refetch: refetchCustomer } = useQuery({
    queryKey: ['customers', customer.id],
    queryFn: () => customersApi.getById(customer.id),
    enabled: expanded,
  });

  const assignMutation = useMutation({
    mutationFn: (transportTypeId: string) =>
      customersApi.assignTransportType(customer.id, transportTypeId),
    onSuccess: () => {
      refetchCustomer();
      queryClient.invalidateQueries({ queryKey: ['customers'] });
      setSelectedTransport('');
    },
  });

  const removeMutation = useMutation({
    mutationFn: (transportTypeId: string) =>
      customersApi.removeTransportType(customer.id, transportTypeId),
    onSuccess: () => {
      refetchCustomer();
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
  });

  const assignedIds = new Set(fullCustomer?.transportTypes?.map((ct) => ct.transportTypeId) ?? []);
  const available = allTransports?.filter((t) => !assignedIds.has(t.id)) ?? [];

  return (
    <>
      <tr
        className="hover:bg-slate-50 transition-colors cursor-pointer"
        onClick={() => setExpanded((v) => !v)}
      >
        <td className="px-5 py-3.5 font-medium text-slate-900">{customer.name}</td>
        <td className="px-5 py-3.5 font-mono text-xs text-slate-600">{customer.document}</td>
        <td className="px-5 py-3.5 text-slate-600">{customer.email ?? '—'}</td>
        <td className="px-5 py-3.5 text-slate-600">{customer.phone ?? '—'}</td>
        <td className="px-5 py-3.5 text-slate-500">{formatDate(customer.createdAt)}</td>
        <td className="px-5 py-3.5 text-right">
          {expanded ? (
            <ChevronUp className="w-4 h-4 inline text-slate-400" />
          ) : (
            <ChevronDown className="w-4 h-4 inline text-slate-400" />
          )}
        </td>
      </tr>
      {expanded && (
        <tr>
          <td colSpan={6} className="px-5 pb-4 bg-slate-50/50">
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                <Truck className="w-3 h-3" />
                Transportes autorizados
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {(fullCustomer?.transportTypes ?? []).length === 0 ? (
                  <span className="text-xs text-slate-400">Nenhum transporte autorizado</span>
                ) : (
                  fullCustomer?.transportTypes?.map((ct) => (
                    <span
                      key={ct.transportTypeId}
                      className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1 text-xs text-slate-700"
                    >
                      {ct.transportType.name}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeMutation.mutate(ct.transportTypeId);
                        }}
                        className="text-slate-400 hover:text-red-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))
                )}
              </div>
              {available.length > 0 && (
                <div className="flex gap-2 items-center">
                  <select
                    value={selectedTransport}
                    onChange={(e) => setSelectedTransport(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs rounded-lg border border-slate-300 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="">Adicionar transporte...</option>
                    {available.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (selectedTransport) assignMutation.mutate(selectedTransport);
                    }}
                    disabled={!selectedTransport || assignMutation.isPending}
                  >
                    <Plus className="w-3 h-3" />
                    Adicionar
                  </Button>
                </div>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export function CustomersPage() {
  const [showForm, setShowForm] = useState(false);
  const [formError, setFormError] = useState('');

  const { data: customers, isLoading, error, refetch } = useQuery({
    queryKey: ['customers'],
    queryFn: customersApi.list,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateValues>({ resolver: zodResolver(createSchema) });

  const createMutation = useMutation({
    mutationFn: customersApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
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
          <h1 className="text-xl font-bold text-slate-900">Clientes</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            {customers?.length ?? 0} clientes cadastrados
          </p>
        </div>
        <Button onClick={() => setShowForm((v) => !v)}>
          <Plus className="w-4 h-4" />
          Novo Cliente
        </Button>
      </div>

      {/* Create Form */}
      {showForm && (
        <Card>
          <CardContent className="py-5">
            <h3 className="text-sm font-semibold text-slate-800 mb-4">Novo Cliente</h3>
            <form
              onSubmit={handleSubmit((v) => createMutation.mutate(v))}
              className="grid grid-cols-2 gap-4"
            >
              <Input
                label="Nome *"
                id="name"
                error={errors.name?.message}
                {...register('name')}
              />
              <Input
                label="Documento (CNPJ/CPF) *"
                id="document"
                error={errors.document?.message}
                {...register('document')}
              />
              <Input
                label="E-mail"
                type="email"
                id="email"
                error={errors.email?.message}
                {...register('email')}
              />
              <Input label="Telefone" id="phone" {...register('phone')} />
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
                  {createMutation.isPending ? 'Salvando...' : 'Criar Cliente'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Table */}
      {isLoading ? (
        <PageLoader />
      ) : error ? (
        <ErrorMessage message={error.message} onRetry={refetch} />
      ) : (customers?.length ?? 0) === 0 ? (
        <EmptyState
          title="Nenhum cliente cadastrado"
          action={
            <Button size="sm" onClick={() => setShowForm(true)}>
              <Plus className="w-4 h-4" /> Novo Cliente
            </Button>
          }
        />
      ) : (
        <Card>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  {['Nome', 'Documento', 'E-mail', 'Telefone', 'Cadastro', ''].map((h) => (
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
                {customers?.map((c: Customer) => (
                  <CustomerRow key={c.id} customer={c} />
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
