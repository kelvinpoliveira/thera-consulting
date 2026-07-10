import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTransportTypeDto } from './dto/create-transport-type.dto.js';
import { UpdateTransportTypeDto } from './dto/update-transport-type.dto.js';
import { TransportTypesService } from './transport-types.service.js';

@ApiTags('Transport Types')
@Controller('transport-types')
export class TransportTypesController {
  constructor(private readonly service: TransportTypesService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os tipos de transporte' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar tipo de transporte por ID' })
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar tipo de transporte' })
  create(@Body() dto: CreateTransportTypeDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar tipo de transporte' })
  update(@Param('id') id: string, @Body() dto: UpdateTransportTypeDto) {
    return this.service.update(id, dto);
  }
}
