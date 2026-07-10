import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateItemDto } from './dto/create-item.dto.js';
export declare class ItemsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("../../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sku: string;
        unitPrice: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    findById(id: string): import("../../../generated/prisma/models.js").Prisma__ItemClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sku: string;
        unitPrice: import("@prisma/client-runtime-utils").Decimal;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    findBySku(sku: string): import("../../../generated/prisma/models.js").Prisma__ItemClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sku: string;
        unitPrice: import("@prisma/client-runtime-utils").Decimal;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    findManyByIds(ids: string[]): import("../../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sku: string;
        unitPrice: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    create(dto: CreateItemDto): import("../../../generated/prisma/models.js").Prisma__ItemClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sku: string;
        unitPrice: import("@prisma/client-runtime-utils").Decimal;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
}
