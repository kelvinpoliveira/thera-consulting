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
import { TransportTypesRepository } from './transport-types.repository.js';
let TransportTypesService = class TransportTypesService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    findAll() {
        return this.repository.findAll();
    }
    async findById(id) {
        const transportType = await this.repository.findById(id);
        if (!transportType)
            throw new NotFoundException(`Tipo de transporte ${id} não encontrado`);
        return transportType;
    }
    async create(dto) {
        const existing = await this.repository.findByName(dto.name);
        if (existing)
            throw new ConflictException(`Tipo de transporte "${dto.name}" já existe`);
        return this.repository.create(dto);
    }
    async update(id, dto) {
        await this.findById(id);
        if (dto.name) {
            const existing = await this.repository.findByName(dto.name);
            if (existing && existing.id !== id)
                throw new ConflictException(`Tipo de transporte "${dto.name}" já existe`);
        }
        return this.repository.update(id, dto);
    }
};
TransportTypesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [TransportTypesRepository])
], TransportTypesService);
export { TransportTypesService };
//# sourceMappingURL=transport-types.service.js.map