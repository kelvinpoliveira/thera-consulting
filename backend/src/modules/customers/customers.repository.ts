import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';

@Injectable()
export class CustomersRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.customer.findMany({
      include: { transportTypes: { include: { transportType: true } } },
      orderBy: { name: 'asc' },
    });
  }

  findById(id: string) {
    return this.prisma.customer.findUnique({
      where: { id },
      include: { transportTypes: { include: { transportType: true } } },
    });
  }

  findByDocument(document: string) {
    return this.prisma.customer.findUnique({ where: { document } });
  }

  create(dto: CreateCustomerDto) {
    return this.prisma.customer.create({
      data: dto,
      include: { transportTypes: { include: { transportType: true } } },
    });
  }

  update(id: string, dto: UpdateCustomerDto) {
    return this.prisma.customer.update({
      where: { id },
      data: dto,
      include: { transportTypes: { include: { transportType: true } } },
    });
  }

  assignTransportType(customerId: string, transportTypeId: string) {
    return this.prisma.customerTransportType.create({
      data: { customerId, transportTypeId },
    });
  }

  removeTransportType(customerId: string, transportTypeId: string) {
    return this.prisma.customerTransportType.delete({
      where: { customerId_transportTypeId: { customerId, transportTypeId } },
    });
  }

  hasTransportType(customerId: string, transportTypeId: string) {
    return this.prisma.customerTransportType.findUnique({
      where: { customerId_transportTypeId: { customerId, transportTypeId } },
    });
  }
}
