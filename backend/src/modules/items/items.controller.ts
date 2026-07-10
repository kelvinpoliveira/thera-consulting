import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto.js';
import { ItemsService } from './items.service.js';

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private readonly service: ItemsService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os itens' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar item por ID' })
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar item' })
  create(@Body() dto: CreateItemDto) {
    return this.service.create(dto);
  }
}
