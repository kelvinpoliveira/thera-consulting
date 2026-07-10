import { EventEmitter2 } from '@nestjs/event-emitter';
import { SalesOrdersRepository } from '../sales-orders/sales-orders.repository.js';
import { CreateScheduleDto } from './dto/create-schedule.dto.js';
import { SchedulingRepository } from './scheduling.repository.js';
export declare class SchedulingService {
    private readonly repository;
    private readonly salesOrdersRepository;
    private readonly eventEmitter;
    constructor(repository: SchedulingRepository, salesOrdersRepository: SalesOrdersRepository, eventEmitter: EventEmitter2);
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
    private validateWindow;
}
