var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { AuditRepository } from './audit.repository.js';
let AuditListener = class AuditListener {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    handleOrderCreated(payload) {
        return this.repository.create({
            entityType: 'SalesOrder',
            entityId: payload.orderId,
            action: 'ORDER_CREATED',
            currentState: payload.order,
            salesOrderId: payload.orderId,
        });
    }
    handleStatusChanged(payload) {
        return this.repository.create({
            entityType: 'SalesOrder',
            entityId: payload.orderId,
            action: 'STATUS_CHANGED',
            previousState: { status: payload.previousStatus },
            currentState: { status: payload.currentStatus },
            salesOrderId: payload.orderId,
        });
    }
    handleScheduleCreated(payload) {
        return this.repository.create({
            entityType: 'Schedule',
            entityId: payload.salesOrderId,
            action: 'SCHEDULE_CREATED',
            currentState: payload.schedule,
            salesOrderId: payload.salesOrderId,
        });
    }
    handleScheduleChanged(payload) {
        return this.repository.create({
            entityType: 'Schedule',
            entityId: payload.salesOrderId,
            action: 'SCHEDULE_CHANGED',
            previousState: payload.previous,
            currentState: payload.current,
            salesOrderId: payload.salesOrderId,
        });
    }
    handleTransportChanged(payload) {
        return this.repository.create({
            entityType: 'SalesOrder',
            entityId: payload.orderId,
            action: 'TRANSPORT_CHANGED',
            previousState: { transportTypeId: payload.previousTransportTypeId },
            currentState: { transportTypeId: payload.currentTransportTypeId },
            salesOrderId: payload.orderId,
        });
    }
};
__decorate([
    OnEvent('order.created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuditListener.prototype, "handleOrderCreated", null);
__decorate([
    OnEvent('order.status.changed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuditListener.prototype, "handleStatusChanged", null);
__decorate([
    OnEvent('schedule.created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuditListener.prototype, "handleScheduleCreated", null);
__decorate([
    OnEvent('schedule.changed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuditListener.prototype, "handleScheduleChanged", null);
__decorate([
    OnEvent('order.transport.changed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuditListener.prototype, "handleTransportChanged", null);
AuditListener = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuditRepository])
], AuditListener);
export { AuditListener };
//# sourceMappingURL=audit.listener.js.map