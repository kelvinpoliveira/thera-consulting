import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Trash2, ArrowLeft, PackagePlus } from 'lucide-react';
import { salesOrdersApi } from '@/api/sales-orders';
import { customersApi } from '@/api/customers';
import { itemsApi } from '@/api/items';
import { queryClient } from '@/lib/query-client';
import { formatCurrency, getOrderTotal } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input, Select } from '@/components/FormFields';
import { PageLoader } from '@/components/Feedback';
import type { Item } from '@/types';

const schema = z.object({
  customerId: z.string().min(1, 'Selecione um cliente'),
  transportTypeId: z.string().min(1, 'Selecione um tipo de transporte'),
});

type FormValues = z.infer<typeof schema>;

interface OrderItem {
  itemId: string;
  quantity: number;
  item: Item;
}

export function NewSalesOrderPage() {
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [itemSelectId, setItemSelectId] = useState('');
  const [itemQty, setItemQty] = useState(1);
  const [formError, setFormError] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const selectedCustomerId = watch('customerId');

  const { data: customers, isLoading: loadingCustomers } = useQuery({
    queryKey: ['customers'],
    queryFn: customersApi.list,
  });

  const { data: items, isLoading: loadingItems } = useQuery({
    queryKey: ['items'],
    queryFn: itemsApi.list,
  });

  // Reset transport type when customer changes
  useEffect(() => {
    setValue('transportTypeId', '');
  }, [selectedCustomerId, setValue]);

  const selectedCustomer = customers?.find((c) => c.id === selectedCustomerId);
  const authorizedTransports = selectedCustomer?.transportTypes ?? [];

  const mutation = useMutation({
    mutationFn: salesOrdersApi.create,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['sales-orders'] });
      navigate(`/sales-orders/${data.id}`);
    },
    onError: (err: Error) => setFormError(err.message),
  });

  function addItem() {
    if (!itemSelectId) return;
    const item = items?.find((i) => i.id === itemSelectId);
    if (!item) return;
    const exists = orderItems.find((oi) => oi.itemId === itemSelectId);
    if (exists) {
      setOrderItems((prev) =>
        prev.map((oi) =>
          oi.itemId === itemSelectId
            ? { ...oi, quantity: oi.quantity + itemQty }
            : oi
        )
      );
    } else {
      setOrderItems((prev) => [...prev, { itemId: item.id, quantity: itemQty, item }]);
    }
    setItemSelectId('');
    setItemQty(1);
  }

  function removeItem(itemId: string) {
    setOrderItems((prev) => prev.filter((oi) => oi.itemId !== itemId));
  }

  function onSubmit(values: FormValues) {
    setFormError('');
    if (orderItems.length === 0) {
      setFormError('Adicione pelo menos um item à ordem.');
      return;
    }
    mutation.mutate({
      ...values,
      items: orderItems.map((oi) => ({ itemId: oi.itemId, quantity: oi.quantity })),
    });
  }

  if (loadingCustomers || loadingItems) return <PageLoader />;

  const total = getOrderTotal(orderItems);

  return (
    <div className="max-w-2xl space-y-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-slate-900">Nova Ordem de Venda</h1>
          <p className="text-sm text-slate-500">Preencha os dados para criar uma nova OV</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Card>
          <CardHeader>
            <CardTitle>Dados da Ordem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select
              label="Cliente *"
              id="customerId"
              error={errors.customerId?.message}
              {...register('customerId')}
            >
              <option value="">Selecione um cliente</option>
              {customers?.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} — {c.document}
                </option>
              ))}
            </Select>

            <Select
              label="Tipo de Transporte *"
              id="transportTypeId"
              error={errors.transportTypeId?.message}
              disabled={!selectedCustomerId}
              {...register('transportTypeId')}
            >
              <option value="">
                {selectedCustomerId
                  ? authorizedTransports.length === 0
                    ? 'Nenhum transporte autorizado para este cliente'
                    : 'Selecione um tipo de transporte'
                  : 'Selecione um cliente primeiro'}
              </option>
              {authorizedTransports.map((ct) => (
                <option key={ct.transportTypeId} value={ct.transportTypeId}>
                  {ct.transportType.name}
                </option>
              ))}
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Itens</CardTitle>
              {orderItems.length > 0 && (
                <span className="text-sm font-semibold text-slate-700">
                  Total: {formatCurrency(total)}
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2 items-end">
              <div className="flex-1">
                <Select
                  label="Item"
                  id="itemSelect"
                  value={itemSelectId}
                  onChange={(e) => setItemSelectId(e.target.value)}
                >
                  <option value="">Selecione um item</option>
                  {items?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.sku} — {item.name} ({formatCurrency(Number(item.unitPrice))})
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-24">
                <Input
                  label="Qtd"
                  type="number"
                  min={1}
                  value={itemQty}
                  onChange={(e) => setItemQty(Number(e.target.value))}
                />
              </div>
              <Button
                type="button"
                variant="secondary"
                onClick={addItem}
                disabled={!itemSelectId}
              >
                <Plus className="w-4 h-4" />
                Adicionar
              </Button>
            </div>

            {orderItems.length > 0 ? (
              <div className="rounded-lg border border-slate-200 divide-y divide-slate-100">
                {orderItems.map((oi) => (
                  <div
                    key={oi.itemId}
                    className="flex items-center justify-between px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-900">{oi.item.name}</p>
                      <p className="text-xs text-slate-500">
                        {oi.quantity}x {formatCurrency(Number(oi.item.unitPrice))} ={' '}
                        <span className="font-medium">
                          {formatCurrency(oi.quantity * Number(oi.item.unitPrice))}
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(oi.itemId)}
                      className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center py-6 text-slate-400 gap-2">
                <PackagePlus className="w-8 h-8" />
                <p className="text-sm">Nenhum item adicionado</p>
              </div>
            )}
          </CardContent>
        </Card>

        {formError && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            {formError}
          </div>
        )}

        <div className="flex gap-3 justify-end">
          <Button type="button" variant="outline" onClick={() => navigate(-1)}>
            Cancelar
          </Button>
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'Criando...' : 'Criar Ordem de Venda'}
          </Button>
        </div>
      </form>
    </div>
  );
}
