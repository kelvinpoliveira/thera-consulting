import { ORDER_STATUS_SEQUENCE, ORDER_STATUS_LABELS } from '@/types';
import type { OrderStatus } from '@/types';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface OrderStatusTimelineProps {
  currentStatus: OrderStatus;
}

export function OrderStatusTimeline({ currentStatus }: OrderStatusTimelineProps) {
  const currentIndex = ORDER_STATUS_SEQUENCE.indexOf(currentStatus);

  return (
    <div className="flex items-center w-full gap-0">
      {ORDER_STATUS_SEQUENCE.map((status, index) => {
        const isDone = index < currentIndex;
        const isCurrent = index === currentIndex;
        const isLast = index === ORDER_STATUS_SEQUENCE.length - 1;

        return (
          <div key={status} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ring-2',
                  isDone && 'bg-green-500 text-white ring-green-500',
                  isCurrent && 'bg-primary-600 text-white ring-primary-600',
                  !isDone && !isCurrent && 'bg-white text-slate-400 ring-slate-200'
                )}
              >
                {isDone ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              <span
                className={cn(
                  'text-[10px] text-center font-medium leading-tight max-w-[64px] whitespace-nowrap',
                  isCurrent && 'text-primary-700',
                  isDone && 'text-green-600',
                  !isDone && !isCurrent && 'text-slate-400'
                )}
              >
                {ORDER_STATUS_LABELS[status]}
              </span>
            </div>
            {!isLast && (
              <div
                className={cn(
                  'flex-1 h-0.5 mb-5 mx-1',
                  index < currentIndex ? 'bg-green-400' : 'bg-slate-200'
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
