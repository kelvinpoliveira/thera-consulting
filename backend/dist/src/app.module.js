var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { LoggerModule } from 'nestjs-pino';
import { PrismaModule } from './prisma/prisma.module.js';
import { TransportTypesModule } from './modules/transport-types/transport-types.module.js';
import { ItemsModule } from './modules/items/items.module.js';
import { CustomersModule } from './modules/customers/customers.module.js';
import { SalesOrdersModule } from './modules/sales-orders/sales-orders.module.js';
import { SchedulingModule } from './modules/scheduling/scheduling.module.js';
import { AuditModule } from './modules/audit/audit.module.js';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module.js';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard.js';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            LoggerModule.forRoot({
                pinoHttp: {
                    transport: process.env.NODE_ENV !== 'production'
                        ? { target: 'pino-pretty', options: { colorize: true } }
                        : undefined,
                },
            }),
            EventEmitterModule.forRoot(),
            PrismaModule,
            TransportTypesModule,
            ItemsModule,
            CustomersModule,
            SalesOrdersModule,
            SchedulingModule,
            AuditModule,
            AuthModule,
        ],
        providers: [
            {
                provide: APP_GUARD,
                useClass: JwtAuthGuard,
            },
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map