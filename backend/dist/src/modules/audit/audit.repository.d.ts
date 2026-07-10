import { PrismaService } from '../../prisma/prisma.service.js';
interface CreateAuditLogParams {
    entityType: string;
    entityId: string;
    action: string;
    previousState?: unknown;
    currentState?: unknown;
    salesOrderId?: string;
}
export declare class AuditRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(params: CreateAuditLogParams): import("../../../generated/prisma/models.js").Prisma__AuditLogClient<{
        id: string;
        createdAt: Date;
        salesOrderId: string | null;
        entityType: string;
        entityId: string;
        action: string;
        previousState: import("@prisma/client/runtime/client").JsonValue | null;
        currentState: import("@prisma/client/runtime/client").JsonValue | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
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
}
export {};
