import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';

interface CreateAuditLogParams {
  entityType: string;
  entityId: string;
  action: string;
  previousState?: unknown;
  currentState?: unknown;
  salesOrderId?: string;
}

@Injectable()
export class AuditRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(params: CreateAuditLogParams) {
    return this.prisma.auditLog.create({
      data: {
        entityType: params.entityType,
        entityId: params.entityId,
        action: params.action,
        previousState: params.previousState ? (params.previousState as object) : undefined,
        currentState: params.currentState ? (params.currentState as object) : undefined,
        salesOrderId: params.salesOrderId,
      },
    });
  }

  findByEntity(entityType: string, entityId: string) {
    return this.prisma.auditLog.findMany({
      where: { entityType, entityId },
      orderBy: { createdAt: 'desc' },
    });
  }

  findBySalesOrder(salesOrderId: string) {
    return this.prisma.auditLog.findMany({
      where: { salesOrderId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
