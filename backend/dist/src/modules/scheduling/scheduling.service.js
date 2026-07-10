var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { OrderStatus } from '../../../generated/prisma/enums.js';
import { SalesOrdersRepository } from '../sales-orders/sales-orders.repository.js';
import { SchedulingRepository } from './scheduling.repository.js';
let SchedulingService = class SchedulingService {
    repository;
    salesOrdersRepository;
    eventEmitter;
    constructor(repository, salesOrdersRepository, eventEmitter) {
        this.repository = repository;
        this.salesOrdersRepository = salesOrdersRepository;
        this.eventEmitter = eventEmitter;
    }
    async getSchedule(salesOrderId) {
        const schedule = await this.repository.findBySalesOrderId(salesOrderId);
        if (!schedule)
            throw new NotFoundException('Agendamento não encontrado para esta OV');
        return schedule;
    }
    async create(salesOrderId, dto) {
        const order = await this.salesOrdersRepository.findById(salesOrderId);
        if (!order)
            throw new NotFoundException(`Ordem de Venda ${salesOrderId} não encontrada`);
        if (order.status !== OrderStatus.PLANEJADA) {
            throw new BadRequestException(`Agendamento só pode ser criado para OVs no status PLANEJADA. Status atual: ${order.status}`);
        }
        if (order.schedule) {
            throw new BadRequestException('Esta OV já possui agendamento. Use o endpoint de reagendamento.');
        }
        this.validateWindow(dto);
        const schedule = await this.repository.create(salesOrderId, dto);
        this.eventEmitter.emit('schedule.created', { salesOrderId, schedule });
        return schedule;
    }
    async reschedule(salesOrderId, dto) {
        const order = await this.salesOrdersRepository.findById(salesOrderId);
        if (!order)
            throw new NotFoundException(`Ordem de Venda ${salesOrderId} não encontrada`);
        if (!order.schedule) {
            throw new BadRequestException('Esta OV não possui agendamento. Use o endpoint de criação.');
        }
        if (order.status === OrderStatus.ENTREGUE || order.status === OrderStatus.EM_TRANSPORTE) {
            throw new BadRequestException(`Não é possível reagendar uma OV com status ${order.status}`);
        }
        this.validateWindow(dto);
        const previous = order.schedule;
        const schedule = await this.repository.update(salesOrderId, dto);
        this.eventEmitter.emit('schedule.changed', { salesOrderId, previous, current: schedule });
        return schedule;
    }
    async confirm(salesOrderId) {
        const schedule = await this.repository.findBySalesOrderId(salesOrderId);
        if (!schedule)
            throw new NotFoundException('Agendamento não encontrado para esta OV');
        if (schedule.confirmed)
            throw new BadRequestException('Agendamento já confirmado');
        return this.repository.confirm(salesOrderId);
    }
    validateWindow(dto) {
        if (dto.windowEnd <= dto.windowStart) {
            throw new BadRequestException('O fim da janela de atendimento deve ser posterior ao início');
        }
    }
};
SchedulingService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [SchedulingRepository,
        SalesOrdersRepository,
        EventEmitter2])
], SchedulingService);
export { SchedulingService };
//# sourceMappingURL=scheduling.service.js.map