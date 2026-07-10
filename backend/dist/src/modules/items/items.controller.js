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
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto.js';
import { ItemsService } from './items.service.js';
let ItemsController = class ItemsController {
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
};
__decorate([
    Get(),
    ApiOperation({ summary: 'Listar todos os itens' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    ApiOperation({ summary: 'Buscar item por ID' }),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "findById", null);
__decorate([
    Post(),
    ApiOperation({ summary: 'Criar item' }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateItemDto]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "create", null);
ItemsController = __decorate([
    ApiTags('Items'),
    Controller('items'),
    __metadata("design:paramtypes", [ItemsService])
], ItemsController);
export { ItemsController };
//# sourceMappingURL=items.controller.js.map