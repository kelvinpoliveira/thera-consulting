var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { CustomersModule } from '../customers/customers.module.js';
import { ItemsModule } from '../items/items.module.js';
import { SalesOrdersController } from './sales-orders.controller.js';
import { SalesOrdersRepository } from './sales-orders.repository.js';
import { SalesOrdersService } from './sales-orders.service.js';
let SalesOrdersModule = class SalesOrdersModule {
};
SalesOrdersModule = __decorate([
    Module({
        imports: [CustomersModule, ItemsModule],
        controllers: [SalesOrdersController],
        providers: [SalesOrdersService, SalesOrdersRepository],
        exports: [SalesOrdersService, SalesOrdersRepository],
    })
], SalesOrdersModule);
export { SalesOrdersModule };
//# sourceMappingURL=sales-orders.module.js.map