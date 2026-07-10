export type OrderStatus =
  | 'CRIADA'
  | 'PLANEJADA'
  | 'AGENDADA'
  | 'EM_TRANSPORTE'
  | 'ENTREGUE';

export const ORDER_STATUS_SEQUENCE: OrderStatus[] = [
  'CRIADA',
  'PLANEJADA',
  'AGENDADA',
  'EM_TRANSPORTE',
  'ENTREGUE',
];

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  CRIADA: 'Criada',
  PLANEJADA: 'Planejada',
  AGENDADA: 'Agendada',
  EM_TRANSPORTE: 'Em Transporte',
  ENTREGUE: 'Entregue',
};

export const NEXT_STATUS: Partial<Record<OrderStatus, OrderStatus>> = {
  CRIADA: 'PLANEJADA',
  PLANEJADA: 'AGENDADA',
  AGENDADA: 'EM_TRANSPORTE',
  EM_TRANSPORTE: 'ENTREGUE',
};

export interface TransportType {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerTransportType {
  customerId: string;
  transportTypeId: string;
  transportType: TransportType;
}

export interface Customer {
  id: string;
  name: string;
  document: string;
  email?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
  transportTypes?: CustomerTransportType[];
}

export interface Item {
  id: string;
  sku: string;
  name: string;
  description?: string;
  unitPrice: number | string;
  createdAt: string;
  updatedAt: string;
}

export interface SalesOrderItem {
  salesOrderId: string;
  itemId: string;
  quantity: number;
  item: Item;
}

export interface Schedule {
  id: string;
  salesOrderId: string;
  deliveryDate: string;
  windowStart: string;
  windowEnd: string;
  confirmed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuditLog {
  id: string;
  entityType: string;
  entityId: string;
  action: string;
  previousState?: Record<string, unknown>;
  currentState?: Record<string, unknown>;
  salesOrderId?: string;
  createdAt: string;
}

export interface SalesOrder {
  id: string;
  customerId: string;
  transportTypeId: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  customer: Customer;
  transportType: TransportType;
  items: SalesOrderItem[];
  schedule?: Schedule;
}

export interface FilterSalesOrdersParams {
  status?: OrderStatus;
  customerId?: string;
  transportTypeId?: string;
  date?: string;
}

export interface CreateSalesOrderDto {
  customerId: string;
  transportTypeId: string;
  items: { itemId: string; quantity: number }[];
}

export interface CreateCustomerDto {
  name: string;
  document: string;
  email?: string;
  phone?: string;
}

export interface UpdateCustomerDto {
  name?: string;
  email?: string;
  phone?: string;
}

export interface CreateItemDto {
  sku: string;
  name: string;
  description?: string;
  unitPrice: number;
}

export interface CreateTransportTypeDto {
  name: string;
  description?: string;
}

export interface UpdateTransportTypeDto {
  name?: string;
  description?: string;
}

export interface CreateScheduleDto {
  deliveryDate: string;
  windowStart: string;
  windowEnd: string;
}
