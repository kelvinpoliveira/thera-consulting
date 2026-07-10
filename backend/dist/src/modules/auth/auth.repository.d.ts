import { PrismaService } from '../../prisma/prisma.service.js';
export declare class AuthRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
