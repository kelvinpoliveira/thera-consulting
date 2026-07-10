import { CreateScheduleDto } from './dto/create-schedule.dto.js';
import { SchedulingService } from './scheduling.service.js';
export declare class SchedulingController {
    private readonly service;
    constructor(service: SchedulingService);
    getSchedule(salesOrderId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deliveryDate: Date;
        windowStart: Date;
        windowEnd: Date;
        salesOrderId: string;
        confirmed: boolean;
    }>;
    create(salesOrderId: string, dto: CreateScheduleDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deliveryDate: Date;
        windowStart: Date;
        windowEnd: Date;
        salesOrderId: string;
        confirmed: boolean;
    }>;
    reschedule(salesOrderId: string, dto: CreateScheduleDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deliveryDate: Date;
        windowStart: Date;
        windowEnd: Date;
        salesOrderId: string;
        confirmed: boolean;
    }>;
    confirm(salesOrderId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deliveryDate: Date;
        windowStart: Date;
        windowEnd: Date;
        salesOrderId: string;
        confirmed: boolean;
    }>;
}
