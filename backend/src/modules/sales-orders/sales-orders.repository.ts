import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { OrderStatus } from '../../../generated/prisma/client.js';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto.js';
import { FilterSalesOrdersDto } from './dto/filter-sales-orders.dto.js';

const ORDER_INCLUDE = {
  customer: true,
  transportType: true,
  items: { include: { item: true } },
  schedule: true,
};

@Injectable()
export class SalesOrdersRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(filters: FilterSalesOrdersDto) {
    const { status, customerId, transportTypeId, date } = filters;
    return this.prisma.salesOrder.findMany({
      where: {
        ...(status && { status }),
        ...(customerId && { customerId }),
        ...(transportTypeId && { transportTypeId }),
        ...(date && {
          createdAt: {
            gte: new Date(`${date}T00:00:00`),
            lte: new Date(`${date}T23:59:59.999`),
          },
        }),
      },
      include: ORDER_INCLUDE,
      orderBy: { createdAt: 'desc' },
    });
  }

  findById(id: string) {
    return this.prisma.salesOrder.findUnique({
      where: { id },
      include: ORDER_INCLUDE,
    });
  }

  async create(dto: CreateSalesOrderDto) {
    return this.prisma.$transaction(async (tx) => {
      const order = await tx.salesOrder.create({
        data: {
          customerId: dto.customerId,
          transportTypeId: dto.transportTypeId,
          items: {
            create: dto.items.map(({ itemId, quantity }) => ({
              itemId,
              quantity,
            })),
          },
        },
        include: ORDER_INCLUDE,
      });
      return order;
    });
  }

  updateStatus(id: string, status: OrderStatus) {
    return this.prisma.salesOrder.update({
      where: { id },
      data: { status },
      include: ORDER_INCLUDE,
    });
  }

  updateTransportType(id: string, transportTypeId: string) {
    return this.prisma.salesOrder.update({
      where: { id },
      data: { transportTypeId },
      include: ORDER_INCLUDE,
    });
  }
}
