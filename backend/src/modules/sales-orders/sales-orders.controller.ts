import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto.js';
import { FilterSalesOrdersDto } from './dto/filter-sales-orders.dto.js';
import { UpdateStatusDto } from './dto/update-status.dto.js';
import { UpdateTransportTypeDto } from './dto/update-transport-type.dto.js';
import { SalesOrdersService } from './sales-orders.service.js';

@ApiTags('Sales Orders')
@Controller('sales-orders')
export class SalesOrdersController {
  constructor(private readonly service: SalesOrdersService) {}

  @Get()
  @ApiOperation({ summary: 'Listar Ordens de Venda (com filtros)' })
  findAll(@Query() filters: FilterSalesOrdersDto) {
    return this.service.findAll(filters);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar Ordem de Venda por ID' })
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar Ordem de Venda' })
  create(@Body() dto: CreateSalesOrderDto) {
    return this.service.create(dto);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Atualizar status da Ordem de Venda' })
  updateStatus(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.service.updateStatus(id, dto);
  }

  @Patch(':id/transport')
  @ApiOperation({ summary: 'Alterar tipo de transporte da Ordem de Venda' })
  updateTransportType(
    @Param('id') id: string,
    @Body() dto: UpdateTransportTypeDto,
  ) {
    return this.service.updateTransportType(id, dto);
  }
}
