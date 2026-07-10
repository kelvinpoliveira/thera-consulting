import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/query-client';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { AppLayout } from '@/components/AppLayout';
import { LoginPage } from '@/pages/LoginPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { SalesOrdersPage } from '@/pages/SalesOrdersPage';
import { NewSalesOrderPage } from '@/pages/NewSalesOrderPage';
import { SalesOrderDetailPage } from '@/pages/SalesOrderDetailPage';
import { CustomersPage } from '@/pages/CustomersPage';
import { ItemsPage } from '@/pages/ItemsPage';
import { TransportTypesPage } from '@/pages/TransportTypesPage';
import './index.css';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardPage />} />
              <Route path="sales-orders" element={<SalesOrdersPage />} />
              <Route path="sales-orders/new" element={<NewSalesOrderPage />} />
              <Route path="sales-orders/:id" element={<SalesOrderDetailPage />} />
              <Route path="customers" element={<CustomersPage />} />
              <Route path="items" element={<ItemsPage />} />
              <Route path="transport-types" element={<TransportTypesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);