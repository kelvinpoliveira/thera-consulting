var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CustomersRepository } from '../customers/customers.repository.js';
import { ItemsRepository } from '../items/items.repository.js';
import { SalesOrdersRepository } from './sales-orders.repository.js';
import { assertValidTransition } from './state-machine/order-state-machine.js';
let SalesOrdersService = class SalesOrdersService {
    repository;
    customersRepository;
    itemsRepository;
    eventEmitter;
    constructor(repository, customersRepository, itemsRepository, eventEmitter) {
        this.repository = repository;
        this.customersRepository = customersRepository;
        this.itemsRepository = itemsRepository;
        this.eventEmitter = eventEmitter;
    }
    findAll(filters) {
        return this.repository.findAll(filters);
    }
    async findById(id) {
        const order = await this.repository.findById(id);
        if (!order)
            throw new NotFoundException(`Ordem de Venda ${id} não encontrada`);
        return order;
    }
    async create(dto) {
        const authorized = await this.customersRepository.hasTransportType(dto.customerId, dto.transportTypeId);
        if (!authorized) {
            throw new BadRequestException('Tipo de transporte não autorizado para este cliente');
        }
        const itemIds = dto.items.map((i) => i.itemId);
        if (new Set(itemIds).size !== itemIds.length) {
            throw new BadRequestException('A lista de itens contém entradas duplicadas');
        }
        const foundItems = await this.itemsRepository.findManyByIds(itemIds);
        if (foundItems.length !== itemIds.length) {
            throw new BadRequestException('Um ou mais itens informados não existem');
        }
        const order = await this.repository.create(dto);
        this.eventEmitter.emit('order.created', { orderId: order.id, order });
        return order;
    }
    async updateStatus(id, dto) {
        const order = await this.findById(id);
        assertValidTransition(order.status, dto.status);
        const updated = await this.repository.updateStatus(id, dto.status);
        this.eventEmitter.emit('order.status.changed', {
            orderId: id,
            previousStatus: order.status,
            currentStatus: dto.status,
        });
        return updated;
    }
    async updateTransportType(id, dto) {
        const order = await this.findById(id);
        if (order.status !== 'CRIADA') {
            throw new BadRequestException('O tipo de transporte só pode ser alterado em ordens com status CRIADA');
        }
        const authorized = await this.customersRepository.hasTransportType(order.customerId, dto.transportTypeId);
        if (!authorized) {
            throw new BadRequestException('Tipo de transporte não autorizado para este cliente');
        }
        const updated = await this.repository.updateTransportType(id, dto.transportTypeId);
        this.eventEmitter.emit('order.transport.changed', {
            orderId: id,
            previousTransportTypeId: order.transportTypeId,
            currentTransportTypeId: dto.transportTypeId,
        });
        return updated;
    }
};
SalesOrdersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [SalesOrdersRepository,
        CustomersRepository,
        ItemsRepository,
        EventEmitter2])
], SalesOrdersService);
export { SalesOrdersService };
//# sourceMappingURL=sales-orders.service.js.map