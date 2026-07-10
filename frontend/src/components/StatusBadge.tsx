import { cn } from '@/lib/utils';
import type { OrderStatus } from '@/types';
import { ORDER_STATUS_LABELS } from '@/types';

export const statusStyles: Record<OrderStatus, string> = {
  CRIADA: 'bg-slate-100 text-slate-700 ring-slate-200',
  PLANEJADA: 'bg-blue-100 text-blue-700 ring-blue-200',
  AGENDADA: 'bg-amber-100 text-amber-700 ring-amber-200',
  EM_TRANSPORTE: 'bg-orange-100 text-orange-700 ring-orange-200',
  ENTREGUE: 'bg-green-100 text-green-700 ring-green-200',
};

interface StatusBadgeProps {
  status: OrderStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset',
        statusStyles[status],
        className
      )}
    >
      {ORDER_STATUS_LABELS[status]}
    </span>
  );
}
