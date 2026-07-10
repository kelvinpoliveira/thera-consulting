import { OrderStatus } from '../../../../generated/prisma/client.js';
export declare class OrderCreatedEvent {
    readonly orderId: string;
    readonly order: unknown;
    constructor(orderId: string, order: unknown);
}
export declare class StatusChangedEvent {
    readonly orderId: string;
    readonly previousStatus: OrderStatus;
    readonly currentStatus: OrderStatus;
    constructor(orderId: string, previousStatus: OrderStatus, currentStatus: OrderStatus);
}
export declare class ScheduleChangedEvent {
    readonly salesOrderId: string;
    readonly previous: unknown;
    readonly current: unknown;
    constructor(salesOrderId: string, previous: unknown, current: unknown);
}
export declare class ScheduleCreatedEvent {
    readonly salesOrderId: string;
    readonly schedule: unknown;
    constructor(salesOrderId: string, schedule: unknown);
}
