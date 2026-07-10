import { CreateSalesOrderDto } from './dto/create-sales-order.dto.js';
import { FilterSalesOrdersDto } from './dto/filter-sales-orders.dto.js';
import { UpdateStatusDto } from './dto/update-status.dto.js';
import { UpdateTransportTypeDto } from './dto/update-transport-type.dto.js';
import { SalesOrdersService } from './sales-orders.service.js';
export declare class SalesOrdersController {
    private readonly service;
    constructor(service: SalesOrdersService);
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
        status: import("../../../generated/prisma/enums.js").OrderStatus;
    })[]>;
    findById(id: string): Promise<{
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
        status: import("../../../generated/prisma/enums.js").OrderStatus;
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
        status: import("../../../generated/prisma/enums.js").OrderStatus;
    }>;
    updateStatus(id: string, dto: UpdateStatusDto): Promise<{
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
        status: import("../../../generated/prisma/enums.js").OrderStatus;
    }>;
    updateTransportType(id: string, dto: UpdateTransportTypeDto): Promise<{
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
        status: import("../../../generated/prisma/enums.js").OrderStatus;
    }>;
}
