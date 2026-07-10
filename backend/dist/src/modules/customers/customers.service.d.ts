import { TransportTypesService } from '../transport-types/transport-types.service.js';
import { CustomersRepository } from './customers.repository.js';
import { AssignTransportTypeDto } from './dto/assign-transport-type.dto.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';
export declare class CustomersService {
    private readonly repository;
    private readonly transportTypesService;
    constructor(repository: CustomersRepository, transportTypesService: TransportTypesService);
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
    findById(id: string): Promise<{
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
    }>;
    create(dto: CreateCustomerDto): Promise<{
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
    }>;
    update(id: string, dto: UpdateCustomerDto): Promise<{
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
    }>;
    assignTransportType(id: string, dto: AssignTransportTypeDto): Promise<{
        customerId: string;
        transportTypeId: string;
    }>;
    removeTransportType(id: string, transportTypeId: string): Promise<{
        customerId: string;
        transportTypeId: string;
    }>;
}
