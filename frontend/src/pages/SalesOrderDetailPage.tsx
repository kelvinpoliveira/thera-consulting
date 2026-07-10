import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { ArrowLeft, ArrowRight, Clock, Package, Truck } from 'lucide-react';
import { salesOrdersApi } from '@/api/sales-orders';
import { auditApi } from '@/api/audit';
import { queryClient } from '@/lib/query-client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { StatusBadge } from '@/components/StatusBadge';
import { OrderStatusTimeline } from '@/components/OrderStatusTimeline';
import { Button } from '@/components/Button';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { PageLoader, ErrorMessage } from '@/components/Feedback';
import { ScheduleCard } from '@/components/ScheduleCard';
import { formatDateTime, formatCurrency, getOrderTotal } from '@/lib/utils';
import { NEXT_STATUS, ORDER_STATUS_LABELS } from '@/types';
import type { OrderStatus } from '@/types';

const AUDIT_ACTION_LABELS: Record<string, string> = {
  ORDER_CREATED: 'Ordem criada',
  STATUS_CHANGED: 'Status alterado',
  SCHEDULE_CREATED: 'Agendamento criado',
  SCHEDULE_CHANGED: 'Agendamento alterado',
  TRANSPORT_CHANGED: 'Transporte alterado',
};

export function SalesOrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [statusError, setStatusError] = useState('');
  const [selectedTransportId, setSelectedTransportId] = useState('');
  const [transportError, setTransportError] = useState('');

  const { data: order, isLoading, error, refetch } = useQuery({
    queryKey: ['sales-orders', id],
    queryFn: () => salesOrdersApi.getById(id as string),
    enabled: !!id,
  });

  const { data: auditLogs } = useQuery({
    queryKey: ['audit-logs', id],
    queryFn: () => auditApi.listBySalesOrder(id as string),
    enabled: !!id,
  });

  const statusMutation = useMutation({
    mutationFn: (status: OrderStatus) => salesOrdersApi.updateStatus(id as string, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sales-orders', id] });
      queryClient.invalidateQueries({ queryKey: ['audit-logs', id] });
      queryClient.invalidateQueries({ queryKey: ['sales-orders'] });
      setConfirmOpen(false);
      setStatusError('');
    },
    onError: (err: Error) => {
      setConfirmOpen(false);
      setStatusError(err.message);
    },
  });

  const transportMutation = useMutation({
    mutationFn: (transportTypeId: string) =>
      salesOrdersApi.updateTransportType(id as string, transportTypeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sales-orders', id] });
      queryClient.invalidateQueries({ queryKey: ['audit-logs', id] });
      setSelectedTransportId('');
      setTransportError('');
    },
    onError: (err: Error) => setTransportError(err.message),
  });

  if (isLoading) return <PageLoader />;
  if (error) return <ErrorMessage message={error.message} onRetry={refetch} />;
  if (!order) return null;

  const nextStatus = NEXT_STATUS[order.status];
  const total = getOrderTotal(order.items);
  const authorizedTransports = order.customer.transportTypes ?? [];
  const canChangeTransport = order.status === 'CRIADA' && authorizedTransports.length > 1;

  return (
    <div className="max-w-4xl space-y-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-slate-900 truncate">
              Ordem {order.id.slice(0, 8).toUpperCase()}
            </h1>
            <StatusBadge status={order.status} />
          </div>
          <p className="text-sm text-slate-500 mt-0.5">
            Criada em {formatDateTime(order.createdAt)}
          </p>
        </div>
        {nextStatus && (
          <Button onClick={() => setConfirmOpen(true)}>
            Avançar para {ORDER_STATUS_LABELS[nextStatus]}
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>

      {statusError && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {statusError}
        </div>
      )}

      <Card>
        <CardContent className="py-5">
          <OrderStatusTimeline currentStatus={order.status} />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <Card>
            <CardHeader>
              <CardTitle>Dados da Ordem</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs text-slate-500 mb-1">Cliente</dt>
                  <dd className="font-medium text-slate-900">{order.customer.name}</dd>
                  <dd className="text-slate-500 text-xs">{order.customer.document}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 mb-1">Tipo de Transporte</dt>
                  <dd className="font-medium text-slate-900">{order.transportType.name}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 mb-1">Status</dt>
                  <dd>
                    <StatusBadge status={order.status} />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 mb-1">Última atualização</dt>
                  <dd className="text-slate-700">{formatDateTime(order.updatedAt)}</dd>
                </div>
              </dl>

              {canChangeTransport && (
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <p className="text-xs font-medium text-slate-500 mb-2 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5" />
                    Alterar tipo de transporte
                  </p>
                  <div className="flex gap-2 items-start">
                    <select
                      value={selectedTransportId}
                      onChange={(e) => {
                        setSelectedTransportId(e.target.value);
                        setTransportError('');
                      }}
                      className="flex-1 text-sm rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="">Selecione um transporte</option>
                      {authorizedTransports
                        .filter((ct) => ct.transportTypeId !== order.transportTypeId)
                        .map((ct) => (
                          <option key={ct.transportTypeId} value={ct.transportTypeId}>
                            {ct.transportType.name}
                          </option>
                        ))}
                    </select>
                    <Button
                      size="sm"
                      variant="secondary"
                      disabled={!selectedTransportId || transportMutation.isPending}
                      onClick={() => transportMutation.mutate(selectedTransportId)}
                    >
                      {transportMutation.isPending ? 'Salvando...' : 'Alterar'}
                    </Button>
                  </div>
                  {transportError && (
                    <p className="text-xs text-red-600 mt-1.5">{transportError}</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  <span className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-slate-400" />
                    Itens
                  </span>
                </CardTitle>
                <span className="text-sm font-semibold text-slate-800">
                  Total: {formatCurrency(total)}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="text-left px-5 py-2 text-xs font-medium text-slate-500">Item</th>
                    <th className="text-left px-5 py-2 text-xs font-medium text-slate-500">SKU</th>
                    <th className="text-right px-5 py-2 text-xs font-medium text-slate-500">Qtd</th>
                    <th className="text-right px-5 py-2 text-xs font-medium text-slate-500">Unit.</th>
                    <th className="text-right px-5 py-2 text-xs font-medium text-slate-500">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {order.items.map((oi) => (
                    <tr key={oi.itemId} className="hover:bg-slate-50">
                      <td className="px-5 py-3 font-medium text-slate-900">{oi.item.name}</td>
                      <td className="px-5 py-3 text-slate-500 font-mono text-xs">{oi.item.sku}</td>
                      <td className="px-5 py-3 text-right text-slate-700">{oi.quantity}</td>
                      <td className="px-5 py-3 text-right text-slate-700">
                        {formatCurrency(Number(oi.item.unitPrice))}
                      </td>
                      <td className="px-5 py-3 text-right font-medium text-slate-900">
                        {formatCurrency(oi.quantity * Number(oi.item.unitPrice))}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-slate-200 bg-slate-50">
                    <td colSpan={4} className="px-5 py-2.5 text-sm font-medium text-right text-slate-700">
                      Total
                    </td>
                    <td className="px-5 py-2.5 text-right font-bold text-slate-900">
                      {formatCurrency(total)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          <ScheduleCard order={order} />

          {(auditLogs?.length ?? 0) > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    Histórico
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto">
                  {auditLogs?.map((log) => (
                    <div key={log.id} className="px-5 py-3">
                      <p className="text-xs font-medium text-slate-800">
                        {AUDIT_ACTION_LABELS[log.action] ?? log.action}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {formatDateTime(log.createdAt)}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title={`Avançar para ${nextStatus ? ORDER_STATUS_LABELS[nextStatus] : ''}`}
        description={`Confirma a transição de "${ORDER_STATUS_LABELS[order.status]}" para "${nextStatus ? ORDER_STATUS_LABELS[nextStatus] : ''}"? Esta ação não pode ser desfeita.`}
        confirmLabel="Confirmar"
        onConfirm={() => nextStatus && statusMutation.mutate(nextStatus)}
        isLoading={statusMutation.isPending}
      />
    </div>
  );
}
