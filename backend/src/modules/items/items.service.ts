import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto.js';
import { ItemsRepository } from './items.repository.js';

@Injectable()
export class ItemsService {
  constructor(private readonly repository: ItemsRepository) {}

  findAll() {
    return this.repository.findAll();
  }

  async findById(id: string) {
    const item = await this.repository.findById(id);
    if (!item) throw new NotFoundException(`Item ${id} não encontrado`);
    return item;
  }

  async create(dto: CreateItemDto) {
    const existing = await this.repository.findBySku(dto.sku);
    if (existing) throw new ConflictException(`SKU "${dto.sku}" já cadastrado`);
    return this.repository.create(dto);
  }
}
