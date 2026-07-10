var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
const ORDER_INCLUDE = {
    customer: true,
    transportType: true,
    items: { include: { item: true } },
    schedule: true,
};
let SalesOrdersRepository = class SalesOrdersRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(filters) {
        const { status, customerId, transportTypeId, date } = filters;
        return this.prisma.salesOrder.findMany({
            where: {
                ...(status && { status }),
                ...(customerId && { customerId }),
                ...(transportTypeId && { transportTypeId }),
                ...(date && {
                    createdAt: {
                        gte: new Date(`${date}T00:00:00`),
                        lte: new Date(`${date}T23:59:59.999`),
                    },
                }),
            },
            include: ORDER_INCLUDE,
            orderBy: { createdAt: 'desc' },
        });
    }
    findById(id) {
        return this.prisma.salesOrder.findUnique({
            where: { id },
            include: ORDER_INCLUDE,
        });
    }
    async create(dto) {
        return this.prisma.$transaction(async (tx) => {
            const order = await tx.salesOrder.create({
                data: {
                    customerId: dto.customerId,
                    transportTypeId: dto.transportTypeId,
                    items: {
                        create: dto.items.map(({ itemId, quantity }) => ({
                            itemId,
                            quantity,
                        })),
                    },
                },
                include: ORDER_INCLUDE,
            });
            return order;
        });
    }
    updateStatus(id, status) {
        return this.prisma.salesOrder.update({
            where: { id },
            data: { status },
            include: ORDER_INCLUDE,
        });
    }
    updateTransportType(id, transportTypeId) {
        return this.prisma.salesOrder.update({
            where: { id },
            data: { transportTypeId },
            include: ORDER_INCLUDE,
        });
    }
};
SalesOrdersRepository = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], SalesOrdersRepository);
export { SalesOrdersRepository };
//# sourceMappingURL=sales-orders.repository.js.map