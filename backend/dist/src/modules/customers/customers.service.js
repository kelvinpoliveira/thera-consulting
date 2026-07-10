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
import { TransportTypesService } from '../transport-types/transport-types.service.js';
import { CustomersRepository } from './customers.repository.js';
let CustomersService = class CustomersService {
    repository;
    transportTypesService;
    constructor(repository, transportTypesService) {
        this.repository = repository;
        this.transportTypesService = transportTypesService;
    }
    findAll() {
        return this.repository.findAll();
    }
    async findById(id) {
        const customer = await this.repository.findById(id);
        if (!customer)
            throw new NotFoundException(`Cliente ${id} não encontrado`);
        return customer;
    }
    async create(dto) {
        const existing = await this.repository.findByDocument(dto.document);
        if (existing)
            throw new ConflictException(`Documento "${dto.document}" já cadastrado`);
        return this.repository.create(dto);
    }
    async update(id, dto) {
        await this.findById(id);
        return this.repository.update(id, dto);
    }
    async assignTransportType(id, dto) {
        await this.findById(id);
        await this.transportTypesService.findById(dto.transportTypeId);
        const existing = await this.repository.hasTransportType(id, dto.transportTypeId);
        if (existing)
            throw new ConflictException('Tipo de transporte já associado a este cliente');
        return this.repository.assignTransportType(id, dto.transportTypeId);
    }
    async removeTransportType(id, transportTypeId) {
        await this.findById(id);
        const existing = await this.repository.hasTransportType(id, transportTypeId);
        if (!existing)
            throw new NotFoundException('Associação não encontrada');
        return this.repository.removeTransportType(id, transportTypeId);
    }
};
CustomersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CustomersRepository,
        TransportTypesService])
], CustomersService);
export { CustomersService };
//# sourceMappingURL=customers.service.js.map