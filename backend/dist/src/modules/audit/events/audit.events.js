export class OrderCreatedEvent {
    orderId;
    order;
    constructor(orderId, order) {
        this.orderId = orderId;
        this.order = order;
    }
}
export class StatusChangedEvent {
    orderId;
    previousStatus;
    currentStatus;
    constructor(orderId, previousStatus, currentStatus) {
        this.orderId = orderId;
        this.previousStatus = previousStatus;
        this.currentStatus = currentStatus;
    }
}
export class ScheduleChangedEvent {
    salesOrderId;
    previous;
    current;
    constructor(salesOrderId, previous, current) {
        this.salesOrderId = salesOrderId;
        this.previous = previous;
        this.current = current;
    }
}
export class ScheduleCreatedEvent {
    salesOrderId;
    schedule;
    constructor(salesOrderId, schedule) {
        this.salesOrderId = salesOrderId;
        this.schedule = schedule;
    }
}
//# sourceMappingURL=audit.events.js.map