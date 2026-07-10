import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateScheduleDto } from './dto/create-schedule.dto.js';

@Injectable()
export class SchedulingRepository {
  constructor(private readonly prisma: PrismaService) {}

  findBySalesOrderId(salesOrderId: string) {
    return this.prisma.schedule.findUnique({ where: { salesOrderId } });
  }

  create(salesOrderId: string, dto: CreateScheduleDto) {
    return this.prisma.schedule.create({
      data: { salesOrderId, ...dto },
    });
  }

  update(salesOrderId: string, dto: Partial<CreateScheduleDto>) {
    return this.prisma.schedule.update({
      where: { salesOrderId },
      data: { ...dto, confirmed: false }, // reagendamento desmarca a confirmação
    });
  }

  confirm(salesOrderId: string) {
    return this.prisma.schedule.update({
      where: { salesOrderId },
      data: { confirmed: true },
    });
  }
}
