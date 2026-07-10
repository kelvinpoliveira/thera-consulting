import { PrismaService } from '../../prisma/prisma.service.js';
import { OrderStatus } from '../../../generated/prisma/client.js';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto.js';
import { FilterSalesOrdersDto } from './dto/filter-sales-orders.dto.js';
export declare class SalesOrdersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(filters: FilterSalesOrdersDto): import("../../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        customer: {
            id: string;
            email: string | null;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            document: string;
            phone: string | null;
        };
        transportType: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        };
        schedule: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deliveryDate: Date;
            windowStart: Date;
            windowEnd: Date;
            salesOrderId: string;
            confirmed: boolean;
        } | null;
        items: ({
            item: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                sku: string;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
            };
        } & {
            itemId: string;
            quantity: number;
            salesOrderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        transportTypeId: string;
        status: OrderStatus;
    })[]>;
    findById(id: string): import("../../../generated/prisma/models.js").Prisma__SalesOrderClient<({
        customer: {
            id: string;
            email: string | null;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            document: string;
            phone: string | null;
        };
        transportType: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        };
        schedule: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deliveryDate: Date;
            windowStart: Date;
            windowEnd: Date;
            salesOrderId: string;
            confirmed: boolean;
        } | null;
        items: ({
            item: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                sku: string;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
            };
        } & {
            itemId: string;
            quantity: number;
            salesOrderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        transportTypeId: string;
        status: OrderStatus;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    create(dto: CreateSalesOrderDto): Promise<{
        customer: {
            id: string;
            email: string | null;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            document: string;
            phone: string | null;
        };
        transportType: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        };
        schedule: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deliveryDate: Date;
            windowStart: Date;
            windowEnd: Date;
            salesOrderId: string;
            confirmed: boolean;
        } | null;
        items: ({
            item: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                sku: string;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
            };
        } & {
            itemId: string;
            quantity: number;
            salesOrderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        transportTypeId: string;
        status: OrderStatus;
    }>;
    updateStatus(id: string, status: OrderStatus): import("../../../generated/prisma/models.js").Prisma__SalesOrderClient<{
        customer: {
            id: string;
            email: string | null;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            document: string;
            phone: string | null;
        };
        transportType: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        };
        schedule: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deliveryDate: Date;
            windowStart: Date;
            windowEnd: Date;
            salesOrderId: string;
            confirmed: boolean;
        } | null;
        items: ({
            item: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                sku: string;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
            };
        } & {
            itemId: string;
            quantity: number;
            salesOrderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        transportTypeId: string;
        status: OrderStatus;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    updateTransportType(id: string, transportTypeId: string): import("../../../generated/prisma/models.js").Prisma__SalesOrderClient<{
        customer: {
            id: string;
            email: string | null;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            document: string;
            phone: string | null;
        };
        transportType: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        };
        schedule: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deliveryDate: Date;
            windowStart: Date;
            windowEnd: Date;
            salesOrderId: string;
            confirmed: boolean;
        } | null;
        items: ({
            item: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                sku: string;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
            };
        } & {
            itemId: string;
            quantity: number;
            salesOrderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        transportTypeId: string;
        status: OrderStatus;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
}
