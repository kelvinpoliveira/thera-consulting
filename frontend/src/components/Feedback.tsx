import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  className?: string;
}

export function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return <Loader2 className={`animate-spin text-brand-600 ${className ?? 'w-6 h-6'}`} />;
}

export function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-3">
      <LoadingSpinner className="w-8 h-8" />
      <p className="text-sm text-slate-500">Carregando...</p>
    </div>
  );
}

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-3">
      <p className="text-sm text-red-600">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-sm text-brand-600 underline hover:no-underline"
        >
          Tentar novamente
        </button>
      )}
    </div>
  );
}

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-48 gap-2">
      <p className="text-base font-medium text-slate-600">{title}</p>
      {description && <p className="text-sm text-slate-400">{description}</p>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}
