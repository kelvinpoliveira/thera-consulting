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
import { Body, Controller, Get, Param, Patch, Post, Query, } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto.js';
import { FilterSalesOrdersDto } from './dto/filter-sales-orders.dto.js';
import { UpdateStatusDto } from './dto/update-status.dto.js';
import { UpdateTransportTypeDto } from './dto/update-transport-type.dto.js';
import { SalesOrdersService } from './sales-orders.service.js';
let SalesOrdersController = class SalesOrdersController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll(filters) {
        return this.service.findAll(filters);
    }
    findById(id) {
        return this.service.findById(id);
    }
    create(dto) {
        return this.service.create(dto);
    }
    updateStatus(id, dto) {
        return this.service.updateStatus(id, dto);
    }
    updateTransportType(id, dto) {
        return this.service.updateTransportType(id, dto);
    }
};
__decorate([
    Get(),
    ApiOperation({ summary: 'Listar Ordens de Venda (com filtros)' }),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterSalesOrdersDto]),
    __metadata("design:returntype", void 0)
], SalesOrdersController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    ApiOperation({ summary: 'Buscar Ordem de Venda por ID' }),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalesOrdersController.prototype, "findById", null);
__decorate([
    Post(),
    ApiOperation({ summary: 'Criar Ordem de Venda' }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateSalesOrderDto]),
    __metadata("design:returntype", void 0)
], SalesOrdersController.prototype, "create", null);
__decorate([
    Patch(':id/status'),
    ApiOperation({ summary: 'Atualizar status da Ordem de Venda' }),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateStatusDto]),
    __metadata("design:returntype", void 0)
], SalesOrdersController.prototype, "updateStatus", null);
__decorate([
    Patch(':id/transport'),
    ApiOperation({ summary: 'Alterar tipo de transporte da Ordem de Venda' }),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateTransportTypeDto]),
    __metadata("design:returntype", void 0)
], SalesOrdersController.prototype, "updateTransportType", null);
SalesOrdersController = __decorate([
    ApiTags('Sales Orders'),
    Controller('sales-orders'),
    __metadata("design:paramtypes", [SalesOrdersService])
], SalesOrdersController);
export { SalesOrdersController };
//# sourceMappingURL=sales-orders.controller.js.map