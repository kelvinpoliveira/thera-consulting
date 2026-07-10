import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { TransportTypesService } from '../transport-types/transport-types.service.js';
import { CustomersRepository } from './customers.repository.js';
import { AssignTransportTypeDto } from './dto/assign-transport-type.dto.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';

@Injectable()
export class CustomersService {
  constructor(
    private readonly repository: CustomersRepository,
    private readonly transportTypesService: TransportTypesService,
  ) {}

  findAll() {
    return this.repository.findAll();
  }

  async findById(id: string) {
    const customer = await this.repository.findById(id);
    if (!customer) throw new NotFoundException(`Cliente ${id} não encontrado`);
    return customer;
  }

  async create(dto: CreateCustomerDto) {
    const existing = await this.repository.findByDocument(dto.document);
    if (existing) throw new ConflictException(`Documento "${dto.document}" já cadastrado`);
    return this.repository.create(dto);
  }

  async update(id: string, dto: UpdateCustomerDto) {
    await this.findById(id);
    return this.repository.update(id, dto);
  }

  async assignTransportType(id: string, dto: AssignTransportTypeDto) {
    await this.findById(id);
    await this.transportTypesService.findById(dto.transportTypeId);

    const existing = await this.repository.hasTransportType(id, dto.transportTypeId);
    if (existing) throw new ConflictException('Tipo de transporte já associado a este cliente');

    return this.repository.assignTransportType(id, dto.transportTypeId);
  }

  async removeTransportType(id: string, transportTypeId: string) {
    await this.findById(id);
    const existing = await this.repository.hasTransportType(id, transportTypeId);
    if (!existing) throw new NotFoundException('Associação não encontrada');
    return this.repository.removeTransportType(id, transportTypeId);
  }
}
