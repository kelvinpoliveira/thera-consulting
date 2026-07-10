import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomersService } from './customers.service.js';
import { AssignTransportTypeDto } from './dto/assign-transport-type.dto.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly service: CustomersService) {}

  @Get()
  @ApiOperation({ summary: 'Listar clientes' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar cliente por ID' })
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar cliente' })
  create(@Body() dto: CreateCustomerDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar cliente' })
  update(@Param('id') id: string, @Body() dto: UpdateCustomerDto) {
    return this.service.update(id, dto);
  }

  @Post(':id/transport-types')
  @ApiOperation({ summary: 'Associar tipo de transporte ao cliente' })
  assignTransportType(@Param('id') id: string, @Body() dto: AssignTransportTypeDto) {
    return this.service.assignTransportType(id, dto);
  }

  @Delete(':id/transport-types/:transportTypeId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover tipo de transporte do cliente' })
  removeTransportType(@Param('id') id: string, @Param('transportTypeId') transportTypeId: string) {
    return this.service.removeTransportType(id, transportTypeId);
  }
}
