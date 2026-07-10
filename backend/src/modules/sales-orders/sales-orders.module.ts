import { Module } from '@nestjs/common';
import { CustomersModule } from '../customers/customers.module.js';
import { ItemsModule } from '../items/items.module.js';
import { SalesOrdersController } from './sales-orders.controller.js';
import { SalesOrdersRepository } from './sales-orders.repository.js';
import { SalesOrdersService } from './sales-orders.service.js';

@Module({
  imports: [CustomersModule, ItemsModule],
  controllers: [SalesOrdersController],
  providers: [SalesOrdersService, SalesOrdersRepository],
  exports: [SalesOrdersService, SalesOrdersRepository],
})
export class SalesOrdersModule {}
