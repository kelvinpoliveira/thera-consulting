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
export declare class AuditListener {
    private readonly repository;
    constructor(repository: AuditRepository);
    handleOrderCreated(payload: OrderCreatedPayload): import("../../../generated/prisma/models.js").Prisma__AuditLogClient<{
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
    handleStatusChanged(payload: StatusChangedPayload): import("../../../generated/prisma/models.js").Prisma__AuditLogClient<{
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
    handleScheduleCreated(payload: ScheduleCreatedPayload): import("../../../generated/prisma/models.js").Prisma__AuditLogClient<{
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
    handleScheduleChanged(payload: ScheduleChangedPayload): import("../../../generated/prisma/models.js").Prisma__AuditLogClient<{
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
    handleTransportChanged(payload: TransportChangedPayload): import("../../../generated/prisma/models.js").Prisma__AuditLogClient<{
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
}
export {};
