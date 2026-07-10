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
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTransportTypeDto } from './dto/create-transport-type.dto.js';
import { UpdateTransportTypeDto } from './dto/update-transport-type.dto.js';
import { TransportTypesService } from './transport-types.service.js';
let TransportTypesController = class TransportTypesController {
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
};
__decorate([
    Get(),
    ApiOperation({ summary: 'Listar todos os tipos de transporte' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransportTypesController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    ApiOperation({ summary: 'Buscar tipo de transporte por ID' }),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransportTypesController.prototype, "findById", null);
__decorate([
    Post(),
    ApiOperation({ summary: 'Criar tipo de transporte' }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTransportTypeDto]),
    __metadata("design:returntype", void 0)
], TransportTypesController.prototype, "create", null);
__decorate([
    Patch(':id'),
    ApiOperation({ summary: 'Atualizar tipo de transporte' }),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateTransportTypeDto]),
    __metadata("design:returntype", void 0)
], TransportTypesController.prototype, "update", null);
TransportTypesController = __decorate([
    ApiTags('Transport Types'),
    Controller('transport-types'),
    __metadata("design:paramtypes", [TransportTypesService])
], TransportTypesController);
export { TransportTypesController };
//# sourceMappingURL=transport-types.controller.js.map