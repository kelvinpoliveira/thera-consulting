import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateScheduleDto } from './dto/create-schedule.dto.js';
import { SchedulingService } from './scheduling.service.js';

@ApiTags('Scheduling')
@Controller('sales-orders/:salesOrderId/schedule')
export class SchedulingController {
  constructor(private readonly service: SchedulingService) {}

  @Get()
  @ApiOperation({ summary: 'Consultar agendamento da OV' })
  getSchedule(@Param('salesOrderId') salesOrderId: string) {
    return this.service.getSchedule(salesOrderId);
  }

  @Post()
  @ApiOperation({ summary: 'Criar agendamento para a OV (requer status PLANEJADA)' })
  create(@Param('salesOrderId') salesOrderId: string, @Body() dto: CreateScheduleDto) {
    return this.service.create(salesOrderId, dto);
  }

  @Put()
  @ApiOperation({ summary: 'Reagendar entrega' })
  reschedule(@Param('salesOrderId') salesOrderId: string, @Body() dto: CreateScheduleDto) {
    return this.service.reschedule(salesOrderId, dto);
  }

  @Patch('confirm')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Confirmar agendamento' })
  confirm(@Param('salesOrderId') salesOrderId: string) {
    return this.service.confirm(salesOrderId);
  }
}
