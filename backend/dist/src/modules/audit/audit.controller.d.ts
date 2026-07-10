import { AuditRepository } from './audit.repository.js';
export declare class AuditController {
    private readonly repository;
    constructor(repository: AuditRepository);
    findBySalesOrder(salesOrderId: string): import("../../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        salesOrderId: string | null;
        entityType: string;
        entityId: string;
        action: string;
        previousState: import("@prisma/client/runtime/client").JsonValue | null;
        currentState: import("@prisma/client/runtime/client").JsonValue | null;
    }[]>;
    findByEntity(entityType: string, entityId: string): import("../../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        salesOrderId: string | null;
        entityType: string;
        entityId: string;
        action: string;
        previousState: import("@prisma/client/runtime/client").JsonValue | null;
        currentState: import("@prisma/client/runtime/client").JsonValue | null;
    }[]>;
}
