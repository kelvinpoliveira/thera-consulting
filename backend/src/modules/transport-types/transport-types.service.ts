import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransportTypeDto } from './dto/create-transport-type.dto.js';
import { UpdateTransportTypeDto } from './dto/update-transport-type.dto.js';
import { TransportTypesRepository } from './transport-types.repository.js';

@Injectable()
export class TransportTypesService {
  constructor(private readonly repository: TransportTypesRepository) {}

  findAll() {
    return this.repository.findAll();
  }

  async findById(id: string) {
    const transportType = await this.repository.findById(id);
    if (!transportType) throw new NotFoundException(`Tipo de transporte ${id} não encontrado`);
    return transportType;
  }

  async create(dto: CreateTransportTypeDto) {
    const existing = await this.repository.findByName(dto.name);
    if (existing) throw new ConflictException(`Tipo de transporte "${dto.name}" já existe`);
    return this.repository.create(dto);
  }

  async update(id: string, dto: UpdateTransportTypeDto) {
    await this.findById(id);
    if (dto.name) {
      const existing = await this.repository.findByName(dto.name);
      if (existing && existing.id !== id)
        throw new ConflictException(`Tipo de transporte "${dto.name}" já existe`);
    }
    return this.repository.update(id, dto);
  }
}
