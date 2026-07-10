import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateTransportTypeDto } from './dto/create-transport-type.dto.js';
import { UpdateTransportTypeDto } from './dto/update-transport-type.dto.js';
export declare class TransportTypesRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("../../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }[]>;
    findById(id: string): import("../../../generated/prisma/models.js").Prisma__TransportTypeClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    findByName(name: string): import("../../../generated/prisma/models.js").Prisma__TransportTypeClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    create(dto: CreateTransportTypeDto): import("../../../generated/prisma/models.js").Prisma__TransportTypeClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    update(id: string, dto: UpdateTransportTypeDto): import("../../../generated/prisma/models.js").Prisma__TransportTypeClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
}
