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
import { PrismaService } from '../../prisma/prisma.service.js';
let AuditRepository = class AuditRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(params) {
        return this.prisma.auditLog.create({
            data: {
                entityType: params.entityType,
                entityId: params.entityId,
                action: params.action,
                previousState: params.previousState ? params.previousState : undefined,
                currentState: params.currentState ? params.currentState : undefined,
                salesOrderId: params.salesOrderId,
            },
        });
    }
    findByEntity(entityType, entityId) {
        return this.prisma.auditLog.findMany({
            where: { entityType, entityId },
            orderBy: { createdAt: 'desc' },
        });
    }
    findBySalesOrder(salesOrderId) {
        return this.prisma.auditLog.findMany({
            where: { salesOrderId },
            orderBy: { createdAt: 'desc' },
        });
    }
};
AuditRepository = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AuditRepository);
export { AuditRepository };
//# sourceMappingURL=audit.repository.js.map