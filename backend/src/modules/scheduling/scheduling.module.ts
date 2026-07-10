import { Module } from '@nestjs/common';
import { SalesOrdersModule } from '../sales-orders/sales-orders.module.js';
import { SchedulingController } from './scheduling.controller.js';
import { SchedulingRepository } from './scheduling.repository.js';
import { SchedulingService } from './scheduling.service.js';

@Module({
  imports: [SalesOrdersModule],
  controllers: [SchedulingController],
  providers: [SchedulingService, SchedulingRepository],
})
export class SchedulingModule {}
