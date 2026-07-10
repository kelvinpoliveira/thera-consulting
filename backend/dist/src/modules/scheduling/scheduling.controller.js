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
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateScheduleDto } from './dto/create-schedule.dto.js';
import { SchedulingService } from './scheduling.service.js';
let SchedulingController = class SchedulingController {
    service;
    constructor(service) {
        this.service = service;
    }
    getSchedule(salesOrderId) {
        return this.service.getSchedule(salesOrderId);
    }
    create(salesOrderId, dto) {
        return this.service.create(salesOrderId, dto);
    }
    reschedule(salesOrderId, dto) {
        return this.service.reschedule(salesOrderId, dto);
    }
    confirm(salesOrderId) {
        return this.service.confirm(salesOrderId);
    }
};
__decorate([
    Get(),
    ApiOperation({ summary: 'Consultar agendamento da OV' }),
    __param(0, Param('salesOrderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SchedulingController.prototype, "getSchedule", null);
__decorate([
    Post(),
    ApiOperation({ summary: 'Criar agendamento para a OV (requer status PLANEJADA)' }),
    __param(0, Param('salesOrderId')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateScheduleDto]),
    __metadata("design:returntype", void 0)
], SchedulingController.prototype, "create", null);
__decorate([
    Put(),
    ApiOperation({ summary: 'Reagendar entrega' }),
    __param(0, Param('salesOrderId')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateScheduleDto]),
    __metadata("design:returntype", void 0)
], SchedulingController.prototype, "reschedule", null);
__decorate([
    Patch('confirm'),
    HttpCode(HttpStatus.OK),
    ApiOperation({ summary: 'Confirmar agendamento' }),
    __param(0, Param('salesOrderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SchedulingController.prototype, "confirm", null);
SchedulingController = __decorate([
    ApiTags('Scheduling'),
    Controller('sales-orders/:salesOrderId/schedule'),
    __metadata("design:paramtypes", [SchedulingService])
], SchedulingController);
export { SchedulingController };
//# sourceMappingURL=scheduling.controller.js.map