import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateScheduleDto } from './dto/create-schedule.dto.js';
export declare class SchedulingRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findBySalesOrderId(salesOrderId: string): import("../../../generated/prisma/models.js").Prisma__ScheduleClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deliveryDate: Date;
        windowStart: Date;
        windowEnd: Date;
        salesOrderId: string;
        confirmed: boolean;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    create(salesOrderId: string, dto: CreateScheduleDto): import("../../../generated/prisma/models.js").Prisma__ScheduleClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deliveryDate: Date;
        windowStart: Date;
        windowEnd: Date;
        salesOrderId: string;
        confirmed: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    update(salesOrderId: string, dto: Partial<CreateScheduleDto>): import("../../../generated/prisma/models.js").Prisma__ScheduleClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deliveryDate: Date;
        windowStart: Date;
        windowEnd: Date;
        salesOrderId: string;
        confirmed: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    confirm(salesOrderId: string): import("../../../generated/prisma/models.js").Prisma__ScheduleClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deliveryDate: Date;
        windowStart: Date;
        windowEnd: Date;
        salesOrderId: string;
        confirmed: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
}
