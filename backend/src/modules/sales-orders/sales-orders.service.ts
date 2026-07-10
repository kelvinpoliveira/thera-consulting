import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CustomersRepository } from '../customers/customers.repository.js';
import { ItemsRepository } from '../items/items.repository.js';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto.js';
import { FilterSalesOrdersDto } from './dto/filter-sales-orders.dto.js';
import { UpdateStatusDto } from './dto/update-status.dto.js';
import { UpdateTransportTypeDto } from './dto/update-transport-type.dto.js';
import { SalesOrdersRepository } from './sales-orders.repository.js';
import { assertValidTransition } from './state-machine/order-state-machine.js';

@Injectable()
export class SalesOrdersService {
  constructor(
    private readonly repository: SalesOrdersRepository,
    private readonly customersRepository: CustomersRepository,
    private readonly itemsRepository: ItemsRepository,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  findAll(filters: FilterSalesOrdersDto) {
    return this.repository.findAll(filters);
  }

  async findById(id: string) {
    const order = await this.repository.findById(id);
    if (!order)
      throw new NotFoundException(`Ordem de Venda ${id} não encontrada`);
    return order;
  }

  async create(dto: CreateSalesOrderDto) {
    const authorized = await this.customersRepository.hasTransportType(
      dto.customerId,
      dto.transportTypeId,
    );
    if (!authorized) {
      throw new BadRequestException(
        'Tipo de transporte não autorizado para este cliente',
      );
    }

    const itemIds = dto.items.map((i) => i.itemId);
    if (new Set(itemIds).size !== itemIds.length) {
      throw new BadRequestException(
        'A lista de itens contém entradas duplicadas',
      );
    }

    const foundItems = await this.itemsRepository.findManyByIds(itemIds);
    if (foundItems.length !== itemIds.length) {
      throw new BadRequestException('Um ou mais itens informados não existem');
    }

    const order = await this.repository.create(dto);

    this.eventEmitter.emit('order.created', { orderId: order.id, order });

    return order;
  }

  async updateStatus(id: string, dto: UpdateStatusDto) {
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

  async updateTransportType(id: string, dto: UpdateTransportTypeDto) {
    const order = await this.findById(id);

    if (order.status !== 'CRIADA') {
      throw new BadRequestException(
        'O tipo de transporte só pode ser alterado em ordens com status CRIADA',
      );
    }

    const authorized = await this.customersRepository.hasTransportType(
      order.customerId,
      dto.transportTypeId,
    );
    if (!authorized) {
      throw new BadRequestException(
        'Tipo de transporte não autorizado para este cliente',
      );
    }

    const updated = await this.repository.updateTransportType(
      id,
      dto.transportTypeId,
    );

    this.eventEmitter.emit('order.transport.changed', {
      orderId: id,
      previousTransportTypeId: order.transportTypeId,
      currentTransportTypeId: dto.transportTypeId,
    });

    return updated;
  }
}
