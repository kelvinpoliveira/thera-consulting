import { NavLink, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  Truck,
  ChevronRight,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/sales-orders', label: 'Ordens de Venda', icon: ShoppingCart },
  { to: '/customers', label: 'Clientes', icon: Users },
  { to: '/items', label: 'Itens', icon: Package },
  { to: '/transport-types', label: 'Tipos de Transporte', icon: Truck },
];

export function AppLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <aside className="w-60 bg-white border-r border-slate-200 flex flex-col shrink-0">
        <div className="h-16 flex items-center px-5 border-b border-slate-100">
          <img src="/thera-logo.png" alt="Thera Consulting" className="h-8 w-auto" />
        </div>

        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary-50 text-primary-800'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={cn('w-4 h-4', isActive ? 'text-primary-700' : 'text-slate-400')}
                  />
                  {item.label}
                  {isActive && <ChevronRight className="w-3 h-3 ml-auto text-primary-400" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <p className="text-xs text-slate-400 text-center">Gestão de Ordens de Venda</p>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6 shrink-0">
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-600">{user?.name}</span>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
