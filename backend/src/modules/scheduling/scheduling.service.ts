import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { OrderStatus } from '../../../generated/prisma/enums.js';
import { SalesOrdersRepository } from '../sales-orders/sales-orders.repository.js';
import { CreateScheduleDto } from './dto/create-schedule.dto.js';
import { SchedulingRepository } from './scheduling.repository.js';

@Injectable()
export class SchedulingService {
  constructor(
    private readonly repository: SchedulingRepository,
    private readonly salesOrdersRepository: SalesOrdersRepository,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async getSchedule(salesOrderId: string) {
    const schedule = await this.repository.findBySalesOrderId(salesOrderId);
    if (!schedule) throw new NotFoundException('Agendamento não encontrado para esta OV');
    return schedule;
  }

  async create(salesOrderId: string, dto: CreateScheduleDto) {
    const order = await this.salesOrdersRepository.findById(salesOrderId);
    if (!order) throw new NotFoundException(`Ordem de Venda ${salesOrderId} não encontrada`);

    if (order.status !== OrderStatus.PLANEJADA) {
      throw new BadRequestException(
        `Agendamento só pode ser criado para OVs no status PLANEJADA. Status atual: ${order.status}`,
      );
    }

    if (order.schedule) {
      throw new BadRequestException('Esta OV já possui agendamento. Use o endpoint de reagendamento.');
    }

    this.validateWindow(dto);

    const schedule = await this.repository.create(salesOrderId, dto);

    this.eventEmitter.emit('schedule.created', { salesOrderId, schedule });

    return schedule;
  }

  async reschedule(salesOrderId: string, dto: CreateScheduleDto) {
    const order = await this.salesOrdersRepository.findById(salesOrderId);
    if (!order) throw new NotFoundException(`Ordem de Venda ${salesOrderId} não encontrada`);

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

  async confirm(salesOrderId: string) {
    const schedule = await this.repository.findBySalesOrderId(salesOrderId);
    if (!schedule) throw new NotFoundException('Agendamento não encontrado para esta OV');
    if (schedule.confirmed) throw new BadRequestException('Agendamento já confirmado');

    return this.repository.confirm(salesOrderId);
  }

  private validateWindow(dto: CreateScheduleDto) {
    if (dto.windowEnd <= dto.windowStart) {
      throw new BadRequestException('O fim da janela de atendimento deve ser posterior ao início');
    }
  }
}
