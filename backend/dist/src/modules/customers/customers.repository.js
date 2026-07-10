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
let CustomersRepository = class CustomersRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.customer.findMany({
            include: { transportTypes: { include: { transportType: true } } },
            orderBy: { name: 'asc' },
        });
    }
    findById(id) {
        return this.prisma.customer.findUnique({
            where: { id },
            include: { transportTypes: { include: { transportType: true } } },
        });
    }
    findByDocument(document) {
        return this.prisma.customer.findUnique({ where: { document } });
    }
    create(dto) {
        return this.prisma.customer.create({
            data: dto,
            include: { transportTypes: { include: { transportType: true } } },
        });
    }
    update(id, dto) {
        return this.prisma.customer.update({
            where: { id },
            data: dto,
            include: { transportTypes: { include: { transportType: true } } },
        });
    }
    assignTransportType(customerId, transportTypeId) {
        return this.prisma.customerTransportType.create({
            data: { customerId, transportTypeId },
        });
    }
    removeTransportType(customerId, transportTypeId) {
        return this.prisma.customerTransportType.delete({
            where: { customerId_transportTypeId: { customerId, transportTypeId } },
        });
    }
    hasTransportType(customerId, transportTypeId) {
        return this.prisma.customerTransportType.findUnique({
            where: { customerId_transportTypeId: { customerId, transportTypeId } },
        });
    }
};
CustomersRepository = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CustomersRepository);
export { CustomersRepository };
//# sourceMappingURL=customers.repository.js.map