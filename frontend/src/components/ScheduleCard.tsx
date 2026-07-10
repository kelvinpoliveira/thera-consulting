import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalendarCheck, CheckCircle2, Edit2, Plus } from 'lucide-react';
import { schedulingApi } from '@/api/scheduling';
import { queryClient } from '@/lib/query-client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/FormFields';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { formatDate } from '@/lib/utils';
import type { SalesOrder } from '@/types';

const schema = z.object({
  deliveryDate: z.string().min(1, 'Data obrigatória'),
  windowStart: z.string().min(1, 'Horário inicial obrigatório'),
  windowEnd: z.string().min(1, 'Horário final obrigatório'),
});

type FormValues = z.infer<typeof schema>;

interface ScheduleCardProps {
  order: SalesOrder;
}

export function ScheduleCard({ order }: ScheduleCardProps) {
  const schedule = order.schedule;
  const canSchedule = order.status === 'PLANEJADA' || order.status === 'AGENDADA' || order.status === 'EM_TRANSPORTE';
  const [editing, setEditing] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: schedule
      ? {
          deliveryDate: schedule.deliveryDate.slice(0, 10),
          windowStart: schedule.windowStart.slice(11, 16),
          windowEnd: schedule.windowEnd.slice(11, 16),
        }
      : undefined,
  });

  const saveMutation = useMutation({
    mutationFn: (values: FormValues) => {
      const dto = {
        deliveryDate: values.deliveryDate,
        windowStart: `${values.deliveryDate}T${values.windowStart}:00`,
        windowEnd: `${values.deliveryDate}T${values.windowEnd}:00`,
      };
      return schedule
        ? schedulingApi.update(order.id, dto)
        : schedulingApi.create(order.id, dto);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sales-orders', order.id] });
      setEditing(false);
    },
  });

  const confirmMutation = useMutation({
    mutationFn: () => schedulingApi.confirm(order.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sales-orders', order.id] });
      setConfirmOpen(false);
    },
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            <span className="flex items-center gap-2">
              <CalendarCheck className="w-4 h-4 text-slate-400" />
              Agendamento
            </span>
          </CardTitle>
          {canSchedule && !editing && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                reset(
                  schedule
                    ? {
                        deliveryDate: schedule.deliveryDate.slice(0, 10),
                        windowStart: schedule.windowStart.slice(11, 16),
                        windowEnd: schedule.windowEnd.slice(11, 16),
                      }
                    : undefined
                );
                setEditing(true);
              }}
            >
              {schedule ? (
                <>
                  <Edit2 className="w-3 h-3" />
                  Editar
                </>
              ) : (
                <>
                  <Plus className="w-3 h-3" />
                  Agendar
                </>
              )}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {editing ? (
          <form
            onSubmit={handleSubmit((v) => saveMutation.mutate(v))}
            className="space-y-3"
          >
            <Input
              label="Data de entrega"
              type="date"
              id="deliveryDate"
              error={errors.deliveryDate?.message}
              {...register('deliveryDate')}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Janela início"
                type="time"
                id="windowStart"
                error={errors.windowStart?.message}
                {...register('windowStart')}
              />
              <Input
                label="Janela fim"
                type="time"
                id="windowEnd"
                error={errors.windowEnd?.message}
                {...register('windowEnd')}
              />
            </div>
            {saveMutation.error && (
              <p className="text-xs text-red-600">{(saveMutation.error as Error).message}</p>
            )}
            <div className="flex gap-2 justify-end pt-1">
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => setEditing(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" size="sm" disabled={saveMutation.isPending}>
                {saveMutation.isPending ? 'Salvando...' : 'Salvar'}
              </Button>
            </div>
          </form>
        ) : schedule ? (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div>
                <p className="text-xs text-slate-500">Data de entrega</p>
                <p className="font-medium text-slate-900">{formatDate(schedule.deliveryDate)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Janela de entrega</p>
                <p className="font-medium text-slate-900">
                  {schedule.windowStart.slice(11, 16)} — {schedule.windowEnd.slice(11, 16)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {schedule.confirmed ? (
                  <span className="flex items-center gap-1.5 text-xs text-green-700 bg-green-50 border border-green-200 rounded-full px-2.5 py-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    Confirmado
                  </span>
                ) : (
                  canSchedule && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setConfirmOpen(true)}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      Confirmar entrega
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-400 py-2">
            {canSchedule
              ? 'Nenhum agendamento. Clique em "Agendar" para criar.'
              : 'Avance o status para "Planejada" para agendar.'}
          </p>
        )}
      </CardContent>

      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Confirmar agendamento"
        description="Confirma a entrega para esta data e janela de horário?"
        confirmLabel="Confirmar"
        onConfirm={() => confirmMutation.mutate()}
        isLoading={confirmMutation.isPending}
      />
    </Card>
  );
}
