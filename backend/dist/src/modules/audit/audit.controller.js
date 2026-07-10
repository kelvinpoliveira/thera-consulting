var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuditRepository } from './audit.repository.js';
let AuditController = class AuditController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    findBySalesOrder(salesOrderId) {
        return this.repository.findBySalesOrder(salesOrderId);
    }
    findByEntity(entityType, entityId) {
        return this.repository.findByEntity(entityType, entityId);
    }
};
__decorate([
    Get('sales-orders/:salesOrderId'),
    ApiOperation({ summary: 'Buscar logs de auditoria de uma Ordem de Venda' }),
    __param(0, Param('salesOrderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuditController.prototype, "findBySalesOrder", null);
__decorate([
    Get(),
    ApiOperation({ summary: 'Buscar logs por tipo e ID da entidade' }),
    ApiQuery({ name: 'entityType', required: true, example: 'SalesOrder' }),
    ApiQuery({ name: 'entityId', required: true }),
    __param(0, Query('entityType')),
    __param(1, Query('entityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AuditController.prototype, "findByEntity", null);
AuditController = __decorate([
    ApiTags('Audit'),
    Controller('audit-logs'),
    __metadata("design:paramtypes", [AuditRepository])
], AuditController);
export { AuditController };
//# sourceMappingURL=audit.controller.js.map