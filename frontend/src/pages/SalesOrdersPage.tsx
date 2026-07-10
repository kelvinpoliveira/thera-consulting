import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { Plus, Search, Filter } from 'lucide-react';
import { salesOrdersApi } from '@/api/sales-orders';
import { customersApi } from '@/api/customers';
import { StatusBadge } from '@/components/StatusBadge';
import { Button } from '@/components/Button';
import { Card, CardContent } from '@/components/Card';
import { PageLoader, ErrorMessage, EmptyState } from '@/components/Feedback';
import { formatDate, formatCurrency, getOrderTotal } from '@/lib/utils';
import { ORDER_STATUS_SEQUENCE, ORDER_STATUS_LABELS } from '@/types';
import type { OrderStatus, SalesOrder } from '@/types';

export function SalesOrdersPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');

  const rawStatus = searchParams.get('status') ?? '';
  const statusFilter = ORDER_STATUS_SEQUENCE.includes(rawStatus as OrderStatus)
    ? (rawStatus as OrderStatus)
    : ('' as OrderStatus | '');
  const customerFilter = searchParams.get('customerId') || '';
  const dateFilter = searchParams.get('date') || '';

  const { data: orders, isLoading, error, refetch } = useQuery({
    queryKey: ['sales-orders', statusFilter, customerFilter, dateFilter],
    queryFn: () =>
      salesOrdersApi.list({
        status: statusFilter || undefined,
        customerId: customerFilter || undefined,
        date: dateFilter || undefined,
      }),
  });

  const { data: customers } = useQuery({
    queryKey: ['customers'],
    queryFn: customersApi.list,
  });

  const filtered = (orders ?? []).filter((o: SalesOrder) =>
    search === '' ||
    o.customer.name.toLowerCase().includes(search.toLowerCase()) ||
    o.id.toLowerCase().includes(search.toLowerCase())
  );

  function setFilter(key: string, value: string) {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Ordens de Venda</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            {orders?.length ?? 0} ordens no total
          </p>
        </div>
        <Link to="/sales-orders/new">
          <Button>
            <Plus className="w-4 h-4" />
            Nova OV
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="py-3">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative flex-1 min-w-48">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por cliente ou ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => setFilter('status', e.target.value)}
              className="text-sm rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="">Todos os status</option>
              {ORDER_STATUS_SEQUENCE.map((s) => (
                <option key={s} value={s}>
                  {ORDER_STATUS_LABELS[s]}
                </option>
              ))}
            </select>
            <select
              value={customerFilter}
              onChange={(e) => setFilter('customerId', e.target.value)}
              className="text-sm rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="">Todos os clientes</option>
              {customers?.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setFilter('date', e.target.value)}
              className="text-sm rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-700"
            />
            {(statusFilter || customerFilter || dateFilter || search) && (
              <button
                onClick={() => {
                  setSearch('');
                  setSearchParams(new URLSearchParams());
                }}
                className="text-xs text-slate-500 hover:text-slate-700 underline"
              >
                Limpar filtros
              </button>
            )}
          </div>
        </CardContent>
      </Card>

      {isLoading ? (
        <PageLoader />
      ) : error ? (
        <ErrorMessage message={error.message} onRetry={refetch} />
      ) : filtered.length === 0 ? (
        <EmptyState
          title="Nenhuma ordem encontrada"
          description="Crie uma nova ordem de venda para começar"
          action={
            <Link to="/sales-orders/new">
              <Button size="sm">
                <Plus className="w-4 h-4" />
                Nova OV
              </Button>
            </Link>
          }
        />
      ) : (
        <Card>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  {['ID', 'Cliente', 'Transporte', 'Itens / Valor', 'Status', 'Criada em', ''].map(
                    (h) => (
                      <th
                        key={h}
                        className="text-left px-5 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((order: SalesOrder) => {
                  const total = getOrderTotal(order.items);
                  return (
                    <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3.5 font-mono text-xs text-slate-400">
                        {order.id.slice(0, 8)}
                      </td>
                      <td className="px-5 py-3.5 font-medium text-slate-900">
                        {order.customer.name}
                      </td>
                      <td className="px-5 py-3.5 text-slate-600">
                        {order.transportType.name}
                      </td>
                      <td className="px-5 py-3.5 text-slate-600">
                        {order.items.length} {order.items.length === 1 ? 'item' : 'itens'}
                        <span className="ml-2 text-xs font-medium text-slate-800">
                          {formatCurrency(total)}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <StatusBadge status={order.status} />
                      </td>
                      <td className="px-5 py-3.5 text-slate-500">
                        {formatDate(order.createdAt)}
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <Link
                          to={`/sales-orders/${order.id}`}
                          className="text-brand-600 hover:underline text-xs font-medium"
                        >
                          Detalhe
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
