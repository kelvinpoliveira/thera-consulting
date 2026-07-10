import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateTransportTypeDto } from './dto/create-transport-type.dto.js';
import { UpdateTransportTypeDto } from './dto/update-transport-type.dto.js';

@Injectable()
export class TransportTypesRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.transportType.findMany({ orderBy: { name: 'asc' } });
  }

  findById(id: string) {
    return this.prisma.transportType.findUnique({ where: { id } });
  }

  findByName(name: string) {
    return this.prisma.transportType.findUnique({ where: { name } });
  }

  create(dto: CreateTransportTypeDto) {
    return this.prisma.transportType.create({ data: dto });
  }

  update(id: string, dto: UpdateTransportTypeDto) {
    return this.prisma.transportType.update({ where: { id }, data: dto });
  }
}
