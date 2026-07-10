import { OrderStatus } from '../../../../generated/prisma/client.js';

export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly order: unknown,
  ) {}
}

export class StatusChangedEvent {
  constructor(
    public readonly orderId: string,
    public readonly previousStatus: OrderStatus,
    public readonly currentStatus: OrderStatus,
  ) {}
}

export class ScheduleChangedEvent {
  constructor(
    public readonly salesOrderId: string,
    public readonly previous: unknown,
    public readonly current: unknown,
  ) {}
}

export class ScheduleCreatedEvent {
  constructor(
    public readonly salesOrderId: string,
    public readonly schedule: unknown,
  ) {}
}
