import { CreateItemDto } from './dto/create-item.dto.js';
import { ItemsRepository } from './items.repository.js';
export declare class ItemsService {
    private readonly repository;
    constructor(repository: ItemsRepository);
    findAll(): import("../../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sku: string;
        unitPrice: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    findById(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sku: string;
        unitPrice: import("@prisma/client-runtime-utils").Decimal;
    }>;
    create(dto: CreateItemDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sku: string;
        unitPrice: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
