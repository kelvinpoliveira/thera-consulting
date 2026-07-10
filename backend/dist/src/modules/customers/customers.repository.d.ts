import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';
export declare class CustomersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("../../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        transportTypes: ({
            transportType: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
            };
        } & {
            customerId: string;
            transportTypeId: string;
        })[];
    } & {
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        document: string;
        phone: string | null;
    })[]>;
    findById(id: string): import("../../../generated/prisma/models.js").Prisma__CustomerClient<({
        transportTypes: ({
            transportType: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
            };
        } & {
            customerId: string;
            transportTypeId: string;
        })[];
    } & {
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        document: string;
        phone: string | null;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    findByDocument(document: string): import("../../../generated/prisma/models.js").Prisma__CustomerClient<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        document: string;
        phone: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    create(dto: CreateCustomerDto): import("../../../generated/prisma/models.js").Prisma__CustomerClient<{
        transportTypes: ({
            transportType: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
            };
        } & {
            customerId: string;
            transportTypeId: string;
        })[];
    } & {
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        document: string;
        phone: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    update(id: string, dto: UpdateCustomerDto): import("../../../generated/prisma/models.js").Prisma__CustomerClient<{
        transportTypes: ({
            transportType: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
            };
        } & {
            customerId: string;
            transportTypeId: string;
        })[];
    } & {
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        document: string;
        phone: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    assignTransportType(customerId: string, transportTypeId: string): import("../../../generated/prisma/models.js").Prisma__CustomerTransportTypeClient<{
        customerId: string;
        transportTypeId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    removeTransportType(customerId: string, transportTypeId: string): import("../../../generated/prisma/models.js").Prisma__CustomerTransportTypeClient<{
        customerId: string;
        transportTypeId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    hasTransportType(customerId: string, transportTypeId: string): import("../../../generated/prisma/models.js").Prisma__CustomerTransportTypeClient<{
        customerId: string;
        transportTypeId: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
}
