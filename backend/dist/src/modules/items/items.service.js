var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ItemsRepository } from './items.repository.js';
let ItemsService = class ItemsService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    findAll() {
        return this.repository.findAll();
    }
    async findById(id) {
        const item = await this.repository.findById(id);
        if (!item)
            throw new NotFoundException(`Item ${id} não encontrado`);
        return item;
    }
    async create(dto) {
        const existing = await this.repository.findBySku(dto.sku);
        if (existing)
            throw new ConflictException(`SKU "${dto.sku}" já cadastrado`);
        return this.repository.create(dto);
    }
};
ItemsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ItemsRepository])
], ItemsService);
export { ItemsService };
//# sourceMappingURL=items.service.js.map