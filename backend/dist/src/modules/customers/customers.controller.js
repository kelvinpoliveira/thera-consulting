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
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomersService } from './customers.service.js';
import { AssignTransportTypeDto } from './dto/assign-transport-type.dto.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';
let CustomersController = class CustomersController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findById(id) {
        return this.service.findById(id);
    }
    create(dto) {
        return this.service.create(dto);
    }
    update(id, dto) {
        return this.service.update(id, dto);
    }
    assignTransportType(id, dto) {
        return this.service.assignTransportType(id, dto);
    }
    removeTransportType(id, transportTypeId) {
        return this.service.removeTransportType(id, transportTypeId);
    }
};
__decorate([
    Get(),
    ApiOperation({ summary: 'Listar clientes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    ApiOperation({ summary: 'Buscar cliente por ID' }),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "findById", null);
__decorate([
    Post(),
    ApiOperation({ summary: 'Criar cliente' }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCustomerDto]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "create", null);
__decorate([
    Patch(':id'),
    ApiOperation({ summary: 'Atualizar cliente' }),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateCustomerDto]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "update", null);
__decorate([
    Post(':id/transport-types'),
    ApiOperation({ summary: 'Associar tipo de transporte ao cliente' }),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AssignTransportTypeDto]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "assignTransportType", null);
__decorate([
    Delete(':id/transport-types/:transportTypeId'),
    HttpCode(HttpStatus.NO_CONTENT),
    ApiOperation({ summary: 'Remover tipo de transporte do cliente' }),
    __param(0, Param('id')),
    __param(1, Param('transportTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "removeTransportType", null);
CustomersController = __decorate([
    ApiTags('Customers'),
    Controller('customers'),
    __metadata("design:paramtypes", [CustomersService])
], CustomersController);
export { CustomersController };
//# sourceMappingURL=customers.controller.js.map