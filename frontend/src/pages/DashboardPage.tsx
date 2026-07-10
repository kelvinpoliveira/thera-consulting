import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  Clock,
  CalendarCheck,
  Truck,
  CheckCircle2,
  Plus,
  ArrowRight,
} from 'lucide-react';
import { salesOrdersApi } from '@/api/sales-orders';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { StatusBadge, statusStyles } from '@/components/StatusBadge';
import { Button } from '@/components/Button';
import { PageLoader, ErrorMessage } from '@/components/Feedback';
import { formatDate, formatCurrency, getOrderTotal } from '@/lib/utils';
import {
  ORDER_STATUS_SEQUENCE,
  ORDER_STATUS_LABELS,
} from '@/types';
import type { OrderStatus, SalesOrder } from '@/types';

const statusIcons: Record<OrderStatus, React.ComponentType<{ className?: string }>> = {
  CRIADA: Clock,
  PLANEJADA: ShoppingCart,
  AGENDADA: CalendarCheck,
  EM_TRANSPORTE: Truck,
  ENTREGUE: CheckCircle2,
};

function StatusStatCard({
  status,
  count,
}: {
  status: OrderStatus;
  count: number;
}) {
  const Icon = statusIcons[status];
  return (
    <Link to={`/sales-orders?status=${status}`} className="block">
      <div
        className={`flex items-center gap-4 p-4 rounded-xl border bg-white hover:shadow-md transition-shadow cursor-pointer`}
      >
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${statusStyles[status]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-2xl font-bold text-slate-900">{count}</p>
          <p className="text-xs text-slate-500">{ORDER_STATUS_LABELS[status]}</p>
        </div>
      </div>
    </Link>
  );
}

export function DashboardPage() {
  const { data: orders, isLoading, error, refetch } = useQuery({
    queryKey: ['sales-orders'],
    queryFn: () => salesOrdersApi.list(),
  });

  if (isLoading) return <PageLoader />;
  if (error) return <ErrorMessage message={error.message} onRetry={refetch} />;

  const all = orders ?? [];

  const countsByStatus = ORDER_STATUS_SEQUENCE.reduce<Record<OrderStatus, number>>(
    (acc, s) => {
      acc[s] = all.filter((o: SalesOrder) => o.status === s).length;
      return acc;
    },
    Object.fromEntries(ORDER_STATUS_SEQUENCE.map((s) => [s, 0])) as Record<OrderStatus, number>
  );

  const recent = [...all]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 8);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500 mt-0.5">Visão geral do sistema</p>
        </div>
        <Link to="/sales-orders/new">
          <Button>
            <Plus className="w-4 h-4" />
            Nova OV
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {ORDER_STATUS_SEQUENCE.map((status) => (
          <StatusStatCard key={status} status={status} count={countsByStatus[status]} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Ordens Recentes</CardTitle>
            <Link
              to="/sales-orders"
              className="flex items-center gap-1 text-xs text-brand-600 hover:underline"
            >
              Ver todas <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {recent.length === 0 ? (
            <div className="py-12 text-center text-sm text-slate-400">
              Nenhuma ordem de venda cadastrada
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">
                    ID
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Cliente
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Transporte
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Itens
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Status
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Data
                  </th>
                  <th className="px-6 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recent.map((order: SalesOrder) => {
                  const total = getOrderTotal(order.items);
                  return (
                    <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-3.5 font-mono text-xs text-slate-500">
                        {order.id.slice(0, 8)}...
                      </td>
                      <td className="px-6 py-3.5 font-medium text-slate-900">
                        {order.customer.name}
                      </td>
                      <td className="px-6 py-3.5 text-slate-600">
                        {order.transportType.name}
                      </td>
                      <td className="px-6 py-3.5 text-slate-600">
                        {order.items.length} {order.items.length === 1 ? 'item' : 'itens'} •{' '}
                        <span className="font-medium">{formatCurrency(total)}</span>
                      </td>
                      <td className="px-6 py-3.5">
                        <StatusBadge status={order.status} />
                      </td>
                      <td className="px-6 py-3.5 text-slate-500">
                        {formatDate(order.createdAt)}
                      </td>
                      <td className="px-6 py-3.5">
                        <Link
                          to={`/sales-orders/${order.id}`}
                          className="text-brand-600 hover:underline text-xs"
                        >
                          Ver
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
