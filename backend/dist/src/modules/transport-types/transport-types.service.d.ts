import { CreateTransportTypeDto } from './dto/create-transport-type.dto.js';
import { UpdateTransportTypeDto } from './dto/update-transport-type.dto.js';
import { TransportTypesRepository } from './transport-types.repository.js';
export declare class TransportTypesService {
    private readonly repository;
    constructor(repository: TransportTypesRepository);
    findAll(): import("../../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }[]>;
    findById(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }>;
    create(dto: CreateTransportTypeDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }>;
    update(id: string, dto: UpdateTransportTypeDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }>;
}
