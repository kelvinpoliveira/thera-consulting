import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateItemDto } from './dto/create-item.dto.js';

@Injectable()
export class ItemsRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.item.findMany({ orderBy: { name: 'asc' } });
  }

  findById(id: string) {
    return this.prisma.item.findUnique({ where: { id } });
  }

  findBySku(sku: string) {
    return this.prisma.item.findUnique({ where: { sku } });
  }

  findManyByIds(ids: string[]) {
    return this.prisma.item.findMany({ where: { id: { in: ids } } });
  }

  create(dto: CreateItemDto) {
    return this.prisma.item.create({ data: dto });
  }
}
