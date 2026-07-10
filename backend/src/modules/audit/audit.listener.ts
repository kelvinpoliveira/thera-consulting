import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { AuditRepository } from './audit.repository.js';

interface OrderCreatedPayload {
  orderId: string;
  order: Record<string, unknown>;
}

interface StatusChangedPayload {
  orderId: string;
  previousStatus: string;
  currentStatus: string;
}

interface ScheduleCreatedPayload {
  salesOrderId: string;
  schedule: Record<string, unknown>;
}

interface ScheduleChangedPayload {
  salesOrderId: string;
  previous: Record<string, unknown>;
  current: Record<string, unknown>;
}

interface TransportChangedPayload {
  orderId: string;
  previousTransportTypeId: string;
  currentTransportTypeId: string;
}

@Injectable()
export class AuditListener {
  constructor(private readonly repository: AuditRepository) {}

  @OnEvent('order.created')
  handleOrderCreated(payload: OrderCreatedPayload) {
    return this.repository.create({
      entityType: 'SalesOrder',
      entityId: payload.orderId,
      action: 'ORDER_CREATED',
      currentState: payload.order,
      salesOrderId: payload.orderId,
    });
  }

  @OnEvent('order.status.changed')
  handleStatusChanged(payload: StatusChangedPayload) {
    return this.repository.create({
      entityType: 'SalesOrder',
      entityId: payload.orderId,
      action: 'STATUS_CHANGED',
      previousState: { status: payload.previousStatus },
      currentState: { status: payload.currentStatus },
      salesOrderId: payload.orderId,
    });
  }

  @OnEvent('schedule.created')
  handleScheduleCreated(payload: ScheduleCreatedPayload) {
    return this.repository.create({
      entityType: 'Schedule',
      entityId: payload.salesOrderId,
      action: 'SCHEDULE_CREATED',
      currentState: payload.schedule,
      salesOrderId: payload.salesOrderId,
    });
  }

  @OnEvent('schedule.changed')
  handleScheduleChanged(payload: ScheduleChangedPayload) {
    return this.repository.create({
      entityType: 'Schedule',
      entityId: payload.salesOrderId,
      action: 'SCHEDULE_CHANGED',
      previousState: payload.previous,
      currentState: payload.current,
      salesOrderId: payload.salesOrderId,
    });
  }

  @OnEvent('order.transport.changed')
  handleTransportChanged(payload: TransportChangedPayload) {
    return this.repository.create({
      entityType: 'SalesOrder',
      entityId: payload.orderId,
      action: 'TRANSPORT_CHANGED',
      previousState: { transportTypeId: payload.previousTransportTypeId },
      currentState: { transportTypeId: payload.currentTransportTypeId },
      salesOrderId: payload.orderId,
    });
  }
}
